import SiteLayout from "../components/SiteLayout";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function NoteLegali() {
  usePageMeta("Note legali | MAS Global Trade", "Dati del titolare, condizioni e informazioni legali del sito MAS Global Trade, servizio di acquisto auto usate con sede a Cadenazzo.");
  return (
    <SiteLayout className="bg-background text-foreground page-legal">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-black text-primary tracking-tight mb-10">Note legali</h1>
        <section className="space-y-8 text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Ragione sociale</h2>
            <p>
              Ticino Cars by Deen Auto Sagl
              <br />
              (operante come MAS Global Trade)
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Titolare</h2>
            <p>Madian Al Shweiki</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Sede legale</h2>
            <p>
              Via Muraccio 10
              <br />
              6612 Ascona
              <br />
              Cantone Ticino, Svizzera
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Sede operativa</h2>
            <p>
              Via Monte Ceneri 12
              <br />
              6593 Cadenazzo (TI)
              <br />
              Svizzera
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Numero UID</h2>
            <p>CHE-375.295.849</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Contatti</h2>
            <p>
              Telefono:{' '}
              <a href={TEL} className="text-primary hover:underline">+41 79 863 53 91</a>
              <br />
              Email:{' '}
              <a href="mailto:info@masglobaltrade.ch" className="text-primary hover:underline">info@masglobaltrade.ch</a>
              <br />
              WhatsApp:{' '}
              <a href={WHATSAPP} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">+41 79 863 53 91</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Sito web</h2>
            <p>
              <a href="https://masglobaltrade.ch" className="text-primary hover:underline">masglobaltrade.ch</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Realizzazione del sito</h2>
            <p>
              <a href="https://nobamedia.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NOBA Media</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Esclusione di responsabilità</h2>
            <p>Nonostante la cura riposta nella redazione dei contenuti di questo sito, MAS Global Trade declina ogni responsabilità per l'accuratezza, la completezza e l'attualità delle informazioni pubblicate. I link a siti esterni sono forniti a titolo informativo; MAS Global Trade non è responsabile del contenuto delle pagine collegate.</p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
