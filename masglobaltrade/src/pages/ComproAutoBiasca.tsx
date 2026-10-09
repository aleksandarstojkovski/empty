import { Link } from "wouter";
import SiteLayout from "../components/SiteLayout";
import { Phone, Star, Banknote, MapPin, Clock, Zap, Camera, TrendingUp, Quote, Shield, House } from "../components/icons";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function ComproAutoBiasca() {
  usePageMeta("Compro auto a Biasca | Ritiro in valle", "Vendi la tua auto a Biasca, in Riviera, Leventina o valle di Blenio. Offerta gratuita, pagamento immediato e ritiro a domicilio fino ad Airolo.");
  return (
    <SiteLayout className="bg-background page-city">
      <main>
        <section className="pt-32 pb-24 bg-gradient-to-br from-primary via-[#0f2a45] to-[#1a2f4c] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 70% 40%, #06b6d4 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, #7c3aed 0%, transparent 45%)" }} />
          <div className="absolute top-20 right-[15%] w-3 h-3 rounded-full bg-cyan-400/40 animate-pulse" />
          <div className="absolute top-40 right-[25%] w-2 h-2 rounded-full bg-violet-400/40 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-20 left-[10%] w-4 h-4 rounded-full bg-cyan-300/30 animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm" style={{ opacity: "1", transform: "none" }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-semibold text-sm tracking-wide">Servizio attivo in Riviera, Leventina e valle di Blenio</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight" style={{ opacity: "1", transform: "none" }}>
                Compro auto a Biasca, in Riviera e nelle{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Tre Valli</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-10" style={{ opacity: "1", transform: "none" }}>Vengo io da te, da Biasca fino ad Airolo. Valutazione gratuita e pagamento immediato.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4" style={{ opacity: "1", transform: "none" }}>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] shadow-lg" data-testid="btn-city-whatsapp">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Scrivimi su WhatsApp
                </a>
                <a href={TEL} className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all hover:scale-105 backdrop-blur-sm" data-testid="btn-city-call">
                  <Phone className="w-5 h-5" />
                  Chiama ora
                </a>
              </div>
              <div className="mt-12 flex items-center justify-center gap-6 flex-wrap" style={{ opacity: "1" }}>
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <div className="flex gap-0.5">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="font-bold text-white">4.9</span>
                  {' '}· oltre 110 recensioni Google
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="text-white/60 text-sm flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>
                    Risposta in{' '}
                    <span className="text-white font-semibold">poche ore</span>
                  </span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="text-white/60 text-sm flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>
                    <span className="text-white font-semibold">+10 anni</span>
                    {' '}di esperienza
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-black text-primary text-center mb-10">Compro auto usate nelle Tre Valli</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <p className="text-foreground/75 text-lg leading-relaxed">Sono Madian di MAS Global Trade. Compro auto usate da privati a Biasca e in tutte le Tre Valli: Riviera, Leventina e valle di Blenio. Qui molti pensano che per vendere un'auto convenga scendere a Bellinzona o a Lugano. Non serve: vengo io, fino ad Airolo, e il ritiro non ti costa niente.</p>
              <p className="text-foreground/75 text-lg leading-relaxed">La distanza non cambia il prezzo. L'offerta la faccio sui dati dell'auto: marca, modello, anno, chilometri e condizioni. Se ti va bene, fissiamo il ritiro e ricevi il pagamento sul posto, prima di consegnarmi il veicolo.</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-cyan-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-black text-primary mb-4">Che auto compro?</h2>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">Auto di ogni tipo e condizione, comprese quelle segnate dagli inverni di montagna: ruggine, tanti chilometri, guasti, collaudo scaduto. Compro anche furgoni, pickup e 4x4 da lavoro, molto richiesti in valle e fuori.</p>
          </div>
        </section>
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #06b6d4 0%, transparent 70%)" }} />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14">
              <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Come funziona</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary">Tre passi. Zero stress.</h2>
              <p className="text-foreground/50 mt-3 max-w-md mx-auto">Tutto risolto in giornata, burocrazia inclusa. Tu non devi fare nulla.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto relative">
              <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-0.5 bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300 z-0" />
              <div className="relative p-7 rounded-3xl border-2 cursor-pointer transition-all duration-300 z-10 bg-white border-border hover:border-gray-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full text-white font-black text-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-cyan-500 to-blue-500">1</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-5 bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Camera className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-center mb-2 text-primary">Mandi le foto</h3>
                <p className="text-foreground/65 text-sm leading-relaxed text-center">Alcune foto dell'auto e la carta grigia su WhatsApp. Basta il telefono, nessuno spostamento.</p>
                <div className="mt-4 text-center text-xs font-semibold px-3 py-1.5 rounded-full inline-block bg-gray-100 text-gray-500">Interno · Esterno · Carta grigia</div>
              </div>
              <div className="relative p-7 rounded-3xl border-2 cursor-pointer transition-all duration-300 z-10 bg-white border-border hover:border-gray-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full text-white font-black text-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-violet-500 to-purple-600">2</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-5 bg-gradient-to-br from-violet-500 to-purple-600">
                  <House className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-center mb-2 text-primary">Vengo da te</h3>
                <p className="text-foreground/65 text-sm leading-relaxed text-center">Valutazione gratuita a domicilio in Riviera, Leventina e valle di Blenio. Nessun costo di trasferta.</p>
                <div className="mt-4 text-center text-xs font-semibold px-3 py-1.5 rounded-full inline-block bg-gray-100 text-gray-500">Riviera · Leventina · Blenio</div>
              </div>
              <div className="relative p-7 rounded-3xl border-2 cursor-pointer transition-all duration-300 z-10 bg-white border-border hover:border-gray-300 hover:shadow-md" style={{ opacity: "1", transform: "none" }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full text-white font-black text-lg flex items-center justify-center shadow-lg bg-gradient-to-br from-emerald-500 to-teal-500">3</div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mt-4 mb-5 bg-gradient-to-br from-emerald-500 to-teal-500">
                  <Banknote className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-black text-center mb-2 text-primary">Pagamento sul posto</h3>
                <p className="text-foreground/65 text-sm leading-relaxed text-center">Contanti o bonifico istantaneo. Mi occupo di tutta la burocrazia. Tu non devi fare nulla.</p>
                <div className="mt-4 text-center text-xs font-semibold px-3 py-1.5 rounded-full inline-block bg-gray-100 text-gray-500">Contanti · Bonifico istantaneo</div>
              </div>
            </div>
            <p className="text-center text-xs text-foreground/40 mt-6">Clicca su un passo per scoprire i dettagli</p>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-br from-primary via-[#0f2a45] to-[#162840] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(ellipse at 80% 20%, #06b6d4 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, #7c3aed 0%, transparent 40%)" }} />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-14">
              <span className="inline-block bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-white/15">Perché scegliere MAS Global Trade</span>
              <h2 className="text-3xl md:text-4xl font-black">Oltre 110 recensioni e una persona reale</h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto mt-4">Oltre 110 recensioni Google con media 4.9. Un solo interlocutore dall'inizio alla fine: rispondo io su WhatsApp e al telefono, 7 giorni su 7, e sono io che vengo al ritiro.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="flex items-start gap-4 bg-white/8 hover:bg-white/14 rounded-2xl p-5 border border-white/10 hover:border-white/25 transition-all cursor-default backdrop-blur-sm" style={{ opacity: "1", transform: "none" }}>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base leading-snug">Oltre 110 recensioni su Google, media 4.9 stelle</span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/8 hover:bg-white/14 rounded-2xl p-5 border border-white/10 hover:border-white/25 transition-all cursor-default backdrop-blur-sm" style={{ opacity: "1", transform: "none" }}>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base leading-snug">Fino a 2.000 CHF in più rispetto alla concessionaria</span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/8 hover:bg-white/14 rounded-2xl p-5 border border-white/10 hover:border-white/25 transition-all cursor-default backdrop-blur-sm" style={{ opacity: "1", transform: "none" }}>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base leading-snug">Ritiro gratuito in tutta la zona Riviera</span>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/8 hover:bg-white/14 rounded-2xl p-5 border border-white/10 hover:border-white/25 transition-all cursor-default backdrop-blur-sm" style={{ opacity: "1", transform: "none" }}>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white text-base leading-snug">Oltre 10 anni di esperienza in Canton Ticino</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Mandami le foto su WhatsApp
              </a>
              <a href={TEL} className="bg-white text-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                <Phone className="w-5 h-5" />
                +41 79 863 53 91
              </a>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-block bg-accent/10 text-accent font-bold text-sm px-4 py-1.5 rounded-full mb-3">Operazione reale a Biasca</span>
              <h2 className="text-2xl md:text-3xl font-black text-primary">BMW X1 2015: ritirata a Biasca</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg" style={{ opacity: "1", transform: "none" }}>
                <img src="/auto7.webp" alt="BMW X1 2015 acquistata a Biasca" width="900" height="1200" className="w-full h-64 md:h-72 object-cover" loading="lazy" decoding="async" />
              </div>
              <div style={{ opacity: "1", transform: "none" }}>
                <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-lg text-foreground/80 leading-relaxed italic">Un BMW X1 bianco a Biasca con 110'000 km, in ottimo stato di manutenzione. Il cliente non voleva spendere settimane su AutoScout. Chiamata, visione e accordo in meno di 48 ore.</p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-black text-sm shrink-0">M</div>
                  <div>
                    <p className="font-bold text-primary">Madian, MAS Global Trade</p>
                    <p className="text-sm text-foreground/60">Acquirente diretto · Biasca e dintorni</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#20bd5a] transition-colors text-sm">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-4 h-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    {' '}Scrivimi su WhatsApp
                  </a>
                  <a href={TEL} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                    <Phone className="w-4 h-4" />
                    {' '}Chiama ora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gradient-to-b from-[#F0F4FF] to-[#F8F9FA] border-t border-border relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">Recensioni Google verificate</span>
              <h2 className="text-3xl md:text-4xl font-black text-primary">Cosa dicono i nostri clienti</h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex gap-0.5">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </div>
                <span className="font-black text-primary text-xl">4.9</span>
                <span className="text-foreground/50 text-sm">· oltre 110 recensioni</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col cursor-default transition-all" style={{ opacity: "1", transform: "none" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-sm" style={{ backgroundColor: "#4285F4" }}>M</div>
                  <div>
                    <p className="font-bold text-primary text-sm">MariaRosa Giambrone</p>
                    <div className="flex gap-0.5 mt-0.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic flex-1">"Ottima esperienza! Cercavo qualcuno di affidabile per vendere la mia auto e qui ho trovato disponibilità, chiarezza e professionalità. Madian è una persona seria e gentile: mi ha spiegato tutto nei dettagli e la trattativa è stata rapida e semplice, senza problemi."</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-foreground/60">
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4" />
                  </svg>
                  Recensione Google verificata
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col cursor-default transition-all" style={{ opacity: "1", transform: "none" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-sm" style={{ backgroundColor: "#34A853" }}>J</div>
                  <div>
                    <p className="font-bold text-primary text-sm">Johannus Demers</p>
                    <div className="flex gap-0.5 mt-0.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic flex-1">"Ho avuto contatti con Madian per la vendita di un'auto. Posso solo dire cose molto positive. Madian è una persona molto disponibile, si è preso il tempo di venire a vedere l'auto anche durante una vacanza in Ticino. Lui non complica le cose, è diretto e trasparente."</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-foreground/60">
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4" />
                  </svg>
                  Recensione Google verificata
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col cursor-default transition-all" style={{ opacity: "1", transform: "none" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base shrink-0 shadow-sm" style={{ backgroundColor: "#FBBC05" }}>F</div>
                  <div>
                    <p className="font-bold text-primary text-sm">Franco Gasparoli</p>
                    <div className="flex gap-0.5 mt-0.5">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed italic flex-1">"Ho venduto la mia auto alla MAS GLOBAL TRADE e sono rimasto molto soddisfatto dell'esperienza. Servizio eccellente, contatto rapido e professionale, grande serietà e disponibilità durante tutta la trattativa. La vendita si è conclusa in tempi brevissimi. Consigliatissimi!"</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-foreground/60">
                  <svg aria-hidden="true" width="12" height="12" viewBox="0 0 488 512">
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="#4285F4" />
                  </svg>
                  Recensione Google verificata
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-border py-12 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-2xl font-black text-primary">Ritiriamo auto anche a...</h2>
            <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-foreground/65">Airolo, Faido, Acquarossa e Olivone. Il ritiro a domicilio è gratuito in tutta la zona.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Airolo</span>
              <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Faido</span>
              <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Acquarossa</span>
              <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-primary">Olivone</span>
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
        <section className="py-20 bg-cyan-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-primary">Domande frequenti</h2>
              <p className="text-foreground/65 mt-3">Tutto quello che devi sapere sulla vendita della tua auto nelle Tre Valli.</p>
            </div>
            <div className="space-y-3">
              <details className="group rounded-2xl bg-white border border-cyan-100 px-5 py-4 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-bold text-primary marker:hidden group-open:text-cyan-700">Vieni davvero fino in valle senza costi?</summary>
                <p className="mt-3 text-foreground/70 leading-relaxed">Sì. Il ritiro a domicilio è incluso ovunque, da Biasca ad Airolo. La distanza non tocca né il prezzo né le condizioni.</p>
              </details>
              <details className="group rounded-2xl bg-white border border-cyan-100 px-5 py-4 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-bold text-primary marker:hidden group-open:text-cyan-700">La mia auto ha ruggine e il collaudo scaduto. Ha ancora un valore?</summary>
                <p className="mt-3 text-foreground/70 leading-relaxed">Quasi sempre sì. Mandami foto e dati e ti dico onestamente quanto posso offrirti. La valutazione non costa niente.</p>
              </details>
              <details className="group rounded-2xl bg-white border border-cyan-100 px-5 py-4 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-bold text-primary marker:hidden group-open:text-cyan-700">Compri anche 4x4 e furgoni da lavoro?</summary>
                <p className="mt-3 text-foreground/70 leading-relaxed">Sì, e volentieri: sono veicoli richiesti. Li valuto anche con chilometraggi alti.</p>
              </details>
              <details className="group rounded-2xl bg-white border border-cyan-100 px-5 py-4 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-bold text-primary marker:hidden group-open:text-cyan-700">Come fissiamo il ritiro?</summary>
                <p className="mt-3 text-foreground/70 leading-relaxed">Dopo l'offerta accettata concordiamo giorno e ora. Spesso riesco a passare entro 24 ore, anche in valle.</p>
              </details>
              <details className="group rounded-2xl bg-white border border-cyan-100 px-5 py-4 shadow-sm">
                <summary className="cursor-pointer list-none pr-8 font-bold text-primary marker:hidden group-open:text-cyan-700">Il pagamento avviene sul posto?</summary>
                <p className="mt-3 text-foreground/70 leading-relaxed">Sì, al ritiro: contanti o bonifico istantaneo, come preferisci, prima della consegna dell'auto.</p>
              </details>
            </div>
          </div>
        </section>
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0f2a45] to-[#1a1a2e]" />
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, #06b6d4 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, #7c3aed 0%, transparent 45%)" }} />
          <div className="absolute top-8 left-[20%] w-2 h-2 rounded-full bg-cyan-400/60 animate-pulse" />
          <div className="absolute top-16 right-[30%] w-3 h-3 rounded-full bg-violet-400/40 animate-pulse" style={{ animationDelay: "0.7s" }} />
          <div className="absolute bottom-12 left-[40%] w-2 h-2 rounded-full bg-emerald-400/50 animate-pulse" style={{ animationDelay: "1.3s" }} />
          <div className="container mx-auto px-4 relative text-center">
            <div style={{ opacity: "1", transform: "none" }}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full text-white/70 text-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Disponibile 7 giorni su 7
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Pronto a vendere la tua auto a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Biasca</span>
                ?
              </h2>
              <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">Hai un'auto da vendere in valle? Scrivimi su WhatsApp con i dati e qualche foto: ti rispondo in giornata.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-10 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] shadow-lg">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Scrivimi su WhatsApp
                </a>
                <a href={TEL} className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-10 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all hover:scale-105 backdrop-blur-sm">
                  <Phone className="w-6 h-6" />
                  Chiama ora
                </a>
              </div>
              <Link href="/valutazione-gratuita" className="mt-5 inline-block text-cyan-200 underline underline-offset-4 hover:text-white font-semibold">Valutazione gratuita online</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
