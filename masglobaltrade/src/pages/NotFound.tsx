import { useEffect } from "react";
import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { House, SearchX } from "../components/icons";

export default function NotFound() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Pagina non trovata | MAS Global Trade";
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const prev = robots?.content;
    if (robots) robots.content = "noindex, follow";
    return () => {
      document.title = prevTitle;
      if (robots && prev) robots.content = prev;
    };
  }, []);

  return (
    <SiteLayout className="bg-[#F7F8FA] page-not-found">
      <main className="min-h-[78vh] px-4 pt-32 pb-20 flex items-center justify-center">
        <section className="w-full max-w-2xl rounded-3xl border border-border bg-white p-8 sm:p-14 text-center shadow-xl shadow-primary/5">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <SearchX className="h-8 w-8" />
          </div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-accent">Errore 404</p>
          <h1 className="text-3xl sm:text-5xl font-black text-primary">Questa pagina non è disponibile</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/65">
            Il contenuto potrebbe essere stato spostato o rimosso. Torna alla homepage oppure richiedi una valutazione gratuita della tua auto.
          </p>
          <nav className="mt-9 flex flex-col sm:flex-row justify-center gap-3" aria-label="Link utili">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary px-6 font-bold text-primary hover:bg-primary/5"
            >
              <House className="h-4 w-4" />
              Torna alla homepage
            </Link>
            <Link
              href="/valutazione-gratuita"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 font-bold text-white hover:bg-primary/90"
            >
              Valutazione gratuita
            </Link>
          </nav>
        </section>
      </main>
    </SiteLayout>
  );
}
