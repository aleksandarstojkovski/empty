import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";
import { splitPath, VERSIONS } from "./versions";

/** Floating pill that jumps to the same page in another version, or back to the hub. */
export default function Switcher() {
  const [location] = useLocation();
  const { version, sub } = splitPath(location);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("pointerdown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);
  if (!version) return null;
  return (
    <div className="vsw" ref={ref} data-lenis-prevent>
      {open && (
        <div className="vsw__panel" role="menu" aria-label="Cambia versione">
          <Link href="/" className="vsw__hub" role="menuitem">
            ← Hub delle versioni
          </Link>
          <p className="vsw__hint">Stessa pagina in un'altra versione</p>
          {VERSIONS.map((v) => {
            const cls = `vsw__item ${v.id === version.id ? "is-current" : ""}`;
            const inner = (
              <>
                <span className="vsw__dot" style={{ background: v.bg }} />
                <span>
                  <b>{v.name}</b>
                  <small>{v.mood}</small>
                </span>
              </>
            );
            const href = v.base + sub;
            return v.reload ? (
              <a key={v.id} href={href} className={cls} role="menuitem">
                {inner}
              </a>
            ) : (
              <Link key={v.id} href={href} className={cls} role="menuitem" aria-current={v.id === version.id ? "page" : undefined}>
                {inner}
              </Link>
            );
          })}
        </div>
      )}
      <button type="button" className="vsw__btn" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen((o) => !o)}>
        <span className="vsw__dot" style={{ background: version.bg }} />
        <span className="vsw__label">{version.name}</span>
        <span aria-hidden="true" className="vsw__chev">
          ▴
        </span>
      </button>
    </div>
  );
}
