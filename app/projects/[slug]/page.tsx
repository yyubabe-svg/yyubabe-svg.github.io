import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, FileText, Github } from "lucide-react";
import { EvidenceBoard } from "../../../components/projects/EvidenceBoard";
import { ProjectDemo } from "../../../components/projects/ProjectDemo";
import { ProjectToc } from "../../../components/projects/ProjectToc";
import { WrongTurns } from "../../../components/projects/WrongTurns";
import { ArchitectureDiagram } from "../../../components/visualizations/ArchitectureDiagram";
import { WorkflowDiagram } from "../../../components/visualizations/WorkflowDiagram";
import { getProject, projects } from "../../../data/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, openGraph: { title: `${project.title} · 构建记录`, description: project.firstQuestion, type: "article" } };
}

function BulletSection({ items }: { items: string[] }) { return <ul className="case-bullets">{items.map((item) => <li key={item}>{item}</li>)}</ul>; }

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, alternateName: project.englishTitle, description: project.summary, keywords: project.techStack };

  return <div className={`case-page case-${project.accent}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="page-shell origin-case-hero">
      <Link className="back-link" href="/projects"><ArrowLeft size={16} /> 返回所有项目</Link>
      <div className="origin-case-grid">
        <div><p className="eyebrow">ORIGIN / {project.originType}</p><p className="case-en">{project.englishTitle}</p><h1>{project.title}</h1><p className="case-tagline">{project.tagline}</p></div>
        <aside><small>真实起点</small><strong>{project.originLabel}</strong><p>{project.personalConnection}</p></aside>
      </div>
      <div className="case-facts"><div><small>当前阶段</small><strong>{project.stage}</strong></div><div><small>我的角色</small><strong>{project.role.join(" · ")}</strong></div><div><small>最初问题</small><strong>{project.firstQuestion}</strong></div></div>
      {project.links && <div className="case-links">{project.links.demo && <Link href={project.links.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> 公开演示</Link>}{project.links.github && <Link href={project.links.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> 项目仓库</Link>}{project.links.document && <Link href={project.links.document} target="_blank" rel="noopener noreferrer"><FileText size={15} /> 用户手册</Link>}</div>}
      {project.disclaimer && <div className="case-disclaimer"><strong>边界说明</strong><p>{project.disclaimer}</p></div>}
    </header>

    <div className="page-shell case-layout"><ProjectToc /><article className="case-content">
      <section className="case-section" id="origin"><p className="eyebrow">01 / ORIGIN</p><h2>这个项目从哪里来？</h2><p className="case-intro">{project.originStory}</p><blockquote className="initial-question">“{project.firstQuestion}”</blockquote></section>

      <section className="case-section" id="care"><p className="eyebrow">02 / WHY I CARE</p><h2>为什么我会在意？</h2><p className="case-intro">{project.whyICare}</p></section>

      <section className="case-section" id="problem"><p className="eyebrow">03 / THE REAL PROBLEM</p><h2>表面问题和真正问题</h2><div className="problem-compare"><article><small>表面问题</small><p>{project.surfaceProblem}</p></article><article><small>真正问题</small><p>{project.deeperProblem}</p></article></div></section>

      <section className="case-section" id="tried"><p className="eyebrow">04 / WHAT I TRIED</p><h2>我具体做了什么？</h2><div className="state-board"><div><span data-state="implemented">已实现</span><BulletSection items={project.completed} /></div><div><span data-state="in-progress">正在做</span><BulletSection items={project.inProgress} /></div><div><span data-state="hypothesis">只是设想 / 待验证</span><BulletSection items={project.hypotheses} /></div></div></section>

      <section className="case-section" id="workflow"><p className="eyebrow">05 / PRODUCT FLOW</p><h2>产品流程</h2><WorkflowDiagram steps={project.workflow} /></section>

      <section className="case-section" id="architecture"><p className="eyebrow">06 / SYSTEM</p><h2>系统怎样连接起来</h2><p className="section-description">节点由项目数据驱动，可通过键盘聚焦查看职责。</p><ArchitectureDiagram nodes={project.architecture} /></section>

      <section className="case-section demo-section" id="demo"><p className="eyebrow">07 / PROTOTYPE</p><h2>交互原型</h2><p className="section-description">原型用于说明产品机制；模拟数据不会被当作真实结果。</p><ProjectDemo slug={project.slug} /></section>

      <section className="case-section" id="wrong-turns"><p className="eyebrow">08 / WRONG TURNS</p><h2>我走过的弯路</h2><WrongTurns items={project.wrongTurns} /></section>

      <section className="case-section" id="evidence"><p className="eyebrow">09 / EVIDENCE & ASSUMPTIONS</p><h2>已经有证据的 / 仍然是假设的</h2><EvidenceBoard items={project.evidence} /></section>

      <section className="case-section" id="changed"><p className="eyebrow">10 / WHAT CHANGED IN ME</p><h2>这个项目改变了我什么？</h2>{project.changedBeliefs.map((item) => <blockquote className="changed-note" key={item}>{item}</blockquote>)}</section>

      <section className="case-section" id="open-questions"><p className="eyebrow">11 / OPEN QUESTIONS</p><h2>我还没有解决的问题</h2><ol className="case-questions">{project.openQuestions.map((item, questionIndex) => <li key={item}><span>{String(questionIndex + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section>

      <section className="case-section" id="current"><p className="eyebrow">12 / CURRENT STATE</p><h2>当前状态与下一步</h2><div className="split-content"><div><h3>当前进展</h3><BulletSection items={project.progress} /></div><div><h3>下一步</h3><BulletSection items={project.nextSteps} /></div></div><div className="tech-context"><small>本次使用的工具</small>{project.techStack.map((item) => <span key={item}>{item}</span>)}</div></section>

      <nav className="project-pagination" aria-label="相邻项目"><Link href={`/projects/${previous.slug}`}><ArrowLeft /><small>上一个观察</small><strong>{previous.title}</strong></Link><Link href={`/projects/${next.slug}`}><small>下一个观察</small><strong>{next.title}</strong><ArrowRight /></Link></nav>
    </article></div>
  </div>;
}
