import { useState } from "react";
import { Check, ChevronRight, Phone, WhatsAppIcon } from "../components/icons";
import { PHONE_LABEL, TEL, WHATSAPP } from "../lib/site";

const STEPS = [
  {
    label: "Valutazione",
    title: "Valutazione seria, senza impegno",
    description:
      "Mi descrivi l'auto e fissiamo un appuntamento. La valutazione tiene conto di stato, chilometri e mercato reale.",
    benefits: ["Risposta diretta da Madian", "Proposta chiara e motivata", "Nessun obbligo di vendita"],
    image: "/step-inspection.webp",
    imageAlt: "Valutazione dell'auto a domicilio",
    imagePosition: "object-[50%_18%]",
  },
  {
    label: "Pagamento",
    title: "Prima il pagamento, poi il ritiro",
    description:
      "Quando accetti la proposta, ricevi il pagamento concordato prima di consegnare l'auto. Solo dopo il pagamento procediamo con il ritiro.",
    benefits: ["Pagamento prima della consegna", "Contanti o bonifico istantaneo", "Documenti controllati insieme"],
    image: "/swiss-cash-payment.png",
    imageAlt: "Banconote svizzere per il pagamento immediato dell'auto",
    imagePosition: "object-center",
  },
  {
    label: "Ritiro",
    title: "Dopo il pagamento, ritiro l'auto",
    description:
      "Una volta completato il pagamento, ritiro l'auto nel luogo concordato, in tutto il Ticino. Mi occupo anche delle pratiche necessarie.",
    benefits: ["Ritiro solo dopo il pagamento", "Ritiro dove ti è più comodo", "Pratiche comprese nel servizio"],
    image: "/step3.webp",
    imageAlt: "Ritiro dell'auto dopo il pagamento concordato con il cliente",
    imagePosition: "object-[50%_28%]",
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const step = STEPS[active];

  return (
    <section id="come-funziona" className="bg-white py-20 md:py-[88px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="mas-reveal text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Il processo MAS</p>
          <h2 className="mt-3 font-bold tracking-[-.035em]">Un servizio completo, dalla valutazione al ritiro.</h2>
          <p className="mx-auto mt-2 max-w-xl text-[14px] text-slate-600">
            Valutazione, pagamento e infine ritiro. Tempi chiari, comunicazione diretta, accordi rispettati.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Fasi del servizio">
          {STEPS.map((s, i) => (
            <button
              key={s.label}
              type="button"
              id={`service-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls={`service-panel-${i}`}
              onClick={() => setActive(i)}
              className={`rounded-lg px-5 py-3 text-[12px] font-semibold transition-colors ${active === i ? "bg-primary text-white" : "bg-[#f3f6f8] text-primary hover:bg-slate-200"}`}
            >
              <span className={`mr-1.5 ${active === i ? "text-accent" : "text-[#08779e]"}`}>0{i + 1}</span>
              {s.label}
            </button>
          ))}
        </div>
        <div
          id={`service-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`service-tab-${active}`}
          className="mas-card mt-5 grid overflow-hidden rounded-[20px] bg-[#f3f6f8] md:h-[520px] md:grid-cols-2"
        >
          <div className="h-[340px] md:h-full">
            <img
              src={step.image}
              alt={step.imageAlt}
              width="1200"
              height="1600"
              className={`h-full w-full object-cover ${step.imagePosition}`}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-7 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">{step.label}</p>
            <h3 className="mt-2 font-bold leading-tight text-primary">{step.title}</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-600">{step.description}</p>
            <ul className="mt-5 space-y-2 text-[12px]">
              {step.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="/contatti"
              className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold text-primary transition-colors hover:text-accent"
            >
              Richiedi una valutazione
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-primary px-6 py-6 text-center text-white md:flex-row md:text-left">
          <div>
            <p className="font-bold">Pronto a iniziare?</p>
            <p className="mt-1 text-[12px] text-white/70">Contattami ora, rispondo io personalmente.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href={TEL}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              {PHONE_LABEL}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
