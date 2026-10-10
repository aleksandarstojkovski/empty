import { motion } from "framer-motion";
import { Link } from "wouter";
import { HOME, STEPS, FAQS, PICKUPS } from "../../content/home";
import { Accordion } from "../../shared/Accordion";
import { Icon } from "../../shared/Icon";
import { Rich } from "../../shared/Rich";
import { CountUp, Reveal, Stagger, StaggerItem } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { CallButtons, CtaBand, Head, Logos, PostCards, Reviews, Stars } from "./parts";
import { useLayout } from "./Layout";

const [TITLE, SLOGAN] = HOME.hero.titleHtml.split(/<br\s*\/?>/).map((s) => s.replace(/<[^>]+>/g, "").trim());
const TRUST_ICONS = ["users", "file-check", "banknote", "truck"];
const ease = [0.22, 1, 0.36, 1] as const;
const up = (d: number) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease, delay: d } });

function HeroText({ center = false }: { center?: boolean }) {
  return (
    <div className={`hero__text ${center ? "hero__text--c" : ""}`}>
      <motion.p className="eyebrow" {...up(0.05)}>
        MAS Global Trade · Canton Ticino
      </motion.p>
      <motion.h1 className="hero__title" {...up(0.12)}>
        {TITLE} <span className="hero__accent">{SLOGAN}</span>
      </motion.h1>
      <motion.div {...up(0.22)}>
        <Rich html={HOME.hero.intro} as="p" className="hero__intro" />
      </motion.div>
      <motion.div className="btns" {...up(0.3)}>
        <CallButtons />
      </motion.div>
      <motion.p className="hero__rating" {...up(0.38)}>
        <Stars /> {HOME.hero.rating}
      </motion.p>
    </div>
  );
}

function Trust() {
  return (
    <div className="trust">
      <div className="wrap trust__in">
        {HOME.hero.bullets.map((b, i) => (
          <motion.div key={b} className="trust__item" {...up(0.35 + i * 0.06)}>
            <span className="trust__icon">
              <Icon name={TRUST_ICONS[i] ?? "check"} />
            </span>
            {b}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const { cfg } = useLayout();
  const alt = HOME.hero.image?.alt ?? "Madian, MAS Global Trade";
  if (cfg.hero === "photo")
    return (
      <>
        <section className="hero hero--photo">
          <picture className="hero__bg">
            <source media="(max-width: 767px)" srcSet="/hero-mobile.webp" />
            <img src="/hero-desktop.webp" alt={alt} />
          </picture>
          <div className="wrap">
            <HeroText />
          </div>
        </section>
        <Trust />
      </>
    );
  if (cfg.hero === "centered")
    return (
      <>
        <section className="hero hero--centered">
          <div className="wrap">
            <HeroText center />
            <motion.div className="hero__wide" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.35 }}>
              <img src="/hero-desktop.webp" alt={alt} />
              <div className="hero__badge">
                <b>4.9</b>
                <span>
                  <Stars />
                  <small>su Google</small>
                </span>
              </div>
            </motion.div>
          </div>
        </section>
        <Trust />
      </>
    );
  return (
    <>
      <section className="hero hero--split">
        <div className="wrap hero__grid">
          <HeroText />
          <motion.div className="hero__img" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease, delay: 0.2 }}>
            <img src="/hero-desktop.webp" alt={alt} />
            <div className="hero__badge">
              <b>4.9</b>
              <span>
                <Stars />
                <small>su Google</small>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <Trust />
    </>
  );
}

