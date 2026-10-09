import { useEffect } from "react";

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    const m = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (m && description) m.content = description;
  }, [title, description]);
}
