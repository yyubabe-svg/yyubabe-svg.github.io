import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { getRepositoryBasePath, normalizeBasePath, withBasePath } from "../lib/base-path.ts";
import { projects } from "../data/projects.ts";
import { profile } from "../data/profile.ts";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("关键页面与导航链接存在", async () => {
  const routes = ["app/page.tsx","app/projects/page.tsx","app/projects/[slug]/page.tsx","app/capabilities/page.tsx","app/about/page.tsx","app/contact/page.tsx","app/not-found.tsx"];
  await Promise.all(routes.map((route) => access(new URL(route, root))));
  const profile = await read("data/profile.ts");
  for (const route of ["/projects","/capabilities","/about","/contact"]) assert.match(profile, new RegExp(route.replace("/","\\/")));
});

test("项目详情支持静态参数生成", async () => {
  const source = await read("app/projects/[slug]/page.tsx");
  assert.match(source, /generateStaticParams/);
  assert.match(source, /projects\.map/);
});

test("主题切换会持久化并尊重系统主题", async () => {
  const source = await read("components/layout/ThemeToggle.tsx");
  assert.match(source, /localStorage\.setItem\("theme"/);
  assert.match(source, /prefers-color-scheme: light/);
  assert.match(source, /document\.documentElement\.dataset\.theme/);
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
  assert.equal(getRepositoryBasePath("yyubabe-svg/yyubabe-svg.github.io", undefined), "");
  assert.equal(getRepositoryBasePath("yyubabe-svg/portfolio", undefined), "/portfolio");
  assert.equal(withBasePath("", "/portfolio"), "/portfolio/");
  assert.equal(withBasePath("projects/demo.png", "/portfolio"), "/portfolio/projects/demo.png");
  assert.equal(withBasePath("https://example.com/image.png", "/portfolio"), "https://example.com/image.png");
});

test("本地公开资源路径存在，项目封面缺失时不发起请求", async () => {
  await access(new URL(`public${profile.resumeUrl}`, root));
  await access(new URL("public/og.png", root));
  await access(new URL("public/favicon.svg", root));
  for (const project of projects) {
    if (project.cover) await access(new URL(`public${project.cover}`, root));
  }
});

test("联系入口有 mailto 降级且自定义 404 存在", async () => {
  const contact = await read("components/projects/ContactForm.tsx");
  assert.match(contact, /mailto:yyubabe@gmail\.com/);
  await access(new URL("app/not-found.tsx", root));
});
