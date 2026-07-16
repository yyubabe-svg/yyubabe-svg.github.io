"use client";

import { FormEvent, useState } from "react";
import { profile } from "../../data/profile";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`SIGNAL: ${form.get("problem")}`);
    const body = encodeURIComponent(`问题\n${form.get("problem")}\n\n为什么值得注意\n${form.get("why")}\n\n回复邮箱\n${form.get("email")}`);
    setSent(true);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  }
  return <form className="signal-form" onSubmit={submit}>
    <label><span>01 / 问题</span><textarea name="problem" required rows={3} placeholder="反复发生的具体情况是什么？" /></label>
    <label><span>02 / 为什么它值得注意</span><textarea name="why" required rows={5} placeholder="现在怎样处理？矛盾或遗漏发生在哪里？" /></label>
    <label><span>03 / 邮箱</span><input name="email" type="email" required placeholder="name@example.com" /></label>
    <button type="submit">SEND THE SIGNAL <span>↗</span></button>
    <p>内容不会上传或保存。提交会在你的设备上生成邮件草稿。</p>
    {sent && <p role="status">已尝试打开邮件客户端；若没有响应，可直接发送至 {profile.contact.email}。</p>}
  </form>;
}
