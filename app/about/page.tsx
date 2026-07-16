import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { journey } from "../../data/journey";

export const metadata: Metadata = { title: "关于我，不是关于标签", description: "马钰如何从爱好、家庭和工作经历中观察问题、学习技术并修改判断。" };

const observationWay = ["看到现象", "多问几个为什么", "理解已有方式", "找到可以改变的一小步", "做出版本", "接受现实反馈", "修改判断"];
const strengths = ["愿意进入陌生问题，但不假装已经理解", "能把模糊想法拆成可运行的产品", "会同时考虑体验、数据、架构和部署", "能从失败中定位真正的系统问题", "对身边需求保持敏感", "愿意持续修改自己的判断", "能独立推进，也知道真实产品需要合作"];
const limits = ["容易因为看到更多可能性而扩大项目边界", "真实用户访谈和市场验证仍需加强", "很多项目仍在 Demo、MVP 或工程验证阶段", "一个人承担多个角色时，需要更严格地控制优先级", "对专业行业保持敬畏，不能用 AI 代替专业判断", "需要继续学习如何让产品从做出来走向被持续使用"];
const collaboration = ["我喜欢把问题说具体", "我倾向于先形成可验证版本", "我会明确什么是事实、什么是假设", "我重视文档、测试和验收", "我愿意听反馈，但不会无判断地堆功能", "我希望合作从一个真实问题开始"];

export default function About() {
  return <div className="page-shell inner-page">
    <header className="page-hero narrative-hero"><p className="eyebrow">ABOUT / BEYOND LABELS</p><h1>关于我，<br /><em>不是关于标签。</em></h1><p>我没有从一开始就确定要做 AI 产品，也没有计划进入多少领域。很多方向，是在生活和工作中遇到具体问题后逐渐形成的。</p></header>

    <section className="about-section"><SectionHeading eyebrow="01 / THREE EXPERIENCES" title="先讲三段经历" description="它们首先是生活和工作的一部分，后来才慢慢连接到产品。" />
      <div className="experience-strip">
        {journey.slice(0, 3).map((item, index) => <article key={item.observation}><span>0{index + 1}</span><small>{item.date}</small><p>{item.observation}</p><strong>{item.relatedProjects.join(" · ")}</strong></article>)}
      </div>
    </section>

    <section className="about-section"><SectionHeading eyebrow="02 / HOW I NOTICE" title="我的观察方式" />
      <div className="observation-steps">{observationWay.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < observationWay.length - 1 && <i aria-hidden="true">→</i>}</div>)}</div>
    </section>

    <section className="about-section narrative-columns">
      <div><SectionHeading eyebrow="03 / WHAT HELPS" title="我能带来的" /><div className="plain-list">{strengths.map((item) => <p key={item}>{item}</p>)}</div></div>
      <div><SectionHeading eyebrow="04 / LIMITS" title="我的局限" /><div className="plain-list limits">{limits.map((item) => <p key={item}>{item}</p>)}</div></div>
    </section>

    <section className="about-section learning-note"><p className="eyebrow">05 / LEARNING</p><h2>我如何学习</h2><p>我最有效的学习方式不是先把一门技术从头学完，而是从一个具体任务开始：建立最小知识地图，做出能暴露问题的版本，再根据失败补足理论。这样会更快，但也要求我主动记录不知道什么、哪些结论只是暂时判断。</p><Link href="/notes">查看构建笔记 <ArrowUpRight size={16} /></Link></section>

    <section className="about-section"><SectionHeading eyebrow="06 / WORKING TOGETHER" title="与我合作是什么感觉" />
      <div className="collaboration-list">{collaboration.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div>
    </section>

    <section className="about-section"><SectionHeading eyebrow="07 / JOURNEY" title="我开始注意到什么，我做了什么，我改变了什么" />
      <div className="journey-list">{journey.map((item) => <article key={`${item.date}-${item.observation}`}><time>{item.date}</time><div><small>我注意到</small><p>{item.observation}</p></div><div><small>我做了</small><p>{item.action}</p></div><div><small>我改变了</small><p>{item.changedBelief}</p></div></article>)}</div>
    </section>
  </div>;
}
