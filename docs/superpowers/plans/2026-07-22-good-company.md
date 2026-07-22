# Good Company Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace Blue Hour with the brand-led Good Company landing-page direction while preserving Design 03 selection, shared Club Vere content, and the existing five-option comparison experience.

**Architecture:** Keep the existing static concept architecture: one presentational React component consumes `ClubVereContent`, `DesignShell` selects it from the typed registry, and one namespaced block in `globals.css` owns its responsive visual system. Rename the public design ID to `good-company`, add a narrow legacy-value migration for `blue-hour`, and reuse only approved repository assets.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 6, CSS, `next/image`, Vitest, Testing Library

## Global Constraints

- Preserve option number `03`; display label `Good Company`; canonical ID `good-company`.
- Migrate only the legacy persisted value `blue-hour` to `good-company`.
- Use the official palette: ocean `#1D283A`, sky `#88B0BE`, moss `#37512E`, olive `#A4C672`, stone `#A89C8E`, chalk `#F0EDE7`.
- Use the approved wordmark, DM Sans body face, existing editorial display fallback, and genuine Club Vere photography already committed in `public/`.
- Do not add dependencies, data fetching, mutable page state, fabricated event details, testimonials, metrics, gradients, glass effects, or extracted Firelli files.
- Use one automatic ticker; disable automatic and decorative motion under `prefers-reduced-motion: reduce`.
- Keep controls at least 44px, CTA labels on one line, text at WCAG AA contrast, and layouts free of horizontal overflow from 320px upward.

---

### Task 1: Rename Design 03 and preserve persisted selection

**Files:**
- Modify: `src/lib/designs.test.ts`
- Modify: `src/lib/designs.ts`
- Modify: `src/components/design-switcher.test.tsx`
- Modify: `src/components/design-switcher.tsx`
- Modify: `src/components/design-shell.tsx`

**Interfaces:**
- Consumes: `DesignId`, `DESIGN_IDS`, `getInitialDesign(value: unknown): DesignId`
- Produces: canonical `good-company` design ID and legacy `blue-hour` migration

- [ ] **Step 1: Write failing registry and switcher tests**

```ts
expect(DESIGN_IDS).toContain("good-company");
expect(DESIGN_IDS).not.toContain("blue-hour");
expect(isDesignId("good-company")).toBe(true);
expect(isDesignId("blue-hour")).toBe(false);
expect(getInitialDesign("blue-hour")).toBe("good-company");

fireEvent.click(screen.getByRole("button", { name: /03 good company/i }));
expect(onDesignChange).toHaveBeenCalledWith("good-company");
expect(screen.queryByRole("button", { name: /blue hour/i })).not.toBeInTheDocument();
```

- [ ] **Step 2: Run the focused tests and verify the intended failure**

Run: `pnpm test -- src/lib/designs.test.ts src/components/design-switcher.test.tsx`

Expected: FAIL because `good-company` is not yet a valid `DesignId` and option 03 is still Blue Hour.

- [ ] **Step 3: Implement the ID rename and migration**

```ts
export const DESIGN_IDS = [
  "soft-focus",
  "vere-after-dark",
  "good-company",
  "invite-club",
  "the-vere-edit",
] as const;

export function getInitialDesign(value: unknown): DesignId {
  if (value === "blue-hour") {
    return "good-company";
  }

  return isDesignId(value) ? value : "soft-focus";
}
```

Update option 03 to:

```ts
{ id: "good-company", number: "03", label: "Good Company" }
```

Import `GoodCompany` in `design-shell.tsx` and map `"good-company": GoodCompany` in place of Blue Hour.

- [ ] **Step 4: Run the focused tests and verify they pass**

Run: `pnpm test -- src/lib/designs.test.ts src/components/design-switcher.test.tsx`

Expected: all focused tests PASS.

- [ ] **Step 5: Commit the registry slice**

```bash
git add src/lib/designs.ts src/lib/designs.test.ts src/components/design-switcher.tsx src/components/design-switcher.test.tsx src/components/design-shell.tsx
git commit -m "refactor: rename Design 03 to Good Company"
```

### Task 2: Build the Good Company semantic composition

**Files:**
- Modify: `src/components/designs.test.tsx`
- Create: `src/components/good-company.tsx`
- Delete: `src/components/blue-hour.tsx`

**Interfaces:**
- Consumes: `ClubVereContent`, `SiteLink`, approved image paths, and the wordmark asset
- Produces: `GoodCompany({ content }: { content: ClubVereContent })`

