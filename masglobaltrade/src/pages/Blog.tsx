import { motion } from "framer-motion";
import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { useBlogPosts } from "../lib/api";
import { groupPosts } from "../lib/blog";
import { formatDateItLong } from "../lib/format";

const Skeleton = ({ className }: { className: string }) => <div className={`animate-pulse rounded-md bg-primary/10 ${className}`} />;

export default function Blog() {
  const { data, isLoading } = useBlogPosts();
  const groups = groupPosts(data ?? []);

  return (
    <SiteLayout className="bg-background page-blog">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="text-4xl font-black text-primary mb-4">Il Nostro Blog</h1>
            <p className="text-xl text-foreground/70">Consigli e guide per vendere o comprare auto in Ticino</p>
          </motion.div>
          <div>
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="h-48 w-full rounded-xl" />
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                ))}
              </div>
            ) : data?.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">Nessun articolo trovato.</div>
            ) : (
              <div className="space-y-16">
                {groups.map((g) => (
                  <section key={g.id} aria-labelledby={`theme-${g.id}`}>
                    <div className="mb-6">
                      <h2 id={`theme-${g.id}`} className="text-3xl font-black text-primary">
                        {g.title}
                      </h2>
                      <p className="mt-2 text-foreground/65">{g.description}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {g.posts.map((p) => (
                        <Link key={p.slug} data-testid={`link-blog-post-${p.id}`} href={`/blog/${p.slug}`} className="block group">
                          <div className="rounded-xl border bg-card text-card-foreground shadow h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                            <div className="aspect-video relative overflow-hidden">
                              <img
                                alt={p.title}
                                width="1000"
                                height="563"
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                                decoding="async"
                                src={p.imageUrl || "/blog1.webp"}
                              />
                            </div>
                            <div className="flex flex-col space-y-1.5 p-6">
                              <div className="flex items-center gap-2 mb-2">
                                {p.category && (
                                  <div className="whitespace-nowrap inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover-elevate border-transparent bg-accent/10 text-accent hover:bg-accent/20">
                                    {p.category}
                                  </div>
                                )}
                                <span className="text-sm text-muted-foreground">{formatDateItLong(p.publishedAt)}</span>
                              </div>
                              <div className="font-semibold tracking-tight text-xl group-hover:text-accent transition-colors">{p.title}</div>
                            </div>
                            <div className="p-6 pt-0">
                              <p className="text-muted-foreground line-clamp-3 mb-4">{p.excerpt}</p>
                              <span className="text-accent font-semibold">Leggi l'articolo</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
