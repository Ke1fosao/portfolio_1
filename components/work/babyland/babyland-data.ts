export type BabylandModule = {
  title: string;
  description: string;
  items: readonly string[];
};

export type BabylandJourney = {
  role: string;
  label: string;
  summary: string;
  steps: readonly string[];
};

export type BabylandRole = {
  id: string;
  title: string;
  scope: string;
  permissions: readonly string[];
};

export const babylandModules: readonly BabylandModule[] = [
  {
    title: "Публічний досвід",
    description: "Сайт допомагає батькам зрозуміти заклад, побачити команду й обрати наступний крок.",
    items: ["Головна", "Про садок", "Групи", "Розклад", "Педагоги", "Психологи"]
  },
  {
    title: "Зарахування та комунікація",
    description: "Звернення потрапляють у структурований процес замість розрізнених дзвінків і повідомлень.",
    items: ["Онлайн-заявка", "Запит на екскурсію", "Контактна форма", "Підписка", "Статуси звернень"]
  },
  {
    title: "Контент",
    description: "Команда може підтримувати публічну інформацію актуальною без змін у коді.",
    items: ["Новини", "Галерея", "Відгуки", "FAQ", "SEO", "Головна сторінка"]
  },
  {
    title: "Щоденні операції",
    description: "Групи, педагоги, профілі спеціалістів і розклад зібрані в керовані сутності.",
    items: ["Групи", "Педагоги", "Профілі психологів", "Розклад", "Медіа педагогів"]
  },
  {
    title: "Ідентичність і ролі",
    description: "Кожен тип користувача отримує тільки свій набір дій і доступів.",
    items: ["Firebase Auth", "Custom claims", "RBAC", "Особистий профіль", "Керування користувачами"]
  },
  {
    title: "Безпека та інфраструктура",
    description: "Дані, форми й медіа проходять через окремі захисні шари та контроль доступу.",
    items: ["Firestore Rules", "Storage Rules", "Cloud Functions", "Rate limiting", "Audit logs", "Backups"]
  }
] as const;

export const babylandJourneys: readonly BabylandJourney[] = [
  {
    role: "Батьки",
    label: "PUBLIC JOURNEY",
    summary: "Від першого знайомства із садочком до заявки, екскурсії та особистого профілю.",
    steps: [
      "Перегляд груп, педагогів, психологів і розкладу",
      "Новини, галерея, відгуки та відповіді на часті запитання",
      "Онлайн-заявка або запит на екскурсію",
      "Особистий профіль і взаємодія з власними даними",
      "Публікація відгуку після модерації"
    ]
  },
  {
    role: "Педагоги й контент-команда",
    label: "CONTENT JOURNEY",
    summary: "Підтримка актуальної інформації про групи, команду, навчання та життя закладу.",
    steps: [
      "Редагування груп і розкладу відповідно до дозволів",
      "Керування профілями педагогів і психологів",
      "Завантаження фотографій і медіа",
      "Створення новин і наповнення галереї",
      "Оновлення публічного контенту без втручання в код"
    ]
  },
  {
    role: "Адміністрація",
    label: "OPERATIONS JOURNEY",
    summary: "Один back office для звернень, користувачів, контенту й контролю системи.",
    steps: [
      "Обробка заявок, екскурсій і повідомлень",
      "Модерація відгуків та керування статусами",
      "Керування користувачами, ролями й дозволами",
      "Контроль SEO, груп, педагогів, розкладу, новин і галереї",
      "Перегляд журналу дій і резервних копій"
    ]
  }
] as const;

export const babylandPipeline = [
  { title: "Публічна форма", detail: "Заявка, контакт, екскурсія або підписка" },
  { title: "Клієнтська перевірка", detail: "Обов’язкові поля та формат контактів" },
  { title: "Turnstile", detail: "Підтримка антибот-токена" },
  { title: "Cloud Function", detail: "Серверна точка прийому звернення" },
  { title: "Rate limit", detail: "2 / 10 хв, 5 / год, 15 / добу" },
  { title: "Firestore", detail: "Окрема колекція для кожного типу звернення" },
  { title: "Адмін-статус", detail: "Робочий цикл обробки звернення" }
] as const;

export const babylandFormStatuses = [
  { entity: "Заявки", statuses: ["pending", "reviewed", "accepted", "declined"] },
  { entity: "Повідомлення", statuses: ["new", "processing", "resolved", "archived"] },
  { entity: "Екскурсії", statuses: ["new", "processing", "resolved", "cancelled"] }
] as const;

export const babylandAdminAreas = [
  "Дашборд",
  "Заявки",
  "Екскурсії",
  "Повідомлення",
  "Відгуки",
  "Головна сторінка",
  "SEO",
  "Про садок",
  "FAQ",
  "Контакти",
  "Групи",
  "Педагоги",
  "Розклад",
  "Галерея",
  "Новини",
  "Користувачі",
  "Аудит",
  "Резервні копії"
] as const;

export const babylandRoles: readonly BabylandRole[] = [
  {
    id: "developer",
    title: "Developer",
    scope: "Повний технічний контроль",
    permissions: ["Усі дозволи", "Керування ролями", "Системні операції"]
  },
  {
    id: "admin",
    title: "Admin",
    scope: "Повні адміністративні операції",
    permissions: ["Заявки й контент", "Користувачі", "Аудит"]
  },
  {
    id: "moderator",
    title: "Moderator",
    scope: "Комунікація та звернення",
    permissions: ["Заявки", "Екскурсії", "Повідомлення", "Відгуки"]
  },
  {
    id: "content_moderator",
    title: "Content moderator",
    scope: "Публічний контент",
    permissions: ["Новини", "Галерея", "Групи", "Педагоги", "Розклад"]
  },
  {
    id: "teacher",
    title: "Teacher",
    scope: "Освітні операції",
    permissions: ["Розклад", "Групи в межах дозволів"]
  },
  {
    id: "parent",
    title: "Parent",
    scope: "Особистий профіль",
    permissions: ["Власні дані", "Публічні взаємодії"]
  }
] as const;

