import test from "node:test";
import assert from "node:assert/strict";
import { projects, filterProjects, getProject, projectOriginFilters } from "../data/projects.ts";

test("五个项目来源与叙事字段完整", () => {
  assert.equal(projects.length, 5);
  const required = ["slug", "title", "originType", "originLabel", "originStory", "personalConnection", "firstQuestion", "whyICare", "surfaceProblem", "deeperProblem", "stage", "completed", "inProgress", "hypotheses", "evidence", "wrongTurns", "changedBeliefs", "openQuestions", "architecture", "workflow"];
  for (const project of projects) {
    for (const field of required) assert.ok(project[field] && project[field].length !== 0, `${project.slug}.${field} 缺失`);
  }
});

test("三个最真实的项目起点存在且保持具体", () => {
  assert.match(getProject("danceholic").originStory, /跳舞|练习/);
  assert.match(getProject("silver-economy-ai").originStory, /爸爸|家庭群/);
  assert.match(getProject("chip-devops").originStory, /三年多|嵌入式/);
});

test("每个项目区分证据、假设与当前阶段", () => {
  for (const project of projects) {
    assert.ok(project.evidence.some((item) => item.type !== "hypothesis"));
    assert.ok(project.evidence.some((item) => item.type === "hypothesis"));
    assert.ok(project.hypotheses.length > 0);
    assert.ok(project.openQuestions.length > 0);
    assert.ok(project.stage.length > 0);
  }
});

test("项目按观察半径排序", () => {
  assert.deepEqual(projects.map((project) => project.originType), ["爱好", "家庭", "工作经历", "身边观察", "共性思考"]);
  assert.deepEqual(projectOriginFilters.slice(1), projects.map((project) => project.originType));
});

test("项目 slug 唯一且旧链接都可查询", () => {
  const slugs = projects.map((project) => project.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.deepEqual(slugs, ["danceholic", "silver-economy-ai", "chip-devops", "water-digital-twin", "opengov-ai-os"]);
  for (const slug of slugs) assert.equal(getProject(slug)?.slug, slug);
});

test("来源与技术筛选可以组合", () => {
  assert.equal(filterProjects("全部").length, 5);
  assert.equal(filterProjects("爱好")[0]?.slug, "danceholic");
  assert.ok(filterProjects("全部", "数字孪生").every((project) => project.filters.includes("数字孪生")));
  assert.ok(filterProjects("爱好", "视觉").some((project) => project.slug === "danceholic"));
});
