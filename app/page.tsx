import Link from "next/link";
import { HeroExperience } from "@/components/home/hero-experience";
import { ScrollRevealController } from "@/components/home/scroll-reveal-controller";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

const benefits = [
  {
    number: "01",
    title: "Більше звернень",
    text: "Чітка структура, сильна пропозиція та зручні форми допомагають людині швидше зрозуміти цінність і зробити наступний крок.",
    visual: "leads"
  },
  {
    number: "02",
    title: "Менше ручної роботи",
    text: "Заявки одразу потрапляють у Telegram, CRM або адмінпанель. Статуси, сповіщення й автоматизація не дають загубити клієнта.",
    visual: "automation"
  },
  {
    number: "03",
    title: "Повний контроль",
    text: "Контент, ціни, послуги, заявки та аналітика керуються в одному зрозумілому місці без постійного втручання в код.",
    visual: "control"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Розбираю задачу",
    text: "Уточнюю ціль, аудиторію, функції та те, яку дію має зробити відвідувач."
  },
  {
    number: "02",
    title: "Проєктую шлях клієнта",
    text: "Будую структуру й сценарії так, щоб сайт був зрозумілим із першого екрана."
  },
  {
    number: "03",
    title: "Розробляю та підключаю логіку",
    text: "Створюю адаптивний інтерфейс, backend, форми, адмінпанель та інтеграції."
  },
  {
    number: "04",
    title: "Перевіряю й запускаю",
    text: "Тестую мобільну версію, швидкість, SEO, безпеку та допомагаю з публікацією."
  }
];

const strengths = [
  {
    icon: "◇",
    title: "Одна відповідальна людина",
    text: "Дизайн, frontend, backend і запуск не розпорошуються між різними виконавцями."
  },
  {
    icon: "↗",
    title: "Фокус на результаті",
    text: "Кожен блок має пояснювати, переконувати або вести до конкретної дії."
  },
  {
    icon: "⌁",
    title: "Зручно після запуску",
    text: "Продумую адмінпанель, редагування контенту та щоденну роботу з заявками."
  },
  {
    icon: "✦",
    title: "Сучасні інтеграції",
    text: "Telegram, AI, CRM, email, онлайн-запис, платежі та інші потрібні бізнесу інструменти."
  }
];

const technologies = ["Next.js", "TypeScript", "React", "Django", "REST API", "Supabase", "Firebase", "AI / LLM", "Telegram"];

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 4 3.8 10.7c-.9.4-.9 1 .1 1.3l4.4 1.4 1.7 5.1c.2.7.4.8.9.4l2.5-2.3 4.7 3.5c.8.5 1.4.2 1.6-.8L22 5.2C22.2 4.2 21.6 3.7 21 4Z" />
      <path d="m8.3 13.4 9.8-6.2M10 18.5l.2-4.1" />
    </svg>
  );
}

