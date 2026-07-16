import { fieldManual } from "../../data/principles";

export function PersonalFieldManual() {
  return (
    <div className="field-manual">
      <div className="manual-spine"><span>PERSONAL</span><strong>FIELD<br />MANUAL</strong><small>v0.1 · 持续修订</small></div>
      <div className="manual-pages">
        {fieldManual.map((item, index) => (
          <article key={item.title}>
            <span>§ {String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
