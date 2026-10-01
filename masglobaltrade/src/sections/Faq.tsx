import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Phone } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";

const FAQS = [
  {
    question: "Quali tipi di auto acquistate?",
    answer:
      "Acquistiamo auto di tutte le marche e modelli, indipendentemente dall'anno e dal chilometraggio. Valutiamo anche auto incidentate o con problemi meccanici.",
  },
  {
    question: "Comprate anche auto con leasing in corso?",
    answer:
      "Sì, acquistiamo auto con leasing in corso. Possiamo saldare il contratto direttamente con la società di leasing e occuparci di tutte le pratiche burocratiche.",
  },
  {
    question: "Come viene valutata la mia auto?",
    answer:
      "Valutiamo la tua auto in base a marca, modello, anno, chilometraggio, condizioni generali e domanda di mercato. La valutazione è gratuita e senza impegno.",
  },
  {
    question: "Quanto tempo ci vuole per vendere la mia auto?",
    answer:
      "Se accetti la nostra offerta, possiamo concludere l'acquisto in giornata. Il pagamento viene effettuato immediatamente tramite bonifico bancario o contanti.",
  },
  {
    question: "Devo portare la mia auto da voi?",
    answer:
      "No, possiamo valutare la tua auto online o venire a vederla di persona a domicilio. Offriamo il servizio di ritiro gratuito in tutto il Canton Ticino.",
  },
  {
    question: "Ritirate anche auto non marcianti o incidentate?",
    answer: "Sì, acquistiamo auto in qualsiasi condizione. Valutiamo anche veicoli non circolanti, incidentati o destinati all'export.",
  },
  {
    question: "In quali zone operate?",
    answer: "Operiamo in tutto il Canton Ticino, dalla Leventina al Mendrisiotto, e anche in Mesolcina (Grigioni italiani).",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-[88px]">
      <div className="mx-auto grid max-w-[1080px] gap-10 px-5 md:grid-cols-[.7fr_1.3fr]">
        <div className="mas-reveal">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Domande frequenti</p>
          <h2 className="mt-3 font-bold leading-[1.12] tracking-[-.035em]">Hai domande sulla vendita?</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
            Qui trovi le risposte più utili. Per il tuo caso specifico, chiamami o scrivimi.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={TEL}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
            >
              <Phone className="h-3.5 w-3.5" />
              Chiama
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:border-accent"
            >
              <MessageCircle className="h-3.5 w-3.5 text-[#087c3b]" />
              Scrivi su WhatsApp
            </a>
          </div>
        </div>
        <div className="space-y-2">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className={`rounded-xl ${isOpen ? "border border-primary" : "bg-[#f3f6f8]"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[13px] font-semibold text-primary"
                >
                  {f.question}
                  {isOpen ? <ChevronUp className="h-4 w-4 shrink-0" /> : <ChevronDown className="h-4 w-4 shrink-0" />}
                </button>
                {isOpen && <p className="px-5 pb-5 text-[13px] leading-relaxed text-slate-600">{f.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
