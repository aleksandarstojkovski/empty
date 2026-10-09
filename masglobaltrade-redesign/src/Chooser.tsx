import { motion } from "framer-motion";
import { Link } from "wouter";
import "@fontsource-variable/inter";

const VERSIONS = [
  {
    href: "/v1",
    n: "01",
    name: "Autosalone",
    mood: "Terra terra · giallo e nero",
    text: "Insegna da autosalone: scritte enormi, bollini a timbro, cartellini prezzo, strisce da cantiere e pulsanti che vibrano. Diretto e commerciale.",
    bg: "#FFD400",
    fg: "#111111",
    swatches: ["#FFD400", "#111111", "#E3181B", "#FFFFFF"],
  },
  {
    href: "/v2",
    n: "02",
    name: "Trailer",
    mood: "Teatrale · cinematografico",
    text: "Come il trailer di un film: foto a tutto schermo, parole che arrivano a colpi, bande nere da cinema, flash tra le pagine e scene bloccate durante lo scroll.",
    bg: "#0A0A0A",
    fg: "#FFFFFF",
    swatches: ["#0A0A0A", "#FFFFFF", "#E10600", "#2B2B2B"],
  },
  {
    href: "/v3",
    n: "03",
    name: "Volantino Pop",
    mood: "Popolare · poster a colori",
    text: "Stile poster e volantino: colori pieni, contorni neri spessi, ombre sfalsate, adesivi e card storte che rimbalzano. Allegro e d'impatto.",
    bg: "#2B50E6",
    fg: "#FFFFFF",
    swatches: ["#2B50E6", "#FF3B30", "#FFD23F", "#111111"],
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
