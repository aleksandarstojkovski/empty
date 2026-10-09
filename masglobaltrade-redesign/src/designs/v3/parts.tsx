import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useId, useRef, type ReactNode } from "react";
import { useReviews } from "@clone/lib/api";
import { LOGOS } from "@clone/sections/Logos";
import { Icon, WhatsAppIcon } from "../../shared/Icon";
import { Marquee, Reveal } from "../../shared/motion";
import { REVIEWS_URL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";

export const bounce = { type: "spring" as const, stiffness: 420, damping: 14 };

/**
 * Poster headline: every word pops in with an overshoot. The last `hl` words get
 * a marker highlight behind them.
 */
export function Pop({ text, className = "h-pop", hl = 1, delay = 0, as: Tag = "h2" }: { text: string; className?: string; hl?: number; delay?: number; as?: "h1" | "h2" | "h3" }) {
  const words = text.split(" ");
  const cut = Math.max(0, words.length - hl);
  const word = (w: string, i: number) => (
    <motion.span
      key={i}
      className="w"
      aria-hidden="true"
      initial={{ scale: 0, rotate: i % 2 ? 14 : -14, y: 30 }}
      whileInView={{ scale: 1, rotate: 0, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ ...bounce, delay: delay + i * 0.05 }}
    >
      {w}
    </motion.span>
  );
  return (
    <Tag className={className} aria-label={text}>
      {words.slice(0, cut).map(word)}
      {hl > 0 && <span className="mk">{words.slice(cut).map((w, j) => word(w, cut + j))}</span>}
    </Tag>
  );
}

/** Scalloped, slowly spinning price-sticker. */
export function Burst({ children, color = "#FFD23F", className = "", delay = 0.6 }: { children: ReactNode; color?: string; className?: string; delay?: number }) {
  const n = 18;
  const pts = Array.from({ length: n * 2 }, (_, i) => {
    const r = i % 2 ? 43 : 50;
    const a = (i / (n * 2)) * Math.PI * 2;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
  return (
    <motion.div
      className={`burst ${className}`}
      initial={{ scale: 0, rotate: -90 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.12, rotate: 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 10, delay }}
    >
      <svg className="burst__shape" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points={pts} fill={color} stroke="#111" strokeWidth="3" strokeLinejoin="round" />
      </svg>
      <div className="burst__txt">{children}</div>
    </motion.div>
  );
}

/** Round badge with text running around the edge. */
export function Ring({ text, icon = "star", className = "", delay = 0.9 }: { text: string; icon?: string; className?: string; delay?: number }) {
  const id = useId().replace(/:/g, "");
  return (
    <motion.div className={`ring ${className}`} initial={{ scale: 0, rotate: 120 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 260, damping: 12, delay }} aria-hidden="true">
      <svg className="ring__txt" viewBox="0 0 100 100">
        <defs>
          <path id={`r${id}`} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text>
          <textPath href={`#r${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="ring__mid">
        <Icon name={icon} />
      </span>
    </motion.div>
  );
}

type Shape = { k: "dot" | "tri" | "sq" | "zig" | "star" | "ring"; x: string; y: string; c: string; s: number; r?: number; d?: number; depth?: number };

const SHAPES: Record<Shape["k"], (c: string) => ReactNode> = {
  dot: (c) => <circle cx="20" cy="20" r="16" fill={c} stroke="#111" strokeWidth="3" />,
  ring: (c) => <circle cx="20" cy="20" r="14" fill="none" stroke={c} strokeWidth="8" />,
  tri: (c) => <polygon points="20,3 37,35 3,35" fill={c} stroke="#111" strokeWidth="3" strokeLinejoin="round" />,
  sq: (c) => <rect x="5" y="5" width="30" height="30" rx="6" fill={c} stroke="#111" strokeWidth="3" />,
  zig: (c) => <polyline points="2,26 10,12 18,26 26,12 34,26 40,14" fill="none" stroke={c} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />,
  star: (c) => <polygon points="20,2 25,15 39,15 28,24 32,38 20,30 8,38 12,24 1,15 15,15" fill={c} stroke="#111" strokeWidth="3" strokeLinejoin="round" />,
};

/** Floating geometric confetti with scroll parallax. */
export function Confetti({ items }: { items: Shape[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <div className="confetti" ref={ref} aria-hidden="true">
      {items.map((s, i) => (
        <ConfettiPiece key={i} s={s} p={scrollYProgress} reduced={!!reduced} i={i} />
      ))}
    </div>
  );
}

function ConfettiPiece({ s, p, reduced, i }: { s: Shape; p: ReturnType<typeof useScroll>["scrollYProgress"]; reduced: boolean; i: number }) {
  const y = useTransform(p, [0, 1], [(s.depth ?? 1) * 90, (s.depth ?? 1) * -90]);
  return (
    <motion.div
      style={{ left: s.x, top: s.y, y: reduced ? 0 : y }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.2 + i * 0.06 }}
    >
      <svg width={s.s} height={s.s} viewBox="0 0 40 40" style={{ ["--rot" as string]: `${s.r ?? 0}deg`, ["--d" as string]: `${s.d ?? 5}s` }}>
        {SHAPES[s.k](s.c)}
      </svg>
    </motion.div>
  );
}

/** Wavy edge between two coloured bands. `color` is the colour of the band below. */
export function Wave({ color, bg = "transparent", flip = false, className = "" }: { color: string; bg?: string; flip?: boolean; className?: string }) {
  return (
    <svg className={`wave ${flip ? "wave--flip" : ""} ${className}`} viewBox="0 0 1440 46" preserveAspectRatio="none" style={{ background: bg }} aria-hidden="true">
      <path d="M0,24 C120,4 240,4 360,24 C480,44 600,44 720,24 C840,4 960,4 1080,24 C1200,44 1320,44 1440,24 L1440,46 L0,46 Z" fill={color} />
      <path d="M0,24 C120,4 240,4 360,24 C480,44 600,44 720,24 C840,4 960,4 1080,24 C1200,44 1320,44 1440,24" fill="none" stroke="#111" strokeWidth="3" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Card that starts tilted and drops into place with a bounce. */
export function Tilt({ children, i = 0, className, as = "div" }: { children: ReactNode; i?: number; className?: string; as?: "div" | "article" }) {
  const M = motion[as];
  const rot = [-5, 4, -3, 6, -4, 3][i % 6];
  return (
    <M
      className={className}
      initial={{ y: 90, rotate: rot * 2, opacity: 0, scale: 0.85 }}
      whileInView={{ y: 0, rotate: rot / 4, opacity: 1, scale: 1 }}
      whileHover={{ rotate: -rot / 2, scale: 1.03, transition: { type: "spring", stiffness: 400, damping: 10 } }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 220, damping: 13, delay: (i % 3) * 0.08 }}
    >
      {children}
    </M>
  );
}

export function CallButtons({ phone = "Chiama ora", tone = "rd" }: { phone?: string; tone?: "rd" | "ye" | "w" | "k" }) {
  return (
    <>
      <a href={TEL} className={`btn btn--${tone}`}>
        <Icon name="phone" /> {phone}
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--wa">
        <WhatsAppIcon /> WhatsApp
      </a>
    </>
  );
}

export function Reviews() {
  const { data, isLoading } = useReviews();
  const reviews = data?.reviews ?? [];
  const rating = data?.rating ?? 4.9;
  const half = Math.ceil(reviews.length / 2);
  const rows = reviews.length > 4 ? [reviews.slice(0, half), reviews.slice(half)] : [reviews];
  return (
    <section className="sec on-bl rv-section" id="recensioni" style={{ overflow: "hidden" }}>
      <Confetti
        items={[
          { k: "star", x: "46%", y: "5%", c: "#FFD23F", s: 46, r: -12, d: 6 },
          { k: "dot", x: "88%", y: "8%", c: "#FF3B30", s: 34, d: 5 },
          { k: "zig", x: "76%", y: "88%", c: "#FFD23F", s: 60, r: 10, d: 7 },
        ]}
      />
      <div className="wrap rv-top" style={{ position: "relative", zIndex: 2 }}>
        <div>
          <span className="tag tag--ye">{HOME.reviews.eyebrow}</span>
          <Pop text={HOME.reviews.title} />
          <p className="lead" style={{ color: "rgba(255,255,255,.88)" }}>
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
              <small style={{ textDecoration: "underline" }}>Leggi tutte su Google →</small>
            </div>
          </a>
        </Reveal>
      </div>
      {isLoading && <div className="wrap skeleton" style={{ height: 240 }} />}
      {!isLoading && reviews.length === 0 && (
        <p className="wrap" style={{ position: "relative" }}>
          Le recensioni verificate saranno disponibili tra poco. Puoi leggere tutte le esperienze dei nostri clienti su Google.
        </p>
      )}
      {rows.map((row, ri) =>
        row.length ? (
          <div className="rv-row" key={ri} style={{ position: "relative", zIndex: 2 }}>
            <Marquee duration={70} reverse={ri === 1}>
              {row.map((r) => (
                <article key={r.id} className="rv">
                  <div className="rv__who">
                    {r.profilePhotoUrl ? <img src={r.profilePhotoUrl} alt={r.authorName} referrerPolicy="no-referrer" /> : <span className="av">{r.authorName.charAt(0)}</span>}
                    <div>
                      <b>{r.authorName}</b>
                      <small>{r.relativeTime} · Google</small>
                    </div>
                  </div>
                  <div className="stars">
                    {Array.from({ length: Math.round(r.rating) }, (_, i) => (
                      <Icon key={i} name="star" />
                    ))}
                  </div>
                  <p>{r.content}</p>
                </article>
              ))}
            </Marquee>
          </div>
        ) : null,
      )}
    </section>
  );
}

export function Logos() {
  return (
    <section className="logos" aria-label={HOME.logos.label}>
      <div className="logos__label">
        <span className="tag">{HOME.logos.label}</span>
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
