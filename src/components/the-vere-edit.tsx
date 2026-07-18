import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface TheVereEditProps {
  content: ClubVereContent;
}

const vereEditImages = {
  pilates: {
    src: "/images/vere-edit-pilates.webp",
    alt: "Club Vere guests taking part in an outdoor Pilates class",
  },
  bookClub: {
    src: "/images/vere-edit-book-club.webp",
    alt: "Club Vere guests gathered around a cafe table for book club",
  },
  dinner: {
    src: "/images/vere-edit-dinner.webp",
    alt: "A candlelit Club Vere dinner table",
  },
  sipShop: {
    src: "/images/vere-edit-sip-shop.webp",
    alt: "Guests browsing a Club Vere sip and shop event",
  },
  workshop: {
    src: "/images/vere-edit-workshop.webp",
    alt: "Club Vere guests making crafts together at a workshop",
  },
} as const;

export function TheVereEdit({ content }: TheVereEditProps) {
  return (
    <main className="concept the-vere-edit" id="main-content">
      <header className="ve-nav page-shell">
        <a aria-label="Club Vere, back to top" className="ve-wordmark" href="#top">
          <Image
            alt="Club Vere"
            height={180}
            priority
            src="/brand/club-vere-wordmark.png"
            width={600}
          />
        </a>
        <nav aria-label="The Vere Edit navigation">
          <a href="#about">The club</a>
          <a href="#past-event">Past event</a>
          <SiteLink href={content.instagramUrl}>Instagram</SiteLink>
        </nav>
      </header>

      <section className="ve-hero page-shell" id="top">
        <div className="ve-hero__copy reveal-item">
          <p className="ve-eyebrow">Vancouver, meet your new plans</p>
          <h1>
            The antidote to
            <span>no fun city.</span>
          </h1>
          <p className="ve-hero__body">{content.heroBody}</p>
          <SiteLink className="ve-button ve-button--olive" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>

        <div className="ve-hero__visual reveal-item">
          <figure>
            <Image
              alt={vereEditImages.sipShop.alt}
              className="cover-image"
              fill
              preload
              sizes="(max-width: 767px) 92vw, 44vw"
              src={vereEditImages.sipShop.src}
            />
            <div aria-hidden="true" className="ve-hero__slats">
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} />
              ))}
            </div>
          </figure>
          <p className="ve-hero__note">More than an event. A reason to show up.</p>
          <p aria-hidden="true" className="ve-hero__edition">
            V / 05
          </p>
        </div>
      </section>

      <section className="ve-manifesto" id="about">
        <div className="page-shell">
          <p className="ve-section-label">The club, in brief</p>
          <div className="ve-manifesto__copy">
            <h2>{content.aboutTitle}</h2>
            <p>{content.aboutBody}</p>
          </div>
        </div>
      </section>

      <section className="ve-formats page-shell">
        <div className="ve-formats__intro">
          <p className="ve-section-label">Pick your plan</p>
          <h2>{content.formatsTitle}</h2>
        </div>
        <div className="ve-formats__list">
          {content.formats.map((format, index) => (
            <article key={format.title}>
              <p>{String(index + 1).padStart(2, "0")}</p>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ve-story page-shell">
        <figure className="ve-story__lead">
          <Image
            alt={vereEditImages.bookClub.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 92vw, 48vw"
            src={vereEditImages.bookClub.src}
          />
        </figure>
        <div className="ve-story__copy">
          <p className="ve-section-label">A softer social life</p>
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
        </div>
        <figure className="ve-story__book">
          <Image
            alt={vereEditImages.sipShop.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 46vw, 22vw"
            src={vereEditImages.sipShop.src}
          />
        </figure>
      </section>

      <section className="ve-event page-shell" id="past-event">
        <div className="ve-event__copy">
          <p className="ve-status">{content.pastEvent.status}</p>
          <p className="ve-event__date">{content.pastEvent.date}</p>
          <h2>{content.pastEvent.title}</h2>
          <p>{content.pastEvent.description}</p>
          <dl>
            <div>
              <dt>Where</dt>
              <dd>{content.pastEvent.location}</dd>
            </div>
            <div>
              <dt>Energy</dt>
              <dd>Move, snack, linger</dd>
            </div>
          </dl>
          <SiteLink className="ve-text-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
        <figure>
          <Image
            alt={vereEditImages.pilates.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 92vw, 57vw"
            src={vereEditImages.pilates.src}
          />
        </figure>
      </section>

      <section aria-label="Scenes from Club Vere" className="ve-gallery page-shell">
        <figure>
          <Image
            alt={vereEditImages.dinner.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 46vw, 28vw"
            src={vereEditImages.dinner.src}
          />
        </figure>
        <p>
          Good plans.
          <span>Good people.</span>
          No awkward networking.
        </p>
        <figure>
          <Image
            alt={vereEditImages.workshop.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 46vw, 28vw"
            src={vereEditImages.workshop.src}
          />
        </figure>
      </section>

      <section className="ve-final">
        <div className="page-shell">
          <p className="ve-section-label">Consider this your invitation</p>
          <h2>{content.finalTitle}</h2>
          <p>{content.finalBody}</p>
          <SiteLink className="ve-button ve-button--ocean" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>
      </section>

      <footer className="ve-footer page-shell">
        <p>{content.location}</p>
        <p>{content.tagline}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
