# About Scroll Story Design

## Goal

Replace the current static About page with a unique, scroll-driven story that balances Дмитро Ковтунович's personal development with a strong professional presentation.

## Story arc

1. **Identity / present day** — Дмитро, 18, full-stack developer from Rivne, building websites and digital systems for business.
2. **The beginning** — first programs, many mistakes, learning to think systematically and finish work to a result.
3. **Growth into full-stack** — four years of college study and progression from layout and algorithms to React, Django, databases, API, administration and deployment.
4. **Proof through practice** — ZDO №52 diploma project, defended with excellent marks, plus BabyLand and other real client-facing systems.
5. **Current direction** — websites, automation, Telegram integrations and AI tools that reduce manual work and help businesses handle leads.
6. **Values and next step** — responsibility, clarity, practical value and a Telegram CTA.

## Visual concept

The page is a cinematic timeline rather than a resume. A sticky vertical progress rail shows the current chapter. Large chapter numbers and years move behind the content. Each chapter has its own visual language:

- terminal fragments and a blinking cursor for the beginning;
- layered frontend/backend/database blocks for the full-stack transition;
- a diploma seal and system diagram for the graduation chapter;
- a constellation of real projects for current work;
- a live AI/automation flow for the future direction.

The hero uses a large DK monogram and a split headline. The final section resolves the story into a clear professional statement and Telegram CTA.

## Motion

- IntersectionObserver reveals chapters and marks the active timeline step.
- A scroll controller updates a CSS custom property for page progress.
- Decorative words, years and diagrams move with lightweight CSS transforms.
- The active chapter dot and progress rail animate as the user scrolls.
- `prefers-reduced-motion` disables transforms and reveals all content immediately.

## Responsive behavior

Desktop uses sticky storytelling with 80–100vh chapters. Mobile becomes a linear narrative with the progress rail moved to the left edge, no overlapping sticky visuals, smaller type and simplified diagrams. All essential text and CTAs remain visible without relying on animation.

## Technical approach

- Rewrite `app/about/page.tsx` with semantic chapter sections.
- Add `components/about/about-story-controller.tsx` for progress and reveal behavior.
- Add `app/about-story.css` with all prefixed `ab-` styles.
- Import the stylesheet from `app/layout.tsx`.
- No new package dependencies.

## Content constraints

Use only confirmed biography details: Дмитро Ковтунович, Rivne, full-stack developer, 18 years old, college path, four-year progression, diploma defended with excellent marks, React/Next.js, Django/Python, databases/API, BabyLand, ZDO №52, Telegram and AI automation. Do not invent employers, awards, client revenue, testimonials or metrics.