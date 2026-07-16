"use client";

import { useEffect, useState } from "react";

const words = ["MOVEMENT", "HEALTH", "ENGINEERING", "SYSTEMS"];

export function SignalWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    let timer: number | undefined;
    const start = () => {
      window.clearInterval(timer);
      if (!document.hidden) timer = window.setInterval(() => setIndex((value) => (value + 1) % words.length), 2600);
    };
    start();
    document.addEventListener("visibilitychange", start);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);

  return <span className="signal-word" aria-live="polite">{words[index]}</span>;
}
