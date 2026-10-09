import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, Star, Banknote, MapPin, ShieldCheck, Clock, Zap, Camera, Quote, House } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComproAutoMendrisio() {
  usePageMeta("Compro auto a Mendrisio | Pagamento immediato", "Acquistiamo auto a Mendrisio, Chiasso e nel Mendrisiotto. Valutazione gratuita, pagamento immediato e ritiro a domicilio senza pratiche a tuo carico.");
  return (
    <SiteLayout className="page-city-mendrisio">
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #FDF1E8 0%, #FEF7ED 50%, #FFF8F0 100%)" }}>
        <div className="absolute top-20 left-[5%] w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #C2410C 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 right-[10%] w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #166534 0%, transparent 70%)" }} />
        <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border" style={{ backgroundColor: "rgba(194, 65, 12, 0.08)", borderColor: "rgba(194, 65, 12, 0.2)", opacity: "1", transform: "none" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#C2410C" }} />
                <span className="text-sm font-medium" style={{ color: "#9A3412" }}>Servizio attivo nel Mendrisiotto</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.1] mb-5" style={{ color: "rgb(28, 10, 0)", opacity: "1", transform: "none" }}>
                Compro auto a Mendrisio
                <br />
                e in tutto il{' '}
                <span style={{ color: "#C2410C" }}>Mendrisiotto</span>
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgb(92, 58, 30)", opacity: "1", transform: "none" }}>Da Chiasso a Stabio, ritiro la tua auto a domicilio con pagamento immediato.</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-10" style={{ opacity: "1", transform: "none" }}>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-7 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all hover:scale-105 hover:shadow-[0_0_28px_rgba(37,211,102,0.4)] shadow-lg">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {' '}Scrivimi su WhatsApp
                </a>
                <a href={TEL} className="font-bold px-7 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all border-2" style={{ color: "#C2410C", borderColor: "#C2410C", backgroundColor: "rgba(194,65,12,0.06)" }}>
                  <Phone className="w-5 h-5" />
                  {' '}Chiama ora
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm" style={{ color: "rgb(154, 52, 18)", opacity: "1" }}>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  {' '}4.9 · oltre 110 recensioni
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {' '}Risposta in poche ore
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  {' '}+10 anni di esperienza
                </span>
              </div>
            </div>
            <div className="relative" style={{ opacity: "1", transform: "none" }}>
              <div className="absolute -bottom-6 -right-4 w-full h-full rounded-3xl opacity-30" style={{ background: "linear-gradient(135deg, #C2410C, #9A3412)", filter: "blur(24px)", transform: "scale(0.95)" }} />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: "0 32px 64px rgba(194,65,12,0.25), 0 8px 24px rgba(0,0,0,0.15)" }}>
                <img src="/city-mendrisio.webp" alt="Mendrisiotto vigneti" width="1200" height="1200" className="w-full h-[420px] md:h-[500px] object-cover" loading="eager" decoding="async" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(194,65,12,0.2) 0%, transparent 50%)" }} />
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-orange-100">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Il Mendrisiotto</div>
                <div className="text-sm font-black" style={{ color: "#C2410C" }}>Terra di vigneti e storia</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10" style={{ color: "#1C0A00" }}>Compro auto usate a Mendrisio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-gray-700 text-lg leading-relaxed">Sono Madian di MAS Global Trade. Opero regolarmente a Mendrisio e in tutto il Mendrisiotto, dove ritiro auto usate da privati con valutazione gratuita e pagamento immediato. In molti casi il ritiro avviene entro 24 ore dalla richiesta.</p>
            <p className="text-gray-700 text-lg leading-relaxed">Nel Mendrisiotto mi capita spesso di comprare auto che i garage valutano poco o rifiutano: diesel con tanti chilometri, auto datate ma funzionanti, veicoli da esportazione. Per me hanno un valore anche quelle, e te lo dico chiaramente in fase di offerta, senza tirare sul prezzo dal vivo.</p>
          </div>
        </div>
      </section>
      <section className="py-16" style={{ backgroundColor: "#FEF7ED" }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-4" style={{ color: "#1C0A00" }}>Che auto compro?</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Auto di ogni marca, anche con chilometraggi alti, danni da grandine, incidenti o guasti meccanici. Berline, SUV, utilitarie, furgoni e pickup. Le auto adatte all'esportazione le compro anche quando il mercato locale non le vuole più.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#C2410C" }}>Come funziona</span>
            <h2 className="text-4xl font-black mt-3" style={{ color: "#1C0A00" }}>Tre passi, nessuna complicazione.</h2>
            <p className="text-gray-400 mt-3">Dalla prima foto al pagamento: spesso poche ore.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center group" style={{ opacity: "1", transform: "none" }}>
              <div className="relative mb-6">
                <div className="text-[8rem] font-black leading-none select-none" style={{ color: "#FDE8D8" }}>01</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: "#C2410C" }}>
                    <Camera className="w-9 h-9 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: "#1C0A00" }}>Mandi le foto</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">Scatta alcune foto dell'auto e della carta grigia. Le mandi su WhatsApp, ci vogliono 2 minuti.</p>
            </div>
            <div className="text-center group" style={{ opacity: "1", transform: "none" }}>
              <div className="relative mb-6">
                <div className="text-[8rem] font-black leading-none select-none" style={{ color: "#D4EDDA" }}>02</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: "#166534" }}>
                    <House className="w-9 h-9 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: "#1C0A00" }}>Vengo da te</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">Valutazione gratuita a domicilio. Mi muovo in tutto il Mendrisiotto senza costi aggiuntivi.</p>
            </div>
            <div className="text-center group" style={{ opacity: "1", transform: "none" }}>
              <div className="relative mb-6">
                <div className="text-[8rem] font-black leading-none select-none" style={{ color: "#FEF3C7" }}>03</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: "#D97706" }}>
                    <Banknote className="w-9 h-9 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: "#1C0A00" }}>Pago sul posto</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">Contanti o bonifico istantaneo. Burocrazia, targhe e carta grigia le gestisco io al 100%.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Mandami le foto su WhatsApp
            </a>
            <a href={TEL} className="font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all border-2" style={{ color: "#C2410C", borderColor: "#C2410C" }}>
              <Phone className="w-5 h-5" />
              {' '}Chiama Madian
            </a>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: "linear-gradient(135deg, #FDF1E8 0%, #FEF7ED 100%)" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: "#1C0A00" }}>
            Perché scegliere{' '}
            <span style={{ color: "#C2410C" }}>MAS Global Trade</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">110 e più recensioni su Google, media 4.9. Rispondo io, tutti i giorni, in quattro lingue. Il prezzo che concordiamo al telefono è il prezzo che ricevi al ritiro, se l'auto corrisponde alla descrizione.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all" style={{ borderColor: "rgba(194, 65, 12, 0.1)", opacity: "1", transform: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-rose-100 text-rose-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-sm mb-0.5" style={{ color: "#1C0A00" }}>Risposta in poche ore</p>
                <p className="text-gray-400 text-xs">7 giorni su 7, feste incluse</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all" style={{ borderColor: "rgba(194, 65, 12, 0.1)", opacity: "1", transform: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-amber-100 text-amber-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-sm mb-0.5" style={{ color: "#1C0A00" }}>+2.000 CHF in più della concessionaria</p>
                <p className="text-gray-400 text-xs">Nessun intermediario, margine a te</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all" style={{ borderColor: "rgba(194, 65, 12, 0.1)", opacity: "1", transform: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-emerald-100 text-emerald-700">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-sm mb-0.5" style={{ color: "#1C0A00" }}>Ritiro gratuito nel Mendrisiotto</p>
                <p className="text-gray-400 text-xs">Da Chiasso a Riva San Vitale e oltre</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-5 bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all" style={{ borderColor: "rgba(194, 65, 12, 0.1)", opacity: "1", transform: "none" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-sky-100 text-sky-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-sm mb-0.5" style={{ color: "#1C0A00" }}>Burocrazia completamente gestita</p>
                <p className="text-gray-400 text-xs">Targhe, carta grigia, pratiche incluse</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-y" style={{ borderColor: "rgba(194,65,12,0.1)" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="inline-block font-bold text-sm px-4 py-1.5 rounded-full mb-3" style={{ backgroundColor: "rgba(194,65,12,0.1)", color: "#C2410C" }}>Operazione reale nel Mendrisiotto</span>
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: "#1C0A00" }}>MINI Cooper S Clubman 2019: ritirata a Mendrisio</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(194,65,12,0.15), 0 4px 16px rgba(0,0,0,0.1)" }}>
              <img src="/auto4.webp" alt="MINI Cooper S Clubman" width="900" height="1200" className="w-full h-64 object-cover" loading="lazy" decoding="async" />
            </div>
            <div>
              <div className="flex gap-3 mb-5">
                <Quote className="w-6 h-6 shrink-0 mt-1" />
                <p className="text-gray-600 text-lg italic leading-relaxed">Una MINI Cooper S Clubman nera a Mendrisio, il cliente aveva già ricevuto offerte basse dai concessionari. Noi abbiamo valutato correttamente e chiuso in giornata.</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t" style={{ borderColor: "rgba(194,65,12,0.1)" }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black" style={{ backgroundColor: "#C2410C" }}>M</div>
                <div>
                  <p className="font-bold" style={{ color: "#1C0A00" }}>Madian, MAS Global Trade</p>
                  <p className="text-gray-400 text-sm">Acquirente diretto · Mendrisiotto</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  {' '}WhatsApp
                </a>
                <a href={TEL} className="inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl text-sm border-2 transition-colors" style={{ color: "#C2410C", borderColor: "#C2410C" }}>
                  <Phone className="w-4 h-4" />
                  {' '}Chiama ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20" style={{ background: "#FDF8F3" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-2" style={{ color: "#1C0A00" }}>Cosa dicono i nostri clienti</h2>
            <div className="flex justify-center items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              <span className="font-black text-xl ml-2" style={{ color: "#1C0A00" }}>4.9</span>
              <span className="text-gray-500 text-sm ml-1">· oltre 110 recensioni Google</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border hover:-translate-y-1 transition-all shadow-sm" style={{ borderColor: "rgba(194, 65, 12, 0.1)", boxShadow: "rgba(194, 65, 12, 0.06) 0px 4px 20px", opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Ottima esperienza! Cercavo qualcuno di affidabile per vendere la mia auto e qui ho trovato disponibilità, chiarezza e professionalità. Madian è una persona seria e gentile."</p>
              <p className="text-xs font-bold" style={{ color: "#C2410C" }}>MariaRosa Giambrone</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border hover:-translate-y-1 transition-all shadow-sm" style={{ borderColor: "rgba(194, 65, 12, 0.1)", boxShadow: "rgba(194, 65, 12, 0.06) 0px 4px 20px", opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"Favorevolmente colpiti dalla gentilezza, professionalità e correttezza riscontrate in Madian. Persona affidabile e piacevole. Trattativa veloce e trasparente. Donato e Patrizia"</p>
              <p className="text-xs font-bold" style={{ color: "#C2410C" }}>dmastroberti</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border hover:-translate-y-1 transition-all shadow-sm" style={{ borderColor: "rgba(194, 65, 12, 0.1)", boxShadow: "rgba(194, 65, 12, 0.06) 0px 4px 20px", opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5 mb-3">
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed mb-4">"È stato molto onesto e la trattativa rapida. È una persona molto corretta, lo contatterò sicuramente per una futura vendita."</p>
              <p className="text-xs font-bold" style={{ color: "#C2410C" }}>Alessandro Licone</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-border py-12 bg-[#FDF8F3]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-black text-primary">Ritiriamo auto anche a...</h2>
          <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-foreground/65">Chiasso, Balerna, Stabio, Riva San Vitale, Novazzano, Vacallo e Coldrerio. Il ritiro a domicilio è gratuito in tutta la zona.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Chiasso</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Balerna</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Stabio</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Riva San Vitale</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Novazzano</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Vacallo</span>
            <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Coldrerio</span>
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
      <section className="py-20" style={{ backgroundColor: "#FEF7ED" }}>
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black" style={{ color: "#1C0A00" }}>Domande frequenti</h2>
            <p className="text-gray-600 mt-3">Tutto quello che devi sapere sulla vendita della tua auto nel Mendrisiotto.</p>
          </div>
          <div className="space-y-3">
            <details className="group rounded-2xl bg-white border px-5 py-4 shadow-sm" style={{ borderColor: "rgba(194,65,12,0.12)" }}>
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-orange-700">La mia auto ha più di 200'000 km. La compri?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì. Le auto con molti chilometri hanno mercato, spesso all'estero, e le valuto regolarmente. Mandami i dati e ti faccio un'offerta concreta.</p>
            </details>
            <details className="group rounded-2xl bg-white border px-5 py-4 shadow-sm" style={{ borderColor: "rgba(194,65,12,0.12)" }}>
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-orange-700">Il garage mi ha offerto poco in permuta. Conviene sentirti?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Costa niente scoprirlo: la mia valutazione è gratuita e senza impegno. Confronti le due offerte e decidi.</p>
            </details>
            <details className="group rounded-2xl bg-white border px-5 py-4 shadow-sm" style={{ borderColor: "rgba(194,65,12,0.12)" }}>
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-orange-700">Quanto tempo passa dalla richiesta al ritiro?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">In genere entro 24 ore, se accetti l'offerta e i documenti sono in ordine.</p>
            </details>
            <details className="group rounded-2xl bg-white border px-5 py-4 shadow-sm" style={{ borderColor: "rgba(194,65,12,0.12)" }}>
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-orange-700">Compri anche auto grandinate o con danni estetici?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Sì. Danni da grandine, graffi e ammaccature non fermano l'acquisto: incidono solo sulla valutazione, che resta gratuita.</p>
            </details>
            <details className="group rounded-2xl bg-white border px-5 py-4 shadow-sm" style={{ borderColor: "rgba(194,65,12,0.12)" }}>
              <summary className="cursor-pointer list-none pr-8 font-bold text-gray-900 marker:hidden group-open:text-orange-700">Come mi paghi?</summary>
              <p className="mt-3 text-gray-600 leading-relaxed">Al ritiro, in contanti o con bonifico istantaneo. Prima ricevi i soldi, poi mi consegni auto e chiavi.</p>
            </details>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-400 to-rose-400" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/city-mendrisio.webp')", backgroundSize: "cover", backgroundPosition: "center top" }} />
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/25 border border-white/35 px-4 py-1.5 rounded-full text-white/95 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {' '}Disponibile 7 giorni su 7
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Sei nel Mendrisiotto
            <br />
            e vuoi vendere la tua auto?
          </h2>
          <p className="text-white/90 text-lg mb-10">Vuoi un'offerta concreta per la tua auto? Chiamami o scrivimi su WhatsApp con marca, modello, anno e chilometri.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all shadow-xl">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {' '}Scrivimi su WhatsApp
            </a>
            <a href={TEL} className="bg-white text-orange-600 font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 text-lg hover:bg-orange-50 hover:scale-105 transition-all shadow-lg">
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
