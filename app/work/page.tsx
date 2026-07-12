import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Роботи",
  description: "Реалізовані та активні проєкти Дмитра Ковтуновича."
};

export default function WorkPage() {
  const completed = projects.filter((project) => project.status === "Завершено");
  const active = projects.filter((project) => project.status !== "Завершено");

  return (
    <div className="page-shell inner-page">
      <section className="page-intro section-block">
        <p className="section-label">Роботи</p>
        <h1>Проєкти, у яких дизайн підтримує функціональність.</h1>
        <p>
          Тут зібрані завершені системи, активні комерційні концепти та експерименти з автоматизацією й штучним інтелектом.
        </p>
      </section>

      <section className="project-group">
        <div className="group-heading"><h2>Реалізовані</h2><span>{completed.length}</span></div>
        <div className="work-grid">
          {completed.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="project-group">
        <div className="group-heading"><h2>У процесі та концепти</h2><span>{active.length}</span></div>
        <div className="work-grid">
          {active.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>
    </div>
  );
}
