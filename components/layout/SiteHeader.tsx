"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, profile } from "../../data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const [english, setEnglish] = useState(false);
  return <header className="site-header"><div className="nav-shell">
    <Link href="/" className="brand" aria-label="返回首页"><span className="brand-mark">YM</span><span>{profile.name}<small>Product Lab</small></span></Link>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="主导航">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={item.href === "/" ? pathname === "/" ? "active" : "" : pathname.startsWith(item.href) ? "active" : ""}>{item.label}</Link>)}<Link className="mobile-contact" onClick={() => setOpen(false)} href="/contact">开始对话</Link></nav>
    <div className="nav-actions"><button className="language-toggle" type="button" onClick={() => setEnglish(!english)} aria-label="切换中英文">{english ? "中文" : "EN"}<span className="tooltip">完整英文版筹备中</span></button><ThemeToggle/><Link className="nav-cta" href="/contact">开始对话</Link><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="打开移动端菜单">{open ? <X/> : <Menu/>}</button></div>
  </div></header>;
}
