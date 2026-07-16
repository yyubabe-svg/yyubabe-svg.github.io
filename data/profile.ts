export const profile = {
  name: "马钰",
  englishName: "Yu Ma",
  title: "SIGNALS",
  englishTitle: "Questions hidden inside ordinary life",
  headline: "我关注那些反复发生，却从未被认真设计过的问题。",
  englishHeadline: "SIGNALS HIDDEN IN ORDINARY LIFE",
  intro: "Questions hidden inside ordinary life.",
  location: "CHENGDU / REMOTE",
  resumeUrl: "/resume/resume.pdf",
  contact: {
    email: "yyubabe@gmail.com",
    github: "https://github.com/yyubabe-svg",
    linkedin: "待补充",
    wechatMasked: "130****5778",
    wechatIdParts: ["130", "5256", "5778"],
    wechatQr: "",
    showWechatPublicly: false,
  },
} as const;

// 兼容已有组件；新组件优先读取 profile.contact。
export const contact = profile.contact;

export const navItems = [
  { href: "/work", label: "WORK" },
  { href: "/contact", label: "CONTACT" },
] as const;
