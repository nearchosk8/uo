// Single source of truth for the Projects page + /projects/[slug] pages.
// Edit a project here and every list row, hover preview, hero carousel,
// gallery and "Next Project" link updates. Order = list order (and the
// Next-Project sequence; the last loops back to the first).
//
// `name` may mark pixel-font glyphs with [brackets], e.g. "[W]elle".
// PLACEHOLDERS: all images below are stand-ins from src/assets until the
// real project photos arrive — swap the imports per project.
import type { ImageMetadata } from "astro";
import office1 from "../assets/office-1.jpeg";
import office2 from "../assets/office-2.jpeg";
import office3 from "../assets/office-3.jpeg";
import philosophy1 from "../assets/philosophy-1.jpeg";
import philosophy2 from "../assets/philosophy-2.jpeg";
import untitled2 from "../assets/UNTITLED-2.jpeg";
import untitled3 from "../assets/UNTITLED-3.jpeg";
import phUntitled2 from "../assets/PHILOSOPHY-UNTITLED-2.jpeg";
import phUntitled3 from "../assets/PHILOSOPHY-UNTITLED-3.jpeg";
// STF Luxury Suites (real photos, in the supplied order)
import stf01 from "../assets/stf-luxury-01.jpeg";
import stf02 from "../assets/stf-luxury-02.jpeg";
import stf03 from "../assets/stf-luxury-03.jpeg";
import stf04 from "../assets/stf-luxury-04.jpeg";
import stf05 from "../assets/stf-luxury-05.jpeg";
import stf06 from "../assets/stf-luxury-06.jpeg";
import stf07 from "../assets/stf-luxury-07.jpeg";
import stf08 from "../assets/stf-luxury-08.jpeg";
import stf09 from "../assets/stf-luxury-09.jpeg";
import stf10 from "../assets/stf-luxury-10.jpeg";
import stf11 from "../assets/stf-luxury-11.jpeg";
import stf12 from "../assets/stf-luxury-12.jpeg";

export const CATEGORIES = ["Branding", "Digital", "Poster", "Book"] as const;
export type Category = (typeof CATEGORIES)[number];

/** `position` = optional per-slide crop focal point (CSS object-position) */
export type Slide = { img: ImageMetadata; alt: string; position?: string };
export type CarouselSet = { slides: Slide[]; label: string; ext: string };

export type Project = {
  slug: string;
  /** list title */
  title: string;
  /** display name on the project page; [x] = pixel glyph */
  name: string;
  subtitle: string;
  category: Category;
  year: string;
  /** small meta line: "— {type}   {place}" */
  type: string;
  place: string;
  /** paragraphs; a "\n" inside one = a line break within that paragraph */
  description: string[];
  /** optional small caption-style line under the description */
  details?: string;
  /** hero carousel (right column) + its caption label/ext */
  hero: CarouselSet;
  /** gallery inside the black panel. Either static `images` (2 = the default
   *  layout, one shared caption row) or `carousels` (one Carousel per set,
   *  side by side, each with its own progress bar + caption). */
  gallery:
    | { images: Slide[]; label: string; ext: string; carousels?: undefined }
    | { carousels: CarouselSet[]; images?: undefined };
  /** hover preview in the works list (portrait) */
  preview: ImageMetadata;
};

const lorem = [
  "Placeholder description. A short paragraph introducing the client, what they do and where they are based — two or three sentences at most.",
  "Placeholder paragraph two. What the identity is built on, the idea behind it, and how it was expressed across materials, typography and colour.",
  "Placeholder paragraph three. Deliverables and applications — printed matter, packaging, signage, digital — and any production notes.",
];

const ph = (img: ImageMetadata, alt: string): Slide => ({ img, alt });

