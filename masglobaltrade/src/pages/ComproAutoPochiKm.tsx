import SiteLayout from "../components/SiteLayout";
import { Phone, Car, Star, Banknote, ShieldCheck, Gauge, Clock, Zap, Camera, TrendingUp, Quote, House } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComproAutoPochiKm() {
  usePageMeta("Vendi un'auto con pochi chilometri in Ticino", "Hai un'auto con pochi chilometri? Ricevi una valutazione gratuita in Ticino, pagamento immediato e ritiro a domicilio senza obbligo di acquisto.");
  return (
    <SiteLayout className="bg-white page-low-mileage">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none select-none">
          <img src="/auto8.webp" alt="Auto con pochi chilometri" width="900" height="1200" className="w-full h-full object-cover object-center" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-0 md:pb-0">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full border border-sky-200" style={{ opacity: "1", transform: "none" }}>
              <Gauge className="w-4 h-4 text-sky-600" />
              <span className="text-sky-700 text-sm font-semibold">Valutazione massima garantita</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.08] mb-5" style={{ opacity: "1", transform: "none" }}>
              La tua auto ha pochi km?
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Vale più di quanto pensi.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ opacity: "1", transform: "none" }}>
              Le auto sotto i 100.000 km sono le più ricercate.
              <br />
              <span className="text-sky-600 font-semibold">Valutiamo al massimo, paghiamo subito.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10" style={{ opacity: "1", transform: "none" }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] shadow-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {' '}Scrivimi su WhatsApp
              </a>
              <a href={TEL} className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 font-bold px-7 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                {' '}+41 79 863 53 91
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-gray-500" style={{ opacity: "1" }}>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                {' '}4.9 · 101 recensioni Google
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sky-500" />
                {' '}Risposta in poche ore
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                {' '}+10 anni di esperienza
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-sky-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.2em]">Come funziona</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Tre passi. Zero stress.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="relative p-7 rounded-3xl border cursor-pointer transition-all duration-300 bg-white border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
              <div className="text-6xl font-black mb-4 leading-none select-none text-sky-100">01</div>
              <Camera className="w-7 h-7 mb-3 text-gray-300" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Mandi le foto</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Alcune foto su WhatsApp e la carta grigia. Tutto dal tuo telefono, nessuno spostamento.</p>
              <span className="mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-400">2 minuti</span>
            </div>
            <div className="relative p-7 rounded-3xl border cursor-pointer transition-all duration-300 bg-white border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
              <div className="text-6xl font-black mb-4 leading-none select-none text-sky-100">02</div>
              <House className="w-7 h-7 mb-3 text-gray-300" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Vengo da te</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Valutazione gratuita a domicilio in tutto il Ticino. Nessun costo, nessun impegno.</p>
              <span className="mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-400">Gratis</span>
            </div>
            <div className="relative p-7 rounded-3xl border cursor-pointer transition-all duration-300 bg-white border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
              <div className="text-6xl font-black mb-4 leading-none select-none text-sky-100">03</div>
              <Banknote className="w-7 h-7 mb-3 text-gray-300" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Pagamento immediato</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Contanti o bonifico istantaneo sul posto. Burocrazia completamente gestita da me.</p>
              <span className="mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-400">Stesso giorno</span>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">Clicca su un passo per i dettagli</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900">
              Più soldi.{' '}
              <span className="text-sky-600">Meno stress.</span>
              {' '}Subito.
            </h2>
            <p className="text-gray-500 mt-3">Perché le auto con pochi km valgono di più, e noi lo sappiamo</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Risposta in poche ore, 7 giorni su 7</p>
                <p className="text-gray-400 text-xs">Nessuna attesa, nessun rimbalzo</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Fino a 2.000 CHF in più rispetto alla concessionaria</p>
                <p className="text-gray-400 text-xs">Offerta onesta e trasparente</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Car className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Anche auto vecchie con pochi km: l'anno conta meno</p>
                <p className="text-gray-400 text-xs">Quel che conta davvero è il contachilometri</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Oltre 10 anni di esperienza in Canton Ticino</p>
                <p className="text-gray-400 text-xs">Centinaia di auto acquistate da privati</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Mandami le foto su WhatsApp
            </a>
            <a href={TEL} className="bg-gray-100 border border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all">
              <Phone className="w-5 h-5" />
              {' '}Chiama ora
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-sky-50 border-t border-sky-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-sky-100 text-sky-700 font-bold text-sm px-4 py-1.5 rounded-full mb-3">Operazione reale: auto con pochi km</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Fiat 500 Cabrio 2019 | 40.000 km</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-sky-100/80 ring-1 ring-violet-100" style={{ opacity: "1", transform: "none" }}>
              <img src="/auto8.webp" alt="Fiat 500 Cabrio 2019, 40.000 km" width="900" height="1200" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
            </div>
            <div style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-3 mb-5">
                <Quote className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                <p className="text-gray-700 text-lg italic leading-relaxed">Una signora del Luganese ci ha contattato per una Fiat 500 Cabrio del 2019 con soli 40.000 km. Siamo andati da lei nel pomeriggio stesso, accordo in 15 minuti, pagamento immediato. Lei aveva già ricevuto un'altra offerta, ma ha scelto noi per serietà e puntualità.</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-sky-100">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-black">M</div>
                <div>
                  <p className="text-gray-900 font-bold">Madian | MAS Global Trade</p>
                  <p className="text-gray-400 text-sm">Acquirente diretto · Tutto il Ticino</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {' '}WhatsApp
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 font-bold px-5 py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  {' '}Chiama ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Cosa dicono i nostri clienti</h2>
            <div className="flex justify-center items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-900 font-black text-xl ml-1">4.9</span>
              <span className="text-gray-400 text-sm">· 101 recensioni Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-1 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Ottima esperienza! Cercavo qualcuno di affidabile per vendere la mia auto e qui ho trovato disponibilità, chiarezza e professionalità. Madian è una persona seria e gentile: trattativa rapida e semplice, senza problemi."</p>
              <p className="text-sky-600 text-xs font-bold">MariaRosa Giambrone</p>
            </div>
            <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-1 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Ho avuto contatti con Madian per la vendita di un'auto. Posso solo dire cose molto positive. È molto disponibile, diretto e trasparente. Esperienza davvero positiva."</p>
              <p className="text-sky-600 text-xs font-bold">Johannus Demers</p>
            </div>
            <div className="bg-white border border-sky-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-1 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Sono rimasto molto soddisfatto dell'esperienza. Servizio eccellente, contatto rapido e professionale. La vendita si è conclusa in tempi brevissimi. Consigliatissimi!"</p>
              <p className="text-sky-600 text-xs font-bold">Franco Gasparoli</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500" />
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {' '}Disponibile 7 giorni su 7
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Scopri subito quanto
            <br />
            vale la tua auto.
          </h2>
          <p className="text-white/80 text-lg mb-10">Mandaci le foto su WhatsApp: risposta in poche ore, senza impegno.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all shadow-lg">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scrivimi su WhatsApp
            </a>
            <a href={TEL} className="bg-white text-sky-700 font-bold px-10 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg hover:bg-sky-50 hover:scale-105 transition-all shadow-lg">
              <Phone className="w-6 h-6" />
              {' '}+41 79 863 53 91
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
