import { motion, useMotionValue } from "framer-motion";
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
import { Burst, CallButtons, Logos, Reviews, Slam } from "./parts";
import { useLayout } from "./Layout";

const spring = { type: "spring" as const, stiffness: 380, damping: 18 };

function Hero() {
  const [line1, line2] = HOME.hero.titleHtml.split(/<br\s*\/?>/);
  const title = line1.replace(/<[^>]+>/g, "");
  const slab = line2.replace(/<[^>]+>/g, "");
  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div>
          <motion.span className="label" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ...spring, delay: 0.1 }}>
            MAS Global Trade · Canton Ticino
          </motion.span>
          <h1 className="hero__title" aria-label={title}>
            {title.split(" ").map((w, i) => (
              <motion.span
                key={i}
                aria-hidden="true"
                style={{ display: "inline-block", marginRight: "0.2em" }}
                initial={{ y: -260, rotate: i % 2 ? 10 : -10, opacity: 0 }}
                animate={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 + i * 0.09 }}
              >
                {w}
              </motion.span>
            ))}
          </h1>
          <motion.div className="hero__slab" initial={{ scaleX: 0, rotate: -2 }} animate={{ scaleX: 1, rotate: -2 }} style={{ originX: 0 }} transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 0.85 }}>
            {slab}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.5 }}>
            <Rich html={HOME.hero.intro} as="p" className="hero__intro" />
            <ul className="tags">
              {HOME.hero.bullets.map((b, i) => (
                <motion.li key={b} initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ ...spring, delay: 1.15 + i * 0.08 }}>
                  <Icon name="check" /> {b}
                </motion.li>
              ))}
            </ul>
            <div className="ctas">
              <CallButtons />
            </div>
            <p className="hero__rating">
              <b>★★★★★</b>
              {HOME.hero.rating}
            </p>
          </motion.div>
        </div>
        <motion.div style={{ position: "relative" }} initial={{ x: 200, rotate: 12, opacity: 0 }} animate={{ x: 0, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.5 }}>
          <div className="frame">
            <div className="ph">
              <img src="/hero-desktop.webp" alt={HOME.hero.image?.alt ?? "Madian, MAS Global Trade"} />
            </div>
            <div className="frame__cap">
              <span>Madian</span>
              <span>MAS Global Trade</span>
            </div>
          </div>
          <Burst>
            <b>4.9</b>su Google
          </Burst>
        </motion.div>
      </div>
    </section>
  );
}

