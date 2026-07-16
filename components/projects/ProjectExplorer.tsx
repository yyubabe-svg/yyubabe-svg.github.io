"use client";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { filterProjects, projectFilters } from "../../data/projects";

export function ProjectExplorer(){
 const [filter,setFilter]=useState("全部"); const [query,setQuery]=useState("");
 const result=useMemo(()=>filterProjects(filter).filter(p=>`${p.title}${p.englishTitle}${p.techStack.join("")}${p.industry.join("")}`.toLowerCase().includes(query.toLowerCase())),[filter,query]);
 return <><div className="project-controls"><div className="filter-list" aria-label="项目筛选">{projectFilters.map(item=><button type="button" key={item} className={filter===item?"active":""} onClick={()=>setFilter(item)} aria-pressed={filter===item}>{item}</button>)}</div><label className="search-box"><Search size={16}/><span className="sr-only">搜索项目或技术</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="搜索项目或技术"/></label></div><p className="result-count">显示 {result.length} / 5 个项目</p><div className="projects-grid">{result.map((project,index)=><article key={project.slug} className={`project-list-card accent-${project.accent}`}><div className="project-card-top"><span>0{index+1}</span><b>{project.stage}</b></div><p className="project-card-en">{project.englishTitle}</p><h2>{project.title}</h2><p>{project.tagline}</p><div className="project-card-details"><div><small>行业</small><span>{project.industry.join(" / ")}</span></div><div><small>角色</small><span>{project.role.join(" / ")}</span></div></div><div className="tag-row">{project.techStack.slice(0,6).map(t=><i key={t}>{t}</i>)}</div><Link href={`/projects/${project.slug}`}>查看完整案例 <ArrowUpRight size={17}/></Link></article>)}</div>{result.length===0&&<div className="empty-state"><strong>没有匹配项目</strong><p>尝试清空搜索或切换筛选标签。</p></div>}</>;
}
