const nodes = [
  ["Industry AI", "node-one"], ["Digital Twin", "node-two"], ["Multimodal", "node-three"],
  ["Computer Vision", "node-four"], ["Enterprise Platform", "node-five"], ["Full-stack Engineering", "node-six"],
] as const;
export function CapabilityNetwork() { return <div className="capability-network" aria-label="AI Product Builder 能力网络"><div className="network-grid"/><div className="network-ring ring-one"/><div className="network-ring ring-two"/><div className="network-core"><span>AI PRODUCT</span><strong>BUILDER</strong><small>01 / PRODUCT LAB</small></div>{nodes.map(([name, cls], index)=><div key={name} className={`network-node ${cls}`}><i>{String(index+1).padStart(2,"0")}</i><span>{name}</span></div>)}<div className="network-status"><span>System</span><strong>BUILDING</strong></div></div> }
