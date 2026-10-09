import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

/** Single-open accordion with animated height. Styling comes from the classes passed in. */
export function Accordion({
  items,
  classes,
  icon,
  defaultOpen = null,
}: {
  items: { q: string; a: ReactNode }[];
  classes: { root?: string; item?: string; itemOpen?: string; button?: string; panel?: string; num?: string };
  icon?: (open: boolean) => ReactNode;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className={classes.root}>
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className={`${classes.item ?? ""} ${isOpen ? classes.itemOpen ?? "" : ""}`} data-open={isOpen}>
            <button type="button" className={classes.button} aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
              {classes.num && <span className={classes.num}>{String(i + 1).padStart(2, "0")}</span>}
              <span className="acc-q">{it.q}</span>
              {icon?.(isOpen)}
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className={classes.panel}>{it.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
