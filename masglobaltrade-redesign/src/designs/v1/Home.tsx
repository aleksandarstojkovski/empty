import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useBlogPosts } from "@clone/lib/api";
import { formatDateIt } from "@clone/lib/format";
import { HOME, STEPS, FAQS, PICKUPS } from "../../content/home";
import { Accordion } from "../../shared/Accordion";
import { Icon } from "../../shared/Icon";
import { Rich } from "../../shared/Rich";
import { CountUp, Magnetic, Marquee, Reveal, SplitWords, Stagger, StaggerItem } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { CallButtons, Logos, Reviews } from "./parts";
import { useLayout } from "./Layout";

const ease = [0.22, 1, 0.36, 1] as const;

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const [line1, line2] = HOME.hero.titleHtml.split(/<br\s*\/?>/);
  const accent = line2.replace(/<[^>]+>/g, "");
  return (
    <section className="hero" ref={ref}>
      <div className="wrap hero__grid">
        <div>
          <motion.span className="kicker" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease, delay: 0.2 }}>
            MAS Global Trade · Canton Ticino
          </motion.span>
          <h1 className="h-display hero__title">
            <SplitWords text={line1.replace(/<[^>]+>/g, "")} delay={0.25} />
            <SplitWords text={accent} className="ital" delay={0.55} />
          </h1>
          <Reveal delay={0.7}>
            <Rich html={HOME.hero.intro} as="p" className="hero__intro" />
          </Reveal>
          <Reveal delay={0.8}>
            <ul className="hero__bullets">
              {HOME.hero.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.9} className="hero__ctas">
            <Magnetic className="cta-group">
              <CallButtons />
            </Magnetic>
          </Reveal>
          <Reveal delay={1}>
            <p className="hero__rating">
              <b>★★★★★</b> {HOME.hero.rating}
            </p>
          </Reveal>
        </div>
        <div style={{ position: "relative" }}>
          <motion.div className="arch" initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 28px 28px)" }} animate={{ clipPath: "inset(0% 0 0 0 round 999px 999px 28px 28px)" }} transition={{ duration: 1.5, ease, delay: 0.3 }}>
            <motion.img src="/hero-desktop.webp" alt={HOME.hero.image?.alt ?? "Madian, MAS Global Trade"} style={{ y: imgY, scale: imgScale, objectPosition: "62% 30%" }} />
          </motion.div>
          <motion.div className="hero__badge" initial={{ scale: 0, rotate: -40 }} animate={{ scale: 1, rotate: -8 }} transition={{ type: "spring", stiffness: 120, damping: 14, delay: 1.2 }}>
            <div>
              <strong>4.9</strong>
              <span>su Google</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        Scorri
        <i />
      </div>
    </section>
  );
}

