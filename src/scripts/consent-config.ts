// Shared cookie-consent settings, used by the inline <head> script in
// Base.astro (via define:vars), the lazy loader and the banner module.
// Bump CONSENT_REVISION whenever the categories or wording change in a way
// that needs fresh consent: everyone is asked again.
export const CONSENT_COOKIE = "cc_cookie"; // vanilla-cookieconsent's default name
export const CONSENT_REVISION = 1;
export const CONSENT_DAYS = 182; // ~6 months (library default)

/** The stored choice, if it's for the current revision; otherwise null. */
export function readStoredConsent(): { analytics: boolean } | null {
  try {
    const m = document.cookie.match(new RegExp("(?:^|; )" + CONSENT_COOKIE + "=([^;]*)"));
    if (!m) return null;
    const v = JSON.parse(decodeURIComponent(m[1]));
    if (!v || v.revision !== CONSENT_REVISION || !Array.isArray(v.categories)) return null;
    return { analytics: v.categories.includes("analytics") };
  } catch {
    return null;
  }
}

/** sessionStorage flag: the banner was closed with the X (no consent given).
 *  It stays hidden for this browser session, then shows again next visit. */
export const DISMISS_KEY = "uo-cc-dismissed";
export function bannerDismissed(): boolean {
  try { return sessionStorage.getItem(DISMISS_KEY) === "1"; } catch { return false; }
}
