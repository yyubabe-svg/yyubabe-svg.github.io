export const profile = {
  name: "马钰",
  englishName: "Yu Ma",
  title: "从身边需求出发的产品创造者",
  englishTitle: "Learning and Building from Real-life Needs",
  headline: "看见问题，然后试着做点什么",
  englishHeadline: "Starting from what I see around me",
  intro:
    "我的项目来自爱好、家人、工作经历和身边真实发生的事情。我会不断观察、提问、学习和构建，尝试把一些具体需求变成可以被使用和验证的产品。",
  location: "中国 · 可远程协作",
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
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/notes", label: "笔记" },
  { href: "/capabilities", label: "怎样做" },
  { href: "/about", label: "关于" },
  { href: "/now", label: "现在" },
  { href: "/contact", label: "联系" },
] as const;
