import type { Metadata } from "next";
import Link from "next/link";
import { WechatReveal } from "../../components/contact/WechatReveal";
import { ContactForm } from "../../components/projects/ContactForm";
import { CopyEmail } from "../../components/ui/CopyEmail";
import { profile } from "../../data/profile";
export const metadata: Metadata = { title: "联系", description: "从一个真实问题开始，与马钰交流产品、工程协作、反馈或岗位机会。" };
export default function Contact() {
  return <div className="page-shell inner-page">
    <header className="page-hero narrative-hero contact-hero"><p className="eyebrow">CONTACT / START SPECIFIC</p><h1>让我们从一个<br /><em>真实问题</em>开始。</h1><p>不必先把它包装成宏大的项目。可以告诉我具体发生了什么、现在怎样解决、哪里仍然不顺。</p></header>
    <div className="contact-layout"><aside className="contact-info">
      <div><small>EMAIL</small><strong>{profile.contact.email}</strong><CopyEmail email={profile.contact.email} /></div>
      <div><small>GITHUB</small><strong>yyubabe-svg</strong><Link href={profile.contact.github} target="_blank" rel="noopener noreferrer">访问 GitHub ↗</Link></div>
      <div><small>WECHAT</small><WechatReveal masked={profile.contact.wechatMasked} wechatIdParts={profile.contact.wechatIdParts} showPublicly={profile.contact.showWechatPublicly} /></div>
      <div><small>LINKEDIN</small><strong>{profile.contact.linkedin}</strong></div>
      <div><small>RESUME</small><Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">查看简历 PDF ↗</Link></div>
      <div className="collaboration-directions"><small>可以交流</small>{["产品问题与验证", "AI 与工程协作", "真实用户反馈", "开源项目", "技术合作与岗位机会"].map((item) => <span key={item}>{item}</span>)}</div>
    </aside><ContactForm /></div>
  </div>;
}
