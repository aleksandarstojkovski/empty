import type { BlogPost } from "./api";

// Grouping of blog posts on /blog. Posts not listed fall into the first group;
// a few older posts are kept reachable by URL but hidden from listings.
export const BLOG_GROUPS = [
  { id: "valutazione-prezzo", title: "Valutazione e prezzo", description: "Come capire quanto vale l'auto e scegliere il canale di vendita." },
  { id: "documenti-pratiche", title: "Documenti e pratiche", description: "Targhe, carta grigia, collaudo, costi e documenti necessari." },
  { id: "casi-particolari", title: "Casi particolari", description: "Incidentate, leasing, eredità, molti chilometri e situazioni speciali." },
] as const;

const HIDDEN = new Set([
  "documenti-necessari-vendere-auto-svizzera",
  "auto-usate-cosa-controllare-prima-comprare",
  "momento-giusto-vendere-auto-ticino",
  "come-ottenere-massimo-vendita-auto-usata",
  "comprare-auto-usata-privato-svizzera-rischi",
  "differenza-auto-usata-garantita-non-garantita-svizzera",
]);

const GROUP_OF: Record<string, (typeof BLOG_GROUPS)[number]["id"]> = {
  "vendere-auto-tra-privati-ticino-rischi": "valutazione-prezzo",
  "vendo-auto-lugano": "valutazione-prezzo",
  "vendere-auto-autoscout-ticino-vale-la-pena": "valutazione-prezzo",
  "come-vendere-auto-ticino": "valutazione-prezzo",
  "rivenditore-o-garage-ufficiale-chi-paga-di-piu": "valutazione-prezzo",
  "perche-agenzie-ufficiali-pagano-meno-auto-usata": "valutazione-prezzo",
  "quanto-vale-mia-auto-usata-ticino": "valutazione-prezzo",
  "quanto-tempo-ci-vuole-vendere-auto-ticino": "valutazione-prezzo",
  "quanto-si-svaluta-auto-svizzera": "valutazione-prezzo",
  "collaudo-troppo-caro-conviene-vendere-auto": "documenti-pratiche",
  "come-togliere-targhe-auto-ticino": "documenti-pratiche",
  "come-annullare-carta-grigia-ticino": "documenti-pratiche",
  "trasferire-residenza-auto-cantone-svizzera": "documenti-pratiche",
  "documenti-vendere-auto-ticino": "documenti-pratiche",
  "quanto-costa-assicurare-auto-ticino": "documenti-pratiche",
  "imposta-circolazione-auto-ticino": "documenti-pratiche",
  "come-controllare-storico-auto-usata-svizzera": "documenti-pratiche",
  "come-funziona-collaudo-auto-ticino": "documenti-pratiche",
  "ho-ricevuto-auto-in-eredita-cosa-faccio": "casi-particolari",
  "italiani-svizzera-vendere-auto-prima-tornare-italia": "casi-particolari",
  "vendere-auto-aziendale-ticino": "casi-particolari",
  "auto-rotta-vale-pena-ripararla-o-venderla-ticino": "casi-particolari",
  "vendere-auto-non-intestata-a-me-ticino": "casi-particolari",
  "vendere-auto-incidentata-ticino": "casi-particolari",
  "vendere-auto-molti-chilometri-ticino": "casi-particolari",
  "come-funziona-leasing-auto-svizzera": "casi-particolari",
  "auto-elettrica-o-benzina-ticino-2026": "casi-particolari",
};

export const isListed = (p: BlogPost) => !HIDDEN.has(p.slug);
export const groupOf = (p: BlogPost) => BLOG_GROUPS.find((g) => g.id === (GROUP_OF[p.slug] ?? "valutazione-prezzo")) ?? BLOG_GROUPS[0];

export function groupPosts(posts: BlogPost[]) {
  const listed = posts.filter(isListed);
  return BLOG_GROUPS.map((g) => ({ ...g, posts: listed.filter((p) => groupOf(p).id === g.id) }));
}

/** Up to `n` related posts, same group first. */
export function relatedPosts(posts: BlogPost[], slug: string, n = 3) {
  const current = posts.find((p) => p.slug === slug);
  const others = posts.filter(isListed).filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, n);
  const g = groupOf(current).id;
  return [...others.filter((p) => groupOf(p).id === g), ...others.filter((p) => groupOf(p).id !== g)].slice(0, n);
}
