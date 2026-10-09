import type { ElementType, MouseEvent } from "react";
import { useLocation, useRouter } from "wouter";

/**
 * Renders a small trusted HTML fragment from the content model (strong, em, br,
 * links, accents). Internal links stay inside the current design version.
 */
export function Rich({ html, as: Tag = "span", className }: { html: string; as?: ElementType; className?: string }) {
  const { base } = useRouter();
  const [, navigate] = useLocation();
  const out = base ? html.replace(/href="\/(?!\/)/g, `data-internal="1" href="${base}/`) : html;
  const onClick = (e: MouseEvent) => {
    const a = (e.target as HTMLElement).closest("a[data-internal]") as HTMLAnchorElement | null;
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(a.getAttribute("href")!.slice(base.length) || "/");
  };
  return <Tag className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: out }} />;
}

export const stripTags = (h: string) => h.replace(/<br\s*\/?>/g, " ").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
