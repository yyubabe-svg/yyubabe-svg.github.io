import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { getRepositoryBasePath, normalizeBasePath, withBasePath } from "../lib/base-path.ts";
import { projects } from "../data/projects.ts";
import { profile } from "../data/profile.ts";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("关键页面与新增静态路由存在", async () => {
  const routes = ["app/page.tsx", "app/projects/page.tsx", "app/projects/[slug]/page.tsx", "app/capabilities/page.tsx", "app/about/page.tsx", "app/notes/page.tsx", "app/now/page.tsx", "app/contact/page.tsx", "app/not-found.tsx"];
  await Promise.all(routes.map((route) => access(new URL(route, root))));
  const source = await read("data/profile.ts");
  for (const route of ["/projects", "/notes", "/now", "/capabilities", "/about", "/contact"]) assert.match(source, new RegExp(route.replace("/", "\\/")));
});

test("项目详情支持所有旧 slug 静态生成", async () => {
  const source = await read("app/projects/[slug]/page.tsx");
  assert.match(source, /generateStaticParams/);
  assert.match(source, /projects\.map/);
  for (const project of projects) assert.ok(project.slug);
});

test("首页有两种阅读路径和观察半径", async () => {
  const home = await read("app/page.tsx");
  const observation = await read("components/home/ObservationRadius.tsx");
  assert.match(home, /先认识我/);
  assert.match(home, /直接看项目/);
  assert.match(observation, /<button/);
  assert.match(observation, /aria-pressed/);
  assert.match(observation, /onClick/);
});

test("旧的行业包装不再作为核心文案", async () => {
  const paths = ["app/page.tsx", "app/about/page.tsx", "app/projects/page.tsx", "app/layout.tsx", "data/profile.ts"];
  const source = (await Promise.all(paths.map(read))).join("\n");
  for (const phrase of ["横跨五个行业", "五个行业命题", "跨行业能力地图", "AI Product Creator · Industry AI"]) assert.doesNotMatch(source, new RegExp(phrase));
});

test("主题默认浅色、可持久化并支持深色", async () => {
  const source = await read("components/layout/ThemeToggle.tsx");
  const css = await read("styles/narrative.css");
  assert.match(source, /localStorage\.setItem\("theme"/);
  assert.match(source, /stored \?\? "light"/);
  assert.match(source, /dataset\.theme/);
  assert.match(css, /\[data-theme="dark"\]/);
});

test("完整微信号不会直接出现在静态内容", async () => {
  const paths = ["data/profile.ts", "app/contact/page.tsx", "components/contact/WechatReveal.tsx", "components/layout/SiteFooter.tsx"];
  const source = (await Promise.all(paths.map(read))).join("\n");
  const fullWechat = ["130", "5256", "5778"].join("");
  assert.equal(source.includes(fullWechat), false);
  assert.match(source, /130\*\*\*\*5778/);
  assert.match(source, /showWechatPublicly: false/);
});

test("Reduced Motion 与键盘焦点样式生效", async () => {
  const baseCss = await read("app/globals.css");
  const narrativeCss = await read("styles/narrative.css");
  assert.match(`${baseCss}\n${narrativeCss}`, /prefers-reduced-motion/);
  assert.match(narrativeCss, /focus-visible/);
});

test("图片缺失时提供可访问降级视觉", async () => {
  const source = await read("components/ui/MediaFallback.tsx");
  assert.match(source, /onError/);
  assert.match(source, /视觉素材待补充/);
  assert.match(source, /role="img"/);
});

test("basePath 兼容个人主页与普通仓库", () => {
  assert.equal(normalizeBasePath("/"), "");
  assert.equal(normalizeBasePath("//portfolio//"), "/portfolio");
  assert.equal(getRepositoryBasePath("yyubabe-svg/yyubabe-svg.github.io", null), "");
  assert.equal(getRepositoryBasePath("yyubabe-svg/portfolio", null), "/portfolio");
  assert.equal(withBasePath("", "/portfolio"), "/portfolio/");
  assert.equal(withBasePath("projects/demo.png", "/portfolio"), "/portfolio/projects/demo.png");
  assert.equal(withBasePath("https://example.com/image.png", "/portfolio"), "https://example.com/image.png");
});

test("本地公开资源与 404 存在", async () => {
  await access(new URL(`public${profile.resumeUrl}`, root));
  await access(new URL("public/og.png", root));
  await access(new URL("public/favicon.svg", root));
  await access(new URL("app/not-found.tsx", root));
});

test("联系入口有 mailto 静态降级", async () => {
  const contact = await read("components/projects/ContactForm.tsx");
  assert.match(contact, /mailto:/);
  assert.match(contact, /内容不会上传或保存/);
});
