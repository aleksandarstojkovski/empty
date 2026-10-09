import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReviews } from "@clone/lib/api";
import { LOGOS } from "@clone/sections/Logos";
import { Icon, WhatsAppIcon } from "../../shared/Icon";
import { Marquee, Reveal } from "../../shared/motion";
import { REVIEWS_URL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";

/** Rotating starburst sticker. */
export function Burst({ children, color = "#e3181b", className = "" }: { children: ReactNode; color?: string; className?: string }) {
  const pts = Array.from({ length: 32 }, (_, i) => {
    const r = i % 2 ? 41 : 50;
    const a = (i / 32) * Math.PI * 2;
    return `${50 + r * Math.cos(a)},${50 + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <motion.div
      className={`burst ${className}`}
      initial={{ scale: 3, rotate: -40, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 13, delay: 0.5 }}
    >
      <svg className="burst__shape" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points={pts} fill={color} stroke="#111" strokeWidth="2.5" />
      </svg>
      <div className="burst__txt">{children}</div>
    </motion.div>
  );
}

/** Headline whose words drop in with a bounce. */
export function Slam({ text, className, delay = 0, as: Tag = "h2" }: { text: string; className?: string; delay?: number; as?: "h1" | "h2" | "h3" }) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: "inline-block", marginRight: "0.22em" }}
          initial={{ y: -120, opacity: 0, rotate: i % 2 ? 6 : -6 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 380, damping: 16, delay: delay + i * 0.06 }}
        >
          {w}
        </motion.span>
      ))}
    </Tag>
  );
}

export function CallButtons({ dark = false, phone = "Chiama ora" }: { dark?: boolean; phone?: string }) {
  return (
    <>
      <a href={TEL} className={`btn ${dark ? "btn--y btn--onk" : "btn--k"}`}>
        <Icon name="phone" /> {phone}
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`btn btn--wa ${dark ? "btn--onk" : ""}`}>
        <WhatsAppIcon /> WhatsApp
      </a>
    </>
  );
}

export function Reviews() {
  const { data, isLoading } = useReviews();
  const reviews = data?.reviews ?? [];
  const rating = data?.rating ?? 4.9;
  return (
    <section className="sec sec--k" id="recensioni" style={{ overflow: "hidden" }}>
      <div className="wrap rv-top">
        <div>
          <span className="label label--y">{HOME.reviews.eyebrow}</span>
          <Slam text={HOME.reviews.title} className="h-big" />
          <p className="lead" style={{ color: "rgba(255,255,255,.75)" }}>
            {HOME.reviews.intro}
          </p>
        </div>
        <Reveal>
          <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="score">
            <b>{rating.toFixed(1)}</b>
            <div>
              <div className="stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" />
                ))}
              </div>
              <small>{data?.userRatingCount ? `${data.userRatingCount} recensioni verificate` : "Recensioni verificate"}</small>
              <small style={{ textDecoration: "underline" }}>Leggi tutte →</small>
            </div>
          </a>
        </Reveal>
      </div>
      {isLoading && <div className="wrap skeleton" style={{ height: 260 }} />}
      {!isLoading && reviews.length === 0 && (
        <p className="wrap" style={{ color: "rgba(255,255,255,.8)" }}>
          Le recensioni verificate saranno disponibili tra poco. Puoi leggere tutte le esperienze dei nostri clienti su Google.
        </p>
      )}
      {reviews.length > 0 && (
        <div className="rv-row">
          <Marquee duration={60}>
            {reviews.map((r) => (
              <article key={r.id} className="rv">
                <div className="rv__who">
                  {r.profilePhotoUrl ? <img src={r.profilePhotoUrl} alt={r.authorName} referrerPolicy="no-referrer" /> : <span className="av">{r.authorName.charAt(0)}</span>}
                  <div>
                    <b>{r.authorName}</b>
                    <small>{r.relativeTime} · Google</small>
                  </div>
                </div>
                <div className="rv__stars">
                  {Array.from({ length: Math.round(r.rating) }, (_, i) => (
                    <Icon key={i} name="star" />
                  ))}
                </div>
                <p>{r.content}</p>
              </article>
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
}

export function Logos() {
  return (
    <section className="logos" aria-label={HOME.logos.label}>
      <div className="logos__label">
        <span className="label">{HOME.logos.label}</span>
      </div>
      <Marquee duration={30}>
        {LOGOS.map((l) => (
          <div key={l.src}>
            <img src={l.src} alt={l.alt} loading="lazy" />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
