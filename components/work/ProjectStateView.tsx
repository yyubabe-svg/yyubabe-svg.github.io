"use client";

import { useState } from "react";
import type { Project } from "../../data/projects";
import type { ProjectSignal } from "../../data/signals";
import { ProjectDemo } from "../projects/ProjectDemo";
import { ArchitectureDiagram } from "../visualizations/ArchitectureDiagram";
import { WorkflowDiagram } from "../visualizations/WorkflowDiagram";

const states = ["IDEA", "SYSTEM", "EVIDENCE"] as const;
type View = (typeof states)[number];

function EvidenceColumn({ label, items }: { label: string; items: string[] }) {
  return <section className="evidence-group"><h3>{label}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export function ProjectStateView({ project, signal }: { project: Project; signal: ProjectSignal }) {
  const [view, setView] = useState<View>("IDEA");
  return <div className="state-view">
    <div className="state-switch" role="tablist" aria-label="项目记录视图">
      {states.map((state) => <button key={state} type="button" role="tab" aria-selected={view === state} aria-controls={`view-${state.toLowerCase()}`} onClick={() => setView(state)}>{state}</button>)}
    </div>

    {view === "IDEA" && <div id="view-idea" role="tabpanel" className="state-panel idea-panel">
      <section><p className="record-label">ORIGIN</p><p className="record-lead">{project.originStory}</p></section>
      <section><p className="record-label">TENSION</p><div className="tension-pairs">{signal.tension.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
      <section><p className="record-label">QUESTION</p><blockquote>{signal.coreQuestion}</blockquote></section>
    </div>}

    {view === "SYSTEM" && <div id="view-system" role="tabpanel" className="state-panel system-panel">
      <section><div className="panel-heading"><p className="record-label">PRODUCT FLOW</p><span>INPUT → INTERPRETATION → HUMAN DECISION</span></div><WorkflowDiagram steps={project.workflow} /></section>
      <section><div className="panel-heading"><p className="record-label">ARCHITECTURE</p><span>FOCUS NODES TO READ RESPONSIBILITY</span></div><ArchitectureDiagram nodes={project.architecture} /></section>
      <section><div className="panel-heading"><p className="record-label">PROTOTYPE</p><span>INTERACTION DEMO · SIMULATED WHERE MARKED</span></div><ProjectDemo slug={project.slug} /></section>
      <section><p className="record-label">TECHNICAL DECISIONS</p><div className="decision-records">{project.tradeoffs.slice(0, 5).map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
      <p className="tech-footnote">TOOLS / {project.techStack.join(" · ")}</p>
    </div>}

    {view === "EVIDENCE" && <div id="view-evidence" role="tabpanel" className="state-panel evidence-panel">
      <EvidenceColumn label="IMPLEMENTED" items={signal.implemented} />
      <EvidenceColumn label="TESTED" items={signal.tested} />
      <EvidenceColumn label="SIMULATED" items={signal.simulated} />
      <EvidenceColumn label="ASSUMPTION" items={signal.assumptions} />
      <EvidenceColumn label="OPEN" items={signal.openQuestions} />
      {project.disclaimer && <aside className="evidence-boundary"><span>BOUNDARY</span><p>{project.disclaimer}</p></aside>}
    </div>}
  </div>;
}
