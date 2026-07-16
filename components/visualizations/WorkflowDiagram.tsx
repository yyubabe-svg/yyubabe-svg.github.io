import type { WorkflowStep } from "../../data/projects";
export function WorkflowDiagram({steps}: {steps:WorkflowStep[]}){return <div className="workflow-diagram" role="list">{steps.map((step,index)=><div key={step.title} className="workflow-node" role="listitem"><span>0{index+1}</span><strong>{step.title}</strong><p>{step.description}</p><small>OUTPUT</small><b>{step.output}</b></div>)}</div>}
