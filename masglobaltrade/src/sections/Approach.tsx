import { Phone, CircleCheck, Clock3, Banknote, MapPin, ShieldCheck, Wrench, WhatsAppIcon } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";

export default function Approach() {
  return (
    <section id="services" className="bg-[#f3f6f8] py-20 md:py-[88px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="mas-reveal max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Il mio approccio</p>
          <h2 className="mt-3 font-bold tracking-[-.035em]" data-testid="heading-services">Un modo diretto di lavorare, pensato per te.</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-slate-600" data-testid="text-services-sub">Ecco come lavoro con ogni cliente, dal primo contatto fino al pagamento.</p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <article className="mas-card rounded-2xl border border-slate-200 bg-white p-6" data-testid="card-service-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
              <CircleCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-primary" data-testid="text-service-title-0">Parli con chi compra</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600" data-testid="text-service-desc-0">Rispondo io personalmente, Madian, dalla prima chiamata fino al ritiro e al pagamento.</p>
          </article>
          <article className="mas-card rounded-2xl border border-slate-200 bg-white p-6" data-testid="card-service-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
              <Banknote className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-primary" data-testid="text-service-title-1">Offerta chiara, senza sorprese</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600" data-testid="text-service-desc-1">Ti comunico un prezzo e lo rispetto. Nessuna variazione dell'ultimo momento.</p>
          </article>
          <article className="mas-card rounded-2xl border border-slate-200 bg-white p-6" data-testid="card-service-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-primary" data-testid="text-service-title-2">Vengo io da te</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600" data-testid="text-service-desc-2">Vengo a vedere l'auto a domicilio, ovunque in Ticino. Mi occupo anche delle pratiche di annullamento e deposito targa all'Ufficio di circolazione a Camorino.</p>
          </article>
          <article className="mas-card rounded-2xl border border-slate-200 bg-white p-6" data-testid="card-service-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-primary" data-testid="text-service-title-3">Pagamento immediato</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600" data-testid="text-service-desc-3">Contanti o bonifico istantaneo al momento del ritiro. Nessuna attesa, nessun 'ti mando entro domani'.</p>
          </article>
          <article className="mas-card rounded-2xl border border-slate-200 bg-white p-6" data-testid="card-service-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
              <Wrench className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-primary" data-testid="text-service-title-4">Qualsiasi tipologia di auto</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600" data-testid="text-service-desc-4">Acquistiamo auto recenti con pochi km, auto per export, vetture d'epoca e auto con qualsiasi problema meccanico o incidentate.</p>
          </article>
          <article className="mas-card rounded-2xl border border-slate-200 bg-white p-6" data-testid="card-service-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-accent">
              <Clock3 className="lucide-clock-3 h-5 w-5" />
            </div>
            <h3 className="mt-5 font-bold text-primary" data-testid="text-service-title-5">Rispondo personalmente</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600" data-testid="text-service-desc-5">Rispondo personalmente ogni giorno: weekend e festivi inclusi. Mi trovi sempre.</p>
          </article>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#536b7c] px-6 py-7 text-white md:flex-row md:items-center md:px-8">
          <div>
            <h3 className="font-bold text-white">Vuoi vendere la tua auto?</h3>
            <p className="mt-1 text-[13px] text-white/90">Chiama o scrivi ora. Rispondo personalmente, tutti i giorni della settimana.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5">
              <Phone className="h-4 w-4" />
              +41 79 863 53 91
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/70 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/15">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
