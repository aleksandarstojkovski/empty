const LOGOS = [
  { src: "/logo-delea.webp", alt: "Delea" },
  { src: "/logo-tpl.webp", alt: "TPL Lugano" },
  { src: "/logo-laposta.webp", alt: "La Posta" },
  { src: "/logo-eoc.webp", alt: "EOC" },
  { src: "/logo-grunenfelder.webp", alt: "Grünenfelder" },
  { src: "/logo-comartech.webp", alt: "Comartech" },
  { src: "/logo-pieroferrari.webp", alt: "Gruppo Piero Ferrari" },
];

export default function Logos() {
  return (
    <section className="overflow-hidden bg-[#f3f6f8] py-12" aria-label="Ci hanno già scelto">
      <div className="mx-auto max-w-[1080px] px-5">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Ci hanno già scelto</p>
      </div>
      <div className="relative mt-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f3f6f8] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f3f6f8] to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="flex h-12 w-28 shrink-0 items-center justify-center">
              <img
                src={l.src}
                alt={l.alt}
                width="480"
                height="480"
                className="max-h-10 w-full object-contain grayscale opacity-60 transition-opacity hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
