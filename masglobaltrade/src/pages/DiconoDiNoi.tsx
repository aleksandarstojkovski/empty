import SiteLayout from "../components/SiteLayout";
import { Phone, Car, Star, Clock, Quote, Award } from "../components/icons";
import Reviews from "../sections/Reviews";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function DiconoDiNoi() {
  usePageMeta("Recensioni su MAS Global Trade | Clienti in Ticino", "Leggi le recensioni di chi ha venduto l'auto a MAS Global Trade: valutazione chiara, pagamento concordato e ritiro semplice in Canton Ticino.");
  return (
    <SiteLayout className="bg-white page-reviews">
      <section className="relative overflow-hidden bg-white pt-36 pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 to-white pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-sky-200 shadow-sm px-5 py-2.5 rounded-full mb-8" style={{ opacity: "1", transform: "none" }}>
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-gray-700 font-bold text-sm">4.9 su Google · 101 recensioni verificate</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.05] mb-6" style={{ opacity: "1", transform: "none" }}>
              Non te lo diciamo noi.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Lo dicono loro.</span>
            </h1>
            <p className="text-gray-500 text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ opacity: "1", transform: "none" }}>Vendere un'auto è una questione di fiducia. Ecco cosa ci hanno scritto i clienti dopo aver venduto la loro auto con noi.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3" style={{ opacity: "1", transform: "none" }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] shadow-lg">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {' '}Scrivimi su WhatsApp
              </a>
              <a href={TEL} className="bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 text-base transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                {' '}+41 79 863 53 91
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.2em]">Parole dei clienti</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Le storie che ci hanno colpito di più</h2>
            <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm">Non stelle anonime: ecco cosa ci hanno scritto, con le loro parole.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 flex flex-col hover:shadow-lg hover:border-sky-200 hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <p className="text-sky-700 font-bold text-sm leading-snug mb-5 italic">«Sei l'unico di cui ci si potesse fidare»</p>
              <div className="flex gap-2 flex-1">
                <Quote className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base leading-relaxed italic">"Tra tutti quelli a cui ho scritto, sei l'unico con cui ho avuto una bella conversazione, un bel feeling. Qualcuno di cui ci si potesse fidare."</p>
              </div>
              <div className="mt-6 pt-5 border-t border-sky-200">
                <p className="text-gray-500 text-sm font-semibold">Cliente privato, zona Lugano</p>
              </div>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 flex flex-col hover:shadow-lg hover:border-sky-200 hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <p className="text-sky-700 font-bold text-sm leading-snug mb-5 italic">«Abbiamo scelto te anche se la tua offerta era più bassa»</p>
              <div className="flex gap-2 flex-1">
                <Quote className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base leading-relaxed italic">"Cercavamo un professionista affidabile. La tua offerta era più bassa di 2.500 franchi rispetto a un altro, ma abbiamo scelto te. Il prezzo che ci hai detto era quello: nessuna sorpresa."</p>
              </div>
              <div className="mt-6 pt-5 border-t border-sky-200">
                <p className="text-gray-500 text-sm font-semibold">Coppia, Campione d'Italia</p>
              </div>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 flex flex-col hover:shadow-lg hover:border-sky-200 hover:-translate-y-1 transition-all" style={{ opacity: "1", transform: "none" }}>
              <p className="text-sky-700 font-bold text-sm leading-snug mb-5 italic">«Primo a rispondere, primo a venire, primo a stringermi la mano»</p>
              <div className="flex gap-2 flex-1">
                <Quote className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base leading-relaxed italic">"ChatGPT mi ha consigliato 7 commercianti. Ho scritto a tutti. Sei stato il primo a rispondermi, il primo a venire, il primo a stringermi la mano. Per me era quello che contava."</p>
              </div>
              <div className="mt-6 pt-5 border-t border-sky-200">
                <p className="text-gray-500 text-sm font-semibold">Cliente privato, Canton Ticino</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#0d1f3a]">
        <div className="container mx-auto px-6">
          <p className="text-center text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-10">In numeri</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center" style={{ opacity: "1", transform: "none" }}>
              <Award className="w-6 h-6 text-sky-400 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-1">10+</div>
              <p className="text-white/50 text-xs font-medium max-w-[150px] mx-auto leading-snug">anni di esperienza in Canton Ticino</p>
            </div>
            <div className="text-center" style={{ opacity: "1", transform: "none" }}>
              <Car className="w-6 h-6 text-sky-400 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-1">500+</div>
              <p className="text-white/50 text-xs font-medium max-w-[150px] mx-auto leading-snug">auto acquistate da privati e aziende</p>
            </div>
            <div className="text-center" style={{ opacity: "1", transform: "none" }}>
              <Clock className="w-6 h-6 text-sky-400 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-1">24h</div>
              <p className="text-white/50 text-xs font-medium max-w-[150px] mx-auto leading-snug">dalla prima chiamata alla conclusione</p>
            </div>
            <div className="text-center" style={{ opacity: "1", transform: "none" }}>
              <Star className="w-6 h-6 text-sky-400 mx-auto mb-3" />
              <div className="text-4xl md:text-5xl font-black text-white mb-1">4.9★</div>
              <p className="text-white/50 text-xs font-medium max-w-[150px] mx-auto leading-snug">valutazione media su 101 recensioni Google</p>
            </div>
          </div>
        </div>
      </section>
      <Reviews />
      <section className="overflow-hidden bg-[#f3f6f8] py-12" aria-label="Ci hanno già scelto anche loro">
        <div className="mx-auto max-w-[1080px] px-5">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Ci hanno già scelto anche loro</p>
        </div>
        <div className="relative mt-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f3f6f8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f3f6f8] to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-delea.webp" alt="Delea" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-tpl.webp" alt="TPL Lugano" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-laposta.webp" alt="La Posta" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-eoc.webp" alt="EOC" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-grunenfelder.webp" alt="Grünenfelder" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-comartech.webp" alt="Comartech" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-pieroferrari.webp" alt="Gruppo Piero Ferrari" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-delea.webp" alt="Delea" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-tpl.webp" alt="TPL Lugano" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-laposta.webp" alt="La Posta" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-eoc.webp" alt="EOC" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-grunenfelder.webp" alt="Grünenfelder" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-comartech.webp" alt="Comartech" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
            <div className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img src="/logo-pieroferrari.webp" alt="Gruppo Piero Ferrari" width="480" height="480" className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-cyan-500 to-blue-500" />
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 px-4 py-1.5 rounded-full text-white/90 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            {' '}Disponibile 7 giorni su 7
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Unisciti a chi ha già
            <br />
            venduto con noi.
          </h2>
          <p className="text-white/85 text-lg mb-10">Valutazione gratuita a domicilio · Pagamento immediato · Tutto il Ticino</p>
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
