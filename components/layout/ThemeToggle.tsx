"use client";
import { SunMoon } from "lucide-react";
import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => { const stored = localStorage.getItem("theme") as "dark" | "light" | null; const next = stored ?? (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"); document.documentElement.dataset.theme = next; }, []);
  function toggle() { const current = document.documentElement.dataset.theme; const next = current === "dark" ? "light" : "dark"; document.documentElement.dataset.theme = next; localStorage.setItem("theme", next); }
  return <button className="icon-button" onClick={toggle} type="button" aria-label="切换深浅色模式"><SunMoon size={17} /></button>;
}
