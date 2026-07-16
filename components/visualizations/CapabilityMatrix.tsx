const rows = [
  ["康伴 AI", "支持", "支持", "可扩展", "—", "部分", "支持"], ["水利数字孪生", "支持", "支持", "支持", "核心", "支持", "核心"],
  ["芯片 DevOps", "支持", "核心", "可扩展", "可扩展", "核心", "核心"], ["DanceHolic", "部分", "可扩展", "核心", "—", "部分", "App"],
  ["OpenGov AI OS", "核心", "核心", "支持", "可扩展", "核心", "核心"],
];
const columns = ["项目", "AI / RAG", "Agent", "视觉 AI", "数字孪生", "DevOps", "企业部署"];
export function CapabilityMatrix(){return <div className="matrix-wrap" role="region" aria-label="跨行业能力地图" tabIndex={0}><div className="capability-matrix">{columns.map((c)=><div className="matrix-head" key={c}>{c}</div>)}{rows.flatMap((row,r)=>row.map((cell,c)=><div className={`matrix-cell level-${cell} ${c===0?"matrix-project":""}`} key={`${r}-${c}`}><span>{cell}</span>{c>0&&cell!=="—"&&<i/>}</div>))}</div></div>}
