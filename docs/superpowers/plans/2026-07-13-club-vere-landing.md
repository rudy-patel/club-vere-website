# Club Vere Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a fast responsive Club Vere marketing site with three independently composed designs and an in-page comparison switcher.

**Architecture:** A static Next.js App Router page owns a shared content model and delegates rendering to three focused concept components. A small client-side `DesignSwitcher` chooses the active concept, persists the preference, and leaves all content and external destinations centralized.

**Tech Stack:** Next.js 16.2.10, React 19.2.7, TypeScript 6.0.3, Tailwind CSS 4.3.2, Vitest 4.1.10, Testing Library, Vercel, GitHub.

## Global Constraints

- No booking, payments, RSVP processing, database, API routes, or invented future events.
- Use only the supplied Instagram and Eventbrite destinations.
- Support 320px phones through wide desktop screens with no horizontal overflow.
- Keep automatic motion transform/opacity-only and disable it for reduced-motion users.
- Generated imagery must live inside `public/images` and must not contain logos, text, or watermarks.
- Use `next/image` for content photography and semantic HTML for all controls and landmarks.

---

### Task 1: Project contract and switcher behavior

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`, `vitest.setup.ts`
- Create: `src/lib/designs.ts`
- Test: `src/lib/designs.test.ts`

**Interfaces:**
- Produces `DESIGN_IDS`, `DesignId`, `isDesignId(value)`, and `getInitialDesign(value)` for the client shell.

- [ ] Write tests that reject unknown stored values, accept all three design IDs, and default to `soft-focus`.
- [ ] Run `npm test -- src/lib/designs.test.ts` and confirm the missing-module failure.
- [ ] Add the minimal typed design helpers and configuration.
- [ ] Run the focused test and confirm it passes.
- [ ] Initialize Git, add a project `.gitignore`, and commit the spec, plan, and project contract.

### Task 2: Shared content and original image set

**Files:**
- Create: `src/lib/content.ts`
- Create: `public/images/club-vere-park.webp`, `public/images/club-vere-picnic.webp`, `public/images/club-vere-movement.webp`, `public/images/club-vere-details.webp`

**Interfaces:**
- Produces `clubVereContent`, a read-only object consumed by all three templates.

- [ ] Generate four section-specific editorial photographs at the required aspect ratios.
- [ ] Inspect each output for composition, realistic anatomy, unwanted text, and brand fit.
- [ ] Copy selected assets into `public/images`, convert to optimized WebP, and record dimensions.
- [ ] Add the shared content object with the exact Instagram and Eventbrite URLs and no fabricated facts.
- [ ] Commit the content and selected assets.

### Task 3: Accessible design selection shell

**Files:**
- Create: `src/components/design-switcher.tsx`
- Create: `src/components/design-shell.tsx`
- Test: `src/components/design-switcher.test.tsx`

**Interfaces:**
- `DesignSwitcher({ activeDesign, onDesignChange })`
- `DesignShell()` renders exactly one template and owns local-storage synchronization.

- [ ] Write a component test that verifies the active pressed state and user selection callback.
- [ ] Run the focused test and confirm it fails because the component does not exist.
- [ ] Implement semantic buttons, pressed state, focus behavior, and the client shell.
- [ ] Run the focused test and all unit tests.
- [ ] Commit the switching behavior.

### Task 4: Three complete landing-page templates

**Files:**
- Create: `src/components/soft-focus.tsx`
- Create: `src/components/vere-after-dark.tsx`
- Create: `src/components/picnic-pop.tsx`
- Create: `src/components/shared/site-link.tsx`
- Create: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`

**Interfaces:**
- Each template accepts `{ content: typeof clubVereContent }` and renders one complete page.
- `SiteLink` normalizes external target, rel, icon, and focus behavior.

- [ ] Write a rendering test that mounts each template and finds one hero heading, one Instagram destination, and the clearly labeled past-event link.
- [ ] Run the test and confirm the missing-template failure.
- [ ] Build Soft Focus with an asymmetric editorial hero, soft image masks, community statement, event proof, gallery, and CTA.
- [ ] Build Vere After Dark with a sharp collage hero, one ticker, poster-like proof section, event-formats layout, and CTA.
- [ ] Build Picnic Pop with a playful cutout hero, gingham/photo composition, event invitation, community collage, and CTA.
- [ ] Add metadata, structured data, skip navigation, responsive tokens, dark-mode tokens, reduced-motion styles, and image sizing.
- [ ] Run unit tests, lint, and production build.
- [ ] Commit all three templates.

### Task 5: Browser quality pass

**Files:**
- Modify only files implicated by verified issues.

**Interfaces:**
- Produces a visually verified responsive site with no known interaction or accessibility regression.

- [ ] Start the canonical dev server and open the site once.
- [ ] Verify every design at 375x812, 768x1024, and 1440x1000.
- [ ] Verify design switching, external destinations, keyboard focus order, reduced motion, dark mode, and no horizontal overflow.
- [ ] Run Lighthouse against the production build and fix issues tied to the stated targets.
- [ ] Re-run `npm run test`, `npm run lint`, and `npm run build` after fixes.
- [ ] Commit the verified visual pass.

### Task 6: GitHub and Vercel publication

**Files:**
- Create when generated by tooling: `.vercel/project.json` (gitignored)

**Interfaces:**
- Produces a public GitHub repository and a production Vercel URL linked to it.

- [ ] Inspect final `git status` and diff for scope and secrets.
- [ ] Confirm GitHub CLI and Vercel CLI authentication.
- [ ] Create `club-vere-website` on GitHub if it does not exist, add the remote, and push `main`.
- [ ] Link or create the Vercel project explicitly and deploy production.
- [ ] Inspect the deployment, request the production URL, and confirm a successful HTTP response.
- [ ] Report repository URL, production URL, checks, and any remaining limitation.
