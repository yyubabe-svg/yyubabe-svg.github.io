import Link from "next/link";
import { navItems, profile } from "../../data/profile";
export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-grid">
    <div><p className="eyebrow">YU MA / PERSONAL PRODUCT NOTES</p><h2>看见问题，然后试着做点什么。</h2><p>{profile.intro}</p></div>
    <div><strong>继续阅读</strong>{navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
    <div><strong>联系</strong><Link href={`mailto:${profile.contact.email}`}>{profile.contact.email}</Link><Link href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</Link><span>微信 {profile.contact.wechatMasked}</span><Link href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">查看简历</Link></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}. 这是一份持续修订的个人记录。</span><Link href="#top">返回顶部 ↑</Link></div></footer>;
}
