import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface SoftFocusProps {
  content: ClubVereContent;
}

export function SoftFocus({ content }: SoftFocusProps) {
  return (
    <main className="concept soft-focus" id="main-content">
      <header className="sf-nav page-shell">
        <a className="sf-wordmark" href="#top">
          {content.brand}
        </a>
        <nav aria-label="Soft Focus navigation">
          <a href="#about">Why Vere</a>
          <a href="#past-event">Past event</a>
          <SiteLink href={content.instagramUrl}>Instagram</SiteLink>
        </nav>
      </header>

      <section className="sf-hero page-shell" id="top">
        <div className="sf-hero__copy reveal-item">
          <p className="sf-kicker">Vancouver community events</p>
          <h1>
            Meet your
            <span>new plans.</span>
          </h1>
          <p>{content.heroBody}</p>
          <SiteLink className="sf-button" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>

        <div className="sf-hero__visual reveal-item">
          <div aria-hidden="true" className="sf-orbit sf-orbit--one" />
          <div aria-hidden="true" className="sf-orbit sf-orbit--two" />
          <figure>
            <Image
              alt={content.images.park.alt}
              className="cover-image"
              fill
              preload
              sizes="(max-width: 767px) 92vw, 52vw"
              src={content.images.park.src}
            />
          </figure>
          <p className="sf-photo-note">Outside is calling</p>
        </div>
      </section>

      <section className="sf-about page-shell" id="about">
        <p className="sf-section-mark">The idea</p>
        <div className="sf-about__text">
          <h2>{content.aboutTitle}</h2>
          <p>{content.aboutBody}</p>
        </div>
        <figure className="sf-about__image">
          <Image
            alt={content.images.details.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 70vw, 24vw"
            src={content.images.details.src}
          />
        </figure>
      </section>

      <section className="sf-event page-shell" id="past-event">
        <figure className="sf-event__image">
          <Image
            alt={content.images.movement.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 100vw, 58vw"
            src={content.images.movement.src}
          />
        </figure>
        <div className="sf-event__copy">
          <p className="sf-status">{content.pastEvent.status}</p>
          <h2>{content.pastEvent.title}</h2>
          <p>{content.pastEvent.description}</p>
          <dl>
            <div>
              <dt>When</dt>
              <dd>{content.pastEvent.date}</dd>
            </div>
            <div>
              <dt>Where</dt>
              <dd>{content.pastEvent.location}</dd>
            </div>
          </dl>
          <SiteLink className="sf-text-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
      </section>

      <section className="sf-formats page-shell">
        <h2>{content.formatsTitle}</h2>
        <div className="sf-formats__grid">
          {content.formats.map((format, index) => (
            <article className={`sf-format sf-format--${index + 1}`} key={format.title}>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sf-community page-shell">
        <div className="sf-community__copy">
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
        </div>
        <figure className="sf-community__portrait">
          <Image
            alt={content.images.picnic.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 86vw, 37vw"
            src={content.images.picnic.src}
          />
        </figure>
        <figure className="sf-community__square">
          <Image
            alt=""
            className="cover-image"
            fill
            sizes="(max-width: 767px) 42vw, 20vw"
            src={content.images.details.src}
          />
        </figure>
      </section>

      <section className="sf-final page-shell">
        <p className="sf-wordmark">{content.brand}</p>
        <h2>{content.finalTitle}</h2>
        <p>{content.finalBody}</p>
        <SiteLink className="sf-button" href={content.instagramUrl}>
          See what&apos;s next
        </SiteLink>
      </section>

      <footer className="sf-footer page-shell">
        <p>{content.location}</p>
        <p>{content.tagline}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
