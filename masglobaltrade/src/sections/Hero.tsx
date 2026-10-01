import { Phone, Check, WhatsAppIcon } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";

export default function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-primary text-white md:min-h-[700px]">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" type="image/avif" srcSet="/hero-mobile.avif" />
          <source media="(min-width: 768px)" type="image/avif" srcSet="/hero-desktop.avif" />
          <source media="(max-width: 767px)" type="image/webp" srcSet="/hero-mobile.webp" />
          <img src="/hero-desktop.webp" alt="Madian, MAS Global Trade" width="1204" height="1600" className="h-full w-full scale-[1.06] object-cover object-[60%_20%] md:scale-100 md:object-[64%_36%]" fetchPriority="high" loading="eager" decoding="sync" />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,17,42,.96)_3%,rgba(3,17,42,.82)_42%,rgba(3,17,42,.12)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,17,42,.58),transparent_55%)]" />
      </div>
      <div className="relative mx-auto flex min-h-[650px] max-w-[1080px] items-center px-5 pb-14 pt-28 md:min-h-[700px] md:pb-16">
        <div className="max-w-[560px]">
          <h1 className="max-w-[540px] text-[38px] font-bold leading-[1.08] tracking-[-0.04em] text-white md:text-[46px]" data-testid="heading-hero">
            Vuoi vendere la tua auto?
            <br />
            <span className="text-accent">Semplice. Veloce. Sicuro.</span>
          </h1>
          <p className="mt-4 max-w-[510px] text-[13px] leading-relaxed text-white/85">
            Sono{' '}
            <strong className="text-white">Madian</strong>
            {' '}di MAS Global Trade. Acquisto auto usate da privati in tutto il Canton Ticino: valutazione seria, pagamento immediato e ritiro a domicilio.
          </p>
          <div className="mt-4 flex flex-col items-start gap-2 text-[11px] text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              No intermediari
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              Proposta chiara
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              Pagamento immediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-accent" />
              Ritiro a domicilio
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5" data-testid="btn-hero-call">
              <Phone className="h-4 w-4" />
              Chiama ora
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-[#20bd5a]" data-testid="btn-hero-whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
          <div className="mt-5 flex items-center gap-2.5 text-[11px] text-white/80">
            <span className="font-bold tracking-[0.12em] text-accent" role="img" aria-label="5 stelle su 5">★★★★★</span>
            <span>4.9 su Google · oltre 100 recensioni verificate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
