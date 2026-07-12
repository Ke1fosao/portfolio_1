import Link from "next/link";
import { ScrollRevealController } from "@/components/home/scroll-reveal-controller";
import { WorkshopScene } from "@/components/home/workshop-scene";
import { featuredProjects } from "@/data/projects";

const capabilities = [
  ["01", "Показати бізнес", "Сильна подача, структура, контент і візуальна мова, які одразу пояснюють цінність."],
  ["02", "Отримати звернення", "Форми, онлайн-запис, Telegram і сценарії, які ведуть відвідувача до дії."],
  ["03", "Керувати процесом", "Адмінпанель, статуси, CRM-логіка й аналітика без хаосу в повідомленнях."],
  ["04", "Автоматизувати", "AI, сповіщення, інтеграції та повторювані дії, які система виконує сама."]
];

const process = [
  ["Діагностика", "Знаходжу, де бізнес втрачає увагу, заявки або час."],
  ["Архітектура", "Будую шлях клієнта й структуру майбутньої системи."],
  ["Прототип", "Показую логіку до того, як починається повна розробка."],
  ["Розробка", "Збираю frontend, backend, інтеграції та адаптивність."],
  ["Запуск", "Перевіряю, публікую й залишаю зрозумілу систему керування."]
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  const projects = featuredProjects.slice(0, 3);

  return (
    <div className="dw-page">
      <ScrollRevealController />

      <section className="dw-hero">
        <div className="dw-noise" aria-hidden="true" />
        <div className="dw-hero-meta">
          <span>Full-stack developer</span>
          <span>Рівне / Remote</span>
        </div>

        <div className="dw-hero-title-wrap">
          <p className="dw-overline">Digital workshop for ambitious business</p>
          <h1>
            Ваш бізнес уже працює.
            <span>Тепер змусимо сайт працювати разом із ним.</span>
          </h1>
        </div>

        <div className="dw-hero-bottom">
          <div className="dw-hero-copy">
            <p>
              Я створюю не просто сторінки, а цілі цифрові системи: сайт, заявки, Telegram,
              адмінпанель, автоматизація та AI — зібрані в один зрозумілий продукт.
            </p>
            <div className="dw-actions">
              <a className="dw-action dw-action-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">
                Обговорити сайт <Arrow />
              </a>
              <a className="dw-action dw-action-secondary" href="#cases">Подивитися роботи ↓</a>
            </div>
          </div>
          <WorkshopScene />
        </div>

        <div className="dw-scroll-mark" aria-hidden="true">
          <span>scroll</span><i />
        </div>
      </section>

      <section className="dw-statement" data-home-reveal>
        <p>Не “зробити красиво”.</p>
        <h2>Зібрати систему, яка пояснює, переконує, приймає заявки й економить час.</h2>
      </section>

      <section className="dw-builder">
        <div className="dw-builder-sticky" data-home-reveal>
          <span className="dw-section-code">01 / SYSTEM</span>
          <h2>Продукт збирається шарами.</h2>
          <p>Кожен шар вирішує окрему бізнес-задачу. Разом вони створюють робочий інструмент.</p>
        </div>

        <div className="dw-builder-list">
          {capabilities.map(([number, title, text], index) => (
            <article key={number} className="dw-builder-row" data-home-reveal>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <strong>+0{index + 1}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="dw-cases" id="cases">
        <div className="dw-cases-head" data-home-reveal>
          <span className="dw-section-code">02 / SELECTED WORK</span>
          <h2>Роботи, де дизайн переходить у функціональну систему.</h2>
        </div>

        <div className="dw-case-stack">
          {projects.map((project, index) => (
            <article className={`dw-case dw-case-${project.accent}`} key={project.slug} data-home-reveal>
              <div className="dw-case-index">0{index + 1}</div>
              <div className="dw-case-main">
                <div className="dw-case-meta">
                  <span>{project.eyebrow}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="dw-case-tags">
                  {project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link href={`/work/${project.slug}`} className="dw-case-link">Відкрити кейс <Arrow /></Link>
              </div>
              <div className="dw-case-visual" aria-hidden="true">
                <div className="dw-case-window">
                  <div className="dw-window-bar"><i /><i /><i /></div>
                  <div className="dw-window-body">
                    <span>{project.title.slice(0, 2).toUpperCase()}</span>
                    <div><i /><i /><i /></div>
                  </div>
                </div>
                <div className="dw-case-orbit" />
              </div>
            </article>
          ))}
        </div>

        <div className="dw-all-work" data-home-reveal>
          <Link href="/work">Усі проєкти <Arrow /></Link>
        </div>
      </section>

      <section className="dw-before-after">
        <div className="dw-ba-head" data-home-reveal>
          <span className="dw-section-code">03 / TRANSFORMATION</span>
          <h2>Що змінюється після запуску.</h2>
        </div>
        <div className="dw-ba-grid">
          <div className="dw-ba-column is-before" data-home-reveal>
            <span>До</span>
            <ul>
              <li>Заявки губляться в різних месенджерах</li>
              <li>Клієнту довго пояснюють одне й те саме</li>
              <li>Контент змінюється тільки через розробника</li>
              <li>Сайт не веде до конкретної дії</li>
            </ul>
          </div>
          <div className="dw-ba-divider" aria-hidden="true"><i /></div>
          <div className="dw-ba-column is-after" data-home-reveal>
            <span>Після</span>
            <ul>
              <li>Кожне звернення має джерело й статус</li>
              <li>Сайт сам пояснює послугу та кваліфікує запит</li>
              <li>Власник керує контентом у своїй панелі</li>
              <li>Автоматизація підхоплює повторювані задачі</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dw-process">
        <div className="dw-process-copy" data-home-reveal>
          <span className="dw-section-code">04 / PROCESS</span>
          <h2>Від розмови до системи.</h2>
          <p>Без туману, нескінченних правок і незрозумілих технічних слів.</p>
        </div>
        <div className="dw-process-track">
          {process.map(([title, text], index) => (
            <article key={title} data-home-reveal>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="dw-ai" data-home-reveal>
        <div className="dw-ai-copy">
          <span className="dw-section-code">05 / AI LAYER</span>
          <h2>Сайт може не тільки чекати заявку. Він може почати розмову.</h2>
          <p>
            AI-менеджер уточнює потребу, бюджет і строки, формує короткий бриф і передає його вам уже структурованим.
          </p>
          <a href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer" className="dw-text-link">Обговорити AI-рішення <Arrow /></a>
        </div>
        <div className="dw-ai-console" aria-label="Приклад діалогу AI-менеджера">
          <div className="dw-console-head"><span>AI Sales Manager</span><i>online</i></div>
          <div className="dw-console-message is-client"><span>Клієнт</span><p>Потрібен сайт для салону й онлайн-запис.</p></div>
          <div className="dw-console-message is-ai"><span>AI</span><p>Уточню послуги, строки, бюджет і чи потрібна адмінпанель.</p></div>
          <div className="dw-console-result">
            <div><span>Ніша</span><strong>Beauty</strong></div>
            <div><span>Ціль</span><strong>Запис</strong></div>
            <div><span>Статус</span><strong>Qualified</strong></div>
          </div>
        </div>
      </section>

      <section className="dw-final" data-home-reveal>
        <span className="dw-final-label">Ready when you are</span>
        <h2>Давайте зберемо цифрову систему саме під ваш бізнес.</h2>
        <p>Опишіть задачу кількома реченнями. Я запропоную структуру, функціонал і перший крок.</p>
        <div className="dw-actions">
          <a className="dw-action dw-action-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Обговорити сайт <Arrow /></a>
          <a className="dw-action dw-action-secondary" href="mailto:dima.kovtunovych@gmail.com">Написати на email</a>
        </div>
        <div className="dw-final-mark" aria-hidden="true">DK</div>
      </section>
    </div>
  );
}
