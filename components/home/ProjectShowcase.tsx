import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";

export function ProjectShowcase() { return <div className="project-showcase">{projects.map((project,index)=><article key={project.slug} className={`feature-project project-${project.accent}`}>
  <div className="project-index"><span>0{index+1}</span><i/></div><div className="feature-copy"><div className="project-meta"><span>{project.industry[0]}</span><span>{project.stage}</span></div><h3>{project.title}</h3><p className="english-title">{project.englishTitle}</p><p className="tagline">{project.tagline}</p><dl><div><dt>核心问题</dt><dd>{project.challenge[0]}</dd></div><div><dt>我的角色</dt><dd>{project.role.join(" · ")}</dd></div></dl><div className="tag-row">{project.techStack.slice(0,5).map(tag=><span key={tag}>{tag}</span>)}</div><Link className="project-link" href={`/projects/${project.slug}`}>查看案例研究 <ArrowUpRight size={17}/></Link></div><ProjectMotif accent={project.accent}/>
  </article>)}</div> }

function ProjectMotif({ accent }: { accent: string }) {
  if(accent === "care") return <div className="motif care-motif"><div className="phone"><small>今日健康</small><strong>整体平稳</strong><div className="pulse-line"/><span>血压 128 / 78</span><span>步数 4,286</span></div><div className="family-card">家属端<br/><b>今日已完成记录</b></div></div>;
  if(accent === "water") return <div className="motif water-motif"><div className="contour c1"/><div className="contour c2"/><div className="river"/><i className="risk r1"/><i className="risk r2"/><div className="water-stat"><small>水位 / 演示</small><strong>512.8 m</strong></div></div>;
  if(accent === "silicon") return <div className="motif silicon-motif"><div className="chip-grid">{Array.from({length:16},(_,i)=><i key={i}/>)}</div><div className="pipeline-mini"><span>RTL</span><span>SIM</span><span>LAB</span></div><b>TRACE / 04</b></div>;
  if(accent === "motion") return <div className="motif motion-motif"><div className="skeleton-person"><i className="head"/><i className="body"/><i className="arm left"/><i className="arm right"/><i className="leg left"/><i className="leg right"/></div><div className="motion-score"><small>Timing</small><strong>+0.2s</strong></div></div>;
  return <div className="motif platform-motif"><div className="config-line"><span>industry</span><b>water_design</b></div><div className="portal-grid"><i/><i/><i/><i/></div><small>CONFIG → PORTAL</small></div>;
}
