import { animate, motion, useInView, useMotionValue, useReducedMotion, useSpring, type Variants } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Smooth, inertia-based scrolling for the whole document (disabled with reduced motion). */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);
  return <>{children}</>;
}

export function scrollToTop() {
  const l = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (l) l.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
}

/** Fades/slides children in once they enter the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  x = 0,
  as = "div",
  amount = 0.2,
  scale,
  blur,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  as?: "div" | "section" | "li" | "span" | "article" | "header" | "p";
  amount?: number;
  scale?: number;
  blur?: boolean;
}) {
  const reduced = useReducedMotion();
  const M = motion[as];
  if (reduced) return <M className={className}>{children}</M>;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y, x, scale: scale ?? 1, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

/** Staggers direct children (wrap each child in <StaggerItem>). */
export function Stagger({ children, className, gap = 0.08, as = "div" }: { children: ReactNode; className?: string; gap?: number; as?: "div" | "ul" | "ol" | "section" }) {
  const M = motion[as];
  return (
    <M className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={{ show: { transition: { staggerChildren: gap } } }}>
      {children}
    </M>
  );
}
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
export function StaggerItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" | "article" }) {
  const M = motion[as];
  return (
    <M className={className} variants={staggerItem}>
      {children}
    </M>
  );
}

/** Splits plain text into words that rise into view one after another. */
export function SplitWords({ text, className, delay = 0, stagger = 0.06, as = "span" }: { text: string; className?: string; delay?: number; stagger?: number; as?: "span" | "h1" | "h2" | "p" }) {
  const reduced = useReducedMotion();
  const M = motion[as];
  const words = text.split(/(\s+)/);
  if (reduced) return <M className={className}>{text}</M>;
  return (
    <M className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} transition={{ staggerChildren: stagger, delayChildren: delay }} aria-label={text}>
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          " "
        ) : (
          <span key={i} aria-hidden="true" style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top", paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={{ hidden: { y: "110%", rotate: 4 }, show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
            >
              {w}
            </motion.span>
          </span>
        ),
      )}
    </M>
  );
}

/** Counts a number up when it scrolls into view; non-numeric text is shown as is. */
export function CountUp({ value, className, duration = 1.6 }: { value: string; className?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const m = value.match(/^(\D*)(\d+(?:[.,]\d+)?)(.*)$/);
  const [shown, setShown] = useState(m ? m[1] + "0" + m[3] : value);
  useEffect(() => {
    if (!m || !inView) return;
    const target = parseFloat(m[2].replace(",", "."));
    const decimals = (m[2].split(/[.,]/)[1] || "").length;
    const c = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(m[1] + v.toFixed(decimals) + m[3]),
    });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <span ref={ref} className={className}>
      {m ? shown : value}
    </span>
  );
}

/** Element that leans toward the pointer (for primary buttons). */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const reduced = useReducedMotion();
  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-flex" }}
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** Seamless infinite horizontal ticker. */
export function Marquee({ children, className, duration = 30, reverse = false }: { children: ReactNode; className?: string; duration?: number; reverse?: boolean }) {
  return (
    <div className={`mq ${className ?? ""}`} style={{ ["--mq-d" as string]: `${duration}s`, ["--mq-dir" as string]: reverse ? "reverse" : "normal" }}>
      <div className="mq__track">
        <div className="mq__group">{children}</div>
        <div className="mq__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
