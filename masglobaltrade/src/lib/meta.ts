import { useEffect } from "react";

/** Sets the document title and meta description for the current page. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta && description) meta.content = description;
  }, [title, description]);
}
