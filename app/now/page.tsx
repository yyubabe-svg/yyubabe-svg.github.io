import type { Metadata } from "next";
import { now } from "../../data/now";

export const metadata: Metadata = { title: "现在", description: "马钰最近在构建、学习、改变判断和寻找什么。" };

const entries = [
  ["最近正在构建", now.building],
  ["最近解决的问题", now.solving],
  ["最近学习的内容", now.learning],
  ["最近改变的判断", now.changedBelief],
  ["当前最大的困惑", now.biggestQuestion],
  ["正在寻找的交流或合作", now.lookingFor],
] as const;

export default function NowPage() {
  return <div className="page-shell inner-page now-page">
    <header className="page-hero narrative-hero"><p className="eyebrow">NOW / LAST UPDATED {now.updatedAt}</p><h1>现在的我，<br /><em>正在做什么。</em></h1><p>这是一个刻意保持简短的近况页。它不会假装所有方向都在同时推进，只记录此刻真正占据注意力的事情。</p></header>
    <div className="now-ledger">{entries.map(([label, value], index) => <article key={label}><span>{String(index + 1).padStart(2, "0")}</span><small>{label}</small><p>{value}</p></article>)}</div>
  </div>;
}
