"use client";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const placeholder = email.includes("替换");
  async function copy() {
    if (placeholder) return;
    await navigator.clipboard.writeText(email);
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }
  return <button className="button button-secondary" type="button" onClick={copy} disabled={placeholder} aria-label="复制邮箱">{placeholder ? "邮箱待补充" : copied ? "已复制邮箱" : "复制邮箱"}</button>;
}
