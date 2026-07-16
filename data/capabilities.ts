export type CapabilityLevel = "使用过" | "项目实践" | "深入探索" | "正在学习";

export type BuildTool = {
  name: string;
  level: CapabilityLevel;
  usedFor: string;
  why: string;
  solved: string;
  limitation: string;
  next: string;
  projects: string[];
};

export const buildPath = [
  ["观察", "先记录具体发生了什么，不急着给它贴行业标签。"],
  ["提问", "区分表面不便、真正阻力与尚未验证的猜测。"],
  ["理解场景", "看现有做法、角色、边界和为什么一直这样做。"],
  ["拆解任务", "找到一条最小、可运行、可被检验的链路。"],
  ["学习技术", "只学习解决当前问题所需的最小知识地图。"],
  ["构建原型", "让模糊想法变成别人可以操作和反馈的版本。"],
  ["测试", "检查正常路径，也检查异常、权限、隐私和部署。"],
  ["修改判断", "承认原来的理解不够，记录为什么改变。"],
  ["继续迭代", "把真实反馈变成下一轮更小、更明确的行动。"],
] as const;

export const buildTools: BuildTool[] = [
  {
    name: "RAG",
    level: "深入探索",
    usedFor: "蜀水智库 AI、康伴 AI、OpenGov AI OS",
    why: "工程资料和健康材料需要检索、出处与版本，而不是只要一个流畅回答。",
    solved: "把分散文件转成可检索上下文，并保留证据入口。",
    limitation: "召回正确不等于结论正确；专业判断仍需规则与人工确认。",
    next: "继续验证复杂表格、图纸和版本冲突下的证据质量。",
    projects: ["蜀水智库 AI", "康伴 AI", "OpenGov AI OS"],
  },
  {
    name: "Three.js / GIS",
    level: "项目实践",
    usedFor: "蜀水智库 AI",
    why: "工程对象的空间关系需要被看见、定位和操作。",
    solved: "让地图、模型、监测点和风险位置出现在同一语境。",
    limitation: "三维展示本身不会产生决策，必须连接计算和行动。",
    next: "完成一个真实工程对象从监测变化到处置记录的闭环。",
    projects: ["蜀水智库 AI"],
  },
  {
    name: "Vision / Core ML",
    level: "项目实践",
    usedFor: "DanceHolic",
    why: "需要理解身体在时间轴上的变化，而不是只比较两张画面。",
    solved: "提取姿态、动作轨迹并支持端侧处理。",
    limitation: "遮挡、视角、身份切换和舞种差异仍会影响可靠性。",
    next: "把可靠度、动作阶段和教学语言一起纳入反馈。",
    projects: ["DanceHolic"],
  },
  {
    name: "FastAPI",
    level: "深入探索",
    usedFor: "蜀水智库 AI、工程平台原型",
    why: "需要快速连接模型、业务规则、文件和工程数据。",
    solved: "用清晰接口隔离模型能力与产品工作流。",
    limitation: "接口可运行不代表长任务、权限和运维已经可靠。",
    next: "继续补足任务编排、可观测性与失败恢复。",
    projects: ["蜀水智库 AI", "芯片研发 DevOps"],
  },
  {
    name: "React / Next.js / TypeScript",
    level: "深入探索",
    usedFor: "产品门户、交互 Demo 与这个网站",
    why: "复杂信息需要被组织成清晰、可测试、可静态部署的体验。",
    solved: "快速构建多页面、数据驱动和响应式界面。",
    limitation: "前端完整不等于真实业务链路完成。",
    next: "继续提高可访问性、性能和真实任务测试覆盖。",
    projects: ["全部项目"],
  },
  {
    name: "工作流 / Agent",
    level: "深入探索",
    usedFor: "芯片研发 DevOps、OpenGov AI OS",
    why: "需求、工具、设备、审批和报告之间需要连续上下文。",
    solved: "把模型调用放进有状态、可追踪的任务链路。",
    limitation: "自动编排越强，权限、回滚和责任边界越重要。",
    next: "用真实设备与人工审批验证失败恢复和审计链路。",
    projects: ["芯片研发 DevOps", "OpenGov AI OS"],
  },
  {
    name: "PostgreSQL / PostGIS",
    level: "项目实践",
    usedFor: "工程数据、空间对象与权限关系",
    why: "资料、空间对象和业务记录需要稳定、可查询的结构。",
    solved: "把对象、位置、版本和关系放进统一数据模型。",
    limitation: "数据模型只有在持续维护和质量治理下才有价值。",
    next: "验证更复杂的工程版本、时序监测与数据血缘。",
    projects: ["蜀水智库 AI", "OpenGov AI OS"],
  },
  {
    name: "Docker / 内网部署",
    level: "项目实践",
    usedFor: "企业系统与专业数据场景",
    why: "很多数据和模型不能离开组织网络，环境也不总是理想。",
    solved: "让服务和依赖可以被重复构建、迁移和隔离。",
    limitation: "容器化不等于可运营，还需要备份、监控与升级策略。",
    next: "继续验证离线安装、模型替换和长期运维。",
    projects: ["蜀水智库 AI", "OpenGov AI OS", "芯片研发 DevOps"],
  },
];

export const capabilityLevels = ["全部", "使用过", "项目实践", "深入探索", "正在学习"] as const;
