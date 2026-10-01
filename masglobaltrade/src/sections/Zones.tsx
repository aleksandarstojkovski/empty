import { Link } from "wouter";
import { MapPin, ArrowRight } from "../components/icons";

export default function Zones() {
  return (
    <section id="ticino" className="bg-white py-20 md:py-[88px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="mas-reveal mb-8 grid items-end gap-5 md:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Presenti sul territorio</p>
            <h2 className="mt-3 font-bold tracking-[-.035em]">Ritiro a domicilio in tutto il Canton Ticino.</h2>
          </div>
          <p className="text-[14px] leading-relaxed text-slate-600">Da Airolo a Chiasso, ritiriamo auto in ogni comune del Canton Ticino, a domicilio e senza costi extra.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/compro-auto/ticino" className="mas-card group overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]">
            <div className="relative h-48 overflow-hidden">
              <img src="/auto3.webp" alt="Peugeot 3008 acquistata a Ticino" width="900" height="1200" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-bold text-white">Ticino</span>
                </div>
                <span className="text-[11px] text-white/75">
                  Peugeot 3008
                  {' '}·{' '}
                  2019
                </span>
              </div>
            </div>
            <div className="min-h-[142px] p-5">
              <h3 className="font-bold text-primary">
                Compro auto{' '}
                in
                {' '}
                Ticino
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">Acquistiamo auto usate in tutto il Canton Ticino, da Chiasso ad Airolo, con valutazione gratuita e ritiro a domicilio.</p>
            </div>
          </Link>
          <Link href="/compro-auto/lugano" className="mas-card group overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]">
            <div className="relative h-48 overflow-hidden">
              <img src="/auto1.webp" alt="Mercedes GLA 200 acquistata a Lugano" width="900" height="1200" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-bold text-white">Lugano</span>
                </div>
                <span className="text-[11px] text-white/75">
                  Mercedes GLA 200
                  {' '}·{' '}
                  2018
                </span>
              </div>
            </div>
            <div className="min-h-[142px] p-5">
              <h3 className="font-bold text-primary">
                Compro auto{' '}
                a
                {' '}
                Lugano
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">Acquistiamo auto usate a Lugano e in tutto il Luganese con pagamento immediato e ritiro a domicilio.</p>
            </div>
          </Link>
          <Link href="/compro-auto/locarno" className="mas-card group overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]">
            <div className="relative h-48 overflow-hidden">
              <img src="/auto2.webp" alt="Land Rover Discovery Sport acquistata a Locarno" width="900" height="1200" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-bold text-white">Locarno</span>
                </div>
                <span className="text-[11px] text-white/75">
                  Land Rover Discovery Sport
                  {' '}·{' '}
                  2020
                </span>
              </div>
            </div>
            <div className="min-h-[142px] p-5">
              <h3 className="font-bold text-primary">
                Compro auto{' '}
                a
                {' '}
                Locarno
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">Compriamo auto usate a Locarno, Ascona, Minusio e in tutto il Locarnese. Servizio rapido e affidabile.</p>
            </div>
          </Link>
          <Link href="/compro-auto/bellinzona" className="mas-card group overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]">
            <div className="relative h-48 overflow-hidden">
              <img src="/auto3.webp" alt="Peugeot 3008 acquistata a Bellinzona" width="900" height="1200" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-bold text-white">Bellinzona</span>
                </div>
                <span className="text-[11px] text-white/75">
                  Peugeot 3008
                  {' '}·{' '}
                  2019
                </span>
              </div>
            </div>
            <div className="min-h-[142px] p-5">
              <h3 className="font-bold text-primary">
                Compro auto{' '}
                a
                {' '}
                Bellinzona
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">Acquistiamo auto a Bellinzona, Giubiasco, Camorino e in tutto il Bellinzonese. Valutazione gratuita.</p>
            </div>
          </Link>
          <Link href="/compro-auto/mendrisio" className="mas-card group overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]">
            <div className="relative h-48 overflow-hidden">
              <img src="/auto4.webp" alt="MINI Cooper S Clubman acquistata a Mendrisio" width="900" height="1200" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-bold text-white">Mendrisio</span>
                </div>
                <span className="text-[11px] text-white/75">
                  MINI Cooper S Clubman
                  {' '}·{' '}
                  2019
                </span>
              </div>
            </div>
            <div className="min-h-[142px] p-5">
              <h3 className="font-bold text-primary">
                Compro auto{' '}
                a
                {' '}
                Mendrisio
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">Compriamo auto usate a Mendrisio, Chiasso e in tutto il Mendrisiotto. Ritiro a domicilio gratuito.</p>
            </div>
          </Link>
          <Link href="/compro-auto/biasca" className="mas-card group overflow-hidden rounded-2xl border border-slate-200 bg-[#f3f6f8]">
            <div className="relative h-48 overflow-hidden">
              <img src="/auto7.webp" alt="BMW X1 acquistata a Biasca" width="900" height="1200" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4 pt-10">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  <span className="text-sm font-bold text-white">Biasca</span>
                </div>
                <span className="text-[11px] text-white/75">
                  BMW X1
                  {' '}·{' '}
                  2015
                </span>
              </div>
            </div>
            <div className="min-h-[142px] p-5">
              <h3 className="font-bold text-primary">
                Compro auto{' '}
                a
                {' '}
                Biasca
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-600">Acquistiamo auto usate a Biasca e in tutta la Riviera ticinese. Servizio professionale.</p>
            </div>
          </Link>
        </div>
        <div className="mt-9 text-center">
          <Link data-testid="link-all-zones" href="/zone-servite" className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent">
            Vedi tutte le zone
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
