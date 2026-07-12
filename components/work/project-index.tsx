import type { Project } from "@/data/projects";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <section className="wk-index" aria-labelledby="work-index-title">
      <div className="wk-index-heading">
        <span>Project index</span>
        <h2 id="work-index-title">Усі роботи в одному списку.</h2>
        <p>Швидкий перехід до потрібного кейсу без повторного перегляду всієї сторінки.</p>
      </div>

      <div className="wk-index-list">
        {projects.map((project, index) => (
          <a className={`wk-index-row wk-accent-${project.accent}`} href={`#case-${project.slug}`} key={project.slug}>
            <span className="wk-index-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="wk-index-title">
              <strong>{project.title}</strong>
              <small>{project.eyebrow}</small>
            </div>
            <span className="wk-index-status">{project.status}</span>
            <span className="wk-index-year">{project.year}</span>
            <span className="wk-index-stack">{project.stack.slice(0, 3).join(" · ")}</span>
            <span className="wk-index-arrow" aria-hidden="true">↓</span>
          </a>
        ))}
      </div>
    </section>
  );
}
