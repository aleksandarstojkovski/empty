import { motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { useBlogPost, useBlogPosts } from "@clone/lib/api";
import { groupPosts, relatedPosts } from "@clone/lib/blog";
import { formatDateItLong } from "@clone/lib/format";
import { BlockView, PageBody, splitSection, type Slots } from "../../shared/Blocks";
import { normalizeHero, type Page, type Section } from "../../shared/content";
import { Icon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { Rich } from "../../shared/Rich";
import { Reveal } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { CallButtons, Confetti, Logos, Pop, Reviews, Ring, Tilt, bounce } from "./parts";
import { formClasses } from "./ui";

const HERO_CONFETTI = [
  { k: "star" as const, x: "88%", y: "14%", c: "#FFD23F", s: 50, r: 12, d: 6, depth: 1.3 },
  { k: "dot" as const, x: "93%", y: "52%", c: "#FF9EC4", s: 26, d: 4.8 },
  { k: "zig" as const, x: "40%", y: "7%", c: "#FFD23F", s: 66, d: 7 },
  { k: "tri" as const, x: "62%", y: "82%", c: "#9FF0C4", s: 36, r: 20, d: 5.4 },
];

function HeroShell({ tone, children }: { tone: "bl" | "ye" | "rd"; children: ReactNode }) {
  return (
    <section className={`phero ${tone === "bl" ? "" : `phero--${tone}`}`}>
      <Confetti items={tone === "ye" ? HERO_CONFETTI.map((c) => (c.c === "#FFD23F" ? { ...c, c: "#FF3B30" } : c)) : HERO_CONFETTI} />
      {children}
    </section>
  );
}

function PageHero({ s: raw, slots }: { s: Section; slots: Slots }) {
  const { section: s, caption } = normalizeHero(raw);
  const tone = s.tone === "dark" ? "bl" : s.image ? "ye" : "rd";
  const { head, body } = splitSection(s);
  return (
    <HeroShell tone={tone}>
      <div className={`wrap phero__grid ${s.image ? "phero__grid--img" : ""}`}>
        <div>
          {head.eyebrow && (
            <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ ...bounce, delay: 0.25 }}>
              <Rich html={head.eyebrow} as="p" className="pg-eyebrow" />
            </motion.div>
          )}
          <motion.h1 initial={{ scale: 0.4, rotate: -6, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.35 }} style={{ transformOrigin: "left center" }}>
            <Rich html={head.title ?? ""} />
          </motion.h1>
          {head.lead.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
              <Rich html={l} as="p" className="phero__lead" />
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} style={{ display: "grid", gap: 22, marginTop: 28 }}>
            {body.map((b, i) => (
              <BlockView key={i} b={b} slots={slots} />
            ))}
          </motion.div>
        </div>
        {s.image && (
          <motion.div className="blob" initial={{ scale: 0.3, rotate: 20, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 150, damping: 13, delay: 0.4 }}>
            <div className="blob__img">
              <img src={s.image.src} alt={s.image.alt} />
            </div>
            {caption.length > 0 && (
              <motion.div className="blob__name" initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ ...bounce, delay: 1 }}>
                {caption.map((c, i) => (i === 0 ? <Rich key={i} html={c} as="span" /> : <small key={i}>{c.replace(/<[^>]+>/g, "")}</small>))}
              </motion.div>
            )}
            <Ring text="Valutazione gratuita ★ Pagamento immediato ★ " icon="banknote" delay={1.1} />
          </motion.div>
        )}
      </div>
    </HeroShell>
  );
}

