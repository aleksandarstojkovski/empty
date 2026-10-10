import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReviews } from "@clone/lib/api";
import { LOGOS } from "@clone/sections/Logos";
import { Icon, WhatsAppIcon } from "../../shared/Icon";
import { Marquee, Reveal } from "../../shared/motion";
import { REVIEWS_URL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";

const ease = [0.22, 1, 0.36, 1] as const;
const AVATAR = ["#b4532a", "#13202b", "#5b7a6a", "#c08a3e"];

export function CallButtons({ light = false, phoneLabel = "Chiama ora" }: { light?: boolean; phoneLabel?: string }) {
  return (
    <>
      <a href={TEL} className={`btn ${light ? "btn--accent" : "btn--ink"}`}>
        <Icon name="phone" /> {phoneLabel}
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`btn ${light ? "btn--light" : "btn--line"}`}>
        <WhatsAppIcon /> WhatsApp
      </a>
    </>
  );
}

/** Large one-at-a-time quote carousel fed by the live Google reviews endpoint. */
export function Reviews() {
  const { data, isLoading } = useReviews();
  const reviews = (data?.reviews ?? []).slice(0, 6);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 7000);
    return () => clearInterval(t);
  }, [paused, reviews.length]);
  const r = reviews[i];
  const rating = data?.rating ?? 4.9;

  return (
    <section className="sec" id="recensioni">
      <div className="wrap rev">
        <Reveal>
          <span className="kicker">{HOME.reviews.eyebrow}</span>
          <h2 className="h-section" style={{ margin: "22px 0 20px" }}>
            {HOME.reviews.title}
          </h2>
          <p style={{ color: "var(--ink-2)", fontSize: 18, maxWidth: 420 }}>{HOME.reviews.intro}</p>
          <div style={{ marginTop: 40, display: "flex", alignItems: "flex-end", gap: 22 }}>
            <span className="rev__score">{rating.toFixed(1)}</span>
            <div style={{ paddingBottom: 10 }}>
              <div className="rev__stars">
                {Array.from({ length: 5 }, (_, k) => (
                  <Icon key={k} name="star" />
                ))}
              </div>
              <p style={{ margin: "10px 0 0", fontSize: 14, color: "var(--muted)" }}>{data?.userRatingCount ? `${data.userRatingCount} recensioni verificate` : "Recensioni verificate"}</p>
            </div>
          </div>
          <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="arrow-link" style={{ marginTop: 26 }}>
            Leggi tutte le recensioni <Icon name="arrow-right" />
          </a>
        </Reveal>
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {isLoading && <div className="skeleton" style={{ height: 320 }} />}
          {!isLoading && !r && (
            <p style={{ fontSize: 18, color: "var(--ink-2)" }}>
              Le recensioni verificate saranno disponibili tra poco. Puoi leggere tutte le esperienze dei nostri clienti su Google.
            </p>
          )}
          {r && (
            <AnimatePresence mode="wait">
              <motion.figure key={r.id} style={{ margin: 0 }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.7, ease }}>
                <blockquote className="rev__quote">{r.content}</blockquote>
                <figcaption className="rev__who">
                  {r.profilePhotoUrl ? (
                    <img src={r.profilePhotoUrl} alt={r.authorName} referrerPolicy="no-referrer" />
                  ) : (
                    <span className="av" style={{ background: AVATAR[i % AVATAR.length] }}>
                      {r.authorName.charAt(0)}
                    </span>
                  )}
                  <div>
                    <strong>{r.authorName}</strong>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>{r.relativeTime} · Google</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          )}
          {reviews.length > 1 && (
            <div className="rev__nav">
              <button type="button" aria-label="Recensione precedente" onClick={() => setI((x) => (x - 1 + reviews.length) % reviews.length)}>
                <Icon name="arrow-left" />
              </button>
              <button type="button" aria-label="Recensione successiva" onClick={() => setI((x) => (x + 1) % reviews.length)}>
                <Icon name="arrow-right" />
              </button>
              <div className="rev__dots" aria-hidden="true">
                {reviews.map((_, k) => (
                  <i key={k} className={k === i ? "on" : ""} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  return (
    <section className="logos" aria-label={HOME.logos.label}>
      <div className="wrap" style={{ marginBottom: 28 }}>
        <span className="kicker">{HOME.logos.label}</span>
      </div>
      <Marquee duration={36}>
        {LOGOS.map((l) => (
          <div key={l.src}>
            <img src={l.src} alt={l.alt} loading="lazy" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
