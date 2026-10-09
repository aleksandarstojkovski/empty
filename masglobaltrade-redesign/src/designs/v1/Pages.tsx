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
import { Reveal, Stagger, StaggerItem } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { CallButtons, Logos, Reviews, Slam } from "./parts";
import { formClasses } from "./ui";

const spring = { type: "spring" as const, stiffness: 300, damping: 16 };

function PageHero({ s: raw, slots }: { s: Section; slots: Slots }) {
  const { section: s, caption } = normalizeHero(raw);
  const dark = s.tone === "dark";
  const { head, body } = splitSection(s);
  return (
    <section className={`phero ${dark ? "phero--k" : ""}`}>
      <div className={`wrap phero__grid ${s.image ? "phero__grid--img" : ""}`}>
        <div>
          {head.eyebrow && (
            <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ ...spring, delay: 0.25 }}>
              <Rich html={head.eyebrow} as="p" className="pg-eyebrow" />
            </motion.div>
          )}
          <motion.h1 initial={{ y: -140, opacity: 0, rotate: -3 }} animate={{ y: 0, opacity: 1, rotate: 0 }} transition={{ ...spring, delay: 0.35 }}>
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
          <motion.div className="frame" initial={{ x: 160, rotate: 10, opacity: 0 }} animate={{ x: 0, rotate: 2, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.4 }}>
            <div className="ph">
              <img src={s.image.src} alt={s.image.alt} />
            </div>
            <div className="frame__cap">
              {caption.length ? (
                caption.map((c, i) => <Rich key={i} html={c} as="span" />)
              ) : (
                <span>{s.image.alt}</span>
              )}
            </div>
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
  faqIcon: (o) => (
    <span className={`faq__tog ${o ? "is-open" : ""}`} aria-hidden="true">
      +
    </span>
  ),
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
        <div className="wrap phero__grid">
          <div>
            <p className="pg-eyebrow">Il Nostro Blog</p>
            <motion.h1 initial={{ y: -140, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...spring, delay: 0.3 }}>
              Consigli e guide per vendere o comprare auto in <span data-accent>Ticino</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <div className="wrap" style={{ paddingBottom: 90 }}>
        {isLoading && (
          <div className="posts" style={{ marginTop: 50 }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="skeleton" style={{ height: 360 }} />
            ))}
          </div>
        )}
        {!isLoading && data?.length === 0 && <p>Nessun articolo trovato.</p>}
        {groups.map((g, gi) => (
          <section key={g.id} className="bgroup" aria-labelledby={`g-${g.id}`}>
            <div className="bgroup__head">
              <div>
                <span className="label label--y">Sezione {gi + 1}</span>
                <Slam as="h2" text={g.title} className="h-big" />
              </div>
              <p style={{ margin: 0, fontSize: 18 }} id={`g-${g.id}`}>
                {g.description}
              </p>
            </div>
            <Stagger className="posts">
              {g.posts.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="post">
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
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24 });
  usePageMeta(post ? `${post.title} | MAS Global Trade` : "Blog | MAS Global Trade", post?.excerpt);
  if (!isLoading && !post) return <NotFound />;
  const { summary, body } = post ? splitSummary(post.content) : { summary: null, body: "" };
  const related = relatedPosts(all ?? [], slug);
  return (
    <>
      <motion.div className="progress" style={{ scaleX: progress }} />
      {isLoading || !post ? (
        <div className="skeleton" style={{ height: "70vh" }} />
      ) : (
        <>
          <section className="ahero">
            <div className="wrap">
              <Link href="/blog" className="arrow">
                <Icon name="arrow-left" /> Torna al Blog
              </Link>
              <div className="post__meta" style={{ margin: "22px 0 0" }}>
                {post.category && <b style={{ background: "#111", color: "#ffd400" }}>{post.category}</b>}
                <span>{formatDateItLong(post.publishedAt)}</span>
              </div>
              <motion.h1 initial={{ y: -120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...spring, delay: 0.3 }}>
                {post.title}
              </motion.h1>
              <motion.div className="frame" initial={{ y: 80, rotate: 3, opacity: 0 }} animate={{ y: 0, rotate: -1, opacity: 1 }} transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.5 }}>
                <div className="ph">
                  <img src={post.imageUrl || "/blog1.webp"} alt={post.title} />
                </div>
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
            <section className="sec sec--g">
              <div className="wrap">
                <span className="label">Articoli correlati</span>
                <div className="pg-links" style={{ marginTop: 22 }}>
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
                    <CallButtons dark phone="+41 79 863 53 91" />
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
    <section className="phero" style={{ minHeight: "70vh" }}>
      <div className="wrap phero__grid">
        <div>
          <p className="pg-eyebrow">Errore 404</p>
          <motion.h1 initial={{ y: -140, opacity: 0, rotate: -6 }} animate={{ y: 0, opacity: 1, rotate: 0 }} transition={spring}>
            Questa pagina <span data-accent>non è disponibile</span>
          </motion.h1>
          <p className="phero__lead">Il contenuto potrebbe essere stato spostato o rimosso. Torna alla homepage oppure richiedi una valutazione gratuita della tua auto.</p>
          <div className="ctas">
            <Link href="/" className="btn btn--k">
              Torna alla homepage
            </Link>
            <Link href="/valutazione-gratuita" className="btn btn--w">
              Valutazione gratuita
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
