"use client";

import { useState } from "react";
import { changedBeliefs } from "../../data/principles";

export function ChangedBeliefs() {
  const [active, setActive] = useState(0);
  const belief = changedBeliefs[active];
  return (
    <div className="beliefs-layout">
      <div className="belief-index" role="tablist" aria-label="判断记录">
        {changedBeliefs.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            判断 {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
      <div className="belief-compare" role="tabpanel" aria-live="polite">
        <article><small>我曾经以为</small><p>{belief.before}</p></article>
        <span aria-hidden="true">→</span>
        <article><small>后来发现</small><p>{belief.after}</p></article>
      </div>
    </div>
  );
}