function Why() {
  const w = HOME.why;
  return (
    <section className="sec" id="servizio">
      <div className="wrap why">
        <Reveal>
          <p className="eyebrow">{w.eyebrow}</p>
          <h2 className="h2">{w.title}</h2>
          {w.paragraphs.map((p, i) => (
            <Rich key={i} html={p} as="p" className="why__p" />
          ))}
          <blockquote className="quote">{w.quote}</blockquote>
          <div className="btns">
            <CallButtons />
          </div>
        </Reveal>
        <Reveal className="card why__card" delay={0.1}>
          <div className="why__img">
            <img src={w.card.image.src} alt={w.card.image.alt || "Madian, MAS Global Trade"} loading="lazy" />
          </div>
          <div className="why__body">
            <h3>{w.card.title}</h3>
            <p className="muted">{w.card.text}</p>
            <ul className="checks">
              {w.card.bullets.map((b) => (
                <li key={b}>
                  <Icon name="circle-check" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pickups() {
  const p = HOME.pickups;
  return (
    <section className="sec sec--alt">
      <div className="wrap">
        <Head eyebrow={p.eyebrow} title={p.title} intro={p.intro} />
        <Stagger className="pickups">
          {PICKUPS.map((it) => (
            <StaggerItem key={it.src} className="pickup">
              <img src={it.src.replace(".webp", "-640.webp")} alt={it.alt} loading="lazy" />
              <span className="pickup__city">
                <Icon name="map-pin" /> {it.city}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Process() {
  const pr = HOME.process;
  return (
    <section className="sec" id="come-funziona">
      <div className="wrap">
        <Head eyebrow={pr.eyebrow} title={pr.title} intro={pr.intro} />
        <Stagger className="steps">
          {STEPS.map((s, i) => (
            <StaggerItem key={s.label} className="card step">
              <div className="step__img">
                <img src={s.image} alt={s.imageAlt} loading="lazy" />
                <span className="step__n">{i + 1}</span>
              </div>
              <div className="step__body">
                <p className="eyebrow eyebrow--sm">{s.label}</p>
                <h3>{s.title}</h3>
                <p className="muted">{s.description}</p>
                <ul className="checks checks--sm">
                  {s.benefits.map((b) => (
                    <li key={b}>
                      <Icon name="check" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <CtaBand title={pr.ctaTitle} text={pr.ctaText}>
          <CallButtons phone="+41 79 863 53 91" onDark />
        </CtaBand>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-sec">
      <Stagger className="wrap stats">
        {HOME.stats.map((s) => (
          <StaggerItem key={s.label} className="stat">
            <span className="stat__v">
              <CountUp value={s.value} />
              {s.unit && <small> {s.unit}</small>}
            </span>
            <span className="stat__l">{s.label}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function Approach() {
  const a = HOME.approach;
  const { openLead } = useLayout();
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <Head eyebrow={a.eyebrow} title={a.title} intro={a.intro} />
        <Stagger className="feats">
          {a.cards.map((c) => (
            <StaggerItem key={c.title} className="card feat">
              <span className="feat__icon">
                <Icon name={c.icon} />
              </span>
              <h3>{c.title}</h3>
              <p className="muted">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <CtaBand title={a.ctaTitle} text={a.ctaText}>
          <button type="button" className="btn btn--primary" onClick={openLead}>
            Vendi la tua auto
          </button>
          <a href="https://wa.me/41798635391?text=Buongiorno%2C%20vorrei%20vendere%20la%20mia%20auto.%20Si%20tratta%20di%20" target="_blank" rel="noreferrer" className="btn btn--wa">
            WhatsApp
          </a>
        </CtaBand>
      </div>
    </section>
  );
}

function Zones() {
  const z = HOME.zones;
  return (
    <section className="sec sec--alt" id="ticino">
      <div className="wrap">
        <Head eyebrow={z.eyebrow} title={z.title} intro={z.intro} />
        <Stagger className="zones">
          {z.cards.map((c) => (
            <StaggerItem key={c.href}>
              <Link href={c.href} className="card zone">
                <div className="zone__img">
                  <img src={c.image.src} alt={c.image.alt} loading="lazy" />
                </div>
                <div className="zone__body">
                  <p className="zone__city">
                    <Icon name="map-pin" /> {c.city}
                  </p>
                  <h3>{c.title}</h3>
                  <p className="muted">{c.text}</p>
                  <span className="link">
                    Scopri di più <Icon name="arrow-right" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="center-row">
          <Link href="/zone-servite" className="btn btn--ghost">
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
      <div className="wrap faq-wrap">
        <Reveal>
          <p className="eyebrow">{f.eyebrow}</p>
          <h2 className="h2">{f.title}</h2>
          <p className="head__intro">{f.intro}</p>
          <div className="btns">
            <CallButtons />
          </div>
        </Reveal>
        <Accordion
          items={FAQS.map((q) => ({ q: q.question, a: <p>{q.answer}</p> }))}
          classes={{ root: "faq", item: "faq__item", itemOpen: "is-open", button: "faq__q", panel: "faq__a" }}
          icon={(o) => <Icon name={o ? "chevron-up" : "chevron-down"} className="faq__icon" />}
          defaultOpen={0}
        />
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="sec sec--alt" id="blog">
      <div className="wrap">
        <Head eyebrow={HOME.blog.eyebrow} title={HOME.blog.title}>
          <Link href="/blog" className="link">
            Vedi tutti gli articoli <Icon name="arrow-right" />
          </Link>
        </Head>
        <PostCards />
      </div>
    </section>
  );
}

export function FinalCta() {
  const { openLead } = useLayout();
  return (
    <section className="final">
      <Reveal className="wrap final__in">
        <div>
          <h2>Vendi la tua auto.</h2>
          <p>{SLOGAN}</p>
        </div>
        <div className="btns">
          <button type="button" className="btn btn--light" onClick={openLead}>
            Richiedi una valutazione
          </button>
          <CallButtons onDark />
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  usePageMeta("Compro auto usate in Ticino | MAS Global Trade", "Vendi la tua auto usata in Ticino senza perdere tempo: valutazione gratuita, pagamento immediato e ritiro a domicilio. Parli direttamente con MAS Global Trade.");
  return (
    <>
      <Hero />
      <Why />
      <Pickups />
      <Process />
      <Stats />
      <Approach />
      <Zones />
      <Reviews />
      <Logos />
      <Faq />
      <Blog />
      <FinalCta />
    </>
  );
}
