"use client";

import { useState } from "react";
import { buildTools, capabilityLevels } from "../../data/capabilities";

export function CapabilityMap() {
  const [level, setLevel] = useState("全部");
  const tools = buildTools.filter((tool) => level === "全部" || tool.level === level);
  return <>
    <div className="level-filter" aria-label="按实践状态筛选">{capabilityLevels.map((item) => <button type="button" key={item} onClick={() => setLevel(item)} className={level === item ? "active" : ""} aria-pressed={level === item}>{item}</button>)}</div>
    <div className="tool-evidence-grid">
      {tools.map((tool, index) => <article key={tool.name}>
        <div className="tool-head"><span>{String(index + 1).padStart(2, "0")}</span><div><small>{tool.level}</small><h2>{tool.name}</h2></div></div>
        <p className="tool-why">{tool.why}</p>
        <dl>
          <div><dt>用在哪里</dt><dd>{tool.usedFor}</dd></div>
          <div><dt>解决了什么</dt><dd>{tool.solved}</dd></div>
          <div><dt>没有解决什么</dt><dd>{tool.limitation}</dd></div>
          <div><dt>还要学习</dt><dd>{tool.next}</dd></div>
        </dl>
      </article>)}
    </div>
  </>;
}
