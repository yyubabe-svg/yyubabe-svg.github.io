export type ProjectStage = "产品概念" | "MVP" | "Demo" | "持续研发" | "工程验证" | "企业试点方向";

export type ArchitectureNode = { id: string; label: string; layer: string; detail: string };
export type WorkflowStep = { title: string; description: string; output: string };

export type Project = {
  slug: string; title: string; englishTitle: string; tagline: string; summary: string;
  industry: string[]; filters: string[]; stage: ProjectStage; role: string[]; year?: string;
  cover: string; accent: string; challenge: string[]; users: string[]; goals: string[];
  solution: string[]; features: string[]; aiCapabilities: string[]; techStack: string[];
  architecture: ArchitectureNode[]; workflow: WorkflowStep[]; highlights: string[];
  tradeoffs: string[]; progress: string[]; nextSteps: string[]; disclaimer?: string;
  links?: { demo?: string; github?: string; document?: string };
};

const commonArchitecture = (domain: string): ArchitectureNode[] => [
  { id: "experience", label: "多端体验层", layer: "体验", detail: "围绕角色和任务设计的门户、移动端与可视化界面" },
  { id: "workflow", label: "业务工作流", layer: "编排", detail: `${domain}流程、规则、Agent 与人工确认节点` },
  { id: "ai", label: "AI 能力层", layer: "智能", detail: "RAG、多模态、工具调用、结构化输出与风险控制" },
  { id: "data", label: "数据与集成", layer: "基础", detail: "业务数据、文件、设备、权限和审计基础设施" },
];

