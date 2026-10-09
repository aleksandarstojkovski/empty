import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, CircleCheck, Star, Banknote, MapPin, Clock, Zap, Camera, Quote, House } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComproAutoBellinzona() {
  usePageMeta("Compro auto a Bellinzona | Vendita rapida", "Vendi la tua auto a Bellinzona e nel Bellinzonese: valutazione gratuita, pagamento in contanti o bonifico e ritiro a domicilio anche in tempi rapidi.");
  return (
    <SiteLayout className="bg-amber-50 page-city-bellinzona">
      <section className="relative min-h-screen flex overflow-hidden">
        <div className="hidden md:block md:w-[48%] relative shrink-0">
          <img src="/city-bellinzona.webp" alt="Bellinzona castelli" width="1200" height="1200" className="absolute inset-0 w-full h-full object-cover object-center" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/30 to-amber-50" />
          <div className="absolute bottom-10 left-8 bg-white/90 backdrop-blur-md border border-amber-200 px-4 py-2 rounded-xl shadow-lg">
            <p className="text-amber-700 text-xs font-bold uppercase tracking-widest">Castelli di Bellinzona</p>
            <p className="text-gray-500 text-xs">Patrimonio UNESCO</p>
          </div>
        </div>
        <div className="flex-1 flex items-center relative z-10 px-8 md:px-12 pt-32 pb-16 md:pt-0 md:pb-0 bg-amber-50">
          <div className="md:hidden absolute inset-0">
            <img src="/city-bellinzona.webp" alt="Bellinzona" width="1200" height="1200" className="w-full h-full object-cover object-center opacity-15" loading="eager" decoding="async" />
            <div className="absolute inset-0 bg-amber-50/90" />
          </div>
          <div className="relative max-w-lg">
            <div className="mb-5 inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full border border-amber-300" style={{ opacity: "1", transform: "none" }}>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-700 text-sm font-medium">Servizio attivo a Bellinzona e in tutto il Bellinzonese</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-5" style={{ opacity: "1", transform: "none" }}>
              Compro auto a Bellinzona
              <br />
              e in tutto il{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">Bellinzonese</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ opacity: "1", transform: "none" }}>Offerta chiara, ritiro a domicilio e pagamento immediato. Spesso tutto in 24 ore.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8" style={{ opacity: "1", transform: "none" }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#0B6B38] hover:bg-[#07502A] text-white font-bold px-7 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_28px_rgba(11,107,56,0.35)] shadow-lg text-base">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {' '}WhatsApp, manda le foto
              </a>
              <a href={TEL} className="bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-800 font-bold px-7 py-4 rounded-xl flex items-center justify-center gap-2 transition-all text-base">
                <Phone className="w-5 h-5" />
                {' '}Chiama ora
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-gray-500" style={{ opacity: "1" }}>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                {' '}4.9 · oltre 110 recensioni
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">Compro auto usate a Bellinzona</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-700 text-lg leading-relaxed">Sono Madian di MAS Global Trade. Compro auto usate da privati a Bellinzona e in tutto il Bellinzonese, con una promessa semplice: farti perdere meno tempo possibile. Uno degli ultimi ritiri pubblicati tra le mie auto acquistate è stato proprio a Bellinzona: dal primo contatto telefonico al pagamento, tutto in 24 ore.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Se stai cambiando auto, se ne hai una in più o se vuoi solo chiudere la pratica senza passare settimane sugli annunci, il percorso con me è corto: dati dell'auto, offerta, ritiro. Il pagamento arriva prima della consegna, in contanti o con bonifico istantaneo.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Che auto compro?</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Ogni marca e ogni condizione: auto recenti da permuta, auto con molti chilometri, incidentate, guaste o da rottamare. Anche furgoni e veicoli da lavoro. Nessun veicolo è troppo vecchio o troppo messo male per una valutazione.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Come funziona</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Semplice come 1, 2 e 3</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-100" />
            <div className="space-y-6">
              <div className="relative flex gap-6 group" style={{ opacity: "1", transform: "none" }}>
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 font-black text-xl border-2 bg-amber-50 border-amber-300 group-hover:border-amber-500 transition-colors text-amber-600">1</div>
                <div className="flex-1 bg-amber-50 border border-amber-100 rounded-2xl p-6 group-hover:border-amber-300 group-hover:bg-amber-100/50 transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Camera className="w-5 h-5 text-amber-600" />
                    <h3 className="text-gray-900 font-bold text-xl">Mandi le foto</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">Alcune foto dell'auto e la carta grigia su WhatsApp. Basta il telefono. Nessuno spostamento richiesto.</p>
                </div>
              </div>
              <div className="relative flex gap-6 group" style={{ opacity: "1", transform: "none" }}>
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 font-black text-xl border-2 bg-amber-50 border-amber-300 group-hover:border-amber-500 transition-colors text-amber-600">2</div>
                <div className="flex-1 bg-amber-50 border border-amber-100 rounded-2xl p-6 group-hover:border-amber-300 group-hover:bg-amber-100/50 transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <House className="w-5 h-5 text-amber-600" />
                    <h3 className="text-gray-900 font-bold text-xl">Vengo da te</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">Valutazione gratuita a domicilio in tutta la zona bellinzonese, incluse le valli. Nessun costo di trasferta.</p>
                </div>
              </div>
              <div className="relative flex gap-6 group" style={{ opacity: "1", transform: "none" }}>
                <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shrink-0 font-black text-xl border-2 bg-amber-50 border-amber-300 group-hover:border-amber-500 transition-colors text-amber-600">3</div>
                <div className="flex-1 bg-amber-50 border border-amber-100 rounded-2xl p-6 group-hover:border-amber-300 group-hover:bg-amber-100/50 transition-all shadow-sm hover:shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Banknote className="w-5 h-5 text-amber-600" />
                    <h3 className="text-gray-900 font-bold text-xl">Pagamento sul posto</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">Contanti o bonifico istantaneo. Targhe, carta grigia e burocrazia: tutto gestito da me. Tu chiudi la porta e basta.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Inizia subito, WhatsApp
            </a>
            <a href={TEL} className="bg-amber-100 border border-amber-300 text-amber-800 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-200 transition-all">
              <Phone className="w-5 h-5" />
              {' '}Chiama Madian
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-center text-gray-900 mb-12">
            Perché scegliere{' '}
            <span className="text-amber-600">MAS Global Trade</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">Oltre 110 recensioni Google, media 4.9 stelle. Ogni trattativa la seguo io di persona: stessa voce al telefono, stessa persona al ritiro, prezzo pattuito uguale al prezzo pagato. Parlo italiano, tedesco, francese e inglese.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all shadow-sm" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Risposta garantita in poche ore</p>
                <p className="text-gray-400 text-xs">7 giorni su 7, feste incluse</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all shadow-sm" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Fino a 2.000 CHF in più della concessionaria</p>
                <p className="text-gray-400 text-xs">Nessun intermediario, margine diretto a te</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all shadow-sm" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Ritiro gratuito in tutto il bellinzonese</p>
                <p className="text-gray-400 text-xs">Valli incluse: Riviera, Blenio, Leventina</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all shadow-sm" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <CircleCheck className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Burocrazia completamente gestita da me</p>
                <p className="text-gray-400 text-xs">Targhe, carta grigia, pratiche, tutto incluso</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 border-t border-amber-100 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-700 font-bold text-sm px-4 py-1.5 rounded-full mb-3">Operazione reale a Bellinzona</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Peugeot 3008 2019: ritirata a Bellinzona</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-amber-100/80 ring-1 ring-amber-100">
              <img src="/auto3.webp" alt="Peugeot 3008" width="900" height="1200" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
            </div>
            <div>
              <div className="flex gap-3 mb-5">
                <Quote className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <p className="text-gray-700 text-lg italic leading-relaxed">Un Peugeot 3008 in ottimo stato a Bellinzona, il proprietario si trasferiva all'estero. Valutazione onesta, accordo in meno di un'ora, pagamento con bonifico istantaneo. Pratica completata in giornata.</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-amber-100">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-black">M</div>
                <div>
                  <p className="text-gray-900 font-bold">Madian, MAS Global Trade</p>
                  <p className="text-gray-400 text-sm">Acquirente diretto · Bellinzona e dintorni</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {' '}WhatsApp
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-amber-100 border border-amber-300 text-amber-800 font-bold px-5 py-3 rounded-xl hover:bg-amber-200 transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  {' '}Chiama ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
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
              <span className="text-gray-500 text-sm ml-1">· oltre 110 recensioni Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Ottima esperienza! Cercavo qualcuno di affidabile per vendere la mia auto e qui ho trovato disponibilità, chiarezza e professionalità. Trattativa rapida e semplice, senza problemi."</p>
              <p className="text-amber-600 text-xs font-bold">MariaRosa Giambrone</p>
            </div>
            <div className="bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Favorevolmente colpiti dalla gentilezza, professionalità e correttezza riscontrate in Madian. Persona affidabile e piacevole. Trattativa veloce e trasparente. Consiglio vivamente. Donato e Patrizia"</p>
              <p className="text-amber-600 text-xs font-bold">dmastroberti</p>
            </div>
            <div className="bg-white border border-amber-100 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Servizio eccellente, contatto rapido e professionale, grande serietà durante tutta la trattativa. La vendita si è conclusa in tempi brevissimi. Consigliatissimi!"</p>
              <p className="text-amber-600 text-xs font-bold">Franco Gasparoli</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border py-12 bg-amber-50">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-black text-primary">Ritiriamo auto anche a...</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-foreground/65">Giubiasco, Camorino, Cadenazzo e Sant'Antonino. Il ritiro a domicilio è gratuito in tutta la zona.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Giubiasco</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Camorino</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Cadenazzo</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Sant'Antonino</span>
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
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Domande frequenti</h2>
            <p className="text-gray-600 mt-3">Tutto quello che devi sapere sulla vendita della tua auto a Bellinzona.</p>
          </div>
          <div className="space-y-3">
            <details className="group rounded-2xl bg-white border border-amber-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-amber-700">Riesci a ritirare l'auto in giornata?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Spesso sì. Se l'offerta ti va bene e i documenti sono pronti, organizzo il ritiro anche in giornata o entro 24 ore.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-amber-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-amber-700">Puoi passare mentre sono al lavoro?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì. Il ritiro lo facciamo dove è più comodo per te: a casa, al lavoro o in un altro punto concordato.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-amber-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-amber-700">Contanti o bonifico?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Scegli tu. Contanti alla consegna oppure bonifico istantaneo che vedi accreditato prima di lasciarmi l'auto.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-amber-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-amber-700">L'offerta al telefono poi cambia dal vivo?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">No, se l'auto corrisponde a quello che mi hai descritto. Il controllo dal vivo serve solo a confermare le condizioni: niente ribassi a sorpresa all'ultimo momento.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-amber-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-amber-700">Fate anche l'annullamento delle targhe?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì, se serve me ne occupo io insieme al resto della burocrazia, senza costi per te.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-orange-400 to-yellow-400" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/city-bellinzona.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/25 border border-white/35 px-4 py-1.5 rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {' '}Disponibile 7 giorni su 7
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Pronto a vendere la tua
            <br />
            auto a{' '}
            <span className="text-yellow-100">Bellinzona</span>
            ?
          </h2>
          <p className="text-white/90 text-lg mb-10">Vuoi chiudere in fretta e bene? Chiamami o scrivimi su WhatsApp: ti dico subito quanto vale la tua auto.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-all shadow-lg">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scrivimi su WhatsApp
            </a>
            <a href={TEL} className="bg-white text-amber-700 font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2 text-lg hover:bg-amber-50 hover:scale-105 transition-all shadow-lg">
              <Phone className="w-6 h-6" />
              {' '}Chiama ora
            </a>
          </div>
          <Link href="/valutazione-gratuita" className="mt-5 inline-block text-white underline underline-offset-4 hover:text-yellow-100 font-semibold">Valutazione gratuita online</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
