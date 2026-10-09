import { Link } from "wouter";
import type { ReactNode } from "react";
import { Accordion } from "./Accordion";
import { Icon, WhatsAppIcon, GoogleIcon } from "./Icon";
import { Rich } from "./Rich";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { cardKind, splitSection, type Block, type Page, type Section } from "./content";
import { TEL, WHATSAPP, REVIEWS_URL } from "./site";

/**
 * Design-agnostic renderer for the content pages. It emits semantic markup with
 * `pg-*` class names; each design styles those classes and supplies its own
 * hero, form, reviews and logos via the `slots` prop.
 */
export type Slots = {
  hero?: (s: Section, i: number) => ReactNode;
  form?: () => ReactNode;
  reviews?: () => ReactNode;
  logos?: () => ReactNode;
  faqIcon?: (open: boolean) => ReactNode;
  ctaIcon?: (kind: string) => ReactNode;
  sectionDecor?: (s: Section, i: number) => ReactNode;
};

const hrefFor = (href: string, kind: string) => (kind === "whatsapp" ? WHATSAPP : kind === "phone" ? TEL : kind === "reviews" ? REVIEWS_URL : href);

export function Cta({ item, slots, i }: { item: { label: string; href: string; kind: string }; slots: Slots; i: number }) {
  const href = hrefFor(item.href, item.kind);
  const cls = `pg-btn pg-btn--${item.kind} ${i === 0 ? "pg-btn--primary" : "pg-btn--secondary"}`;
  const inner = (
    <>
      {slots.ctaIcon?.(item.kind) ?? (item.kind === "whatsapp" ? <WhatsAppIcon className="pg-btn__icon" /> : item.kind === "phone" ? <Icon name="phone" className="pg-btn__icon" /> : null)}
      <span>{item.label}</span>
      {item.kind === "link" && <Icon name="arrow-right" className="pg-btn__arrow" />}
    </>
  );
  if (href.startsWith("/") && !href.startsWith("//")) return <Link href={href} className={cls}>{inner}</Link>;
  if (href.startsWith("#")) return <Link href="/contatti" className={cls}>{inner}</Link>;
  return (
    <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
      {inner}
    </a>
  );
}

