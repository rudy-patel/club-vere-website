# The Vere Edit Design

## Outcome

Add a fifth reviewable Club Vere landing-page direction named The Vere Edit. Preserve the four existing concepts, shared content, routes, links, metadata, and design-switching behavior.

## Brand source

`docs/brand/Vere Brand Identity V1.pdf` is the primary visual reference. The implementation uses its approved palette, Club Vere wordmark, monogram language, DM Sans body typography, and genuine event photography.

The embedded Firelli font files permit preview and print embedding, not webfont redistribution. The site therefore uses:

- The exact Club Vere wordmark as a cropped transparent image asset.
- DM Sans through `next/font/google` for body copy.
- The existing editorial font as the temporary display fallback until licensed Firelli webfont files are supplied.

## Design read

The Vere Edit is a dark ocean-blue editorial experience for design-conscious women seeking community events in Vancouver. It should feel high contrast, vibrant, kinetic, feminine, and culturally confident without reading as a nightclub or a generic wellness brand.

Design dials:

- `DESIGN_VARIANCE: 9`
- `MOTION_INTENSITY: 7`
- `VISUAL_DENSITY: 4`

## Visual system

Use the official palette:

- Ocean blue: `#1D283A`
- Sky blue: `#88B0BE`
- Moss green: `#37512E`
- Olive green: `#A4C672`
- Stone brown: `#A89C8E`
- Chalk: `#F0EDE7`

The page remains dark ocean blue throughout. Sky blue provides structure, olive green provides the single interactive accent, chalk carries primary text, and stone brown is reserved for quiet secondary details.

The page uses sharp rectangular media, one consistent pill treatment for buttons, and no generic card grid. Photography is high contrast and documentary. No inspiration imagery from the brand deck is presented as Club Vere event photography.

## Composition

### Navigation and hero

The hero fits within the initial desktop viewport. A compact navigation uses the real Club Vere wordmark. The main statement is “The antidote to no fun city.” A slatted photo reveal contains a genuine Club Vere event image, with one offset documentary image creating the asymmetric collage.

The hero has one primary action, “See what’s next,” linking to Instagram.

### Brand manifesto

An editorial statement introduces Club Vere as a women-led community arm focused on sincere connection. The layout uses oversized display typography, one italic accent, and a large `V` monogram treatment without adding unsupported claims.

### Formats

The four shared event formats appear as a numbered horizontal editorial index. The section avoids equal cards and preserves the existing content object.

### Past event

Picnic & Pilates remains explicitly labeled as a past event. The section combines the genuine Pilates photograph from the brand deck with the existing date, location, description, and Eventbrite link.

### Community gallery and final action

The closing gallery uses genuine book-club, dinner, workshop, and social-event photography extracted from the brand deck. A restrained horizontal photo rail supplies the kinetic moment. The final action retains the existing Instagram destination and shared closing copy.

## Motion

- Hero copy and media enter with short transform and opacity transitions.
- Slats reveal the hero image in a quick stagger that communicates the editorial unveiling.
- The photo rail moves only on pointer hover and remains usable without motion.
- Buttons use subtle press feedback.
- All automatic movement stops under `prefers-reduced-motion: reduce`.
- No scroll listener, animation dependency, or perpetual marquee is added.

## Assets

Commit:

- The original PDF under `docs/brand/`.
- A short brand reference note under `docs/brand/README.md`.
- A transparent Club Vere wordmark crop.
- Five optimized WebP images extracted from page 18 of the supplied PDF.

Do not commit the extracted embedded font files.

## Accessibility and performance

- Semantic landmarks, one H1, labeled navigation, visible focus, and descriptive image text.
- Button text meets WCAG AA contrast against olive green.
- All touch targets are at least 44px.
- `next/image` reserves media dimensions and preloads only the hero image.
- Responsive layouts cover 320px through wide desktop with no horizontal overflow.

## Verification

- Test the fifth design ID, switcher option, shell mapping, and complete concept rendering.
- Run `pnpm test`, `pnpm lint`, and `pnpm build` with Node 20.20.2.
- Browser-check 375x812, 768x1024, and 1440x1000.
- Inspect the hero, past event, gallery, switcher, reduced motion, focus states, and horizontal overflow.
