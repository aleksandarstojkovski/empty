import { Link } from "wouter";
import { InstagramIcon, Mail, MapPin, Phone, WhatsAppIcon } from "./icons";
import { TEL, WHATSAPP } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#536b7c] py-14 text-white">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.05fr]">
          <div>
            <img src="/mas-logo.webp" alt="MAS Global Trade" width="512" height="512" className="h-12 w-auto brightness-0 invert" loading="lazy" decoding="async" data-testid="heading-footer-brand" />
            <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-white/90" data-testid="text-footer-desc">Acquisto auto usate da privati in tutto il Canton Ticino. Valutazione corretta, ritiro a domicilio, pagamento immediato.</p>
            <div className="mt-5 flex items-center gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#536b7c]" data-testid="link-footer-whatsapp" aria-label="Contatta MAS Global Trade su WhatsApp" title="WhatsApp">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mas.globaltrade/" target="_blank" rel="noreferrer" className="inline-flex h-9 w-9 items-center justify-center text-white transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#536b7c]" data-testid="link-footer-instagram" aria-label="Segui MAS Global Trade su Instagram" title="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wide text-white">Contatti</h4>
            <div className="mt-4 space-y-3 text-[12px] text-white/90">
              <a href={TEL} className="flex gap-2 transition-colors hover:text-accent" data-testid="link-footer-phone">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                +41 79 863 53 91
              </a>
              <a href="mailto:info@masglobaltrade.ch" className="flex gap-2 transition-colors hover:text-accent" data-testid="link-footer-email">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                info@masglobaltrade.ch
              </a>
              <span className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                Tutto il Ticino, Svizzera
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wide text-white">Link utili</h4>
            <div className="mt-4 flex flex-col gap-2 text-[12px] text-white/90">
              <Link href="/compro-auto/ticino" className="transition-colors hover:text-accent">Compro auto Ticino</Link>
              <Link href="/zone-servite" className="transition-colors hover:text-accent">Zone servite</Link>
              <Link href="/blog" className="transition-colors hover:text-accent">Blog</Link>
              <Link href="/note-legali" className="transition-colors hover:text-accent">Note legali</Link>
              <Link href="/informativa-privacy" className="transition-colors hover:text-accent">Informativa sulla privacy</Link>
            </div>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold uppercase tracking-wide text-white">Disponibilità</h4>
            <div className="mt-4 space-y-3 text-[12px] text-white/90">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#9fe3be]" />
                <span className="font-bold text-white">Disponibili 24H · 7/7</span>
              </div>
              <p className="leading-relaxed text-white/90">Rispondiamo a telefono e WhatsApp in qualsiasi momento, tutti i giorni dell'anno.</p>
            </div>
            <div className="mt-6">
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-white">Parliamo</h4>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white">
                  <span aria-hidden="true" className="shrink-0 text-[15px] leading-none">🇮🇹</span>
                  Italiano
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white">
                  <span aria-hidden="true" className="shrink-0 text-[15px] leading-none">🇩🇪</span>
                  Deutsch
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white">
                  <span aria-hidden="true" className="shrink-0 text-[15px] leading-none">🇫🇷</span>
                  Français
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-[11px] font-semibold text-white">
                  <span aria-hidden="true" className="shrink-0 text-[15px] leading-none">🇬🇧</span>
                  English
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/25 pt-5 text-[10px] text-white/90 md:flex-row">
          <span>
            © {new Date().getFullYear()} MAS Global Trade. Tutti i diritti riservati.
          </span>
          <span>
            Sito realizzato da
            {' '}
            <a href="https://nobamedia.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-accent hover:underline">NOBA Media</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
