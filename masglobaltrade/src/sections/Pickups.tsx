import { useEffect, useRef } from "react";

const PICKUPS = [
  { src: "/ritiro-cliente-01.webp", alt: "Cliente con Madian davanti alla sua Toyota venduta", city: "Massagno" },
  { src: "/ritiro-cliente-02.webp", alt: "Cliente con Madian davanti alla sua Subaru venduta", city: "Arbedo" },
  { src: "/ritiro-cliente-03.webp", alt: "Cliente con Madian davanti alla sua Suzuki venduta", city: "Tresa" },
  { src: "/ritiro-cliente-04.webp", alt: "Cliente con Madian davanti alla sua Range Rover venduta", city: "Lugano" },
  { src: "/ritiro-cliente-05.webp", alt: "Cliente con Madian davanti alla sua Citroën venduta", city: "Locarno" },
  { src: "/ritiro-cliente-06.webp", alt: "Cliente con Madian davanti alla sua Toyota venduta in Ticino", city: "Bellinzona" },
];

// Three copies so the strip can loop seamlessly around the middle copy.
const ITEMS = [...PICKUPS, ...PICKUPS, ...PICKUPS];

/**
 * Horizontal strip that drifts slowly on its own (one full set per ~38s on
 * desktop, ~32s on mobile), loops seamlessly, can be dragged with the mouse,
 * and pauses briefly after any manual interaction.
 */
function useAutoScroll(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let last = 0;
    let visible = false;
    let dragging = false;
    let pausedUntil = 0;
    let setWidth = 0;
    let dragX = 0;

    const measure = () => {
      const cards = el.querySelectorAll<HTMLElement>(".pickup-card");
      if (cards.length <= PICKUPS.length) return;
      const w = cards[PICKUPS.length].offsetLeft - cards[0].offsetLeft;
      if (!w) return;
      // Keep the same relative position when the set width changes on resize.
      el.scrollLeft = setWidth ? w + (el.scrollLeft - setWidth) * (w / setWidth) : w;
      setWidth = w;
    };
    const wrap = () => {
      if (!setWidth) return;
      if (el.scrollLeft >= setWidth * 2) el.scrollLeft -= setWidth;
      else if (el.scrollLeft <= 0) el.scrollLeft += setWidth;
    };
    const tick = (now: number) => {
      raf = 0;
      if (visible && !reduced.matches && !dragging && now >= pausedUntil && setWidth) {
        const dt = last ? Math.min(now - last, 64) : 0;
        const duration = window.innerWidth < 768 ? 32000 : 38000;
        el.scrollLeft += (setWidth / duration) * dt;
        wrap();
      }
      last = now;
      if (visible && !reduced.matches) raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (visible && !reduced.matches && !raf) {
        last = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const onDown = (e: PointerEvent) => {
      dragging = true;
      if (e.pointerType === "mouse") {
        e.preventDefault();
        dragX = e.clientX;
        el.setPointerCapture(e.pointerId);
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging || e.pointerType !== "mouse") return;
      el.scrollLeft -= e.clientX - dragX;
      dragX = e.clientX;
    };
    const onUp = () => {
      dragging = false;
      pausedUntil = performance.now() + 1500;
    };
    const onWheel = () => {
      pausedUntil = performance.now() + 1200;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    const ro = new ResizeObserver(measure);
    measure();
    io.observe(el);
    ro.observe(el);
    el.addEventListener("scroll", wrap, { passive: true });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    el.addEventListener("wheel", onWheel, { passive: true });
    reduced.addEventListener("change", start);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      el.removeEventListener("scroll", wrap);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      el.removeEventListener("wheel", onWheel);
      reduced.removeEventListener("change", start);
    };
  }, [ref]);
}

export default function Pickups() {
  const ref = useRef<HTMLDivElement>(null);
  useAutoScroll(ref);

  return (
    <section className="overflow-hidden bg-[#f3f6f8] py-20 md:py-[88px]" aria-labelledby="recent-pickups-title">
      <div className="mx-auto max-w-[1080px] px-5 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08749b]">Consegne reali in Ticino</p>
        <h2 id="recent-pickups-title" className="mt-3 font-bold tracking-[-.035em]">
          Auto ritirate, clienti soddisfatti.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-relaxed text-slate-600">
          Alcune delle persone che hanno scelto MAS Global Trade per vendere la propria auto in modo semplice e diretto.
        </p>
      </div>
      <div
        ref={ref}
        className="pickup-marquee mt-10"
        data-testid="gallery-recent-pickups"
        role="group"
        aria-label="Foto dei ritiri: scorri lateralmente per sfogliarle"
        tabIndex={0}
      >
        <div className="pickup-marquee-track">
          {ITEMS.map((p, i) => {
            const base = p.src.replace(".webp", "");
            return (
              <figure key={`${p.src}-${i}`} className="pickup-card" aria-hidden={i >= PICKUPS.length}>
                <img
                  src={`${base}-640.webp`}
                  srcSet={`${base}-320.webp 320w, ${base}-640.webp 640w`}
                  sizes="(max-width: 384px) 78vw, (max-width: 767px) 300px, 312px"
                  alt={i < PICKUPS.length ? p.alt : ""}
                  width="938"
                  height="1250"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent px-5 pb-5 pt-14 text-left text-[12px] font-semibold text-white">
                  Ritiro concluso a {p.city}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
