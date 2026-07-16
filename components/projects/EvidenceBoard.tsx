import type { EvidenceItem } from "../../data/projects";

const labels = { implemented: "已实现", tested: "已测试", observed: "已观察", hypothesis: "仍是假设" } as const;

export function EvidenceBoard({ items }: { items: EvidenceItem[] }) {
  return (
    <div className="evidence-board">
      <div className="evidence-column">
        <h3>已经有证据的</h3>
        {items.filter((item) => item.type !== "hypothesis").map((item) => (
          <article key={item.title} data-state={item.type}><span>{labels[item.type]}</span><strong>{item.title}</strong><p>{item.description}</p></article>
        ))}
      </div>
      <div className="evidence-column assumptions">
        <h3>仍然是假设的</h3>
        {items.filter((item) => item.type === "hypothesis").map((item) => (
          <article key={item.title} data-state={item.type}><span>{labels[item.type]}</span><strong>{item.title}</strong><p>{item.description}</p></article>
        ))}
      </div>
    </div>
  );
}
