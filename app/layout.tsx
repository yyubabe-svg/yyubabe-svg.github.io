import type { Metadata } from "next";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { getSiteUrl } from "../lib/base-path";
import "./globals.css";
import "../styles/narrative.css";
const siteUrl = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SIGNALS · Yu Ma", template: "%s · SIGNALS" },
  description: "Questions hidden inside ordinary life. Five signals, five evolving systems, and the evidence currently available.",
  keywords: ["SIGNALS", "Yu Ma", "DanceHolic", "Family Health", "Embedded R&D", "Digital Twin", "Enterprise Systems"],
  openGraph: { title: "SIGNALS · Yu Ma", description: "Questions hidden inside ordinary life.", type: "website", locale: "zh_CN", url: siteUrl },
  twitter: { card: "summary", title: "SIGNALS · Yu Ma", description: "Questions hidden inside ordinary life." },
  icons: { icon: `${siteUrl}/favicon.svg`, shortcut: `${siteUrl}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" data-theme="dark" suppressHydrationWarning><body id="top"><a className="skip-link" href="#main">跳到主要内容</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
