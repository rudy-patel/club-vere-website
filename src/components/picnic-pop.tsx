import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface PicnicPopProps {
  content: ClubVereContent;
}

export function PicnicPop({ content }: PicnicPopProps) {
  return (
    <main className="concept picnic-pop" id="main-content">
      <header className="pp-nav page-shell">
        <a className="pp-wordmark" href="#top">
          {content.brand}
        </a>
        <nav aria-label="Picnic Pop navigation">
          <a href="#hello">About</a>
          <a href="#past-event">Events</a>
          <SiteLink href={content.instagramUrl}>Instagram</SiteLink>
        </nav>
      </header>

      <section className="pp-hero page-shell" id="top">
        <div className="pp-hero__copy reveal-item">
          <p className="pp-sticker">Plans worth leaving the house for</p>
          <h1>
            Meet your
            <span>new plans!</span>
          </h1>
          <p>{content.heroBody}</p>
          <SiteLink className="pp-button" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </div>
        <div className="pp-hero__art reveal-item">
          <div aria-hidden="true" className="pp-sun">FUN</div>
          <figure>
            <Image
              alt={content.images.park.alt}
              className="cover-image"
              fill
              preload
              sizes="(max-width: 767px) 92vw, 48vw"
              src={content.images.park.src}
            />
          </figure>
          <div aria-hidden="true" className="pp-flower pp-flower--one">✿</div>
          <div aria-hidden="true" className="pp-flower pp-flower--two">✿</div>
        </div>
      </section>

      <section className="pp-hello page-shell" id="hello">
        <figure>
          <Image
            alt={content.images.picnic.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 92vw, 40vw"
            src={content.images.picnic.src}
          />
        </figure>
        <div>
          <p className="pp-hand">Hi, Vancouver!</p>
          <h2>{content.aboutTitle}</h2>
          <p>{content.aboutBody}</p>
        </div>
      </section>

      <section className="pp-event page-shell" id="past-event">
        <div className="pp-event__ticket">
          <p className="pp-status">{content.pastEvent.status}</p>
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
          <SiteLink className="pp-link" href={content.eventbriteUrl}>
            View the past event
          </SiteLink>
        </div>
        <figure>
          <Image
            alt={content.images.movement.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 92vw, 51vw"
            src={content.images.movement.src}
          />
        </figure>
      </section>

      <section className="pp-formats page-shell">
        <h2>{content.formatsTitle}</h2>
        <div className="pp-formats__grid">
          {content.formats.map((format, index) => (
            <article className={`pp-format pp-format--${index + 1}`} key={format.title}>
              <span aria-hidden="true">{["SUN", "MAKE", "GO", "STAY"][index]}</span>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pp-community page-shell">
        <div className="pp-community__copy">
          <p className="pp-hand">No cool-girl test.</p>
          <h2>{content.communityTitle}</h2>
          <p>{content.communityBody}</p>
        </div>
        <figure className="pp-community__details">
          <Image
            alt={content.images.details.alt}
            className="cover-image"
            fill
            sizes="(max-width: 767px) 92vw, 44vw"
            src={content.images.details.src}
          />
        </figure>
        <figure className="pp-community__picnic">
          <Image
            alt=""
            className="cover-image"
            fill
            sizes="(max-width: 767px) 48vw, 21vw"
            src={content.images.picnic.src}
          />
        </figure>
      </section>

      <section className="pp-final page-shell">
        <div aria-hidden="true" className="pp-final__flower">✿</div>
        <p className="pp-wordmark">{content.brand}</p>
        <h2>{content.finalTitle}</h2>
        <p>{content.finalBody}</p>
        <SiteLink className="pp-button" href={content.instagramUrl}>
          See what&apos;s next
        </SiteLink>
      </section>

      <footer className="pp-footer page-shell">
        <p>{content.tagline}</p>
        <p>{content.location}</p>
        <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
      </footer>
    </main>
  );
}
