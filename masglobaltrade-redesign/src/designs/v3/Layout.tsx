import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Icon, InstagramIcon, WhatsAppIcon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { CITY_LINKS, EMAIL, FOOTER, INSTAGRAM, MORE_LINKS, NAV, PHONE_LABEL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";
import { formClasses } from "./ui";
import { Confetti, Wave } from "./parts";

type Ctx = { openLead: () => void };
const LayoutCtx = createContext<Ctx>({ openLead: () => {} });
export const useLayout = () => useContext(LayoutCtx);

export const SLOGAN = HOME.hero.titleHtml
  .split(/<br\s*\/?>/)[1]
  .replace(/<[^>]+>/g, "")
  .trim();

/** Little car that drives along the header as the page scrolls. */
function RoadCar() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 22 });
  const left = useTransform(p, [0, 1], ["0%", "100%"]);
  const rotate = useTransform(p, (v) => Math.sin(v * 80) * 4);
  return (
    <div className="road" aria-hidden="true">
      <motion.svg className="road__car" viewBox="0 0 60 36" style={{ left, rotate }}>
        <path d="M6 24 L8 14 Q10 9 16 9 L36 9 Q41 9 44 14 L48 18 L54 19 Q58 20 58 25 L58 27 L4 27 Q3 27 4 24 Z" fill="#FF3B30" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
        <path d="M15 12 L22 12 L22 18 L12 18 Z M26 12 L35 12 L40 18 L26 18 Z" fill="#fff" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="16" cy="28" r="6" fill="#111" />
        <circle cx="16" cy="28" r="2.2" fill="#FFD23F" />
        <circle cx="46" cy="28" r="6" fill="#111" />
        <circle cx="46" cy="28" r="2.2" fill="#FFD23F" />
      </motion.svg>
    </div>
  );
}

