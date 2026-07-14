import Image from "next/image";

import { SiteLink } from "@/components/shared/site-link";
import type { ClubVereContent } from "@/lib/content";

interface InviteClubProps {
  content: ClubVereContent;
}

export function InviteClub({ content }: InviteClubProps) {
  return (
    <main className="concept invite-club" id="main-content">
      <div className="ic-frame">
        <header className="ic-nav">
          <a className="ic-wordmark" href="#top">
            {content.brand}
          </a>
          <nav aria-label="Invite Club navigation">
            <a href="#about">HOME</a>
            <a href="#past-event">EVENTS</a>
            <a href="#formats">FORMATS</a>
            <SiteLink href={content.instagramUrl}>INFO</SiteLink>
          </nav>
          <SiteLink className="ic-ticket" href={content.instagramUrl}>
            FOLLOW
          </SiteLink>
        </header>

        <section className="ic-hero" id="top">
          <div aria-hidden="true" className="ic-stripes" />
          <p className="ic-kicker">Curated gatherings</p>
          <h1 className="ic-logo reveal-item">
            <span>c</span>
            <span>l</span>
            <span>u</span>
            <span>b</span>
            <span className="ic-logo__gap">v</span>
            <span>e</span>
            <span>r</span>
            <span>e</span>
          </h1>
          <p className="ic-hero__body reveal-item">{content.heroBody}</p>
          <SiteLink className="ic-button reveal-item" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </section>

        <section className="ic-about" id="about">
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
          <div>
            <h2>{content.aboutTitle}</h2>
            <p>{content.aboutBody}</p>
          </div>
        </section>

        <section className="ic-event" id="past-event">
          <div className="ic-invite">
            <p className="ic-invite__stamp">{content.pastEvent.status}</p>
            <p className="ic-invite__sun" aria-hidden="true">
              *
            </p>
            <p className="ic-invite__date">{content.pastEvent.date}</p>
            <h2>SAVE THE DATE</h2>
            <p className="ic-invite__title">{content.pastEvent.title}</p>
            <ul>
              <li>
                <span>Good stretch</span>
              </li>
              <li>
                <span>Good snacks</span>
              </li>
              <li>
                <span>Nice times</span>
              </li>
            </ul>
            <dl>
              <div>
                <dt>Where</dt>
                <dd>{content.pastEvent.location}</dd>
              </div>
              <div>
                <dt>Vibe</dt>
                <dd>{content.pastEvent.description}</dd>
              </div>
            </dl>
            <SiteLink className="ic-text-link" href={content.eventbriteUrl}>
              View the past event
            </SiteLink>
          </div>
          <figure>
            <Image
              alt={content.images.movement.alt}
              className="cover-image"
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              src={content.images.movement.src}
            />
          </figure>
        </section>

        <section className="ic-formats" id="formats">
          <h2>{content.formatsTitle}</h2>
          <div className="ic-formats__grid">
            {content.formats.map((format) => (
              <article key={format.title}>
                <h3>{format.title}</h3>
                <p>{format.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ic-community">
          <div>
            <h2>{content.communityTitle}</h2>
            <p>{content.communityBody}</p>
          </div>
          <div className="ic-community__photos">
            <figure>
              <Image
                alt={content.images.picnic.alt}
                className="cover-image"
                fill
                sizes="(max-width: 767px) 70vw, 28vw"
                src={content.images.picnic.src}
              />
            </figure>
            <figure>
              <Image
                alt={content.images.details.alt}
                className="cover-image"
                fill
                sizes="(max-width: 767px) 50vw, 20vw"
                src={content.images.details.src}
              />
            </figure>
          </div>
        </section>

        <section className="ic-final">
          <p className="ic-final__eyebrow">See you next time</p>
          <h2>{content.finalTitle}</h2>
          <p>{content.finalBody}</p>
          <SiteLink className="ic-button" href={content.instagramUrl}>
            See what&apos;s next
          </SiteLink>
        </section>

        <footer className="ic-footer">
          <p>{content.tagline}</p>
          <p>{content.location}</p>
          <SiteLink href={content.instagramUrl}>@club.vere</SiteLink>
        </footer>
      </div>
    </main>
  );
}
