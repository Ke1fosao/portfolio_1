export type ProjectStatus = "Завершено" | "У процесі" | "Концепт";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  status: ProjectStatus;
  year: string;
  stack: string[];
  highlights: string[];
  repository?: string;
  live?: string;
  accent: "violet" | "blue" | "amber" | "rose" | "green" | "cyan" | "orange" | "indigo";
};

export const projects: Project[] = [
  {
    slug: "babyland",
    title: "BabyLand",
    eyebrow: "Екосистема для дитячого садка",
    description: "Преміальна платформа, що об’єднує батьків, вихователів та адміністрацію в одному цифровому середовищі.",
    longDescription: "BabyLand — завершена екосистема для сучасного дитячого садка з публічним сайтом, заявками, особистим кабінетом, ролями користувачів і повноцінною адміністративною частиною. Основний акцент зроблено на зрозумілому UX, безпеці доступу та зручному керуванні контентом.",
    status: "Завершено",
    year: "2026",
    stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Firebase"],
    highlights: [
      "Рольова модель для developer, admin, moderator, teacher і parent",
      "Kanban-керування заявками, новинами, розкладом і відгуками",
      "Firebase Authentication, Firestore, Storage та Hosting",
      "Адаптивний інтерфейс із плавними анімаціями"
    ],
    repository: "https://github.com/Ke1fosao/BabyLand",
    live: "https://babyland.com.ua/",
    accent: "violet"
  },
  {
    slug: "dnz52",
    title: "ЗДО №52",
    eyebrow: "Цифрова платформа дошкільного закладу",
    description: "Повнофункціональний сайт із React-адмінпанеллю, Django API, PWA, розумним пошуком, push-сповіщеннями та ШІ-помічником.",
    longDescription: "Проєкт для закладу дошкільної освіти в Рівному. Система включає публічний інформаційний портал, новини, події, групи, меню, документи, онлайн-зарахування, віртуальний тур і власну адміністративну панель. Окрему увагу приділено доступності, безпеці, офлайн-режиму та автоматизації роботи персоналу.",
    status: "Завершено",
    year: "2026",
    stack: ["React", "TypeScript", "Django", "DRF", "Supabase", "PWA", "Gemini"],
    highlights: [
      "Кастомна React-адмінпанель без стандартної Django admin",
      "PWA, офлайн-режим і тематичні push-сповіщення",
      "ШІ-помічник для батьків та генерація контенту",
      "2FA, CSP, throttling, антиспам і захист від брутфорсу"
    ],
    repository: "https://github.com/Ke1fosao/dnz52_react",
    live: "https://dnz52.onrender.com/",
    accent: "blue"
  },
  {
    slug: "fancy",
    title: "FÁNCY",
    eyebrow: "Сайт преміального beauty house",
    description: "Редакційний візуальний стиль, каталог послуг, галерея, ціни та зручний сценарій онлайн-запису.",
    longDescription: "FÁNCY — адаптивний сайт для салону краси в Рівному. Відвідувач може переглянути напрямки роботи, порівняти послуги та ціни, відкрити галерею, знайти салон і залишити заявку на запис. Форми мають серверну валідацію, антиспам і можливість доставки звернень у Telegram.",
    status: "У процесі",
    year: "2026",
    stack: ["Next.js 16", "React 19", "TypeScript", "Motion", "Zod", "Vercel"],
    highlights: [
      "Повний каталог послуг і структуровані ціни",
      "Онлайн-запис із вибором послуги, дати й часу",
      "SEO, Open Graph, sitemap, robots і structured data",
      "Серверна валідація, rate limiting і honeypot"
    ],
    repository: "https://github.com/Ke1fosao/FANCY",
    live: "https://fancy-8ziv6qsjw-ke1fosaos-projects.vercel.app",
    accent: "rose"
  },
  {
    slug: "grand-team-auto",
    title: "Grand Team Auto",
    eyebrow: "Сайт спеціалізованого VAG-сервісу",
    description: "Темний автомобільний сайт із калькулятором вартості, SEO-сторінками послуг і формою запису.",
    longDescription: "Презентаційний сайт для автосервісу, що працює з Audi, Volkswagen, Škoda та Porsche. Проєкт поєднує кінематографічну подачу, окремі SEO-сторінки, калькулятор орієнтовної вартості та серверну форму запису з можливістю інтеграції Telegram.",
    status: "У процесі",
    year: "2026",
    stack: ["Next.js 16", "React 19", "TypeScript", "CSS", "Lucide"],
    highlights: [
      "SEO-сторінки для послуг та автомобільних брендів",
      "Калькулятор орієнтовної вартості ремонту",
      "Glassmorphism-хедер і кінематографічний hero",
      "Форма запису із серверною валідацією"
    ],
    repository: "https://github.com/Ke1fosao/GRAND_TEAM_AUTO",
    accent: "cyan"
  },
  {
    slug: "happy-kids",
    title: "Happy Kids",
    eyebrow: "Сайт дитячого центру",
    description: "Двомовний Next.js-сайт із Django API, галереєю, програмами, новинами, заявками та власною адмінпанеллю.",
    longDescription: "Happy Kids — вебплатформа дитячого центру в Рівному. Публічна частина розповідає про програми та команду, а кастомна адміністративна панель дозволяє працювати із заявками, повідомленнями й контентом. Передбачено fallback-режим, коли backend тимчасово недоступний.",
    status: "У процесі",
    year: "2026",
    stack: ["Next.js", "TypeScript", "Django", "DRF", "Docker"],
    highlights: [
      "Українська та англійська версії",
      "Кастомна адмінпанель для заявок і контенту",
      "Fallback-контент при недоступному API",
      "Docker Compose та локальний Windows-запуск"
    ],
    repository: "https://github.com/Ke1fosao/Happy_Kids",
    accent: "amber"
  },
  {
    slug: "oseredok",
    title: "Oseredok",
    eyebrow: "Центр польської мови та культури",
    description: "Інтерактивне представництво мовного центру з курсами, викладачами, тестуванням і записом на пробне заняття.",
    longDescription: "Oseredok створюється як сучасний сайт центру польської мови та культури. Він знайомить користувача з програмами, допомагає обрати формат навчання та спрощує реєстрацію на пробний урок. Дизайн поєднує європейську стриманість, сильну типографіку та адаптивну взаємодію.",
    status: "У процесі",
    year: "2026",
    stack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    highlights: [
      "Форма пробного уроку з вибором віку та рівня",
      "Адаптивне мобільне меню з блокуванням скролу",
      "SEO, hreflang, Open Graph і LanguageSchool schema",
      "Українсько-польська подача контенту"
    ],
    repository: "https://github.com/Ke1fosao/Oseredok",
    live: "https://oseredok-center-of-polish-language-and-culture.ai.studio/",
    accent: "green"
  },
  {
    slug: "poppins-club",
    title: "The Poppins Club",
    eyebrow: "Платформа приватного дитячого садка",
    description: "Сайт, CRM-процес заявок, ШІ-помічник, Telegram-бот і повне керування контентом із адмінпанелі.",
    longDescription: "The Poppins Club — комплексна система для приватного дитячого садка. Вона поєднує публічний сайт, шестикрокову анкету, керований процес обробки заявок, власну адмінпанель, ШІ-помічника та Telegram-бота для батьків і адміністраторів.",
    status: "У процесі",
    year: "2026",
    stack: ["React", "TypeScript", "Django", "DRF", "Gemini", "Telegram Bot"],
    highlights: [
      "Повне редагування контенту без втручання в код",
      "Статуси, нотатки, CSV-експорт і робочий процес заявок",
      "Gemini-помічник із контекстом із бази даних",
      "Telegram-бот для сповіщень і зміни статусів"
    ],
    repository: "https://github.com/Ke1fosao/Poppins_Club",
    accent: "orange"
  },
  {
    slug: "ai-sales-manager",
    title: "AI Sales Manager",
    eyebrow: "ШІ-менеджер продажів у Telegram",
    description: "Автономний менеджер, який знаходить потребу клієнта, презентує рішення, уточнює бюджет і доводить діалог до домовленості.",
    longDescription: "Концепт Telegram-менеджера для продажу сайтів і цифрових рішень. Агент веде природний діалог українською, пам’ятає контекст, кваліфікує ліда, пояснює користь майбутнього сайту, формує попередню пропозицію та передає Дмитру структуроване резюме домовленостей.",
    status: "Концепт",
    year: "2026",
    stack: ["Telegram Bot API", "LLM", "CRM", "Python", "Automation"],
    highlights: [
      "Кваліфікація клієнта: ніша, цілі, бюджет, строки й функціонал",
      "Персоналізована презентація послуг без шаблонних відповідей",
      "Автоматичний follow-up і контроль статусу ліда",
      "Передача розробнику короткого брифу та історії домовленостей"
    ],
    accent: "indigo"
  }
];

export const featuredProjects = projects.filter((project) => ["babyland", "dnz52", "ai-sales-manager"].includes(project.slug));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
