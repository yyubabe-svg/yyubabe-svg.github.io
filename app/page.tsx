import Link from "next/link";
import { ExperimentIndex } from "../components/home/ExperimentIndex";
import { SignalScroll } from "../components/home/SignalScroll";
import { SignalWords } from "../components/home/SignalWords";
import { profile } from "../data/profile";

export default function Home() {
  return <>
    <section className="act act-entry" data-act="entry">
      <div className="entry-kicker"><span>SIGNALS</span><small>{profile.englishTitle}</small></div>
      <h1>我关注那些<br />反复发生，<br /><em>却从未被认真设计过</em>的问题。</h1>
      <div className="entry-signal"><span>NOW SCANNING</span><SignalWords /></div>
      <Link className="entry-link" href="#signals">EXPLORE THE SIGNALS <span>↓</span></Link>
      <div className="entry-coordinates"><span>YU MA</span><span>2026</span><span>CHENGDU / REMOTE</span></div>
    </section>

    <section className="act act-signals" id="signals" data-act="signals" aria-label="Signals">
      <SignalScroll />
    </section>

    <section className="act act-experiments page-frame" data-act="experiments">
      <header className="act-heading"><span>03 / EXPERIMENTS</span><h2>五个系统。<br />五个仍在变化的答案。</h2></header>
      <ExperimentIndex />
    </section>

    <section className="act act-position page-frame" data-act="position">
      <p className="position-index">04 / POSITION</p>
      <blockquote>我并不希望 AI 接管所有判断。<br /><br />我更关心它能否让原本不可见的问题被看见，<br />让分散的信息重新形成上下文，<br />让人获得更充分的判断依据。</blockquote>
      <div className="position-links">
        <Link href={profile.contact.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</Link>
        <Link href={`mailto:${profile.contact.email}`}>EMAIL ↗</Link>
        <Link href="/contact">DISCUSS A PROBLEM ↗</Link>
      </div>
    </section>
  </>;
}
