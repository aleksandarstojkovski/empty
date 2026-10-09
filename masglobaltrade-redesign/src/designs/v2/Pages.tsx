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
import { Beats, CallButtons, Logos, Reviews } from "./parts";
import { formClasses } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

function PageHero({ s: raw, slots }: { s: Section; slots: Slots }) {
  const { section: s, caption } = normalizeHero(raw);
  const { head, body } = splitSection(s);
  return (
    <section className={`phero ${s.image ? "" : "phero--plain"}`}>
      {s.image && (
        <motion.div className="phero__bg" initial={{ scale: 1.3, opacity: 0 }} animate={{ scale: 1.05, opacity: 1 }} transition={{ duration: 1.8, ease }}>
          <img src={s.image.src} alt={s.image.alt} />
        </motion.div>
      )}
      {s.image && caption.length > 0 && (
        <motion.div className="phero__cap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {caption.map((c, i) => (
            <Rich key={i} html={c} as="span" />
          ))}
        </motion.div>
      )}
      <div className="wrap">
        {head.eyebrow && (
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Rich html={head.eyebrow} as="p" className="pg-eyebrow" />
          </motion.div>
        )}
        <motion.h1 initial={{ opacity: 0, scale: 1.5, filter: "blur(16px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, ease, delay: 0.35 }} style={{ transformOrigin: "left bottom" }}>
          <Rich html={head.title ?? ""} />
        </motion.h1>
        {head.lead.map((l, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1 }}>
            <Rich html={l} as="p" className="phero__lead" />
          </motion.div>
        ))}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} style={{ display: "grid", gap: 22, marginTop: 30 }}>
          {body.map((b, i) => (
            <BlockView key={i} b={b} slots={slots} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const slots: Slots = {
  form: () => <LeadForm c={formClasses} />,
  reviews: () => <Reviews />,
  logos: () => <Logos />,
  faqIcon: (o) => <span className={`faq__x ${o ? "is-open" : ""}`} aria-hidden="true" />,
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
      <section className="phero phero--plain">
        <div className="wrap">
          <p className="pg-eyebrow">Il Nostro Blog</p>
          <Beats as="h1" text="Consigli e guide per vendere o comprare auto in Ticino" />
        </div>
      </section>
      <div className="wrap" style={{ paddingBottom: 90 }}>
        {isLoading && (
          <div className="posts" style={{ marginTop: 50 }}>
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="skeleton" style={{ aspectRatio: "4/5" }} />
            ))}
          </div>
        )}
        {!isLoading && data?.length === 0 && <p>Nessun articolo trovato.</p>}
        {groups.map((g, gi) => (
          <section key={g.id} className="bgroup" aria-labelledby={`g-${g.id}`}>
            <div className="bgroup__head">
              <div>
                <span className="kick">Capitolo {gi + 1}</span>
                <Beats as="h2" text={g.title} className="h-sec" />
              </div>
              <p style={{ margin: 0, fontSize: 18 }} id={`g-${g.id}`}>
                {g.description}
              </p>
            </div>
            <Stagger className="posts">
              {g.posts.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="post">
                    <img src={p.imageUrl || "/blog1.webp"} alt={p.title} loading="lazy" />
                    <div className="post__in">
                      <div className="post__meta">
                        {p.category && <b>{p.category}</b>}
                        <span>{formatDateItLong(p.publishedAt)}</span>
                      </div>
                      <h3>{p.title}</h3>
                      <p>{p.excerpt}</p>
                    </div>
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
        <div className="skeleton" style={{ height: "80vh" }} />
      ) : (
        <>
          <section className="phero">
            <motion.div className="phero__bg" initial={{ scale: 1.3, opacity: 0 }} animate={{ scale: 1.05, opacity: 1 }} transition={{ duration: 1.8, ease }}>
              <img src={post.imageUrl || "/blog1.webp"} alt={post.title} />
            </motion.div>
            <div className="wrap">
              <Link href="/blog" className="more">
                <Icon name="arrow-left" /> Torna al Blog
              </Link>
              <div className="post__meta" style={{ marginTop: 26 }}>
                {post.category && <b>{post.category}</b>}
                <span>{formatDateItLong(post.publishedAt)}</span>
              </div>
              <Beats as="h1" text={post.title} />
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
            <section className="sec sec--2">
              <div className="wrap">
                <span className="kick">Articoli correlati</span>
                <div className="pg-links" style={{ marginTop: 22 }}>
                  {related.map((r) => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="pg-link">
                      <span>{r.title}</span>
                      <Icon name="arrow-right" />
                    </Link>
                  ))}
                </div>
                <div className="band" style={{ marginTop: 60 }}>
                  <div className="band__in" style={{ padding: "0 clamp(20px,4vw,48px)" }}>
                    <div>
                      <h3>Pronto a vendere la tua auto?</h3>
                      <p>Mandami le foto su WhatsApp o chiamami direttamente. In poche ore hai una valutazione concreta, senza impegno e senza sorprese.</p>
                    </div>
                    <div className="ctas" style={{ marginTop: 0 }}>
                      <CallButtons onRed phone="+41 79 863 53 91" />
                    </div>
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
    <section className="phero phero--plain">
      <div className="wrap">
        <p className="pg-eyebrow">Errore 404</p>
        <Beats as="h1" text="Questa pagina non è disponibile" />
        <p className="phero__lead">Il contenuto potrebbe essere stato spostato o rimosso. Torna alla homepage oppure richiedi una valutazione gratuita della tua auto.</p>
        <div className="ctas">
          <Link href="/" className="btn btn--r">
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
