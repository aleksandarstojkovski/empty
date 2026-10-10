// Every version reachable from the hub. Keep originale-switch.js in sync.
export type Version = {
  id: string;
  base: string;
  name: string;
  group: "simple2" | "simple" | "pop" | "elegant" | "ref";
  mood: string;
  text: string;
  bg: string;
  fg: string;
  swatches: string[];
  /** Served as a separate page (the clone), so links must reload the page. */
  reload?: boolean;
};

export const VERSIONS: Version[] = [
  {
    id: "notte",
    base: "/notte",
    name: "Notte",
    group: "simple2",
    mood: "Scuro e ambra · Figtree",
    text: "Tutto in versione scura, con l'ambra per pulsanti e numeri. Apertura a riquadri: testo, foto, voto Google e disponibilità 24/7.",
    bg: "#0D0F13",
    fg: "#F2F3F5",
    swatches: ["#0D0F13", "#F5B301", "#171A21", "#F2F3F5"],
  },
  {
    id: "fresco",
    base: "/fresco",
    name: "Fresco",
    group: "simple2",
    mood: "Bianco e verde petrolio · DM Sans",
    text: "Chiaro e rassicurante. In apertura una mini valutazione: marca, modello, anno e km, e parte il messaggio WhatsApp già scritto.",
    bg: "#F1F7F5",
    fg: "#102A26",
    swatches: ["#FFFFFF", "#0F766E", "#E2F3EF", "#0B3B36"],
  },
  {
    id: "lago",
    base: "/lago",
    name: "Lago",
    group: "simple2",
    mood: "Blu notte e corallo · Outfit",
    text: "Apertura in un grande riquadro blu notte, titoli centrati, card morbide senza bordi e corallo per le azioni.",
    bg: "#0B2545",
    fg: "#FFFFFF",
    swatches: ["#0B2545", "#F2643D", "#F1F5FA", "#FFFFFF"],
  },
  {
    id: "pulito",
    base: "/pulito",
    name: "Pulito",
    group: "simple",
    mood: "Bianco e blu · Inter",
    text: "Chiaro e ordinato: foto accanto al titolo, card con bordi leggeri, blu come unico colore. Il più neutro dei tre.",
    bg: "#FFFFFF",
    fg: "#0F172A",
    swatches: ["#FFFFFF", "#1D5BD8", "#F5F7FA", "#0F172A"],
  },
  {
    id: "concessionaria",
    base: "/concessionaria",
    name: "Concessionaria",
    group: "simple",
    mood: "Grafite e rosso · Manrope",
    text: "Da concessionaria: foto a tutta larghezza in apertura, testata scura, angoli netti e rosso per le azioni.",
    bg: "#16181D",
    fg: "#FFFFFF",
    swatches: ["#16181D", "#D7261E", "#F4F4F5", "#FFFFFF"],
  },
  {
    id: "diretto",
    base: "/diretto",
    name: "Diretto",
    group: "simple",
    mood: "Caldo e arancio · Plus Jakarta Sans",
    text: "Amichevole e diretto: titolo centrato, angoli morbidi, pulsanti arrotondati e arancio come colore guida.",
    bg: "#F8F7F4",
    fg: "#1C1917",
    swatches: ["#F8F7F4", "#EA6A1F", "#FFFFFF", "#1C1917"],
  },
  {
    id: "v1",
    base: "/v1",
    name: "Autosalone",
    group: "pop",
    mood: "Terra terra · giallo e nero",
    text: "Insegna da autosalone: scritte enormi, bollini a timbro, cartellini prezzo, strisce da cantiere e pulsanti che vibrano.",
    bg: "#FFD400",
    fg: "#111111",
    swatches: ["#FFD400", "#111111", "#E3181B", "#FFFFFF"],
  },
  {
    id: "v2",
    base: "/v2",
    name: "Trailer",
    group: "pop",
    mood: "Teatrale · cinematografico",
    text: "Come il trailer di un film: foto a tutto schermo, parole che arrivano a colpi, bande nere da cinema e scene bloccate durante lo scroll.",
    bg: "#0A0A0A",
    fg: "#FFFFFF",
    swatches: ["#0A0A0A", "#FFFFFF", "#E10600", "#2B2B2B"],
  },
  {
    id: "v3",
    base: "/v3",
    name: "Volantino Pop",
    group: "pop",
    mood: "Popolare · poster a colori",
    text: "Colori pieni, contorni neri spessi, ombre sfalsate, adesivi e card storte che rimbalzano. Allegro e d'impatto.",
    bg: "#2B50E6",
    fg: "#FFFFFF",
    swatches: ["#2B50E6", "#FF3B30", "#FFD23F", "#111111"],
  },
  {
    id: "alpino",
    base: "/alpino",
    name: "Alpino",
    group: "elegant",
    mood: "Editoriale premium · chiaro",
    text: "Carta calda, inchiostro blu notte e accento terracotta. Serif espressivo, scroll fluido, rivelazioni parola per parola.",
    bg: "#F4F0E8",
    fg: "#13202B",
    swatches: ["#F4F0E8", "#13202B", "#B4532A", "#E3D9C6"],
  },
  {
    id: "originale",
    base: "/originale",
    name: "Originale",
    group: "ref",
    mood: "Clone pixel-perfect",
    text: "La copia fedele del sito attuale, per confrontare ogni pagina con le nuove grafiche.",
    bg: "#FFFFFF",
    fg: "#061946",
    swatches: ["#FFFFFF", "#061946", "#ECF8FE", "#25D366"],
    reload: true,
  },
];

/** Pages offered by the hub's "open this page in every version" picker. */
export const COMPARE_PAGES = [
  { path: "", label: "Home" },
  { path: "/servizi", label: "Servizi" },
  { path: "/come-funziona", label: "Come funziona" },
  { path: "/tipologie-auto", label: "Tipologie auto" },
  { path: "/valutazione-gratuita", label: "Valutazione gratuita" },
  { path: "/compro-auto-pochi-km", label: "Auto con pochi km" },
  { path: "/zone-servite", label: "Zone servite" },
  { path: "/compro-auto/ticino", label: "Compro auto Ticino" },
  { path: "/compro-auto/lugano", label: "Compro auto Lugano" },
  { path: "/compro-auto/locarno", label: "Compro auto Locarno" },
  { path: "/compro-auto/bellinzona", label: "Compro auto Bellinzona" },
  { path: "/compro-auto/mendrisio", label: "Compro auto Mendrisio" },
  { path: "/compro-auto/biasca", label: "Compro auto Biasca" },
  { path: "/chi-siamo", label: "Chi siamo" },
  { path: "/dicono-di-noi", label: "Dicono di noi" },
  { path: "/faq", label: "FAQ" },
  { path: "/contatti", label: "Contatti" },
  { path: "/blog", label: "Blog" },
];

/** Splits "/v2/faq" into the version and the page path inside it. */
export function splitPath(pathname: string): { version: Version | null; sub: string } {
  const v = VERSIONS.find((x) => pathname === x.base || pathname.startsWith(`${x.base}/`));
  if (!v) return { version: null, sub: "" };
  const sub = pathname.slice(v.base.length).replace(/\/$/, "");
  return { version: v, sub };
}
