import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { getRepositoryBasePath, normalizeBasePath, withBasePath } from "../lib/base-path.ts";
import { signals } from "../data/signals.ts";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("公开信息架构只有主页、Work、项目与联系", async () => {
  const routes = ["app/page.tsx", "app/work/page.tsx", "app/work/[slug]/page.tsx", "app/contact/page.tsx", "app/not-found.tsx"];
  await Promise.all(routes.map((route) => access(new URL(route, root))));
  const profile = await read("data/profile.ts");
  assert.match(profile, /href: "\/work"/);
  assert.match(profile, /href: "\/contact"/);
  for (const route of ["/about", "/capabilities", "/notes", "/now"]) assert.doesNotMatch(profile, new RegExp(route));
});

test("首页只有 ENTRY、SIGNALS、EXPERIMENTS、POSITION 四幕", async () => {
  const home = await read("app/page.tsx");
  assert.equal((home.match(/data-act=/g) ?? []).length, 4);
  for (const act of ["entry", "signals", "experiments", "position"]) assert.match(home, new RegExp(`data-act="${act}"`));
});

test("首页没有简历入口与禁用口号", async () => {
  const source = [await read("app/page.tsx"), await read("components/layout/SiteHeader.tsx"), await read("components/layout/SiteFooter.tsx")].join("\n");
  for (const phrase of ["resume", "简历", "AI Product Creator", "五个行业命题", "跨行业能力", "我没有给自己预设", "我怎样一点点成为自己", "从真实问题出发", "让 AI 进入真实工作流"]) assert.doesNotMatch(source, new RegExp(phrase, "i"));
});

test("导航只有 YU MA、WORK、CONTACT 与 GitHub 辅助入口", async () => {
  const header = await read("components/layout/SiteHeader.tsx");
  const profile = await read("data/profile.ts");
  assert.match(header, />YU MA</);
  assert.match(profile, /label: "WORK"/);
  assert.match(profile, /label: "CONTACT"/);
  assert.equal((profile.match(/label:/g) ?? []).length, 2);
});

test("五个 Signal 均可进入 Work 详情", async () => {
  const home = await read("components/home/SignalScroll.tsx");
  const work = await read("app/work/[slug]/page.tsx");
  assert.match(home, /\/work\/\$\{signal\.slug\}/);
  assert.match(work, /generateStaticParams/);
  assert.match(work, /signals\.map/);
  assert.equal(signals.length, 5);
});

test("详情只有 IDEA、SYSTEM、EVIDENCE 三种视图", async () => {
  const view = await read("components/work/ProjectStateView.tsx");
  assert.match(view, /\["IDEA", "SYSTEM", "EVIDENCE"\]/);
  assert.match(view, /role="tablist"/);
  for (const type of ["IMPLEMENTED", "TESTED", "SIMULATED", "ASSUMPTION", "OPEN"]) assert.match(view, new RegExp(type));
});

test("旧项目路径继续静态生成", async () => {
  const legacyIndex = await read("app/projects/page.tsx");
  const legacyDetail = await read("app/projects/[slug]/page.tsx");
  assert.match(legacyIndex, /WorkIndex/);
  assert.match(legacyDetail, /generateStaticParams/);
});

test("移动端显影不依赖 hover", async () => {
  const signal = await read("components/home/SignalScroll.tsx");
  const css = await read("styles/narrative.css");
  assert.match(signal, /scan-toggle/);
  assert.match(signal, /aria-expanded/);
  assert.match(css, /data-revealed="true"/);
});

test("动画在页面失焦时暂停并支持 Reduced Motion", async () => {
  const words = await read("components/home/SignalWords.tsx");
  const css = await read("styles/narrative.css");
  assert.match(words, /visibilitychange/);
  assert.match(words, /document\.hidden/);
  assert.match(words, /prefers-reduced-motion/);
  assert.match(css, /prefers-reduced-motion/);
});

test("联系表单使用 mailto 静态降级", async () => {
  const form = await read("components/projects/ContactForm.tsx");
  assert.match(form, /mailto:/);
  assert.match(form, /内容不会上传或保存/);
  for (const field of ["problem", "why", "email"]) assert.match(form, new RegExp(`name="${field}"`));
});

test("主题默认深色且可持久化", async () => {
  const toggle = await read("components/layout/ThemeToggle.tsx");
  const layout = await read("app/layout.tsx");
  assert.match(toggle, /stored \?\? "dark"/);
  assert.match(toggle, /localStorage\.setItem/);
  assert.match(layout, /data-theme="dark"/);
});

test("basePath 兼容个人主页与普通仓库", () => {
  assert.equal(normalizeBasePath("/"), "");
  assert.equal(normalizeBasePath("//portfolio//"), "/portfolio");
  assert.equal(getRepositoryBasePath("yyubabe-svg/yyubabe-svg.github.io", null), "");
  assert.equal(getRepositoryBasePath("yyubabe-svg/portfolio", null), "/portfolio");
  assert.equal(withBasePath("", "/portfolio"), "/portfolio/");
});
