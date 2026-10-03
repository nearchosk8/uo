// Umami event helpers. Most events are declared in markup with
// data-umami-event / data-umami-event-* attributes (Umami's tracker sends
// them on click); track() is only for things an attribute can't express.
// Never pass personal data: only slugs, categories, setting values, labels.

declare global {
  interface Window { umami?: { track: (event: string, data?: Record<string, string>) => void } }
}

/** Send a custom event, if Umami has loaded (it's skipped off the live domain). */
export function track(event: string, data?: Record<string, string>) {
  try { window.umami?.track(event, data); } catch { /* analytics must never break the page */ }
}

/** Short label for an external link: its site name, e.g. "spotify", "akto". */
export function linkLabel(href: string): string {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    const parts = host.split(".");
    const name = parts.length > 1 ? parts[parts.length - 2] : parts[0];
    return ({ youtu: "youtube" } as Record<string, string>)[name] ?? name;
  } catch {
    return "external";
  }
}

/** data-umami-* attributes for an outbound link (spread onto the <a>). */
export const outbound = (href: string) => ({
  "data-umami-event": "outbound_click",
  "data-umami-event-label": linkLabel(href),
});
