import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useBlogPosts } from "@clone/lib/api";
import { formatDateIt } from "@clone/lib/format";
import { HOME, STEPS, FAQS, PICKUPS } from "../../content/home";
import { Accordion } from "../../shared/Accordion";
import { Icon } from "../../shared/Icon";
import { Rich } from "../../shared/Rich";
import { CountUp, Marquee, Reveal, Stagger, StaggerItem } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { Beats, CallButtons, Logos, Reviews } from "./parts";
import { useLayout } from "./Layout";

const ease = [0.16, 1, 0.3, 1] as const;

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1.35]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [line1, line2] = HOME.hero.titleHtml.split(/<br\s*\/?>/);
  const words = line1.replace(/<[^>]+>/g, "").split(" ");
  const slogan = line2.replace(/<[^>]+>/g, "");
  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ scale, y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
        <img src="/hero-desktop.webp" alt={HOME.hero.image?.alt ?? "Madian, MAS Global Trade"} />
      </motion.div>
      <motion.div className="hero__bar hero__bar--t" initial={{ height: "50vh" }} animate={{ height: "7vh" }} transition={{ duration: 1.1, ease, delay: 0.2 }} />
      <motion.div className="hero__bar hero__bar--b" initial={{ height: "50vh" }} animate={{ height: "7vh" }} transition={{ duration: 1.1, ease, delay: 0.2 }} />
      <motion.div className="hero__content" style={{ opacity: fade }}>
        <div className="wrap">
          <motion.span className="kick" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1, duration: 0.6 }}>
            MAS Global Trade presenta
          </motion.span>
          <h1 className="hero__title" aria-label={words.join(" ")}>
            {words.map((w, i) => (
              <motion.span key={i} aria-hidden="true" initial={{ opacity: 0, scale: 3, filter: "blur(20px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.5, ease, delay: 1.2 + i * 0.22 }}>
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.div className="hero__red" initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} animate={{ opacity: [0, 1, 0.3, 1], clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 0.8, ease, delay: 1.2 + words.length * 0.22 }}>
            {slogan}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.3 + words.length * 0.1, duration: 0.7, ease }}>
            <Rich html={HOME.hero.intro} as="p" className="hero__sub" />
            <div className="hero__meta">
              {HOME.hero.bullets.map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
            <div className="ctas">
              <CallButtons />
            </div>
          </motion.div>
        </div>
        <motion.div className="wrap" style={{ position: "absolute", left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
          <motion.div className="hero__rating" initial={{ opacity: 0, scale: 1.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.6, duration: 0.6, ease }}>
            <b>4.9</b>
            <i>★★★★★</i>
            <span>su Google</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Why() {
  const w = HOME.why;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  return (
    <section className="sec" id="servizio">
      <div className="wrap why">
        <div>
          <span className="kick">{w.eyebrow}</span>
          <Beats text={w.title} className="h-sec" />
          <Reveal>
            {w.paragraphs.map((p, i) => (
              <Rich key={i} html={p} as="p" />
            ))}
          </Reveal>
          <motion.p className="subtitle" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 0.2, delay: 0.3 }}>
            {w.quote}
          </motion.p>
          <div className="ctas">
            <CallButtons />
          </div>
        </div>
        <div className="shot" ref={ref}>
          <motion.div className="shot__img" initial={{ clipPath: "inset(0 0 100% 0)" }} whileInView={{ clipPath: "inset(0 0 0% 0)" }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease }}>
            <motion.img src={w.card.image.src} alt={w.card.image.alt || "Madian, MAS Global Trade"} style={{ y: imgY }} loading="lazy" />
          </motion.div>
          <Reveal className="shot__card" y={40}>
            <h3>{w.card.title}</h3>
            <p>{w.card.text}</p>
            <ul className="credits">
              {w.card.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Reel() {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const m = () => setDist(Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth));
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const sx = useSpring(x, { stiffness: 120, damping: 26 });
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
  const p = HOME.pickups;
  return (
    <section className="reel sec--2" ref={ref} style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="reel__sticky">
        <div className="wrap sec-head sec-head--split" style={{ marginBottom: 0 }}>
          <div>
            <span className="kick">{p.eyebrow}</span>
            <Beats text={p.title} className="h-sec" />
          </div>
          <p>{p.intro}</p>
        </div>
        <motion.div className="reel__track" ref={track} style={{ x: sx }}>
          {PICKUPS.map((it, i) => (
            <figure key={it.src}>
              <img src={it.src.replace(".webp", "-640.webp")} alt={it.alt} loading="lazy" />
              <span className="reel__no">SCENA {String(i + 1).padStart(2, "0")}</span>
              <figcaption>
                Ritiro concluso a<b>{it.city}</b>
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <div className="reel__bar">
          <motion.i style={{ scaleX: bar }} />
        </div>
      </div>
    </section>
  );
}

function Scenes() {
  const pr = HOME.process;
  return (
    <section id="come-funziona">
      <div className="sec" style={{ paddingBottom: 60 }}>
        <div className="wrap sec-head sec-head--split" style={{ marginBottom: 0 }}>
          <div>
            <span className="kick">{pr.eyebrow}</span>
            <Beats text={pr.title} className="h-sec" />
          </div>
          <p>{pr.intro}</p>
        </div>
      </div>
      {STEPS.map((s, i) => (
        <div className="scene" key={s.label}>
          <motion.div className="scene__bg" initial={{ scale: 1.25 }} whileInView={{ scale: 1 }} viewport={{ amount: 0.4 }} transition={{ duration: 1.6, ease }}>
            <img src={s.image} alt={s.imageAlt} loading="lazy" />
          </motion.div>
          <div className="wrap scene__in">
            <motion.div className="scene__n" initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8, ease }}>
              0{i + 1}
            </motion.div>
            <div className="scene__body">
              <span className="kick">{s.label}</span>
              <Beats as="h3" text={s.title} />
              <Reveal y={20}>
                <p>{s.description}</p>
                <ul>
                  {s.benefits.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      ))}
      <div className="band" style={{ position: "relative", zIndex: 3 }}>
        <div className="wrap band__in">
          <div>
            <Beats as="h3" text={pr.ctaTitle} />
            <p>{pr.ctaText}</p>
          </div>
          <div className="ctas" style={{ marginTop: 0 }}>
            <CallButtons onRed phone="+41 79 863 53 91" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="sec" style={{ padding: "100px 0" }}>
      <div className="wrap">
        <div className="stats">
          {HOME.stats.map((s, i) => (
            <motion.div key={s.label} className="stat" initial={{ opacity: 0, scale: 1.8, filter: "blur(10px)" }} whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease, delay: i * 0.12 }}>
              <div className="stat__v">
                <CountUp value={s.value} />
                {s.unit && <small>{s.unit}</small>}
              </div>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Acts() {
  const a = HOME.approach;
  const { openLead } = useLayout();
  return (
    <section id="services">
      <div className="sec sec--2" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <div>
              <span className="kick">{a.eyebrow}</span>
              <Beats text={a.title} className="h-sec" />
            </div>
            <p>{a.intro}</p>
          </div>
        </div>
        <Stagger className="acts">
          {a.cards.map((c, i) => (
            <StaggerItem key={c.title} className="act">
              <div className="act__top">
                <span>ATTO {String(i + 1).padStart(2, "0")}</span>
                <Icon name={c.icon} />
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <div className="band">
        <div className="wrap band__in">
          <div>
            <Beats as="h3" text={a.ctaTitle} />
            <p>{a.ctaText}</p>
          </div>
          <div className="ctas" style={{ marginTop: 0 }}>
            <button type="button" className="btn btn--w" onClick={openLead}>
              Vendi la tua auto
            </button>
            <CallButtons onRed phone="+41 79 863 53 91" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Roll() {
  const z = HOME.zones;
  return (
    <section className="sec" id="ticino">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <span className="kick">{z.eyebrow}</span>
            <Beats text={z.title} className="h-sec" />
          </div>
          <p>{z.intro}</p>
        </div>
        <div className="roll">
          {z.cards.map((c) => (
            <Reveal key={c.href} y={40} amount={0.3}>
              <Link href={c.href} className="roll__item">
                <div className="roll__bg" aria-hidden="true">
                  <img src={c.image.src} alt="" loading="lazy" />
                </div>
                <div>
                  <div className="roll__car">{c.car}</div>
                  <div className="roll__city">{c.city}</div>
                </div>
                <p className="roll__txt">
                  <strong>{c.title}</strong>
                  {c.text}
                </p>
                <span className="roll__go">
                  <Icon name="arrow-right" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 44, textAlign: "center" }}>
          <Link href="/zone-servite" className="more">
            {z.allLabel} <Icon name="arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const f = HOME.faq;
  return (
    <section className="sec" id="faq">
      <div className="wrap" style={{ display: "grid", gap: 50 }}>
        <div className="sec-head sec-head--split" style={{ marginBottom: 0 }}>
          <div>
            <span className="kick">{f.eyebrow}</span>
            <Beats text={f.title} className="h-sec" />
          </div>
          <div>
            <p>{f.intro}</p>
            <div className="ctas" style={{ marginTop: 20 }}>
              <CallButtons />
            </div>
          </div>
        </div>
        <Accordion
          items={FAQS.map((q) => ({ q: q.question, a: <p style={{ margin: 0 }}>{q.answer}</p> }))}
          classes={{ root: "faq", item: "faq__item", button: "faq__q", panel: "faq__panel", num: "faq__num" }}
          icon={(o) => <span className={`faq__x ${o ? "is-open" : ""}`} aria-hidden="true" />}
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
          <div key={i} className="skeleton" style={{ aspectRatio: "4/5" }} />
        ))}
      </div>
    );
  return (
    <Stagger className="posts">
      {posts.map((p) => (
        <StaggerItem key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="post">
            <img src={p.imageUrl || "/blog1.webp"} alt={p.title} loading="lazy" />
            <div className="post__in">
              <div className="post__meta">
                {p.category && <b>{p.category}</b>}
                <span>{formatDateIt(p.publishedAt)}</span>
              </div>
              <h3>{p.title}</h3>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function Blog() {
  return (
    <section className="sec sec--2" id="blog">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <span className="kick">{HOME.blog.eyebrow}</span>
            <Beats text={HOME.blog.title} className="h-sec" />
          </div>
          <div>
            <Link href="/blog" className="more">
              Vedi tutti gli articoli <Icon name="arrow-right" />
            </Link>
          </div>
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
      <div className="ticker">
        <Marquee duration={24}>
          {[...HOME.hero.bullets, "Valutazione gratuita", ...HOME.hero.bullets, "Valutazione gratuita"].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </Marquee>
      </div>
      <Why />
      <Reel />
      <Scenes />
      <Stats />
      <Acts />
      <Roll />
      <Reviews />
      <Logos />
      <Faq />
      <Blog />
    </>
  );
}
