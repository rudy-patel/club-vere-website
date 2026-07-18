import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface VereAfterDarkProps {
  content: ClubVereContent;
}

export function VereAfterDark({ content }: VereAfterDarkProps) {
  return (
    <main className="concept after-dark" id="main-content">
      <header className="ad-nav page-shell">
        <a className="ad-wordmark" href="#top">
          CLUB VERE
        </a>
        <nav aria-label="Vere After Dark navigation">
          <a href="#manifesto">Manifesto</a>
          <a href="#past-event">Archive</a>
          <SiteLink href={content.instagramUrl}>IG</SiteLink>
        </nav>
      </header>

      <section className="ad-hero page-shell" id="top">
        <h1 aria-label="Club Vere" className="ad-hero__brand reveal-item">
          <span>CLUB</span>
          <span>VERE</span>
        </h1>
        <div className="ad-hero__content reveal-item">
          <h2>{content.formatsTitle}</h2>
          <div className="ad-hero__intro">
            <p>{content.heroBody}</p>
            <SiteLink className="ad-button" href={content.instagramUrl}>
              See what&apos;s next
            </SiteLink>
          </div>
          <div className="ad-hero__formats">
            {content.formats.map((format) => (
              <article key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="ad-ticker">
        <div>
          MOVE WITH US&nbsp;&nbsp; MAKE WITH US&nbsp;&nbsp; EAT WITH US&nbsp;&nbsp; MEET WITH US&nbsp;&nbsp;
          MOVE WITH US&nbsp;&nbsp; MAKE WITH US&nbsp;&nbsp; EAT WITH US&nbsp;&nbsp; MEET WITH US&nbsp;&nbsp;
        </div>
      </div>

      <section className="ad-manifesto page-shell" id="manifesto">
        <h2>{content.aboutTitle}</h2>
        <div>
          <p>{content.aboutBody}</p>
          <p>Come solo. Be awkward for five minutes. Find your people.</p>
        </div>
      </section>

      <section className="ad-event page-shell" id="past-event">
        <figure>
          <Image
            alt={content.images.movement.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 100vw, 60vw"
            src={content.images.movement.src}
          />
        </figure>
        <div className="ad-event__poster">
          <p>{content.pastEvent.status}</p>
          <h2>PICNIC<br />&amp; PILATES</h2>
          <p>{content.pastEvent.description}</p>
          <div className="ad-event__meta">
            <span>{content.pastEvent.date}</span>
            <span>{content.pastEvent.location}</span>
          </div>
          <SiteLink className="ad-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
      </section>

      <section className="ad-community page-shell">
        <figure>
          <Image
            alt={content.images.details.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 100vw, 47vw"
            src={content.images.details.src}
          />
        </figure>
        <div>
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
        </div>
      </section>

      <section className="ad-final page-shell">
        <h2>{content.finalTitle}</h2>
        <SiteLink className="ad-button" href={content.instagramUrl}>
          See what&apos;s next
        </SiteLink>
      </section>

      <footer className="ad-footer page-shell">
        <p>CLUB VERE</p>
        <p>{content.location}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
