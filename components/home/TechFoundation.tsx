const layers = [
  { name:"人机协作层", items:["角色体验","可解释反馈","人工确认","风险沟通"] },
  { name:"产品工作流层", items:["数据采集","文件理解","专业计算","报告生成","决策支持"] },
  { name:"智能能力层", items:["RAG","Agent","多模态","计算机视觉","Tool Calling"] },
  { name:"企业工程层", items:["RBAC","审计日志","工作流","可观测性","私有化部署"] },
];
export function TechFoundation(){return <div className="foundation"><div className="foundation-core"><span>SHARED CORE</span><strong>共同技术底座</strong><p>行业变化，底层方法与工程积累可以复用。</p></div><div className="foundation-layers">{layers.map((layer,i)=><div key={layer.name} className="foundation-layer"><span>0{i+1}</span><strong>{layer.name}</strong><div>{layer.items.map(x=><i key={x}>{x}</i>)}</div></div>)}</div></div>}
