import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectScene } from "@/components/work/project-scene";

type CinematicProjectProps = {
  project: Project;
  index: number;
  reverse?: boolean;
  featured?: boolean;
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function statusClass(status: Project["status"]) {
  if (status === "Завершено") return "is-done";
  if (status === "Концепт") return "is-concept";
  return "is-progress";
}

export function CinematicProject({ project, index, reverse = false, featured = false }: CinematicProjectProps) {
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`wk-case wk-accent-${project.accent}${reverse ? " is-reverse" : ""}${featured ? " is-featured" : ""}${project.status === "Концепт" ? " is-ai-case" : ""}`}
      id={`case-${project.slug}`}
      data-work-chapter
    >
      <div className="wk-case-sticky">
        <div className="wk-case-copy">
          <div className="wk-case-meta">
            <span className={`wk-status ${statusClass(project.status)}`}>{project.status}</span>
            <span>{project.year}</span>
            <span>{project.eyebrow}</span>
          </div>

          <div className="wk-case-title-row">
            <span className="wk-case-number">{projectNumber}</span>
            <h2>{project.title}</h2>
          </div>

          <p className="wk-case-description">{project.longDescription}</p>

          <div className="wk-case-proof">
            <span>Що реалізовано</span>
            <ul>
              {project.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}><i />{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="wk-case-stack" aria-label={`Технології проєкту ${project.title}`}>
            {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>

          <div className="wk-case-actions">
            <Link className="wk-case-link is-primary" href={`/work/${project.slug}`}>
              Відкрити кейс <Arrow />
            </Link>
            {project.live ? (
              <a className="wk-case-link" href={project.live} target="_blank" rel="noreferrer">
                Живий сайт <Arrow />
              </a>
            ) : null}
            {project.repository ? (
              <a className="wk-case-link" href={project.repository} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
            ) : null}
          </div>
        </div>

        <div className="wk-case-visual">
          <ProjectScene slug={project.slug} title={project.title} />
          <div className="wk-case-caption">
            <span>{projectNumber} / {String(index + 1).padStart(2, "0")}</span>
            <strong>{project.description}</strong>
          </div>
        </div>
      </div>
    </article>
  );
}
