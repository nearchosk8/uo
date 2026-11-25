// Daily retention job: deletes session recordings from the "recordings" Blobs
// store (see rec.mjs) once they pass their retention period. Age is taken from
// each record's receivedAt. Keys look like "<sessionId>/<Date.now()>-<rand>",
// written in the same request as receivedAt, so blobs whose key timestamp shows
// they are clearly within retention are skipped without downloading them.
import { getStore } from "@netlify/blobs";

const DAY_MS = 24 * 60 * 60 * 1000;
// Retention went from 90 days to 12 months on 2026-11-26. Recordings received
// before then were consented under the "deleted after 90 days" text, so they
// keep the 90-day period; recordings received from then on are kept 365 days.
const NEW_RETENTION_FROM = Date.parse("2026-11-26T00:00:00Z");
const OLD_MAX_AGE_MS = 90 * DAY_MS;
const NEW_MAX_AGE_MS = 365 * DAY_MS; // 12 months
const KEY_MARGIN_MS = 60 * 60 * 1000; // only trust the key timestamp with a 1h margin

const keyTime = (key) => {
  const m = /\/(\d{13})-[0-9a-z]+$/.exec(key);
  return m ? Number(m[1]) : null;
};

export const isExpired = (receivedAt, now) =>
  receivedAt < now - (receivedAt < NEW_RETENTION_FROM ? OLD_MAX_AGE_MS : NEW_MAX_AGE_MS);

// True only when the key timestamp proves the record is kept under whichever
// rule applies to it, even if receivedAt differs from it by up to the margin.
export const clearlyKept = (kt, now) =>
  kt !== null &&
  (kt > now - OLD_MAX_AGE_MS + KEY_MARGIN_MS ||
    (kt > NEW_RETENTION_FROM + KEY_MARGIN_MS && kt > now - NEW_MAX_AGE_MS + KEY_MARGIN_MS));

export default async () => {
  const store = getStore("recordings");
  const now = Date.now();
  let checked = 0, deleted = 0, kept = 0, invalid = 0;

  for await (const page of store.list({ paginate: true })) {
    for (const { key } of page.blobs) {
      checked++;
      if (clearlyKept(keyTime(key), now)) { kept++; continue; }

      const record = await store.get(key, { type: "json" }).catch(() => null);
      const receivedAt = Date.parse(record?.receivedAt ?? "");
      if (Number.isNaN(receivedAt)) {
        // unreadable or missing receivedAt: leave it and report, don't guess
        invalid++;
        console.warn(`rec-cleanup: no valid receivedAt for ${key}, skipped`);
        continue;
      }
      if (isExpired(receivedAt, now)) {
        await store.delete(key);
        deleted++;
      } else {
        kept++;
      }
    }
  }

  console.log(
    `rec-cleanup: deleted ${deleted} recording(s) past retention ` +
      `(90 days if received before ${new Date(NEW_RETENTION_FROM).toISOString()}, 365 days after; ` +
      `checked ${checked}, kept ${kept}, skipped without valid receivedAt ${invalid}; ` +
      `cutoffs ${new Date(now - OLD_MAX_AGE_MS).toISOString()} / ${new Date(now - NEW_MAX_AGE_MS).toISOString()})`
  );
};

export const config = { schedule: "@daily" };
