"use client";

import Link from "next/link";
import { useState } from "react";
import { signals } from "../../data/signals";

export function ExperimentIndex() {
  const [open, setOpen] = useState(0);
  return <div className="experiment-index">
    {signals.map((signal, index) => {
      const expanded = index === open;
      return <article key={signal.slug} className={expanded ? "experiment-row open" : "experiment-row"} style={{ "--signal": signal.signalColor } as React.CSSProperties}>
        <button type="button" onClick={() => setOpen(index)} aria-expanded={expanded} aria-controls={`experiment-${signal.slug}`}>
          <span>{signal.index}</span><strong>{signal.title}</strong><p>{signal.tension[0]}</p><i>{expanded ? "−" : "+"}</i>
        </button>
        <div id={`experiment-${signal.slug}`} className="experiment-detail" hidden={!expanded}>
          <dl>
            <div><dt>ORIGIN</dt><dd>{signal.origin}</dd></div>
            <div><dt>TENSION</dt><dd>{signal.tension[0]}</dd></div>
            <div><dt>SYSTEM</dt><dd>{signal.systemSummary}</dd></div>
            <div><dt>STATE</dt><dd>{signal.state}</dd></div>
          </dl>
          <Link href={`/work/${signal.slug}`}>READ THE RECORD ↗</Link>
        </div>
      </article>;
    })}
  </div>;
}
