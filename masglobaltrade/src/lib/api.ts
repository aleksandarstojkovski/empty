import { useEffect, useState } from "react";

// Reviews and blog posts are served by the site's backend (/api/*), exactly
// like the original; nothing from those endpoints is bundled into the source.
export type Review = {
  id: number;
  authorName: string;
  rating: number;
  content: string;
  relativeTime: string;
  profilePhotoUrl?: string | null;
};
export type ReviewsResponse = { reviews: Review[]; rating: number; userRatingCount: number };
export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string | null;
  publishedAt: string;
};

const cache = new Map<string, Promise<unknown>>();

function load<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    cache.set(
      url,
      fetch(url).then((r) => {
        if (!r.ok) throw new Error(`${url}: ${r.status}`);
        return r.json();
      }),
    );
  }
  return cache.get(url) as Promise<T>;
}

export function useApi<T>(url: string | null) {
  const [state, setState] = useState<{ data?: T; error?: unknown; isLoading: boolean }>({ isLoading: !!url });
  useEffect(() => {
    if (!url) return;
    let alive = true;
    setState((s) => ({ ...s, isLoading: true }));
    load<T>(url).then(
      (data) => alive && setState({ data, isLoading: false }),
      (error) => {
        cache.delete(url);
        if (alive) setState({ error, isLoading: false });
      },
    );
    return () => {
      alive = false;
    };
  }, [url]);
  return state;
}

export const useReviews = () => useApi<ReviewsResponse>("/api/reviews");
export const useBlogPosts = () => useApi<BlogPost[]>("/api/blog");
export const useBlogPost = (slug: string) => useApi<BlogPost>(`/api/blog/${slug}`);
