"use client";

import { useEffect, useState } from "react";

const items = [
  ["origin", "起源"], ["care", "为什么在意"], ["problem", "真正问题"], ["tried", "做过什么"],
  ["workflow", "产品流程"], ["architecture", "系统"], ["demo", "原型"], ["wrong-turns", "弯路"],
  ["evidence", "证据与假设"], ["changed", "改变"], ["open-questions", "未解决"], ["current", "当前状态"],
];

export function ProjectToc() {
  const [active, setActive] = useState("origin");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -65%", threshold: [0, 0.25, 0.5] });
    items.forEach(([id]) => { const element = document.getElementById(id); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);
  return <aside className="project-toc" aria-label="项目详情目录"><span>BUILD RECORD</span>{items.map(([id, label]) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`}>{label}</a>)}</aside>;
}
