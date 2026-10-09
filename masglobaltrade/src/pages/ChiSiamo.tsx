import SiteLayout from "../components/SiteLayout";
import { Phone, Check, Star } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ChiSiamo() {
  usePageMeta("Chi è MAS Global Trade | Acquisto auto in Ticino", "Scopri chi è MAS Global Trade e come acquistiamo auto usate con un rapporto diretto, valutazione trasparente e ritiro in tutto il Ticino.");
  return (
    <SiteLayout className="bg-background page-about">
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div style={{ opacity: "1", transform: "none" }}>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Chi c'è dietro MAS Global Trade</p>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Sono cresciuto
              <br />
              dentro questo settore.
            </h1>
            <p className="text-xl text-white/80 max-w-3xl leading-relaxed">Da oltre 30 anni la mia famiglia è attiva nel mondo dell'auto in Ticino. MAS Global Trade è il passo successivo: più diretto, più chiaro, più moderno.</p>
          </div>
        </div>
      </div>
      <main className="pb-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed" style={{ opacity: "1", transform: "none" }}>
                <h2 className="text-3xl font-black text-primary">Mi chiamo Madian.</h2>
                <p>
                  Lavoro nel mondo dell'auto praticamente da sempre. La mia famiglia è attiva nel settore automobilistico in Ticino{' '}
                  <strong className="text-primary">da oltre 30 anni</strong>
                  , sono cresciuto tra garage, trattative, ritiri e compravendite. Mio padre mi portava al lavoro con lui già da bambino, e ho iniziato a lavorare in garage ancora prima dei 18 anni.
                </p>
                <p>Dopo l'università ho deciso di portare un approccio più moderno e diretto in un settore che, spesso, è rimasto molto vecchia scuola.</p>
                <p>Da qui nasce MAS Global Trade: la prima piattaforma digitale in Ticino dedicata all'acquisto di auto usate dai privati. L'idea era semplice: aiutare i privati a vendere meglio la propria auto, con più chiarezza e meno perdite di tempo.</p>
                <div className="border-t border-border pt-5">
                  <p className="font-black text-primary text-xl mb-3">Un approccio semplice: diretto, chiaro, concreto.</p>
                  <p>Gestisco personalmente ogni contatto: dalla prima chiamata fino al pagamento e al ritiro dell'auto.</p>
                  <p className="mt-3">Negli anni ho capito che le persone non cercano solo qualcuno che "offra di più", ma qualcuno che:</p>
                  <ul className="mt-3 space-y-1.5">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>risponda</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>sia serio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>mantenga la parola data</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      <span>renda tutto semplice</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-accent pl-5 py-2 bg-accent/5 rounded-r-xl">
                  <p className="text-xl font-black text-primary">"Quello che dico, lo faccio."</p>
                  <p className="text-sm text-foreground/60 mt-1">Madian, fondatore MAS Global Trade</p>
                </div>
                <div className="flex items-center gap-3 bg-secondary/50 rounded-xl px-5 py-4 border border-border w-fit">
                  <div className="flex text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">4.9 / 5</div>
                    <div className="text-xs text-foreground/50">114 recensioni Google verificate</div>
                  </div>
                </div>
              </div>
              <div className="lg:sticky lg:top-28" style={{ opacity: "1", transform: "none" }}>
                <img src="/hero-desktop.webp" alt="Madian, fondatore MAS Global Trade" width="1204" height="1600" className="w-full rounded-3xl object-cover shadow-xl" style={{ maxHeight: "520px", objectPosition: "60% 35%" }} loading="lazy" decoding="async" />
                <div className="mt-4 text-center">
                  <p className="font-bold text-primary">Madian</p>
                  <p className="text-sm text-foreground/50">Fondatore e responsabile acquisizioni | MAS Global Trade</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#F8F9FA] border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-primary mb-3">Cosa apprezzano di più i clienti</h2>
              <p className="text-foreground/60 max-w-2xl mx-auto">Ecco cosa dicono le persone che hanno venduto la loro auto con MAS Global Trade.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
                <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide bg-[#1a3a5c] text-white">Serietà</div>
                <div className="divide-y divide-border">
                  <div className="p-5">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed italic mb-3">"Consiglio vivamente per la professionalità. In Madian ho trovato una bella persona con il quale ci si può approcciare tranquillamente."</p>
                    <p className="text-xs font-bold text-foreground/50">Dani Zuppo</p>
                  </div>
                  <div className="p-5">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed italic mb-3">"Favorevolmente colpiti dalla gentilezza e dalla correttezza di Madian. Trattativa veloce e trasparente."</p>
                    <p className="text-xs font-bold text-foreground/50">Donato M.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
                <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide bg-accent text-white">Rapidità</div>
                <div className="divide-y divide-border">
                  <div className="p-5">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed italic mb-3">"Ho venduto la mia macchina. È stato molto onesto e la trattativa rapida. Persona molto corretta, lo contatterò per future vendite."</p>
                    <p className="text-xs font-bold text-foreground/50">Alessandro L.</p>
                  </div>
                  <div className="p-5">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed italic mb-3">"Super Erfahrung gemacht 👍 Vielen Dank für den schnellen, einfachen und unkomplizierten Ankauf meines Fahrzeugs."</p>
                    <p className="text-xs font-bold text-foreground/50">N. W.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
                <div className="px-5 py-3 font-bold text-sm uppercase tracking-wide bg-[#1a6e3c] text-white">Nessuna perdita di tempo</div>
                <div className="divide-y divide-border">
                  <div className="p-5">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed italic mb-3">"Onesti, efficienti, pazienti e comprensivi. Per noi una ottima valutazione! Bravi"</p>
                    <p className="text-xs font-bold text-foreground/50">Vania Tonello</p>
                  </div>
                  <div className="p-5">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <p className="text-foreground/75 text-sm leading-relaxed italic mb-3">"Servizio eccellente, contatto rapido e professionale. La vendita si è conclusa in tempi brevissimi. Consigliatissimi!"</p>
                    <p className="text-xs font-bold text-foreground/50">Franco G.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-primary mb-3">Zone servite</h2>
              <p className="text-foreground/60">Ho acquistato centinaia di veicoli da privati in tutta la Svizzera italiana.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Luganese</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Locarnese e Valli</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Bellinzonese</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Mendrisiotto</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Leventina</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Riviera</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Bleniese</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Piano di Magadino</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Gambarogno</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Malcantone</span>
              <span className="bg-[#F8F9FA] border border-border rounded-full px-4 py-2 text-sm font-semibold text-primary shadow-sm">Mesolcina</span>
            </div>
          </div>
        </section>
        <section className="py-20 bg-[#F8F9FA] border-t border-border">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="space-y-6" style={{ opacity: "1", transform: "none" }}>
              <h2 className="text-3xl font-black text-primary">Quello che dicono i clienti, lo leggi nelle recensioni.</h2>
              <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">Oltre 114 recensioni verificate su Google raccontano come si svolge una trattativa con MAS Global Trade: chiarezza, rispetto dei tempi, pagamento puntuale.</p>
              <ul className="inline-flex flex-col items-start gap-3 text-left mx-auto">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-foreground/80 font-medium">Rispondo io direttamente, Madian, dal primo contatto</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-foreground/80 font-medium">Proposta chiara e mantenuta fino al ritiro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-foreground/80 font-medium">Vengo io da te a ritirare l'auto, ovunque in Ticino</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-foreground/80 font-medium">Mi occupo di tutta la burocrazia: annullamento e deposito targa inclusi</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-4">Pronto a vendere la tua auto?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Contattami direttamente, rispondo io, Madian.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg text-lg">
                <Phone className="w-5 h-5" />
                Chiama Madian: +41 79 863 53 91
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg text-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Scrivimi su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
