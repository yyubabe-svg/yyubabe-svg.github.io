import Link from "next/link";
import { ArrowDown, FileText, Github, Mail } from "lucide-react";
import { CapabilityNetwork } from "../components/home/CapabilityNetwork";
import { MethodLoop } from "../components/home/MethodLoop";
import { ProjectShowcase } from "../components/home/ProjectShowcase";
import { TechFoundation } from "../components/home/TechFoundation";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CapabilityMatrix } from "../components/visualizations/CapabilityMatrix";
import { coreCapabilities } from "../data/capabilities";
import { profile } from "../data/profile";

export default function Home() { return <>
  <section className="hero page-shell"><div className="hero-copy"><p className="hero-kicker"><span/>AI Product Creator · Industry AI · Full-stack</p><h1>用 AI 构建<br/><em>真实世界</em>中的<br/>下一代产品</h1><p className="hero-en">{profile.englishHeadline}</p><p className="hero-lead">从银发健康、智慧水利、芯片研发，到动作捕捉与政企 AI 操作系统，我尝试把人工智能变成真正可使用、可部署、可持续演进的产品。</p><div className="hero-actions"><ButtonLink href="/projects">查看我的项目</ButtonLink><ButtonLink href="/contact" variant="secondary">联系我</ButtonLink></div><div className="hero-links"><Link href={profile.github.includes("替换")?"/contact":profile.github}><Github size={15}/> GitHub</Link><Link href="/contact"><Mail size={15}/> 邮箱</Link><Link href={profile.resumeUrl} target="_blank"><FileText size={15}/> 简历</Link></div></div><CapabilityNetwork/><Link className="scroll-cue" href="#capabilities"><ArrowDown size={16}/> 向下探索</Link></section>
  <section id="capabilities" className="section page-shell"><SectionHeading eyebrow="01 / Capabilities" title="不是单点技能，而是从问题到产品的完整链路" description="我把产品判断、行业理解、AI 能力和工程实现放在同一张图里思考。"/><div className="capability-cards">{coreCapabilities.map((item,index)=><Link key={item.title} href={item.href} className="capability-card"><span>0{index+1}</span><h3>{item.title}</h3><p>{item.description}</p><div>{item.tech.map(t=><i key={t}>{t}</i>)}</div><b>探索能力 →</b></Link>)}</div></section>
  <section className="section projects-section"><div className="page-shell"><SectionHeading eyebrow="02 / Selected Work" title="五个行业命题，一套产品与工程方法" description="每个项目都从不同的真实问题出发，也共享工作流、智能能力和企业工程底座。"/><ProjectShowcase/></div></section>
  <section className="section page-shell"><SectionHeading eyebrow="03 / Product Method" title="从真实问题，到可持续迭代的产品系统"/><MethodLoop/></section>
  <section className="section map-section"><div className="page-shell"><SectionHeading eyebrow="04 / Cross-industry Map" title="跨行业能力地图" description="不是简单堆叠技术标签，而是观察同一种能力在不同工作流中的职责和深度。"/><CapabilityMatrix/></div></section>
  <section className="section page-shell"><SectionHeading eyebrow="05 / Shared Foundation" title="共同技术底座" description="五个项目表面不同，底层都在连接人、业务流程、智能能力与可靠工程。"/><TechFoundation/></section>
  <section className="cta-section page-shell"><p className="eyebrow">OPEN TO BUILD</p><h2>我正在寻找能够让 AI<br/>真正进入行业工作流的机会。</h2><div className="cta-tags">{["AI 产品共创","垂直行业数字化","企业 AI 平台","创新项目孵化","全栈产品开发","技术合作与岗位机会"].map(x=><span key={x}>{x}</span>)}</div><ButtonLink href="/contact">开始一场具体的对话</ButtonLink></section>
  </> }
