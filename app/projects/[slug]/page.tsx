import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectDemo } from "../../../components/projects/ProjectDemo";
import { ProjectToc } from "../../../components/projects/ProjectToc";
import { MediaFallback } from "../../../components/ui/MediaFallback";
import { ArchitectureDiagram } from "../../../components/visualizations/ArchitectureDiagram";
import { WorkflowDiagram } from "../../../components/visualizations/WorkflowDiagram";
import { getProject, projects } from "../../../data/projects";

export function generateStaticParams(){return projects.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);if(!p)return{};return{title:p.title,description:p.summary,openGraph:{title:`${p.title} · 案例研究`,description:p.tagline,type:"article"}}}
function BulletSection({items}:{items:string[]}){return <ul className="case-bullets">{items.map(item=><li key={item}>{item}</li>)}</ul>}
export default async function ProjectDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProject(slug);if(!project)notFound();const index=projects.findIndex(p=>p.slug===slug);const prev=projects[(index-1+projects.length)%projects.length];const next=projects[(index+1)%projects.length];const schema={"@context":"https://schema.org","@type":"CreativeWork",name:project.title,alternateName:project.englishTitle,description:project.summary,genre:project.industry};return <div className={`case-page case-${project.accent}`}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <div className="page-shell case-hero" id="overview"><Link className="back-link" href="/projects"><ArrowLeft size={16}/> 返回项目总览</Link><div className="case-hero-grid"><div><div className="case-meta"><span>{project.stage}</span><span>{project.industry.join(" / ")}</span></div><p className="case-en">{project.englishTitle}</p><h1>{project.title}</h1><p className="case-tagline">{project.tagline}</p><div className="case-facts"><div><small>我的角色</small><strong>{project.role.join(" · ")}</strong></div><div><small>当前阶段</small><strong>{project.stage}</strong></div></div></div><div className="case-cover"><MediaFallback src={project.cover} alt={`${project.title} 产品视觉`} label={project.englishTitle}/></div></div>{project.disclaimer&&<div className="case-disclaimer"><strong>边界说明</strong><p>{project.disclaimer}</p></div>}</div>
  <div className="page-shell case-layout"><ProjectToc/><article className="case-content">
    <section className="case-section"><p className="eyebrow">01 / OVERVIEW</p><h2>项目概述</h2><p className="case-intro">{project.summary}</p><div className="highlight-grid">{project.highlights.map((h,i)=><div key={h}><span>0{i+1}</span><p>{h}</p></div>)}</div></section>
    <section className="case-section" id="challenge"><p className="eyebrow">02 / CONTEXT</p><h2>行业背景、用户痛点与产品目标</h2><div className="split-content"><div><h3>需要解决的问题</h3><BulletSection items={project.challenge}/></div><div><h3>产品目标</h3><BulletSection items={project.goals}/></div></div></section>
    <section className="case-section" id="users"><p className="eyebrow">03 / USERS & SOLUTION</p><h2>核心用户与产品方案</h2><div className="split-content"><div><h3>核心用户</h3><BulletSection items={project.users}/></div><div><h3>产品形态</h3><BulletSection items={project.solution}/></div></div><div className="feature-cloud">{project.features.map(x=><span key={x}>{x}</span>)}</div></section>
    <section className="case-section" id="workflow"><p className="eyebrow">04 / PRODUCT FLOW</p><h2>AI 进入工作流，而不是停留在聊天框</h2><WorkflowDiagram steps={project.workflow}/></section>
    <section className="case-section" id="architecture"><p className="eyebrow">05 / SYSTEM</p><h2>系统架构</h2><p className="section-description">节点均由项目数据驱动。悬停或键盘聚焦可查看每一层的职责。</p><ArchitectureDiagram nodes={project.architecture}/></section>
    <section className="case-section" id="ai"><p className="eyebrow">06 / INTELLIGENCE</p><h2>AI 能力设计与技术实现</h2><div className="split-content"><div><h3>AI 能力</h3><BulletSection items={project.aiCapabilities}/></div><div><h3>技术栈</h3><div className="tech-grid">{project.techStack.map(x=><span key={x}>{x}</span>)}</div></div></div></section>
    <section className="case-section demo-section" id="demo"><p className="eyebrow">07 / INTERACTIVE PROTOTYPE</p><h2>交互演示</h2><p className="section-description">用于说明关键产品机制，不冒充真实项目数据或客户成果。</p><ProjectDemo slug={project.slug}/></section>
    <section className="case-section" id="decisions"><p className="eyebrow">08 / DECISIONS</p><h2>难点与权衡</h2><div className="decision-list">{project.tradeoffs.map((x,i)=><div key={x}><span>DECISION 0{i+1}</span><p>{x}</p></div>)}</div></section>
    <section className="case-section" id="progress"><p className="eyebrow">09 / STATUS</p><h2>当前进展与下一步</h2><div className="split-content"><div><h3>当前进展</h3><BulletSection items={project.progress}/></div><div><h3>下一步规划</h3><BulletSection items={project.nextSteps}/></div></div></section>
    <nav className="project-pagination" aria-label="相邻项目"><Link href={`/projects/${prev.slug}`}><ArrowLeft/><small>上一个项目</small><strong>{prev.title}</strong></Link><Link href={`/projects/${next.slug}`}><small>下一个项目</small><strong>{next.title}</strong><ArrowRight/></Link></nav>
  </article></div></div>}
