import type { Metadata } from "next";
import Link from "next/link";
import { CinematicProject } from "@/components/work/cinematic-project";
import { ProjectIndex } from "@/components/work/project-index";
import { WorkStoryController } from "@/components/work/work-story-controller";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Роботи",
  description: "Case studies Дмитра Ковтуновича: сайти, вебсистеми, адмінпанелі, автоматизація та AI-рішення."
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function WorkPage() {
  const completed = projects.filter((project) => project.status === "Завершено");
  const active = projects.filter((project) => project.status === "У процесі");
  const concepts = projects.filter((project) => project.status === "Концепт");
  const orderedProjects = [...completed, ...active, ...concepts];

  return (
    <div className="wk-page" data-work-root data-active-case="0">
      <WorkStoryController />

      <section className="wk-hero" data-work-chapter aria-labelledby="work-title">
        <div className="wk-hero-grid" aria-hidden="true" />
        <div className="wk-hero-glow is-left" aria-hidden="true" />
        <div className="wk-hero-glow is-right" aria-hidden="true" />

        <div className="wk-hero-inner">
          <div className="wk-hero-topline">
            <span>Selected work / 2026</span>
            <span>Рівне · Україна</span>
          </div>

          <div className="wk-hero-main">
            <div className="wk-hero-copy">
              <p className="wk-eyebrow">Сайти · Системи · Автоматизація · AI</p>
              <h1 id="work-title">
                Роботи, які
                <span>перетворюють ідею</span>
                на систему.
              </h1>
              <p className="wk-hero-lead">
                Тут не просто красиві екрани. Кожен кейс показує, як дизайн, frontend,
                backend, адмінпанель і автоматизація складаються в один робочий продукт.
              </p>

              <div className="wk-hero-actions">
                <a className="wk-button is-primary" href="#case-babyland">Почати з кейсів <span>↓</span></a>
                <a className="wk-button" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Обговорити проєкт <Arrow /></a>
              </div>
            </div>

            <div className="wk-hero-index" aria-hidden="true">
              <div className="wk-hero-orbit is-one" />
              <div className="wk-hero-orbit is-two" />
              <div className="wk-hero-orbit is-three" />
              <div className="wk-hero-center"><small>PORTFOLIO</small><strong>{projects.length}</strong><span>PROJECTS</span></div>
              {projects.slice(0, 6).map((project, index) => (
                <span className={`wk-hero-project is-${index + 1}`} key={project.slug}>{project.title}</span>
              ))}
            </div>
          </div>

          <div className="wk-hero-bottom">
            <div><strong>{completed.length}</strong><span>завершені системи</span></div>
            <div><strong>{active.length}</strong><span>активні проєкти</span></div>
            <div><strong>{concepts.length}</strong><span>AI-концепт</span></div>
            <div className="wk-scroll-cue"><span>Scroll through cases</span><i><b /></i></div>
          </div>
        </div>
      </section>

      <aside className="wk-progress" aria-label="Прогрес перегляду проєктів">
        <div className="wk-progress-line"><i /></div>
        <span>00</span>
        <strong>CASE STUDIES</strong>
        <span>{String(orderedProjects.length).padStart(2, "0")}</span>
      </aside>

      <section className="wk-section-heading wk-section-heading-completed">
        <div>
          <span>01 / Реалізовані</span>
          <h2>Системи, які вже пройшли шлях від ідеї до запуску.</h2>
        </div>
        <p>Два головні завершені кейси — з ролями, базою даних, адміністративною логікою, безпекою та реальними сценаріями використання.</p>
      </section>

      <section className="wk-cases" aria-label="Завершені проєкти">
        {completed.map((project, index) => (
          <CinematicProject
            key={project.slug}
            project={project}
            index={index}
            reverse={index % 2 === 1}
            featured
          />
        ))}
      </section>

      <section className="wk-section-heading wk-section-heading-active">
        <div>
          <span>02 / У виробництві</span>
          <h2>Різні бізнеси. Різні задачі. Одна вимога — продукт має працювати.</h2>
        </div>
        <p>Активні проєкти показують роботу з beauty, automotive, освітою, мовними курсами та приватними дитячими закладами.</p>
      </section>

      <section className="wk-cases wk-cases-active" aria-label="Активні проєкти">
        {active.map((project, index) => (
          <CinematicProject
            key={project.slug}
            project={project}
            index={completed.length + index}
            reverse={index % 2 === 0}
          />
        ))}
      </section>

      <section className="wk-section-heading wk-section-heading-ai">
        <div>
          <span>03 / Дослідження</span>
          <h2>Наступний рівень — система, яка сама веде діалог із клієнтом.</h2>
        </div>
        <p>AI Sales Manager — окремий концепт Telegram-менеджера для кваліфікації звернень, підготовки брифу й передачі домовленостей розробнику.</p>
      </section>

      <section className="wk-cases wk-cases-concept" aria-label="Концептуальні проєкти">
        {concepts.map((project, index) => (
          <CinematicProject
            key={project.slug}
            project={project}
            index={completed.length + active.length + index}
            featured
          />
        ))}
      </section>

      <ProjectIndex projects={orderedProjects} />

      <section className="wk-final" data-work-chapter>
        <div className="wk-final-grid" aria-hidden="true" />
        <div className="wk-final-index" aria-hidden="true">NEXT</div>
        <div className="wk-final-copy">
          <span className="wk-eyebrow">Наступний кейс може бути вашим</span>
          <h2>Потрібен сайт або система, яка працює не лише на вигляд?</h2>
          <p>Розкажіть про задачу. Я допоможу визначити структуру, функціонал і реальний шлях від першого екрана до готового продукту.</p>
          <div className="wk-final-actions">
            <a className="wk-button is-primary" href="https://t.me/Ke1fosao" target="_blank" rel="noreferrer">Обговорити проєкт <Arrow /></a>
            <Link className="wk-button" href="/about">Дізнатися більше про мене</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
