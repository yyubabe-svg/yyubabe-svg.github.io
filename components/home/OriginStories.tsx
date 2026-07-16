import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

const storySlugs = ["danceholic", "silver-economy-ai", "chip-devops"];

export function OriginStories() {
  const stories = storySlugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
  return (
    <div className="origin-stories">
      {stories.map((project, index) => project && (
        <article className={`origin-story accent-${project.accent}`} key={project.slug}>
          <div className="origin-story-head"><span>0{index + 1}</span><small>{project.originType}</small></div>
          <p className="story-scene">我看见了什么</p>
          <h3>{project.originLabel}</h3>
          <p>{project.originStory}</p>
          <dl>
            <div><dt>为什么我会在意</dt><dd>{project.personalConnection}</dd></div>
            <div><dt>我最初问</dt><dd>{project.firstQuestion}</dd></div>
            <div><dt>现在还没有解决</dt><dd>{project.openQuestions[0]}</dd></div>
          </dl>
          <Link href={`/projects/${project.slug}`}>查看这次尝试 <ArrowUpRight size={16} /></Link>
        </article>
      ))}
    </div>
  );
}