- [ ] **Step 1: Write the failing rendering contract**

Replace the Blue Hour table entry with Good Company and add a focused test:

```tsx
import { GoodCompany } from "@/components/good-company";

["Good Company", GoodCompany],

it("assembles the shared formats and past event as Good Company ephemera", () => {
  const { container } = render(<GoodCompany content={clubVereContent} />);

  expect(container.querySelector(".good-company")).toBeInTheDocument();
  expect(container.querySelector(".gc-hero__stack")).toBeInTheDocument();
  expect(container.querySelector(".gc-ticker")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1, name: clubVereContent.heroTitle })).toBeInTheDocument();
  expect(screen.getByText(clubVereContent.pastEvent.date)).toBeInTheDocument();
  for (const format of clubVereContent.formats) {
    expect(screen.getByRole("heading", { level: 3, name: format.title })).toBeInTheDocument();
  }
});
```

- [ ] **Step 2: Run the component test and verify the intended failure**

Run: `pnpm test -- src/components/designs.test.tsx`

Expected: FAIL because `good-company.tsx` does not exist.

- [ ] **Step 3: Implement the static component**

Create one semantic component with this section contract:

```tsx
export function GoodCompany({ content }: GoodCompanyProps) {
  return (
    <main className="concept good-company" id="main-content">
      <header className="gc-nav page-shell">
        <a aria-label="Club Vere, back to top" href="#top">
          <Image alt="Club Vere" height={180} priority src="/brand/club-vere-wordmark.png" width={600} />
        </a>
        <nav aria-label="Good Company navigation">
          <a href="#about">The club</a>
          <a href="#past-event">Past event</a>
          <SiteLink href={content.instagramUrl}>Instagram</SiteLink>
        </nav>
      </header>
      <section className="gc-hero page-shell" id="top">
        <div className="gc-hero__copy"><h1>{content.heroTitle}</h1><p>{content.heroBody}</p></div>
        <div className="gc-hero__stack"><p>{content.tagline}</p></div>
        <SiteLink className="gc-button" href={content.instagramUrl}>See what&apos;s next</SiteLink>
      </section>
      <div aria-label="Ways to gather" className="gc-ticker">
        <div className="gc-ticker__track"><span>Move together</span><span>Make something</span><span>Go somewhere</span><span>Stay awhile</span></div>
      </div>
      <section className="gc-about page-shell" id="about"><h2>{content.aboutTitle}</h2><p>{content.aboutBody}</p></section>
      <section className="gc-event page-shell" id="past-event">
        <p>{content.pastEvent.status}</p><h2>{content.pastEvent.title}</h2><p>{content.pastEvent.description}</p>
        <p>{content.pastEvent.date}</p><p>{content.pastEvent.location}</p>
        <SiteLink href={content.eventbriteUrl}>View the past event</SiteLink>
      </section>
      <section className="gc-formats page-shell" id="formats">
        <h2>{content.formatsTitle}</h2>
        {content.formats.map((format) => <article key={format.title}><h3>{format.title}</h3><p>{format.description}</p></article>)}
      </section>
      <section className="gc-community page-shell"><h2>{content.communityTitle}</h2><p>{content.communityBody}</p></section>
      <section className="gc-final page-shell"><h2>{content.finalTitle}</h2><p>{content.finalBody}</p><SiteLink className="gc-button" href={content.instagramUrl}>See what&apos;s next</SiteLink></section>
      <footer className="gc-footer page-shell"><p>{content.brand}</p><p>{content.location}</p><SiteLink href={content.instagramUrl}>@club.vere</SiteLink></footer>
    </main>
  );
}
```

Use `/brand/club-vere-wordmark.png`, the four shared images, and selected `vere-edit-*` images. Keep one H1, shared copy, past-event label/date/location, all four format headings, one archive link, and the consistent “See what’s next” Instagram action.

- [ ] **Step 4: Remove the superseded Blue Hour component**

Delete `src/components/blue-hour.tsx` after all imports and tests point to `GoodCompany`.

- [ ] **Step 5: Run the component and focused selection tests**

Run: `pnpm test -- src/components/designs.test.tsx src/lib/designs.test.ts src/components/design-switcher.test.tsx`

Expected: all focused tests PASS.

- [ ] **Step 6: Commit the semantic component slice**

```bash
git add src/components/good-company.tsx src/components/blue-hour.tsx src/components/designs.test.tsx
git commit -m "feat: build Good Company landing composition"
```

