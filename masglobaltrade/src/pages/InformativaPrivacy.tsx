import SiteLayout from "../components/SiteLayout";
import { TEL } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function InformativaPrivacy() {
  usePageMeta("Privacy e dati personali | MAS Global Trade", "Leggi come MAS Global Trade tratta i dati personali raccolti dal sito, dai moduli di contatto e dalle richieste di valutazione.");
  return (
    <SiteLayout className="bg-background text-foreground page-privacy">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-black text-primary tracking-tight mb-2">Informativa sulla privacy</h1>
        <p className="text-sm text-foreground/50 mb-10">Ultimo aggiornamento: maggio 2025</p>
        <section className="space-y-10 text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Titolare del trattamento</h2>
            <p>
              Ticino Cars by Deen Auto Sagl (MAS Global Trade)
              <br />
              Via Monte Ceneri 12, 6593 Cadenazzo (TI), Svizzera
              <br />
              Email:{' '}
              <a href="mailto:info@masglobaltrade.ch" className="text-primary hover:underline">info@masglobaltrade.ch</a>
              <br />
              Tel:{' '}
              <a href={TEL} className="text-primary hover:underline">+41 79 863 53 91</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Dati raccolti e finalità</h2>
            <p className="mb-3">Raccogliamo esclusivamente i dati che ci fornisci volontariamente tramite il modulo di contatto o la richiesta di valutazione del tuo veicolo:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Nome e cognome</li>
              <li>Numero di telefono</li>
              <li>Indirizzo email (se fornito)</li>
              <li>Informazioni sul veicolo da valutare (marca, modello, anno, chilometraggio)</li>
              <li>Messaggio libero</li>
            </ul>
            <p className="mt-3">Questi dati vengono trattati esclusivamente per risponderti e fornirti il servizio richiesto (valutazione auto, acquisto veicoli usati).</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Base giuridica</h2>
            <p>Il trattamento dei dati personali si basa sul tuo consenso espresso (invio del modulo) e sull'esecuzione di misure precontrattuali su tua richiesta, ai sensi della Legge federale sulla protezione dei dati (nLPD, in vigore dal 1° settembre 2023).</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Conservazione dei dati</h2>
            <p>I tuoi dati vengono conservati per il tempo strettamente necessario a gestire la tua richiesta e, in caso di rapporto contrattuale, per i termini previsti dalla legislazione svizzera (generalmente 10 anni per documenti fiscali e contabili). I dati non utilizzati vengono cancellati entro 12 mesi dalla ricezione.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Comunicazione a terzi</h2>
            <p>I tuoi dati personali non vengono venduti né ceduti a terzi per scopi commerciali. Possono essere condivisi esclusivamente con collaboratori interni che operano per conto di MAS Global Trade, nel rispetto della presente informativa.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Cookie e strumenti di analisi</h2>
            <p>Questo sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento della navigazione. Non utilizziamo cookie di profilazione o strumenti di tracciamento di terze parti.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Sicurezza</h2>
            <p>Adottiamo misure tecniche e organizzative appropriate per proteggere i tuoi dati personali da accessi non autorizzati, perdita o alterazione. Il sito è servito interamente tramite connessione cifrata HTTPS.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">8. I tuoi diritti</h2>
            <p className="mb-3">Ai sensi della nLPD hai il diritto di:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Accedere ai tuoi dati personali in nostro possesso</li>
              <li>Rettificare dati inesatti</li>
              <li>Richiedere la cancellazione dei tuoi dati</li>
              <li>Opporti al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
            </ul>
            <p className="mt-3">
              Per esercitare questi diritti, contattaci via email a{' '}
              <a href="mailto:info@masglobaltrade.ch" className="text-primary hover:underline">info@masglobaltrade.ch</a>
              .
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Modifiche alla presente informativa</h2>
            <p>Ci riserviamo il diritto di aggiornare questa informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con l'indicazione della data di aggiornamento.</p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
