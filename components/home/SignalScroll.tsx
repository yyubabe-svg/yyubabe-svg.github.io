"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signals } from "../../data/signals";

export function SignalScroll() {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState<string | null>(null);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number((visible.target as HTMLElement).dataset.index));
      },
      { rootMargin: "-28% 0px -42%", threshold: [0.2, 0.55, 0.8] },
    );
    refs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <div className={`signal-scroll accent-${signals[active].accent}`} style={{ "--signal": signals[active].signalColor } as React.CSSProperties}>
    <div className="signal-rail" aria-label="五个 Signals">
      <p>SIGNALS / 05</p>
      {signals.map((signal, index) => <button key={signal.slug} type="button" className={active === index ? "active" : ""} onClick={() => refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" })} aria-label={`跳到 ${signal.title}`}><span>{signal.index}</span><small>{signal.englishTitle}</small></button>)}
    </div>
    <div className="signal-field" aria-hidden="true"><i /><i /><i /><b>{signals[active].englishTitle}</b></div>
    <div className="signal-panels">
      {signals.map((signal, index) => {
        const isRevealed = revealed === signal.slug;
        return <article key={signal.slug} ref={(node) => { refs.current[index] = node; }} data-index={index} className={active === index ? "signal-panel active" : "signal-panel"} style={{ "--signal": signal.signalColor } as React.CSSProperties}>
          <div className="signal-panel-meta"><span>SIGNAL {signal.index}</span><small>{signal.title}</small></div>
          <div className="scan-question" data-revealed={isRevealed}>
            <Link href={`/work/${signal.slug}`} className="signal-question-link">
              <span className="question-copy">{signal.signal.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
              <span className="scan-layer" aria-hidden="true">{signal.scan}</span>
            </Link>
            <button type="button" className="scan-toggle" aria-expanded={isRevealed} onClick={() => setRevealed(isRevealed ? null : signal.slug)}>SCAN THE FACT</button>
            <p className="mobile-scan">{signal.scan}</p>
          </div>
          <div className="signal-panel-foot"><span>{signal.origin}</span><Link href={`/work/${signal.slug}`}>OPEN SYSTEM ↗</Link></div>
        </article>;
      })}
    </div>
  </div>;
}
