# BabyLand Product Documentary Design

## Goal

Replace the generic `/work/babyland` detail page with a complete, scroll-driven product documentary that explains what BabyLand is, why it exists, who uses it, how the system works, what was implemented, how the architecture is secured, and what Дмитро built across the full product lifecycle.

The page must feel like a premium case study rather than a technical README or a list of features.

## Source of truth

Use the private `Ke1fosao/BabyLand` repository as the factual source. Do not invent revenue, conversion, client testimonials, user counts, deployment uptime, business growth, or production metrics.

Confirmed project facts include:

- public website for a private kindergarten in Rivne;
- React 19 + TypeScript + Vite frontend;
- Tailwind CSS 4 and Motion animation system;
- Firebase Authentication, Cloud Firestore, Storage, Hosting and Cloud Functions;
- role model: `developer`, `admin`, `moderator`, `content_moderator`, `teacher`, `parent`;
- permissions and custom claims for privileged roles;
- public pages for home, about, groups, schedules, teachers, psychologist profiles, news, gallery, reviews, enrolment, contacts, FAQ and profile;
- admin areas for dashboard, applications, tours, messages, reviews, content, SEO, groups, teachers, schedules, gallery, news, users, audit and backups;
- application, contact, tour and newsletter forms processed through server-side Firebase Functions;
- validation, Cloudflare Turnstile token support and rate limits;
- audit logs, database backups and protected media uploads;
- responsive UI, SEO configuration and public fallback content;
- live project link `https://babyland.com.ua/` and repository link.

## Narrative structure

### 1. Opening film frame

A full-height hero introduces BabyLand as a digital ecosystem, not just a website.

Hero copy:

- label: `FULL-STACK PRODUCT DOCUMENTARY / 2026`;
- title: `BabyLand — один цифровий простір для батьків, команди та адміністрації.`;
- supporting text about connecting the public website, applications, content, staff workflows and secure administration;
- primary action: open live site;
- secondary action: open GitHub;
- third action: scroll into the documentary.

The visual side shows a cinematic multi-device composition with a public homepage, admin dashboard and mobile parent profile.

### 2. The real problem

Explain that a kindergarten website must solve more than presentation:

- parents need clear information, trust and simple enrolment;
- staff need current groups, schedules, teachers, news and media;
- administration needs one protected place for requests, content, users and statuses;
- different roles must see only the operations they are allowed to perform.

The section uses a scroll-controlled transition from fragmented tools to one connected system.

### 3. Ecosystem map

A large interactive-looking map explains the product as six connected domains:

1. Public experience;
2. Enrolment and communication;
3. Content management;
4. Staff and group operations;
5. Identity and roles;
6. Security and infrastructure.

Each domain contains real modules from the repository. The map is decorative but all information also appears as semantic text.

### 4. User journeys

Three documentary chapters show the product through real roles:

#### Parent

- explores groups and teachers;
- checks schedules, news, gallery and FAQ;
- submits an application or tour request;
- creates or uses a personal profile;
- leaves a review.

#### Teacher / content team

- maintains group and schedule information;
- manages teacher and psychologist profiles;
- uploads gallery and news media;
- updates public content according to permissions.

#### Administration

- processes applications, tours and messages;
- moderates reviews;
- manages users and roles;
- controls site content and SEO;
- reviews audit logs and backups.

Each journey uses a sticky scene with interface fragments rather than generic cards.

### 5. Application pipeline

Present the full path of a public request:

`Public form → validation → Turnstile token → Cloud Function → rate limit → Firestore collection → admin status workflow`

Show the confirmed default statuses for applications, contact messages and tour requests. Explain that direct anonymous Firestore writes are denied and public submissions are routed through server-side functions.

### 6. Administration as a product

A large admin chapter presents the back office as a separate product inside BabyLand.

Show:

- action-oriented dashboard;
- application and tour processing;
- messages and reviews;
- content sections;
- groups, teachers and schedules;
- users, roles and permissions;
- audit log and backups.

The visual scene resembles a living operations console with side navigation, status columns, charts and activity history.

### 7. Roles and permission architecture

Explain the real role hierarchy without exposing secrets:

- `developer` — full permission set;
- `admin` — full administrative operations;
- `moderator` — applications, tours, messages and reviews;
- `content_moderator` — news, gallery, public content, groups, teachers and schedule;
- `teacher` — assigned educational operations;
- `parent` — personal account and public interactions.

The page must explain that privileged access is backed by verified Firebase custom claims and Firestore/Storage rules, not by UI checks alone.

### 8. Security chapter

Present security as layered controls:

- verified Firebase Authentication;
- claim-backed privileged roles;
- Firestore default-deny catch-all;
- restricted user role mutation;
- public forms through Cloud Functions;
- server-side field validation;
- request rate limiting;
- limited and role-protected media uploads;
- audit logs;
- backup collections;
- private profile fields removed before client use.

