import { access, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { projects } from "../data/projects.ts";
import { normalizeBasePath } from "../lib/base-path.ts";

const root = process.cwd();
const out = join(root, "out");
const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
const failures = [];

async function exists(path, label) {
  try { await access(path); console.log(`✓ ${label}`); }
  catch { failures.push(`${label}: ${path}`); console.error(`✗ ${label}`); }
}

async function inspectHtml(path, label) {
  try {
    const html = await readFile(path, "utf8");
    if (/localhost(?::\d+)?/i.test(html)) failures.push(`${label} 包含 localhost`);
    if (/your-domain\.example|请替换为/i.test(html)) failures.push(`${label} 包含未替换占位内容`);
    if (basePath) {
      const escaped = basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (new RegExp(`["']/_next/`).test(html)) failures.push(`${label} 包含未加 basePath 的 /_next/ 资源`);
      if (!new RegExp(`${escaped}/_next/`).test(html)) failures.push(`${label} 未包含 ${basePath}/_next/ 资源`);
    }
    console.log(`✓ ${label} 路径检查`);
  } catch { failures.push(`${label} 无法读取`); }
}

const slugs = projects.map(({ slug }) => slug);
if (slugs.some((slug) => !slug.trim())) failures.push("项目 slug 不能为空");
if (new Set(slugs).size !== slugs.length) failures.push("项目 slug 必须唯一");

await exists(out, "out 输出目录");
await exists(join(out, "index.html"), "首页静态文件");
await exists(join(out, "404.html"), "GitHub Pages 404 页面");
await exists(join(out, ".nojekyll"), ".nojekyll");
await exists(join(out, "og.png"), "Open Graph 图片");
await exists(join(out, "resume", "resume.pdf"), "简历 PDF");
await exists(join(out, "demos", "shushui-ai", "user-manual.html"), "蜀水 AI 用户手册");

await inspectHtml(join(out, "index.html"), "首页");
for (const slug of slugs) {
  const page = join(out, "projects", slug, "index.html");
  await exists(page, `项目页面 ${slug}`);
  await inspectHtml(page, `项目页面 ${slug}`);
}

try {
  const info = await stat(join(out, "index.html"));
  if (!info.isFile() || info.size === 0) failures.push("首页输出为空");
} catch { /* exists() 已记录 */ }

if (failures.length) {
  console.error("\n静态导出检查失败：\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`\n静态导出检查通过（basePath: ${basePath || "/"}，项目页面: ${slugs.length}）`);
