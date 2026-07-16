import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../../components/projects/ContactForm";
import { profile } from "../../data/profile";

export const metadata: Metadata = { title: "CONTACT / SIGNALS", description: "发送一个最近引起你注意的问题。", alternates: { canonical: "/contact/" } };

export default function ContactPage() {
  return <div className="contact-page page-frame">
    <header><p>CONTACT / INCOMING SIGNAL</p><h1>你最近<br />注意到了什么？</h1></header>
    <div className="contact-grid">
      <aside><span>DIRECT CHANNELS</span><Link href={`mailto:${profile.contact.email}`}>EMAIL<br /><strong>{profile.contact.email}</strong></Link><Link href={profile.contact.github} target="_blank" rel="noopener noreferrer">GITHUB<br /><strong>yyubabe-svg ↗</strong></Link></aside>
      <ContactForm />
    </div>
  </div>;
}