function Why() {
  const w = HOME.why;
  return (
    <section className="sec" id="servizio">
      <div className="wrap why">
        <div className="why__text">
          <Reveal>
            <span className="kicker">{w.eyebrow}</span>
          </Reveal>
          <SplitWords as="h2" text={w.title} className="h-section" stagger={0.04} />
          {w.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <Rich html={p} as="p" />
            </Reveal>
          ))}
          <Reveal>
            <p className="pull">{w.quote.replace(/^"|"$/g, "")}</p>
          </Reveal>
          <Reveal className="hero__ctas" y={16}>
            <CallButtons />
          </Reveal>
        </div>
        <Reveal className="why__card" y={60}>
          <div className="ph">
            <img src={w.card.image.src} alt={w.card.image.alt || "Madian, MAS Global Trade"} loading="lazy" />
          </div>
          <h3>{w.card.title}</h3>
          <p>{w.card.text}</p>
          <ul className="numlist">
            {w.card.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState(0);
  const x = useMotionValue(0);
  const progress = useTransform(x, (v) => (max ? Math.min(1, Math.max(0, -v / max)) : 0));
  const smooth = useSpring(progress, { stiffness: 120, damping: 24 });
  useEffect(() => {
    const m = () => setMax(Math.max(0, (track.current?.scrollWidth ?? 0) - (wrap.current?.clientWidth ?? 0)));
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  const p = HOME.pickups;
  return (
    <section className="sec sec--alt" style={{ overflow: "hidden" }}>
      <div className="wrap sec-head sec-head--split">
        <div>
          <Reveal>
            <span className="kicker">{p.eyebrow}</span>
          </Reveal>
          <SplitWords as="h2" text={p.title} className="h-section" />
        </div>
        <Reveal>
          <p>{p.intro}</p>
          <p className="gallery-hint" style={{ marginTop: 18 }}>
            <Icon name="arrow-left" className="w-4 h-4" /> Trascina per scorrere <Icon name="arrow-right" className="w-4 h-4" />
          </p>
        </Reveal>
      </div>
      <div className="gallery" ref={wrap}>
        <motion.div className="gallery__track" ref={track} drag="x" dragConstraints={{ left: -max, right: 0 }} dragElastic={0.08} style={{ x }}>
          {PICKUPS.map((it, i) => (
            <motion.figure key={it.src} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease, delay: i * 0.08 }}>
              <div className="ph">
                <img src={it.src.replace(".webp", "-640.webp")} alt={it.alt} draggable={false} loading="lazy" />
              </div>
              <figcaption>
                <span>Ritiro concluso a</span>
                <b>{it.city}</b>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
      <div className="wrap gallery-progress">
        <motion.i style={{ scaleX: smooth }} />
      </div>
    </section>
  );
}

function Step({ s, i, onActive }: { s: (typeof STEPS)[number]; i: number; onActive: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });
  useEffect(() => {
    if (inView) onActive(i);
  }, [inView, i, onActive]);
  return (
    <div className="proc__step" ref={ref}>
      <div className="mob">
        <img src={s.image} alt={s.imageAlt} loading="lazy" />
      </div>
      <Reveal>
        <span className="proc__n">0{i + 1} — {s.label}</span>
        <h3>{s.title}</h3>
        <p>{s.description}</p>
        <ul>
          {s.benefits.map((b) => (
            <li key={b}>
              <Icon name="check" />
              {b}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

function Process() {
  const [active, setActive] = useState(0);
  const pr = HOME.process;
  return (
    <section className="sec" id="come-funziona">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <Reveal>
              <span className="kicker">{pr.eyebrow}</span>
            </Reveal>
            <SplitWords as="h2" text={pr.title} className="h-section" />
          </div>
          <Reveal>
            <p>{pr.intro}</p>
          </Reveal>
        </div>
        <div className="proc">
          <div className="proc__sticky">
            <AnimatePresence initial={false}>
              <motion.img
                key={STEPS[active].image}
                src={STEPS[active].image}
                alt={STEPS[active].imageAlt}
                initial={{ opacity: 0, scale: 1.12 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease }}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.span key={active} className="proc__count" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.5, ease }}>
                0{active + 1}
                <span style={{ fontSize: 22, opacity: 0.7 }}>/03</span>
              </motion.span>
            </AnimatePresence>
          </div>
          <div>
            {STEPS.map((s, i) => (
              <Step key={s.label} s={s} i={i} onActive={setActive} />
            ))}
          </div>
        </div>
        <Reveal className="band">
          <div>
            <h3>{pr.ctaTitle}</h3>
            <p>{pr.ctaText}</p>
          </div>
          <div className="band__ctas">
            <CallButtons light phoneLabel="+41 79 863 53 91" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="sec--ink" style={{ padding: "40px 0" }}>
      <div className="wrap stats">
        {HOME.stats.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 0.1}>
            <div className="stat__v">
              <CountUp value={s.value} />
              {s.unit && <sup>{s.unit}</sup>}
            </div>
            <p>{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Approach() {
  const a = HOME.approach;
  const { openLead } = useLayout();
  return (
    <section className="sec sec--alt" id="services">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <Reveal>
              <span className="kicker">{a.eyebrow}</span>
            </Reveal>
            <SplitWords as="h2" text={a.title} className="h-section" />
          </div>
          <Reveal>
            <p>{a.intro}</p>
          </Reveal>
        </div>
        <Stagger className="appr">
          {a.cards.map((c, i) => (
            <StaggerItem key={c.title} className="appr__item">
              <div className="appr__top">
                <span className="appr__n">0{i + 1}</span>
                <span className="appr__icon">
                  <Icon name={c.icon} />
                </span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="band">
          <div>
            <h3>{a.ctaTitle}</h3>
            <p>{a.ctaText}</p>
          </div>
          <div className="band__ctas">
            <button type="button" className="btn btn--accent" onClick={openLead}>
              Vendi la tua auto
            </button>
            <CallButtons light phoneLabel="+41 79 863 53 91" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Zones() {
  const z = HOME.zones;
  const [hover, setHover] = useState<number | null>(null);
  const mx = useSpring(useMotionValue(0), { stiffness: 160, damping: 20 });
  const my = useSpring(useMotionValue(0), { stiffness: 160, damping: 20 });
  return (
    <section
      className="sec"
      id="ticino"
      onPointerMove={(e) => {
        mx.set(e.clientX + 30);
        my.set(e.clientY - 180);
      }}
    >
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <Reveal>
              <span className="kicker">{z.eyebrow}</span>
            </Reveal>
            <SplitWords as="h2" text={z.title} className="h-section" />
          </div>
          <Reveal>
            <p>{z.intro}</p>
          </Reveal>
        </div>
        <div className="zones" onPointerLeave={() => setHover(null)}>
          {z.cards.map((c, i) => (
            <Reveal key={c.href} y={30} amount={0.3}>
              <Link href={c.href} className="zone" onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}>
                <div className="zone__img">
                  <img src={c.image.src} alt={c.image.alt} loading="lazy" />
                </div>
                <div>
                  <div className="zone__meta">{c.car}</div>
                  <div className="zone__city">{c.city}</div>
                </div>
                <div>
                  <strong style={{ fontWeight: 600 }}>{c.title}</strong>
                  <p className="zone__text">{c.text}</p>
                </div>
                <span className="zone__go">
                  <Icon name="arrow-right" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/zone-servite" className="arrow-link">
            {z.allLabel} <Icon name="arrow-right" />
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {hover !== null && (
          <motion.div className="float-prev" style={{ x: mx, y: my }} initial={{ opacity: 0, scale: 0.6, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 3 }} exit={{ opacity: 0, scale: 0.6 }} transition={{ duration: 0.4, ease }}>
            <AnimatePresence mode="popLayout">
              <motion.img key={hover} src={z.cards[hover].image.src} alt="" initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease }} />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Faq() {
  const f = HOME.faq;
  return (
    <section className="sec sec--alt" id="faq">
      <div className="wrap" style={{ display: "grid", gap: 56 }}>
        <div className="sec-head sec-head--split" style={{ marginBottom: 0 }}>
          <div>
            <Reveal>
              <span className="kicker">{f.eyebrow}</span>
            </Reveal>
            <SplitWords as="h2" text={f.title} className="h-section" />
          </div>
          <Reveal>
            <p>{f.intro}</p>
            <div className="hero__ctas" style={{ marginTop: 22 }}>
              <CallButtons />
            </div>
          </Reveal>
        </div>
        <Reveal>
          <Accordion
            items={FAQS.map((q) => ({ q: q.question, a: <p style={{ margin: 0 }}>{q.answer}</p> }))}
            classes={{ root: "faq", item: "faq__item", button: "faq__q", panel: "faq__panel", num: "faq__num" }}
            icon={(o) => <span className={`faq__plus ${o ? "is-open" : ""}`} aria-hidden="true" />}
            defaultOpen={0}
          />
        </Reveal>
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
          <div key={i} className="skeleton" style={{ aspectRatio: "4/3" }} />
        ))}
      </div>
    );
  return (
    <Stagger className="posts">
      {posts.map((p) => (
        <StaggerItem key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="post" style={{ display: "block" }}>
            <div className="ph">
              <img src={p.imageUrl || "/blog1.webp"} alt={p.title} loading="lazy" />
            </div>
            <div className="post__meta">
              {p.category && <b>{p.category}</b>}
              <span>{formatDateIt(p.publishedAt)}</span>
            </div>
            <h3>{p.title}</h3>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function Blog() {
  return (
    <section className="sec" id="blog">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <Reveal>
              <span className="kicker">{HOME.blog.eyebrow}</span>
            </Reveal>
            <SplitWords as="h2" text={HOME.blog.title} className="h-section" />
          </div>
          <Reveal>
            <Link href="/blog" className="arrow-link">
              Vedi tutti gli articoli <Icon name="arrow-right" />
            </Link>
          </Reveal>
        </div>
        <PostCards />
      </div>
    </section>
  );
}

export default function Home() {
  usePageMeta("Compro auto usate in Ticino | MAS Global Trade", "Vendi la tua auto usata in Ticino senza perdere tempo: valutazione gratuita, pagamento immediato e ritiro a domicilio. Parli direttamente con MAS Global Trade.");
  return (
    <>
      <Hero />
      <div className="ribbon">
        <Marquee duration={40}>
          {[...HOME.hero.bullets, ...HOME.hero.bullets].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </Marquee>
      </div>
      <Why />
      <Gallery />
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
