import { getStore } from "@netlify/blobs";

const ALLOWED = [/^https:\/\/(www\.)?untitledoffice\.gr$/, /^https:\/\/[a-z0-9-]+--[a-z0-9-]+\.netlify\.app$/];

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const origin = req.headers.get("origin") || "";
  if (!ALLOWED.some((re) => re.test(origin))) return new Response("Forbidden", { status: 403 });
  const text = await req.text();
  if (text.length > 2_000_000) return new Response("Too large", { status: 413 });
  let body;
  try { body = JSON.parse(text); } catch { return new Response("Bad JSON", { status: 400 }); }
  const { sessionId, gaClientId = null, page = null, events } = body || {};
  if (!/^s[0-9a-z]{6,40}$/.test(sessionId || "") || !Array.isArray(events) || !events.length) {
    return new Response("Bad request", { status: 400 });
  }
  const store = getStore("recordings");
  const key = `${sessionId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  await store.setJSON(key, { sessionId, gaClientId, page, receivedAt: new Date().toISOString(), events });
  return new Response(null, { status: 204 });
};

export const config = { path: "/api/rec" };
