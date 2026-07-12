import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card project-${project.accent} ${featured ? "project-featured" : ""}`}>
      <Link className="project-cover" href={`/work/${project.slug}`} aria-label={`Відкрити проєкт ${project.title}`}>
        <div className="project-orbit project-orbit-one" />
        <div className="project-orbit project-orbit-two" />
        <span className="project-monogram">{project.title.slice(0, 2).toUpperCase()}</span>
        <span className="project-year">{project.year}</span>
      </Link>
      <div className="project-body">
        <div className="project-meta-row">
          <span className={`status status-${project.status === "Завершено" ? "done" : project.status === "Концепт" ? "concept" : "progress"}`}>
            {project.status}
          </span>
          <span>{project.eyebrow}</span>
        </div>
        <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.description}</p>
        <div className="tag-list" aria-label="Технології">
          {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </article>
  );
}
