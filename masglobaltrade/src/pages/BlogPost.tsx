import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { ArrowLeft, WhatsAppIcon } from "../components/icons";
import { useBlogPost, useBlogPosts } from "../lib/api";
import { relatedPosts } from "../lib/blog";
import { formatDateItLong } from "../lib/format";
import { PHONE_LABEL, TEL, WHATSAPP } from "../lib/site";
import NotFound from "./NotFound";

/**
 * Posts may open with a `<div class="inbreve-box">…</div>` summary; it is shown
 * inside the hero instead of the article body. Walks nested divs to find its end.
 */
function splitSummary(html: string): { summary: string | null; body: string } {
  const start = html.indexOf('<div class="inbreve-box">');
  if (start === -1) return { summary: null, body: html };
  let depth = 0;
  for (let i = start; i < html.length; i++) {
    if (html.startsWith("<div", i)) depth++;
    else if (html.startsWith("</div>", i) && --depth === 0) {
      const end = i + 6;
      return { summary: html.slice(start, end), body: html.slice(end) };
    }
  }
  return { summary: null, body: html };
}

const Skeleton = ({ className }: { className: string }) => <div className={`animate-pulse rounded-md bg-primary/10 ${className}`} />;

const ARTICLE_CSS = `
.inbreve-hero {
  background: rgba(6, 14, 26, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-left: 4px solid #00c8ff;
  border-radius: 0 12px 12px 0;
  padding: 20px 28px;
  margin-bottom: 0;
}
.inbreve-hero p { color: #fff !important; margin-bottom: 0.45rem !important; font-size: 0.97rem; }
.inbreve-hero ul { color: #cbd5e1; padding-left: 1.2rem; margin: 0; }
.inbreve-hero li { color: #cbd5e1 !important; margin-bottom: 0.35rem; font-size: 0.95rem; }
.inbreve-hero strong { color: #fff !important; }
.blog-content h2 { font-size: 1.45rem; font-weight: 800; color: #111; margin-top: 2.8rem; margin-bottom: 1rem; padding-top: 1.2rem; border-top: 2px solid #e5e7eb; }
.blog-content h3 { font-size: 1.1rem; font-weight: 700; color: #111; margin-top: 1.8rem; margin-bottom: 0.6rem; }
.blog-content p { margin-bottom: 1.3rem; font-size: 1.02rem; color: #333; }
.blog-content ul, .blog-content ol { padding-left: 1.4rem; margin-bottom: 1.3rem; }
.blog-content li { margin-bottom: 0.4rem; font-size: 1.02rem; color: #333; }
.blog-content strong { font-weight: 700; color: #111; }
.blog-content blockquote { border-left: 4px solid #00c8ff; padding: 0.6rem 1.2rem; margin: 1.5rem 0; background: #f0fbff; border-radius: 0 8px 8px 0; color: #444; font-style: italic; }
.blog-content .inbreve-box { display: none; }
`;

export default function BlogPost() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: all } = useBlogPosts();
  const related = relatedPosts(all ?? [], slug);

  if (!isLoading && !post) return <NotFound />;
  const { summary, body } = post ? splitSummary(post.content) : { summary: null, body: "" };

  return (
    <SiteLayout className="bg-[#F8F8F8] page-blog-post">
      {isLoading ? (
        <>
          <div className="relative h-[620px] bg-gray-200 animate-pulse" />
          <div className="container mx-auto px-4 max-w-[820px] pt-12 space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </>
      ) : post ? (
        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <section className="relative overflow-hidden flex flex-col justify-end" style={{ minHeight: summary ? "auto" : "520px" }}>
            <div className="absolute inset-0">
              {post.imageUrl ? (
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  width="1200"
                  height="675"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-[#0f2a45]" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060E1A] via-[#060E1A]/65 to-[#060E1A]/20" />
            </div>
            <div className="relative z-10 w-full container mx-auto px-4 max-w-[880px] pt-36 pb-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white font-semibold mb-8 transition-colors text-sm"
                data-testid="link-back-blog"
              >
                <ArrowLeft className="w-4 h-4" />
                Torna al Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                {post.category && (
                  <div className="whitespace-nowrap inline-flex items-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent shadow-xs bg-accent text-white border-0 font-bold text-xs px-3 py-1">
                    {post.category}
                  </div>
                )}
                {post.publishedAt && <span className="text-white/50 text-sm">{formatDateItLong(post.publishedAt)}</span>}
              </div>
              <h1
                className="font-black text-white leading-tight mb-8"
                style={{ fontSize: "clamp(1.7rem, 4vw, 2.8rem)", lineHeight: 1.15, textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
              >
                {post.title}
              </h1>
              {summary && <div className="inbreve-hero" dangerouslySetInnerHTML={{ __html: summary }} />}
            </div>
          </section>
          <div className="container mx-auto px-4 max-w-[820px] pt-12 pb-20">
            <div className="blog-content" style={{ lineHeight: 1.75, color: "#222" }} dangerouslySetInnerHTML={{ __html: body }} />
            {related.length > 0 && (
              <aside className="mt-14 border-t border-gray-200 pt-10" aria-labelledby="related-posts-title">
                <h2 id="related-posts-title" className="text-2xl font-black text-primary">
                  Articoli correlati
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/blog/${r.slug}`}
                      className="rounded-xl border border-gray-200 bg-white p-5 font-bold text-primary shadow-sm transition hover:border-accent hover:text-accent"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </aside>
            )}
            <div className="mt-16 rounded-2xl p-10 text-center text-white" style={{ background: "#0d2244" }}>
              <h3 className="text-2xl font-black mb-3">Pronto a vendere la tua auto?</h3>
              <p className="text-white/70 mb-7 text-base leading-relaxed">
                Mandami le foto su WhatsApp o chiamami direttamente. In poche ore hai una valutazione concreta, senza impegno e senza sorprese.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{ background: "#25D366" }}
                  data-testid="link-cta-whatsapp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Scrivimi su WhatsApp
                </a>
                <a
                  href={TEL}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 font-bold px-7 py-3.5 rounded-full transition-colors text-white border border-white/20"
                  data-testid="link-cta-phone"
                >
                  {PHONE_LABEL}
                </a>
              </div>
              <p className="mt-6 text-white/40 text-sm">masglobaltrade.ch · Ritiro gratuito in tutto il Canton Ticino</p>
            </div>
          </div>
        </motion.article>
      ) : null}
      <style>{ARTICLE_CSS}</style>
    </SiteLayout>
  );
}
