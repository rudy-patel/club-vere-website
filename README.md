# Club Vere

A fast, responsive marketing site for Club Vere, a Vancouver events community.

The landing page includes five complete visual directions that can be switched live from the floating control:

- **Soft Focus**: quiet editorial photography and generous whitespace
- **After Dark**: high-contrast poster energy with condensed type
- **Good Company**: layered invitations, tactile event ephemera, and genuine Club Vere photography
- **Invite Club**: framed invitation energy with burgundy and periwinkle
- **The Vere Edit**: the brand-led synthesis using Vere's official palette, wordmark, and real event photography

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

Shared event and brand copy lives in `src/lib/content.ts`. The visual treatments live in `src/components/` as independent concept components.

The current event link is intentionally treated as a past-event archive. New bookings and RSVPs should continue to link to the relevant third-party platform.

The canonical identity document and usage notes live in `docs/brand/`. The embedded Firelli font files are not licensed for web redistribution, so The Vere Edit uses the approved wordmark asset, DM Sans for body copy, and the existing editorial display face as a temporary Firelli-compatible fallback.