export const projects: Project[] = [
  {
    slug: "silver-economy-ai", title: "康伴 AI", englishTitle: "AI Chronic Care Companion",
    tagline: "把复杂健康数据，变成老人看得懂、家属接得住的日常陪伴。",
    summary: "面向中老年慢病人群的指标管理、日常陪伴与家庭协同产品，探索微信小程序、Android、家属端和社区端的多端协作。",
    industry: ["银发经济", "慢病管理", "居家养老"], filters: ["AI", "健康", "移动应用", "企业平台"], stage: "产品概念",
    role: ["产品设计", "AI 能力设计", "全栈架构"], cover: "/projects/silver-economy/cover.webp", accent: "care",
    challenge: ["健康数据散落在设备和应用中，记录负担高", "复杂指标难理解，家属又难以及时获知风险", "建议必须克制，避免越过医疗安全边界"],
    users: ["糖尿病、高血压等慢病患者", "退休后进行日常健康管理的中老年人", "子女与家庭照护者", "社区健康服务人员"],
    goals: ["用大字号和语音降低每日记录门槛", "将趋势、异常和就医准备转化为可理解行动", "建立老人、家属与社区健康管理的协同闭环"],
    solution: ["老人端：记录、提醒、日报与陪伴式问答", "家属端：经授权查看摘要、异常与就医准备", "社区端：风险分层、随访队列与审计记录"],
    features: ["血压/血糖/心率记录", "趋势图与异常提醒", "运动饮食睡眠陪伴", "语音交互与长者模式", "家属共享与紧急联系人", "就医前信息整理", "慢病知识问答", "用药提醒"],
    aiCapabilities: ["自然语言健康问答", "健康数据摘要", "趋势解释", "个性化提醒", "多模态材料解析", "规则+模型风险提示"],
    techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "RAG", "可穿戴设备接口", "私有化部署"],
    architecture: commonArchitecture("慢病管理"),
    workflow: [
      { title: "采集", description: "手动、语音或设备同步健康指标", output: "结构化健康记录" },
      { title: "解释", description: "规则先行判断风险，模型生成易懂摘要", output: "健康日报" },
      { title: "协同", description: "按授权同步给家属或社区人员", output: "提醒与随访任务" },
      { title: "就医", description: "整理近期趋势、症状和用药记录", output: "就医信息包" },
    ],
    highlights: ["老人端、家属端、社区端三端协同", "以可理解性而非信息密度为优先", "区域化或私有化部署设想"],
    tradeoffs: ["规则负责高风险边界，模型只做解释与整理", "家属共享必须由本人授权并支持最小权限", "提醒要有价值，避免告警疲劳"],
    progress: ["用户旅程与三端信息架构已形成概念方案", "健康问答与趋势摘要处于概念验证", "真实设备接入和医学规则库待验证"],
    nextSteps: ["与真实用户验证长者模式", "建立临床顾问审阅机制", "完成可穿戴设备最小接入链路"],
    disclaimer: "概念验证阶段。本系统不代替医生，不诊断疾病、不调整药物剂量；高风险情况应及时联系医生或急救机构。页面数据均为演示数据。",
  },
  {
    slug: "water-digital-twin", title: "蜀水智库 AI", englishTitle: "Smart Water Engineering Intelligence Platform",
    tagline: "从展示型数字孪生，走向能理解工程、驱动判断的决策平台。",
    summary: "面向水利电力勘测设计院的 AI 工程设计、GIS、数字孪生和项目管理平台，将规范、计算、空间数据、模型与实时监测统一进工程工作流。",
    industry: ["智慧水利", "工程设计", "数字孪生"], filters: ["AI", "工程", "数字孪生", "企业平台"], stage: "持续研发",
    role: ["产品架构", "全栈开发", "AI/RAG", "GIS/三维"], cover: "/projects/water-digital-twin/cover.webp", accent: "water",
    challenge: ["规范、档案和历史项目分散，检索效率低", "GIS、BIM、监测、计算软件和项目管理割裂", "许多数字孪生只展示，不进入工程决策"],
    users: ["水利设计工程师", "项目负责人", "地质与水文专家", "管理者与防汛值守人员"],
    goals: ["建立带出处页码的可信工程知识入口", "打通 GIS、三维模型、监测数据和专业计算", "让 AI 参与分析、合规初审、预警与工程摘要"],
    solution: ["工程知识库与规范溯源", "GIS 与三维模型联动", "监测数据驱动风险场景", "多角色门户与项目 KPI 驾驶舱"],
    features: ["资料上传与知识入库", "规范/档案/预案问答", "设计说明书合规初审", "水利专业计算", "GIS 工程地图", "三维数字孪生", "风险预警", "AI 工程摘要", "权限与审计", "工程文件导入"],
    aiCapabilities: ["可溯源 RAG", "工程文件解析", "Agent 工具调用", "合规辅助检查", "实时工程摘要", "多模态分析"],
    techStack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "PostGIS", "FAISS", "Three.js", "Mapbox", "Docker", "MQTT"],
    architecture: [
      { id: "portal", label: "多角色工程门户", layer: "体验", detail: "设计、管理、专家与防汛角色各取所需" },
      { id: "twin", label: "GIS / BIM / Twin", layer: "空间", detail: "工程对象、地形、模型与监测点统一定位" },
      { id: "agent", label: "RAG + 工程 Agent", layer: "智能", detail: "检索规范、调用计算工具、生成可溯源结果" },
      { id: "adapter", label: "工程适配器", layer: "集成", detail: "HEC-RAS、SWMM、IFC、GeoJSON、Excel 与实时设备" },
      { id: "infra", label: "PostGIS / 内网基础设施", layer: "基础", detail: "空间数据、向量索引、权限审计和私有部署" },
    ],
    workflow: [
      { title: "工程文件入库", description: "解析规范、报告、GeoJSON 与模型元数据", output: "可检索工程资产" },
      { title: "专业分析", description: "Agent 检索依据并调用水利计算工具", output: "带依据的分析结果" },
      { title: "孪生联动", description: "监测变化映射到地图、模型和风险点", output: "场景态势" },
      { title: "决策闭环", description: "AI 摘要变化、影响和建议处置路径", output: "待人工确认的行动" },
    ],
    highlights: ["工程全生命周期数据地图", "GIS、三维、监测和知识联动", "从展示型升级为决策型数字孪生"],
    tradeoffs: ["AI 输出必须展示出处和计算条件", "实时链路与离线工程档案分层处理", "内网可用性优先于外部模型便利性"],
    progress: ["知识问答、GIS 门户与数字孪生方向持续研发", "系统集成采用适配器分阶段验证", "实时监测与三维联动使用模拟数据验证"],
    nextSteps: ["完成一个真实工程数据闭环", "细化角色权限矩阵", "验证 HEC-RAS / SWMM 任务适配"],
    disclaimer: "持续研发阶段。交互演示中的水位、风险点和工程摘要均为模拟数据，不代表真实工程结论。",
    links: { demo: "/demos/shushui-ai/user-manual.html", github: "https://github.com/yyubabe-svg/Yubabe_shui", document: "/demos/shushui-ai/user-manual.html" },
  },
  {
    slug: "chip-devops", title: "SiliconFlow DevOps", englishTitle: "AI-Native Semiconductor R&D Platform",
    tagline: "把代码、EDA、算力、实验室设备与样片结果连成可追溯的研发流水线。",
    summary: "面向芯片研发、验证、实验室测试和量产协同的全流程工程 DevOps 平台，强调真实硬件反馈、可复现资产与严格审计。",
    industry: ["半导体", "研发效能", "工程 DevOps"], filters: ["AI", "工程", "芯片", "企业平台"], stage: "工程验证",
    role: ["产品设计", "平台架构", "Agent 编排"], cover: "/projects/chip-devops/cover.webp", accent: "silicon",
    challenge: ["EDA、代码、算力、实验室仪器与实验数据割裂", "硬件反馈周期长，失败定位依赖资深经验", "需求、设计、测试、缺陷和版本缺少完整追溯"],
    users: ["芯片架构师与 RTL 工程师", "验证、DFT、FPGA 与后端工程师", "实验室和测试工程师", "项目、质量与量产协同人员"],
    goals: ["将软件任务与真实硬件测试打通", "让每个结果可追踪、可复现、可审计", "用 AI 辅助日志、波形、缺陷与风险分析"],
    solution: ["需求到测试的追溯矩阵", "统一仿真、回归、FPGA 和实验室任务编排", "EDA/仪器适配器与算力许可证调度", "AI 工程助手与研发效能看板"],
    features: ["需求规格与 IP 管理", "Git / RTL 自动检查", "仿真与回归编排", "覆盖率分析", "FPGA 构建和板级测试", "实验室设备调度", "缺陷与版本管理", "追溯矩阵", "算力与许可证管理", "全内网部署"],
    aiCapabilities: ["规格解析", "测试用例辅助生成", "失败聚类", "日志根因辅助分析", "波形异常辅助", "缺陷去重", "历史问题检索", "Agent 工具编排"],
    techStack: ["React", "TypeScript", "FastAPI", "Workflow Engine", "Git/CI", "Artifact Repository", "Data Lake", "On-premise"],
    architecture: [
      { id: "web", label: "Web Portal / API Gateway", layer: "接入", detail: "研发角色统一入口与开放接口" },
      { id: "flow", label: "Workflow Engine", layer: "编排", detail: "依赖、重试、审批与长周期任务状态机" },
      { id: "tools", label: "Git / EDA / Compute", layer: "工具", detail: "代码、仿真、综合与算力许可证适配" },
      { id: "lab", label: "Lab Device Gateway", layer: "物理", detail: "仪器、FPGA 板卡与样片测试任务" },
      { id: "asset", label: "Artifacts / Data Lake", layer: "资产", detail: "日志、波形、报告、固件和可复现环境" },
      { id: "copilot", label: "AI Copilot + Audit", layer: "治理", detail: "辅助分析、权限、审计与可观测性" },
    ],
    workflow: [
      { title: "RTL 提交", description: "提交触发规则、静态检查与仿真队列", output: "可追踪构建" },
      { title: "仿真失败", description: "AI 聚类日志并给出带证据的定位建议", output: "候选根因" },
      { title: "缺陷闭环", description: "自动关联规格、提交、测试与责任模块", output: "结构化缺陷" },
      { title: "板级验证", description: "调用实验室网关，回传测量值与波形", output: "硬件测试资产" },
      { title: "追溯更新", description: "更新需求—设计—测试—缺陷矩阵", output: "审计链路" },
    ],
    highlights: ["覆盖 CPU/GPU/MCU/SoC/FPGA 等多类研发流程", "连接数字任务与物理实验室", "长周期、资源约束和知识产权优先"],
    tradeoffs: ["AI 只提供候选分析，不覆盖工程签核", "长任务采用可恢复状态机而非普通 CI Job", "敏感波形与 RTL 全程内网处理"],
    progress: ["平台架构与动态流水线处于工程验证", "EDA 与仪器接入采用适配器模拟验证", "尚未形成真实量产数据结论"],
    nextSteps: ["接入一个开源 RTL 回归样例", "完成实验室设备协议抽象", "验证追溯矩阵的审计查询"],
    disclaimer: "工程验证阶段。流水线、覆盖率、日志和测试结果为模拟数据，仅用于展示产品逻辑。",
  },
  {
    slug: "danceholic", title: "DanceHolic", englishTitle: "AI Motion Understanding Dance Coach",
    tagline: "不只给动作打分，而是解释身体哪里、何时、为什么需要调整。",
    summary: "基于人体姿态、视频理解和智能剪辑的 AI 舞蹈训练应用，探索端侧计算下的动作对齐、目标跟踪和可执行反馈。",
    industry: ["运动科技", "计算机视觉", "iOS"], filters: ["AI", "计算机视觉", "移动应用"], stage: "MVP",
    role: ["iOS 开发", "交互设计", "视觉算法"], cover: "/projects/danceholic/cover.webp", accent: "motion",
    challenge: ["学习者难以从视频中发现细节错误", "多人场景目标容易丢失，自动剪辑出现半身与抖动", "不同身高、镜头和速度影响动作比较"],
    users: ["舞蹈初学者与爱好者", "舞蹈老师", "短视频创作者", "训练机构"],
    goals: ["从分数升级为身体部位与时间维度的动作理解", "让反馈具体到可执行训练建议", "优先在端侧完成敏感视频处理"],
    solution: ["教练与学员骨架对齐", "时序动作匹配与关键动作识别", "目标跟踪、构图安全区和镜头平滑", "自然语言训练建议与历史记录"],
    features: ["人体姿态检测", "动作轨迹提取", "双人动作对比", "身体部位误差", "时间轴对齐", "多人目标识别", "单人智能剪辑", "镜头跟随与稳定", "多画幅输出", "隐私保护"],
    aiCapabilities: ["姿态估计", "时序动作理解", "目标追踪", "动作完成度分析", "训练建议生成", "端侧推理"],
    techStack: ["Swift", "SwiftUI", "AVFoundation", "Vision", "Core ML", "Pose Estimation", "Video Processing"],
    architecture: commonArchitecture("动作训练"),
    workflow: [
      { title: "视频输入", description: "导入或拍摄教练与学员视频", output: "规范化视频帧" },
      { title: "姿态提取", description: "检测骨架并跟踪目标人物", output: "关键点时序" },
      { title: "时序对齐", description: "校正速度差异并匹配关键动作", output: "动作片段对" },
      { title: "动作理解", description: "分部位计算偏差并关联节奏", output: "可执行建议" },
      { title: "智能剪辑", description: "目标跟随、构图保护和镜头平滑", output: "训练或分享视频" },
    ],
    highlights: ["骨架叠加与部位偏差可视化", "动作与节奏双时间轴", "本地优先的视频隐私策略"],
    tradeoffs: ["分数只作线索，反馈必须说明动作与时机", "跟随镜头优先保证人体完整与稳定", "端侧性能不足时才选择受控云端分析"],
    progress: ["iOS 产品形态与动作分析流程进入 MVP", "网页演示呈现交互逻辑，结果为模拟", "复杂多人遮挡和跨视角鲁棒性持续探索"],
    nextSteps: ["用多舞种样本验证时间轴对齐", "优化端侧关键点滤波", "邀请舞蹈老师校准建议语言"],
    disclaimer: "MVP 阶段。动作偏差与建议为交互演示模拟结果，不构成专业训练或医疗建议。",
    links: { github: "https://github.com/yyubabe-svg/Yubabe_shui" },
  },
  {
    slug: "opengov-ai-os", title: "OpenGov AI OS", englishTitle: "Configurable Enterprise AI Operating System",
    tagline: "用行业配置、工具与 Agent 组合，生成组织真正需要的 AI 门户。",
    summary: "面向政府、国企、设计院和咨询机构的可配置、可私有化部署行业 AI 操作系统，通过配置驱动 UI、能力、权限与数据连接。",
    industry: ["政企数字化", "企业 AI", "平台产品"], filters: ["AI", "工程", "企业平台"], stage: "企业试点方向",
    role: ["产品战略", "系统架构", "全栈开发"], cover: "/projects/opengov-ai-os/cover.webp", accent: "platform",
    challenge: ["每个组织的行业、权限、流程与数据不同", "单一聊天机器人难以承载复杂业务", "模型、知识、工具、合规与运营能力彼此割裂"],
    users: ["政府机关与国企集团", "水利、电力、市政、交通设计院", "咨询公司与能源企业", "大型组织内部部门"],
    goals: ["通过配置快速生成不同组织的 AI 门户", "把 RAG、Agent、工作流和工具纳入统一治理", "支持私有模型、数据权限、审计和成本运营"],
    solution: ["部署主体与行业模板选择", "JSON 驱动导航、模块、Agent 与角色", "插件市场与工作流编排", "模型供应商切换和私有化基础设施"],
    features: ["行业配置 JSON", "配置驱动 UI", "多租户与组织架构", "RBAC / 数据权限 / 审计", "多格式文档解析", "RAG 知识库", "多 Agent 与工具市场", "工作流编排", "模型切换", "MCP 扩展", "运维与 Token 管理"],
    aiCapabilities: ["流式对话", "RAG", "多 Agent 调用", "Function Calling", "文档解析", "模型路由", "数据分析 Agent"],
    techStack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Vector DB", "MCP", "Docker", "On-premise"],
    architecture: [
      { id: "tenant", label: "Tenant Portal", layer: "门户", detail: "配置生成的导航、工作台与行业应用" },
      { id: "config", label: "Industry Config", layer: "配置", detail: "JSON Schema 驱动 UI、角色、Agent 和数据源" },
      { id: "market", label: "Agent / Plugin Market", layer: "能力", detail: "可治理的 Agent、工具、工作流和应用模板" },
      { id: "gateway", label: "Model & Tool Gateway", layer: "网关", detail: "模型路由、MCP/API 集成、用量与安全策略" },
      { id: "govern", label: "RBAC / Audit / Ops", layer: "治理", detail: "租户隔离、数据权限、审计、监控与成本" },
      { id: "infra", label: "Private AI Infrastructure", layer: "基础", detail: "本地模型、知识库、对象存储与内网部署" },
    ],
    workflow: [
      { title: "选择主体", description: "个人、企业或部门决定租户边界", output: "部署基线" },
      { title: "选择行业", description: "加载政府、国企、设计院等模板", output: "行业配置" },
      { title: "组合能力", description: "选择 RAG、Agent、分析与审批能力", output: "能力清单" },
      { title: "配置插件", description: "连接文件、业务系统和标准工具协议", output: "工具与数据源" },
      { title: "生成门户", description: "预览导航、角色、模块和部署方式", output: "可迭代门户" },
    ],
    highlights: ["一套底座支持多个垂直行业", "JSON Schema 驱动门户与能力", "从 Demo 向可运营、可治理产品演进"],
    tradeoffs: ["配置自由度必须受 Schema 和版本治理约束", "插件隔离与权限检查优先于接入数量", "模型可替换，业务资产与审计链路保持稳定"],
    progress: ["行业模板、配置模型与门户生成处于持续设计", "可交互配置器用于验证产品逻辑", "真实组织部署与商业订单待补充"],
    nextSteps: ["冻结行业配置 Schema v0.1", "实现插件权限沙箱", "选择一个垂直模板完成端到端试点验证"],
    disclaimer: "企业试点方向。配置器中的组织、角色、Agent 与数据源均为演示配置，不代表已落地客户。",
  },
];

export const projectFilters = ["全部", "AI", "工程", "数字孪生", "健康", "芯片", "计算机视觉", "企业平台", "移动应用"] as const;

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
export function filterProjects(filter: string) { return filter === "全部" ? projects : projects.filter((project) => project.filters.includes(filter)); }
