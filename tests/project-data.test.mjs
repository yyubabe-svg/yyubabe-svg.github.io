import test from "node:test";
import assert from "node:assert/strict";
import { projects, getProject } from "../data/projects.ts";
import { signals, getSignal } from "../data/signals.ts";

test("五个 Signal 与项目一一对应", () => {
  assert.equal(signals.length, 5);
  assert.deepEqual(signals.map(({ slug }) => slug), projects.map(({ slug }) => slug));
  for (const signal of signals) {
    assert.equal(getSignal(signal.slug)?.slug, signal.slug);
    assert.equal(getProject(signal.slug)?.slug, signal.slug);
  }
});

test("Signal 精简字段完整", () => {
  const required = ["slug", "index", "title", "signal", "origin", "tension", "coreQuestion", "systemSummary", "state", "implemented", "tested", "simulated", "assumptions", "openQuestions", "signalColor"];
  for (const signal of signals) for (const field of required) assert.ok(signal[field] && signal[field].length !== 0, `${signal.slug}.${field} 缺失`);
});

test("三个具体起点保留事实", () => {
  assert.match(getSignal("danceholic").origin, /三四年|舞蹈/);
  assert.match(getProject("silver-economy-ai").originStory, /爸爸|家庭群/);
  assert.match(getProject("chip-devops").originStory, /三年多|嵌入式/);
});

test("每个项目明确区分五类证据状态", () => {
  for (const signal of signals) {
    assert.ok(signal.implemented.length > 0);
    assert.ok(signal.tested.length > 0);
    assert.ok(signal.simulated.length > 0);
    assert.ok(signal.assumptions.length > 0);
    assert.ok(signal.openQuestions.length > 0);
  }
});

test("slug 与编号唯一", () => {
  assert.equal(new Set(signals.map(({ slug }) => slug)).size, signals.length);
  assert.equal(new Set(signals.map(({ index }) => index)).size, signals.length);
});
