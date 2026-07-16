import type { Metadata } from "next";
import { Noto_Sans_SC, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import "./globals.css";

const sans = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "马钰 · AI 产品实验室", template: "%s · 马钰" },
  description: "从银发健康、智慧水利、芯片研发到动作理解与政企 AI OS：连接产品设计、AI 与全栈工程的个人产品实验室。",
  keywords: ["AI 产品", "行业 AI", "全栈工程", "数字孪生", "计算机视觉", "企业 AI OS"],
  openGraph: { title: "马钰 · AI 产品实验室", description: "用 AI 构建真实世界中的下一代产品", type: "website", locale: "zh_CN", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "马钰 · AI 产品实验室", description: "Building AI Products for the Real World", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" suppressHydrationWarning><body id="top" className={`${sans.variable} ${display.variable}`}><a className="skip-link" href="#main">跳到主要内容</a><SiteHeader/><main id="main">{children}</main><SiteFooter/></body></html>;
}