export const babylandSecurityLayers = [
  {
    title: "Перевірена автентифікація",
    text: "Привілейовані дії залежать від Firebase Authentication і підтвердженого email."
  },
  {
    title: "Custom claims",
    text: "Роль і дозволи для staff-рівнів підтверджуються серверними claims, а не лише станом інтерфейсу."
  },
  {
    title: "Default deny",
    text: "Firestore має catch-all правило, яке забороняє доступ до всього, що не дозволено явно."
  },
  {
    title: "Захист ролей",
    text: "Звичайний користувач не може самостійно змінити власну роль, permissions або службові поля."
  },
  {
    title: "Серверні форми",
    text: "Анонімні прямі записи заявок у Firestore заборонені; звернення проходять через Cloud Functions."
  },
  {
    title: "Валідація й rate limit",
    text: "Поля нормалізуються на сервері, а частота звернень обмежується для кожного типу форми."
  },
  {
    title: "Захищені медіа",
    text: "Запис у Storage доступний лише дозволеним ролям із перевіркою граничного розміру файлів."
  },
  {
    title: "Аудит і резервні копії",
    text: "Службові дії фіксуються окремо, а backup-колекції доступні адміністративним ролям."
  }
] as const;

export const babylandArchitecture = [
  { layer: "Experience", title: "React 19 + TypeScript", detail: "Публічний сайт, профіль і admin UI" },
  { layer: "Routing", title: "React Router + lazy loading", detail: "Окреме завантаження великих модулів" },
  { layer: "State", title: "Zustand", detail: "Стан авторизації, адмінки та badge-індикаторів" },
  { layer: "Identity", title: "Firebase Authentication", detail: "Сесії, email verification і claims" },
  { layer: "Data", title: "Cloud Firestore", detail: "Контент, користувачі, заявки, групи, профілі" },
  { layer: "Server", title: "Cloud Functions · europe-west3", detail: "Публічні форми та user administration" },
  { layer: "Media", title: "Firebase Storage", detail: "Галерея, новини, брендинг і профілі педагогів" },
  { layer: "Delivery", title: "Firebase Hosting", detail: "Публічний frontend і конфігурація кешування" }
] as const;

export const babylandTools = [
  "React 19",
  "TypeScript",
  "Vite",
  "Tailwind CSS 4",
  "Motion",
  "Firebase",
  "Zustand",
  "Zod",
  "TipTap",
  "Recharts",
  "DnD Kit",
  "React Hook Form",
  "Cloudflare Turnstile"
] as const;

export const babylandProductSurface = [
  { title: "Головна", text: "Позиціонування закладу, слайдер, переваги, метрики й ключові CTA." },
  { title: "Групи й розклад", text: "Вікові програми, місткість, вартість, активності та деталізований розклад." },
  { title: "Команда", text: "Педагоги, спеціалісти, психологи, освіта, досвід, методики та медіа." },
  { title: "Новини", text: "Категорії, чернетки, відкладена публікація, теги та повні матеріали." },
  { title: "Галерея", text: "Альбоми, категорії, обкладинки, групування та керування фотографіями." },
  { title: "Відгуки", text: "Рейтинги, категорії, верифікація, модерація та статус публікації." },
  { title: "Зарахування", text: "Структурована форма з даними дитини, батьків, групи та додатковою інформацією." },
  { title: "Контакти й FAQ", text: "Графік, карта, канали зв’язку, категорії запитань і тематичні теги." },
  { title: "Профіль", text: "Авторизація, особисті дані, дитина, пароль і контроль власної сесії." }
] as const;

export const babylandEngineeringDecisions = [
  {
    title: "Lazy loading за маршрутами",
    text: "Великі публічні й адміністративні модулі не входять у початковий bundle одночасно."
  },
  {
    title: "Public fallback без послаблення admin",
    text: "Публічна частина може показати локальний fallback при проблемі мережі, але admin-маршрути залишаються строгими."
  },
  {
    title: "Optimistic update із rollback",
    text: "Контент змінюється в UI одразу, але повертається до попереднього стану, якщо збереження не вдалося."
  },
  {
    title: "Окремі колекції для складних сутностей",
    text: "Групи та профілі спеціалістів винесені з головного документа для керованості й масштабування."
  },
  {
    title: "Підготовка медіа перед записом",
    text: "Зображення стискаються або завантажуються у Storage, а в Firestore зберігаються посилання."
  },
  {
    title: "Редаговане SEO",
    text: "Meta title, description, canonical, robots, Open Graph і геодані зберігаються як керований контент."
  },
  {
    title: "Claims як джерело привілеїв",
    text: "Для staff-ролей клієнтський профіль звіряється з перевіреними custom claims."
  }
] as const;

export const babylandDeliverables = [
  "Продуктова структура та UX",
  "Публічний адаптивний frontend",
  "Система авторизації й профілів",
  "Кастомна адміністративна панель",
  "Контент-модель і Firebase data architecture",
  "Ролі, permissions і custom claims",
  "Cloud Functions для форм і користувачів",
  "Firestore та Storage security rules",
  "SEO, Hosting і production configuration",
  "Ітеративне виправлення помилок і hardening"
] as const;
