"use client";
import { useState } from "react";

export function MediaFallback({ src, alt, label }: { src: string; alt: string; label: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className="media-fallback" role="img" aria-label={`${alt}，视觉素材待补充`}><span>{label}</span><strong>PRODUCT SYSTEM / VISUAL PLACEHOLDER</strong><small>真实截图待补充 · 当前使用工程化占位视觉</small></div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="project-media" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
