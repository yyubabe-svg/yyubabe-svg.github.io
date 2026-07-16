import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

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