function Header({ onLead, onMenu }: { onLead: () => void; onMenu: () => void }) {
  const [up, setUp] = useState(false);
  const [drop, setDrop] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const on = () => setUp(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setDrop(false), [location]);
  return (
    <header className={`hdr ${up ? "is-up" : ""}`}>
      <div className="wrap">
        <motion.div className="hdr__pill" initial={{ y: -100, rotate: -4 }} animate={{ y: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}>
          <Link href="/" className="hdr__logo" aria-label="MAS Global Trade, home">
            <img src="/mas-logo.webp" alt="MAS Global Trade" width="512" height="512" />
          </Link>
          <nav className="hdr__nav" aria-label="Navigazione principale">
            <Link href="/tipologie-auto" className={location === "/tipologie-auto" ? "is-active" : ""}>
              Tipologie Auto
            </Link>
            <div style={{ position: "relative" }} onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
              <button type="button" aria-expanded={drop} onClick={() => setDrop((d) => !d)}>
                Compro auto ▾
              </button>
              <AnimatePresence>
                {drop && (
                  <motion.div className="hdr__drop" initial={{ opacity: 0, scale: 0.6, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ type: "spring", stiffness: 460, damping: 18 }}>
                    {CITY_LINKS.map((c) => (
                      <Link key={c.slug} href={`/compro-auto/${c.slug}`}>
                        {c.label.replace("Compro auto ", "")}
                        <Icon name="arrow-right" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {NAV.slice(1).map((n) => (
              <Link key={n.href} href={n.href} className={location === n.href ? "is-active" : ""}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hdr__actions">
            <a href={TEL} className="btn btn--sm btn--ye only-md">
              <Icon name="phone" /> Chiama
            </a>
            <button type="button" className="btn btn--sm btn--rd btn--jelly" onClick={onLead}>
              Vendi l'auto
            </button>
            <button type="button" className="burger" aria-label="Apri menu" onClick={onMenu}>
              <Icon name="menu" />
            </button>
          </div>
          <RoadCar />
        </motion.div>
      </div>
    </header>
  );
}

function Menu({ onClose, onLead }: { onClose: () => void; onLead: () => void }) {
  const links = [{ href: "/", label: "Home" }, ...NAV, ...MORE_LINKS];
  return (
    <motion.div
      className="menu dots"
      initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
      animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
      exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
      transition={{ duration: 0.55, ease: [0.7, 0, 0.3, 1] }}
      data-lenis-prevent
    >
      <div className="menu__top">
        <img src="/mas-logo.webp" alt="MAS Global Trade" />
        <button type="button" className="burger" aria-label="Chiudi menu" onClick={onClose} style={{ display: "grid", background: "#fff" }}>
          <Icon name="x" />
        </button>
      </div>
      <nav className="menu__links">
        {links.map((l, i) => (
          <motion.div key={l.href} initial={{ scale: 0, rotate: i % 2 ? 8 : -8 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.2 + i * 0.035, type: "spring", stiffness: 420, damping: 15 }} style={{ transformOrigin: "left center" }}>
            <Link href={l.href} onClick={onClose}>
              {l.label}
              <Icon name="arrow-right" />
            </Link>
          </motion.div>
        ))}
      </nav>
      <div className="menu__cities">
        {CITY_LINKS.map((c) => (
          <Link key={c.slug} href={`/compro-auto/${c.slug}`} onClick={onClose}>
            {c.label}
          </Link>
        ))}
      </div>
      <div style={{ padding: "0 16px 24px", display: "grid", gap: 14, marginTop: "auto" }}>
        <button
          type="button"
          className="btn btn--rd"
          onClick={() => {
            onClose();
            onLead();
          }}
        >
          Vendi la tua auto
        </button>
        <a href={TEL} className="btn btn--w">
          <Icon name="phone" /> {PHONE_LABEL}
        </a>
      </div>
    </motion.div>
  );
}

function Footer({ onLead }: { onLead: () => void }) {
  return (
    <>
      <Wave color="#2B50E6" className="wave--ftr" />
      <footer className="ftr">
        <Confetti
          items={[
            { k: "star", x: "82%", y: "8%", c: "#FFD23F", s: 64, r: 12, d: 6, depth: 1.2 },
            { k: "dot", x: "62%", y: "24%", c: "#FF3B30", s: 30, d: 4.5 },
            { k: "tri", x: "92%", y: "40%", c: "#FF9EC4", s: 40, r: 20, d: 5.5 },
            { k: "sq", x: "52%", y: "22%", c: "#9FF0C4", s: 30, r: 18, d: 6 },
          ]}
        />
        <div className="wrap">
          <div className="ftr__cta">
            <div>
              <motion.h2 className="ftr__big xt" initial={{ scale: 0.5, rotate: -6, opacity: 0 }} whileInView={{ scale: 1, rotate: -2, opacity: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ type: "spring", stiffness: 260, damping: 12 }}>
                Vendi la tua auto.
              </motion.h2>
              <motion.span className="ftr__slogan" initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.25 }}>
                {SLOGAN}
              </motion.span>
            </div>
            <div className="ctas" style={{ marginTop: 0 }}>
              <button type="button" className="btn btn--ye btn--jelly" onClick={onLead}>
                Vendi la tua auto
              </button>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--wa">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>
          <div className="ftr__cols">
            <div>
              <span className="ftr__logo">
                <img src="/mas-logo.webp" alt="MAS Global Trade" />
              </span>
              <p style={{ maxWidth: 320, marginTop: 20 }}>{FOOTER.desc}</p>
              <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="sq-btn">
                  <WhatsAppIcon />
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="sq-btn">
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div>
              <h4>Contatti</h4>
              <ul>
                <li>
                  <a href={TEL}>{PHONE_LABEL}</a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
                <li>{FOOTER.area}</li>
              </ul>
            </div>
            <div>
              <h4>Link utili</h4>
              <ul>
                {[{ href: "/compro-auto/ticino", label: "Compro auto Ticino" }, { href: "/zone-servite", label: "Zone servite" }, { href: "/blog", label: "Blog" }, ...FOOTER.legal].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Disponibilità</h4>
              <p className="live" style={{ margin: 0 }}>
                {FOOTER.availability}
              </p>
              <p style={{ marginTop: 10 }}>{FOOTER.availabilityText}</p>
              <h4 style={{ marginTop: 14 }}>Parliamo</h4>
              <div className="langs">
                {FOOTER.languages.map((l) => (
                  <span key={l.label}>
                    {l.flag} {l.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="ftr__bottom">
            <span>© {new Date().getFullYear()} MAS Global Trade. Tutti i diritti riservati.</span>
            <span>
              Sito realizzato da{" "}
              <a href={FOOTER.credit.href} target="_blank" rel="noopener noreferrer">
                {FOOTER.credit.label}
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [lead, setLead] = useState(false);
  const [menu, setMenu] = useState(false);
  const [location] = useLocation();
  useEffect(() => setMenu(false), [location]);
  useEffect(() => {
    document.documentElement.style.overflow = lead || menu ? "hidden" : "";
  }, [lead, menu]);
  return (
    <LayoutCtx.Provider value={{ openLead: () => setLead(true) }}>
      <div className="p3">
        <Header onLead={() => setLead(true)} onMenu={() => setMenu(true)} />
        <main>{children}</main>
        <Footer onLead={() => setLead(true)} />
        <div className="mbar">
          <a href={TEL}>
            <Icon name="phone" /> Chiama
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
        <AnimatePresence>{menu && <Menu key="m" onClose={() => setMenu(false)} onLead={() => setLead(true)} />}</AnimatePresence>
        <AnimatePresence>
          {lead && (
            <>
              <motion.div key="bg" className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLead(false)} />
              <motion.div
                key="modal"
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="p3-lead"
                initial={{ x: "-50%", y: "30%", scale: 0.5, rotate: 10, opacity: 0 }}
                animate={{ x: "-50%", y: "-50%", scale: 1, rotate: 0, opacity: 1 }}
                exit={{ x: "-50%", y: "20%", scale: 0.6, rotate: -8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 16 }}
                data-lenis-prevent
              >
                <div className="modal__head">
                  <h2 id="p3-lead">Modulo di contatto</h2>
                  <button type="button" className="burger" style={{ display: "grid", background: "#fff" }} aria-label="Chiudi modulo" onClick={() => setLead(false)}>
                    <Icon name="x" />
                  </button>
                </div>
                <div className="modal__body">
                  <p style={{ marginTop: 0, fontWeight: 600 }}>Compila questo modulo con i tuoi recapiti e ti contatteremo a breve.</p>
                  <LeadForm c={formClasses} onSuccess={() => setLead(false)} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </LayoutCtx.Provider>
  );
}

const PT_COLORS = ["#FFD23F", "#FF3B30", "#2B50E6"];

/** Page change: three coloured discs pop over the screen, then shrink away. */
export function Transition({ children }: { children: ReactNode; path: string }) {
  const ease = [0.7, 0, 0.3, 1] as const;
  return (
    <>
      <div className="pt" aria-hidden="true">
        {PT_COLORS.map((c, i) => (
          <motion.span
            key={c}
            style={{ background: c }}
            initial={{ scale: 1 }}
            animate={{ scale: 0, transition: { duration: 0.5, ease, delay: 0.12 + (PT_COLORS.length - 1 - i) * 0.07 } }}
            exit={{ scale: [0, 1], transition: { duration: 0.42, ease, delay: i * 0.08 } }}
          />
        ))}
        <motion.b
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: 0, rotate: 20, transition: { duration: 0.25 } }}
          exit={{ scale: [0, 1.25, 1], rotate: [-20, 6, -4], transition: { duration: 0.4, delay: 0.25 } }}
        >
          MAS!
        </motion.b>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }} exit={{ opacity: 1, transition: { duration: 0.65 } }}>
        {children}
      </motion.div>
    </>
  );
}