Avoid claiming the system is perfectly secure. Use wording such as `реалізовані захисні шари` rather than `повністю захищено`.

### 9. Technical architecture

Show a readable architecture diagram:

- React application;
- Firebase Authentication;
- Cloud Firestore collections;
- Firebase Storage;
- Cloud Functions in `europe-west3`;
- Firebase Hosting;
- client state through Zustand;
- validation through Zod and server normalizers;
- rich content through TipTap;
- charts through Recharts;
- drag and drop through DnD Kit.

The technical section should be accessible to a non-technical client while still being credible to a developer.

### 10. Product surface

A cinematic feature gallery presents the real public surface:

- homepage and kindergarten positioning;
- groups and schedules;
- teachers and detailed specialist profiles;
- news and scheduled content;
- gallery albums;
- reviews and moderation;
- enrolment;
- contacts and FAQ;
- parent profile.

### 11. Engineering decisions

Explain selected implementation decisions:

- route-level lazy loading for large public and admin modules;
- fallback public data if the network fails, while admin routes remain strict;
- optimistic content updates with rollback on save failure;
- separated group and teacher profile collections;
- media upload preparation and compression;
- SEO configuration stored as editable data;
- custom claims as the authority for privileged access.

### 12. What Дмитро delivered

State the scope of work without unverified business claims:

- product structure and UX;
- public frontend;
- responsive implementation;
- authentication and profile flow;
- admin panel and content management;
- Firebase data architecture;
- role and permission model;
- Cloud Functions for public forms and user administration;
- security rules;
- SEO and deployment configuration;
- iterative fixes and production hardening.

### 13. Result and next step

Close with an honest result statement:

`BabyLand перетворився з презентаційного сайту на повноцінну цифрову платформу для щоденної роботи дитячого закладу.`

Actions:

- open live BabyLand;
- inspect repository;
- discuss a similar system in Telegram;
- return to all works.

## Visual language

The page should inherit the portfolio's editorial cinema direction but have its own BabyLand identity:

- warm milk background;
- deep forest green;
- soft lime accent;
- small coral and sky-blue signals;
- oversized editorial typography;
- rounded interface scenes inspired by the real product;
- child-friendly warmth without looking like a toy website;
- technical grid and architecture lines for system chapters.

No repeated generic cards. Large sections should alternate between documentary text and full interface scenes.

## Motion

- scroll progress rail;
- chapter reveal through IntersectionObserver;
- sticky scenes on desktop;
- ecosystem connections animate when a chapter becomes active;
- application pipeline moves step by step;
- role nodes highlight according to the active explanation;
- admin interface status items animate subtly;
- no heavy 3D library;
- `prefers-reduced-motion` disables looping and transform-heavy effects.

## Responsive behavior

### Desktop

- full-height hero;
- two-column sticky documentary chapters;
- visible progress rail;
- large architecture and admin scenes.

### Tablet

- reduced sticky duration;
- scene follows the text closely;
- ecosystem map simplifies into grouped modules.

### Mobile

- linear narrative;
- scenes stack above or below related copy;
- progress rail hidden;
- no clipped oversized text;
- all links remain at least 44px high;
- architecture becomes a vertical flow;
- bottom navigation remains unobstructed.

## Component architecture

### `app/work/[slug]/page.tsx`

Keeps generic rendering for all non-BabyLand projects and delegates BabyLand to a dedicated documentary component.

### `components/work/babyland/babyland-documentary.tsx`

Server-rendered semantic content and section composition.

### `components/work/babyland/babyland-story-controller.tsx`

Client-only scroll progress, active chapter and reveal behavior.

### `components/work/babyland/babyland-scenes.tsx`

Focused decorative scenes:

- hero product devices;
- ecosystem map;
- user journeys;
- application pipeline;
- admin operations console;
- role model;
- architecture diagram;
- product feature gallery.

### `components/work/babyland/babyland-data.ts`

Verified content arrays for modules, roles, architecture, security layers and engineering decisions. No duplicated factual content inside JSX.

### `app/babyland-documentary.css`

Dedicated `bl-` prefixed style system, dark theme, responsive behavior and reduced-motion fallbacks.

## Accessibility

- semantic heading hierarchy;
- stable anchor IDs for every chapter;
- decorative interface scenes use `aria-hidden="true"`;
- all facts are available as real text outside decorative visuals;
- status and role meaning is not conveyed by color alone;
- visible keyboard focus;
- reduced-motion support;
- no content depends on JavaScript to remain visible.

## Verification

Before completion:

- run TypeScript validation;
- run production build;
- confirm `/work/babyland` and all other project detail pages generate;
- verify all BabyLand links;
- verify Vercel success for the final commit;
- check desktop, tablet and mobile layouts for clipping and horizontal overflow;
- confirm the page contains no invented metrics or unsupported claims.
