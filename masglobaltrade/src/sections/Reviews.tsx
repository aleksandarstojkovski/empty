import { ExternalLink, GoogleIcon, Star } from "../components/icons";
import { useReviews } from "../lib/api";
import { REVIEWS_URL } from "../lib/site";

const AVATAR_COLORS = ["#EA4335", "#4285F4", "#34A853", "#FBBC05"];
const DISTRIBUTION = [
  { label: "5", pct: 88 },
  { label: "4", pct: 8 },
  { label: "3", pct: 2 },
  { label: "2", pct: 1 },
  { label: "1", pct: 1 },
];

function avatarColor(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[#D89B00]" role="img" aria-label={`${rating} stelle su 5`}>
      {Array.from({ length: Math.max(0, Math.round(rating)) }, (_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { data, isLoading } = useReviews();
  const reviews = data?.reviews ?? [];
  const rating = data?.rating ?? 4.9;
  const count = data?.userRatingCount ?? 0;

  return (
    <section id="reviews" className="bg-[#f3f6f8] py-20 md:py-[88px]">
      <div className="mx-auto max-w-[1080px] px-5">
        <div className="grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr]">
          <div className="mas-reveal">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#08779e]">Recensioni Google</p>
            <h2 className="mt-3 font-bold leading-[1.12] tracking-[-.035em]">Cosa dicono le persone che hanno già venduto con noi.</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600">Esperienze reali e verificate di clienti in tutto il Canton Ticino.</p>
            <div className="mt-7 rounded-[20px] bg-primary p-6 text-white">
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold leading-none">{rating.toFixed(1)}</span>
                <div>
                  <Stars rating={rating} />
                  <p className="mt-1 text-[11px] text-white/65">{count > 0 ? `${count} recensioni verificate` : "Recensioni verificate"}</p>
                </div>
              </div>
              <a
                href={REVIEWS_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent transition-colors hover:text-white"
              >
                Leggi tutte le recensioni
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {isLoading &&
              Array.from({ length: 4 }, (_, i) => <div key={i} className="h-44 animate-pulse rounded-2xl bg-white" />)}
            {!isLoading && reviews.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-7 text-sm leading-relaxed text-slate-600 md:col-span-2">
                Le recensioni verificate saranno disponibili tra poco. Puoi leggere tutte le esperienze dei nostri clienti su Google.
                <a
                  href={REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-semibold text-primary hover:text-accent"
                >
                  Apri Google Reviews <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
            {reviews.slice(0, 4).map((r, i) => (
              <article key={r.id} className="mas-card flex flex-col gap-3 rounded-2xl bg-white p-5" data-testid={`card-review-${i}`}>
                <div className="flex items-start gap-3">
                  {r.profilePhotoUrl ? (
                    <img
                      alt={r.authorName}
                      width="36"
                      height="36"
                      className="h-9 w-9 shrink-0 rounded-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      src={r.profilePhotoUrl}
                    />
                  ) : (
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: avatarColor(r.authorName) }}
                    >
                      {r.authorName.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm font-semibold text-primary" data-testid={`text-reviewer-name-${i}`}>
                      {r.authorName}
                    </div>
                    <div className="text-[11px] text-slate-500">{r.relativeTime}</div>
                  </div>
                  <GoogleIcon />
                </div>
                <Stars rating={r.rating} />
                <p className="flex-grow text-[13px] leading-relaxed text-slate-600" data-testid={`text-review-content-${i}`}>
                  {r.content}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-9 grid gap-6 border-t border-slate-200 pt-7 md:grid-cols-[.7fr_1.3fr]">
          <div className="flex items-center gap-3">
            <GoogleIcon size={28} />
            <div>
              <p className="text-[12px] font-semibold text-primary">Google Reviews</p>
              <p className="text-[11px] text-slate-500">Dati aggiornati automaticamente</p>
            </div>
          </div>
          <div className="grid gap-1">
            {DISTRIBUTION.map(({ label, pct }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="w-2 text-[11px] text-slate-500">{label}</span>
                <Star className="h-3 w-3 shrink-0 fill-current text-[#D89B00]" />
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-[#FBBC05]" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
