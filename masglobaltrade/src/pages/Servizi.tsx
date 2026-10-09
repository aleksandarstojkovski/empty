import SiteLayout from "../components/SiteLayout";
import { Phone, Check, Banknote, MapPin, Wrench, Clock, Shield, FileCheck, Truck } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function Servizi() {
  usePageMeta("Servizi per vendere auto in Ticino | MAS", "Valutazione, ritiro a domicilio, pagamento immediato e pratiche gestite: scopri i servizi MAS Global Trade per vendere un'auto in Ticino.");
  return (
    <SiteLayout className="bg-background page-services">
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div style={{ opacity: "1", transform: "none" }}>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Compro auto in Ticino</p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Vuoi vendere la tua auto
              <br />
              in modo rapido e sicuro?
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed mb-8">MAS Global Trade è specializzata nella compravendita di auto usate in tutto il Canton Ticino, con pagamento immediato, ritiro a domicilio e gestione completa delle pratiche.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg">
                <Phone className="w-5 h-5" />
                Chiama Ora: +41 79 863 53 91
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
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6" style={{ opacity: "1", transform: "none" }}>
                <h2 className="text-3xl font-black text-primary">Perché scegliere MAS Global Trade</h2>
                <p className="text-foreground/70 leading-relaxed">Il nostro servizio di compro auto in Ticino è attivo 24H su 24, 7 giorni su 7, da Chiasso ad Airolo e da Brissago a Roveredo, inclusi Locarno, Lugano, Bellinzona, Mendrisio, Biasca, il Malcantone, il Piano di Magadino e tutte le principali valli ticinesi.</p>
                <p className="text-foreground/70 leading-relaxed">Acquistiamo veicoli di ogni marca, modello e condizione, anche con molti chilometri o destinati all'export.</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80">Valutazione corretta, basata sul mercato reale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80">Pagamento immediato o bonifico istantaneo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80">Ritiro a domicilio in tutto il Ticino</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80">Processo semplice e veloce, in 24H vendi la tua auto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80">Auto, furgoni, pick-up in qualsiasi condizione, veicoli per export</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80">Ottime referenze. Recensioni reali e verificate da Google</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors shadow-md">
                    <Phone className="w-4 h-4" />
                    Chiama Ora
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors shadow-md">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4" style={{ opacity: "1", transform: "none" }}>
                <img src="/auto1.webp" alt="Mercedes GLA 200 acquistata a Lugano" width="900" height="1200" className="rounded-2xl w-full h-52 object-cover shadow-md" loading="lazy" decoding="async" />
                <img src="/auto6.webp" alt="BMW X1 M Sport acquistato ad Ascona" width="900" height="1200" className="rounded-2xl w-full h-52 object-cover shadow-md mt-8" loading="lazy" decoding="async" />
                <img src="/tiguan.webp" alt="VW Tiguan R-Line acquistato a Giubiasco" width="900" height="1200" className="rounded-2xl w-full h-52 object-cover shadow-md" loading="lazy" decoding="async" />
                <img src="/golf-blu.webp" alt="VW Golf 7 acquistato a Minusio" width="900" height="1200" className="rounded-2xl w-full h-52 object-cover shadow-md mt-8" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#F8F9FA]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-black text-primary mb-4">I nostri servizi</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">Semplifichiamo la vendita della tua auto. Niente perdite di tempo, solo una transazione veloce e trasparente.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#1a3a5c] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Banknote className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Valutazione Immediata</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Ricevi un'offerta gratuita e senza impegno basata sul reale valore di mercato. Valutiamo auto di ogni marca, modello e anno.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Pagamento Sicuro</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Bonifico bancario istantaneo o contanti. Nessuna attesa, nessun rischio. Il pagamento avviene al momento del ritiro.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#1a6e3c] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Ritiro a Domicilio</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Veniamo da te ovunque in Ticino, senza costi aggiuntivi. Da Chiasso ad Airolo, da Brissago a Roveredo.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#6b21a8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Pratiche Burocratiche</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Gestiamo noi il passaggio di proprietà, l'annullamento della licenza e tutte le pratiche amministrative.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#b45309] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Auto Incidentate o Non Marcianti</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Acquistiamo veicoli in qualsiasi condizione: incidentati, con danni meccanici o estetici, non circolanti.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#0f766e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Auto con Leasing in Corso</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Possiamo saldare il contratto di leasing direttamente con la società e occuparci di tutte le pratiche.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#1d4ed8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Export e Furgoni</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Acquistiamo anche furgoni, pick-up, veicoli commerciali e auto destinate all'esportazione.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/40 transition-all group" style={{ opacity: "1", transform: "none" }}>
                <div className="w-11 h-11 rounded-xl bg-[#be185d] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-primary mb-2">Disponibile 7/7</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">Rispondo personalmente ogni giorno: weekend e festivi inclusi. Mi trovi sempre.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-4">Chiamaci adesso e vendi la tua auto oggi</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Non perdere tempo con annunci o concessionari. Contattaci e ricevi un'offerta in meno di 1 ora.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </main>
    </SiteLayout>
  );
}
