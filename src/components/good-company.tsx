import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface GoodCompanyProps {
  content: ClubVereContent;
}

const goodCompanyImages = {
  bookClub: {
    src: "/images/vere-edit-book-club.webp",
    alt: "Club Vere guests gathered around a cafe table for book club",
  },
  dinner: {
    src: "/images/vere-edit-dinner.webp",
    alt: "Club Vere guests sharing a candlelit dinner",
  },
  workshop: {
    src: "/images/vere-edit-workshop.webp",
    alt: "Club Vere guests making crafts together at a workshop",
  },
} as const;

export function GoodCompany({ content }: GoodCompanyProps) {
  return (
    <main className="concept good-company" id="main-content">
      <header className="gc-nav page-shell">
        <a
          aria-label="Club Vere, back to top"
          className="gc-wordmark"
          href="#top"
        >
          <Image
            alt="Club Vere"
            height={180}
            priority
            src="/brand/club-vere-wordmark.png"
            width={600}
          />
        </a>
        <nav aria-label="Good Company navigation">
          <a href="#about">The club</a>
          <a href="#past-event">Past event</a>
          <a href="#formats">Plans</a>
          <SiteLink href={content.instagramUrl}>Instagram</SiteLink>
        </nav>
      </header>

      <section className="gc-hero page-shell" id="top">
        <div className="gc-hero__copy reveal-item">
          <h1>{content.heroTitle}</h1>
          <p>{content.heroBody}</p>
          <SiteLink className="gc-button" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>

        <div className="gc-hero__stack" aria-label="Scenes from Club Vere">
          <figure className="gc-paper gc-hero__photo gc-hero__photo--park">
            <Image
              alt={content.images.park.alt}
              className="cover-image"
              fill
              preload
              sizes="(max-width: 767px) 82vw, 38vw"
              src={content.images.park.src}
            />
          </figure>
          <figure className="gc-paper gc-hero__photo gc-hero__photo--details">
            <Image
              alt={content.images.details.alt}
              className="cover-image"
              fill
              loading="eager"
              sizes="(max-width: 767px) 44vw, 18vw"
              src={content.images.details.src}
            />
          </figure>
          <div aria-hidden="true" className="gc-paper gc-hero__note">
            <span>good</span>
            <span>company</span>
          </div>
          <div aria-hidden="true" className="gc-hero__tape" />
        </div>
      </section>

      <div aria-label="Ways to gather" className="gc-ticker">
        <div className="gc-ticker__track">
          {[false, true].map((hidden) => (
            <div aria-hidden={hidden || undefined} key={String(hidden)}>
              {content.formats.map((format) => (
                <span key={format.title}>{format.title}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="gc-about page-shell" id="about">
        <div className="gc-about__copy">
          <h2>{content.aboutTitle}</h2>
          <p>{content.aboutBody}</p>
        </div>
        <figure className="gc-paper gc-about__photo">
          <Image
            alt={goodCompanyImages.dinner.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 82vw, 28vw"
            src={goodCompanyImages.dinner.src}
          />
        </figure>
        <p aria-hidden="true" className="gc-about__stamp">
          Club Vere
          <span>Vancouver, BC</span>
        </p>
      </section>

      <section className="gc-event page-shell" id="past-event">
        <div className="gc-event__invitation">
          <div className="gc-event__meta">
            <p>{content.pastEvent.status}</p>
            <p>{content.pastEvent.date}</p>
          </div>
          <h2>{content.pastEvent.title}</h2>
          <p className="gc-event__description">
            {content.pastEvent.description}
          </p>
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
          <SiteLink className="gc-text-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
        <figure className="gc-paper gc-event__photo">
          <Image
            alt={content.images.movement.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 92vw, 54vw"
            src={content.images.movement.src}
          />
        </figure>
      </section>

      <section className="gc-formats page-shell" id="formats">
        <h2>{content.formatsTitle}</h2>
        <div className="gc-formats__papers">
          {content.formats.map((format, index) => (
            <article
              className={`gc-paper gc-format gc-format--${index + 1}`}
              key={format.title}
            >
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gc-community page-shell">
        <div className="gc-community__copy">
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
        </div>
        <div className="gc-community__collage">
          <figure className="gc-paper gc-community__photo gc-community__photo--lead">
            <Image
              alt={content.images.picnic.alt}
              className="cover-image"
              fill
              sizes="(max-width: 767px) 76vw, 30vw"
              src={content.images.picnic.src}
            />
          </figure>
          <figure className="gc-paper gc-community__photo gc-community__photo--book">
            <Image
              alt={goodCompanyImages.bookClub.alt}
              className="cover-image"
              fill
              sizes="(max-width: 767px) 48vw, 20vw"
              src={goodCompanyImages.bookClub.src}
            />
          </figure>
          <figure className="gc-paper gc-community__photo gc-community__photo--workshop">
            <Image
              alt={goodCompanyImages.workshop.alt}
              className="cover-image"
              fill
              sizes="(max-width: 767px) 44vw, 18vw"
              src={goodCompanyImages.workshop.src}
            />
          </figure>
        </div>
      </section>

      <section className="gc-final page-shell">
        <div>
          <h2>{content.finalTitle}</h2>
          <p>{content.finalBody}</p>
        </div>
        <SiteLink className="gc-button" href={content.instagramUrl}>
          See what&apos;s next
        </SiteLink>
      </section>

      <footer className="gc-footer page-shell">
        <p>{content.brand}</p>
        <p>{content.location}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
