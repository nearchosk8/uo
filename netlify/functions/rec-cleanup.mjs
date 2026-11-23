// Daily retention job: deletes session recordings older than 90 days from the
// "recordings" Blobs store (see rec.mjs). Age is taken from each record's
// receivedAt. Keys look like "<sessionId>/<Date.now()>-<rand>", written in the
// same request as receivedAt, so blobs whose key timestamp is clearly newer
// than the cutoff are skipped without downloading them.
import { getStore } from "@netlify/blobs";

const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;
const KEY_MARGIN_MS = 60 * 60 * 1000; // only trust the key timestamp with a 1h margin

const keyTime = (key) => {
  const m = /\/(\d{13})-[0-9a-z]+$/.exec(key);
  return m ? Number(m[1]) : null;
};

export default async () => {
  const store = getStore("recordings");
  const cutoff = Date.now() - MAX_AGE_MS;
  let checked = 0, deleted = 0, kept = 0, invalid = 0;

  for await (const page of store.list({ paginate: true })) {
    for (const { key } of page.blobs) {
      checked++;
      const kt = keyTime(key);
      if (kt !== null && kt > cutoff + KEY_MARGIN_MS) { kept++; continue; }

      const record = await store.get(key, { type: "json" }).catch(() => null);
      const receivedAt = Date.parse(record?.receivedAt ?? "");
      if (Number.isNaN(receivedAt)) {
        // unreadable or missing receivedAt: leave it and report, don't guess
        invalid++;
        console.warn(`rec-cleanup: no valid receivedAt for ${key}, skipped`);
        continue;
      }
      if (receivedAt < cutoff) {
        await store.delete(key);
        deleted++;
      } else {
        kept++;
      }
    }
  }

  console.log(
    `rec-cleanup: deleted ${deleted} recording(s) older than 90 days ` +
      `(checked ${checked}, kept ${kept}, skipped without valid receivedAt ${invalid}; cutoff ${new Date(cutoff).toISOString()})`
  );
};

export const config = { schedule: "@daily" };
