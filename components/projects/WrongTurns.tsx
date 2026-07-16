import type { WrongTurn } from "../../data/projects";

export function WrongTurns({ items }: { items: WrongTurn[] }) {
  return (
    <div className="wrong-turns">
      {items.map((item, index) => (
        <article key={item.initialBelief}>
          <span>REVISION {String(index + 1).padStart(2, "0")}</span>
          <div><small>最初判断</small><p>{item.initialBelief}</p></div>
          <div><small>出现的问题</small><p>{item.problem}</p></div>
          <div><small>真正根因</small><p>{item.rootCause}</p></div>
          <div><small>修改方式</small><p>{item.change}</p></div>
          <blockquote>{item.learning}</blockquote>
        </article>
      ))}
    </div>
  );
}
