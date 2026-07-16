import test from "node:test";
import assert from "node:assert/strict";
import { projects, filterProjects, getProject } from "../data/projects.ts";

test("五个项目数据完整", () => {
  assert.equal(projects.length, 5);
  const required = ["slug","title","englishTitle","tagline","summary","industry","stage","role","challenge","users","goals","solution","features","aiCapabilities","techStack","architecture","workflow","highlights","tradeoffs","progress","nextSteps"];
  for (const project of projects) for (const field of required) assert.ok(project[field] && project[field].length !== 0, `${project.slug}.${field} 缺失`);
});

test("项目 slug 唯一且可查询", () => {
  const slugs = projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const slug of slugs) assert.equal(getProject(slug)?.slug, slug);
});

test("筛选逻辑返回正确项目", () => {
  assert.equal(filterProjects("全部").length, 5);
  assert.ok(filterProjects("数字孪生").every((project) => project.filters.includes("数字孪生")));
  assert.ok(filterProjects("计算机视觉").some((project) => project.slug === "danceholic"));
});
