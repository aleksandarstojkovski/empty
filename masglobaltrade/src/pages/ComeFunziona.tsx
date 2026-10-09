import SiteLayout from "../components/SiteLayout";
import { Phone, Check } from "../components/icons";
import LeadForm from "../components/LeadForm";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComeFunziona() {
  usePageMeta("Come vendere la tua auto a MAS | MAS Ticino", "Invia dati e foto, ricevi la proposta, concorda il ritiro e vieni pagato: ecco i passaggi per vendere la tua auto a MAS Global Trade.");
  return (
    <SiteLayout className="bg-background page-how-it-works">
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div style={{ opacity: "1", transform: "none" }}>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Processo di vendita</p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Vendi la tua auto
              <br />
              in 3 semplici passi
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed">Ricevi una valutazione rapida. Pagamento immediato e ritiro a domicilio ovunque ti trovi in Ticino.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg">
                <Phone className="w-5 h-5" />
                Chiama Ora
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg text-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center" style={{ opacity: "1", transform: "none" }}>
                <div className="">
                  <div className="text-7xl font-black text-accent/15 leading-none mb-2">01</div>
                  <h2 className="text-3xl font-black text-primary mb-4">Contattaci</h2>
                  <p className="text-foreground/70 leading-relaxed mb-5 text-lg">Chiamaci al +41 79 863 53 91, scrivi su WhatsApp o compila il modulo qui sotto con i dati della tua auto. Rispondiamo rapidamente, 7 giorni su 7.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Risposta rapida, tutti i giorni
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Nessun appuntamento necessario
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Disponibili anche il weekend
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src="/compro-auto.webp" alt="Madian al telefono con un cliente" width="1200" height="1600" className="w-full h-72 object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center" style={{ opacity: "1", transform: "none" }}>
                <div className="lg:order-2">
                  <div className="text-7xl font-black text-accent/15 leading-none mb-2">02</div>
                  <h2 className="text-3xl font-black text-primary mb-4">Valutazione Gratuita</h2>
                  <p className="text-foreground/70 leading-relaxed mb-5 text-lg">Valutiamo la tua auto in base a marca, modello, anno, chilometraggio, condizioni e domanda di mercato. Ti facciamo un'offerta chiara, senza impegno.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Valutazione online o a domicilio
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Basata sul reale valore di mercato
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Senza impegno, 100% gratuita
                    </li>
                  </ul>
                </div>
                <div className="lg:order-1 rounded-3xl overflow-hidden shadow-xl">
                  <img src="/auto4.webp" alt="Valutazione dell'auto a domicilio" width="1200" height="1600" className="w-full h-72 object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-10 items-center" style={{ opacity: "1", transform: "none" }}>
                <div className="">
                  <div className="text-7xl font-black text-accent/15 leading-none mb-2">03</div>
                  <h2 className="text-3xl font-black text-primary mb-4">Pagamento Immediato</h2>
                  <p className="text-foreground/70 leading-relaxed mb-5 text-lg">Se accetti la nostra offerta, possiamo concludere l'acquisto in giornata. Veniamo a ritirare il veicolo a domicilio e paghiamo subito.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Ritiro a domicilio gratuito
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Bonifico o contanti immediati
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      Gestiamo tutta la burocrazia
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src="/auto2.webp" alt="Pagamento immediato al cliente" width="1200" height="1600" className="w-full h-72 object-cover" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black mb-3">Pronto a vendere la tua auto?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Chiama ora o scrivi su WhatsApp: rispondiamo in meno di 1 ora, ogni giorno.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg">
                <Phone className="w-5 h-5" />
                +41 79 863 53 91
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg text-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-primary mb-3">Richiedi una Valutazione Gratuita</h2>
              <p className="text-foreground/60">Compila il modulo con i dati della tua auto. Ti ricontattiamo rapidamente con un'offerta, senza impegno.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-border p-8">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
