export type JourneyEntry = {
  date: string;
  observation: string;
  action: string;
  changedBelief: string;
  relatedProjects: string[];
};

export const journey: JourneyEntry[] = [
  {
    date: "三四年前至今",
    observation: "练舞和录视频时，我经常只知道动作“不太对”，却不知道具体哪里和什么时候出了问题。",
    action: "开始研究姿态、时序对齐、人物追踪和可执行反馈。",
    changedBelief: "动作分析的目标不是给分，而是帮助下一次练习。",
    relatedProjects: ["DanceHolic"],
  },
  {
    date: "持续观察",
    observation: "爸爸测完血压、血糖后，会把照片发到家庭群，简单但很难长期整理。",
    action: "尝试保留拍照和说话的习惯，让 AI 负责识别、归档和摘要。",
    changedBelief: "好的健康产品先尊重原有习惯，再增加智能。",
    relatedProjects: ["康伴 AI"],
  },
  {
    date: "三年多研发经历",
    observation: "端到端嵌入式研发的大量时间花在需求同步、设备操作、测试、日志和缺陷追踪。",
    action: "把代码、设备、测试、报告和审批放进同一条研发链路思考。",
    changedBelief: "AI 工程价值不只在写代码，而在保持全流程上下文。",
    relatedProjects: ["芯片研发 DevOps"],
  },
  {
    date: "持续接触与观察",
    observation: "工程资料、专业计算、GIS、模型和监测数据常在不同工具中彼此割裂。",
    action: "用可溯源知识、空间界面和模拟数据验证联动路径。",
    changedBelief: "数字孪生只有进入判断与行动才真正开始。",
    relatedProjects: ["蜀水智库 AI"],
  },
  {
    date: "多次构建之后",
    observation: "不同组织反复需要知识、Agent、权限、审计和工作流，但每次都从头搭建。",
    action: "归纳配置、插件和治理层，探索可组合的组织 AI 门户。",
    changedBelief: "可复用的不是换皮页面，而是受约束的产品能力。",
    relatedProjects: ["OpenGov AI OS"],
  },
];
