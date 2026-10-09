import { motion } from "framer-motion";
import { Link } from "wouter";
import "@fontsource-variable/inter";

const VERSIONS = [
  {
    href: "/v1",
    n: "01",
    name: "Alpino",
    mood: "Editoriale premium · chiaro",
    text: "Carta calda, inchiostro blu notte e accento terracotta. Serif espressivo, scroll fluido, rivelazioni parola per parola, processo raccontato scorrendo.",
    bg: "#F4F0E8",
    fg: "#13202B",
    swatches: ["#F4F0E8", "#13202B", "#B4532A", "#E3D9C6"],
  },
  {
    href: "/v2",
    n: "02",
    name: "Velocity",
    mood: "Automotive · scuro e tecnologico",
    text: "Nero profondo, lime elettrico e ciano. Aurora animata, griglia in prospettiva, card con tilt 3D, tachimetro e processo in scroll orizzontale.",
    bg: "#07090D",
    fg: "#E9EEF6",
    swatches: ["#07090D", "#C6FF3D", "#3DD6FF", "#1A2130"],
  },
  {
    href: "/v3",
    n: "03",
    name: "Kontrast",
    mood: "Svizzero audace · colorato",
    text: "Rosso svizzero, cobalto e giallo sole. Titoli giganti cinetici, badge rotante, bento grid, card che si impilano e nastri che scorrono.",
    bg: "#E3262E",
    fg: "#FFFFFF",
    swatches: ["#FAFAF7", "#E3262E", "#2B50E6", "#FFD23F"],
  },
];

export default function Chooser() {
  return (
    <main className="min-h-screen bg-[#0d0f12] px-5 py-10 text-white md:px-10 md:py-14" style={{ fontFamily: "'Inter Variable', sans-serif" }}>
      <header className="mx-auto mb-10 flex max-w-7xl flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">MAS Global Trade · Redesign</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Tre direzioni, stesso contenuto.</h1>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-white/60">
          Ogni versione contiene tutte le pagine del sito (home, servizi, zone, città, blog, FAQ, contatti). Scegli una direzione per esplorarla.
        </p>
      </header>
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {VERSIONS.map((v, i) => (
          <motion.div key={v.href} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <Link
              href={v.href}
              className="group relative flex min-h-[460px] flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-2 md:min-h-[560px]"
              style={{ background: v.bg, color: v.fg }}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold opacity-60">{v.n}</span>
                <span className="rounded-full border border-current px-3 py-1 text-xs font-semibold opacity-70">{v.mood}</span>
              </div>
              <div>
                <h2 className="text-6xl font-semibold tracking-tight transition-transform duration-500 group-hover:-translate-y-1 md:text-7xl">{v.name}</h2>
                <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-75">{v.text}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {v.swatches.map((s) => (
                      <span key={s} className="h-8 w-8 rounded-full border-2" style={{ background: s, borderColor: v.bg }} />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    Esplora
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
