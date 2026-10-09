import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Icon, InstagramIcon, WhatsAppIcon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { Marquee } from "../../shared/motion";
import { CITY_LINKS, EMAIL, FOOTER, INSTAGRAM, MORE_LINKS, NAV, PHONE_LABEL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";
import { formClasses } from "./ui";

type Ctx = { openLead: () => void; setDarkHero: (v: boolean) => void };
const LayoutCtx = createContext<Ctx>({ openLead: () => {}, setDarkHero: () => {} });
export const useLayout = () => useContext(LayoutCtx);
export function useDarkHero(dark: boolean) {
  const { setDarkHero } = useLayout();
  useEffect(() => {
    setDarkHero(dark);
    return () => setDarkHero(false);
  }, [dark, setDarkHero]);
}

const TOP_ITEMS = [PHONE_LABEL, FOOTER.availability, ...HOME.hero.bullets, "Valutazione gratuita"];

function Header({ onLead, onMenu }: { onLead: () => void; onMenu: () => void }) {
  const [solid, setSolid] = useState(false);
  const [drop, setDrop] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setDrop(false), [location]);
  return (
    <>
      <div className="topbar">
        <Marquee duration={34}>
          {TOP_ITEMS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </Marquee>
      </div>
      <header className={`hdr ${solid ? "is-solid" : ""}`}>
        <div className="wrap hdr__in">
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
                  <motion.div className="hdr__drop" initial={{ opacity: 0, y: -14, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: "spring", stiffness: 420, damping: 22 }}>
                    {CITY_LINKS.map((c) => (
                      <Link key={c.slug} href={`/compro-auto/${c.slug}`}>
                        {c.label.replace("Compro auto ", "")}
                        <Icon name="arrow-right" className="w-5 h-5" />
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
            <a href={TEL} className="btn btn--sm btn--w only-md">
              <Icon name="phone" /> Chiama
            </a>
            <button type="button" className="btn btn--sm btn--k btn--wiggle" onClick={onLead}>
              Vendi la tua auto
            </button>
            <button type="button" className="burger" aria-label="Apri menu" onClick={onMenu}>
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Menu({ onClose, onLead }: { onClose: () => void; onLead: () => void }) {
  const links = [{ href: "/", label: "Home" }, ...NAV, ...MORE_LINKS];
  return (
    <motion.div className="menu" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ type: "spring", stiffness: 260, damping: 30 }}>
      <div className="menu__top">
        <img src="/mas-logo.webp" alt="MAS Global Trade" style={{ height: 50, background: "#fff", border: "3px solid #111", padding: "2px 8px" }} />
        <button type="button" className="burger" aria-label="Chiudi menu" onClick={onClose} style={{ display: "grid" }}>
          <Icon name="x" />
        </button>
      </div>
      <nav className="menu__links">
        {links.map((l, i) => (
          <motion.div key={l.href} initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.04, type: "spring", stiffness: 300, damping: 24 }}>
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
      <div style={{ padding: "0 16px 24px", display: "grid", gap: 12, marginTop: "auto" }}>
        <button
          type="button"
          className="btn btn--k"
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
    <footer className="ftr">
      <div className="hazard" />
      <div className="wrap">
        <div className="ftr__cta">
          <div>
            <h2 className="ftr__big">Vendi la tua auto.</h2>
            <div className="hero__slab" style={{ boxShadow: "8px 8px 0 #e3181b", background: "#ffd400", color: "#111" }}>
              {HOME.hero.titleHtml.split(/<br\s*\/?>/)[1].replace(/<[^>]+>/g, "")}
            </div>
          </div>
          <div className="ctas" style={{ marginTop: 0 }}>
            <button type="button" className="btn btn--y btn--onk" onClick={onLead}>
              Vendi la tua auto
            </button>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--wa btn--onk">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
        <div className="ftr__cols">
          <div>
            <span className="ftr__logo">
              <img src="/mas-logo.webp" alt="MAS Global Trade" />
            </span>
            <p style={{ maxWidth: 320, marginTop: 18 }}>{FOOTER.desc}</p>
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
            <h4 style={{ marginTop: 22 }}>Parliamo</h4>
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
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [lead, setLead] = useState(false);
  const [menu, setMenu] = useState(false);
  const [, setDarkHero] = useState(false);
  const [location] = useLocation();
  useEffect(() => setMenu(false), [location]);
  useEffect(() => {
    document.documentElement.style.overflow = lead || menu ? "hidden" : "";
  }, [lead, menu]);
  return (
    <LayoutCtx.Provider value={{ openLead: () => setLead(true), setDarkHero }}>
      <div className="a1">
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
                aria-labelledby="a1-lead"
                initial={{ x: "-50%", y: "-40%", scale: 0.6, rotate: -6, opacity: 0 }}
                animate={{ x: "-50%", y: "-50%", scale: 1, rotate: 0, opacity: 1 }}
                exit={{ x: "-50%", y: "-45%", scale: 0.8, rotate: 4, opacity: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                data-lenis-prevent
              >
                <div className="modal__head">
                  <h2 id="a1-lead">Modulo di contatto</h2>
                  <button type="button" className="burger" style={{ display: "grid" }} aria-label="Chiudi modulo" onClick={() => setLead(false)}>
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

export function Transition({ children }: { children: ReactNode; path: string }) {
  return (
    <>
      <motion.div
        className="wipe"
        initial={{ x: "0%" }}
        animate={{ x: "105%", transition: { duration: 0.55, ease: [0.7, 0, 0.3, 1], delay: 0.1 } }}
        exit={{ x: ["-105%", "0%"], transition: { duration: 0.45, ease: [0.7, 0, 0.3, 1] } }}
        aria-hidden="true"
      >
        <span>MAS</span>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.25 } }} exit={{ opacity: 1, transition: { duration: 0.45 } }}>
        {children}
      </motion.div>
    </>
  );
}
