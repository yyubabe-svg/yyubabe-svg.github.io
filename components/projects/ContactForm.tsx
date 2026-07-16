"use client";
import { FormEvent, useState } from "react";
import { profile } from "../../data/profile";
export function ContactForm() {
  const [state, setState] = useState<"idle" | "ready">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setState("ready");
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`从一个具体问题开始：${form.get("topic")}`);
    const body = encodeURIComponent(`姓名：${form.get("name")}\n邮箱：${form.get("email")}\n组织：${form.get("org")}\n\n${form.get("message")}`);
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>姓名<input name="name" required placeholder="怎么称呼你" /></label><label>邮箱<input name="email" type="email" required placeholder="name@company.com" /></label></div>
    <label>组织<input name="org" placeholder="公司 / 团队 / 个人（可选）" /></label>
    <label>想交流什么<select name="topic" defaultValue="一个具体产品问题"><option>一个具体产品问题</option><option>AI 与工程协作</option><option>真实用户反馈</option><option>开源项目</option><option>技术合作与岗位机会</option></select></label>
    <label>具体发生了什么<textarea name="message" required rows={7} placeholder="可以写下场景、现有做法、遇到的阻力，以及你希望先验证的一小步。" /></label>
    <button className="button button-primary" type="submit">生成邮件草稿 ↗</button>
    {state === "ready" && <p className="form-note" role="status">已尝试打开邮件客户端；若未响应，可直接发送至 {profile.contact.email}。</p>}
    <p className="form-note">内容不会上传或保存，提交只会在本机生成邮件草稿。</p>
  </form>;
}
