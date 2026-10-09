import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Icon, InstagramIcon, WhatsAppIcon } from "../../shared/Icon";
import { LeadForm } from "../../shared/LeadForm";
import { CITY_LINKS, EMAIL, FOOTER, INSTAGRAM, MORE_LINKS, NAV, PHONE_LABEL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";
import { formClasses } from "./ui";

const ease = [0.16, 1, 0.3, 1] as const;

type Ctx = { openLead: () => void };
const LayoutCtx = createContext<Ctx>({ openLead: () => {} });
export const useLayout = () => useContext(LayoutCtx);

function Header({ onLead, onMenu }: { onLead: () => void; onMenu: () => void }) {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drop, setDrop] = useState(false);
  const [location] = useLocation();
  useEffect(() => {
    let last = window.scrollY;
    const on = () => {
      const y = window.scrollY;
      setSolid(y > 60);
      if (y > 600 && y > last + 4) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setDrop(false), [location]);
  return (
    <header className={`hdr ${solid ? "is-solid" : ""} ${hidden ? "is-hidden" : ""}`}>
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
              Compro auto
            </button>
            <AnimatePresence>
              {drop && (
                <motion.div className="hdr__drop" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.4, ease }}>
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
          <a href={TEL} className="btn btn--sm btn--line only-md">
            <Icon name="phone" /> Chiama
          </a>
          <button type="button" className="btn btn--sm btn--r" onClick={onLead}>
            Vendi la tua auto
          </button>
          <button type="button" className="burger" aria-label="Apri menu" onClick={onMenu}>
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
    <motion.div className="menu" initial={{ clipPath: "inset(50% 0 50% 0)" }} animate={{ clipPath: "inset(0% 0 0% 0)" }} exit={{ clipPath: "inset(50% 0 50% 0)" }} transition={{ duration: 0.6, ease }}>
      <div className="menu__top">
        <img src="/mas-logo.webp" alt="MAS Global Trade" style={{ height: 50, filter: "brightness(0) invert(1)" }} />
        <button type="button" className="burger" style={{ display: "grid" }} aria-label="Chiudi menu" onClick={onClose}>
          <Icon name="x" />
        </button>
      </div>
      <nav className="menu__links">
        {links.map((l, i) => (
          <motion.div key={l.href} initial={{ opacity: 0, scale: 1.6, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ delay: 0.2 + i * 0.05, duration: 0.5, ease }} style={{ transformOrigin: "left" }}>
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
      <div style={{ marginTop: "auto", paddingTop: 24, display: "grid", gap: 10 }}>
        <button
          type="button"
          className="btn btn--r"
          onClick={() => {
            onClose();
            onLead();
          }}
        >
          Vendi la tua auto
        </button>
        <a href={TEL} className="btn btn--line">
          <Icon name="phone" /> {PHONE_LABEL}
        </a>
      </div>
    </motion.div>
  );
}

function Footer({ onLead }: { onLead: () => void }) {
  const slogan = HOME.hero.titleHtml.split(/<br\s*\/?>/)[1].replace(/<[^>]+>/g, "");
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__cta">
          <motion.h2 className="ftr__big" initial={{ opacity: 0, scale: 1.3, filter: "blur(12px)" }} whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.9, ease }}>
            Vendi la tua auto.
            <span>{slogan}</span>
          </motion.h2>
          <div className="ctas" style={{ marginTop: 0 }}>
            <button type="button" className="btn btn--r" onClick={onLead}>
              Vendi la tua auto
            </button>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn--line">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
        <div className="ftr__cols">
          <div>
            <img src="/mas-logo.webp" alt="MAS Global Trade" style={{ height: 62, filter: "brightness(0) invert(1)" }} />
            <p style={{ maxWidth: 320, marginTop: 18 }}>{FOOTER.desc}</p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="icon-sq">
                <WhatsAppIcon />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="icon-sq">
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
  const [location] = useLocation();
  useEffect(() => setMenu(false), [location]);
  useEffect(() => {
    document.documentElement.style.overflow = lead || menu ? "hidden" : "";
  }, [lead, menu]);
  return (
    <LayoutCtx.Provider value={{ openLead: () => setLead(true) }}>
      <div className="t2">
        <div className="grain" aria-hidden="true" />
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
              <motion.aside key="modal" className="modal" role="dialog" aria-modal="true" aria-labelledby="t2-lead" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.6, ease }} data-lenis-prevent>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="kick">Valutazione gratuita</span>
                  <button type="button" className="sq" aria-label="Chiudi modulo" onClick={() => setLead(false)}>
                    <Icon name="x" />
                  </button>
                </div>
                <h2 id="t2-lead">Modulo di contatto</h2>
                <p style={{ color: "rgba(255,255,255,.75)", marginTop: 0, marginBottom: 24 }}>Compila questo modulo con i tuoi recapiti e ti contatteremo a breve.</p>
                <LeadForm c={formClasses} onSuccess={() => setLead(false)} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </LayoutCtx.Provider>
  );
}

/** Letterbox bars close, a white flash fires, then the bars open on the new page. */
export function Transition({ children }: { children: ReactNode; path: string }) {
  const bar = { duration: 0.45, ease: [0.7, 0, 0.3, 1] as const };
  return (
    <>
      <motion.div className="lb lb--top" initial={{ y: "0%" }} animate={{ y: "-101%", transition: { ...bar, delay: 0.15 } }} exit={{ y: ["-101%", "0%"], transition: bar }} aria-hidden="true" />
      <motion.div className="lb lb--bot" initial={{ y: "0%" }} animate={{ y: "101%", transition: { ...bar, delay: 0.15 } }} exit={{ y: ["101%", "0%"], transition: bar }} aria-hidden="true" />
      <motion.div className="flash" initial={{ opacity: 0.9 }} animate={{ opacity: 0, transition: { duration: 0.35 } }} exit={{ opacity: 0 }} aria-hidden="true" />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.15 } }} exit={{ opacity: 1, transition: { duration: 0.45 } }}>
        {children}
      </motion.div>
    </>
  );
}
