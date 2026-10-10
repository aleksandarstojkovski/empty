import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import "@fontsource-variable/inter";
import { COMPARE_PAGES, VERSIONS, type Version } from "./versions";

// Home-page screenshots of each version (src/assets/hub/<id>.webp), if present.
const THUMBS = import.meta.glob<string>("./assets/hub/*.webp", { eager: true, import: "default" });
const thumb = (id: string) => THUMBS[`./assets/hub/${id}.webp`];

const GROUPS: { id: Version["group"]; title: string; text: string }[] = [
  { id: "simple3", title: "Proposta 5 · Varianti di Pulito e Diretto", text: "Bordeaux e Giallo come Pulito, Cielo e Bosco come Diretto: altri colori e dettagli." },
  { id: "simple2", title: "Proposta 4 · Semplice, nuove varianti", text: "Stessa semplicità della proposta 3, con grafica e apertura diverse." },
  { id: "simple", title: "Proposta 3 · Semplice e professionale", text: "Font normali, colori sobri, animazioni discrete." },
  { id: "pop", title: "Proposta 2 · Popolare e teatrale", text: "La seconda proposta, scartata." },
  { id: "elegant", title: "Proposta 1 · Elegante", text: "La prima proposta, scartata perché troppo elegante." },
  { id: "ref", title: "Riferimento", text: "Il sito com'è oggi, per il confronto pagina per pagina." },
];

function Card({ v, sub, i }: { v: Version; sub: string; i: number }) {
  const href = v.base + sub;
  const img = thumb(v.id);
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl" style={{ boxShadow: `inset 0 0 0 1px ${v.fg}22` }}>
        {img ? (
          <img src={img} alt={`Anteprima della versione ${v.name}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
        ) : (
          <div className="flex h-full w-full" aria-hidden="true">
            {v.swatches.map((s) => (
              <span key={s} className="flex-1" style={{ background: s }} />
            ))}
          </div>
        )}
      </div>
      <span className="mt-5 self-start rounded-full border border-current px-3 py-1 text-xs font-semibold opacity-70">{v.mood}</span>
      <h3 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{v.name}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed opacity-75">{v.text}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex -space-x-2">
          {v.swatches.map((s) => (
            <span key={s} className="h-7 w-7 rounded-full border-2" style={{ background: s, borderColor: v.bg }} />
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          Apri
          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">→</span>
        </span>
      </div>
    </>
  );
  const cls = "group flex h-full flex-col rounded-3xl p-5 transition-transform duration-500 hover:-translate-y-1.5 md:p-6";
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      {v.reload ? (
        <a href={href} className={cls} style={{ background: v.bg, color: v.fg }}>
          {body}
        </a>
      ) : (
        <Link href={href} className={cls} style={{ background: v.bg, color: v.fg }}>
          {body}
        </Link>
      )}
    </motion.div>
  );
}

export default function Hub() {
  const [sub, setSub] = useState("");
  let n = 0;
  return (
    <main className="min-h-screen bg-[#0d0f12] px-4 py-10 text-white md:px-10 md:py-14" style={{ fontFamily: "'Inter Variable', sans-serif" }}>
      <header className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">MAS Global Trade · Hub delle versioni</p>
        <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">Tutte le versioni, stesso contenuto.</h1>
          <label className="flex flex-col gap-2 text-sm text-white/60 md:w-80">
            Apri in ogni versione la pagina
            <select
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              className="h-12 rounded-xl border border-white/15 bg-white/5 px-4 text-base font-medium text-white outline-none focus:border-white/50"
            >
              {COMPARE_PAGES.map((p) => (
                <option key={p.path} value={p.path} className="bg-[#0d0f12]">
                  {p.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
          Ogni versione ha tutte le pagine del sito. Dentro una versione, il pulsante in basso a sinistra porta alla stessa pagina in un'altra versione o di nuovo qui.
        </p>
      </header>

      {GROUPS.map((g) => (
        <section key={g.id} className="mx-auto mt-14 max-w-7xl" aria-labelledby={`g-${g.id}`}>
          <div className="mb-5 flex flex-col gap-1 border-t border-white/10 pt-6 md:flex-row md:items-baseline md:justify-between">
            <h2 id={`g-${g.id}`} className="text-xl font-semibold md:text-2xl">
              {g.title}
            </h2>
            <p className="text-sm text-white/50">{g.text}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VERSIONS.filter((v) => v.group === g.id).map((v) => (
              <Card key={v.id} v={v} sub={sub} i={n++} />
            ))}
            {g.id === "elegant" && (
              <div className="flex flex-col justify-end rounded-3xl border border-dashed border-white/20 p-6 text-sm leading-relaxed text-white/55">
                <p className="text-base font-semibold text-white/80">Velocity e Kontrast</p>
                <p className="mt-2">Le altre due bozze di questa proposta sono state interrotte prima di essere completate, quando abbiamo cambiato direzione. Posso completarle se vuoi confrontarle.</p>
              </div>
            )}
            {g.id === "ref" && (
              <a
                href={`https://masglobaltrade.ch${sub}`}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-end rounded-3xl border border-white/15 p-6 transition-colors hover:bg-white/5"
              >
                <p className="text-base font-semibold">Sito live ↗</p>
                <p className="mt-2 text-sm leading-relaxed text-white/55">masglobaltrade.ch, la stessa pagina sul sito pubblicato.</p>
              </a>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
