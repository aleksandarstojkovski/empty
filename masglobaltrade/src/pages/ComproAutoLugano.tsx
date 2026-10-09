import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, Star, Banknote, MapPin, Clock, Zap, Camera, TrendingUp, Quote, Shield, House } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComproAutoLugano() {
  usePageMeta("Compro auto a Lugano | Valutazione gratuita", "Vendi la tua auto a Lugano e nel Luganese con una valutazione gratuita, pagamento immediato e ritiro a domicilio concordato senza perdite di tempo.");
  return (
    <SiteLayout className="bg-white page-city-lugano">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-full md:w-[55%] pointer-events-none select-none">
          <img src="/city-lugano.webp" alt="Lugano" width="1200" height="1200" className="w-full h-full object-cover object-center" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/20" />
        </div>
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-24 md:pt-0 md:pb-0">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 bg-sky-50 px-4 py-2 rounded-full border border-sky-200" style={{ opacity: "1", transform: "none" }}>
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="text-sky-700 text-sm font-medium">Servizio attivo a Lugano</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.08] mb-5" style={{ opacity: "1", transform: "none" }}>
              Compro auto a Lugano
              <br />
              e in tutto il{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Luganese</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed" style={{ opacity: "1", transform: "none" }}>Vuoi vendere la tua auto? Valutazione gratuita, pagamento immediato e ritiro a domicilio. Parli direttamente con me, senza intermediari.</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10" style={{ opacity: "1", transform: "none" }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#0B6B38] hover:bg-[#07502A] text-white font-bold px-7 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(11,107,56,0.4)] shadow-lg">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">Compro auto usate a Lugano senza intermediari</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-700 text-lg leading-relaxed">Sono Madian di MAS Global Trade. Compro auto usate da privati a Lugano e in tutto il Luganese, in qualsiasi condizione. Auto con tanti chilometri, incidentate, guaste o semplicemente da cambiare: le valuto tutte, gratuitamente e senza impegno.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Niente annunci online, niente sconosciuti che vengono a casa tua a trattare, niente settimane di attesa. Mi mandi i dati dell'auto, ti faccio un'offerta chiara e, se ti va bene, vengo io a ritirarla. Il pagamento lo ricevi subito, in contanti o con bonifico istantaneo, prima della consegna del veicolo.</p>
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
              <h3 className="text-gray-900 font-bold text-xl mb-2">Contattami</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Chiamami o scrivimi su WhatsApp con marca, modello, anno e chilometri. Rispondo personalmente, 7 giorni su 7.</p>
              <span className="mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-400">2 minuti</span>
            </div>
            <div className="relative p-7 rounded-3xl border cursor-pointer transition-all duration-300 bg-white border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
              <div className="text-6xl font-black mb-4 leading-none select-none text-sky-100">02</div>
              <House className="w-7 h-7 mb-3 text-gray-300" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Ricevi l'offerta</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Ti do una valutazione onesta basata sul mercato reale. È gratuita e senza impegno: decidi tu se accettare.</p>
              <span className="mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-400">Gratuita</span>
            </div>
            <div className="relative p-7 rounded-3xl border cursor-pointer transition-all duration-300 bg-white border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
              <div className="text-6xl font-black mb-4 leading-none select-none text-sky-100">03</div>
              <Banknote className="w-7 h-7 mb-3 text-gray-300" />
              <h3 className="text-gray-900 font-bold text-xl mb-2">Ritiro e pagamento</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Vengo a ritirare l'auto dove vuoi tu, a Lugano o in qualsiasi comune del Luganese. Pagamento immediato e burocrazia gestita da me.</p>
              <span className="mt-4 inline-block text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-400">Stesso giorno</span>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">Clicca su un passo per i dettagli</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900">Che auto compro a Lugano?</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">Compro auto di ogni marca e in ogni condizione: berline, SUV, utilitarie, furgoni e pickup. Anche auto incidentate, con il motore rotto, con molti chilometri o non più collaudabili. Se l'auto non parte, non è un problema: organizzo io il trasporto.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Berline, SUV, utilitarie e furgoni</p>
                <p className="text-gray-400 text-xs">Ogni marca e ogni modello</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Auto con tanti chilometri</p>
                <p className="text-gray-400 text-xs">Valutazione onesta e trasparente</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Auto incidentate o guaste</p>
                <p className="text-gray-400 text-xs">Ritiro organizzato anche se non parte</p>
              </div>
            </div>
            <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100 hover:border-sky-300 hover:bg-sky-100 transition-all" style={{ opacity: "1", transform: "none" }}>
              <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-0.5">Auto non collaudabili</p>
                <p className="text-gray-400 text-xs">Burocrazia e trasporto gestiti da me</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#0B6B38] hover:bg-[#07502A] text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105">
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
            <span className="inline-block bg-sky-100 text-sky-600 font-bold text-sm px-4 py-1.5 rounded-full mb-3">Perché scegliere MAS Global Trade</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Oltre 110 recensioni e una persona reale</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3 leading-relaxed">Su Google trovi oltre 110 recensioni con una media di 4.9 stelle, lasciate da persone che hanno venduto la loro auto a me. Non sono un call center e non sono un portale: sono una persona, con nome e faccia, che risponde al telefono e viene di persona al ritiro. Parlo italiano, tedesco, francese e inglese.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl shadow-sky-100/80 ring-1 ring-sky-100" style={{ opacity: "1", transform: "none" }}>
              <img src="/auto1.webp" alt="Mercedes GLA 200" width="900" height="1200" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
            </div>
            <div style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-3 mb-5">
                <Quote className="w-6 h-6 text-sky-500 shrink-0 mt-1" />
                <p className="text-gray-700 text-lg italic leading-relaxed">Un privato di Lugano ci ha contattato la mattina per la sua GLA 200 nera. Siamo andati nel pomeriggio, accordo in 20 minuti, pagamento immediato e ritiro in giornata. Zero stress, zero attese.</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-sky-100">
                <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-black">M</div>
                <div>
                  <p className="text-gray-900 font-bold">Madian, MAS Global Trade</p>
                  <p className="text-gray-400 text-sm">Acquirente diretto · Lugano e dintorni</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#0B6B38] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#07502A] transition-colors text-sm">
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
      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
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
              <span className="text-gray-500 text-sm">· oltre 110 recensioni Google</span>
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
      <section className="py-10 bg-white border-t border-sky-100">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Compro auto in tutto il Luganese</h2>
          <p className="text-gray-600 text-sm leading-relaxed">Opero ogni giorno a Lugano e in tutto il Luganese: Massagno, Paradiso, Viganello, Pregassona, Breganzona, Agno, Bioggio, Manno, Caslano, Ponte Tresa, Melide, Morcote, Tesserete e tutti i comuni della zona. Ovunque tu sia, il ritiro a domicilio è incluso e gratuito.</p>
        </div>
      </section>
      <section className="border-y border-border py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-black text-primary">Ritiriamo auto anche a...</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-foreground/65">Paradiso, Massagno, Morcote, Melide, Agno, Caslano e Ponte Tresa. Il ritiro a domicilio è gratuito in tutta la zona.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Paradiso</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Massagno</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Morcote</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Melide</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Agno</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Caslano</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Ponte Tresa</span>
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
            <h2 className="text-3xl font-black text-gray-900">Domande frequenti</h2>
            <p className="text-gray-600 mt-3">Tutto quello che devi sapere sulla vendita della tua auto a Lugano.</p>
          </div>
          <div className="space-y-3">
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Quanto vale la mia auto?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Dipende da marca, modello, anno, chilometri e condizioni. Mandami questi dati su WhatsApp, anche con qualche foto, e ti do una valutazione in tempi brevi. È gratuita e non ti impegna a niente.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Compri anche auto incidentate o guaste?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì. Compro auto in qualsiasi condizione, anche se non partono o non sono più collaudabili. Il trasporto lo organizzo io.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Quanto tempo ci vuole per vendere?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Se accetti l'offerta, spesso chiudiamo in 24 ore: appuntamento, controllo dell'auto, pagamento e ritiro.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Come avviene il pagamento?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Subito, al momento del ritiro. In contanti o con bonifico istantaneo, come preferisci. Prima i soldi, poi l'auto.</p>
            </details>
            <details className="group rounded-2xl bg-white border border-sky-100 px-5 py-4 shadow-sm">
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-sky-700">Chi si occupa dei documenti?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Io. Contratto di vendita, passaggio e, se serve, annullamento delle targhe: gestisco tutto io, senza costi per te.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/city-lugano.webp')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {' '}Disponibile 7 giorni su 7
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Pronto a vendere la tua
            <br />
            auto a{' '}
            <span className="text-cyan-100">Lugano</span>
            ?
          </h2>
          <p className="text-white/80 text-lg mb-10">Vuoi sapere quanto vale la tua auto? Chiamami o scrivimi ora su WhatsApp. Ti rispondo in giornata.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#0B6B38] hover:bg-[#07502A] text-white font-bold px-10 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(11,107,56,0.5)] transition-all shadow-lg">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scrivimi su WhatsApp
            </a>
            <a href={TEL} className="bg-white text-sky-600 font-bold px-10 py-4 rounded-2xl flex items-center justify-center gap-2 text-lg hover:bg-sky-50 hover:scale-105 transition-all shadow-lg">
              <Phone className="w-6 h-6" />
              {' '}Chiama ora
            </a>
          </div>
          <Link href="/valutazione-gratuita" className="mt-5 inline-block text-white underline underline-offset-4 hover:text-cyan-100 font-semibold">Valutazione gratuita online</Link>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Paradiso</span>
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Massagno</span>
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Morcote</span>
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Melide</span>
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Agno</span>
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Caslano</span>
            <span className="px-3 py-1 bg-white/15 text-white/80 text-xs rounded-full border border-white/20">Ponte Tresa</span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
