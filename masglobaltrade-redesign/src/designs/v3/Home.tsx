import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { useBlogPosts } from "@clone/lib/api";
import { formatDateIt } from "@clone/lib/format";
import { HOME, STEPS, FAQS, PICKUPS } from "../../content/home";
import { Accordion } from "../../shared/Accordion";
import { Icon } from "../../shared/Icon";
import { Rich } from "../../shared/Rich";
import { CountUp, Marquee, Reveal } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { Burst, CallButtons, Confetti, Logos, Pop, Reviews, Ring, Tilt, Wave, bounce } from "./parts";
import { SLOGAN, useLayout } from "./Layout";

const CREAM = "#FFF4E0";

function Hero() {
  const title = HOME.hero.titleHtml.split(/<br\s*\/?>/)[0].replace(/<[^>]+>/g, "");
  const slab = SLOGAN.split(/(?<=\.)\s+/);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 });
  return (
    <section
      className="hero"
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <Confetti
        items={[
          { k: "star", x: "4%", y: "18%", c: "#FFD23F", s: 54, r: -10, d: 6, depth: 1.3 },
          { k: "dot", x: "46%", y: "11%", c: "#FF3B30", s: 30, d: 4.6 },
          { k: "zig", x: "40%", y: "84%", c: "#FFD23F", s: 74, r: 6, d: 7 },
          { k: "tri", x: "93%", y: "64%", c: "#FF9EC4", s: 42, r: 24, d: 5.4, depth: 1.6 },
          { k: "ring", x: "56%", y: "40%", c: "#FFD23F", s: 40, d: 6.4 },
          { k: "sq", x: "2%", y: "78%", c: "#9FF0C4", s: 32, r: 16, d: 5.8 },
        ]}
      />
      <div className="wrap hero__grid">
        <div>
          <motion.span className="tag tag--ye" initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: -2 }} transition={{ ...bounce, delay: 0.15 }}>
            MAS Global Trade · Canton Ticino
          </motion.span>
          <h1 className="hero__title" aria-label={`${title} ${SLOGAN}`}>
            {title.split(" ").map((w, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                style={{ display: "inline-block", marginRight: "0.2em" }}
                initial={{ scale: 0, rotate: i % 2 ? 18 : -18, y: 60 }}
                animate={{ scale: 1, rotate: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 12, delay: 0.25 + i * 0.08 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <div className="hero__slab" aria-hidden="true">
            {slab.map((s, i) => (
              <motion.span key={s} initial={{ scale: 0, rotate: 30 }} animate={{ scale: 1, rotate: [-3, 2, -2][i] }} transition={{ type: "spring", stiffness: 500, damping: 12, delay: 0.75 + i * 0.14 }}>
                {s}
              </motion.span>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}>
            <Rich html={HOME.hero.intro} as="p" className="hero__intro" />
            <ul className="checks">
              {HOME.hero.bullets.map((b, i) => (
                <motion.li key={b} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...bounce, delay: 1.2 + i * 0.08 }}>
                  <Icon name="check" /> {b}
                </motion.li>
              ))}
            </ul>
            <div className="ctas">
              <CallButtons tone="ye" />
            </div>
            <p className="hero__rating">
              <b>★★★★★</b>
              {HOME.hero.rating}
            </p>
          </motion.div>
        </div>
        <motion.div style={{ perspective: 900 }} initial={{ scale: 0.3, rotate: 25, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 150, damping: 13, delay: 0.45 }}>
          <motion.div className="blob" style={{ rotateX: rx, rotateY: ry }}>
            <div className="blob__img">
              <img src="/hero-desktop.webp" alt={HOME.hero.image?.alt ?? "Madian, MAS Global Trade"} />
            </div>
            <motion.div className="blob__name" initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...bounce, delay: 1.1 }}>
              <small>Ciao, sono</small>
              Madian
            </motion.div>
            <Burst delay={0.9}>
              <b>4.9</b>su Google
            </Burst>
            <Ring text="Valutazione gratuita ★ Ritiro a domicilio ★ " icon="car" delay={1.2} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Tapes() {
  const a = [...HOME.hero.bullets, "Valutazione gratuita"];
  return (
    <div className="tapes" aria-hidden="true">
      <div className="tape tape--b">
        <Marquee duration={30} reverse>
          {[...a, ...a].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </Marquee>
      </div>
      <div className="tape tape--a">
        <Marquee duration={26}>
          {[SLOGAN, ...a, SLOGAN, ...a].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

function Why() {
  const w = HOME.why;
  return (
    <section className="sec" id="servizio" style={{ paddingTop: 120 }}>
      <div className="wrap why">
        <div>
          <span className="tag">{w.eyebrow}</span>
          <Pop text={w.title} hl={2} />
          <Reveal>
            {w.paragraphs.map((p, i) => (
              <Rich key={i} html={p} as="p" />
            ))}
          </Reveal>
          <motion.p className="bubble" initial={{ scale: 0, rotate: -10, originX: 0, originY: 1 }} whileInView={{ scale: 1, rotate: -1.5 }} viewport={{ once: true, amount: 0.6 }} transition={{ type: "spring", stiffness: 300, damping: 13 }}>
            {w.quote}
          </motion.p>
          <div className="ctas" style={{ marginTop: 50 }}>
            <CallButtons />
          </div>
        </div>
        <Tilt className="coupon" i={1}>
          <span className="coupon__sc" aria-hidden="true">
            ✂
          </span>
          <div className="coupon__ph">
            <img src={w.card.image.src} alt={w.card.image.alt || "Madian, MAS Global Trade"} loading="lazy" />
          </div>
          <h3>{w.card.title}</h3>
          <p>{w.card.text}</p>
          <ul className="numlist">
            {w.card.bullets.map((b, i) => (
              <motion.li key={b} initial={{ x: 40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ...bounce, delay: 0.3 + i * 0.06 }}>
                <span>{i + 1}</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </Tilt>
      </div>
    </section>
  );
}

const POLA_ROT = [-6, 4, -3, 5, -5, 3];

function Board() {
  const p = HOME.pickups;
  const board = useRef<HTMLDivElement>(null);
  const [canDrag, setCanDrag] = useState(false);
  useEffect(() => setCanDrag(window.matchMedia("(hover: hover) and (pointer: fine)").matches), []);
  return (
    <>
      <Wave color="#FFD23F" bg={CREAM} />
      <section className="sec on-ye" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <div>
              <span className="tag">{p.eyebrow}</span>
              <Pop text={p.title} hl={2} />
            </div>
            <div>
              <p>{p.intro}</p>
              {canDrag && (
                <p className="hint" style={{ marginTop: 16 }}>
                  ✋ Spostale come vuoi!
                </p>
              )}
            </div>
          </div>
          <div className="board" ref={board}>
            {PICKUPS.map((it, i) => (
              <motion.figure
                key={it.src}
                className="pola"
                drag={canDrag}
                dragConstraints={board}
                dragElastic={0.15}
                whileDrag={{ scale: 1.08, rotate: 0, zIndex: 5, boxShadow: "14px 16px 0 #111" }}
                initial={{ y: -200, rotate: POLA_ROT[i] * 4, opacity: 0 }}
                whileInView={{ y: 0, rotate: POLA_ROT[i], opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 200, damping: 14, delay: (i % 3) * 0.1 }}
              >
                <span className="pola__tape" aria-hidden="true" />
                <div className="pola__ph">
                  <img src={it.src.replace(".webp", "-640.webp")} alt={it.alt} draggable={false} loading="lazy" />
                </div>
                <motion.span className="pola__ok" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 500, damping: 10, delay: 0.6 + (i % 3) * 0.12 }}>
                  Venduta!
                </motion.span>
                <figcaption>
                  <small>Ritiro concluso a</small>
                  {it.city}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
      <Wave color="#FFD23F" bg={CREAM} flip />
    </>
  );
}

function Route() {
  const ref = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current!;
    const ro = new ResizeObserver(() => setBox({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const len = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });
  // Winding road drawn in real pixels so the stroke keeps its width at any size.
  const wide = box.w >= 1000;
  const cx = wide ? box.w / 2 : 28;
  const amp = wide ? 90 : 12;
  const seg = box.h / 6;
  let d = `M${cx},0`;
  for (let k = 0; k < 6; k++) {
    const side = k % 2 ? -amp : amp;
    d += ` C${cx + side},${seg * k + seg * 0.35} ${cx + side},${seg * k + seg * 0.65} ${cx},${seg * (k + 1)}`;
  }
  return (
    <div className="route" ref={ref}>
      {box.h > 0 && (
        <svg className="route__svg" viewBox={`0 0 ${box.w} ${box.h}`} aria-hidden="true">
          <path d={d} fill="none" stroke="#111" strokeOpacity="0.18" strokeWidth="10" strokeDasharray="4 22" strokeLinecap="round" />
          <motion.path d={d} fill="none" stroke="#FF3B30" strokeWidth="9" strokeLinecap="round" style={{ pathLength: len }} />
        </svg>
      )}
      {STEPS.map((s, i) => (
        <motion.article
          key={s.label}
          className={`panel panel--${i}`}
          initial={{ x: i % 2 ? 140 : -140, rotate: i % 2 ? 8 : -8, opacity: 0 }}
          whileInView={{ x: 0, rotate: i % 2 ? 1.2 : -1.2, opacity: 1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 160, damping: 14 }}
        >
          <motion.span className="panel__n" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 500, damping: 10, delay: 0.3 }}>
            {i + 1}
          </motion.span>
          <div className="panel__img">
            <img src={s.image} alt={s.imageAlt} loading="lazy" />
          </div>
          <div>
            <span className="tag tag--bl">{s.label}</span>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <ul>
              {s.benefits.map((b) => (
                <li key={b}>
                  <Icon name="circle-check" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function Process() {
  const pr = HOME.process;
  return (
    <section className="sec" id="come-funziona">
      <div className="wrap">
        <div className="sec-head sec-head--c">
          <span className="tag">{pr.eyebrow}</span>
          <Pop text={pr.title} hl={3} />
          <p>{pr.intro}</p>
        </div>
        <Route />
        <Callout title={pr.ctaTitle} text={pr.ctaText}>
          <CallButtons tone="ye" phone="+41 79 863 53 91" />
        </Callout>
      </div>
    </section>
  );
}

function Callout({ title, text, children, blue = false }: { title: string; text: string; children: ReactNode; blue?: boolean }) {
  return (
    <motion.div
      className={`callout ${blue ? "callout--bl" : ""}`}
      initial={{ scale: 0.7, rotate: -4, opacity: 0 }}
      whileInView={{ scale: 1, rotate: -1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 220, damping: 13 }}
    >
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="ctas" style={{ marginTop: 0 }}>
        {children}
      </div>
    </motion.div>
  );
}

function Stats() {
  return (
    <>
      <Wave color="#111111" bg={CREAM} />
      <section className="sec on-k" style={{ padding: "60px 0 70px" }}>
        <div className="wrap stats">
          {HOME.stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ scale: 0, rotate: -40 }}
              whileInView={{ scale: 1, rotate: [-4, 3, -2, 4][i] }}
              whileHover={{ scale: 1.08, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 300, damping: 11, delay: i * 0.1 }}
            >
              <Icon name={s.icon} className="stat__icon" />
              <div className="stat__v">
                <CountUp value={s.value} />
                {s.unit && <small>{s.unit}</small>}
              </div>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Wave color="#111111" bg={CREAM} flip />
    </>
  );
}

function Approach() {
  const a = HOME.approach;
  const { openLead } = useLayout();
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <span className="tag">{a.eyebrow}</span>
            <Pop text={a.title} hl={2} />
          </div>
          <p>{a.intro}</p>
        </div>
        <div className="cards">
          {a.cards.map((c, i) => (
            <Tilt key={c.title} className="card" i={i}>
              <span className="card__icon">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="card__n" aria-hidden="true">
                0{i + 1}
              </span>
            </Tilt>
          ))}
        </div>
        <Callout title={a.ctaTitle} text={a.ctaText} blue>
          <button type="button" className="btn btn--ye btn--jelly" onClick={openLead}>
            Vendi la tua auto
          </button>
          <a href="https://wa.me/41798635391?text=Buongiorno%2C%20vorrei%20vendere%20la%20mia%20auto.%20Si%20tratta%20di%20" target="_blank" rel="noreferrer" className="btn btn--wa">
            WhatsApp
          </a>
        </Callout>
      </div>
    </section>
  );
}

function Zones() {
  const z = HOME.zones;
  return (
    <>
      <Wave color="#FFFFFF" bg={CREAM} />
      <section className="sec on-w dots" id="ticino" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <div>
              <span className="tag tag--ye">{z.eyebrow}</span>
              <Pop text={z.title} hl={2} />
            </div>
            <p>{z.intro}</p>
          </div>
          <div className="zones">
            {z.cards.map((c, i) => (
              <Tilt key={c.href} i={i}>
                <Link href={c.href} className="zone">
                  <div className="zone__img">
                    <img src={c.image.src} alt={c.image.alt} loading="lazy" />
                    <span className="zone__car">{c.car}</span>
                    <span className="zone__city">{c.city}</span>
                  </div>
                  <div className="zone__body">
                    <strong>
                      {c.title}
                      <Icon name="arrow-right" />
                    </strong>
                    <p>{c.text}</p>
                  </div>
                </Link>
              </Tilt>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <Link href="/zone-servite" className="btn btn--bl">
              {z.allLabel} <Icon name="arrow-right" />
            </Link>
          </div>
        </div>
      </section>
      <Wave color="#2B50E6" bg="#FFFFFF" />
    </>
  );
}

function Faq() {
  const f = HOME.faq;
  return (
    <section className="sec on-w" id="faq">
      <div className="wrap faq-grid">
        <div>
          <span className="tag">{f.eyebrow}</span>
          <Pop text={f.title} hl={2} />
          <p className="lead">{f.intro}</p>
          <div className="ctas">
            <CallButtons />
          </div>
        </div>
        <Accordion
          items={FAQS.map((q) => ({ q: q.question, a: <p style={{ margin: 0 }}>{q.answer}</p> }))}
          classes={{ root: "faq", item: "faq__item", itemOpen: "is-open", button: "faq__q", panel: "faq__panel", num: "faq__num" }}
          icon={(o) => <span className={`faq__tog ${o ? "is-open" : ""}`} aria-hidden="true" />}
          defaultOpen={0}
        />
      </div>
    </section>
  );
}

export function PostCards({ limit = 3 }: { limit?: number }) {
  const { data, isLoading } = useBlogPosts();
  const posts = (data ?? []).slice().sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)).slice(0, limit);
  if (isLoading)
    return (
      <div className="posts">
        {Array.from({ length: limit }, (_, i) => (
          <div key={i} className="skeleton" style={{ height: 380 }} />
        ))}
      </div>
    );
  return (
    <div className="posts">
      {posts.map((p, i) => (
        <Tilt key={p.slug} i={i}>
          <Link href={`/blog/${p.slug}`} className="post">
            <div className="post__ph">
              <img src={p.imageUrl || "/blog1.webp"} alt={p.title} loading="lazy" />
            </div>
            <div className="post__meta">
              {p.category && <b>{p.category}</b>}
              <span>{formatDateIt(p.publishedAt)}</span>
            </div>
            <h3>{p.title}</h3>
          </Link>
        </Tilt>
      ))}
    </div>
  );
}

function Blog() {
  return (
    <>
      <Wave color={CREAM} bg="#FFFFFF" />
      <section className="sec" id="blog" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <div>
              <span className="tag">{HOME.blog.eyebrow}</span>
              <Pop text={HOME.blog.title} hl={2} />
            </div>
            <div>
              <Link href="/blog" className="link-arrow">
                Vedi tutti gli articoli <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
          <PostCards />
        </div>
      </section>
    </>
  );
}

export default function Home() {
  usePageMeta("Compro auto usate in Ticino | MAS Global Trade", "Vendi la tua auto usata in Ticino senza perdere tempo: valutazione gratuita, pagamento immediato e ritiro a domicilio. Parli direttamente con MAS Global Trade.");
  return (
    <>
      <Hero />
      <Tapes />
      <Why />
      <Board />
      <Process />
      <Stats />
      <Approach />
      <Zones />
      <Reviews />
      <Logos />
      <Faq />
      <Blog />
    </>
  );
}
