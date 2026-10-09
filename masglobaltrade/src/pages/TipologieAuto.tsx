import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, Star, Wrench, Gauge, Zap, Globe } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function TipologieAuto() {
  usePageMeta("Quali auto acquistiamo in Ticino | MAS", "Auto usate, incidentate, guaste, senza collaudo o con molti chilometri: scopri quali veicoli acquistiamo in tutto il Canton Ticino.");
  return (
    <SiteLayout className="bg-background page-car-types">
      <div className="bg-primary pt-32 pb-16 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div style={{ opacity: "1", transform: "none" }}>
            <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Acquisto qualsiasi tipologia</p>
            <h1 className="text-4xl md:text-5xl font-black mb-5 leading-tight">
              Tipologie di auto
              <br />
              che acquisto
            </h1>
            <p className="text-xl text-white/75 max-w-3xl leading-relaxed">Dalle auto recenti alle auto d'epoca, dalle ibride a quelle malfunzionanti: valuto tutto e faccio sempre un'offerta chiara.</p>
          </div>
        </div>
      </div>
      <main className="pb-20">
        <div className="container mx-auto px-4 max-w-5xl py-16 space-y-10">
          <div id="pochi-km" className="bg-white rounded-3xl border-2 border-green-400 shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-green-500 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Gauge className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-primary">Auto con pochi km</h2>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">Alta valutazione</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">Le auto usate poco sono tra le più ricercate dal mercato. Particolare interesse per auto con meno di 100'000 km: indipendentemente dall'anno, rappresentano occasioni di valore. Se la tua auto è poco percorsa, contattami, è probabile che valga più di quanto pensi.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Interesse particolare per auto sotto i 100'000 km
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Auto poco usate ricercate indipendentemente dall'anno
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Seconde auto, aziendali, veicoli da garage
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Le cerchiamo con interesse e paghiamo bene
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="esportazione" className="bg-white rounded-3xl border-2 border-blue-400 shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-[#0369a1] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-primary">Auto per esportazione</h2>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700">Rete europea</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">Le auto con tanti km non sono più idonee alla rivendita locale in Svizzera. Grazie alla mia consolidata rete di contatti in Europa e oltre, sono in grado di valutare e acquistare qualsiasi genere di auto. Particolare interesse per auto recenti ma con chilometraggio elevato.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Rete consolidata di contatti in Europa e oltre
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Interesse per auto recenti con tanti km
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Valutazione anche per modelli difficili da vendere in Svizzera
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Gestisco io le pratiche di esportazione
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="incidentate-difetti" className="bg-white rounded-3xl border-2 border-orange-400 shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-[#b45309] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-primary">Auto incidentate o con difetti</h2>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-700">Valuto comunque</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">Non devi sistemare nulla prima di contattarmi. Valuto auto con danni alla carrozzeria, problemi meccanici o difetti tecnici. Faccio una stima realistica tenendo conto della situazione reale e ti faccio un'offerta concreta.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Danni alla carrozzeria, ammaccature, graffi
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Qualsiasi genere di problema meccanico (motore, cambio, FAP…)
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Auto ferme o con collaudo scaduto
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Valutazione onesta, offerta in giornata
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="depoca" className="bg-white rounded-3xl border-2 border-yellow-400 shadow-sm overflow-hidden ring-2 ring-yellow-300 ring-offset-2" style={{ opacity: "1", transform: "none" }}>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-[#b45309] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Star className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-primary">Auto d'epoca</h2>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">La mia specialità</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">Le auto storiche e youngtimer richiedono esperienza e una rete di contatti specifica. Valuto vetture d'epoca, youngtimer e modelli particolari con attenzione al mercato reale e al valore collezionistico. Se hai un'auto storica ferma in garage, o stai pensando di cederla, contattami.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Esperienza consolidata nel settore
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Auto d'epoca e youngtimer
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Rete di collezionisti e amatori
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Valutazione seria e realistica
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="elettriche-ibride" className="bg-white rounded-3xl border-2 border-cyan-400 shadow-sm overflow-hidden" style={{ opacity: "1", transform: "none" }}>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="bg-[#0284c7] w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-2xl font-black text-primary">Auto elettriche, ibride e plug-in</h2>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-cyan-700">Mercato in crescita</span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-6 text-base">Particolare interesse per le full hybrid. Sebbene non esista ancora un mercato consolidato dell'usato per le auto elettriche e plug-in, valutiamo tutto con attenzione, concretamente e in base alla situazione attuale di mercato. Ogni veicolo viene considerato caso per caso.</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Particolare interesse per le full hybrid
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Elettriche e plug-in valutate caso per caso
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="text-green-500 font-bold mt-0.5">✓</span>
                      Valutazione concreta basata sul mercato attuale
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-black mb-3">Non sei sicuro del tipo di auto?</h2>
            <p className="text-white/70 mb-8">Contattami comunque, valuto qualsiasi veicolo e ti rispondo in giornata.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                <Phone className="w-5 h-5" />
                Chiama Madian: +41 79 863 53 91
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Scrivimi su WhatsApp
              </a>
            </div>
            <p className="mt-6 text-white/50 text-sm">
              Oppure visita la pagina{' '}
              <Link href="/contatti" className="underline text-white/70 hover:text-white">Contatti</Link>
              {' '}per il modulo di richiesta.
            </p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
