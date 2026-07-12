import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про мене",
  description: "Досвід, підхід і технології full-stack розробника Дмитра Ковтуновича."
};

const skills = [
  "Next.js", "React", "TypeScript", "JavaScript", "Django", "Python",
  "REST API", "Supabase", "Firebase", "PostgreSQL", "Tailwind CSS", "Framer Motion",
  "Git", "Vercel", "Render", "ШІ-інтеграції"
];

export default function AboutPage() {
  return (
    <div className="page-shell inner-page">
      <section className="about-hero section-block">
        <div className="about-avatar"><span>DK</span></div>
        <div>
          <p className="section-label">Про мене</p>
          <h1>Дмитро Ковтунович — full-stack розробник із Рівного.</h1>
          <p>
            Мені 18 років, я понад чотири роки розвиваюсь у веброзробці та створюю продукти для малого бізнесу,
            дитячих закладів і стартапів. Працюю самостійно: від першої структури та дизайну до API, бази даних і деплою.
          </p>
        </div>
      </section>

      <section className="story-grid section-block">
        <div>
          <p className="section-label">Мій підхід</p>
          <h2>Спочатку задача бізнесу — потім технології.</h2>
        </div>
        <div className="story-copy">
          <p>
            Перед розробкою визначаю, яку дію має зробити користувач і що повинно стати простішим для власника бізнесу.
            Тому форма заявки — це не просто форма, а початок зрозумілого процесу обробки звернення.
          </p>
          <p>
            Люблю системні рішення: кастомні адмінпанелі, ролі й дозволи, сповіщення, аналітику, автоматичні документи,
            інтеграції Telegram та штучного інтелекту.
          </p>
        </div>
      </section>

      <section className="timeline section-block">
        <article><span>2023</span><div><h3>Початок веброзробки</h3><p>Frontend, JavaScript, адаптивна верстка та перші повноцінні інтерфейси.</p></div></article>
        <article><span>2024–2025</span><div><h3>Перехід до full-stack</h3><p>Django, бази даних, REST API та проєкти з реальною бізнес-логікою.</p></div></article>
        <article><span>2026</span><div><h3>Диплом і комерційне портфоліо</h3><p>Захист дипломної роботи на відмінно, Next.js-проєкти, автоматизація та ШІ-інтеграції.</p></div></article>
      </section>

      <section className="skills-section section-block">
        <div><p className="section-label">Інструменти</p><h2>Технології, з якими працюю</h2></div>
        <div className="large-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="contact-panel section-block">
        <span className="section-label">Співпраця</span>
        <h2>Маєте задачу або ідею? Розберемо її й визначимо найкращий формат реалізації.</h2>
        <div>
          <a className="button button-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Telegram <span>↗</span></a>
          <a className="button button-secondary" href="tel:+380682785466">+380 68 278 54 66</a>
        </div>
      </section>
    </div>
  );
}
