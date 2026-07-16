"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function WechatReveal({ masked, wechatIdParts, showPublicly }: { masked: string; wechatIdParts?: readonly string[]; showPublicly: boolean }) {
  const [revealed, setRevealed] = useState(showPublicly);
  const [copied, setCopied] = useState(false);
  const wechatId = wechatIdParts?.join("");
  async function copyWechat() {
    if (!wechatId) return;
    await navigator.clipboard.writeText(wechatId);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return (
    <div className="wechat-reveal">
      <strong>{revealed && wechatId ? wechatId : masked}</strong>
      {!revealed && wechatId && <button type="button" onClick={() => setRevealed(true)}>显示微信</button>}
      {revealed && wechatId && <button type="button" onClick={copyWechat}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? "已复制" : "复制微信"}</button>}
      <span>信息仅在主动点击后显示</span>
    </div>
  );
}
