// Single source of truth for the Projects page + /projects/[slug] pages.
// Edit a project here and every list row, hover preview, hero carousel,
// gallery and "Next Project" link updates. Order = list order (and the
// Next-Project sequence; the last loops back to the first).
//
// `name` may mark pixel-font glyphs with [brackets], e.g. "[W]elle".
// PLACEHOLDERS: all images below are stand-ins from src/assets until the
// real project photos arrive — swap the imports per project.
import type { ImageMetadata } from "astro";
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
import stfPreview from "../assets/stf-luxury-preview.jpeg"; // Projects-list hover preview
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
import wellePreview from "../assets/welle-preview.jpeg"; // Projects-list hover preview
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
// Between Spaces (real photos, in the supplied order)
import bs01 from "../assets/between-spaces-01.jpeg";
import bs02 from "../assets/between-spaces-02.jpeg";
import bs03 from "../assets/between-spaces-03.jpeg";
import bs04 from "../assets/between-spaces-04.jpeg";
import bs05 from "../assets/between-spaces-05.jpeg";
import bs06 from "../assets/between-spaces-06.jpeg";
import bs07 from "../assets/between-spaces-07.jpeg";
import bs08 from "../assets/between-spaces-08.jpeg";
import bs09 from "../assets/between-spaces-09.jpeg";
import bs10 from "../assets/between-spaces-10.jpeg";
// Photo Diary 134 Exposures (real photos, in folder name order)
import pd01 from "../assets/photo-diary-01.jpeg";
import pd02 from "../assets/photo-diary-02.jpeg";
import pd03 from "../assets/photo-diary-03.jpeg";
import pd04 from "../assets/photo-diary-04.jpeg";
import pd05 from "../assets/photo-diary-05.jpeg";
import pd06 from "../assets/photo-diary-06.jpeg";
import pd07 from "../assets/photo-diary-07.jpeg";
import pd08 from "../assets/photo-diary-08.jpeg";
import pd09 from "../assets/photo-diary-09.jpeg";
import pd10 from "../assets/photo-diary-10.jpeg";
import pd11 from "../assets/photo-diary-11.jpeg";
import pd12 from "../assets/photo-diary-12.jpeg";
// Linen Pro (real photos, in the supplied order; "-.3" left out)
import lp01 from "../assets/linen-pro-01.jpeg";
import lp02 from "../assets/linen-pro-02.jpeg";
import lp03 from "../assets/linen-pro-03.jpeg";
import lp04 from "../assets/linen-pro-04.jpeg";
import lp05 from "../assets/linen-pro-05.jpeg";
import lp06 from "../assets/linen-pro-06.jpeg";
import lp07 from "../assets/linen-pro-07.jpeg";
import lp08 from "../assets/linen-pro-08.jpeg";
import lp09 from "../assets/linen-pro-09.jpeg";
import lp10 from "../assets/linen-pro-10.jpeg";
import lp11 from "../assets/linen-pro-11.jpeg";
import lp12 from "../assets/linen-pro-12.jpeg";
import lp13 from "../assets/linen-pro-13.jpeg";
import lp14 from "../assets/linen-pro-14.jpeg";
import lp15 from "../assets/linen-pro-15.jpeg";
// Helma Construction Machinery (real photos, Finder name order: 1.jpg first)
import hm01 from "../assets/helma-01.jpeg";
import hm02 from "../assets/helma-02.jpeg";
import hm03 from "../assets/helma-03.jpeg";
import hm04 from "../assets/helma-04.jpeg";
import hm05 from "../assets/helma-05.jpeg";
import hm06 from "../assets/helma-06.jpeg";
import hm07 from "../assets/helma-07.jpeg";
import hm08 from "../assets/helma-08.jpeg";
import hm09 from "../assets/helma-09.jpeg";
import hm10 from "../assets/helma-10.jpeg";
import hm11 from "../assets/helma-11.jpeg";
import hm12 from "../assets/helma-12.jpeg";
import hm13 from "../assets/helma-13.jpeg";
import hm14 from "../assets/helma-14.jpeg";
// FORE HANDMADE (real photos, Finder name order: 1–9, 11, 13, 14)
import fo01 from "../assets/fore-01.jpeg";
import fo02 from "../assets/fore-02.jpeg";
import fo03 from "../assets/fore-03.jpeg";
import fo04 from "../assets/fore-04.jpeg";
import fo05 from "../assets/fore-05.jpeg";
import fo06 from "../assets/fore-06.jpeg";
import fo07 from "../assets/fore-07.jpeg";
import fo08 from "../assets/fore-08.jpeg";
import fo09 from "../assets/fore-09.jpeg";
import fo10 from "../assets/fore-10.jpeg";
import fo11 from "../assets/fore-11.jpeg";
import fo12 from "../assets/fore-12.jpeg";
// Porsche 911 Carrera (real photos, Finder name order)
import pc01 from "../assets/porsche-911-carrera-01.jpeg";
import pc02 from "../assets/porsche-911-carrera-02.jpeg";
import pc03 from "../assets/porsche-911-carrera-03.jpeg";
import pc04 from "../assets/porsche-911-carrera-04.jpeg";
import pc05 from "../assets/porsche-911-carrera-05.jpeg";
import pc06 from "../assets/porsche-911-carrera-06.jpeg";
import pc07 from "../assets/porsche-911-carrera-07.jpeg";
import pc08 from "../assets/porsche-911-carrera-08.jpeg";
import pc09 from "../assets/porsche-911-carrera-09.jpeg";
import pc10 from "../assets/porsche-911-carrera-10.jpeg";
import pc11 from "../assets/porsche-911-carrera-11.jpeg";
import pc12 from "../assets/porsche-911-carrera-12.jpeg";
// Untitled jpeg (real photos, Finder name order; #2 = GIF still)
import uj01 from "../assets/untitled-jpeg-01.jpeg";
import uj02 from "../assets/untitled-jpeg-02.jpeg";
import uj03 from "../assets/untitled-jpeg-03.jpeg";
import uj04 from "../assets/untitled-jpeg-04.jpeg";
import uj05 from "../assets/untitled-jpeg-05.jpeg";
import uj06 from "../assets/untitled-jpeg-06.jpeg";
import uj07 from "../assets/untitled-jpeg-07.jpeg";
import uj08 from "../assets/untitled-jpeg-08.jpeg";
// Neue Poster 01 (real photos, Finder name order)
import np01 from "../assets/neue-poster-01.jpeg";
import np02 from "../assets/neue-poster-02.jpeg";
import np03 from "../assets/neue-poster-03.jpeg";
import np04 from "../assets/neue-poster-04.jpeg";
import np05 from "../assets/neue-poster-05.jpeg";
import np06 from "../assets/neue-poster-06.jpeg";
import np07 from "../assets/neue-poster-07.jpeg";
import np08 from "../assets/neue-poster-08.jpeg";
import np09 from "../assets/neue-poster-09.jpeg";
import np10 from "../assets/neue-poster-10.jpeg";
import np11 from "../assets/neue-poster-11.jpeg";
import np12 from "../assets/neue-poster-12.jpeg";
import np13 from "../assets/neue-poster-13.jpeg";
import np14 from "../assets/neue-poster-14.jpeg";
import np15 from "../assets/neue-poster-15.jpeg";

