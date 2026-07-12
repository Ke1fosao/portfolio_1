# Work Page — Case-study Cinema Design

## Goal

Replace the current grid-based `/work` page with a cinematic, scroll-driven portfolio that presents every project as a focused case study rather than a generic card.

The page must help a potential client understand three things quickly:

1. what Дмитро builds;
2. how each project solves a real business or organizational problem;
3. how to contact Дмитро after reviewing the work.

## Content source

Use the existing `projects` dataset as the only source of truth. Preserve all current project names, statuses, years, descriptions, stacks, highlights, repository links and live links. Do not invent client metrics, revenue, testimonials or business outcomes that are not already confirmed.

Projects remain grouped by status:

- **Completed:** BabyLand, ЗДО №52;
- **In progress:** FÁNCY, Grand Team Auto, Happy Kids, Oseredok, The Poppins Club;
- **Concept:** AI Sales Manager.

## Page structure

### 1. Cinematic intro

A full-height first screen introduces the portfolio with a large editorial headline, project count, current focus and a direct scroll cue.

The first screen includes:

- title: `Роботи, які перетворюють ідею на систему.`;
- short supporting copy about websites, admin panels, automation and AI;
- counters for completed, active and concept projects;
- primary CTA to the first case study;
- secondary CTA to Telegram;
- lightweight animated index of project names in the background.

### 2. Completed case studies

BabyLand and ЗДО №52 are the main cinematic chapters.

Each chapter occupies at least one viewport and uses a sticky two-column layout:

- one side contains project number, status, title, description, role, stack, highlights and links;
- the other side contains a large visual scene that represents the project interface and system architecture.

The project scene is built from CSS and semantic UI fragments rather than fake screenshots. Each visual must be distinct:

- **BabyLand:** parent/teacher/admin ecosystem, kanban applications, role-based modules;
- **ЗДО №52:** public portal, admin panel, PWA, notifications and AI assistant.

### 3. Active productions

The five active projects are displayed as large alternating editorial chapters rather than equal cards.

Each project includes:

- status and year;
- short problem statement derived from `eyebrow` and `description`;
- project title;
- primary value proposition;
- first three highlights;
- technology strip;
- link to the detailed internal case page;
- repository and live links when present.

Visual treatment varies by project accent color while maintaining one consistent layout system.

### 4. AI Sales Manager feature

The concept project receives a separate dark full-height chapter.

It shows a live Telegram-style conversation flow:

1. client request;
2. AI qualification;
3. structured brief;
4. handoff to CRM/developer.

The chapter must clearly label the project as a concept and avoid presenting fictional production results.

### 5. Project index

After the cinematic chapters, include a compact indexed archive of all projects. It allows visitors to jump directly to any chapter and see status, year and stack without scrolling through the whole page again.

### 6. Final CTA

The final screen closes the narrative with a direct message:

`Потрібен сайт або система, яка працює не лише на вигляд?`

Actions:

- `Обговорити проєкт` → Telegram;
- `Дізнатися більше про мене` → `/about`.

## Visual language

The design combines editorial cinema and technical interface graphics:

- oversized typography;
- cream/light background in light mode and near-black background in dark mode;
- project-specific accent colors from the existing dataset;
- thin grid lines, technical labels and large chapter numbers;
- rounded interface frames only inside project scenes, not around every text block;
- generous spacing and strong visual hierarchy;
- no repeated generic project-card layout.

## Motion

Motion supports storytelling and must remain lightweight:

- IntersectionObserver reveals chapters and tracks the active case;
- a page progress rail updates during scroll;
- sticky scenes scale and shift subtly while their chapter is active;
- text appears in staggered groups;
- technology rows move slowly;
- scene elements have controlled loop animations;
- hover states reveal links and small details;
- `prefers-reduced-motion` removes transforms, looping motion and sticky transitions.

No third-party animation package is required.

## Responsive behavior

### Desktop

- full-height intro;
- sticky two-column case studies;
- visible project progress rail;
- large project scenes and oversized titles.

### Tablet

- sticky behavior is reduced;
- project scene remains beside or immediately below text depending on available width;
- project index becomes a two-column grid.

### Mobile

- all chapters become a linear narrative;
- scenes appear before supporting text where useful;
- no horizontal overflow;
- all controls are at least 44px tall;
- stack labels wrap cleanly;
- project progress rail is hidden;
- existing bottom navigation remains unobstructed.

## Components and boundaries

### `app/work/page.tsx`

Server component responsible for metadata, project grouping and semantic page structure.

### `components/work/work-story-controller.tsx`

Client component responsible only for:

- IntersectionObserver chapter visibility;
- active project index;
- page scroll progress CSS variable.

### `components/work/cinematic-project.tsx`

Reusable semantic chapter component for completed and active projects. Receives a `Project`, chapter number and layout direction.

### `components/work/project-scene.tsx`

Maps project slug to a distinct decorative interface scene. It contains no business logic and is inaccessible to screen readers where purely decorative.

### `components/work/project-index.tsx`

Compact jump navigation generated from the same project dataset.

### `app/work-cinema.css`

Dedicated prefixed stylesheet using `wk-` classes. Includes light/dark themes, project accents, desktop sticky behavior, mobile linear layout and reduced-motion fallbacks.

## Accessibility

- semantic sections and headings;
- project chapters have stable anchor IDs;
- decorative scenes use `aria-hidden="true"`;
- link text is descriptive;
- status is conveyed by text, not color alone;
- keyboard focus is visible;
- reduced motion is respected;
- content remains fully readable without JavaScript.

## Verification

Before completion:

- run TypeScript checks;
- run production build;
- confirm `/work` and all `/work/[slug]` pages generate successfully;
- verify Vercel status for the final commit;
- inspect desktop, tablet and mobile breakpoints for clipping and horizontal overflow;
- confirm all internal, repository, live and Telegram links remain correct.