function BenefitVisual({ type }: { type: string }) {
  if (type === "leads") {
    return (
      <div className="home-benefit-visual home-benefit-visual-leads" aria-hidden="true">
        <div className="home-mini-form">
          <span className="home-mini-label">Залишити заявку</span>
          <i /><i /><button type="button">Надіслати</button>
        </div>
        <div className="home-mini-conversion"><strong>CTA</strong><span>чітка дія</span></div>
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="home-benefit-visual home-benefit-visual-automation" aria-hidden="true">
        <div className="home-auto-node"><span>01</span><strong>Форма</strong></div>
        <i className="home-auto-line" />
        <div className="home-auto-node is-accent"><span>02</span><strong>Telegram</strong></div>
        <i className="home-auto-line" />
        <div className="home-auto-node"><span>03</span><strong>CRM</strong></div>
      </div>
    );
  }

  return (
    <div className="home-benefit-visual home-benefit-visual-control" aria-hidden="true">
      <div className="home-control-top"><span>Панель керування</span><i /></div>
      <div className="home-control-row"><span>Нова заявка</span><strong>Нова</strong></div>
      <div className="home-control-row"><span>Запис на послугу</span><strong>У роботі</strong></div>
      <div className="home-control-row"><span>Оновлення контенту</span><strong>Готово</strong></div>
    </div>
  );
}

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 3);

  return (
    <div className="home-page">
      <ScrollRevealController />

      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-grid-bg" aria-hidden="true" />
        <div className="home-hero-orb home-hero-orb-one" aria-hidden="true" />
        <div className="home-hero-orb home-hero-orb-two" aria-hidden="true" />

        <div className="page-shell home-hero-layout">
          <div className="home-hero-copy">
            <div className="home-availability">
              <i />
              <span>Доступний для нових проєктів</span>
              <small>2026</small>
            </div>

            <p className="home-eyebrow">Full-stack розробка · Рівне та дистанційно</p>

            <h1 id="home-hero-title">
              Сайт, який не просто виглядає сучасно —
              <span>а приводить клієнтів і економить ваш час.</span>
            </h1>

            <p className="home-hero-description">
              Створюю продумані сайти й вебсистеми для бізнесу: від сильного першого екрана
              до заявок у Telegram, власної адмінпанелі, онлайн-запису та AI-автоматизації.
            </p>

            <div className="home-hero-actions">
              <a className="home-cta home-cta-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">
                <TelegramIcon />
                Обговорити сайт
                <ArrowIcon />
              </a>
              <a className="home-cta home-cta-secondary" href="#projects">
                Подивитися роботи
                <span>↓</span>
              </a>
            </div>

            <div className="home-hero-trust" aria-label="Основні переваги">
              <span><i /> Адаптивно для мобільних</span>
              <span><i /> SEO та швидкість</span>
              <span><i /> Підтримка після запуску</span>
            </div>
          </div>

          <HeroExperience />
        </div>

        <a className="home-scroll-cue" href="#benefits" aria-label="Прокрутити до переваг">
          <span>Дивитися далі</span>
          <i />
        </a>
      </section>

      <section className="home-proof-band" aria-label="Короткі факти">
        <div className="page-shell home-proof-grid">
          <div><strong>4+</strong><span>роки розвитку у веброзробці</span></div>
          <div><strong>8</strong><span>проєктів у портфоліо</span></div>
          <div><strong>Full-stack</strong><span>від інтерфейсу до backend</span></div>
          <div><strong>Рівне</strong><span>особисто та дистанційно</span></div>
        </div>
      </section>

      <section className="home-section page-shell" id="benefits">
        <div className="home-section-heading" data-home-reveal>
          <div>
            <span className="home-section-index">01 / Користь</span>
            <p className="home-section-kicker">Не просто гарний дизайн</p>
          </div>
          <div>
            <h2>Сайт має виконувати роботу, навіть коли ви зайняті.</h2>
            <p>
              Я продумую не лише зовнішній вигляд, а весь шлях: як людина знайде потрібне,
              чому довірятиме вам і куди потрапить її заявка.
            </p>
          </div>
        </div>

        <div className="home-benefit-grid">
          {benefits.map((benefit, index) => (
            <article className={`home-benefit-card reveal-delay-${index + 1}`} key={benefit.number} data-home-reveal>
              <div className="home-card-topline"><span>{benefit.number}</span><i /></div>
              <BenefitVisual type={benefit.visual} />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-projects-section" id="projects">
        <div className="page-shell">
          <div className="home-section-heading home-section-heading-projects" data-home-reveal>
            <div>
              <span className="home-section-index">02 / Кейси</span>
              <p className="home-section-kicker">Реальні проєкти</p>
            </div>
            <div>
              <h2>Від презентаційного сайту до повноцінної цифрової системи.</h2>
              <p>У роботах нижче є онлайн-запис, адмінпанелі, PWA, CRM-логіка, Telegram та AI.</p>
            </div>
          </div>

          <div className="featured-grid home-project-grid" data-home-reveal>
            {selectedProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0} />
            ))}
          </div>

          <div className="home-project-action" data-home-reveal>
            <Link className="home-inline-link" href="/work">Переглянути всі роботи <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      <section className="home-automation-section">
        <div className="home-automation-grid" aria-hidden="true" />
        <div className="page-shell home-automation-layout">
          <div className="home-automation-copy" data-home-reveal>
            <span className="home-section-index">03 / Автоматизація</span>
            <p className="home-section-kicker">Сайт може робити більше</p>
            <h2>Заявка прийшла. Система вже працює з нею.</h2>
            <p>
              Підключаю Telegram, CRM, email, AI-помічників та власні адмінпанелі,
              щоб звернення не губилися, а повторювані дії виконувалися автоматично.
            </p>
            <ul className="home-automation-list">
              <li><span>01</span> миттєве сповіщення про нову заявку</li>
              <li><span>02</span> кваліфікація потреби й формування брифу</li>
              <li><span>03</span> статуси, нотатки та історія роботи з клієнтом</li>
            </ul>
          </div>

          <div className="home-ai-panel" data-home-reveal>
            <div className="home-ai-panel-head">
              <div><i /><span>AI Sales Manager</span></div>
              <span>Концепт</span>
            </div>
            <div className="home-ai-chat">
              <div className="home-ai-message is-client">
                <span>Клієнт</span>
                <p>Потрібен сайт для салону. Хочу показати послуги й отримувати записи онлайн.</p>
              </div>
              <div className="home-ai-message is-manager">
                <span>AI-менеджер</span>
                <p>Зрозуміло. Уточню кількість послуг, бажаний термін і чи потрібна адмінпанель.</p>
              </div>
              <div className="home-ai-summary">
                <div><span>Ніша</span><strong>Beauty</strong></div>
                <div><span>Ціль</span><strong>Онлайн-запис</strong></div>
                <div><span>Статус</span><strong>Кваліфіковано</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section page-shell home-process-section">
        <div className="home-section-heading" data-home-reveal>
          <div>
            <span className="home-section-index">04 / Процес</span>
            <p className="home-section-kicker">Зрозуміло на кожному етапі</p>
          </div>
          <div>
            <h2>Від першої розмови до готового продукту — без хаосу.</h2>
            <p>Пояснюю рішення просто, показую проміжний результат і не ховаю важливі деталі за технічними словами.</p>
          </div>
        </div>

        <div className="home-process-list">
          {processSteps.map((step, index) => (
            <article className={`home-process-item reveal-delay-${(index % 3) + 1}`} key={step.number} data-home-reveal>
              <span className="home-process-number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
              <span className="home-process-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="home-tech-rail" aria-label="Технології">
        <div className="home-tech-track">
          {[...technologies, ...technologies].map((technology, index) => (
            <span key={`${technology}-${index}`}><i /> {technology}</span>
          ))}
        </div>
      </section>

      <section className="home-section page-shell home-why-section">
        <div className="home-section-heading" data-home-reveal>
          <div>
            <span className="home-section-index">05 / Підхід</span>
            <p className="home-section-kicker">Працюю як партнер</p>
          </div>
          <div>
            <h2>Красиво для відвідувача. Зручно для власника бізнесу.</h2>
            <p>Хороший сайт однаково добре працює з обох сторін: продає клієнту й не створює нових проблем команді.</p>
          </div>
        </div>

        <div className="home-strength-grid">
          {strengths.map((strength, index) => (
            <article className={`home-strength-card reveal-delay-${(index % 3) + 1}`} key={strength.title} data-home-reveal>
              <span className="home-strength-icon">{strength.icon}</span>
              <h3>{strength.title}</h3>
              <p>{strength.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell home-final-section" data-home-reveal>
        <div className="home-final-glow" aria-hidden="true" />
        <div className="home-final-content">
          <span className="home-section-index">Готові почати?</span>
          <h2>Розкажіть про задачу — я запропоную, як перетворити її на сильний сайт.</h2>
          <p>
            Напишіть кілька речень про бізнес, ціль і бажаний результат. Відповім без складних формальностей
            та допоможу визначити перший крок.
          </p>
          <div className="home-final-actions">
            <a className="home-cta home-cta-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">
              <TelegramIcon /> Обговорити сайт <ArrowIcon />
            </a>
            <a className="home-cta home-cta-secondary" href="mailto:dima.kovtunovych@gmail.com">Написати на email</a>
          </div>
        </div>
        <div className="home-final-signature" aria-hidden="true">
          <span>DK</span>
          <i />
        </div>
      </section>
    </div>
  );
}
