import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { MobileActionBar } from "./FloatingActions";

/** Wrapper used by every page except the home page (`.site-page` styling). */
export default function SiteLayout({ className, children }: { className: string; children: ReactNode }) {
  return (
    <>
      <div className={`site-page min-h-screen ${className}`}>
        <Nav />
        {children}
        <Footer />
      </div>
      <MobileActionBar />
    </>
  );
}
