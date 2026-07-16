import Link from "next/link";
import { ArrowDown, FileText, Github, Mail } from "lucide-react";
import { ChangedBeliefs } from "../components/home/ChangedBeliefs";
import { NowPreview } from "../components/home/NowPreview";
import { ObservationRadius } from "../components/home/ObservationRadius";
import { OpenQuestions } from "../components/home/OpenQuestions";
import { OriginStories } from "../components/home/OriginStories";
import { PersonalFieldManual } from "../components/home/PersonalFieldManual";
import { ProjectShowcase } from "../components/home/ProjectShowcase";
import { ButtonLink } from "../components/ui/ButtonLink";
import { SectionHeading } from "../components/ui/SectionHeading";
import { profile } from "../data/profile";

export default function Home() {
  return <>
    <section className="personal-hero page-shell">
      <div className="hero-margin-note"><span>OBSERVATION 001</span><small>一个持续修改的个人产品记录</small></div>
      <div className="personal-hero-copy">
        <p className="eyebrow">YU MA / PERSONAL PRODUCT NOTES</p>
        <h1>看见问题，<br /><em>然后试着做点什么。</em></h1>
        <p className="hero-en">{profile.englishHeadline}</p>
        <div className="hero-story">
          <p>我没有给自己预设一个固定的身份。</p>
          <p>我的很多项目，都来自生活、家人、工作、兴趣和日常交流中反复出现的问题。我会观察它为什么会这样，现有方式为什么不够，以及自己能不能做点什么。</p>
          <p>然后，我学习需要的知识和技术，把一个模糊想法逐渐做成可以被看见、被使用和被验证的产品。</p>
          <strong>这里记录的不是我想成为谁，而是我怎样一点点成为自己。</strong>
        </div>
        <div className="hero-actions">
          <ButtonLink href="#origins">先认识我</ButtonLink>
          <ButtonLink href="/projects" variant="secondary">直接看项目</ButtonLink>
        </div>
        <div className="hero-links">
          <Link href={profile.contact.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> GitHub</Link>
          <Link href={`mailto:${profile.contact.email}`}><Mail size={15} /> 邮箱</Link>
          <Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"><FileText size={15} /> 简历</Link>
        </div>
      </div>
      <div className="hero-side-note">
        <span>我会反复问</span>
        <p>这是事实、观察、判断，还是还没有被验证的假设？</p>
      </div>
      <Link className="scroll-cue" href="#origins"><ArrowDown size={16} /> 从项目的起点开始</Link>
    </section>

    <section id="origins" className="section page-shell observation-section">
      <SectionHeading eyebrow="01 / WHERE IT STARTED" title="我的项目不是从赛道开始的。" description="它们来自爱好、家人、工作和一次次具体的观察。点击不同半径，看问题怎样从我身边逐渐展开。" />
      <ObservationRadius />
    </section>

    <section className="section warm-section"><div className="page-shell">
      <SectionHeading eyebrow="02 / THREE REAL BEGINNINGS" title="三个真实起点" description="先讲发生过什么，再讲我做了什么。" />
      <OriginStories />
    </div></section>

    <section id="projects" className="section page-shell">
      <SectionHeading eyebrow="03 / THINGS I’M TRYING TO BUILD" title="我对这些问题的回应" description="有些已经做成了可运行版本，有些仍是假设。顺序从自己和爱好，慢慢走向更大的系统。" />
      <ProjectShowcase />
    </section>

    <section className="section ink-section"><div className="page-shell">
      <SectionHeading eyebrow="04 / PERSONAL FIELD MANUAL" title="我怎样做事情" description="不是能力评分，而是我在有限条件下反复使用的工作方式。" />
      <PersonalFieldManual />
    </div></section>

    <section className="section page-shell">
      <SectionHeading eyebrow="05 / REVISIONS" title="我曾经以为 / 后来发现" description="构建最有价值的部分，常常不是证明原来的判断，而是知道它为什么需要被修改。" />
      <ChangedBeliefs />
    </section>

    <section className="section questions-section"><div className="page-shell">
      <SectionHeading eyebrow="06 / OPEN QUESTIONS" title="我还没有想明白的事情" description="这些问题没有被包装成答案，它们决定我接下来要观察和验证什么。" />
      <OpenQuestions />
    </div></section>

    <section className="section page-shell"><NowPreview /></section>

    <section className="cta-section page-shell">
      <p className="eyebrow">START WITH A REAL PROBLEM</p>
      <h2>如果你也注意到了一个<br />值得认真理解的问题。</h2>
      <p>可以从具体场景、现有做法和最小验证开始聊，而不是先决定要做一个多大的系统。</p>
      <ButtonLink href="/contact">和我说说这个问题</ButtonLink>
    </section>
  </>;
}
