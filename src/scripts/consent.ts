// Cookie banner (vanilla-cookieconsent v3) + Google Consent Mode v2 updates.
// Loaded on demand by Base.astro: on a first visit (no valid choice yet) or
// when "Cookie settings" is clicked, so returning visitors don't download it.
import * as CookieConsent from "vanilla-cookieconsent";
// CSS as a string, injected only when the banner starts (a plain CSS import
// would be linked on every page by Astro, even for returning visitors). The
// site's overrides in global.css (#cc-main vars) win regardless of order.
import ccCss from "vanilla-cookieconsent/dist/cookieconsent.css?inline";
import { CONSENT_COOKIE, CONSENT_REVISION, CONSENT_DAYS, DISMISS_KEY, bannerDismissed } from "./consent-config";

type Gtag = (...args: unknown[]) => void;
declare global {
  interface Window { dataLayer: unknown[]; gtag?: Gtag }
}

/** Remove Google Analytics cookies (_ga, _ga_<ID>) on every domain variant GA may use. */
function clearGaCookies() {
  const host = location.hostname;
  const parts = host.split(".");
  const domains = ["", host, "." + host];
  if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
  document.cookie.split("; ").forEach((c) => {
    const name = c.split("=")[0];
    if (!/^_ga(_|$)/.test(name)) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? "; domain=" + d : ""}`;
    });
  });
}

/** Push the choice to Consent Mode (and GTM). The site has no ads: ad_* stay denied. */
function applyConsent() {
  const analytics = CookieConsent.acceptedCategory("analytics");
  window.dataLayer = window.dataLayer || [];
  const gtag: Gtag = window.gtag ?? function () { window.dataLayer.push(arguments); };
  gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.dataLayer.push({ event: "consent_update", consent_analytics: analytics ? "granted" : "denied" });
  if (!analytics) clearGaCookies();
}

// the attached X icon (viewBox + path copied exactly), recoloured via currentColor
const X_ICON = '<svg viewBox="0 0 1080 1080" aria-hidden="true" focusable="false"><path fill="currentColor" d="M306.71,268.79h-154.98V113.81h154.98v154.98ZM151.73,811.21h154.98v154.98h-154.98v-154.98ZM461.69,268.79v154.98h-154.98v-154.98h154.98ZM461.69,656.23v154.98h-154.98v-154.98h154.98ZM618.31,656.23h-156.62v-232.47h156.62v232.47ZM773.29,268.79v154.98h-154.98v-154.98h154.98ZM773.29,656.23v154.98h-154.98v-154.98h154.98ZM773.29,113.81h154.98v154.98h-154.98V113.81ZM928.27,966.19h-154.98v-154.98h154.98v154.98Z"/></svg>';

/** X on the banner: closes it WITHOUT a choice. Nothing is stored in the
 *  consent cookie and Consent Mode stays at its defaults (denied); only a
 *  session flag keeps it from popping up again until the next visit. */
function addCloseButton(modal: HTMLElement) {
  if (modal.querySelector(".uo-cc-close")) return;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "uo-cc-close";
  btn.setAttribute("aria-label", "Close");
  btn.innerHTML = X_ICON;
  btn.addEventListener("click", () => {
    try { sessionStorage.setItem(DISMISS_KEY, "1"); } catch { /* storage off: just hide */ }
    CookieConsent.hide();
  });
  modal.appendChild(btn);
}

let started: Promise<void> | null = null;

/** Start the banner once (it shows itself only when there's no valid choice). */
export function startConsent(): Promise<void> {
  if (started) return started;
  const style = document.createElement("style");
  style.textContent = ccCss;
  document.head.appendChild(style);
  started = CookieConsent.run({
    revision: CONSENT_REVISION,
    cookie: { name: CONSENT_COOKIE, expiresAfterDays: CONSENT_DAYS },
    disablePageInteraction: false, // a small panel, not a wall
    // closed with the X earlier this session → don't pop up on its own (the
    // footer "Cookie settings" still opens the preferences)
    autoShow: !bannerDismissed(),
    onModalReady: ({ modalName, modal }) => { if (modalName === "consentModal") addCloseButton(modal); },
    guiOptions: {
      // small floating panel, bottom right (restyled in global.css)
      consentModal: { layout: "box", position: "bottom right", equalWeightButtons: true, flipButtons: false },
      preferencesModal: { layout: "box", equalWeightButtons: true, flipButtons: false },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: {
        enabled: false,
        autoClear: { cookies: [{ name: /^_ga/ }] },
      },
    },
    // first choice + later changes (not on every page load: the <head> script
    // already restores a stored choice before GTM loads)
    onFirstConsent: applyConsent,
    onChange: applyConsent,
    language: {
      default: "en",
      translations: {
        en: {
          consentModal: {
            title: "Cookies",
            description:
              'We’d like to use analytics cookies to understand how the site is used. They stay off unless you allow them. <a href="/privacy">Privacy &amp; cookie policy</a>',
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Preferences",
          },
          preferencesModal: {
            title: "Cookie preferences",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close",
            sections: [
              {
                title: "Necessary",
                description: "Needed for the site to work and to remember your cookie choice. Always on.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics",
                description:
                  "Google Analytics 4 tells us which pages are visited and how, on what kind of device, and from roughly where. We don’t use it for ads.",
                linkedCategory: "analytics",
                cookieTable: {
                  headers: { name: "Cookie", purpose: "Purpose", duration: "Duration" },
                  body: [
                    { name: "_ga", purpose: "Tells visits apart (Google Analytics)", duration: "2 years" },
                    { name: "_ga_<ID>", purpose: "Keeps session state (Google Analytics)", duration: "2 years" },
                  ],
                },
              },
              {
                title: "More information",
                description: 'Read our <a href="/privacy">privacy &amp; cookie policy</a>, or email <a href="mailto:info@untitledoffice.gr" data-umami-event="contact_click" data-umami-event-type="email">info@untitledoffice.gr</a>.',
              },
            ],
          },
        },
      },
    },
  });
  return started;
}

export const showPreferences = () => CookieConsent.showPreferences();
