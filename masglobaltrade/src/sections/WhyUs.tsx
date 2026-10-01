import { Phone, Check, CircleCheck, WhatsAppIcon } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { useReviews } from "../lib/api";

export default function WhyUs() {
  const reviewCount = useReviews().data?.userRatingCount ?? 93;
  return (
    <section id="servizio" className="bg-white py-20 md:py-[88px]">
      <div className="mx-auto grid max-w-[1080px] items-center gap-10 px-5 lg:grid-cols-[1fr_.95fr]">
        <div className="mas-reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Perché tanti ci scelgono</p>
          <h2 className="mt-3 max-w-[610px] font-bold leading-[1.12] tracking-[-.035em]">Vendere la tua auto non dovrebbe diventare una trattativa infinita.</h2>
          <div className="mt-4 max-w-[650px] space-y-3 text-[14px] leading-relaxed text-slate-600">
            <p>Vendere a un privato richiede tempo, risposte incerte e appuntamenti che spesso non vanno a buon fine.</p>
            <p>
              Con MAS Global Trade parli direttamente con me. Valuto l'auto, ti faccio una proposta chiara e, se troviamo l'accordo,{' '}
              <strong className="text-primary">concludiamo senza farti aspettare</strong>
              .
            </p>
          </div>
          <div className="mt-6 border-l-2 border-accent pl-4">
            <p className="text-lg font-semibold leading-snug text-primary">"Ti faccio un'offerta chiara. Se accetti, l'auto viene ritirata subito."</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
              <Phone className="h-4 w-4" />
              Chiama ora
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-secondary px-5 py-3 text-sm font-bold text-primary transition-colors hover:border-accent hover:bg-white">
              <WhatsAppIcon className="h-4 w-4 text-[#087c3b]" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mas-card rounded-[20px] bg-[#f3f6f8] p-6 md:p-8">
          <img src="/madian-profile.webp" alt="Madian di MAS Global Trade sorridente nel suo ufficio" width="800" height="450" className="h-[220px] w-full rounded-2xl object-cover object-top md:h-[270px]" loading="lazy" decoding="async" />
          <div className="mt-6">
            <h3 className="font-bold text-primary">Una proposta chiara, da una persona che ci mette la faccia.</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-slate-600">Sono Madian. Rispondo io, vengo io a vedere l'auto e concludo io la trattativa. Nessun call center, nessun passaggio inutile.</p>
            <ul className="mt-5 grid gap-2 text-[12px] font-medium sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Parli direttamente con chi compra la tua auto</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Valutazione chiara, basata sul valore reale di mercato</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Proposta seria, confermata fino al ritiro</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Appuntamento rispettato, tempi certi</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Pagamento immediato, in contanti o bonifico</span>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Ritiro a domicilio in tutto il Ticino</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Oltre {reviewCount} recensioni Google verificate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
