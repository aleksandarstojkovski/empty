import { AnimatePresence } from "framer-motion";
import { useEffect, type ComponentType, type ReactNode } from "react";
import { Route, Switch, useLocation } from "wouter";
import { PAGES, type Page } from "./content";
import { scrollToTop, SmoothScroll } from "./motion";

export type Design = {
  Layout: ComponentType<{ children: ReactNode }>;
  /** Wraps each route; keyed by path so AnimatePresence can run exit transitions. */
  Transition: ComponentType<{ children: ReactNode; path: string }>;
  Home: ComponentType;
  ContentPage: ComponentType<{ page: Page }>;
  Blog: ComponentType;
  BlogPost: ComponentType<{ slug: string }>;
  NotFound: ComponentType;
};

/** All routes of the original site, rendered with one design. */
export function DesignRoutes({ d }: { d: Design }) {
  const [location] = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [location]);
  return (
    <SmoothScroll>
      <d.Layout>
        <AnimatePresence mode="wait" initial={false}>
          <d.Transition key={location} path={location}>
            <Switch location={location}>
              <Route path="/" component={d.Home} />
              <Route path="/blog" component={d.Blog} />
              <Route path="/blog/:slug">{(p: { slug: string }) => <d.BlogPost slug={p.slug} />}</Route>
              {Object.values(PAGES).map((p) => (
                <Route key={p.slug} path={p.slug}>
                  <d.ContentPage page={p} />
                </Route>
              ))}
              <Route component={d.NotFound} />
            </Switch>
          </d.Transition>
        </AnimatePresence>
      </d.Layout>
    </SmoothScroll>
  );
}
