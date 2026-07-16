import Link from "next/link";
import { profile } from "../../data/profile";

export function SiteFooter() {
  return <footer className="signals-footer"><span>SIGNALS © {new Date().getFullYear()} YU MA</span><div><Link href="/work">WORK</Link><Link href="/contact">CONTACT</Link><Link href={profile.contact.github} target="_blank" rel="noopener noreferrer">GITHUB ↗</Link></div></footer>;
}
