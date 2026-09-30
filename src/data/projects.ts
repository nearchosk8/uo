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
// Welle (real photos, in the supplied order)
import welle01 from "../assets/welle-01.jpeg";
import welle02 from "../assets/welle-02.jpeg";
import welle03 from "../assets/welle-03.jpeg";
import welle04 from "../assets/welle-04.jpeg";
import welle05 from "../assets/welle-05.jpeg";
import welle06 from "../assets/welle-06.jpeg";
import welle07 from "../assets/welle-07.jpeg";
import welle08 from "../assets/welle-08.jpeg";
import welle09 from "../assets/welle-09.jpeg";
import welle10 from "../assets/welle-10.jpeg";
import welle11 from "../assets/welle-11.jpeg";
import welle12 from "../assets/welle-12.jpeg";
import welle13 from "../assets/welle-13.jpeg";
import welle14 from "../assets/welle-14.jpeg";
// Stratos Kanakis Woodcrafts (real photos, in the supplied order)
import sk01 from "../assets/stratos-kanakis-01.jpeg";
import sk02 from "../assets/stratos-kanakis-02.jpeg";
import sk03 from "../assets/stratos-kanakis-03.jpeg";
import sk04 from "../assets/stratos-kanakis-04.jpeg";
import sk05 from "../assets/stratos-kanakis-05.jpeg";
import sk06 from "../assets/stratos-kanakis-06.jpeg";
import sk07 from "../assets/stratos-kanakis-07.jpeg";
import sk08 from "../assets/stratos-kanakis-08.jpeg";
import sk09 from "../assets/stratos-kanakis-09.jpeg";
import sk10 from "../assets/stratos-kanakis-10.jpeg";
import sk11 from "../assets/stratos-kanakis-11.jpeg";

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
  /** optional hero title-row text (default: `name` without [brackets]) */
  heroTitle?: string;
  /** optional line directly under the hero title */
  heroSubtitle?: string;
  /** optional line directly under the meta line (e.g. an award) */
  award?: string;
  /** optional small caption-style line under the description */
  details?: string;
  /** optional links on a new line after `details`, joined by " | " (new tab) */
  links?: { label: string; href: string }[];
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
    heroTitle: "Welle Contemporary art & ceramics",
    description: [
      "Welle Contemporary Art & Ceramics is the personal project of sculptor Filipos-Lazaros Papadopoulos, based in Agia Paraskevi. The space offers tailor-made ceramics and workshops, focusing on handmade forms and clay experimentation.",
      "The identity is inspired by the wave — welle in German — and the soft, moldable essence of the material.\nIt was expressed through textures, earthy tones, and papers like Materica.",
      "All printed materials — posters, stickers, postcards, business cards, and packaging used Pantone 877C. Silkscreen printing was used only on t-shirts and tote bags. Photography and motion graphics reflect the organic, fluid nature of the brand.",
    ],
    details: "Primary Paper: Materica Pitch 250 gsm | 360 gsm",
    // square hero: landscape #1, #2 and #4 keep 2/3 of their width
    hero: {
      slides: [
        { img: welle01, alt: "Blocks of clay wrapped in plastic on a wooden studio shelf" },
        { img: welle02, alt: "Black-and-white close-up of hands arranging flat clay slabs on a worktable" },
        { img: welle03, alt: "Two dark grey Welle business cards with a die-cut wave pattern, lying on red rock" },
        { img: welle04, alt: "A dark Welle postcard lying in shallow clear water over pebbles", position: "52% 50%" },
      ],
      label: "welle",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #5 and #9 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: welle05, alt: "A dark grey Welle card resting on wet rocks beside a large white-veined stone", position: "20% 50%" },
            { img: welle06, alt: "A Welle business card lying on a wet, rust-coloured rock" },
            { img: welle07, alt: "A Welle poster with a ceramic bowl print, floating on clear green water" },
            { img: welle08, alt: "A cream Welle tote bag with a black print, hanging from a red rock ledge", position: "50% 70%" },
            { img: welle09, alt: "A Welle poster floating flat on rippling green water" },
          ],
          label: "print",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: welle10, alt: "Black-and-white photo of a sculptor sanding a large curved plaster mould under a desk lamp" },
            { img: welle11, alt: "Several hands holding up handmade cups and a pink bottle against a white tiled wall" },
            { img: welle12, alt: "Clay-covered hands shaping a small green cup on a potter's wheel" },
            { img: welle13, alt: "Black-and-white photo of hands holding a freshly thrown clay bowl above the wheel" },
            { img: welle14, alt: "A ceramicist in an apron kneading green clay at a wooden table, clay balls beside him" },
          ],
          label: "workshop",
          ext: ".jpeg",
        },
      ],
    },
    preview: welle01,
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
    category: "Digital",
    year: "2025",
    type: "editorial / Documentary",
    place: "Athens, Gr",
    heroTitle: "BETWEEN SPACES",
    heroSubtitle: "Street Art & Athenian Routes.",
    description: [
      "Be A Part is a collaborative project with Untitled Office that explores urban identity through the actions, experiences, and perspectives of a city's inhabitants.",
      "The project manifests as a multimedia platform, centered around two primary applications: a documentary series and a print publication. While the documentary captures the city's pulse through audiovisual storytelling, the print edition transforms the project into a participatory space. By inviting the audience to contribute their own material related to each theme, Be A Part evolves into a collective archive of shared urban narratives.",
      'The project kicks off with its first episode, "Between Spaces," which asks: How many different cities are hidden within Athens itself?',
      "This production explores the capital’s identity through the lives of those who shape it, featuring iconic graffiti artist Rtm One. Sharing his unique perspective on street aesthetics and the life that thrives between the city’s buildings, Rtm One helps launch an open dialogue between the city and its people.",
    ],
    details: "Episode 1",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/episode/1ZuIKGvSouGsmyWhja3Ogt?si=a8a0c4cc6d7d45eb" },
      { label: "Youtube", href: "https://youtu.be/Dk4p4guKeM4" },
    ],
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
    year: "2025",
    type: "Brand Identity",
    place: "Athens, Gr",
    // heroTitle: set to the wanted title-row text (defaults to `name` above)
    award: "EBGE 2026 — Awarded in Corporate Identity",
    heroTitle: "Stratos Kanakis",
    description: [
      "Stratos Kanakis Woodcraft is a branding project for a contemporary carpenter that openly engages with the reality of the profession in Athens. The identity draws inspiration from traditional craftsmen, without nostalgia or pretense, and incorporates a next-generation perspective that reflects presence, growth, and professionalism.",
      "At its core is the tagline “In Athens I don’t have friends, only carpenters,” a satirical reference to the Taki Tsan lyric “in Athens I don’t have friends, only acquaintances”.",
      "The brand identity uses humor, short statements, and wordplay to honestly comment on the well-known communication challenges within the craftsmen’s world. Typographic posters function as a key expressive tool, bringing rhythm, character, and clarity to an identity that communicates sincerity.",
      "Using Gmund Naturals (Orange & Sable) and Fedrigoni Materica Acqua, the identity remains honest, handcrafted, and deeply human.",
      "The project was awarded an EBGE 2026 Award in the Corporate Identity category, recognizing the identity’s approach to contemporary craft, communication, and visual expression.",
    ],
    hero: {
      slides: [
        { img: sk01, alt: "An embossed metal plate with Greek lettering set into a concrete block, in hard sunlight" },
        { img: sk02, alt: "The embossed metal plate leaning against a concrete block, casting a long shadow" },
        { img: sk03, alt: "A grey poster reading ΣΤΗΝ ΑΘΗΝΑ draped over a curved wooden frame in a cluttered carpentry workshop" },
      ],
      label: "identity",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #4, #7 and #10 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: sk04, alt: "A cream card and an orange business card tucked into a hollow concrete block, with brass screws", position: "55% 50%" },
            { img: sk05, alt: "Two orange business cards with black Greek lettering on a concrete block" },
            { img: sk06, alt: "A printed poster curling over the table of a workshop saw" },
            { img: sk07, alt: "A ΣΤΗΝ ΑΘΗΝΑ poster lying across a saw bench beside an orange handle", position: "15% 50%" },
          ],
          label: "print",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: sk08, alt: "An orange business card on the corner of a concrete block, brass screws scattered beside it" },
            { img: sk09, alt: "A ΣΤΗΝ ΑΘΗΝΑ poster lying on a circular saw table dusted with sawdust" },
            { img: sk10, alt: "Close-up of the ΣΤΗΝ ΑΘΗΝΑ poster in sunlight, with two brass screws resting on it", position: "30% 50%" },
            { img: sk11, alt: "A person sitting on worn concrete steps below a ΣΤΗΝ ΑΘΗΝΑ poster on the wall" },
          ],
          label: "posters",
          ext: ".jpeg",
        },
      ],
    },
    preview: sk01,
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
