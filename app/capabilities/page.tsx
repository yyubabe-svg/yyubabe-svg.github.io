import type { Metadata } from "next";
import { CapabilityMap } from "../../components/visualizations/CapabilityMap";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { buildPath } from "../../data/capabilities";

export const metadata: Metadata = { title: "我怎样把事情做出来", description: "从观察、提问和理解场景，到构建、测试和修改判断的完整过程。" };

export default function Capabilities() {
  return <div className="page-shell inner-page">
    <header className="page-hero narrative-hero"><p className="eyebrow">HOW I BUILD</p><h1>能力不是技术列表，<br /><em>而是问题怎样被做出来。</em></h1><p>我不会先按前端、后端、AI 给自己分类。工具只有放进具体问题、约束和结果里，才构成真正的能力证据。</p></header>
    <section className="build-path-section"><SectionHeading eyebrow="01 / THE PATH" title="从注意到一个问题开始" />
      <div className="build-path">{buildPath.map(([title, description], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>
    <section className="about-section"><SectionHeading eyebrow="02 / TOOLS IN CONTEXT" title="技术是解决问题留下的证据" description="每个工具都同时写明它解决了什么，以及它没有解决什么。" /><CapabilityMap /></section>
  </div>;
}
