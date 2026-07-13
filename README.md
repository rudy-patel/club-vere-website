# Club Vere

A fast, responsive marketing site for Club Vere, a Vancouver events community.

The landing page includes three complete visual directions that can be switched live from the floating control:

- **Soft Focus**: quiet editorial photography and generous whitespace
- **After Dark**: high-contrast poster energy with condensed type
- **Picnic Pop**: playful cards, flowers, and warm social-club color

The selected direction is saved in local storage, and switching designs preserves the visitor's scroll position.

## Local development

Requires Node.js 20.9 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
pnpm test
pnpm lint
pnpm build
```

## Content

Shared event and brand copy lives in `src/lib/content.ts`. The three visual treatments live in `src/components/soft-focus.tsx`, `src/components/vere-after-dark.tsx`, and `src/components/picnic-pop.tsx`.

The current event link is intentionally treated as a past-event archive. New bookings and RSVPs should continue to link to the relevant third-party platform.