export function BlockView({ b, slots, inCard = false }: { b: Block; slots: Slots; inCard?: boolean }) {
  switch (b.t) {
    case "eyebrow":
      return <Rich html={b.html} as="p" className="pg-eyebrow" />;
    case "badge":
      return <Rich html={b.html} as="span" className="pg-badge" />;
    case "heading": {
      const Tag = (`h${Math.min(Math.max(b.level, inCard ? 3 : 2), 4)}`) as "h2" | "h3" | "h4";
      return <Rich html={b.html} as={Tag} className={inCard ? "pg-card__title" : `pg-h pg-h--${b.level}`} />;
    }
    case "text":
      return <Rich html={b.html} as="p" className={b.small ? "pg-text pg-text--small" : "pg-text"} />;
    case "quote":
      return <Rich html={b.html} as="blockquote" className="pg-quote" />;
    case "list":
      return (
        <ul className="pg-list">
          {b.items.map((it, i) => (
            <li key={i} className="pg-list__item">
              <span className="pg-list__mark">{it.icon ? <Icon name={it.icon} /> : <Icon name="check" />}</span>
              <Rich html={it.html} />
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div className="pg-ctas">
          {b.items.map((it, i) => (
            <Cta key={i} item={it} slots={slots} i={i} />
          ))}
        </div>
      );
    case "meta":
      return (
        <ul className="pg-meta">
          {b.items.map((it, i) => (
            <li key={i}>
              {it.icon && <Icon name={it.icon} className="pg-meta__icon" />}
              <Rich html={it.html} />
            </li>
          ))}
        </ul>
      );
    case "icon":
      return (
        <span className="pg-card__icon">
          <Icon name={b.name} />
        </span>
      );
    case "number":
      return <span className="pg-card__num">{b.text}</span>;
    case "stat":
      return <span className="pg-stat">{b.text}</span>;
    case "stars":
      return (
        <span className="pg-stars" aria-label={`${b.n} stelle`}>
          {Array.from({ length: b.n }, (_, i) => (
            <Icon key={i} name="star" />
          ))}
        </span>
      );
    case "image":
      return (
        <figure className="pg-img">
          <img src={b.src} alt={b.alt} loading="lazy" decoding="async" />
        </figure>
      );
    case "chips":
      return (
        <ul className="pg-chips">
          {b.items.map((c) => (
            <li key={c} className="pg-chip">
              {c}
            </li>
          ))}
        </ul>
      );
    case "links":
      return (
        <ul className="pg-links">
          {b.items.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="pg-link">
                <span>{l.label}</span>
                <Icon name="arrow-right" />
              </Link>
            </li>
          ))}
        </ul>
      );
    case "faq":
      return (
        <Accordion
          items={b.items.map((f) => ({ q: f.q, a: <Rich html={f.a} as="div" className="pg-faq__a" /> }))}
          classes={{ root: "pg-faq", item: "pg-faq__item", itemOpen: "is-open", button: "pg-faq__q", panel: "pg-faq__panel", num: "pg-faq__num" }}
          icon={slots.faqIcon ?? ((o) => <span className={`pg-faq__toggle ${o ? "is-open" : ""}`} aria-hidden="true" />)}
        />
      );
    case "grid":
      return <Grid b={b} slots={slots} />;
    case "form":
      return <div className="pg-form">{slots.form?.()}</div>;
    case "reviews":
      return <>{slots.reviews?.()}</>;
    case "logos":
      return <>{slots.logos?.()}</>;
    default:
      return null;
  }
}

function Grid({ b, slots }: { b: Extract<Block, { t: "grid" }>; slots: Slots }) {
  const kinds = b.items.map((it) => cardKind(it.blocks));
  const allPlain = kinds.every((k) => k === "plain");
  const cols = Math.min(b.items.length, Math.max(b.cols, allPlain ? Math.min(b.items.length, 2) : b.cols));
  return (
    <Stagger className={`pg-grid pg-grid--${cols} ${allPlain ? "pg-grid--plain" : ""}`} gap={0.09}>
      {b.items.map((it, i) => (
        <StaggerItem key={i} className={`pg-card pg-card--${kinds[i]}`}>
          {kinds[i] === "quote" && <GoogleIcon className="pg-card__brand" />}
          {it.blocks.map((x, j) => (
            <BlockView key={j} b={x} slots={slots} inCard />
          ))}
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function SectionView({ s, i, slots }: { s: Section; i: number; slots: Slots }) {
  const { head, body } = splitSection(s);
  const solo = body.length === 1 && ["reviews", "logos"].includes(body[0].t);
  if (solo) return <BlockView b={body[0]} slots={slots} />;
  return (
    <section className={`pg-sec pg-sec--${s.tone} ${s.image ? "pg-sec--image" : ""}`} data-index={i}>
      {slots.sectionDecor?.(s, i)}
      {s.image && (
        <div className="pg-sec__media">
          <img src={s.image.src} alt={s.image.alt} loading="lazy" decoding="async" />
        </div>
      )}
      <div className="pg-sec__inner">
        {(head.eyebrow || head.title) && (
          <Reveal className="pg-head">
            {head.eyebrow && <Rich html={head.eyebrow} as="p" className="pg-eyebrow" />}
            {head.title && <Rich html={head.title} as="h2" className="pg-title" />}
            {head.lead.map((l, k) => (
              <Rich key={k} html={l} as="p" className="pg-lead" />
            ))}
          </Reveal>
        )}
        <div className="pg-body">
          {body.map((b, k) =>
            b.t === "grid" || b.t === "faq" ? (
              <BlockView key={k} b={b} slots={slots} />
            ) : (
              <Reveal key={k} y={18} amount={0.1}>
                <BlockView b={b} slots={slots} />
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export function PageBody({ page, slots }: { page: Page; slots: Slots }) {
  return (
    <div className="pg">
      {page.sections.map((s, i) => (s.hero && slots.hero ? <div key={i}>{slots.hero(s, i)}</div> : <SectionView key={i} s={s} i={i} slots={slots} />))}
    </div>
  );
}

export { splitSection };
