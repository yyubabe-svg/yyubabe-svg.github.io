import Link from "next/link";
import { signals } from "../../data/signals";

export function WorkIndex() {
  return <div className="work-page page-frame">
    <header className="work-hero"><p>SIGNALS / INDEX</p><h1>问题留下痕迹。<br />系统是暂时的回答。</h1><span>05 RECORDS · UPDATED 2026.07</span></header>
    <div className="work-list">
      {signals.map((signal) => <Link key={signal.slug} href={`/work/${signal.slug}`} className="work-record" style={{ "--signal": signal.signalColor } as React.CSSProperties}>
        <span>{signal.index}</span>
        <div><small>{signal.englishTitle}</small><h2>{signal.title}</h2></div>
        <p>{signal.signal.replace("\n", " ")}</p>
        <dl><div><dt>SYSTEM</dt><dd>{signal.systemSummary}</dd></div><div><dt>STATE</dt><dd>{signal.state}</dd></div></dl>
        <i>↗</i>
      </Link>)}
    </div>
  </div>;
}
