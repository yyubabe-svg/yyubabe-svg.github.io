"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type ProjectOrigin } from "../../data/projects";

const layers: { origin: ProjectOrigin; radius: string }[] = [
  { origin: "爱好", radius: "兴趣" },
  { origin: "家庭", radius: "家庭" },
  { origin: "工作经历", radius: "工作" },
  { origin: "身边观察", radius: "身边的人和组织" },
  { origin: "共性思考", radius: "共性问题" },
];

export function ObservationRadius() {
  const [active, setActive] = useState<ProjectOrigin>("爱好");
  const project = projects.find((item) => item.originType === active) ?? projects[0];

  return (
    <div className="observation-layout">
      <div className="observation-map" aria-label="我的观察半径">
        <div className="observation-center"><span>中心</span><strong>我</strong></div>
        {layers.map((layer, index) => (
          <button
            key={layer.origin}
            type="button"
            className={`observation-node observation-node-${index + 1} ${active === layer.origin ? "active" : ""}`}
            aria-pressed={active === layer.origin}
            onClick={() => setActive(layer.origin)}
          >
            <small>0{index + 1}</small>
            <span>{layer.radius}</span>
          </button>
        ))}
      </div>
      <article className={`observation-record accent-${project.accent}`} aria-live="polite">
        <p className="note-meta">OBSERVATION / {project.originType}</p>
        <h3>{project.originLabel}</h3>
        <p>{project.originStory}</p>
        <blockquote>“{project.firstQuestion}”</blockquote>
        <Link href={`/projects/${project.slug}`}>{project.title} <ArrowUpRight size={16} /></Link>
      </article>
    </div>
  );
}
