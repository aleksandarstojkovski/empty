import SiteLayout from "../components/SiteLayout";
import { ChevronDown } from "../components/icons";
import { usePageMeta } from "../lib/meta";
import { useState } from "react";

export const FAQS = [
  { q: "Quali tipi di auto acquistate?", a: "Acquistiamo auto di tutte le marche e modelli, indipendentemente dall'anno e dal chilometraggio. Valutiamo anche auto incidentate o con problemi meccanici." },
  { q: "Comprate anche auto con leasing in corso?", a: "Sì, acquistiamo auto con leasing in corso. Possiamo saldare il contratto direttamente con la società di leasing e occuparci di tutte le pratiche burocratiche." },
  { q: "Come viene valutata la mia auto?", a: "Valutiamo la tua auto in base a marca, modello, anno, chilometraggio, condizioni generali e domanda di mercato. Puoi ricevere una valutazione gratuita e senza impegno contattandoci via telefono o WhatsApp." },
  { q: "Quanto tempo ci vuole per vendere la mia auto?", a: "Se accetti la nostra offerta, possiamo concludere l'acquisto in giornata. Il pagamento viene effettuato immediatamente tramite bonifico bancario o contanti." },
  { q: "Devo portare la mia auto da voi?", a: "No, possiamo valutare la tua auto online o venire a vederla di persona a domicilio. Offriamo il servizio di ritiro gratuito in tutta la Svizzera italiana." },
  { q: "Quali documenti sono necessari?", a: "Carta grigia, documento d'identità valido e, se applicabile, il contratto di leasing." },
  { q: "Il passaggio di proprietà è a mio carico?", a: "No, ci occupiamo noi di tutte le pratiche amministrative, incluso il passaggio di proprietà, senza costi aggiuntivi." },
  { q: "Il pagamento è sicuro?", a: "Sì, il pagamento avviene immediatamente tramite bonifico bancario o in contanti, a seconda delle tue preferenze." },
  { q: "Ritirate anche auto non marcianti o incidentate?", a: "Sì, acquistiamo auto in qualsiasi condizione. Valutiamo anche veicoli non circolanti, incidentati o destinati all'export." },
  { q: "In quali zone operate?", a: "Operiamo in tutto il Canton Ticino, dalla Leventina al Mendrisiotto, e anche in Mesolcina (Grigioni italiani)." },
];

/** Single-open, collapsible accordion with the same markup Radix renders. */
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="w-full" data-orientation="vertical">
      {FAQS.map((f, i) => {
        const state = open === i ? "open" : "closed";
        return (
          <div key={f.q} data-state={state} data-orientation="vertical" className="border-b border-border last:border-0">
            <h3 data-orientation="vertical" data-state={state} className="flex">
              <button
                type="button"
                aria-controls={`faq-panel-${i}`}
                aria-expanded={open === i}
                data-state={state}
                data-orientation="vertical"
                id={`faq-trigger-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex flex-1 items-center justify-between transition-all hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-bold text-lg text-primary hover:text-accent py-4"
                data-testid={`faq-trigger-${i}`}
              >
                {f.q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              </button>
            </h3>
            <div
              data-state={state}
              id={`faq-panel-${i}`}
              hidden={open !== i}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              data-orientation="vertical"
              className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              {open === i && <div className="pb-4 pt-0">{f.a}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Faq() {
  usePageMeta("Domande sulla vendita auto in Ticino | MAS", "Trova risposte su valutazione, documenti, pagamento, ritiro e vendita di auto usate a MAS Global Trade in Canton Ticino.");
  return (
    <SiteLayout className="bg-background page-faq">
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12" style={{ opacity: "1", transform: "none" }}>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Domande Frequenti</h1>
            <p className="text-xl text-foreground/70">Tutto quello che devi sapere sul nostro servizio di compro auto in Ticino.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-8" style={{ opacity: "1", transform: "none" }}>
            <FaqAccordion />
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
