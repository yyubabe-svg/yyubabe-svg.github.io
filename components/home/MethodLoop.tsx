const steps = [
  ["01", "发现真实问题", "观察角色、约束与现有替代方案"], ["02", "拆解业务流程", "找到信息、判断和协作的关键节点"],
  ["03", "设计 AI 能力", "明确模型、规则、工具与人工边界"], ["04", "构建产品系统", "连接体验、服务、数据和基础设施"],
  ["05", "工程验证", "用真实链路验证性能、安全与可用性"], ["06", "持续迭代", "让反馈进入下一轮产品决策"],
];
export function MethodLoop(){return <div className="method-loop">{steps.map(([no,title,desc],i)=><div className="method-step" key={no}><span>{no}</span><div><strong>{title}</strong><p>{desc}</p></div>{i<steps.length-1&&<i aria-hidden="true">→</i>}</div>)}</div>}