const slots: Slots = {
  form: () => <LeadForm c={formClasses} />,
  reviews: () => <Reviews />,
  logos: () => <Logos />,
  faqIcon: (o) => <span className={`faq__tog ${o ? "is-open" : ""}`} aria-hidden="true" />,
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
      <HeroShell tone="bl">
        <div className="wrap phero__grid">
          <div>
            <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ ...bounce, delay: 0.25 }}>
              <p className="pg-eyebrow">Il Nostro Blog</p>
            </motion.div>
            <motion.h1 initial={{ scale: 0.4, rotate: -6, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.35 }} style={{ transformOrigin: "left center" }}>
              Consigli e guide per vendere o comprare auto in <span data-accent>Ticino</span>
            </motion.h1>
          </div>
        </div>
      </HeroShell>
      <div className="wrap" style={{ paddingBottom: 90 }}>
        {isLoading && (
          <div className="posts" style={{ marginTop: 50 }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="skeleton" style={{ height: 380 }} />
            ))}
          </div>
        )}
        {!isLoading && data?.length === 0 && <p>Nessun articolo trovato.</p>}
        {groups.map((g, gi) => (
          <section key={g.id} className="bgroup" aria-labelledby={`g-${g.id}`}>
            <div className="bgroup__head">
              <div>
                <span className={`tag ${gi % 2 ? "tag--bl" : "tag--ye"}`}>Sezione {gi + 1}</span>
                <Pop text={g.title} hl={1} />
              </div>
              <p style={{ margin: 0, fontSize: 18 }} id={`g-${g.id}`}>
                {g.description}
              </p>
            </div>
            <div className="posts">
              {g.posts.map((p, i) => (
                <Tilt key={p.slug} i={i}>
                  <Link href={`/blog/${p.slug}`} className="post">
                    <div className="post__ph">
                      <img src={p.imageUrl || "/blog1.webp"} alt={p.title} loading="lazy" />
                    </div>
                    <div className="post__meta">
                      {p.category && <b>{p.category}</b>}
                      <span>{formatDateItLong(p.publishedAt)}</span>
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                  </Link>
                </Tilt>
              ))}
            </div>
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
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  usePageMeta(post ? `${post.title} | MAS Global Trade` : "Blog | MAS Global Trade", post?.excerpt);
  if (!isLoading && !post) return <NotFound />;
  const { summary, body } = post ? splitSummary(post.content) : { summary: null, body: "" };
  const related = relatedPosts(all ?? [], slug);
  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      {isLoading || !post ? (
        <div className="skeleton" style={{ height: "70vh", margin: 16 }} />
      ) : (
        <>
          <section className="ahero">
            <div className="wrap">
              <Link href="/blog" className="link-arrow">
                <Icon name="arrow-left" /> Torna al Blog
              </Link>
              <div className="post__meta" style={{ margin: "22px 0 0", color: "#111" }}>
                {post.category && <b style={{ background: "#fff" }}>{post.category}</b>}
                <span>{formatDateItLong(post.publishedAt)}</span>
              </div>
              <motion.h1 initial={{ scale: 0.5, rotate: -4, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 13, delay: 0.3 }} style={{ transformOrigin: "left center" }}>
                {post.title}
              </motion.h1>
              <motion.div className="ahero__img" initial={{ y: 80, rotate: 4, opacity: 0 }} animate={{ y: 0, rotate: -1, opacity: 1 }} transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.5 }}>
                <img src={post.imageUrl || "/blog1.webp"} alt={post.title} />
              </motion.div>
            </div>
          </section>
          <div className="wrap article">
            <Reveal>
              <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
            </Reveal>
            <aside className="article__aside">
              {summary && <div className="inbreve" dangerouslySetInnerHTML={{ __html: summary.replace('<div class="inbreve-box">', "<div>") }} />}
              <div style={{ display: "grid", gap: 14, marginTop: 24 }}>
                <CallButtons />
              </div>
            </aside>
          </div>
          {related.length > 0 && (
            <section className="sec on-w" style={{ paddingTop: 70 }}>
              <div className="wrap">
                <span className="tag tag--ye">Articoli correlati</span>
                <div className="pg-links" style={{ marginTop: 26 }}>
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="pg-link">
                      <span>{r.title}</span>
                      <Icon name="arrow-right" />
                    </Link>
                  ))}
                </div>
                <div className="callout">
                  <div>
                    <h3>Pronto a vendere la tua auto?</h3>
                    <p>Mandami le foto su WhatsApp o chiamami direttamente. In poche ore hai una valutazione concreta, senza impegno e senza sorprese.</p>
                  </div>
                  <div className="ctas" style={{ marginTop: 0 }}>
                    <CallButtons tone="ye" phone="+41 79 863 53 91" />
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
    <HeroShell tone="rd">
      <div className="wrap phero__grid" style={{ minHeight: "56vh", alignContent: "center" }}>
        <div>
          <p className="pg-eyebrow">Errore 404</p>
          <motion.h1 initial={{ scale: 0.3, rotate: -10, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 11 }} style={{ transformOrigin: "left center" }}>
            Questa pagina <span data-accent>non è disponibile</span>
          </motion.h1>
          <p className="phero__lead">Il contenuto potrebbe essere stato spostato o rimosso. Torna alla homepage oppure richiedi una valutazione gratuita della tua auto.</p>
          <div className="ctas">
            <Link href="/" className="btn btn--ye">
              Torna alla homepage
            </Link>
            <Link href="/valutazione-gratuita" className="btn btn--w">
              Valutazione gratuita
            </Link>
          </div>
        </div>
      </div>
    </HeroShell>
  );
}
