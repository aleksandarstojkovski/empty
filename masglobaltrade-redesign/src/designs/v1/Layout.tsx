import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Icon, InstagramIcon, WhatsAppIcon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { CITY_LINKS, EMAIL, FOOTER, INSTAGRAM, MORE_LINKS, NAV, PHONE_LABEL, TEL, WHATSAPP } from "../../shared/site";
import { formClasses } from "./ui";

const ease = [0.22, 1, 0.36, 1] as const;

type Ctx = { openLead: () => void; setDarkHero: (v: boolean) => void };
const LayoutCtx = createContext<Ctx>({ openLead: () => {}, setDarkHero: () => {} });
export const useLayout = () => useContext(LayoutCtx);

/** Pages with a dark hero call this so the header starts in light text. */
export function useDarkHero(dark: boolean) {
  const { setDarkHero } = useLayout();
  useEffect(() => {
    setDarkHero(dark);
    return () => setDarkHero(false);
  }, [dark, setDarkHero]);
}

function Header({ dark, onLead, onMenu }: { dark: boolean; onLead: () => void; onMenu: () => void }) {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drop, setDrop] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 30);
      setHidden(y > 500 && y > last + 2);
      if (y < last - 2) setHidden(false);
      last = y;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setDrop(false), [location]);

  return (
    <header className={`hdr ${solid ? "is-solid" : ""} ${hidden ? "is-hidden" : ""} ${dark ? "is-dark" : ""}`}>
      <div className="wrap hdr__in">
        <Link href="/" className="hdr__logo" aria-label="MAS Global Trade, home">
          <img src="/mas-logo.webp" alt="MAS Global Trade" width="512" height="512" />
        </Link>
        <nav className="hdr__nav" aria-label="Navigazione principale">
          <Link href="/tipologie-auto" className={location === "/tipologie-auto" ? "is-active" : ""}>
            Tipologie Auto
          </Link>
          <div style={{ position: "relative" }} onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button type="button" aria-expanded={drop} onClick={() => setDrop((d) => !d)} style={{ background: "none", border: 0, color: "inherit", font: "inherit", cursor: "pointer" }}>
              Compro auto ↓
            </button>
            <AnimatePresence>
              {drop && (
                <motion.div className="hdr__drop" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease }}>
                  {CITY_LINKS.map((c) => (
                    <Link key={c.slug} href={`/compro-auto/${c.slug}`}>
                      {c.label.replace("Compro auto ", "")}
                      <Icon name="arrow-right" className="w-4 h-4" />
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
          <a href={TEL} className={`btn btn--sm only-md ${dark && !solid ? "btn--light" : "btn--line"}`}>
            <Icon name="phone" /> Chiama
          </a>
          <button type="button" className="btn btn--sm btn--accent" onClick={onLead}>
            Vendi la tua auto
          </button>
          <button type="button" className="burger" aria-label="Apri menu" onClick={onMenu}>
            <span>
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Menu({ onClose, onLead }: { onClose: () => void; onLead: () => void }) {
  const links = [{ href: "/", label: "Home" }, ...NAV, ...MORE_LINKS];
  return (
    <motion.div className="menu" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.7, ease }}>
      <div className="menu__top">
        <img src="/mas-logo.webp" alt="MAS Global Trade" style={{ height: 52, filter: "brightness(0) invert(1)" }} />
        <button type="button" className="x-btn" style={{ borderColor: "rgba(244,240,232,.3)" }} aria-label="Chiudi menu" onClick={onClose}>
          <Icon name="x" />
        </button>
      </div>
      <nav className="menu__links">
        {links.map((l, i) => (
          <motion.div key={l.href} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.045, duration: 0.7, ease }}>
            <Link href={l.href} onClick={onClose}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {l.label}
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
      <div style={{ marginTop: "auto", paddingTop: 30, display: "grid", gap: 10 }}>
        <button
          type="button"
          className="btn btn--accent"
          onClick={() => {
            onClose();
            onLead();
          }}
        >
          Vendi la tua auto
        </button>
        <a href={TEL} className="btn btn--light">
          <Icon name="phone" /> {PHONE_LABEL}
        </a>
      </div>
    </motion.div>
  );
}

function Footer({ onLead }: { onLead: () => void }) {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__cta">
          <h2 className="ftr__big">
            Vendi la tua auto.
            <br />
            <em className="ital">Semplice. Veloce. Sicuro.</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <button type="button" className="btn btn--accent" onClick={onLead}>
              Vendi la tua auto
            </button>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--light">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
        <div className="ftr__cols">
          <div>
            <img src="/mas-logo.webp" alt="MAS Global Trade" style={{ height: 64, filter: "brightness(0) invert(1)" }} />
            <p style={{ maxWidth: 320, marginTop: 18 }}>{FOOTER.desc}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="x-btn" style={{ borderColor: "rgba(244,240,232,.25)" }}>
                <WhatsAppIcon className="w-[18px] h-[18px]" />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="x-btn" style={{ borderColor: "rgba(244,240,232,.25)" }}>
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
          <div>
            <h4>Contatti</h4>
            <ul>
              <li>
                <a href={TEL} className="link-u">
                  {PHONE_LABEL}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="link-u">
                  {EMAIL}
                </a>
              </li>
              <li>{FOOTER.area}</li>
            </ul>
          </div>
          <div>
            <h4>Link utili</h4>
            <ul>
              {[{ href: "/compro-auto/ticino", label: "Compro auto Ticino" }, { href: "/zone-servite", label: "Zone servite" }, { href: "/blog", label: "Blog" }, ...FOOTER.legal].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-u">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Disponibilità</h4>
            <p style={{ margin: 0, color: "var(--paper)", fontWeight: 600 }}>
              <span className="dot-live" />
              {FOOTER.availability}
            </p>
            <p style={{ marginTop: 10 }}>{FOOTER.availabilityText}</p>
            <h4 style={{ marginTop: 26 }}>Parliamo</h4>
            <div className="ftr__lang">
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
            <a href={FOOTER.credit.href} target="_blank" rel="noopener noreferrer" className="link-u" style={{ color: "var(--paper)" }}>
              {FOOTER.credit.label}
            </a>
          </span>
        </div>
        <div className="ftr__word serif" aria-hidden="true">
          MAS Global Trade
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [lead, setLead] = useState(false);
  const [menu, setMenu] = useState(false);
  const [darkHero, setDarkHero] = useState(false);
  const [location] = useLocation();
  useEffect(() => setMenu(false), [location]);
  useEffect(() => {
    document.documentElement.style.overflow = lead || menu ? "hidden" : "";
  }, [lead, menu]);

  return (
    <LayoutCtx.Provider value={{ openLead: () => setLead(true), setDarkHero }}>
      <div className="d1">
        <Header dark={darkHero} onLead={() => setLead(true)} onMenu={() => setMenu(true)} />
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
        <AnimatePresence>{menu && <Menu key="menu" onClose={() => setMenu(false)} onLead={() => setLead(true)} />}</AnimatePresence>
        <AnimatePresence>
          {lead && (
            <>
              <motion.div key="bg" className="drawer-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLead(false)} />
              <motion.aside
                key="drawer"
                className="drawer"
                role="dialog"
                aria-modal="true"
                aria-labelledby="d1-lead-title"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.7, ease }}
                data-lenis-prevent
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="kicker">Valutazione gratuita</span>
                  <button type="button" className="x-btn" aria-label="Chiudi modulo" onClick={() => setLead(false)}>
                    <Icon name="x" />
                  </button>
                </div>
                <h2 id="d1-lead-title">Modulo di contatto</h2>
                <p style={{ color: "var(--ink-2)", marginTop: 0, marginBottom: 28 }}>Compila questo modulo con i tuoi recapiti e ti contatteremo a breve.</p>
                <LeadForm c={formClasses} onSuccess={() => setLead(false)} />
              </motion.aside>
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
        className="curtain"
        style={{ zIndex: 90 }}
        initial={{ y: "0%" }}
        animate={{ y: "-100%", transition: { duration: 0.85, ease, delay: 0.05 } }}
        exit={{ y: ["100%", "0%"], transition: { duration: 0.6, ease } }}
        aria-hidden="true"
      >
        <img src="/mas-logo.webp" alt="" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease, delay: 0.3 } }} exit={{ opacity: 1, transition: { duration: 0.6 } }}>
        {children}
      </motion.div>
    </>
  );
}
