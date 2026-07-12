# Conversion-focused Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Перетворити головну сторінку портфоліо на сучасну клієнтську презентацію, яка швидко пояснює цінність, показує реальні кейси та веде до Telegram або перегляду робіт.

**Architecture:** Головна залишається серверною Next.js-сторінкою. Окремий легкий клієнтський контролер керує появою блоків під час скролу через IntersectionObserver, а інтерактивна hero-візуалізація використовує лише CSS-змінні й pointer events без важких анімаційних бібліотек. Усі нові стилі ізольовані префіксом `home-` у `app/home.css`.

**Tech Stack:** Next.js 16, React 19, TypeScript 5.8, CSS, IntersectionObserver.

## Global Constraints

- Основний CTA: `Обговорити сайт` → `https://t.me/Ke1fosao`.
- Другий CTA: `Подивитися роботи` → секція `#projects`.
- Не використовувати вигадані відгуки, клієнтів або показники конверсії.
- Анімації повинні вимикатися через `prefers-reduced-motion`.
- Без нових npm-залежностей.
- Мобільна версія повинна залишатися повністю читабельною від 320 px.

---

### Task 1: Scroll reveal infrastructure

**Files:**
- Create: `components/home/scroll-reveal-controller.tsx`

**Interfaces:**
- Produces: `ScrollRevealController(): JSX.Element | null`.
- Consumes: елементи з атрибутом `data-home-reveal`.

- [ ] Додати клієнтський контролер, який вмикає клас `home-motion-ready`, спостерігає за блоками та додає `is-visible`.
- [ ] Для `prefers-reduced-motion: reduce` одразу показати всі блоки.
- [ ] Відключати observer після появи елемента.

### Task 2: Interactive hero visualization

**Files:**
- Create: `components/home/hero-experience.tsx`

**Interfaces:**
- Produces: `HeroExperience(): JSX.Element`.
- Consumes: CSS-змінні `--pointer-x` і `--pointer-y`.

- [ ] Побудувати макет браузера з потоком `заявка → Telegram → адмінпанель`.
- [ ] Додати pointer-following glow без React state.
- [ ] Додати декоративні технологічні мітки та статуси без вигаданих числових результатів.

### Task 3: Homepage structure and conversion copy

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `featuredProjects`, `ProjectCard`, `HeroExperience`, `ScrollRevealController`.
- Produces: секції hero, proof, benefits, projects, automation, process, reasons, final CTA.

- [ ] Замінити старий hero на ціннісну пропозицію про заявки та автоматизацію.
- [ ] Додати CTA Telegram і перехід до `#projects`.
- [ ] Додати реальні показники: `4+ роки`, `8 проєктів`, `Full-stack`, `Рівне + дистанційно`.
- [ ] Додати три блоки бізнес-користі, вибрані кейси, процес роботи, AI-автоматизацію та фінальний CTA.

### Task 4: Visual system and responsive animation

**Files:**
- Create: `app/home.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: усі класи `home-*` із `app/page.tsx` і компонентів.
- Produces: адаптивний дизайн, hover, keyframes, scroll reveal і dark mode.

- [ ] Додати сучасний світлий/темний hero з сіткою, glow та browser mockup.
- [ ] Додати stagger reveal, hover-depth, floating chips і animated data flow.
- [ ] Додати адаптивні правила для 1100, 800, 600 і 380 px.
- [ ] Додати `prefers-reduced-motion` fallback.
- [ ] Підключити `home.css` після базових стилів.

### Task 5: Verification

**Files:**
- Verify: `app/page.tsx`, `app/home.css`, `components/home/*.tsx`, `app/layout.tsx`

- [ ] Запустити `npm run typecheck`.
- [ ] Запустити `npm run build`.
- [ ] Перевірити Vercel status для фінального commit SHA.
