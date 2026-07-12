export const dnz52PublicModules = [
  {
    title: "Інформаційний портал",
    text: "Головна, новини, події, групи, гуртки, команда, спеціалісти, атестація, документи та розділ для батьків."
  },
  {
    title: "Щоденна інформація",
    text: "Меню харчування, календар подій, розклад, контакти, FAQ, галерея та структурований пошук по сайту."
  },
  {
    title: "Взаємодія з батьками",
    text: "Онлайн-зарахування, відгуки, запитання, AI-помічник, push-сповіщення й експорт подій у календар."
  },
  {
    title: "Імерсивний досвід",
    text: "Віртуальний тур із фото-зупинками, описами, стрілками, свайпами та навігацією мініатюрами."
  }
] as const;

export const dnz52Journeys = [
  {
    title: "Батьки",
    label: "PUBLIC JOURNEY",
    steps: [
      "Знаходять групу, педагогів, меню й документи",
      "Переглядають новини, події та галерею",
      "Ставлять запитання AI-помічнику «Сонечко»",
      "Подають онлайн-заявку на зарахування",
      "Отримують тематичні push-сповіщення"
    ]
  },
  {
    title: "Адміністрація",
    label: "OPERATIONS JOURNEY",
    steps: [
      "Редагує весь контент у React-адмінпанелі",
      "Обробляє заявки, відгуки та запитання",
      "Керує користувачами, правами й 2FA",
      "Запускає push-розсилки",
      "Переглядає історію змін"
    ]
  }
] as const;

export const dnz52AdminAreas = [
  "Новини",
  "Події",
  "FAQ",
  "Документи",
  "Галерея",
  "Меню",
  "Групи",
  "Гуртки",
  "Спеціалісти",
  "Атестація",
  "Батькам",
  "Слайдер",
  "Штат",
  "Сторінки",
  "Контакти",
  "Заявки",
  "Віртуальний тур",
  "Користувачі",
  "Push-розсилка",
  "Історія змін"
] as const;

export const dnz52SearchCapabilities = [
  "Нормалізація словоформ",
  "Толерантність до друкарських помилок",
  "Відстань Левенштейна",
  "Підказка «можливо, ви мали на увазі»",
  "Ранжування результатів",
  "Підсвічування збігів"
] as const;

export const dnz52PwaCapabilities = [
  {
    title: "Встановлення",
    text: "Сайт можна додати на головний екран телефону як окремий застосунок."
  },
  {
    title: "Офлайн-режим",
    text: "Service worker і Workbox використовують кешування та stale-while-revalidate."
  },
  {
    title: "Push",
    text: "Батьки можуть підписатися на тематичні сповіщення про новини та події."
  },
  {
    title: "Адаптивність",
    text: "Публічна частина й адмінпанель пристосовані до телефонів, планшетів і desktop."
  }
] as const;

export const dnz52SecurityLayers = [
  {
    title: "Захист входу",
    text: "django-axes обмежує повторні невдалі спроби входу та зменшує ризик brute-force атак."
  },
  {
    title: "2FA / TOTP",
    text: "Для адміністративного доступу передбачене двофакторне підтвердження через QR і TOTP."
  },
  {
    title: "Content Security Policy",
    text: "django-csp формує політику завантаження ресурсів і зменшує ризик виконання небажаного контенту."
  },
  {
    title: "HTTPS-параметри",
    text: "У production застосовуються HSTS, secure cookies, nosniff і захист від clickjacking."
  },
  {
    title: "API throttling",
    text: "DRF throttling контролює частоту запитів до API та чутливих endpoint-ів."
  },
  {
    title: "Антиспам",
    text: "Публічні форми використовують honeypot, rate limit і підтримку Cloudflare Turnstile."
  },
  {
    title: "Санітизація контенту",
    text: "HTML після редакторів та AI-генерації очищується перед збереженням і показом."
  },
  {
    title: "Моніторинг",
    text: "Передбачене підключення Sentry для відстеження production-помилок."
  }
] as const;

export const dnz52Architecture = [
  { layer: "Experience", title: "React 18 + TypeScript", text: "Публічний сайт і повністю кастомна адмінпанель" },
  { layer: "UI", title: "Tailwind + Radix + Motion", text: "Дизайн-система, доступні компоненти й анімації" },
  { layer: "Data fetching", title: "TanStack Query + Axios", text: "Кешування, запити, оновлення й робота зі станами API" },
  { layer: "API", title: "Django REST Framework", text: "Серіалізація, фільтри, permissions, throttling і документація" },
  { layer: "Backend", title: "Django 5.2", text: "Контентні моделі, адміністрування, історія змін і бізнес-логіка" },
  { layer: "Database", title: "Supabase PostgreSQL", text: "Віддалена база через connection pooler" },
  { layer: "Media", title: "Supabase Storage", text: "S3-сумісне зберігання фотографій і документів" },
  { layer: "Delivery", title: "Render + WhiteNoise", text: "Django роздає API та зібраний React SPA одним застосунком" }
] as const;

export const dnz52Tools = [
  "React 18",
  "TypeScript 5",
  "Vite 6",
  "Tailwind CSS 3",
  "Django 5.2",
  "DRF 3.15",
  "Supabase PostgreSQL",
  "Supabase Storage",
  "TanStack Query",
  "Framer Motion",
  "React Hook Form",
  "Zod",
  "Radix UI",
  "Workbox",
  "Google Gemini",
  "Web Push"
] as const;

export const dnz52EngineeringDecisions = [
  {
    title: "Один production-застосунок",
    text: "React збирається у SPA, після чого Django роздає frontend, API та статику в одному deployment-контурі."
  },
  {
    title: "Кастомна адмінпанель",
    text: "Контент-менеджери працюють у React-інтерфейсі в стилі публічного сайту, а не у стандартній Django admin."
  },
  {
    title: "Окремі сервіси для даних і медіа",
    text: "PostgreSQL та Storage винесені в Supabase, а локальна розробка може працювати з SQLite і локальними файлами."
  },
  {
    title: "Доступність як частина системи",
    text: "Реалізовані skip-link, видимий focus, focus trap, режим великого шрифту та альтернативні описи зображень."
  },
  {
    title: "AI із контекстом продукту",
    text: "Помічник відповідає на основі інформації сайту та повертає посилання на джерела, а AI також використовується для модерації й генерації текстів."
  },
  {
    title: "Версійність і контроль змін",
    text: "simple-history зберігає історію редагувань, а drag-and-drop дозволяє керувати порядком контенту без зміни коду."
  }
] as const;

export const dnz52Deliverables = [
  "Архітектура монорепозиторію",
  "Публічний React frontend",
  "Кастомна React-адмінпанель",
  "Django REST API",
  "Моделі та серіалізатори контенту",
  "Онлайн-зарахування",
  "Розумний пошук",
  "PWA й офлайн-режим",
  "Push-сповіщення",
  "AI-помічник і AI-інструменти",
  "2FA та production security",
  "Supabase і Render deployment"
] as const;
