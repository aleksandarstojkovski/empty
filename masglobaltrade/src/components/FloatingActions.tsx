import { Link } from "wouter";
import { ClipboardList, Phone, Star, WhatsAppIcon } from "./icons";
import { REVIEWS_URL, TEL, WHATSAPP } from "../lib/site";

export function FloatingWhatsApp() {
  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" data-testid="btn-whatsapp-float" aria-label="Contattaci su WhatsApp" tabIndex={0}>
        <WhatsAppIcon className="w-7 h-7 text-primary" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-md border-2 border-white">1</span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" aria-hidden="true" />
      </a>
    </div>
  );
}

export function MobileActionBar() {
  return (
    <>
      <div className="h-16 md:hidden" />
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0a1628] border-t border-white/10 shadow-2xl">
        <div className="flex items-stretch">
          <a href={TEL} data-testid="sticky-call" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 active:bg-white/20 transition-colors text-white">
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-white/70">Chiama</span>
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" data-testid="sticky-whatsapp" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 active:bg-white/20 transition-colors text-[#25D366]">
            <WhatsAppIcon className="w-5 h-5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-white/70">WhatsApp</span>
          </a>
          <Link href="/contatti" data-testid="sticky-form" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 active:bg-white/20 transition-colors text-white">
            <ClipboardList className="w-5 h-5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-white/70">Modulo</span>
          </Link>
          <a href={REVIEWS_URL} target="_blank" rel="noreferrer" data-testid="sticky-reviews" className="flex-1 flex flex-col items-center justify-center py-3 gap-1 hover:bg-white/10 active:bg-white/20 transition-colors text-[#D89B00]">
            <Star className="w-5 h-5" />
            <span className="text-[10px] font-semibold uppercase tracking-wide text-white/70">Recensioni</span>
          </a>
        </div>
      </div>
    </>
  );
}
