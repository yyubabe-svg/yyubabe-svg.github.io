import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export function ProjectShowcase() {
  return (
    <div className="response-list">
      {projects.map((project, index) => (
        <article key={project.slug} className={`response-project accent-${project.accent}`}>
          <div className="response-number"><span>{String(index + 1).padStart(2, "0")}</span><small>{project.originType}</small></div>
          <div className="response-copy">
            <p className="note-meta">{project.originLabel}</p>
            <h3>{project.title}</h3>
            <p className="english-title">{project.englishTitle}</p>
            <blockquote>{project.firstQuestion}</blockquote>
            <div className="response-state">
              <div><small>我做了什么</small><p>{project.completed[0]}</p></div>
              <div><small>仍未验证</small><p>{project.hypotheses[0]}</p></div>
            </div>
          </div>
          <div className="response-action"><span>{project.stage}</span><Link href={`/projects/${project.slug}`}>查看完整记录 <ArrowUpRight size={17} /></Link></div>
        </article>
      ))}
    </div>
  );
}
