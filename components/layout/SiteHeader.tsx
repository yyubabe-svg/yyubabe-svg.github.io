"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, profile } from "../../data/profile";
import { ThemeToggle } from "./ThemeToggle";
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-shell">
    <Link href="/" className="brand" aria-label="返回首页"><span className="brand-mark">YM</span><span>{profile.name}<small>Personal Notes</small></span></Link>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="主导航">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={item.href === "/" ? pathname === "/" ? "active" : "" : pathname.startsWith(item.href) ? "active" : ""}>{item.label}</Link>)}</nav>
    <div className="nav-actions"><ThemeToggle /><Link className="nav-cta" href="/contact">开始对话</Link><button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "关闭移动端菜单" : "打开移动端菜单"}>{open ? <X /> : <Menu />}</button></div>
  </div></header>;
}
