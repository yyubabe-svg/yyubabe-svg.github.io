import Link from "next/link";
import type { Project } from "../../data/projects";
import type { ProjectSignal } from "../../data/signals";
import { ProjectStateView } from "./ProjectStateView";

export function ProjectRecord({ project, signal, previous, next }: { project: Project; signal: ProjectSignal; previous: ProjectSignal; next: ProjectSignal }) {
  return <div className={`record-page accent-${signal.accent}`} style={{ "--signal": signal.signalColor } as React.CSSProperties}>
    <header className="record-hero page-frame">
      <Link className="record-back" href="/work">← WORK INDEX</Link>
      <div className="record-number">{signal.index}</div>
      <div className="record-title"><p>{signal.englishTitle} / {signal.state}</p><h1>{signal.title}</h1></div>
      <blockquote>{signal.signal.split("\n").map((line) => <span key={line}>{line}</span>)}</blockquote>
      <dl><div><dt>STATE</dt><dd>{signal.state}</dd></div><div><dt>ORIGIN</dt><dd>{signal.origin}</dd></div></dl>
    </header>
    <main className="record-body page-frame"><ProjectStateView project={project} signal={signal} /></main>
    <nav className="record-pagination page-frame" aria-label="相邻项目">
      <Link href={`/work/${previous.slug}`}><span>← PREVIOUS</span><strong>{previous.title}</strong></Link>
      <Link href={`/work/${next.slug}`}><span>NEXT →</span><strong>{next.title}</strong></Link>
    </nav>
  </div>;
}
