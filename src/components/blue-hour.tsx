import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface BlueHourProps {
  content: ClubVereContent;
}

export function BlueHour({ content }: BlueHourProps) {
  return (
    <main className="concept blue-hour" id="main-content">
      <header className="bh-nav page-shell">
        <nav aria-label="Blue Hour navigation">
          <a href="#about">about</a>
          <a href="#past-event">events</a>
          <a href="#formats">formats</a>
          <SiteLink href={content.instagramUrl}>instagram</SiteLink>
        </nav>
        <span aria-hidden="true" className="bh-mark">
          R
        </span>
      </header>

      <section className="bh-hero page-shell" id="top">
        <p className="bh-giant" aria-hidden="true">
          club
          <br />
          vere
        </p>

        <div className="bh-hero__stack reveal-item">
          <figure className="bh-hero__photo bh-hero__photo--main">
            <Image
              alt={content.images.park.alt}
              className="cover-image"
              fill
              preload
              sizes="(max-width: 767px) 78vw, 28vw"
              src={content.images.park.src}
            />
          </figure>
          <figure className="bh-hero__photo bh-hero__photo--offset">
            <Image
              alt=""
              className="cover-image"
              fill
              sizes="(max-width: 767px) 42vw, 16vw"
              src={content.images.details.src}
            />
          </figure>
          <span aria-hidden="true" className="bh-plus bh-plus--one">
            +
          </span>
          <span aria-hidden="true" className="bh-plus bh-plus--two">
            +
          </span>
        </div>

        <div className="bh-hero__copy reveal-item">
          <h1>
            creating soft
            <br />
            local plans
          </h1>
          <p>{content.heroBody}</p>
          <ul className="bh-services">
            <li>community gatherings</li>
            <li>movement mornings</li>
            <li>picnic tables</li>
          </ul>
          <SiteLink className="bh-button" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>
      </section>

      <section className="bh-about page-shell" id="about">
        <h2>{content.aboutTitle}</h2>
        <p>{content.aboutBody}</p>
      </section>

      <section className="bh-event page-shell" id="past-event">
        <figure>
          <Image
            alt={content.images.movement.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 100vw, 55vw"
            src={content.images.movement.src}
          />
        </figure>
        <div className="bh-event__copy">
          <p className="bh-status">{content.pastEvent.status}</p>
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
          <SiteLink className="bh-text-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
      </section>

      <section className="bh-formats page-shell" id="formats">
        <h2>{content.formatsTitle}</h2>
        <div className="bh-formats__list">
          {content.formats.map((format) => (
            <article key={format.title}>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bh-community page-shell">
        <div>
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
        </div>
        <figure>
          <Image
            alt={content.images.picnic.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 88vw, 40vw"
            src={content.images.picnic.src}
          />
        </figure>
      </section>

      <section className="bh-final page-shell">
        <h2>{content.finalTitle}</h2>
        <p>{content.finalBody}</p>
        <SiteLink className="bh-button" href={content.instagramUrl}>
          See what&apos;s next
        </SiteLink>
      </section>

      <footer className="bh-footer page-shell">
        <p>{content.brand}</p>
        <p>{content.location}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
