# BabyLand Product Documentary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic `/work/babyland` page with a complete scroll-driven product documentary grounded in the private BabyLand repository.

**Architecture:** Keep the shared dynamic project page for all other slugs and delegate only `babyland` to a dedicated server-rendered documentary component. Verified factual content lives in a focused data module, decorative product scenes live in a scene module, and one client controller handles reveal state, active chapter and scroll progress. A dedicated `bl-` prefixed stylesheet owns all visual, dark-theme, responsive and reduced-motion behavior.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript 5.8, CSS, IntersectionObserver.

## Global Constraints

- Use only facts confirmed in `Ke1fosao/BabyLand`; do not invent metrics, testimonials, revenue, conversion or uptime.
- Preserve generic detail pages for every project except `babyland`.
- Do not add third-party packages.
- Keep decorative scenes `aria-hidden`; all facts must also exist as semantic text.
- Use verified-claims wording and “реалізовані захисні шари”; never claim perfect security.
- Preserve live link `https://babyland.com.ua/` and repository link `https://github.com/Ke1fosao/BabyLand`.
- Support light theme, dark theme, mobile linear layout and `prefers-reduced-motion`.

---

### Task 1: Verified BabyLand content model

**Files:**
- Create: `components/work/babyland/babyland-data.ts`

**Interfaces:**
- Produces: `babylandModules`, `babylandJourneys`, `babylandPipeline`, `babylandAdminAreas`, `babylandRoles`, `babylandSecurityLayers`, `babylandArchitecture`, `babylandProductSurface`, `babylandEngineeringDecisions`, `babylandDeliverables`.

- [ ] **Step 1: Add typed content arrays**

Create readonly arrays for all confirmed project facts. Include public routes, admin modules, form statuses, roles, security layers, architecture nodes and engineering decisions from the source repository.

- [ ] **Step 2: Verify TypeScript**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add components/work/babyland/babyland-data.ts
git commit -m "feat: add verified BabyLand case data"
```

### Task 2: Scroll controller and decorative scenes

**Files:**
- Create: `components/work/babyland/babyland-story-controller.tsx`
- Create: `components/work/babyland/babyland-scenes.tsx`

**Interfaces:**
- Controller consumes: `[data-babyland-root]`, `[data-babyland-chapter]`.
- Controller produces: `--bl-scroll`, `data-active-chapter`, `.is-visible`.
- Scenes produce: `BabylandHeroScene`, `EcosystemScene`, `JourneyScene`, `PipelineScene`, `AdminScene`, `RoleScene`, `ArchitectureScene`, `SurfaceScene`.

- [ ] **Step 1: Add client scroll controller**

Use `IntersectionObserver` to reveal chapters and set the active chapter index. Update `--bl-scroll` with `requestAnimationFrame`. Reveal all content immediately when reduced motion or IntersectionObserver is unavailable.

- [ ] **Step 2: Add focused product scenes**

Build lightweight semantic-free interface mockups with CSS-friendly class names. Do not use canvas, SVG packages or external images.

- [ ] **Step 3: Verify TypeScript**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 4: Commit**

```bash
git add components/work/babyland/babyland-story-controller.tsx components/work/babyland/babyland-scenes.tsx
git commit -m "feat: add BabyLand documentary scenes"
```

### Task 3: Documentary page composition

**Files:**
- Create: `components/work/babyland/babyland-documentary.tsx`
- Modify: `app/work/[slug]/page.tsx`

**Interfaces:**
- `BabylandDocumentary()` renders the complete case study.
- Dynamic page delegates when `slug === "babyland"` and keeps existing generic JSX for all other projects.

- [ ] **Step 1: Build documentary narrative**

Compose hero, problem, ecosystem, three user journeys, application pipeline, admin product, roles, security, architecture, product surface, engineering decisions, deliverables and final result. Add stable anchors and external links.

- [ ] **Step 2: Delegate BabyLand route**

Import `BabylandDocumentary` and return it only for `babyland` after project validation.

- [ ] **Step 3: Verify routes**

Run: `npm run typecheck`
Expected: PASS and no type changes required for other project pages.

- [ ] **Step 4: Commit**

```bash
git add components/work/babyland/babyland-documentary.tsx app/work/[slug]/page.tsx
git commit -m "feat: rebuild BabyLand detail as product documentary"
```

### Task 4: Visual system and responsive behavior

**Files:**
- Create: `app/babyland-documentary.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: all `bl-` classes and active chapter attributes.
- Produces: full-height hero, sticky documentary chapters, ecosystem map, admin console, architecture flow, product gallery, dark theme, tablet/mobile layouts and reduced-motion fallback.

- [ ] **Step 1: Add dedicated stylesheet**

Use warm milk, forest green, lime, coral and sky accents. Add visible keyboard focus, scroll progress, chapter reveals, sticky desktop scenes and linear mobile layout with no clipping.

- [ ] **Step 2: Import stylesheet**

Add `import "./babyland-documentary.css";` after work cinema styles.

- [ ] **Step 3: Verify production build**

Run: `npm run typecheck && npm run build`
Expected: PASS; `/work/babyland` and all other project slugs generate.

- [ ] **Step 4: Commit**

```bash
git add app/babyland-documentary.css app/layout.tsx
git commit -m "style: add BabyLand documentary visual system"
```

### Task 5: Deployment verification

**Files:**
- No source changes unless verification reveals a defect.

- [ ] **Step 1: Confirm final Vercel status**

Expected: `success` for the final commit.

- [ ] **Step 2: Audit factual copy**

Confirm there are no invented metrics or unsupported business claims and that all role/security wording matches the source repository.

- [ ] **Step 3: Audit responsive structure**

Confirm desktop sticky scenes, tablet stacking and mobile linear flow are represented in CSS; all interactive links remain at least 44px high.