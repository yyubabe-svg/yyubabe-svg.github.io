import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { now } from "../../data/now";

export function NowPreview() {
  return (
    <aside className="now-preview">
      <div><p className="note-meta">NOW / {now.updatedAt}</p><h2>现在的我</h2></div>
      <div><small>最近正在构建</small><p>{now.building}</p></div>
      <div><small>最近改变的判断</small><p>{now.changedBelief}</p></div>
      <Link href="/now">查看完整近况 <ArrowUpRight size={16} /></Link>
    </aside>
  );
}
