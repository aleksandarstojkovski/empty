import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Icon, InstagramIcon, WhatsAppIcon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { CITY_LINKS, EMAIL, FOOTER, INSTAGRAM, MORE_LINKS, NAV, PHONE_LABEL, TEL, WHATSAPP } from "../../shared/site";
import { formClasses } from "./ui";

/** The three simple proposals share these components; they differ in theme and hero layout. */
export type SimpleCfg = {
  id: "pulito" | "concessionaria" | "diretto" | "notte" | "fresco" | "lago" | "bordeaux" | "giallo" | "cielo" | "bosco";
  hero: "split" | "photo" | "centered" | "bento" | "form" | "boxed";
  /** Thin info bar above the header (availability, phone, area). */
  topbar?: boolean;
};

function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap topbar__in">
        <span className="topbar__live">{FOOTER.availability}</span>
        <span className="topbar__area">
          <Icon name="map-pin" /> {FOOTER.area}
        </span>
        <a href={TEL} className="topbar__tel">
          <Icon name="phone" /> {PHONE_LABEL}
        </a>
      </div>
    </div>
  );
}

type Ctx = { cfg: SimpleCfg; openLead: () => void };
const LayoutCtx = createContext<Ctx>({ cfg: { id: "pulito", hero: "split" }, openLead: () => {} });
export const useLayout = () => useContext(LayoutCtx);

function Header({ onLead, onMenu }: { onLead: () => void; onMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setDrop(false), [location]);
  const active = (href: string) => (location === href ? "is-active" : "");
  return (
    <header className={`hdr ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap hdr__in">
        <Link href="/" className="hdr__logo" aria-label="MAS Global Trade, home">
          <img src="/mas-logo.webp" alt="MAS Global Trade" width="512" height="512" />
        </Link>
        <nav className="hdr__nav" aria-label="Navigazione principale">
          <Link href="/tipologie-auto" className={active("/tipologie-auto")}>
            Tipologie auto
          </Link>
          <div className="hdr__dd" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button type="button" aria-expanded={drop} onClick={() => setDrop((d) => !d)} className={location.startsWith("/compro-auto/") ? "is-active" : ""}>
              Compro auto <Icon name="chevron-down" />
            </button>
            <AnimatePresence>
              {drop && (
                <motion.div className="hdr__drop" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.16 }}>
                  {CITY_LINKS.map((c) => (
                    <Link key={c.slug} href={`/compro-auto/${c.slug}`}>
                      {c.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {NAV.slice(1).map((n) => (
            <Link key={n.href} href={n.href} className={active(n.href)}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hdr__actions">
          <a href={TEL} className="hdr__phone">
            <Icon name="phone" />
            <span>{PHONE_LABEL}</span>
          </a>
          <button type="button" className="btn btn--primary btn--sm hdr__cta" onClick={onLead}>
            Vendi la tua auto
          </button>
          <button type="button" className="hdr__burger" aria-label="Apri menu" onClick={onMenu}>
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Menu({ onClose, onLead }: { onClose: () => void; onLead: () => void }) {
  const links = [{ href: "/", label: "Home" }, ...NAV, ...MORE_LINKS];
  return (
    <>
      <motion.div className="menu-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.aside className="menu" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} data-lenis-prevent aria-label="Menu">
        <div className="menu__top">
          <img src="/mas-logo.webp" alt="MAS Global Trade" />
          <button type="button" className="hdr__burger" aria-label="Chiudi menu" onClick={onClose}>
            <Icon name="x" />
          </button>
        </div>
        <nav className="menu__links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={onClose}>
              {l.label}
              <Icon name="chevron-right" />
            </Link>
          ))}
        </nav>
        <p className="menu__label">Zone</p>
        <div className="menu__cities">
          {CITY_LINKS.map((c) => (
            <Link key={c.slug} href={`/compro-auto/${c.slug}`} onClick={onClose}>
              {c.label.replace("Compro auto ", "")}
            </Link>
          ))}
        </div>
        <div className="menu__ctas">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              onClose();
              onLead();
            }}
          >
            Vendi la tua auto
          </button>
          <a href={TEL} className="btn btn--ghost">
            <Icon name="phone" /> {PHONE_LABEL}
          </a>
        </div>
      </motion.aside>
    </>
  );
}

function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr__cols">
        <div>
          <span className="ftr__logo">
            <img src="/mas-logo.webp" alt="MAS Global Trade" />
          </span>
          <p className="ftr__desc">{FOOTER.desc}</p>
          <div className="ftr__social">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
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
          <p className="ftr__live">{FOOTER.availability}</p>
          <p>{FOOTER.availabilityText}</p>
          <p className="ftr__langs">{FOOTER.languages.map((l) => `${l.flag} ${l.label}`).join("  ·  ")}</p>
        </div>
      </div>
      <div className="wrap ftr__bottom">
        <span>© {new Date().getFullYear()} MAS Global Trade. Tutti i diritti riservati.</span>
        <span>
          Sito realizzato da{" "}
          <a href={FOOTER.credit.href} target="_blank" rel="noopener noreferrer">
            {FOOTER.credit.label}
          </a>
        </span>
      </div>
    </footer>
  );
}

export function makeLayout(cfg: SimpleCfg) {
  return function Layout({ children }: { children: ReactNode }) {
    const [lead, setLead] = useState(false);
    const [menu, setMenu] = useState(false);
    const [location] = useLocation();
    useEffect(() => setMenu(false), [location]);
    useEffect(() => {
      document.documentElement.style.overflow = lead || menu ? "hidden" : "";
      if (!lead) return;
      const esc = (e: KeyboardEvent) => e.key === "Escape" && setLead(false);
      window.addEventListener("keydown", esc);
      return () => window.removeEventListener("keydown", esc);
    }, [lead, menu]);
    return (
      <LayoutCtx.Provider value={{ cfg, openLead: () => setLead(true) }}>
        <div className={`sk sk--${cfg.id} sk--hero-${cfg.hero}`}>
          {cfg.topbar && <Topbar />}
          <Header onLead={() => setLead(true)} onMenu={() => setMenu(true)} />
          <main>{children}</main>
          <Footer />
          <div className="mbar">
            <a href={TEL} className="mbar__call">
              <Icon name="phone" /> Chiama
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mbar__wa">
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
                  aria-labelledby={`${cfg.id}-lead`}
                  initial={{ x: "-50%", y: "-46%", opacity: 0 }}
                  animate={{ x: "-50%", y: "-50%", opacity: 1 }}
                  exit={{ x: "-50%", y: "-46%", opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  data-lenis-prevent
                >
                  <div className="modal__head">
                    <div>
                      <h2 id={`${cfg.id}-lead`}>Modulo di contatto</h2>
                      <p>Compila questo modulo con i tuoi recapiti e ti contatteremo a breve.</p>
                    </div>
                    <button type="button" className="hdr__burger" aria-label="Chiudi modulo" onClick={() => setLead(false)}>
                      <Icon name="x" />
                    </button>
                  </div>
                  <div className="modal__body">
                    <LeadForm c={formClasses} onSuccess={() => setLead(false)} />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </LayoutCtx.Provider>
    );
  };
}

/** Quiet page change: a short fade. */
export function Transition({ children }: { children: ReactNode; path: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.25 } }} exit={{ opacity: 0, transition: { duration: 0.15 } }}>
      {children}
    </motion.div>
  );
}
