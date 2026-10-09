import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReviews } from "@clone/lib/api";
import { LOGOS } from "@clone/sections/Logos";
import { Icon, WhatsAppIcon } from "../../shared/Icon";
import { Marquee, Reveal } from "../../shared/motion";
import { REVIEWS_URL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";

const ease = [0.16, 1, 0.3, 1] as const;

/** Words that punch in one after another, like trailer title cards. */
export function Beats({ text, className, delay = 0, as: Tag = "h2" }: { text: string; className?: string; delay?: number; as?: "h1" | "h2" | "h3" }) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: "inline-block", marginRight: "0.2em" }}
          initial={{ opacity: 0, scale: 2.4, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease, delay: delay + i * 0.11 }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}

export function CallButtons({ phone = "Chiama ora", onRed = false }: { phone?: string; onRed?: boolean }) {
  return (
    <>
      <a href={TEL} className={`btn ${onRed ? "btn--w" : "btn--r"}`}>
        <Icon name="phone" /> {phone}
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--line">
        <WhatsAppIcon /> WhatsApp
      </a>
    </>
  );
}

export function Reviews() {
  const { data, isLoading } = useReviews();
  const reviews = (data?.reviews ?? []).slice(0, 8);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 6500);
    return () => clearInterval(t);
  }, [paused, reviews.length]);
  const r = reviews[i];
  const rating = data?.rating ?? 4.9;
  return (
    <section className="sec sec--2" id="recensioni">
      <div className="wrap">
        <div className="sec-head">
          <span className="kick">{HOME.reviews.eyebrow}</span>
          <Beats text={HOME.reviews.title} className="h-sec" />
        </div>
        <div className="press">
          <Reveal className="press__score">
            <b>{rating.toFixed(1)}</b>
            <div className="press__stars">
              {Array.from({ length: 5 }, (_, k) => (
                <Icon key={k} name="star" />
              ))}
            </div>
            <span>{data?.userRatingCount ? `${data.userRatingCount} recensioni verificate` : HOME.reviews.intro}</span>
            <div style={{ marginTop: 22 }}>
              <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="more">
                Leggi tutte le recensioni <Icon name="arrow-right" />
              </a>
            </div>
          </Reveal>
          <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            {isLoading && <div className="skeleton" style={{ height: 300 }} />}
            {!isLoading && !r && <p>Le recensioni verificate saranno disponibili tra poco. Puoi leggere tutte le esperienze dei nostri clienti su Google.</p>}
            {r && (
              <AnimatePresence mode="wait">
                <motion.figure key={r.id} style={{ margin: 0 }} initial={{ opacity: 0, x: 60, filter: "blur(8px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} exit={{ opacity: 0, x: -60, filter: "blur(8px)" }} transition={{ duration: 0.6, ease }}>
                  <blockquote className="press__quote">{r.content}</blockquote>
                  <figcaption className="press__who">
                    {r.profilePhotoUrl ? <img src={r.profilePhotoUrl} alt={r.authorName} referrerPolicy="no-referrer" /> : <span className="av">{r.authorName.charAt(0)}</span>}
                    <span>
                      {r.authorName} — {r.relativeTime}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            )}
            {reviews.length > 1 && (
              <div className="press__nav">
                <button type="button" className="sq" aria-label="Recensione precedente" onClick={() => setI((x) => (x - 1 + reviews.length) % reviews.length)}>
                  <Icon name="arrow-left" />
                </button>
                <button type="button" className="sq" aria-label="Recensione successiva" onClick={() => setI((x) => (x + 1) % reviews.length)}>
                  <Icon name="arrow-right" />
                </button>
                <span className="press__count">
                  <b>{String(i + 1).padStart(2, "0")}</b> / {String(reviews.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  return (
    <section className="logos" aria-label={HOME.logos.label}>
      <div className="logos__label">
        <span className="kick">{HOME.logos.label}</span>
      </div>
      <Marquee duration={34}>
        {LOGOS.map((l) => (
          <div key={l.src}>
            <img src={l.src} alt={l.alt} loading="lazy" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
