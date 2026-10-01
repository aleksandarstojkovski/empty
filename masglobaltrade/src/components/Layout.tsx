import type { ReactNode } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { FloatingWhatsApp, MobileActionBar } from "./FloatingActions";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="mas-site min-h-screen bg-white">
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </div>
      <MobileActionBar />
    </>
  );
}
