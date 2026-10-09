import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, MapPin } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ZoneServite() {
  usePageMeta("Zone servite per il ritiro auto | MAS Ticino", "Scopri dove ritiriamo auto usate in Canton Ticino: Lugano, Locarno, Bellinzona, Mendrisio, Biasca e località vicine. Il ritiro a domicilio è gratuito.");
  return (
    <SiteLayout className="bg-background page-service-areas">
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-6">Zone Servite: tutto il Ticino</h1>
            <p className="text-xl text-foreground/70">Operiamo in tutto il Canton Ticino. Valutazione gratuita e ritiro a domicilio in ogni comune.</p>
          </div>
          <div className="mb-20">
            <h2 className="text-2xl font-black text-primary mb-2 text-center">Alcune delle nostre ultime acquisizioni</h2>
            <p className="text-foreground/60 text-center mb-8">Auto reali acquistate recentemente in tutto il Ticino</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto1.webp" alt="Mercedes GLA 200 | 2018" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Lugano</span>
                    </div>
                    <span className="text-white/70 text-xs">Mercedes GLA 200 | 2018</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">Mercedes GLA 200 nera a Lugano. Contatto mattina, accordo in 20 minuti, ritiro e pagamento in giornata.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto2.webp" alt="Land Rover Discovery Sport | 2020" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Locarno</span>
                    </div>
                    <span className="text-white/70 text-xs">Land Rover Discovery Sport | 2020</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">Discovery Sport grigio a Locarno. Offerta rapida, ritiro a domicilio il giorno dopo con pagamento in contanti.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto3.webp" alt="Peugeot 3008 | 2019" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Bellinzona</span>
                    </div>
                    <span className="text-white/70 text-xs">Peugeot 3008 | 2019</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">Peugeot 3008 a Bellinzona. Il proprietario partiva all'estero: accordo in meno di un'ora, bonifico istantaneo.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto4.webp" alt="MINI Cooper S Clubman | 2019" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Mendrisio</span>
                    </div>
                    <span className="text-white/70 text-xs">MINI Cooper S Clubman | 2019</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">MINI Cooper S Clubman nera a Mendrisio. I concessionari avevano offerto troppo poco, noi abbiamo valutato correttamente.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto5.webp" alt="Renault Clio IV | 2017" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Chiasso</span>
                    </div>
                    <span className="text-white/70 text-xs">Renault Clio IV | 2017</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">Renault Clio nera a Chiasso. Il proprietario aveva fretta: siamo arrivati il giorno stesso e chiuso in giornata.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto6.webp" alt="BMW X1 M Sport | 2019" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Ascona</span>
                    </div>
                    <span className="text-white/70 text-xs">BMW X1 M Sport | 2019</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">BMW X1 M Sport grigio ad Ascona. Appuntamento il mattino, valutazione, ritiro e pagamento nel pomeriggio.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto7.webp" alt="BMW X1 | 2015" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Biasca</span>
                    </div>
                    <span className="text-white/70 text-xs">BMW X1 | 2015</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">BMW X1 bianco a Biasca, 110'000 km in ottimo stato. Accordo al telefono, ritiro in meno di 48 ore.</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-default" style={{ opacity: "1", transform: "none" }}>
                <div className="relative h-44">
                  <img src="/auto8.webp" alt="Mercedes GLC Coupé | 2019" width="900" height="1200" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span className="text-white font-black text-sm">Agno</span>
                    </div>
                    <span className="text-white/70 text-xs">Mercedes GLC Coupé | 2019</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm text-center leading-relaxed font-medium">Mercedes GLC Coupé blu ad Agno. Ritiro direttamente a casa del cliente, pagamento sul momento.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black text-primary">Scegli la tua zona</h2>
              <p className="mt-2 text-foreground/60">Sei landing complete coprono tutti i comuni serviti.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div style={{ opacity: "1", transform: "none" }}>
                <Link data-testid="link-city-ticino" href="/compro-auto/ticino" className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-black text-primary group-hover:text-accent">Ticino</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">Ritiriamo auto anche a Roveredo, Mesolcina.</p>
                  <span className="mt-5 text-sm font-bold text-accent">Scopri il servizio →</span>
                </Link>
              </div>
              <div style={{ opacity: "1", transform: "none" }}>
                <Link data-testid="link-city-lugano" href="/compro-auto/lugano" className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-black text-primary group-hover:text-accent">Lugano</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">Ritiriamo auto anche a Paradiso, Massagno, Morcote, Melide, Agno, Caslano, Ponte Tresa.</p>
                  <span className="mt-5 text-sm font-bold text-accent">Scopri il servizio →</span>
                </Link>
              </div>
              <div style={{ opacity: "1", transform: "none" }}>
                <Link data-testid="link-city-locarno" href="/compro-auto/locarno" className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-black text-primary group-hover:text-accent">Locarno</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">Ritiriamo auto anche a Ascona, Minusio, Gambarogno, Tenero, Gordola, Losone, Brissago, Magadino, Cevio, Intragna, Verzasca.</p>
                  <span className="mt-5 text-sm font-bold text-accent">Scopri il servizio →</span>
                </Link>
              </div>
              <div style={{ opacity: "1", transform: "none" }}>
                <Link data-testid="link-city-bellinzona" href="/compro-auto/bellinzona" className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-black text-primary group-hover:text-accent">Bellinzona</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">Ritiriamo auto anche a Giubiasco, Camorino, Cadenazzo, Sant'Antonino.</p>
                  <span className="mt-5 text-sm font-bold text-accent">Scopri il servizio →</span>
                </Link>
              </div>
              <div style={{ opacity: "1", transform: "none" }}>
                <Link data-testid="link-city-mendrisio" href="/compro-auto/mendrisio" className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-black text-primary group-hover:text-accent">Mendrisio</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">Ritiriamo auto anche a Chiasso, Balerna, Stabio, Riva San Vitale, Novazzano, Vacallo, Coldrerio.</p>
                  <span className="mt-5 text-sm font-bold text-accent">Scopri il servizio →</span>
                </Link>
              </div>
              <div style={{ opacity: "1", transform: "none" }}>
                <Link data-testid="link-city-biasca" href="/compro-auto/biasca" className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 transition-all hover:border-accent hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-accent" />
                    <h3 className="text-xl font-black text-primary group-hover:text-accent">Biasca</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">Ritiriamo auto anche a Airolo, Faido, Acquarossa, Olivone.</p>
                  <span className="mt-5 text-sm font-bold text-accent">Scopri il servizio →</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-20 bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Non trovi il tuo comune?</h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">Nessun problema! Operiamo in tutta la Svizzera italiana. Contattaci e verremo noi da te.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
                <Phone className="w-5 h-5" />
                Chiama Ora
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
