# Case Navigation and BabyLand Layout Fix Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix broken BabyLand text layout, replace right progress rails with editorial left navigation on `/work/babyland` and `/work`, and present the private BabyLand repository honestly without a dead public link.

**Architecture:** Keep existing scroll controllers and section IDs. Replace the rail markup with semantic anchor lists, update controllers to mark the active link, repair role/architecture list structure, and add a focused refinement stylesheet loaded after existing work styles.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, IntersectionObserver.

## Global Constraints

- Work directly on `main` as explicitly requested.
- Preserve all existing case content and scroll scenes.
- Hide the left navigation below tablet width so it cannot obstruct mobile content.
- Do not expose or imply public access to the private BabyLand repository.
- Verify the final commit through Vercel.

### Task 1: Repair BabyLand content structure and private-repository presentation

**Files:**
- Modify: `components/work/babyland/babyland-documentary.tsx`
- Modify: `components/work/cinematic-project.tsx`

- [ ] Wrap role and architecture text in a real content column.
- [ ] Replace BabyLand GitHub links with a non-clickable private-code disclosure.
- [ ] Keep live-site and Telegram actions active.

### Task 2: Add left section navigation

**Files:**
- Modify: `components/work/babyland/babyland-documentary.tsx`
- Modify: `components/work/babyland/babyland-story-controller.tsx`
- Modify: `app/work/page.tsx`
- Modify: `components/work/work-story-controller.tsx`

- [ ] Replace both right rails with left editorial navigation inspired by the supplied reference.
- [ ] Use existing section IDs and project IDs as anchors.
- [ ] Mark the active link from each IntersectionObserver controller.

### Task 3: Add focused responsive refinements

**Files:**
- Create: `app/case-section-navigation.css`
- Modify: `app/layout.tsx`

- [ ] Style compact left navigation with short rules and active expansion.
- [ ] Fix role and architecture text widths and wrapping.
- [ ] Style private-code disclosures.
- [ ] Hide navigation below 1180px and preserve mobile layout.

### Task 4: Verify deployment

- [ ] Confirm final Vercel status is `success`.
- [ ] Confirm `/work` and `/work/babyland` still compile.
