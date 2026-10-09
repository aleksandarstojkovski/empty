import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, Check, ChevronRight, Star, Banknote, X, Camera, Quote, House } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComproAutoLocarno() {
  usePageMeta("Compro auto a Locarno | Ritiro a domicilio", "Acquistiamo auto a Locarno e nel Locarnese, valli comprese. Ricevi un'offerta chiara, pagamento immediato e ritiro a domicilio senza costi aggiuntivi.");
  return (
    <SiteLayout className="bg-white page-city-locarno">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/city-locarno.webp" alt="Locarno lago Maggiore" width="1200" height="1200" className="w-full h-full object-cover object-center" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-900/88 via-blue-800/75 to-cyan-700/60" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-sky-900/80 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/15 px-5 py-2 rounded-full border border-white/25 backdrop-blur-sm" style={{ opacity: "1", transform: "none" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/85 text-sm font-medium">Servizio attivo a Locarno e in tutto il Locarnese</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6" style={{ opacity: "1", transform: "none" }}>
            Compro auto a Locarno
            <br />
            e in tutto il{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200">Locarnese</span>
          </h1>
          <p className="text-white/70 text-xl md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ opacity: "1", transform: "none" }}>Dalla città alle valli, vengo io a ritirare la tua auto. Valutazione gratuita e pagamento immediato.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12" style={{ opacity: "1", transform: "none" }}>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-9 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] shadow-xl">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scrivimi su WhatsApp
            </a>
            <a href={TEL} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/35 text-white font-black px-9 py-5 rounded-2xl flex items-center justify-center gap-3 text-lg transition-all hover:scale-105">
              <Phone className="w-6 h-6" />
              {' '}Chiama ora
            </a>
          </div>
          <div className="flex justify-center flex-wrap gap-6" style={{ opacity: "1" }}>
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-3 rounded-xl">
              <div className="text-white font-black text-xl">4.9</div>
              <div className="text-white/55 text-xs mt-0.5">più di 110 recensioni Google</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-3 rounded-xl">
              <div className="text-white font-black text-xl">+2.000 CHF</div>
              <div className="text-white/55 text-xs mt-0.5">rispetto alla concessionaria</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm border border-white/15 px-5 py-3 rounded-xl">
              <div className="text-white font-black text-xl">+10 anni</div>
              <div className="text-white/55 text-xs mt-0.5">di esperienza in Ticino</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">Compro auto usate nel Locarnese</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-700 text-lg leading-relaxed">Sono Madian di MAS Global Trade e compro auto usate da privati a Locarno e in tutto il Locarnese. Città, lago o valli non fa differenza: il ritiro a domicilio è gratuito ovunque, anche nei comuni più fuori mano.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Molte delle auto che ritiro in questa zona sono ferme da mesi: la seconda auto che nessuno usa più, quella del genitore che ha smesso di guidare, quella con la batteria a terra in garage. Non serve rimetterla in moto né portarla da nessuna parte. Mi mandi due foto e i dati, ti faccio un'offerta, e al resto penso io.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Che auto compro?</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Tutte le marche e tutte le condizioni: dalla citycar tenuta bene all'auto incidentata, dal SUV con tanti chilometri al furgone da lavoro. Compro anche veicoli fermi da tempo, senza collaudo o senza assicurazione attiva.</p>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-500 text-xs font-bold uppercase tracking-[0.2em]">Come funziona</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Semplice come mandare un messaggio.</h2>
            <p className="text-gray-400 mt-3">Dalla prima foto alla conclusione: spesso poche ore.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group relative overflow-hidden rounded-3xl border-2 border-sky-100 bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300" style={{ opacity: "1", transform: "none" }}>
              <div className="h-1.5 w-full bg-gradient-to-r from-sky-400 to-cyan-400" />
              <div className="p-7">
                <div className="text-7xl font-black mb-4 leading-none text-sky-100">1</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-sky-100">
                  <Camera className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-1">Foto su WhatsApp</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block bg-sky-100 text-sky-600">Interno · Esterno · Carta grigia</span>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">Mandi alcune foto dal telefono. Nessuno spostamento, nessun appuntamento.</p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-sky-500">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border-2 border-sky-100 bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300" style={{ opacity: "1", transform: "none" }}>
              <div className="h-1.5 w-full bg-gradient-to-r from-violet-400 to-purple-400" />
              <div className="p-7">
                <div className="text-7xl font-black mb-4 leading-none text-violet-100">2</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-violet-100">
                  <House className="w-6 h-6 text-violet-600" />
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-1">Vengo a Locarno da te</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block bg-violet-100 text-violet-600">Gratis · In giornata</span>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">Visita gratuita a domicilio in tutta la zona locarnese e le valli.</p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-violet-500">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-3xl border-2 border-sky-100 bg-white hover:border-sky-300 hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300" style={{ opacity: "1", transform: "none" }}>
              <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 to-teal-400" />
              <div className="p-7">
                <div className="text-7xl font-black mb-4 leading-none text-emerald-100">3</div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-emerald-100">
                  <Banknote className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-1">Pagamento immediato</h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block bg-emerald-100 text-emerald-600">Contanti o bonifico</span>
                <p className="text-gray-500 text-sm leading-relaxed mt-2">Pago sul posto. Mi occupo di targhe e burocrazia. Tu non fai nulla.</p>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all bg-emerald-500">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-green-200">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Mandami le foto
            </a>
            <a href={TEL} className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105">
              <Phone className="w-5 h-5" />
              {' '}+41 79 863 53 91
            </a>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-blue-50 to-sky-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.2em]">Il confronto</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">
              MAS Global Trade
              <br />
              <span className="text-gray-400">vs</span>
              {' '}Concessionaria
            </h2>
            <p className="text-gray-500 mt-3 text-sm">Prima di accettare un'offerta, confronta.</p>
            <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">Più di 110 recensioni Google con media 4.9. Chi vende a me parla sempre con la stessa persona, dal primo messaggio al ritiro. Niente centralini, niente attese di giorni per una risposta: rispondo io, 7 giorni su 7.</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-sky-200 shadow-xl shadow-sky-100/80">
            <div className="grid grid-cols-3 bg-sky-50">
              <div className="p-4 text-gray-400 text-xs font-bold uppercase tracking-wider" />
              <div className="p-4 text-center bg-sky-500 border-x border-sky-400">
                <span className="text-white font-black text-sm">MAS Global Trade</span>
              </div>
              <div className="p-4 text-center bg-gray-100">
                <span className="text-gray-400 text-sm font-semibold">Concessionaria</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-sky-100 bg-white" style={{ opacity: "1", transform: "none" }}>
              <div className="p-4 text-gray-600 text-sm font-medium flex items-center">Prezzo offerto</div>
              <div className="p-4 text-center bg-sky-50 border-x border-sky-200 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sky-700 text-sm font-semibold">Fino a 2.000 CHF in più</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Al minimo possibile</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-sky-100 bg-sky-50/50" style={{ opacity: "1", transform: "none" }}>
              <div className="p-4 text-gray-600 text-sm font-medium flex items-center">Velocità</div>
              <div className="p-4 text-center bg-sky-50 border-x border-sky-200 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sky-700 text-sm font-semibold">Stesso giorno</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Settimane di attesa</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-sky-100 bg-white" style={{ opacity: "1", transform: "none" }}>
              <div className="p-4 text-gray-600 text-sm font-medium flex items-center">Burocrazia</div>
              <div className="p-4 text-center bg-sky-50 border-x border-sky-200 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sky-700 text-sm font-semibold">Gestita da noi al 100%</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Problema tuo</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-sky-100 bg-sky-50/50" style={{ opacity: "1", transform: "none" }}>
              <div className="p-4 text-gray-600 text-sm font-medium flex items-center">Pagamento</div>
              <div className="p-4 text-center bg-sky-50 border-x border-sky-200 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sky-700 text-sm font-semibold">Immediato, garantito</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Da verificare</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-sky-100 bg-white" style={{ opacity: "1", transform: "none" }}>
              <div className="p-4 text-gray-600 text-sm font-medium flex items-center">Rischi legali</div>
              <div className="p-4 text-center bg-sky-50 border-x border-sky-200 flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-sky-700 text-sm font-semibold">Nessuno, trasferisco io</span>
              </div>
              <div className="p-4 text-center flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-gray-400 text-sm">Vizi occulti, diffide</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scegli MAS Global Trade
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-sky-50 border-y border-sky-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-sky-100 text-sky-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">Operazione reale a Locarno</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Land Rover Discovery Sport 2020: ritirata a Locarno</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-sky-100">
              <img src="/auto2.webp" alt="Land Rover Discovery Sport" width="900" height="1200" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
            </div>
            <div>
              <div className="flex gap-3 mb-5">
                <Quote className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                <p className="text-gray-600 text-lg italic leading-relaxed">Un cliente di Locarno voleva liberarsi del suo Discovery Sport senza passare per un concessionario. Offerta rapida, ritiro a domicilio il giorno dopo con pagamento in contanti.</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-sky-100">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-black">M</div>
                <div>
                  <p className="text-gray-900 font-bold">Madian, MAS Global Trade</p>
                  <p className="text-gray-400 text-sm">Acquirente diretto · Locarno e dintorni</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {' '}WhatsApp
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-sky-700 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  {' '}Chiama ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Cosa dicono i nostri clienti</h2>
            <div className="flex justify-center items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-900 font-black text-xl ml-2">4.9</span>
              <span className="text-gray-500 text-sm ml-1">· più di 110 recensioni su Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-sky-100/80 border border-sky-50 hover:shadow-sky-200/60 hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Ottima esperienza! Cercavo qualcuno di affidabile per vendere la mia auto e qui ho trovato disponibilità, chiarezza e professionalità. Trattativa rapida e semplice."</p>
              <p className="text-sky-600 text-xs font-bold">MariaRosa Giambrone</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-sky-100/80 border border-sky-50 hover:shadow-sky-200/60 hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Posso solo dire cose molto positive. Madian è disponibile, diretto e trasparente. Si è preso il tempo di venire a vedere l'auto anche durante una vacanza in Ticino."</p>
              <p className="text-sky-600 text-xs font-bold">Johannus Demers</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md shadow-sky-100/80 border border-sky-50 hover:shadow-sky-200/60 hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"È stato molto onesto e la trattativa rapida. È una persona molto corretta, lo contatterò sicuramente per una futura vendita."</p>
              <p className="text-sky-600 text-xs font-bold">Alessandro Licone</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-black text-primary">Ritiriamo auto anche a...</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-foreground/65">Ascona, Minusio, Gambarogno, Tenero, Gordola, Losone, Brissago, Magadino, Cevio, Intragna e Verzasca. Il ritiro a domicilio è gratuito in tutta la zona.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Ascona</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Minusio</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Gambarogno</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Tenero</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Gordola</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Losone</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Brissago</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Magadino</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Cevio</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Intragna</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Verzasca</span>
          </div>
          <div className="mx-auto mt-8 max-w-3xl border-t border-border pt-6">
            <h3 className="font-black text-primary">Guide utili per vendere la tua auto</h3>
            <div className="mt-3 flex flex-col justify-center gap-2 sm:flex-row sm:gap-6">
              <Link href="/blog/quanto-vale-mia-auto-usata-ticino" className="font-semibold text-accent hover:underline">Quanto vale la mia auto usata in Ticino?</Link>
              <Link href="/blog/documenti-vendere-auto-ticino" className="font-semibold text-accent hover:underline">Documenti per vendere l'auto in Ticino</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-sky-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Domande frequenti</h2>
            <p className="text-gray-600 mt-3">Tutto quello che devi sapere sulla vendita della tua auto nel Locarnese.</p>
          </div>
          <div className="space-y-3">
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">La mia auto è ferma da mesi e non parte. La compri lo stesso?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì. Compro anche auto ferme da tempo, con la batteria scarica o guasti veri. Il trasporto lo organizzo io, tu non devi muovere niente.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Venite anche nelle valli?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì, il ritiro a domicilio copre tutto il Locarnese, valli comprese, senza costi aggiuntivi.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Serve che l'auto sia collaudata?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">No. Compro anche veicoli senza collaudo o con il collaudo scaduto.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Quali documenti servono?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Licenza di circolazione e un documento d'identità. Al resto della burocrazia penso io, compreso l'annullamento delle targhe se serve.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Quanto ci mette ad arrivare l'offerta?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">In genere rispondo in giornata. Mandami i dati dell'auto su WhatsApp con qualche foto e ti dico subito quanto posso offrirti.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-blue-700 to-cyan-600" />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/city-locarno.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-sky-900/60" />
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-1.5 rounded-full text-white/80 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {' '}Disponibile 7 giorni su 7
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Pronto a vendere la tua
            <br />
            auto a{' '}
            <span className="text-cyan-200">Locarno</span>
            ?
          </h2>
          <p className="text-white/80 text-lg mb-10">Hai un'auto da vendere nel Locarnese? Scrivimi su WhatsApp con due foto e i dati. Ti rispondo in giornata.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all shadow-xl">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scrivimi su WhatsApp
            </a>
            <a href={TEL} className="bg-white text-sky-700 font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 text-lg hover:bg-gray-50 hover:scale-105 transition-all shadow-lg">
              <Phone className="w-6 h-6" />
              {' '}Chiama ora
            </a>
          </div>
          <Link href="/valutazione-gratuita" className="mt-5 inline-block text-cyan-100 underline underline-offset-4 hover:text-white font-semibold">Valutazione gratuita online</Link>
          <p className="mt-10 text-white/30 text-sm max-w-xl mx-auto">Ritiriamo auto anche a Ascona, Minusio, Gambarogno, Tenero, Gordola, Losone, Brissago, Magadino, Cevio, Intragna, Verzasca e nelle località circostanti.</p>
        </div>
      </section>
    </SiteLayout>
  );
}