function Why() {
  const w = HOME.why;
  return (
    <section className="sec" id="servizio">
      <div className="wrap why">
        <div>
          <span className="label">{w.eyebrow}</span>
          <Slam text={w.title} className="h-big" />
          <Reveal>
            {w.paragraphs.map((p, i) => (
              <Rich key={i} html={p} as="p" />
            ))}
          </Reveal>
          <motion.p className="shout" initial={{ scale: 0.6, rotate: -8, opacity: 0 }} whileInView={{ scale: 1, rotate: -1, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={spring}>
            {w.quote.replace(/^"|"$/g, "")}
          </motion.p>
          <div className="ctas">
            <CallButtons />
          </div>
        </div>
        <motion.div className="polaroid" initial={{ rotate: 8, y: 80, opacity: 0 }} whileInView={{ rotate: -1.5, y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ type: "spring", stiffness: 140, damping: 15 }}>
          <div className="ph">
            <img src={w.card.image.src} alt={w.card.image.alt || "Madian, MAS Global Trade"} loading="lazy" />
          </div>
          <h3>{w.card.title}</h3>
          <p>{w.card.text}</p>
          <ul className="checklist">
            {w.card.bullets.map((b, i) => (
              <li key={b}>
                <span>{i + 1}</span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Lot() {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState(0);
  const x = useMotionValue(0);
  useEffect(() => {
    const m = () => setMax(Math.max(0, (track.current?.scrollWidth ?? 0) - (wrap.current?.clientWidth ?? 0)));
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  const p = HOME.pickups;
  return (
    <section className="sec sec--g" style={{ overflow: "hidden" }}>
      <div className="wrap sec-head sec-head--split">
        <div>
          <span className="label">{p.eyebrow}</span>
          <Slam text={p.title} className="h-big" />
        </div>
        <p>
          {p.intro} <strong>← Trascina →</strong>
        </p>
      </div>
      <div className="lot" ref={wrap}>
        <motion.div className="lot__track" ref={track} drag="x" dragConstraints={{ left: -max, right: 0 }} style={{ x }}>
          {PICKUPS.map((it, i) => (
            <figure key={it.src}>
              <div className="ph">
                <img src={it.src.replace(".webp", "-640.webp")} alt={it.alt} draggable={false} loading="lazy" />
              </div>
              <motion.span
                className="stamp"
                initial={{ scale: 3.5, rotate: -30, opacity: 0 }}
                whileInView={{ scale: 1, rotate: -12, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ type: "spring", stiffness: 500, damping: 18, delay: 0.2 + (i % 3) * 0.15 }}
              >
                Venduta!
              </motion.span>
              <figcaption>
                <small>Ritiro concluso a</small>
                {it.city}
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  const pr = HOME.process;
  return (
    <section className="sec" id="come-funziona">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <span className="label">{pr.eyebrow}</span>
            <Slam text={pr.title} className="h-big" />
          </div>
          <p>{pr.intro}</p>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <motion.article
              key={s.label}
              className="step"
              initial={{ x: i % 2 ? 160 : -160, rotate: i % 2 ? 3 : -3, opacity: 0 }}
              whileInView={{ x: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
            >
              <div className="step__n">{i + 1}</div>
              <div className="step__img">
                <img src={s.image} alt={s.imageAlt} loading="lazy" />
              </div>
              <div className="step__body">
                <span className="label label--y">{s.label}</span>
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
        <Reveal className="callout">
          <div>
            <h3>{pr.ctaTitle}</h3>
            <p>{pr.ctaText}</p>
          </div>
          <div className="ctas" style={{ marginTop: 0 }}>
            <CallButtons dark phone="+41 79 863 53 91" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="sec sec--y" style={{ padding: "60px 0" }}>
      <div className="wrap">
        <Stagger className="stats">
          {HOME.stats.map((s) => (
            <StaggerItem key={s.label} className="stat">
              <Icon name={s.icon} className="stat__icon" />
              <div className="stat__v">
                <CountUp value={s.value} />
                {s.unit && <small>{s.unit}</small>}
              </div>
              <p>{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Approach() {
  const a = HOME.approach;
  const { openLead } = useLayout();
  return (
    <section className="sec sec--g" id="services">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <span className="label">{a.eyebrow}</span>
            <Slam text={a.title} className="h-big" />
          </div>
          <p>{a.intro}</p>
        </div>
        <div className="tags-grid">
          {a.cards.map((c, i) => (
            <motion.div
              key={c.title}
              className="ptag"
              initial={{ y: 80, rotate: i % 2 ? 6 : -6, opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: (i % 3) * 0.08 }}
            >
              <span className="ptag__icon">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="ptag__n" aria-hidden="true">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
        <Reveal className="callout">
          <div>
            <h3>{a.ctaTitle}</h3>
            <p>{a.ctaText}</p>
          </div>
          <div className="ctas" style={{ marginTop: 0 }}>
            <button type="button" className="btn btn--y btn--onk btn--wiggle" onClick={openLead}>
              Vendi la tua auto
            </button>
            <a href="https://wa.me/41798635391?text=Buongiorno%2C%20vorrei%20vendere%20la%20mia%20auto.%20Si%20tratta%20di%20" target="_blank" rel="noreferrer" className="btn btn--wa btn--onk">
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Zones() {
  const z = HOME.zones;
  return (
    <section className="sec" id="ticino">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <div>
            <span className="label">{z.eyebrow}</span>
            <Slam text={z.title} className="h-big" />
          </div>
          <p>{z.intro}</p>
        </div>
        <div className="signs">
          {z.cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ y: 60, rotate: i % 2 ? 4 : -4, opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: (i % 3) * 0.08 }}
            >
              <Link href={c.href} className="sign">
                <div className="sign__img">
                  <img src={c.image.src} alt={c.image.alt} loading="lazy" />
                  <span className="sign__car">{c.car}</span>
                </div>
                <div className="sign__plate">
                  <b>{c.city}</b>
                  <Icon name="arrow-right" />
                </div>
                <p>
                  <strong>{c.title}</strong>
                  {c.text}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link href="/zone-servite" className="btn btn--y">
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
    <section className="sec sec--g" id="faq">
      <div className="wrap" style={{ display: "grid", gap: 40 }}>
        <div className="sec-head sec-head--split" style={{ marginBottom: 0 }}>
          <div>
            <span className="label">{f.eyebrow}</span>
            <Slam text={f.title} className="h-big" />
          </div>
          <div>
            <p>{f.intro}</p>
            <div className="ctas" style={{ marginTop: 18 }}>
              <CallButtons />
            </div>
          </div>
        </div>
        <Accordion
          items={FAQS.map((q) => ({ q: q.question, a: <p style={{ margin: 0 }}>{q.answer}</p> }))}
          classes={{ root: "faq", item: "faq__item", itemOpen: "is-open", button: "faq__q", panel: "faq__panel", num: "faq__num" }}
          icon={(o) => <span className={`faq__tog ${o ? "is-open" : ""}`} aria-hidden="true">+</span>}
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
          <div key={i} className="skeleton" style={{ height: 360 }} />
        ))}
      </div>
    );
  return (
    <Stagger className="posts">
      {posts.map((p) => (
        <StaggerItem key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="post">
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
            <span className="label">{HOME.blog.eyebrow}</span>
            <Slam text={HOME.blog.title} className="h-big" />
          </div>
          <div>
            <Link href="/blog" className="arrow">
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
        <Marquee duration={26}>
          {[...HOME.hero.bullets, "Valutazione gratuita", ...HOME.hero.bullets, "Valutazione gratuita"].map((b, i) => (
            <span key={i}>{b}</span>
          ))}
        </Marquee>
      </div>
      <Why />
      <Lot />
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
