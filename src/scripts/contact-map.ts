// Contact page map: MapLibre GL + OpenFreeMap vector tiles (no key, no cookies).
// Loaded on demand by contact.astro when the map nears the viewport. Colours
// are derived from the theme tokens and repainted live when <html>'s
// data-mode / data-color change.
import { Map as MapLibreMap, Marker, NavigationControl, AttributionControl, setWorkerUrl } from "maplibre-gl";
import type { StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// MapLibre 6 resolves its worker relative to its own file, which breaks once
// bundled — let Vite build the worker and hand MapLibre the final URL.
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";

setWorkerUrl(workerUrl);

// Ippokratous 7, 106 79 Athens (estimated — see contact.astro)
export const STUDIO: [number, number] = [23.7341, 37.9809]; // [lng, lat]

type RGB = [number, number, number];

// Resolve a token to sRGB via a probe element (handles hex, rgb() and the
// color(srgb …) form browsers return for color-mix tokens like --muted).
function readToken(probe: HTMLElement, token: string): RGB {
  probe.style.color = `var(${token})`;
  const c = getComputedStyle(probe).color;
  const nums = (c.match(/[\d.]+/g) || []).map(Number);
  if (c.startsWith("color(")) return [nums[0] * 255, nums[1] * 255, nums[2] * 255];
  return [nums[0] ?? 0, nums[1] ?? 0, nums[2] ?? 0];
}
const mix = (a: RGB, b: RGB, t: number) => a.map((v, i) => v + (b[i] - v) * t) as RGB;
const css = ([r, g, b]: RGB) => `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

// Everything is a tint of --fg over --bg, so grayscale → greys, dark → dark
// greys, orange → orange tones, with no per-theme colour tables.
function palette(probe: HTMLElement) {
  const bg = readToken(probe, "--bg");
  const fg = readToken(probe, "--fg");
  const muted = readToken(probe, "--muted");
  const at = (t: number) => css(mix(bg, fg, t));
  return {
    land: at(0.05),
    park: at(0.1),
    building: at(0.12),
    water: at(0.18),
    roadMinor: at(0.22),
    roadMajor: at(0.32),
    label: css(muted),
    halo: at(0.05),
  };
}
type Palette = ReturnType<typeof palette>;

// paint properties per layer, keyed to palette entries (used at build + repaint)
const PAINT: Array<[layer: string, prop: string, key: keyof Palette]> = [
  ["background", "background-color", "land"],
  ["park", "fill-color", "park"],
  ["water", "fill-color", "water"],
  ["building", "fill-color", "building"],
  ["road-minor", "line-color", "roadMinor"],
  ["road-major", "line-color", "roadMajor"],
  ["road-label", "text-color", "label"],
  ["road-label", "text-halo-color", "halo"],
];

function buildStyle(p: Palette): StyleSpecification {
  return {
    version: 8,
    glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
    sources: {
      openmaptiles: {
        type: "vector",
        url: "https://tiles.openfreemap.org/planet",
        // overrides the TileJSON credit so the wording is exactly this
        attribution:
          '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a> ' +
          '<a href="https://www.openmaptiles.org/" target="_blank" rel="noopener">© OpenMapTiles</a> ' +
          '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>',
      },
    },
    layers: [
      { id: "background", type: "background", paint: { "background-color": p.land } },
      { id: "park", type: "fill", source: "openmaptiles", "source-layer": "park", paint: { "fill-color": p.park } },
      { id: "water", type: "fill", source: "openmaptiles", "source-layer": "water", paint: { "fill-color": p.water } },
      { id: "building", type: "fill", source: "openmaptiles", "source-layer": "building", minzoom: 14, paint: { "fill-color": p.building } },
      {
        id: "road-minor", type: "line", source: "openmaptiles", "source-layer": "transportation",
        filter: ["in", ["get", "class"], ["literal", ["minor", "service", "pedestrian", "path", "track"]]],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: { "line-color": p.roadMinor, "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 13, 0.5, 18, 9] },
      },
      {
        id: "road-major", type: "line", source: "openmaptiles", "source-layer": "transportation",
        filter: ["in", ["get", "class"], ["literal", ["motorway", "trunk", "primary", "secondary", "tertiary"]]],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: { "line-color": p.roadMajor, "line-width": ["interpolate", ["exponential", 1.6], ["zoom"], 12, 1, 18, 16] },
      },
      {
        id: "road-label", type: "symbol", source: "openmaptiles", "source-layer": "transportation_name", minzoom: 15,
        layout: {
          "symbol-placement": "line",
          "text-field": ["coalesce", ["get", "name"], ["get", "name:latin"]],
          "text-font": ["Noto Sans Regular"],
          "text-size": 11,
        },
        paint: { "text-color": p.label, "text-halo-color": p.halo, "text-halo-width": 1.2 },
      },
    ],
  };
}

/** Create the map in `container`. Resolves on first full render; rejects on failure. */
export function createContactMap(container: HTMLElement, label: string): Promise<MapLibreMap> {
  const probe = document.createElement("span");
  probe.hidden = true;
  container.appendChild(probe);

  const map = new MapLibreMap({
    container,
    style: buildStyle(palette(probe)),
    center: STUDIO,
    zoom: 16,
    minZoom: 12,
    maxZoom: 19,
    attributionControl: false,
    scrollZoom: false,      // don't hijack page scrolling
    dragRotate: false,
    pitchWithRotate: false,
    touchPitch: false,
  });
  map.touchZoomRotate.disableRotation(); // pinch-zoom only
  map.keyboard.disableRotation();
  map.addControl(new NavigationControl({ showCompass: false }), "top-right");
  map.addControl(new AttributionControl({ compact: false }), "bottom-right");
  map.getCanvas().setAttribute("aria-label", label);

  const pin = document.createElement("span");
  pin.className = "map-pin";
  pin.innerHTML = '<span class="map-pin-head"></span>';
  new Marker({ element: pin, anchor: "bottom" }).setLngLat(STUDIO).addTo(map);

  // live theme switching: repaint in place, no style reload
  const repaint = () => {
    const p = palette(probe);
    for (const [layer, prop, key] of PAINT) map.setPaintProperty(layer, prop, p[key]);
  };
  const observer = new MutationObserver(repaint);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-mode", "data-color"] });

  return new Promise((resolve, reject) => {
    let settled = false;
    const fail = (err: unknown) => {
      if (settled) return;
      settled = true;
      observer.disconnect();
      map.remove();
      reject(err);
    };
    map.once("load", () => {
      if (settled) return;
      settled = true;
      resolve(map);
    });
    // fatal only while the style/TileJSON itself can't load; a single failed
    // tile is not (and anything after "load" is ignored via `settled`)
    map.on("error", (e) => { if (!map.isStyleLoaded()) fail(e.error); });
    // nothing rendered within 15s (tiles blocked / offline) → give up
    setTimeout(() => fail(new Error("map load timeout")), 15000);
  });
}
