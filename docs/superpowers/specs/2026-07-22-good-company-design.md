# Good Company Design

## Outcome

Replace Design 03, Blue Hour, with a complete Club Vere landing-page direction named Good Company. Preserve its position as option 03 and leave the other four concepts, shared content, routes, links, metadata, and design-switching behavior unchanged.

## Brand and reference sources

`docs/brand/Vere Brand Identity V1.pdf` is the source of truth for identity. Good Company uses the approved Club Vere wordmark, palette, typography rules, and genuine event photography. The design must remain high contrast, vibrant, kinetic, feminine, curated, and relatable.

[Family Supper Club](https://familysupper.club/) is a composition reference only. Good Company borrows its layered invitation ephemera, overlapping print pieces, playful scale, and tactile motion. It does not copy its illustrations, food-specific content, typefaces, color palette, or page structure.

Design 05, The Vere Edit, is the internal quality and system reference. Good Company must show the same brand fidelity, responsive discipline, accessibility, and restraint while remaining visually distinct.

## Design read

Good Company treats a Club Vere event as the plan worth pulling out of the group chat. The page feels like a small stack of invitations, photos, notes, and saved details from a socially full weekend in Vancouver. It is inclusive and warm rather than exclusive or nostalgic.

Design dials:

- `DESIGN_VARIANCE: 9`
- `MOTION_INTENSITY: 6`
- `VISUAL_DENSITY: 7`

## Visual system

Use only the official palette:

- Ocean blue: `#1D283A`
- Sky blue: `#88B0BE`
- Moss green: `#37512E`
- Olive green: `#A4C672`
- Stone brown: `#A89C8E`
- Chalk: `#F0EDE7`

Ocean blue and chalk form the page foundation. Olive, sky, moss, and stone create contrasting invitation surfaces and stamped details. The palette remains controlled even when the composition becomes dense.

Use the approved wordmark asset for the exact Club Vere signature, DM Sans for body copy, and the existing editorial display face as the temporary Firelli substitute. Do not extract or redistribute the PDF-embedded Firelli files.

Use sharp or intentionally clipped paper-like edges, restrained corner rounding, thin rules, and tactile offsets. Avoid generic card grids, glass effects, gradients, fabricated handwriting, or hand-drawn illustrations. All photography must be genuine Club Vere event imagery already approved in the repository.

## Composition

### Navigation and hero

A compact navigation keeps the approved wordmark, section links, and Instagram destination on one desktop line. The initial viewport contains one H1, the shared hero body, one Instagram action, and a layered stack of invitation-like photo pieces. The headline remains “Meet your new plans.”

The stack uses genuine event photography, oversized date and location fragments, clipped color papers, and shallow rotations. Decorative text remains meaningful and derives from the shared content. The primary action is “See what’s next.”

### Social ticker and brand statement

A narrow ticker introduces the four gathering verbs: move, make, go, and stay. It provides one purposeful automatic motion moment and becomes static under reduced motion.

The following statement uses the shared about title and body in a large editorial composition. One offset photo interrupts the typography, creating a scrapbook-like transition without adding extra marketing copy.

### Past event invitation

Picnic & Pilates appears as a large invitation assembled from the real movement photograph, status, title, date, location, description, and Eventbrite archive link. The past-event status stays unmistakable. The composition may use registration marks, stamps, or clipped corners built with CSS, but no fake RSVP state or fabricated event details.

### Gathering formats

The four shared formats become individually shaped paper slips arranged as one responsive composition rather than four equal cards. Each slip keeps its title and description. Desktop allows controlled overlap; mobile becomes a clear vertical stack with no hidden copy.

### Community collage and final action

The community section combines the shared community copy with a collage of genuine Club Vere photographs. Crops and depth may vary, but every meaningful image retains descriptive alternative text.

The final section simplifies into one strong statement, the shared final body, and the same “See what’s next” Instagram action. The footer keeps brand, location, and Instagram information.

## Motion and interaction

- Hero invitation pieces enter in a short stagger that communicates a stack being placed on a table.
- The ticker moves steadily without requiring interaction.
- Photo pieces lift or rotate by a small amount on pointer hover.
- Buttons and links provide visible focus and tactile press feedback.
- All automatic and decorative motion stops under `prefers-reduced-motion: reduce` while preserving the final composition.
- No animation dependency, scroll listener, cursor effect, or continuous parallax is added.

## Component and state changes

- Replace `src/components/blue-hour.tsx` with `src/components/good-company.tsx`.
- Replace only the Blue Hour CSS block and its responsive rules in `src/app/globals.css` with Good Company styles.
- Rename the design ID from `blue-hour` to `good-company` in the design registry, shell mapping, switcher, tests, and README.
- Keep the switcher number as `03` and display label as `Good Company`.
- Treat the legacy persisted value `blue-hour` as `good-company` so visitors who selected Design 03 remain on Design 03 after deployment.
- Preserve shared content and external destinations. Do not add runtime data fetching or mutable page state.

## Accessibility and performance

- Use semantic landmarks, one H1, labeled navigation, visible focus, and a logical heading order.
- Maintain WCAG AA text contrast across every palette pairing and control.
- Keep all controls at least 44px tall and CTA labels on one line.
- Keep the hero and primary action visible in the initial desktop viewport.
- Use `next/image` with responsive sizes and preload only the principal hero photograph.
- Provide explicit layouts from 320px through wide desktop with no horizontal overflow.
- Keep the design usable when images fail, motion is reduced, or hover is unavailable.

## Verification

- Update focused tests for the renamed design ID, legacy-value migration, option 03 switcher behavior, shell mapping, and complete rendering.
- Run `pnpm test`, `pnpm lint`, `pnpm build`, and `git diff --check` using the project Node 20 contract.
- Browser-check 375x812, 768x1024, 1280x720, and 1440x1000.
- Inspect initial-viewport fit, every section, switcher selection, external links, focus states, reduced motion, console errors, image loading, and horizontal overflow.
- Compare the finished design against Design 05 for brand fidelity, typography, accessibility, responsive polish, and overall completeness.
