# Work Case-study Cinema Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `/work` with a cinematic, scroll-driven portfolio that presents all eight projects as case studies and ends with a direct Telegram CTA.

**Architecture:** Keep `app/work/page.tsx` as a server component that groups the existing project dataset. Add focused presentation components for the scroll controller, reusable case chapters, project-specific decorative scenes and a compact archive. Use one dedicated `wk-` stylesheet and no new dependencies.

**Tech Stack:** Next.js App Router, React 19, TypeScript, CSS, IntersectionObserver.

## Global Constraints

- Use `projects` from `data/projects.ts` as the only content source.
- Do not invent client metrics, testimonials, revenue or production outcomes.
- Preserve all existing internal, GitHub, live and Telegram links.
- Use no third-party animation package.
- Respect `prefers-reduced-motion`.
- Keep all content readable without JavaScript.
- Mobile layout must be linear with no horizontal overflow and must not obstruct the existing bottom navigation.

---

### Task 1: Scroll controller

**Files:**
- Create: `components/work/work-story-controller.tsx`

**Interfaces:**
- Consumes: `[data-work-root]` and `[data-work-chapter]` elements.
- Produces: root CSS variable `--work-scroll`, root `data-active-case`, and `.is-visible` on observed chapters.

- [ ] Add a client component using `IntersectionObserver`, passive scroll handling and `requestAnimationFrame`.
- [ ] Reveal all chapters immediately when reduced motion is enabled or IntersectionObserver is unavailable.
- [ ] Verify cleanup removes observers, listeners and pending animation frames.

### Task 2: Project scenes and chapters

**Files:**
- Create: `components/work/project-scene.tsx`
- Create: `components/work/cinematic-project.tsx`

**Interfaces:**
- `ProjectScene({ slug, title }: { slug: string; title: string })` returns a decorative scene with `aria-hidden="true"`.
- `CinematicProject({ project, index, reverse, featured }: { project: Project; index: number; reverse?: boolean; featured?: boolean })` renders one semantic project chapter.

- [ ] Add distinct scenes for BabyLand, ЗДО №52, FÁNCY, Grand Team Auto, Happy Kids, Oseredok, The Poppins Club and AI Sales Manager.
- [ ] Render status, year, title, description, first three highlights, full stack strip and all available links.
- [ ] Use stable chapter anchors in the format `case-${project.slug}`.

### Task 3: Project archive

**Files:**
- Create: `components/work/project-index.tsx`

**Interfaces:**
- Consumes: `{ projects: Project[] }`.
- Produces: accessible jump links to every case chapter with status, year and first three stack items.

- [ ] Generate the archive only from the shared dataset.
- [ ] Make the full row keyboard-focusable through its anchor.

### Task 4: Rebuild page structure

**Files:**
- Modify: `app/work/page.tsx`

**Interfaces:**
- Consumes: all components from Tasks 1–3 and `projects`.
- Produces: cinematic intro, completed cases, active productions, separate AI feature, archive and final CTA.

- [ ] Replace the old card grids completely.
- [ ] Add truthful counters for completed, active and concept projects.
- [ ] Add direct links to the first case, Telegram and `/about`.

### Task 5: Visual system

**Files:**
- Create: `app/work-cinema.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes all `wk-` classes and project accent names.
- Produces desktop sticky cinema, tablet reductions, mobile linear layout, light/dark themes and reduced-motion fallbacks.

- [ ] Add oversized editorial typography, technical grid lines, progress rail and project-specific accent variables.
- [ ] Add lightweight reveal, scene loop and marquee motion.
- [ ] Disable sticky transforms and looping motion for reduced-motion users.
- [ ] Import `./work-cinema.css` from the root layout.

### Task 6: Verification

- [ ] Confirm the final page source contains no use of `ProjectCard`.
- [ ] Confirm `/work/[slug]` links remain unchanged.
- [ ] Verify Vercel status for the final commit is `success`.
- [ ] Inspect component source for TypeScript-safe props, descriptive links and decorative `aria-hidden` scenes.
