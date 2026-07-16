"use client";

import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, profile } from "../../data/profile";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={scrolled ? "signals-header scrolled" : "signals-header"}>
    <div className="signals-nav">
      <Link href="/" className="signals-brand">YU MA</Link>
      <nav className={open ? "signals-links open" : "signals-links"} aria-label="主导航">
        {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname.startsWith(item.href) ? "active" : ""}>{item.label}</Link>)}
        <Link className="mobile-github" href={profile.contact.github} target="_blank" rel="noopener noreferrer">GITHUB</Link>
      </nav>
      <div className="signals-actions"><ThemeToggle /><Link className="github-icon" href={profile.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></Link><button className="signals-menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "关闭菜单" : "打开菜单"}>{open ? <X /> : <Menu />}</button></div>
    </div>
  </header>;
}
