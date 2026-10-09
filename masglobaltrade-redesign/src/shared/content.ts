export type Block =
  | { t: "eyebrow" | "badge" | "quote"; html: string }
  | { t: "heading"; level: number; html: string }
  | { t: "text"; html: string; small?: boolean }
  | { t: "list"; ordered?: boolean; items: { html: string; icon?: string }[] }
  | { t: "cta"; items: { label: string; href: string; kind: string }[] }
  | { t: "meta"; items: { icon?: string; html: string }[] }
  | { t: "grid"; cols: number; items: { blocks: Block[] }[] }
  | { t: "icon"; name: string }
  | { t: "number" | "stat"; text: string }
  | { t: "stars"; n: number }
  | { t: "image"; src: string; alt: string }
  | { t: "faq"; items: { q: string; a: string }[] }
  | { t: "chips"; items: string[] }
  | { t: "links"; items: { label: string; href: string }[] }
  | { t: "form" | "reviews" | "logos" };

export type Section = { tone: "dark" | "tint" | "light"; image: { src: string; alt: string } | null; hero?: boolean; blocks: Block[] };
export type Page = { slug: string; title: string; description: string; sections: Section[] };

import { FAQS as FAQ_PAGE } from "@clone/pages/Faq";

const modules = import.meta.glob<Page>("../content/pages/*.json", { eager: true, import: "default" });

/**
 * The FAQ page's answers are only rendered on click on the original site, so the
 * capture holds just the questions; rebuild that list as a real FAQ block.
 */
function withFaqAnswers(p: Page): Page {
  if (p.slug !== "/faq") return p;
  const qs = new Set(FAQ_PAGE.map((f) => f.q));
  return {
    ...p,
    sections: p.sections.map((s) => {
      const blocks: Block[] = [];
      for (const b of s.blocks) {
        if (b.t === "heading" && qs.has(b.html.replace(/<[^>]+>/g, "").trim())) {
          if (blocks[blocks.length - 1]?.t !== "faq") blocks.push({ t: "faq", items: FAQ_PAGE.map((f) => ({ q: f.q, a: `<p>${f.a}</p>` })) });
        } else blocks.push(b);
      }
      return { ...s, blocks };
    }),
  };
}

export const PAGES: Record<string, Page> = Object.fromEntries(Object.values(modules).map((p) => [p.slug, withFaqAnswers(p)]));

/** Splits a section into its header (eyebrow/badge, title, lead) and the remaining body blocks. */
export function splitSection(s: Section) {
  const blocks = [...s.blocks];
  const head: { eyebrow?: string; title?: string; level?: number; lead: string[] } = { lead: [] };
  const plain = (h: string) => h.replace(/<[^>]+>/g, "").trim();
  // The title is the first h1/h2 among the opening blocks; short text before it acts as the eyebrow.
  const idx = blocks.findIndex((b) => b.t === "heading" && b.level <= 2);
  if (idx < 0 || idx > 2) return { head, body: blocks };
  const pre = blocks.slice(0, idx);
  const title = blocks[idx] as Extract<Block, { t: "heading" }>;
  const rest = blocks.slice(idx + 1);
  const keep: Block[] = [];
  for (const b of pre) {
    if (!head.eyebrow && (b.t === "eyebrow" || b.t === "badge" || (b.t === "text" && plain(b.html).length < 80))) head.eyebrow = b.html;
    else keep.push(b);
  }
  head.title = title.html;
  head.level = title.level;
  while (rest.length && rest[0].t === "text" && !(rest[0] as { small?: boolean }).small && head.lead.length < 2) head.lead.push((rest.shift() as { html: string }).html);
  return { head, body: [...keep, ...rest] };
}

/** Classifies a card so designs can style steps, testimonials, media cards, etc. differently. */
export function cardKind(blocks: Block[]) {
  const has = (t: Block["t"]) => blocks.some((b) => b.t === t);
  if (has("quote") || (has("stars") && blocks.length <= 6 && blocks.some((b) => b.t === "text"))) return "quote";
  if (has("number")) return "step";
  if (has("stat")) return "stat";
  if (has("image") && blocks.length <= 2) return "media";
  if (has("image")) return "photo";
  if (has("icon") || blocks.some((b) => b.t === "heading")) return "feature";
  return "plain";
}

/**
 * Hero sections sometimes nest their text in a two-column grid next to a photo
 * with a caption. Flattens that into: photo (with caption) + plain blocks.
 */
export function normalizeHero(s: Section): { section: Section; caption: string[] } {
  const flat: Block[] = [];
  for (const b of s.blocks) {
    // Only unwrap the layout grid (the one holding the title or the photo), not stat grids.
    const isLayout = b.t === "grid" && b.items.some((it) => it.blocks.some((x) => (x.t === "heading" && x.level === 1) || x.t === "image"));
    if (isLayout) for (const it of b.items) flat.push(...it.blocks);
    else flat.push(b);
  }
  let image = s.image;
  const caption: string[] = [];
  const out: Block[] = [];
  let afterImage = false;
  for (const b of flat) {
    if (b.t === "image") {
      if (!image) image = { src: b.src, alt: b.alt };
      afterImage = true;
      continue;
    }
    // Short text right after the photo is its caption.
    if (afterImage && (b.t === "eyebrow" || b.t === "text") && b.html.replace(/<[^>]+>/g, "").trim().length < 60 && caption.length < 2 && !(b.t === "text" && /attivo|servizio/i.test(b.html))) {
      caption.push(b.html);
      continue;
    }
    afterImage = false;
    out.push(b);
  }
  return { section: { ...s, image, blocks: out }, caption };
}
