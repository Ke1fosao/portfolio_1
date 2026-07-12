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
  const babyland = projects.find((project) => project.slug === "babyland");
  const aiManager = projects.find((project) => project.slug === "ai-sales-manager");
  const dnz52 = projects.find((project) => project.slug === "dnz52");
  const active = projects.filter((project) => project.status === "У процесі");
  const completed = projects.filter((project) => project.status === "Завершено");
  const concepts = projects.filter((project) => project.status === "Концепт");

  const featuredProjects = [babyland, aiManager].filter(Boolean) as typeof projects;
  const completedProjects = [dnz52].filter(Boolean) as typeof projects;
  const orderedProjects = [...featuredProjects, ...completedProjects, ...active];

  const navigationItems = [
    { href: "#work-top", label: "Вступ" },
    ...orderedProjects.map((project) => ({ href: `#case-${project.slug}`, label: project.title })),
    { href: "#work-final", label: "Контакт" }
  ];

  return (
    <div className="wk-page" data-work-root data-active-case="0">
      <WorkStoryController />

      <aside className="wk-section-nav" aria-label="Навігація сторінкою робіт">
        <nav>
          {navigationItems.map((item, index) => (
            <a
              href={item.href}
              data-work-nav={index}
              aria-current={index === 0 ? "true" : undefined}
              key={item.href}
            >
              <i aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <section className="wk-hero" id="work-top" data-work-chapter aria-labelledby="work-title">
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
              {orderedProjects.slice(0, 6).map((project, index) => (
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

      <section className="wk-section-heading wk-section-heading-completed">
        <div>
          <span>01 / Головні напрями</span>
          <h2>Від повноцінної платформи до автономного AI-менеджера.</h2>
        </div>
        <p>BabyLand показує масштаб завершеної екосистеми, а AI Sales Manager — напрям автоматизації продажів і комунікації з клієнтами.</p>
      </section>

      <section className="wk-cases" aria-label="Головні проєкти">
        {featuredProjects.map((project, index) => (
          <CinematicProject
            key={project.slug}
            project={project}
            index={index}
            reverse={index % 2 === 1}
            featured
          />
        ))}
      </section>

      <section className="wk-section-heading wk-section-heading-completed">
        <div>
          <span>02 / Завершена платформа</span>
          <h2>ЗДО №52 — цифрова система для публічного сайту й щоденної роботи закладу.</h2>
        </div>
        <p>Окремий великий кейс із React-адмінпанеллю, Django API, PWA, push-сповіщеннями, онлайн-зарахуванням, AI та посиленими захисними механізмами.</p>
      </section>

      <section className="wk-cases" aria-label="Завершені освітні платформи">
        {completedProjects.map((project, index) => (
          <CinematicProject
            key={project.slug}
            project={project}
            index={featuredProjects.length + index}
            reverse
            featured
          />
        ))}
      </section>

      <section className="wk-section-heading wk-section-heading-active">
        <div>
          <span>03 / У виробництві</span>
          <h2>Різні бізнеси. Різні задачі. Одна вимога — продукт має працювати.</h2>
        </div>
        <p>Активні проєкти показують роботу з beauty, automotive, освітою, мовними курсами та приватними дитячими закладами.</p>
      </section>

      <section className="wk-cases wk-cases-active" aria-label="Активні проєкти">
        {active.map((project, index) => (
          <CinematicProject
            key={project.slug}
            project={project}
            index={featuredProjects.length + completedProjects.length + index}
            reverse={index % 2 === 0}
          />
        ))}
      </section>

      <ProjectIndex projects={orderedProjects} />

      <section className="wk-final" id="work-final" data-work-chapter>
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
