"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { filterProjects, projectOriginFilters, projectTechFilters } from "../../data/projects";

export function ProjectExplorer() {
  const [origin, setOrigin] = useState("全部");
  const [technology, setTechnology] = useState("全部技术");
  const [query, setQuery] = useState("");
  const result = useMemo(() => filterProjects(origin, technology).filter((project) =>
    `${project.title}${project.englishTitle}${project.originStory}${project.techStack.join("")}`.toLowerCase().includes(query.toLowerCase())
  ), [origin, technology, query]);

  return <>
    <div className="project-controls narrative-controls">
      <fieldset><legend>按问题来源</legend><div className="filter-list">{projectOriginFilters.map((item) => <button type="button" key={item} className={origin === item ? "active" : ""} onClick={() => setOrigin(item)} aria-pressed={origin === item}>{item}</button>)}</div></fieldset>
      <fieldset><legend>再按构建方式</legend><div className="filter-list secondary">{projectTechFilters.map((item) => <button type="button" key={item} className={technology === item ? "active" : ""} onClick={() => setTechnology(item)} aria-pressed={technology === item}>{item}</button>)}</div></fieldset>
      <label className="search-box"><Search size={16} /><span className="sr-only">搜索项目、观察或技术</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索项目、观察或技术" /></label>
    </div>
    <p className="result-count" role="status">显示 {result.length} / {filterProjects("全部").length} 个项目</p>
    <div className="origin-project-grid">
      {result.map((project, index) => (
        <article key={project.slug} className={`origin-project-card accent-${project.accent}`}>
          <div className="project-card-top"><span>{String(index + 1).padStart(2, "0")}</span><b>{project.originType}</b></div>
          <p className="note-meta">{project.originLabel}</p>
          <h2>{project.title}</h2>
          <p className="project-card-en">{project.englishTitle}</p>
          <blockquote>{project.firstQuestion}</blockquote>
          <dl>
            <div><dt>已经做出</dt><dd>{project.completed[0]}</dd></div>
            <div><dt>仍未验证</dt><dd>{project.hypotheses[0]}</dd></div>
          </dl>
          <div className="project-card-footer"><span>{project.stage}</span><Link href={`/projects/${project.slug}`}>继续阅读 <ArrowUpRight size={17} /></Link></div>
        </article>
      ))}
    </div>
    {result.length === 0 && <div className="empty-state"><strong>没有匹配的记录</strong><p>可以清空搜索或切换来源与构建方式。</p></div>}
  </>;
}