export const CATEGORIES = ["Branding", "Digital", "Poster", "Book"] as const;
export type Category = (typeof CATEGORIES)[number];

/** `position` = optional per-slide crop focal point (CSS object-position) */
export type Slide = { img: ImageMetadata; alt: string; position?: string };
export type CarouselSet = { slides: Slide[]; label: string; ext: string };
/** inline link inside a paragraph (opens in a new tab) */
export type InlineLink = { label: string; href: string };
/** a description paragraph: plain text ("\n" = line break), or a list of
 *  text and link pieces for paragraphs with inline links */
export type Paragraph = string | (string | InlineLink)[];
/** plain-text version of a paragraph (meta descriptions etc.) */
export const paragraphText = (p: Paragraph): string =>
  (typeof p === "string" ? p : p.map((x) => (typeof x === "string" ? x : x.label)).join("")).replace(/\n/g, " ");

export type Project = {
  /** true = kept in the data but left off the live site (list, pages,
   *  Next Project). Remove the flag to publish it again. */
  hidden?: boolean;
  slug: string;
  /** list title */
  title: string;
  /** display name on the project page; [x] = pixel glyph */
  name: string;
  category: Category;
  year: string;
  /** small meta line: "— {type}   {place}" */
  type: string;
  place: string;
  /** paragraphs; a "\n" inside one = a line break within that paragraph */
  description: Paragraph[];
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
  /** optional multi-line details with inline links (new tab). When set, it
   *  replaces `details` + `links`: one array per line, each piece either
   *  plain text or a link. */
  detailLines?: (string | { label: string; href: string })[][];
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


export const allProjects: Project[] = [
  {
    slug: "welle",
    title: "Welle Contemporary art & ceramics",
    name: "[W]elle",
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
    preview: wellePreview,
  },
  {
    slug: "stf-luxury-suites",
    title: "Stf Luxury Suites",
    name: "ST[F] Luxury Suites",
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
    preview: stfPreview,
  },
  {
    slug: "linen-pro",
    title: "Linen Pro",
    name: "Lin[e]n Pro",
    category: "Digital",
    year: "2025",
    type: "Brand Identity",
    place: "Athens, Gr",
    heroTitle: "Linen Pro",
    description: [
      "For Linen Pro, a textile company founded in 1984, we created a bold and tactile identity rooted in the language of fabric.",
      "Clean, structured typography and a minimal visual system reflect the order and rhythm of weaving. We stripped away embellishment to let materials and light do the work.",
      "Each paper choice was intentional: Materica Pitch, Materica Kraft, and a recycled textured stock for the hotel range—earthy, raw, tactile. For the yachting line, Colorplan Azure, a light blue surface that mirrors the color and reflectivity of the sea.",
      "The entire system is built around how light behaves—on paper, in space, across surfaces. A brand shaped by material, clarity, and reflection.",
      "Beyond the visual identity, we developed the full digital and print ecosystem: website design and implementation, product booklets, business cards, packaging tags, and branded collateral.",
      "We also directed and executed the full studio photography for the website’s product range.",
    ],
    details: "Primary Papers: Materica Pitch 250 gsm | Materica Kraft 250 gsm | Colorplan Azure Blue 250 gsm",
    // square hero: #1 is landscape (keeps 2/3 of its width)
    hero: {
      slides: [
        { img: lp01, alt: "Pale blue and kraft Linen Pro cards on a dark brick between blue and amber glass globes, in a band of sunlight" },
        { img: lp02, alt: "A linen towel with the Linen Pro logo draped across the teak deck of a yacht", position: "50% 70%" },
        { img: lp03, alt: "A Linen Pro card and a kraft folder on a dark surface beside glass globes, in raking light" },
        { img: lp04, alt: "A grey Linen Pro folder leaning against a wire rack, its shadow striping the paper", position: "50% 40%" },
        { img: lp05, alt: "Hands holding a folded pale blue Linen Pro card in sunlight, a blue glass globe beside it" },
      ],
      label: "identity",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #7 and #10 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: lp06, alt: "A Linen Pro card resting on a dark folder and a kraft sheet, an amber glass globe below" },
            { img: lp07, alt: "Folders and a pale blue sheet arranged around a dark brick with blue and amber glass globes" },
            { img: lp08, alt: "Folded leaflets standing around a dark brick beside a blue glass globe" },
            { img: lp09, alt: "White waffle-weave linen on a bed next to a cream bedside unit, against a warm beige wall" },
            { img: lp10, alt: "Flat lay of Linen Pro folders, a pale blue cover and a black folder with glass globes" },
          ],
          label: "print",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: lp11, alt: "Pale blue and kraft cards propped on a dark brick, a blue glass globe in front" },
            { img: lp12, alt: "A metal embossing plate with four mirrored Linen Pro logos, photographed on black" },
            { img: lp13, alt: "An open Linen Pro booklet at a text page, with blue and amber glass globes" },
            { img: lp14, alt: "A grey folder and a pale blue booklet leaning on a dark brick between amber and blue glass globes" },
            { img: lp15, alt: "Folded Linen Pro leaflets standing against a dark brick in a band of sunlight" },
          ],
          label: "collateral",
          ext: ".jpeg",
        },
      ],
    },
    preview: lp02,
  },
  {
    slug: "helma-construction-machinery",
    title: "Helma Construction Machinery",
    name: "H[e]lma",
    category: "Branding",
    year: "2023",
    type: "Brand Identity",
    place: "Athens, Gr",
    heroTitle: "Helma Construction Machinery",
    description: [
      "Helma represents exclusively international names in the field of construction machinery in Greece. The company has been active in the field of construction machinery for more than 35 years representing high quality products.",
      "Helma's brand identity radiates quality and vigor, showcased through dynamic color palettes and thoughtful typeface selections. From cards and envelopes to social media graphics, t-shirts, and tote bags, every detail was carefully crafted to reflect the essence of the brand.",
      "Paper selection and printing techniques, mirror Helma's dedication to quality. Colorplan paper underscores Helma's commitment to premium materials and cohesive design, resonating with the company's reputation for reliability in the construction industry.",
    ],
    details: "Papers: Colorplan ice white | Colorplan ebony 350 gsm",
    // square hero: #1–#3 are landscape (keep 2/3–3/4 of their width)
    hero: {
      slides: [
        { img: hm01, alt: "Rows of black Helma cards printed with NEXT GEN→ERA·TION MACHINES in white type" },
        { img: hm02, alt: "Aerial view of three straight lines of people in white shirts standing on bare concrete" },
        { img: hm03, alt: "Close-up of stacked black Helma cards with white typography at an angle" },
        { img: hm04, alt: "A worker in an orange hi-vis jacket with the Helma logo and yellow ear defenders at machine controls" },
      ],
      label: "identity",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #6 and #12 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: hm05, alt: "White Helma business cards stacked on black card blocks against a white wall" },
            { img: hm06, alt: "Stacks of black Helma cards with white NEXT GEN→ERA·TION typography" },
            { img: hm07, alt: "Hands holding a red Helma brochure titled EVOLUTION" },
            { img: hm08, alt: "Stacks of red EVOLUTION brochures in raking light" },
            { img: hm09, alt: "An operator in a white Helma t-shirt at the controls inside an excavator cab" },
          ],
          label: "print",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: hm10, alt: "A hand holding a phone showing a red EVOLUTION lock screen, a monstera leaf behind" },
            { img: hm11, alt: "A small stack of black Helma business cards on a white surface" },
            { img: hm12, alt: "A person in a white t-shirt seen through the reflective glass of a machine cab" },
            { img: hm13, alt: "A person in a white NEXT GEN→ERA·TION MACHINES t-shirt climbing into an orange machine, seen from behind" },
            { img: hm14, alt: "MAN parts boxes wrapped in plastic on a warehouse shelf" },
          ],
          label: "in use",
          ext: ".jpeg",
        },
      ],
    },
    preview: hm07,
  },
  {
    slug: "between-spaces",
    title: "Between Spaces",
    name: "Betw[e]en Spaces",
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
    hero: {
      slides: [
        { img: bs01, alt: "A person holding up the Be A Part magazine in front of their face against a graffiti-covered wall" },
        { img: bs02, alt: "The Be A Part magazine lying on a sunlit pavement kerb" },
        { img: bs03, alt: "Black issue cover with a white cut-out R logo over chain-link fence, reading Issue 1 and Between Spaces" },
      ],
      label: "issue 1",
      ext: ".jpeg",
    },
    gallery: {
      carousels: [
        {
          slides: [
            { img: bs04, alt: "The magazine tucked under the rear wiper of a parked car" },
            { img: bs05, alt: "A magazine page caught in a metal security grille" },
            { img: bs06, alt: "The magazine on a red plastic crate beside a newspaper kiosk" },
            { img: bs07, alt: "Hands holding the magazine open by a sunlit window" },
          ],
          label: "street",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: bs08, alt: "Someone sitting on the kerb reading an illustrated magazine spread" },
            { img: bs09, alt: "A reader sitting on the pavement with the magazine open, parked cars behind" },
            { img: bs10, alt: "Close-up of hands holding the magazine open at an illustrated article" },
          ],
          label: "reading",
          ext: ".jpeg",
        },
      ],
    },
    preview: bs02,
  },
  {
    slug: "stratos-kanakis-woodcrafts",
    title: "Stratos Kanakis Woodcrafts",
    name: "Strat[o]s Kanakis Woodcrafts",
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
    category: "Poster",
    year: "2025",
    type: "Poster Design",
    place: "Athens, Gr",
    heroTitle: "Neue Poster 01",
    description: [
      "The poster captures the dynamic interplay between typography and the urban environment. The rigid and geometric Neue Haas Grotesk collides with a fluid, graffiti-inspired design, reflecting the raw energy of the city—especially in Exarchia, where clean, commercial typography coexists with uncontrolled street tags and layers of graffiti.",
      'The background features the words "Neue Poster 01 | Office 2 | Tiff | Untitled 25", embodying the project’s identity: the precision of TIFF, our location at Office 2, Ippokratous 7, and our open-ended approach to design.',
      "The black Keaykolor 120 gsm and silver Pantone 877C amplify the contrast between digital clarity and urban intervention, creating a poster that exists between typographic order and street chaos.",
    ],
    details: "Primary Papers: Keaykolour Deep Black 120 gsm",
    // square hero: #1, #2, #4 are landscape (keep 2/3 of their width)
    hero: {
      slides: [
        { img: np01, alt: "The Neue Poster 01 pasted on a pillar along a shaded city street", position: "20% 50%" },
        { img: np02, alt: "The poster hanging from a ledge on a graffiti-covered building front", position: "70% 50%" },
        { img: np03, alt: "The poster lying on asphalt beside a yellow road marking" },
        { img: np04, alt: "Black-and-white photo of the poster held up against a graffiti-covered shutter" },
        { img: np05, alt: "The poster lying on a sunlit tiled pavement" },
      ],
      label: "poster",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #6 and #11 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: np06, alt: "The poster on a green and red graffiti shutter" },
            { img: np07, alt: "Overhead view of the poster lying on the roof and windscreen of a parked dark car" },
            { img: np08, alt: "The poster stuck to the side of a white van in front of graffiti shutters" },
            { img: np09, alt: "The poster on a red graffiti shutter, blurred by motion" },
            { img: np10, alt: "The poster dropped on the pavement in front of a tagged shutter" },
          ],
          label: "streets",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: np11, alt: "The poster on a purple and yellow graffiti wall" },
            { img: np12, alt: "The poster on the rear window of a car parked in a narrow street" },
            { img: np13, alt: "A small copy of the poster on a large mural of a woman's face, behind a tree" },
            { img: np14, alt: "The poster on a green graffiti-covered shutter" },
            { img: np15, alt: "Someone holding the poster in front of their face in the middle of a street" },
          ],
          label: "walls",
          ext: ".jpeg",
        },
      ],
    },
    preview: np03,
  },
  {
    slug: "photo-diary-134-exposures",
    title: "Photo Diary 134 Exposures",
    name: "Ph[o]to Diary",
    category: "Book",
    year: "2025",
    type: "Editorial Design",
    place: "Athens - Corfu, Gr",
    heroTitle: "Photo Diary 134 Exposures",
    description: [
      "Photo Diary — 134 Exposures is a photographic journal created for photographer Markella Floka, functioning as an archive of memory and personal narrative. The images capture fleeting moments suspended between the present and what is already lost, evoking a quiet sense of nostalgia.",
      "The design follows the fluid nature of memory, alternating between black & white and color — mirroring how recollections shift between vivid and faded. Printed on Arena paper, the 150-page book allows the images to breathe with subtlety and restraint.",
      "Inserted negative sheets act as temporal pauses, while Keaykolour Deep Black and Pumpkin 120 gsm papers reinforce a cohesive visual language. The result is not just a photobook, but a contemplative experience — where memory takes form, and absence becomes tangible.",
    ],
    detailLines: [
      ["Primary Papers: ", { label: "arena rough 120 gsm Fedrigoni", href: "https://specialpapers.fedrigoni.com/swatchbook/arena/" }],
      ["Tip ins / Cover: Keaykolour Deep Black | Keaykolour Pumpkin 120 gsm/300gsm"],
    ],
    hero: {
      slides: [
        { img: pd01, alt: "Hands leafing through the open photobook on a sunlit stone ledge" },
        { img: pd02, alt: "Square graphic with orange and black photographic textures and white monospace type" },
        { img: pd03, alt: "The photobook open at an orange-tinted spread on warm stone, a hand holding the page" },
        { img: pd04, alt: "The black Photo Diary, 134 Exposures cover propped on a blue and white cord chair", position: "50% 30%" },
      ],
      label: "book",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #9 is landscape (keeps ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: pd05, alt: "The black photobook leaning against the rear of a white vintage car" },
            { img: pd06, alt: "Someone holding the open photobook up against the sun above a metal chair base" },
            { img: pd07, alt: "The orange-covered edition lying on a black and white patterned blanket" },
            { img: pd08, alt: "Hands turning a page of the photobook on a patterned blanket" },
          ],
          label: "reading",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: pd09, alt: "A black and an orange copy of the book lying on weathered stone slabs", position: "70% 50%" },
            { img: pd10, alt: "The photobook resting on the louvred rear grille of a cream vintage car" },
            { img: pd11, alt: "The black photobook lying on a heap of fishing nets and ropes" },
            { img: pd12, alt: "The photobook on a stone ledge below a carved Latin inscription dated 1699" },
          ],
          label: "places",
          ext: ".jpeg",
        },
      ],
    },
    preview: pd04,
  },
  {
    slug: "porsche-911-carrera",
    title: "Porsche 911 Carrera",
    name: "Carr[e]ra",
    category: "Poster",
    year: "2025",
    type: "Poster Design",
    place: "Athens, Gr",
    heroTitle: "Porsche 911 Carrera",
    description: [
      // [NAME] = placeholder: replace with the name, as a link if wanted, e.g.
      // ["…our photographer, ", { label: "Name", href: "https://…" }]
      "For the 5th anniversary of Untitled Office, we created a 70×100 cm poster based on a photoshoot of a 1969 Porsche 911, in collaboration with our photographer, Zisis Ntalakouras.",
      "The poster was printed on Keaykolour Deep Black 120 gsm paper with silver Pantone 877, as well as on Curious Metallics Night paper, which closely resembles the metallic finish of the car.",
      "For the top-view shot, we applied a distinctive technique to emphasize the car’s bold curves and timeless design.",
      "To present the poster, we conducted a photoshoot featuring it both on the Porsche 911 itself and inside a specialized Porsche workshop in Greece, adding an authentic setting that enhances the vehicle’s iconic character.",
    ],
    details: "Primary Papers: Keaykolour Deep Black 120 gsm | Curious Metallics Night paper 120 gsm",
    // square hero: #1 is 4:3 (keeps 3/4 of its width)
    hero: {
      slides: [
        { img: pc01, alt: "Close-up of the black Carrera 1969 poster against blurred city lights" },
        { img: pc02, alt: "The Carrera 1969 poster draped over the front of a white Porsche 911 beside its headlight" },
        { img: pc03, alt: "The poster lying on the bonnet of a white Porsche 911 above the crest" },
        { img: pc04, alt: "The poster on the rear engine lid of a white Porsche 911 in a workshop" },
      ],
      label: "poster",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #6 is landscape (keeps ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: pc05, alt: "The poster on the bonnet of a gold Porsche 911 inside a workshop" },
            { img: pc06, alt: "Head-on view of the poster laid across the bonnet of a white Porsche 911" },
            { img: pc07, alt: "The poster hanging inside the raised engine lid of a yellow 911, in warm light" },
            { img: pc08, alt: "Black-and-white photo of the poster on a white 911 in a Porsche workshop" },
          ],
          label: "workshop",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: pc09, alt: "Black-and-white close-up of the Carrera 1969 lettering on the poster" },
            { img: pc10, alt: "The poster draped over the front wing of a white Porsche 911" },
            { img: pc11, alt: "The poster on the bonnet of a white Porsche 911 next to its round headlight" },
            { img: pc12, alt: "Close-up of the white 911's side window with the edge of the poster" },
          ],
          label: "details",
          ext: ".jpeg",
        },
      ],
    },
    preview: pc02,
  },
  {
    slug: "fore-handmade",
    title: "Fore Handmade",
    name: "F[o]re Handmade",
    category: "Branding",
    year: "2025",
    type: "Packaging Design",
    place: "Athens, Gr",
    heroTitle: "Fore Handmade",
    description: [
      "FORE is a handmade bag collection by Zerefo, created around the natural character of wood and leather. Each bag is made using materials such as chestnut, walnut, and nubuck leather, designed to age naturally and develop its own character over time.",
      "The visual direction for the printed and packaging materials was developed as an extension of the bags themselves, focusing on materiality, texture, and a sense of permanence.",
      "Fedrigoni Materica Kraft and Materica Rust papers were selected for the packaging, complementing the warm, natural tones of the collection. Accompanying paper materials were printed in Pantone 877C silver and signed by the creator, adding a personal and distinctive element to each piece.",
      "The combination of natural materials and tactile printing creates a visual language that reflects the handmade quality of FORE and the idea that each bag becomes more personal through time and use.",
    ],
    details: "Papers: Fedrigoni Materica Kraft | Materica Rust",
    // square hero: #1 is a tall flat lay (keeps the middle 2/3 of its height);
    // #3 is landscape (keeps 2/3 of its width)
    hero: {
      slides: [
        { img: fo01, alt: "Flat lay of wood-and-leather FORE bags, printed cards and a stone in a band of sunlight" },
        { img: fo02, alt: "A curved wooden bag with a suede flap holding a dark FORE HANDMADE card" },
        { img: fo03, alt: "Two wooden bags with leather straps on either side of a FORE HANDMADE card, in hard sunlight" },
        { img: fo04, alt: "Wooden bags, cards and a stone holding a printed text card, lit by a strip of sun" },
      ],
      label: "collection",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #7 and #11 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: fo05, alt: "FORE bags laid out with a FORE HANDMADE card and illustrated cards around a stone" },
            { img: fo06, alt: "Three wood-and-leather bags arranged with an illustrated card and a round stone" },
            { img: fo07, alt: "Two wooden bags with leather straps framing a FORE HANDMADE card in sunlight" },
            { img: fo08, alt: "A curved wooden bag with a suede flap, the FORE lettering inside, in a beam of light" },
          ],
          label: "bags",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: fo09, alt: "A FORE HANDMADE card and printed leaflets resting on a stone among the bags" },
            { img: fo10, alt: "A FORE card and leaflets on top of the wooden bags in a band of sunlight" },
            { img: fo11, alt: "Two wood-and-suede bags with a small card on a stone and a round pebble", position: "45% 50%" },
            { img: fo12, alt: "Overhead flat lay of FORE bags and cards in a strip of sunlight" },
          ],
          label: "print",
          ext: ".jpeg",
        },
      ],
    },
    preview: fo02,
  },
  {
    slug: "untitled-jpeg",
    title: "Untitled jpeg",
    name: "Untitl[e]d jpeg",
    category: "Book",
    year: "2022",
    type: "Editorial Design",
    place: "Athens, Gr",
    heroTitle: "Untitled jpeg",
    description: [
      "“Untitled.jpeg” zine deals with a day in a modern urban environment and the information a designer receives from the city and its stimuli.",
      "The digital implementation process is depicted on the zine from the designer's point of view, as the images and vector files begin to converse with the designer during the classification of categories. (Jpeg, eps, Ai, psd) etc.",
      "The decision to render the image with a brutalist pattern, revealing the file type, semiotically signals the varied information one encounters in contemporary urban cities.",
      ["The zine was completed for the “", { label: "checkout tomorrow", href: "https://akto.gr/checkout-tomorrow/" }, "” exhibition to celebrate Akto School’s & Pressious Arvanitidis 50th anniversary."],
    ],
    detailLines: [
      ["Papers: Colorplan Mist | Colorplan Candy Pink 135 gsm"],
      ["Cover: Colorplan Claret | Colorplan Harvest 270 gsm"],
    ],
    // square hero: both are landscape (keep 2/3 of their width).
    // #2 is a still frame of an animated GIF.
    hero: {
      slides: [
        { img: uj01, alt: "Grid of pink and white zine pages with large file-type labels such as EPS, PSD and JPG, on black" },
        { img: uj02, alt: "The zine's claret cover beside an open pink spread with a black brutalist pattern, on black", position: "60% 50%" },
      ],
      label: "zine",
      ext: ".jpeg",
    },
    // 4:5 panel carousels. #3 and #6 are landscape (keep ~53% of the width)
    gallery: {
      carousels: [
        {
          slides: [
            { img: uj03, alt: "Hands holding the zine open at a pink spread in a dim gallery", position: "60% 50%" },
            { img: uj04, alt: "Hands holding the zine open at a page reading 1A → EPS" },
            { img: uj05, alt: "Hands holding the zine open at pages of repeated ATH lettering" },
          ],
          label: "pages",
          ext: ".jpeg",
        },
        {
          slides: [
            { img: uj06, alt: "Zine pages hung in the air as an exhibition installation" },
            { img: uj07, alt: "A hand holding the zine open at patterned pages in low light" },
            { img: uj08, alt: "The zine standing open on a white plinth at the exhibition, visitors blurred behind" },
          ],
          label: "exhibition",
          ext: ".jpeg",
        },
      ],
    },
    preview: uj08,
  },
];

/** what the site shows: every project without `hidden`, in list order */
export const projects: Project[] = allProjects.filter((p) => !p.hidden);

/** filter tabs that have at least one visible project */
export const visibleCategories = CATEGORIES.filter((c) => projects.some((p) => p.category === c));

export const nextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
