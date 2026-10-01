import { Users, Clock3, Car, Star } from "../components/icons";

export default function Stats() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 text-center border-b border-white/10 md:border-b-0 border-r md:border-r-0">
            <div className="flex items-center gap-2 text-accent">
              <Users className="h-4 w-4" />
              <span className="text-2xl font-bold tracking-tight md:text-3xl">2ª</span>
              <span className="text-xs font-semibold text-white/70 md:text-sm">generazione</span>
            </div>
            <p className="mt-1 max-w-[140px] text-[11px] font-medium leading-snug text-white/65">Famiglia nel settore</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 text-center border-b border-white/10 md:border-b-0 md:border-l md:border-white/10">
            <div className="flex items-center gap-2 text-accent">
              <Clock3 className="lucide-clock-3 h-4 w-4" />
              <span className="text-2xl font-bold tracking-tight md:text-3xl">10+</span>
              <span className="text-xs font-semibold text-white/70 md:text-sm">anni</span>
            </div>
            <p className="mt-1 max-w-[140px] text-[11px] font-medium leading-snug text-white/65">di esperienza personale</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 text-center border-r border-white/10 md:border-r-0 md:border-l md:border-white/10">
            <div className="flex items-center gap-2 text-accent">
              <Car className="h-4 w-4" />
              <span className="text-2xl font-bold tracking-tight md:text-3xl">Centinaia</span>
            </div>
            <p className="mt-1 max-w-[140px] text-[11px] font-medium leading-snug text-white/65">auto acquistate in Ticino</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-1 px-3 py-7 text-center md:border-l md:border-white/10">
            <div className="flex items-center gap-2 text-accent">
              <Star className="h-4 w-4" />
              <span className="text-2xl font-bold tracking-tight md:text-3xl">4.9</span>
              <span className="text-xs font-semibold text-white/70 md:text-sm">★</span>
            </div>
            <p className="mt-1 max-w-[140px] text-[11px] font-medium leading-snug text-white/65">Valutazione media su Google</p>
          </div>
        </div>
      </div>
    </section>
  );
}
