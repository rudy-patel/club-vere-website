import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface NeonSignalProps {
  content: ClubVereContent;
}

export function NeonSignal({ content }: NeonSignalProps) {
  return (
    <main className="concept neon-signal" id="main-content">
      <header className="ns-nav">
        <a className="ns-wordmark" href="#top">
          club vere
        </a>
        <nav aria-label="Neon Signal navigation">
          <a href="#about">Why</a>
          <a href="#past-event">Archive</a>
          <SiteLink className="ns-pill" href={content.instagramUrl}>
            Instagram
          </SiteLink>
        </nav>
      </header>

      <section className="ns-hero" id="top">
        <div className="ns-band ns-band--lime">
          <p className="ns-hero__place">{content.location}</p>
          <h1 className="reveal-item">
            The antidote
            <span>to no fun city</span>
          </h1>
        </div>
        <div className="ns-band ns-band--magenta">
          <p>{content.heroBody}</p>
          <SiteLink className="ns-button" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>
        <div className="ns-band ns-band--yellow">
          <p className="ns-hero__date" aria-hidden="true">
            NEXT UP / FOLLOW ALONG
          </p>
          <div className="ns-ticker" aria-hidden="true">
            <div>
              MOVE WITH US / MAKE WITH US / EAT WITH US / MEET WITH US / MOVE WITH
              US / MAKE WITH US / EAT WITH US / MEET WITH US /
            </div>
          </div>
        </div>
        <figure className="ns-hero__cutout reveal-item">
          <Image
            alt={content.images.park.alt}
            className="cover-image"
            fill
            preload
            sizes="(max-width: 767px) 70vw, 34vw"
            src={content.images.park.src}
          />
        </figure>
      </section>

      <section className="ns-about" id="about">
        <div className="ns-about__inner page-shell">
          <h2>{content.aboutTitle}</h2>
          <p>{content.aboutBody}</p>
        </div>
      </section>

      <section className="ns-event page-shell" id="past-event">
        <div className="ns-event__poster">
          <p className="ns-status">{content.pastEvent.status}</p>
          <h2>
            Picnic
            <br />
            &amp; Pilates
          </h2>
          <p>{content.pastEvent.description}</p>
          <div className="ns-event__meta">
            <span>{content.pastEvent.date}</span>
            <span>{content.pastEvent.location}</span>
          </div>
          <SiteLink className="ns-text-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
        <figure>
          <Image
            alt={content.images.movement.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 100vw, 52vw"
            src={content.images.movement.src}
          />
        </figure>
      </section>

      <section className="ns-formats page-shell">
        <h2>{content.formatsTitle}</h2>
        <div className="ns-formats__grid">
          {content.formats.map((format, index) => (
            <article
              className={`ns-format ns-format--${index + 1}`}
              key={format.title}
            >
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ns-community page-shell">
        <figure className="ns-community__wide">
          <Image
            alt={content.images.picnic.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 100vw, 58vw"
            src={content.images.picnic.src}
          />
        </figure>
        <div>
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
          <figure className="ns-community__detail">
            <Image
              alt={content.images.details.alt}
              className="cover-image"
              fill
              sizes="(max-width: 767px) 60vw, 22vw"
              src={content.images.details.src}
            />
          </figure>
        </div>
      </section>

      <section className="ns-final">
        <div className="page-shell">
          <h2>{content.finalTitle}</h2>
          <p>{content.finalBody}</p>
          <SiteLink className="ns-button ns-button--dark" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>
      </section>

      <footer className="ns-footer page-shell">
        <p>club vere</p>
        <p>{content.location}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
