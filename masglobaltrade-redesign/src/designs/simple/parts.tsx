import type { ReactNode } from "react";
import { Link } from "wouter";
import { useBlogPosts, useReviews } from "@clone/lib/api";
import { formatDateIt } from "@clone/lib/format";
import { LOGOS } from "@clone/sections/Logos";
import { Icon, WhatsAppIcon } from "../../shared/Icon";
import { Reveal, Stagger, StaggerItem } from "../../shared/motion";
import { REVIEWS_URL, TEL, WHATSAPP } from "../../shared/site";
import { HOME } from "../../content/home";

export function CallButtons({ phone = "Chiama ora", onDark = false }: { phone?: string; onDark?: boolean }) {
  return (
    <>
      <a href={TEL} className="btn btn--primary">
        <Icon name="phone" /> {phone}
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className={`btn ${onDark ? "btn--wa" : "btn--wa"}`}>
        <WhatsAppIcon /> WhatsApp
      </a>
    </>
  );
}

export function Head({ eyebrow, title, intro, center = false, children }: { eyebrow?: string; title: string; intro?: string; center?: boolean; children?: ReactNode }) {
  return (
    <Reveal className={`head ${center ? "head--c" : ""}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h2">{title}</h2>
      </div>
      {(intro || children) && (
        <div className="head__side">
          {intro && <p className="head__intro">{intro}</p>}
          {children}
        </div>
      )}
    </Reveal>
  );
}

export function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} stelle su 5`}>
      {Array.from({ length: n }, (_, i) => (
        <Icon key={i} name="star" />
      ))}
    </span>
  );
}

export function Reviews() {
  const { data, isLoading } = useReviews();
  const reviews = (data?.reviews ?? []).slice(0, 6);
  const rating = data?.rating ?? 4.9;
  return (
    <section className="sec sec--alt" id="recensioni">
      <div className="wrap">
        <Head eyebrow={HOME.reviews.eyebrow} title={HOME.reviews.title} intro={HOME.reviews.intro}>
          <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="score">
            <b>{rating.toFixed(1)}</b>
            <span>
              <Stars />
              <small>{data?.userRatingCount ? `${data.userRatingCount} recensioni su Google` : "Recensioni su Google"}</small>
            </span>
          </a>
        </Head>
        {isLoading && (
          <div className="rvs">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="skeleton" style={{ height: 200 }} />
            ))}
          </div>
        )}
        {!isLoading && reviews.length === 0 && <p className="muted">Le recensioni verificate saranno disponibili tra poco. Puoi leggerle tutte su Google.</p>}
        {reviews.length > 0 && (
          <Stagger className="rvs">
            {reviews.map((r) => (
              <StaggerItem key={r.id} className="rv">
                <div className="rv__top">
                  <Stars n={Math.round(r.rating)} />
                  <span className="rv__src">Google</span>
                </div>
                <p className="rv__text">{r.content}</p>
                <div className="rv__who">
                  {r.profilePhotoUrl ? <img src={r.profilePhotoUrl} alt="" referrerPolicy="no-referrer" /> : <span className="rv__av">{r.authorName.charAt(0)}</span>}
                  <span>
                    <b>{r.authorName}</b>
                    <small>{r.relativeTime}</small>
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
        <div className="center-row">
          <a href={REVIEWS_URL} target="_blank" rel="noreferrer" className="link">
            Leggi tutte le recensioni su Google <Icon name="arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Logos() {
  return (
    <section className="logos" aria-label={HOME.logos.label}>
      <div className="wrap">
        <p className="logos__label">{HOME.logos.label}</p>
        <div className="logos__row">
          {LOGOS.map((l) => (
            <img key={l.src} src={l.src} alt={l.alt} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function PostCards({ limit = 3, posts: given }: { limit?: number; posts?: { slug: string; title: string; imageUrl?: string | null; category?: string | null; publishedAt: string; excerpt?: string | null }[] }) {
  const { data, isLoading } = useBlogPosts();
  const posts = given ?? (data ?? []).slice().sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)).slice(0, limit);
  if (!given && isLoading)
    return (
      <div className="posts">
        {Array.from({ length: limit }, (_, i) => (
          <div key={i} className="skeleton" style={{ height: 340 }} />
        ))}
      </div>
    );
  return (
    <Stagger className="posts">
      {posts.map((p) => (
        <StaggerItem key={p.slug}>
          <Link href={`/blog/${p.slug}`} className="post">
            <div className="post__img">
              <img src={p.imageUrl || "/blog1.webp"} alt="" loading="lazy" />
            </div>
            <div className="post__body">
              <p className="post__meta">
                {p.category && <span>{p.category}</span>}
                {formatDateIt(p.publishedAt)}
              </p>
              <h3>{p.title}</h3>
              {given && p.excerpt && <p className="post__ex">{p.excerpt}</p>}
              <span className="link">
                Leggi l'articolo <Icon name="arrow-right" />
              </span>
            </div>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function CtaBand({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <Reveal className="band">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="btns">{children}</div>
    </Reveal>
  );
}