### Task 3: Replace the visual system and document the option

**Files:**
- Modify: `src/app/globals.css`
- Modify: `README.md`

**Interfaces:**
- Consumes: `.gc-*` class contract from `GoodCompany`
- Produces: responsive, motion-aware Good Company presentation

- [ ] **Step 1: Replace the Blue Hour CSS block**

Remove `.blue-hour` and `.bh-*` rules. Add `.good-company` and `.gc-*` rules with:

```css
.good-company {
  --gc-ocean: #1d283a;
  --gc-sky: #88b0be;
  --gc-moss: #37512e;
  --gc-olive: #a4c672;
  --gc-stone: #a89c8e;
  --gc-chalk: #f0ede7;
  background: var(--gc-chalk);
  color: var(--gc-ocean);
  font-family: var(--font-gallery), sans-serif;
}

.gc-hero__stack > * {
  animation: gc-place 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.gc-ticker__track {
  animation: gc-ticker 24s linear infinite;
}
```

Implement the approved layered desktop composition, distinct section layouts, 44px controls, visible focus, shallow rotations, restrained hover lifts, meaningful image crops, and no gradient or glass styling.

- [ ] **Step 2: Add explicit responsive and reduced-motion rules**

At `max-width: 1023px`, reduce overlap and keep the hero within a practical tablet viewport. At `max-width: 767px`, use one-column hero/event/community layouts and a vertical formats stack. At `max-width: 420px`, keep readable type and gutters without clipped controls.

```css
@media (prefers-reduced-motion: reduce) {
  .gc-hero__stack > *,
  .gc-ticker__track {
    animation: none;
  }

  .gc-card,
  .gc-button {
    transition: none;
  }
}
```

- [ ] **Step 3: Update README design documentation**

Replace the Blue Hour bullet and component reference with:

```md
- **Good Company**: layered invitations, tactile event ephemera, and genuine Club Vere photography
```

Document `src/components/good-company.tsx` instead of `blue-hour.tsx`.

- [ ] **Step 4: Run static and automated checks**

Run:

```bash
pnpm test
pnpm lint
pnpm build
git diff --check
```

Expected: all tests PASS, ESLint exits 0 with no warnings, the production build succeeds, and `git diff --check` prints no errors.

- [ ] **Step 5: Commit the styling and documentation slice**

```bash
git add src/app/globals.css README.md
git commit -m "style: complete Good Company visual system"
```

### Task 4: Browser verification and PR readiness

**Files:**
- Modify only files from Tasks 1-3 if a verified defect is found

**Interfaces:**
- Consumes: built Good Company page and five-option design switcher
- Produces: visual evidence and a focused branch ready for review

- [ ] **Step 1: Start the canonical development server with Node 20**

Run: `pnpm dev`

Expected: Next.js reports a ready local URL without compile errors.

- [ ] **Step 2: Verify desktop and mobile viewports**

Select option `03 Good Company` and inspect 375x812, 768x1024, 1280x720, and 1440x1000. At every size confirm initial-viewport CTA access, correct photo loading, legible overlap, one-line desktop navigation, static mobile formats, and zero horizontal overflow.

- [ ] **Step 3: Verify interaction and accessibility states**

Confirm switcher selection and persisted reload behavior, keyboard focus, 44px targets, Instagram/Eventbrite destinations, reduced-motion ticker/entrance shutdown, useful image alt text, and no console errors.

- [ ] **Step 4: Compare Design 03 with Design 05’s quality bar**

Review Good Company against The Vere Edit for exact palette use, real wordmark, typography hierarchy, genuine photography, copy restraint, complete responsive behavior, and a visually distinct composition.

- [ ] **Step 5: Run final gates and inspect branch scope**

Run:

```bash
pnpm test
pnpm lint
pnpm build
git diff --check origin/main...HEAD
git status --short
git diff --stat origin/main...HEAD
```

Expected: all gates pass, the worktree is clean, and the branch contains only the Good Company spec, plan, registry, component, CSS, tests, and README changes.

- [ ] **Step 6: Push and open the pull request**

```bash
git push -u origin codex/good-company
gh pr create --base main --head codex/good-company --title "Replace Design 03 with Good Company" --body "Replaces Blue Hour with the brand-led Good Company direction, migrates persisted Design 03 selections, and updates tests and documentation. Verified with pnpm test, pnpm lint, pnpm build, responsive browser QA, and reduced-motion QA."
```

Expected: GitHub returns the new PR URL. Do not merge it.
