import { Link } from "wouter";
import { ArrowRight } from "../components/icons";
import { useBlogPosts } from "../lib/api";
import { formatDateIt } from "../lib/format";

export default function BlogTeaser() {
  const { data, isLoading, error } = useBlogPosts();
  const posts = data
    ? [...data].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3)
    : [];

  return (
    <section id="blog" className="bg-white py-20 md:py-[88px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="mas-reveal mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Dal nostro blog</p>
            <h2 className="mt-2 font-bold tracking-[-.035em]" data-testid="heading-blog">
              Guide e consigli per vendere la tua auto.
            </h2>
          </div>
          <Link href="/blog" className="hidden items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent md:inline-flex">
            Vedi tutti <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {error ? (
          <p role="status" className="rounded-2xl border border-slate-200 p-6 text-sm text-slate-600">
            Non è stato possibile caricare gli articoli. Riprova tra poco oppure{" "}
            <Link href="/blog" className="font-semibold underline">
              apri il blog
            </Link>
            .
          </p>
        ) : null}
        {isLoading && (
          <div className="grid gap-4 md:grid-cols-3" role="status">
            <span className="sr-only">Caricamento articoli</span>
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-64 animate-pulse rounded-2xl bg-[#f3f6f8]" aria-hidden="true" />
            ))}
          </div>
        )}
        {!isLoading && posts.length > 0 && (
          <div className="grid gap-4 md:grid-cols-3">
            {posts.map((p, i) => (
              <Link
                key={p.slug}
                data-testid={`card-blog-${i}`}
                href={`/blog/${p.slug}`}
                className="mas-card group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    alt={p.title}
                    width="1000"
                    height="563"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    data-testid={`img-blog-${i}`}
                    src={p.imageUrl || "/blog1.webp"}
                  />
                </div>
                <div className="flex flex-grow flex-col p-5">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    {p.category && <span className="font-semibold text-[#08779e]">{p.category}</span>}
                    <span data-testid={`text-blog-date-${i}`}>{formatDateIt(p.publishedAt)}</span>
                  </div>
                  <h3
                    className="mt-2 line-clamp-2 font-bold leading-snug text-primary transition-colors group-hover:text-accent"
                    data-testid={`text-blog-title-${i}`}
                  >
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary" data-testid={`link-blog-read-${i}`}>
                    Leggi <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
        {!isLoading && !error && posts.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-[#f3f6f8] p-7 text-center text-sm text-slate-600">
            <p>Stiamo preparando i prossimi consigli per chi vuole vendere la propria auto.</p>
            <Link href="/blog" className="mt-3 inline-flex items-center gap-1 font-semibold text-primary hover:text-accent">
              Visita il blog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
        <div className="mt-6 text-center md:hidden">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Vedi tutti gli articoli <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
