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
import { Reveal } from "../../shared/motion";
import { usePageMeta } from "../../shared/meta";
import { FinalCta } from "./Home";
import { CallButtons, Logos, PostCards, Reviews } from "./parts";
import { formClasses } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;
const up = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease, delay: d } });

function PageHero({ s: raw, slots }: { s: Section; slots: Slots }) {
  const { section: s, caption } = normalizeHero(raw);
  const { head, body } = splitSection(s);
  return (
    <section className="phero">
      <div className={`wrap phero__grid ${s.image ? "phero__grid--img" : ""}`}>
        <div>
          {head.eyebrow && (
            <motion.div {...up(0.05)}>
              <Rich html={head.eyebrow} as="p" className="eyebrow" />
            </motion.div>
          )}
          <motion.h1 {...up(0.1)}>
            <Rich html={head.title ?? ""} />
          </motion.h1>
          {head.lead.map((l, i) => (
            <motion.div key={i} {...up(0.18 + i * 0.05)}>
              <Rich html={l} as="p" className="phero__lead" />
            </motion.div>
          ))}
          {body.length > 0 && (
            <motion.div className="phero__body" {...up(0.26)}>
              {body.map((b, i) => (
                <BlockView key={i} b={b} slots={slots} />
              ))}
            </motion.div>
          )}
        </div>
        {s.image && (
          <motion.figure className="phero__img" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease, delay: 0.15 }}>
            <img src={s.image.src} alt={s.image.alt} />
            {caption.length > 0 && (
              <figcaption>
                {caption.map((c, i) => (
                  <Rich key={i} html={c} as="span" />
                ))}
              </figcaption>
            )}
          </motion.figure>
        )}
      </div>
    </section>
  );
}

const slots: Slots = {
  form: () => <LeadForm c={formClasses} />,
  reviews: () => <Reviews />,
  logos: () => <Logos />,
  faqIcon: (o) => <Icon name={o ? "chevron-up" : "chevron-down"} className="faq__icon" />,
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
            <motion.p className="eyebrow" {...up(0.05)}>
              Il nostro blog
            </motion.p>
            <motion.h1 {...up(0.1)}>
              Consigli e guide per vendere o comprare auto in <span data-accent>Ticino</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <div className="wrap blog">
        {isLoading && (
          <div className="posts">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="skeleton" style={{ height: 340 }} />
            ))}
          </div>
        )}
        {!isLoading && data?.length === 0 && <p>Nessun articolo trovato.</p>}
        {groups.map((g) => (
          <section key={g.id} className="bgroup" aria-labelledby={`g-${g.id}`}>
            <Reveal className="head">
              <div>
                <h2 className="h2 h2--sm" id={`g-${g.id}`}>
                  {g.title}
                </h2>
              </div>
              <div className="head__side">
                <p className="head__intro">{g.description}</p>
              </div>
            </Reveal>
            <PostCards posts={g.posts} />
          </section>
        ))}
      </div>
      <FinalCta />
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
        <div className="wrap" style={{ padding: "60px 0" }}>
          <div className="skeleton" style={{ height: "60vh" }} />
        </div>
      ) : (
        <>
          <section className="ahero">
            <div className="wrap ahero__in">
              <Link href="/blog" className="link link--back">
                <Icon name="arrow-left" /> Torna al blog
              </Link>
              <p className="post__meta">
                {post.category && <span>{post.category}</span>}
                {formatDateItLong(post.publishedAt)}
              </p>
              <motion.h1 {...up(0.05)}>{post.title}</motion.h1>
              <motion.div className="ahero__img" {...up(0.15)}>
                <img src={post.imageUrl || "/blog1.webp"} alt={post.title} />
              </motion.div>
            </div>
          </section>
          <div className="wrap article">
            <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
            <aside className="article__aside">
              {summary && <div className="card inbreve" dangerouslySetInnerHTML={{ __html: summary.replace('<div class="inbreve-box">', "<div>") }} />}
              <div className="card aside-cta">
                <h3>Vuoi vendere la tua auto?</h3>
                <p className="muted">Mandami le foto su WhatsApp o chiamami: valutazione gratuita in poche ore.</p>
                <div className="btns btns--stack">
                  <CallButtons />
                </div>
              </div>
            </aside>
          </div>
          {related.length > 0 && (
            <section className="sec sec--alt">
              <div className="wrap">
                <p className="eyebrow">Articoli correlati</p>
                <ul className="pg-links" style={{ marginTop: 18 }}>
                  {related.map((r) => (
                    <li key={r.id}>
                      <Link href={`/blog/${r.slug}`} className="pg-link">
                        <span>{r.title}</span>
                        <Icon name="arrow-right" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
          <FinalCta />
        </>
      )}
    </>
  );
}

export function NotFound() {
  usePageMeta("Pagina non trovata | MAS Global Trade");
  return (
    <section className="phero phero--404">
      <div className="wrap phero__grid">
        <div>
          <p className="eyebrow">Errore 404</p>
          <h1>
            Questa pagina <span data-accent>non è disponibile</span>
          </h1>
          <p className="phero__lead">Il contenuto potrebbe essere stato spostato o rimosso. Torna alla homepage oppure richiedi una valutazione gratuita della tua auto.</p>
          <div className="btns">
            <Link href="/" className="btn btn--primary">
              Torna alla homepage
            </Link>
            <Link href="/valutazione-gratuita" className="btn btn--ghost">
              Valutazione gratuita
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
