import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

const services = [
  {
    number: "01",
    title: "Сайти для бізнесу",
    text: "Від компактної презентаційної сторінки до повноцінного сервісу з каталогом, записом, заявками та особистими кабінетами."
  },
  {
    number: "02",
    title: "Адмінпанелі та автоматизація",
    text: "Зручне керування контентом, CRM-логіка, статуси звернень, звіти, сповіщення й інтеграції без зайвої ручної роботи."
  },
  {
    number: "03",
    title: "Інтеграція ШІ",
    text: "Розумні помічники, генерація контенту, кваліфікація лідів і автоматизація комунікації з клієнтами."
  }
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="hero section-block">
        <div className="hero-copy">
          <span className="availability"><i /> Доступний для нових проєктів</span>
          <p className="kicker">Full-stack developer · Рівне, Україна</p>
          <h1>Створюю цифрові продукти, які працюють на бізнес.</h1>
          <p className="hero-text">
            Я Дмитро Ковтунович. Проєктую та розробляю сучасні сайти, адмінпанелі й вебсистеми,
            що допомагають залучати клієнтів, автоматизувати процеси та зменшувати ручну роботу.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/work">Переглянути роботи <span>↗</span></Link>
            <a className="button button-secondary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Обговорити проєкт</a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Коротка інформація">
          <div className="profile-visual">
            <div className="profile-ring profile-ring-one" />
            <div className="profile-ring profile-ring-two" />
            <span>DK</span>
          </div>
          <div className="profile-intro">
            <span>Дмитро Ковтунович</span>
            <strong>Full-stack developer</strong>
          </div>
          <div className="profile-stats">
            <div><strong>4+</strong><span>роки розвитку</span></div>
            <div><strong>8</strong><span>проєктів у портфоліо</span></div>
            <div><strong>18</strong><span>років</span></div>
          </div>
          <div className="profile-stack">
            <span>Next.js</span><span>TypeScript</span><span>Django</span><span>React</span>
          </div>
        </aside>
      </section>

      <section className="section-block intro-grid">
        <div>
          <p className="section-label">Обрані роботи</p>
          <h2>Від сайту до повноцінної цифрової системи.</h2>
        </div>
        <p>
          У кожному проєкті поєдную дизайн, технічну надійність і реальну бізнес-користь —
          від першої заявки до щоденної роботи адміністратора.
        </p>
      </section>

      <section className="featured-grid" aria-label="Обрані проєкти">
        {featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} featured />)}
      </section>

      <div className="center-action">
        <Link className="text-link" href="/work">Усі проєкти <span>→</span></Link>
      </div>

      <section className="section-block services-section">
        <div className="section-heading">
          <p className="section-label">Чим можу допомогти</p>
          <h2>Розробка без зайвої складності.</h2>
          <p>Перетворюю ідею на зрозумілий продукт: продумую структуру, дизайн, логіку та запуск.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span>{service.number}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block about-preview">
        <div className="about-quote">
          <span className="quote-mark">“</span>
          <blockquote>
            Моя задача — не просто зробити красивий інтерфейс, а створити інструмент,
            який зрозумілий людям і приносить користь бізнесу.
          </blockquote>
        </div>
        <div className="about-copy">
          <p className="section-label">Про мене</p>
          <h2>Навчаюсь швидко, працюю уважно, думаю про результат.</h2>
          <p>
            Працюю самостійно як full-stack розробник. Основний напрям — React, Next.js і TypeScript
            на фронтенді, Django та API-архітектура на бекенді. Окремо розвиваю інтеграції ШІ й автоматизацію.
          </p>
          <Link className="text-link" href="/about">Детальніше про мене <span>→</span></Link>
        </div>
      </section>

      <section className="contact-panel section-block">
        <span className="section-label">Є ідея?</span>
        <h2>Давайте створимо продукт, який буде працювати саме для вашого бізнесу.</h2>
        <div>
          <a className="button button-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Написати в Telegram <span>↗</span></a>
          <a className="button button-secondary" href="mailto:dima.kovtunovych@gmail.com">Надіслати email</a>
        </div>
      </section>
    </div>
  );
}
