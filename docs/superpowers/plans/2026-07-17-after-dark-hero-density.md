# After Dark Hero Density Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the sparse After Dark hero with a compact Club Vere masthead and activity grid while removing the duplicated lower formats section.

**Architecture:** Keep `VereAfterDark` as a static server component driven by `ClubVereContent`. Recompose only its hero markup and replace the related `.ad-hero*` and `.ad-formats*` rules with responsive masthead and grid selectors. No state, data flow, or dependencies change.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS Grid, Vitest, Testing Library

## Global Constraints

- Preserve the After Dark palette, typography, navigation, ticker, anchors, event, community, final call to action, and footer.
- Reuse `content.formatsTitle`, `content.formats`, `content.heroBody`, and `content.instagramUrl`.
- Add no dependencies and no new runtime behavior.
- Keep all changes isolated from the other design variants.

---

### Task 1: Specify the new After Dark hero structure

**Files:**
- Modify: `src/components/designs.test.tsx`

**Interfaces:**
- Consumes: `VereAfterDark({ content }: VereAfterDarkProps)`
- Produces: a regression test for the masthead hero and removed standalone formats section

- [ ] **Step 1: Write the failing test**

Add a dedicated `describe("Vere After Dark hero")` case that renders the component and asserts:

```tsx
const { container } = render(<VereAfterDark content={clubVereContent} />);

expect(screen.getByRole("heading", { level: 1, name: /club vere/i })).toBeInTheDocument();
expect(screen.getByRole("heading", { level: 2, name: clubVereContent.formatsTitle })).toBeInTheDocument();
for (const format of clubVereContent.formats) {
  expect(screen.getByRole("heading", { level: 3, name: format.title })).toBeInTheDocument();
}
expect(container.querySelector(".ad-hero__formats")).toBeInTheDocument();
expect(container.querySelector(".ad-formats")).not.toBeInTheDocument();
```

- [ ] **Step 2: Run the focused test to verify it fails**

Run:

```bash
pnpm test src/components/designs.test.tsx
```

Expected: failure because the current H1 is `NO FUN CITY? NOT ON OUR WATCH.`, `.ad-hero__formats` does not exist, and `.ad-formats` still exists.

### Task 2: Recompose the hero and remove the duplicate section

**Files:**
- Modify: `src/components/vere-after-dark.tsx`

**Interfaces:**
- Consumes: `ClubVereContent`
- Produces: static `.ad-hero__brand`, `.ad-hero__content`, `.ad-hero__intro`, and `.ad-hero__formats` markup

- [ ] **Step 1: Replace the hero markup**

Use `CLUB VERE` as the H1. Render `content.formatsTitle` as the H2, place `content.heroBody` and the existing CTA in a compact intro row, and map `content.formats` into the hero formats grid.

- [ ] **Step 2: Delete the former standalone `.ad-formats` section**

Remove only the duplicated section that mapped `content.formats`; preserve every following section unchanged.

- [ ] **Step 3: Run the focused test**

Run:

```bash
pnpm test src/components/designs.test.tsx
```

Expected: all tests in the file pass.

### Task 3: Build the responsive poster layout

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: the new After Dark hero class names
- Produces: desktop, tablet, and mobile layouts using existing After Dark tokens

- [ ] **Step 1: Replace obsolete hero and formats rules**

Create a two-column `.ad-hero`, a large pink `.ad-hero__brand` H1, an acid `.ad-hero__content` H2, a compact intro row, and a four-item formats grid separated by hairlines. Remove selectors used only by the old hero image and standalone formats block.

- [ ] **Step 2: Update responsive overrides**

At the existing tablet breakpoint, stack the brand above the content and reduce the masthead scale. At the mobile breakpoint, stack the intro row and switch the format articles to one column when needed.

- [ ] **Step 3: Run focused and full checks**

Run:

```bash
pnpm test src/components/designs.test.tsx
pnpm test
pnpm lint
pnpm build
```

Expected: all commands exit successfully with no warnings.

### Task 4: Verify the rendered page

**Files:**
- No source changes expected

**Interfaces:**
- Consumes: local production-equivalent Next.js rendering
- Produces: visual evidence at representative viewport sizes

- [ ] **Step 1: Start the local app and select After Dark**

Set local storage key `club-vere-design` to `vere-after-dark` and load the home page.

- [ ] **Step 2: Inspect desktop, tablet, and mobile**

Verify at 1440x1000, 1024x768, and 390x844:

- no large accidental empty zone
- Club Vere is immediately identifiable
- formats are readable and appear only once
- CTA remains visible
- no overflow or clipped typography
- existing navigation and downstream sections remain intact

- [ ] **Step 3: Review the final diff**

Run:

```bash
git diff --check
git diff -- src/components/vere-after-dark.tsx src/components/designs.test.tsx src/app/globals.css
```

Expected: no whitespace errors and no unrelated changes.