export const projects: Project[] = [
  {
    slug: "welle",
    title: "Welle Contemporary art & ceramics",
    name: "[W]elle",
    subtitle: "Contemporary art & ceramics",
    category: "Branding",
    year: "2025",
    type: "Brand Identity",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(philosophy2, "Placeholder — project hero image 1"), ph(untitled2, "Placeholder — project hero image 2"), ph(untitled3, "Placeholder — project hero image 3")], label: "welle poster", ext: ".jpeg" },
    gallery: { images: [ph(office1, "Placeholder — gallery image 1"), ph(office2, "Placeholder — gallery image 2")], label: "bs cards", ext: ".jpeg" },
    preview: philosophy2,
  },
  {
    slug: "stf-luxury-suites",
    title: "Stf Luxury Suites",
    name: "ST[F] Luxury Suites",
    subtitle: "Luxury suites",
    category: "Branding",
    year: "2025",
    type: "Brand Identity",
    place: "Nafplio, Gr",
    description: [
      "STF Luxury Suites is housed in a renovated, listed neoclassical building in the heart of Nafplio, where natural light plays a central role in the guest experience.\nThe branding aesthetic was inspired by this very relationship between light and the simplicity of form.",
      "The concept behind all physical applications – from signage and cards to envelopes and wayfinding – was to express a sense of understated luxury through unconventional, non-obvious executions. For instance, the main sign features a die-cut STF logo, allowing natural light to interact with it and change its appearance depending on the viewing angle. Similarly, the cards were produced using an embossed printing technique, enhancing their tactile quality and subtle presence.",
      "For the print materials, we selected Materica Cobalt and Materica Clay papers, which complement the brand identity through their texture and tone, reinforcing the natural, minimal elegance reflected in the suites themselves.",
    ],
    details: "Primary Papers: Materica Cobalt | Materica Clay 250 gsm",
    // square hero frame: crop positions keep each subject in (landscape #1
    // loses ~1/3 of its width, the portraits ~1/3 of their height)
    hero: {
      slides: [
        { img: stf01, alt: "Navy STF business cards propped against a terracotta architectural ornament in strong sunlight", position: "55% 50%" },
        { img: stf02, alt: "Embossed STF cards in clay and navy on stacked white marble slabs, in raking sunlight" },
        { img: stf03, alt: "A navy business card with a mirrored embossed STF monogram, leaning against two terracotta ornaments", position: "50% 0%" },
        { img: stf04, alt: "A navy With compliments card with an embossed STF monogram, tucked into a terracotta ornament on a sunlit wall", position: "50% 25%" },
      ],
      label: "cards",
      ext: ".jpeg",
    },
    // two 4:5 carousels in the black panel. #5 and #6 are landscape (heavy
    // ratio crop, ~47% of the width) — positioned to keep the subjects in
    gallery: {
      carousels: [
        {
          slides: [
            { img: stf05, alt: "A white envelope with a die-cut circle revealing the embossed navy STF logo underneath, resting on marble", position: "41% 50%" },
            { img: stf06, alt: "Navy STF business cards on white marble slabs beside a speckled granite stone", position: "38% 50%" },
            { img: stf07, alt: "Flat lay of STF cards on marble with a Materica paper swatch book, a ball of twine and white pebbles" },
            { img: stf08, alt: "A navy compliments card and a clay-coloured STF card beside terracotta ornaments and a marble block", position: "50% 0%" },
          ],
          label: "stationery",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: stf09, alt: "A navy With compliments card with an embossed STF monogram, resting on marble in a band of sunlight" },
            { img: stf10, alt: "The aluminium embossing plate with two mirrored STF monograms, photographed on black" },
            { img: stf11, alt: "The black STF sign beside a neoclassical doorway, with Luxury Suites lettering below it on the white wall" },
            { img: stf12, alt: "The STF sign seen at an angle, its die-cut letters and small Luxury Suites lettering casting shadows on the wall" },
          ],
          label: "signage",
          ext: ".jpeg",
        },
      ],
    },
    preview: office2,
  },
  {
    slug: "linen-pro",
    title: "Linen Pro",
    name: "Lin[e]n Pro",
    subtitle: "Textile brand",
    category: "Digital",
    year: "2024",
    type: "Digital Identity",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(untitled2, "Placeholder — project hero image 1"), ph(untitled3, "Placeholder — project hero image 2"), ph(philosophy1, "Placeholder — hero image 3")], label: "linen pro", ext: ".jpeg" },
    gallery: { images: [ph(office3, "Placeholder — gallery image 1"), ph(office1, "Placeholder — gallery image 2")], label: "screens", ext: ".jpeg" },
    preview: untitled2,
  },
  {
    slug: "helma-construction-machinery",
    title: "Helma Construction Machinery",
    name: "H[e]lma",
    subtitle: "Construction machinery",
    category: "Branding",
    year: "2024",
    type: "Brand Identity",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(phUntitled3, "Placeholder — project hero image 1"), ph(office1, "Placeholder — project hero image 2"), ph(office2, "Placeholder — project hero image 3")], label: "helma", ext: ".jpeg" },
    gallery: { images: [ph(untitled3, "Placeholder — gallery image 1"), ph(philosophy2, "Placeholder — gallery image 2")], label: "signage", ext: ".jpeg" },
    preview: phUntitled3,
  },
  {
    slug: "between-spaces",
    title: "Between Spaces",
    name: "Betw[e]en Spaces",
    subtitle: "Exhibition catalogue",
    category: "Book",
    year: "2024",
    type: "Editorial",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(office3, "Placeholder — project hero image 1"), ph(philosophy1, "Placeholder — project hero image 2"), ph(untitled2, "Placeholder — project hero image 3")], label: "between spaces", ext: ".jpeg" },
    gallery: { images: [ph(phUntitled2, "Placeholder — gallery image 1"), ph(office2, "Placeholder — gallery image 2")], label: "spreads", ext: ".jpeg" },
    preview: office3,
  },
  {
    slug: "stratos-kanakis-woodcrafts",
    title: "Stratos Kanakis Woodcrafts",
    name: "Strat[o]s Kanakis Woodcrafts",
    subtitle: "Woodcraft workshop",
    category: "Branding",
    year: "2024",
    type: "Brand Identity",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(untitled3, "Placeholder — project hero image 1"), ph(office1, "Placeholder — project hero image 2"), ph(phUntitled3, "Placeholder — project hero image 3")], label: "stratos kanakis", ext: ".jpeg" },
    gallery: { images: [ph(philosophy2, "Placeholder — gallery image 1"), ph(office3, "Placeholder — gallery image 2")], label: "cards", ext: ".jpeg" },
    preview: untitled3,
  },
  {
    slug: "neue-poster",
    title: "Neue Poster",
    name: "N[e]ue Poster",
    subtitle: "Poster series",
    category: "Poster",
    year: "2023",
    type: "Poster",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(philosophy1, "Placeholder — project hero image 1"), ph(phUntitled2, "Placeholder — project hero image 2"), ph(phUntitled3, "Placeholder — project hero image 3")], label: "neue poster", ext: ".jpeg" },
    gallery: { images: [ph(untitled2, "Placeholder — gallery image 1"), ph(office3, "Placeholder — gallery image 2")], label: "posters", ext: ".jpeg" },
    preview: philosophy1,
  },
  {
    slug: "photo-diary-134-exposures",
    title: "Photo Diary 134 Exposures",
    name: "Ph[o]to Diary",
    subtitle: "134 exposures",
    category: "Book",
    year: "2023",
    type: "Editorial",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(untitled3, "Placeholder — project hero image 1"), ph(office2, "Placeholder — project hero image 2"), ph(philosophy2, "Placeholder — project hero image 3")], label: "photo diary", ext: ".jpeg" },
    gallery: { images: [ph(office1, "Placeholder — gallery image 1"), ph(phUntitled3, "Placeholder — gallery image 2")], label: "spreads", ext: ".jpeg" },
    preview: untitled3,
  },
  {
    slug: "porsche-911-carrera",
    title: "Porsche 911 Carrera",
    name: "Carr[e]ra",
    subtitle: "Poster",
    category: "Poster",
    year: "2023",
    type: "Poster",
    place: "Athens, Gr",
    description: lorem,
    hero: { slides: [ph(phUntitled2, "Placeholder — project hero image 1"), ph(untitled2, "Placeholder — project hero image 2"), ph(office3, "Placeholder — project hero image 3")], label: "carrera", ext: ".jpeg" },
    gallery: { images: [ph(philosophy1, "Placeholder — gallery image 1"), ph(untitled3, "Placeholder — gallery image 2")], label: "poster", ext: ".jpeg" },
    preview: phUntitled2,
  },
];

export const nextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
