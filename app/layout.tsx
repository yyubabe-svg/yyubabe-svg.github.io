import type { Metadata } from "next";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { getSiteUrl } from "../lib/base-path";
import "./globals.css";
import "../styles/narrative.css";
const siteUrl = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "马钰 · 从身边问题开始构建", template: "%s · 马钰" },
  description: "马钰的个人产品主页，记录从舞蹈爱好、家庭健康、嵌入式研发和工程场景中发现问题，并通过 AI、软件和产品设计进行验证的过程。",
  keywords: ["马钰", "产品构建", "真实需求", "DanceHolic", "家庭健康", "嵌入式研发", "数字孪生", "AI 产品"],
  openGraph: { title: "马钰 · 看见问题，然后试着做点什么", description: "从爱好、家人、工作和身边观察开始的个人产品记录。", type: "website", locale: "zh_CN", url: siteUrl, images: [`${siteUrl}/og.png`] },
  twitter: { card: "summary_large_image", title: "Yu Ma · Starting from what I see around me", description: "Learning by noticing, questioning and building.", images: [`${siteUrl}/og.png`] },
  icons: { icon: `${siteUrl}/favicon.svg`, shortcut: `${siteUrl}/favicon.svg` },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" suppressHydrationWarning><body id="top"><a className="skip-link" href="#main">跳到主要内容</a><SiteHeader /><main id="main">{children}</main><SiteFooter /></body></html>;
}
