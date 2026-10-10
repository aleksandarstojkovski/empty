import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { useBlogPost, useBlogPosts } from "@clone/lib/api";
import { groupPosts, relatedPosts } from "@clone/lib/blog";
import { formatDateItLong } from "@clone/lib/format";
import { BlockView, PageBody, splitSection, type Slots } from "../../shared/Blocks";
import { normalizeHero, type Page, type Section } from "../../shared/content";
import { Icon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { Rich } from "../../shared/Rich";
import { Reveal, SplitWords, Stagger, StaggerItem } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { CallButtons, Logos, Reviews } from "./parts";
import { useDarkHero } from "./Layout";
import { formClasses } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

function PageHero({ s: raw, slots }: { s: Section; slots: Slots }) {
  const { section: s, caption } = normalizeHero(raw);
  const dark = s.tone === "dark";
  useDarkHero(dark);
  const { head, body } = splitSection(s);
  const titleText = (head.title ?? "").replace(/<br\s*\/?>/g, " ");
  return (
    <section className={`phero ${dark ? "phero--dark" : ""}`}>
      <div className={`wrap phero__grid ${s.image ? "phero__grid--img" : ""}`}>
        <div>
          {head.eyebrow && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease, delay: 0.3 }}>
              <Rich html={head.eyebrow} as="p" className="pg-eyebrow" />
            </motion.div>
          )}
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease, delay: 0.35 }}>
            <Rich html={head.title ?? ""} />
          </motion.h1>
          <span className="sr-only">{titleText}</span>
          {head.lead.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.55 + i * 0.1 }}>
              <Rich html={l} as="p" className="phero__lead" />
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.7 }} style={{ display: "grid", gap: 22, marginTop: 30 }}>
            {body.map((b, i) => (
              <BlockView key={i} b={b} slots={slots} />
            ))}
          </motion.div>
        </div>
        {s.image && (
          <motion.div className="arch" initial={{ clipPath: "inset(100% 0 0 0 round 999px 999px 28px 28px)" }} animate={{ clipPath: "inset(0% 0 0 0 round 999px 999px 28px 28px)" }} transition={{ duration: 1.4, ease, delay: 0.3 }}>
            <motion.img src={s.image.src} alt={s.image.alt} initial={{ scale: 1.25 }} animate={{ scale: 1 }} transition={{ duration: 2, ease, delay: 0.3 }} />
            {caption.length > 0 && (
              <div className="arch__cap">
                {caption.map((c, i) => (
                  <Rich key={i} html={c} as="span" />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

const slots: Slots = {
  form: () => <LeadForm c={formClasses} />,
  reviews: () => <Reviews />,
  logos: () => <Logos />,
  faqIcon: (o) => <span className={`faq__plus ${o ? "is-open" : ""}`} aria-hidden="true" />,
};
slots.hero = (s) => <PageHero s={s} slots={slots} />;

export function ContentPage({ page }: { page: Page }) {
  usePageMeta(page.title, page.description);
  return <PageBody page={page} slots={slots} />;
}

export function Blog() {
  usePageMeta("Blog | MAS Global Trade", "Consigli e guide per vendere o comprare auto in Ticino");
  const { data, isLoading } = useBlogPosts();
  const groups = groupPosts(data ?? []);
  return (
    <>
      <section className="phero">
        <div className="wrap">
          <span className="kicker">Il Nostro Blog</span>
          <SplitWords as="h1" text="Consigli e guide per vendere o comprare auto in Ticino" className="h-display" stagger={0.05} />
        </div>
      </section>
      <div className="wrap" style={{ paddingBottom: 100 }}>
        {isLoading && (
          <div className="posts">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="skeleton" style={{ aspectRatio: "4/3" }} />
            ))}
          </div>
        )}
        {!isLoading && data?.length === 0 && <p>Nessun articolo trovato.</p>}
        {groups.map((g, gi) => (
          <section key={g.id} className="blog-group" aria-labelledby={`g-${g.id}`}>
            <Reveal className="blog-group__head">
              <h2 id={`g-${g.id}`} className="h-section" style={{ fontSize: "clamp(2rem,3.6vw,3.2rem)" }}>
                <span className="ital" style={{ color: "var(--accent)", fontSize: "0.5em", marginRight: 14 }}>
                  0{gi + 1}
                </span>
                {g.title}
              </h2>
              <p style={{ color: "var(--ink-2)", margin: 0 }}>{g.description}</p>
            </Reveal>
            <Stagger className="posts">
              {g.posts.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="post" style={{ display: "block" }}>
                    <div className="ph">
                      <img src={p.imageUrl || "/blog1.webp"} alt={p.title} loading="lazy" />
                    </div>
                    <div className="post__meta">
                      {p.category && <b>{p.category}</b>}
                      <span>{formatDateItLong(p.publishedAt)}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        ))}
      </div>
    </>
  );
}

function splitSummary(html: string) {
  const start = html.indexOf('<div class="inbreve-box">');
  if (start === -1) return { summary: null as string | null, body: html };
  let depth = 0;
  for (let i = start; i < html.length; i++) {
    if (html.startsWith("<div", i)) depth++;
    else if (html.startsWith("</div>", i) && --depth === 0) return { summary: html.slice(start, i + 6), body: html.slice(i + 6) };
  }
  return { summary: null, body: html };
}

export function BlogPost({ slug }: { slug: string }) {
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: all } = useBlogPosts();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  useDarkHero(true);
  usePageMeta(post ? `${post.title} | MAS Global Trade` : "Blog | MAS Global Trade", post?.excerpt);
  if (!isLoading && !post) return <NotFound />;
  const { summary, body } = post ? splitSummary(post.content) : { summary: null, body: "" };
  const related = relatedPosts(all ?? [], slug);
  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      {isLoading || !post ? (
        <div className="skeleton" style={{ height: "80vh", borderRadius: 0 }} />
      ) : (
        <>
          <section className="article-hero">
            <motion.img src={post.imageUrl || "/blog1.webp"} alt={post.title} initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease }} />
            <div className="wrap">
              <Link href="/blog" className="arrow-link" style={{ color: "rgba(255,255,255,.75)" }}>
                <Icon name="arrow-left" /> Torna al Blog
              </Link>
              <div className="post__meta" style={{ color: "rgba(255,255,255,.75)", marginTop: 28 }}>
                {post.category && <b style={{ color: "var(--accent-2)" }}>{post.category}</b>}
                <span>{formatDateItLong(post.publishedAt)}</span>
              </div>
              <SplitWords as="h1" text={post.title} stagger={0.035} />
            </div>
          </section>
          <div className="wrap article">
            <aside className="article__aside">
              {summary ? <div className="inbreve" dangerouslySetInnerHTML={{ __html: summary.replace('<div class="inbreve-box">', "<div>") }} /> : <p className="pull" style={{ margin: 0 }}>{post.excerpt}</p>}
              <div style={{ display: "grid", gap: 10, marginTop: 24 }}>
                <CallButtons />
              </div>
            </aside>
            <Reveal>
              <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
            </Reveal>
          </div>
          {related.length > 0 && (
            <section className="sec sec--alt">
              <div className="wrap">
                <div className="sec-head">
                  <span className="kicker">Articoli correlati</span>
                </div>
                <div className="pg-links">
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="pg-link">
                      <span>{r.title}</span>
                      <Icon name="arrow-right" />
                    </Link>
                  ))}
                </div>
                <div className="band">
                  <div>
                    <h3>Pronto a vendere la tua auto?</h3>
                    <p>Mandami le foto su WhatsApp o chiamami direttamente. In poche ore hai una valutazione concreta, senza impegno e senza sorprese.</p>
                  </div>
                  <div className="band__ctas">
                    <CallButtons light phoneLabel="+41 79 863 53 91" />
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export function NotFound() {
  usePageMeta("Pagina non trovata | MAS Global Trade");
  return (
    <section className="phero" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <span className="kicker">Errore 404</span>
        <h1 className="h-display" style={{ fontSize: "clamp(3rem,8vw,7rem)" }}>
          Questa pagina <em>non è disponibile</em>
        </h1>
        <p className="phero__lead">Il contenuto potrebbe essere stato spostato o rimosso. Torna alla homepage oppure richiedi una valutazione gratuita della tua auto.</p>
        <div className="hero__ctas">
          <Link href="/" className="btn btn--ink">
            Torna alla homepage
          </Link>
          <Link href="/valutazione-gratuita" className="btn btn--line">
            Valutazione gratuita
          </Link>
        </div>
      </div>
    </section>
  );
}
