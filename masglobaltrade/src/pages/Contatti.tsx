import SiteLayout from "../components/SiteLayout";
import { Phone, MapPin, Mail, Globe } from "../components/icons";
import LeadForm from "../components/LeadForm";
import { TEL, WHATSAPP } from "../lib/site";
import { usePageMeta } from "../lib/meta";

export default function Contatti() {
  usePageMeta("Contatti per vendere la tua auto | MAS Ticino", "Contatta MAS Global Trade per vendere la tua auto: telefono, WhatsApp, email e sede a Cadenazzo. Richiedi una valutazione gratuita senza impegno.");
  return (
    <SiteLayout className="bg-background page-contact">
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16" style={{ opacity: "1", transform: "none" }}>
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Contattaci</h1>
            <p className="text-xl text-foreground/70">Siamo disponibili 7 giorni su 7, weekend e festivi inclusi.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-sm border border-border p-8 md:p-10" style={{ opacity: "1", transform: "none" }}>
              <h2 className="text-2xl font-bold text-primary mb-6">Richiedi una valutazione</h2>
              <LeadForm />
            </div>
            <div className="space-y-8" style={{ opacity: "1", transform: "none" }}>
              <div className="bg-secondary/50 rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-bold text-primary mb-6">I nostri recapiti</h3>
                <div className="space-y-6">
                  <a href={TEL} className="flex items-center gap-4 text-lg hover:text-accent transition-colors" data-testid="link-contact-phone">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Telefono</div>
                      <div className="text-foreground/80">+41 79 863 53 91</div>
                    </div>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg hover:text-[#25D366] transition-colors" data-testid="link-contact-whatsapp">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-6 h-6 text-[#25D366]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">WhatsApp</div>
                      <div className="text-foreground/80">Invia foto per valutazione rapida</div>
                    </div>
                  </a>
                  <a href="mailto:info@masglobaltrade.ch" className="flex items-center gap-4 text-lg hover:text-accent transition-colors" data-testid="link-contact-email">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Email</div>
                      <div className="text-foreground/80">info@masglobaltrade.ch</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-lg">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Sede (Su appuntamento)</div>
                      <div className="text-foreground/80">Via Monte Ceneri 12, 6593 Cadenazzo (TI)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-1 gap-6">
                <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-accent" />
                    <h3 className="font-bold text-primary">Lingue parlate</h3>
                  </div>
                  <ul className="space-y-2 text-foreground/80 font-medium">
                    <li>Italiano</li>
                    <li>Deutsch</li>
                    <li>Français</li>
                    <li>English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
