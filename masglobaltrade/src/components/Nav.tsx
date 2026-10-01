import { lazy, Suspense, useState } from "react";
import { Link } from "wouter";
import { Menu, Phone, X } from "./icons";
import { CITY_LINKS, TEL } from "../lib/site";

const LeadForm = lazy(() => import("./LeadForm"));

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const openLead = () => {
    closeMenu();
    setLeadOpen(true);
  };

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-[0_2px_18px_rgba(7,27,70,0.06)] backdrop-blur"
        aria-label="Navigazione principale"
      >
        <div className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between gap-5 px-5">
          <Link href="/">
            <span className="flex cursor-pointer items-center" data-testid="link-home-logo">
              <img
                src="/mas-logo.webp"
                alt="MAS Global Trade"
                width="512"
                height="512"
                className="h-[70px] w-auto object-contain object-left md:h-[72px]"
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
            </span>
          </Link>
          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-4 text-[12px] font-semibold text-primary/80">
              <Link data-testid="link-nav-tipologie" href="/tipologie-auto" className="transition-colors hover:text-accent">
                Tipologie Auto
              </Link>
              <details className="group relative">
                <summary className="cursor-pointer list-none transition-colors hover:text-accent">
                  Compro auto
                  <span className="ml-1 text-[10px] text-[#08779e]" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-xl">
                  {CITY_LINKS.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/compro-auto/${c.slug}`}
                      className="block rounded-lg px-3 py-2 transition-colors hover:bg-secondary hover:text-accent"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link data-testid="link-nav-zone" href="/zone-servite" className="transition-colors hover:text-accent">
                Zone Servite
              </Link>
              <Link data-testid="link-nav-blog" href="/blog" className="transition-colors hover:text-accent">
                Blog
              </Link>
              <Link data-testid="link-nav-faq" href="/faq" className="transition-colors hover:text-accent">
                FAQ
              </Link>
              <Link data-testid="link-nav-chisiamo" href="/chi-siamo" className="transition-colors hover:text-accent">
                Chi Siamo
              </Link>
              <Link data-testid="link-nav-contatti" href="/contatti" className="transition-colors hover:text-accent">
                Contatti
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <a href={TEL} data-testid="link-nav-phone">
                <span className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-primary px-3.5 text-[12px] font-bold text-primary transition-colors hover:bg-primary hover:text-white">
                  <Phone className="h-3.5 w-3.5" />
                  Chiama
                </span>
              </a>
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-3.5 text-[12px] font-bold text-primary transition-colors hover:bg-accent/85"
                onClick={openLead}
                data-testid="button-nav-cta"
              >
                Vendi la tua auto
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <a href={TEL} data-testid="link-nav-phone-mobile">
              <span className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-primary px-3 text-[12px] font-bold text-primary">
                <Phone className="h-3.5 w-3.5" />
                Chiama
              </span>
            </a>
            <button
              type="button"
              aria-label="Apri menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-secondary"
              data-testid="button-nav-menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button type="button" aria-label="Chiudi menu" className="absolute inset-0 bg-primary/55" onClick={closeMenu} />
          <aside className="absolute inset-y-0 right-0 flex w-[min(90vw,370px)] flex-col gap-7 border-l border-white/15 bg-primary p-6 text-white shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <img
                src="/mas-logo.webp"
                alt="MAS Global Trade"
                width="512"
                height="512"
                className="h-10 w-auto object-contain object-left brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                aria-label="Chiudi menu"
                onClick={closeMenu}
                className="rounded-lg p-2 text-white transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-5 overflow-y-auto text-lg font-semibold">
              <Link href="/tipologie-auto" onClick={closeMenu} className="transition-colors hover:text-accent" data-testid="link-mobile-tipologie">
                Tipologie Auto
              </Link>
              <details className="group border-l-2 border-accent/50 pl-4">
                <summary className="cursor-pointer list-none transition-colors hover:text-accent">
                  Compro auto{" "}
                  <span className="ml-1 text-sm text-accent" aria-hidden="true">
                    ⌄
                  </span>
                </summary>
                <div className="mt-3 flex flex-col gap-3 pl-3 text-base font-medium text-white/80">
                  {CITY_LINKS.map((c) => (
                    <Link key={c.slug} href={`/compro-auto/${c.slug}`} onClick={closeMenu} className="transition-colors hover:text-accent">
                      {c.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link href="/zone-servite" onClick={closeMenu} className="transition-colors hover:text-accent" data-testid="link-mobile-zone">
                Zone Servite
              </Link>
              <Link href="/blog" onClick={closeMenu} className="transition-colors hover:text-accent" data-testid="link-mobile-blog">
                Blog
              </Link>
              <Link href="/faq" onClick={closeMenu} className="transition-colors hover:text-accent" data-testid="link-mobile-faq">
                FAQ
              </Link>
              <Link href="/chi-siamo" onClick={closeMenu} className="transition-colors hover:text-accent" data-testid="link-mobile-chisiamo">
                Chi Siamo
              </Link>
              <Link href="/contatti" onClick={closeMenu} className="transition-colors hover:text-accent" data-testid="link-mobile-contatti">
                Contatti
              </Link>
            </div>
            <button
              type="button"
              className="mt-auto w-full rounded-lg bg-accent px-4 py-3 font-bold text-primary transition-colors hover:bg-accent/85"
              onClick={openLead}
              data-testid="button-nav-cta-mobile"
            >
              Vendi la tua auto
            </button>
          </aside>
        </div>
      )}

      {leadOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button type="button" aria-label="Chiudi modulo" className="absolute inset-0 bg-primary/65" onClick={() => setLeadOpen(false)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
          >
            <button
              type="button"
              aria-label="Chiudi modulo"
              onClick={() => setLeadOpen(false)}
              className="absolute right-3 top-3 rounded-lg p-2 text-primary transition-colors hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 id="lead-modal-title" className="mb-1 pr-10 text-xl font-bold text-primary">
              Modulo di contatto
            </h2>
            <p className="mb-5 text-sm text-foreground/75">Compila questo modulo con i tuoi recapiti e ti contatteremo a breve.</p>
            <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-secondary" />}>
              <LeadForm onSuccess={() => setLeadOpen(false)} />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
}
