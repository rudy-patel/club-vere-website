# Club Vere Landing Page Design

## Outcome

Build a single responsive marketing site for Club Vere with three complete landing-page concepts that can be switched in place. The site is informational only. Registration, payment, and event updates remain on third-party services.

## Audience and brand read

The primary audience is women aged 18-35 in Vancouver who want low-pressure ways to meet people and try local experiences. The brand should feel warm, self-aware, social, and visually confident without becoming childish or exclusive.

The supplied material establishes these durable brand signals:

- The lowercase `club vere` wordmark and a soft italic editorial voice.
- Misty blue-to-green gradients, candid outdoor photography, florals, gingham, pink ribbon, and red accents.
- Events that combine an activity with casual social time.
- A useful positioning line: "The antidote to no fun city."
- High-contrast contemporary editorial layouts with oversized type and playful composition.

## Product structure

One Next.js App Router page will render one of three independent page templates from a shared typed content object. A fixed design switcher changes the active template without navigation and stores the preference in local storage. The switcher remains accessible by keyboard and works at narrow mobile widths.

All concepts include:

1. A concise hero with one primary action.
2. The Club Vere community premise.
3. Picnic & Pilates as a past-event proof point.
4. A flexible description of the kinds of future gatherings Club Vere can host.
5. A community/photo moment.
6. A direct Instagram call to action.
7. A compact footer with the external links.

No future dates, attendance counts, testimonials, or event claims will be invented. The past Pilates listing remains clearly labeled as a past event. Current discovery calls to action lead to Instagram. The supplied Eventbrite page remains available as an event recap link.

## Concepts

### Soft Focus

An airy, editorial composition using mist blue, fresh green, chalk, and raspberry. The hero pairs a large lowercase wordmark with an original outdoor community image. The page uses soft image masks, restrained translucent surfaces, and slow ambient movement. Corners are softly rounded, while buttons use a consistent pill shape.

### Vere After Dark

A deep forest and off-black composition with acid lime and dusty pink. Oversized condensed type, sharp collage crops, kinetic type, and one meaningful horizontal ticker create a late-night cultural-poster energy. Layout geometry stays mostly sharp. Motion is brisk but limited to entrance, hover, and the single ticker.

### Picnic Pop

A sky-blue, strawberry, butter-yellow, and grass-green composition inspired by gingham blankets, flowers, and handmade invitations. The page uses playful cutout photography, irregular but controlled grids, sticker-like labels, and light spring motion. Cards use one consistent rounded shape and buttons remain pill-shaped.

## Visual assets

Generate four original, photorealistic editorial images:

- A wide Vancouver park gathering with a small group of young adult women.
- A candid picnic table scene with flowers, snacks, ribbon, and gingham.
- A wide movement class in a coastal Vancouver park.
- A close event-detail still life with cards, florals, and colorful drinks.

Images must avoid logos, legible text, watermarks, exaggerated influencer styling, or visual cues that imply an event actually occurred. They are brand-world imagery, not documentary claims.

## Interaction and motion

- Switching designs uses a short opacity/transform transition and preserves the current scroll position.
- Motion communicates hierarchy, feedback, or state change only.
- CSS transform and opacity are the only animated properties.
- All automatic motion stops under `prefers-reduced-motion: reduce`.
- Hover interactions are not required for comprehension and all controls have visible keyboard focus.

## Technical architecture

- Next.js 16.2.10 with React 19.2.7 and TypeScript.
- Tailwind CSS 4 for build-time utilities plus scoped concept CSS for the expressive art direction.
- Server-rendered page shell and templates where possible.
- One small client component owns the design preference and transition state.
- `next/image` for generated assets, with fixed dimensions and responsive sizes to prevent layout shift.
- No database, API routes, analytics package, form backend, or animation framework.

## Performance and accessibility

- Static output and no live-service calls at runtime.
- Hero media is correctly sized and prioritized only for the active initial concept.
- Responsive layouts cover 320px phones through wide desktop screens.
- Semantic landmarks, descriptive image alternatives, skip link, visible focus, and 44px minimum touch targets.
- WCAG AA contrast for body copy and controls.
- System color preference is respected where a concept supplies both token sets; brand identity remains consistent.
- Target Lighthouse scores: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.

## Metadata and discovery

The page includes a descriptive title, summary, canonical metadata, Open Graph fields, social image metadata, and local-business/event-community structured data without fabricated address or schedule details.

## Verification

- Unit tests cover design selection parsing, persistence behavior, and switcher semantics.
- `npm run lint`, `npm run test`, and `npm run build` pass.
- Browser checks cover 375x812, 768x1024, 1440x1000, keyboard switching, reduced motion, and both system color modes.
- Production deployment is inspected after publishing.

