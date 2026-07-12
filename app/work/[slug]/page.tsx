import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BabylandDocumentary } from "@/components/work/babyland/babyland-documentary";
import { Dnz52Documentary } from "@/components/work/dnz52/dnz52-documentary";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  if (slug === "babyland") {
    return {
      title: "BabyLand — full-stack продуктова екосистема",
      description: "Детальний case study BabyLand: публічний сайт, заявки, адмінпанель, ролі, Firebase-архітектура, безпека та щоденні операції дитячого закладу."
    };
  }

  if (slug === "dnz52") {
    return {
      title: "ЗДО №52 — React, Django, PWA та AI-платформа",
      description: "Детальний case study ЗДО №52: публічний портал, React-адмінпанель, Django REST API, онлайн-зарахування, PWA, push, AI, Supabase та безпека."
    };
  }

  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (slug === "babyland") {
    return <BabylandDocumentary />;
  }

  if (slug === "dnz52") {
    return <Dnz52Documentary />;
  }

  return (
    <div className="page-shell inner-page project-detail">
      <Link className="back-link" href="/work">← Усі роботи</Link>

      <section className="project-detail-hero section-block">
        <div>
          <div className="project-meta-row">
            <span className={`status status-${project.status === "Завершено" ? "done" : project.status === "Концепт" ? "concept" : "progress"}`}>
              {project.status}
            </span>
            <span>{project.year}</span>
          </div>
          <p className="section-label">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p>{project.longDescription}</p>
          <div className="detail-actions">
            {project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Відкрити сайт <span>↗</span></a>}
            {project.repository && <a className="button button-secondary" href={project.repository} target="_blank" rel="noreferrer">GitHub</a>}
          </div>
        </div>
        <div className={`detail-visual project-${project.accent}`}>
          <div className="project-orbit project-orbit-one" />
          <div className="project-orbit project-orbit-two" />
          <strong>{project.title.slice(0, 2).toUpperCase()}</strong>
        </div>
      </section>

      <section className="detail-grid section-block">
        <div>
          <p className="section-label">Що реалізовано</p>
          <h2>Ключові можливості</h2>
        </div>
        <ul className="highlight-list">
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </section>

      <section className="stack-panel section-block">
        <div><p className="section-label">Технології</p><h2>Стек проєкту</h2></div>
        <div className="large-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      </section>
    </div>
  );
}
