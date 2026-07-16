export type ProjectStage = "产品概念" | "MVP" | "Demo" | "持续研发" | "工程验证" | "企业试点方向";
export type ProjectOrigin = "爱好" | "家庭" | "工作经历" | "身边观察" | "共性思考";
export type EvidenceType = "implemented" | "tested" | "observed" | "hypothesis";

export type ArchitectureNode = { id: string; label: string; layer: string; detail: string };
export type WorkflowStep = { title: string; description: string; output: string };
export type EvidenceItem = { title: string; description: string; type: EvidenceType };
export type WrongTurn = {
  initialBelief: string;
  problem: string;
  rootCause: string;
  change: string;
  learning: string;
};

export type Project = {
  slug: string;
  title: string;
  englishTitle: string;
  tagline: string;
  summary: string;
  originType: ProjectOrigin;
  originLabel: string;
  originStory: string;
  personalConnection: string;
  firstQuestion: string;
  whyICare: string;
  surfaceProblem: string;
  deeperProblem: string;
  industry: string[];
  filters: string[];
  stage: ProjectStage;
  role: string[];
  cover: string;
  accent: string;
  challenge: string[];
  users: string[];
  goals: string[];
  solution: string[];
  features: string[];
  aiCapabilities: string[];
  techStack: string[];
  architecture: ArchitectureNode[];
  workflow: WorkflowStep[];
  highlights: string[];
  tradeoffs: string[];
  completed: string[];
  inProgress: string[];
  hypotheses: string[];
  evidence: EvidenceItem[];
  wrongTurns: WrongTurn[];
  changedBeliefs: string[];
  openQuestions: string[];
  progress: string[];
  nextSteps: string[];
  disclaimer?: string;
  links?: { demo?: string; github?: string; document?: string };
};

const commonArchitecture = (domain: string): ArchitectureNode[] => [
  { id: "experience", label: "多端体验", layer: "体验", detail: "围绕真实任务设计的移动端、门户与可视化界面" },
  { id: "workflow", label: "业务工作流", layer: "编排", detail: `${domain}流程、规则、AI 与人工确认节点` },
  { id: "intelligence", label: "智能能力", layer: "智能", detail: "检索、多模态、工具调用、结构化输出与风险控制" },
  { id: "data", label: "数据与集成", layer: "基础", detail: "业务数据、文件、设备、权限和审计基础设施" },
];

export const projects: Project[] = [
  {
    slug: "danceholic",
    title: "DanceHolic",
    englishTitle: "AI Motion Understanding Dance Coach",
    tagline: "不只告诉我动作不对，而是解释哪里、什么时候、为什么需要调整。",
    summary: "一个从长期练舞体验出发的动作理解与智能剪辑实验，探索姿态、时序、人物追踪和真正可执行的训练反馈。",
    originType: "爱好",
    originLabel: "坚持跳舞三四年",
    originStory: "我有跳舞的爱好，并坚持了三四年。练习和录视频时，我经常只能感觉动作不太对，却很难判断是手臂角度、重心、节奏、核心控制还是动作幅度。",
    personalConnection: "因为我真的跳舞，所以我知道“动作不对”不是一个足够有帮助的反馈。",
    firstQuestion: "能不能让视频不只展示差异，还告诉学习者下一次具体怎样改？",
    whyICare: "这个问题反复出现在我自己的练习里。它不是为了展示计算机视觉，而是我对一个长期困扰自己的问题的回应。",
    surfaceProblem: "教练和学员的动作看起来不一样。",
    deeperProblem: "学习者不知道具体哪里、什么时候、为什么需要调整，也不知道下一次该练什么。",
    industry: ["舞蹈训练", "计算机视觉", "iOS"],
    filters: ["AI", "视觉", "移动端"],
    stage: "MVP",
    role: ["产品设计", "iOS 开发", "视觉算法探索"],
    cover: "",
    accent: "motion",
    challenge: ["动作差异难以被普通学习者准确描述", "多人场景会出现身份切换、半身构图和镜头抖动", "不同身高、视角和速度会影响直接比较"],
    users: ["舞蹈初学者与爱好者", "舞蹈老师", "短视频创作者"],
    goals: ["把笼统分数变成身体部位与时间维度的反馈", "让建议可以直接用于下一次练习", "优先在端侧处理敏感视频"],
    solution: ["教练与学员姿态叠加", "动作阶段与时间轴对齐", "目标身份、构图安全区与镜头规划", "自然语言训练建议"],
    features: ["姿态检测", "动作轨迹", "双人对比", "身体部位偏差", "时间轴对齐", "人物追踪", "智能剪辑", "端侧隐私"],
    aiCapabilities: ["人体姿态估计", "时序动作理解", "目标追踪", "动作反馈生成", "端侧推理"],
    techStack: ["Swift", "SwiftUI", "AVFoundation", "Vision", "Core ML", "Pose Estimation"],
    architecture: commonArchitecture("动作训练"),
    workflow: [
      { title: "视频输入", description: "导入或拍摄教练与学员视频", output: "规范化视频帧" },
      { title: "人物与姿态", description: "锁定目标身份并提取关键点时序", output: "带可靠度的骨架轨迹" },
      { title: "动作对齐", description: "校正速度差异并匹配动作阶段", output: "可比较片段" },
      { title: "理解与反馈", description: "按身体部位和节奏解释差异", output: "可执行建议" },
      { title: "智能剪辑", description: "构图保护、镜头规划和稳定输出", output: "训练或分享视频" },
    ],
    highlights: ["真实练舞经历驱动", "从动作评分转向动作理解", "端侧优先的隐私策略"],
    tradeoffs: ["分数只作线索，反馈必须说明动作与时机", "镜头跟随先保证人物完整和身份稳定", "端侧不足时才考虑受控云端"],
    completed: ["iOS 产品形态与主要动作分析流程", "网页交互 Demo", "公开 motion-tracker 仓库"],
    inProgress: ["多人身份稳定", "动作阶段匹配", "端侧关键点滤波"],
    hypotheses: ["分部位、带时机的反馈比单一总分更能帮助练习", "舞蹈老师能够校准更自然的建议语言"],
    evidence: [
      { title: "长期练舞体验", description: "持续三四年的个人练习与录制观察。", type: "observed" },
      { title: "可运行代码", description: "公开仓库记录动作追踪方向的实现。", type: "implemented" },
      { title: "反馈有效性", description: "尚需舞蹈老师和更多学习者验证。", type: "hypothesis" },
    ],
    wrongTurns: [{ initialBelief: "镜头抖动主要是平滑参数问题。", problem: "调强会滞后，调弱会把身份误判放大成跳变。", rootCause: "追踪、人物隔离、构图和镜头运动被混在同一层处理。", change: "先锁定身份和可靠度，再做构图决策与镜头规划。", learning: "稳定不是一个参数，而是一条分层决策链。" }],
    changedBeliefs: ["动作分析不该止于相似度，而要服务下一次练习。"],
    openQuestions: ["跨视角动作怎样公平比较？", "建议怎样既具体又不打断舞者自己的身体感受？", "多人遮挡时，何时应该停止自动跟随并请求人工选择？"],
    progress: ["MVP 与动作分析流程已形成", "网页结果明确标注为模拟", "复杂遮挡和跨视角仍在探索"],
    nextSteps: ["用多舞种样本验证时间轴对齐", "邀请舞蹈老师校准反馈语言", "建立身份追踪可靠度阈值"],
    disclaimer: "MVP 阶段。网页中的动作偏差与建议为交互演示模拟结果，不构成专业训练或医疗建议。",
    links: { github: "https://github.com/yyubabe-svg/motion-tracker" },
  },
  {
    slug: "silver-economy-ai",
    title: "康伴 AI",
    englishTitle: "AI Chronic Care Companion",
    tagline: "保留爸爸习惯的记录方式，再让照片和数字慢慢变成家人看得懂的信息。",
    summary: "从家庭群里一张张健康记录照片出发，探索面向慢病家庭的识别、整理、趋势解释与授权协同。",
    originType: "家庭",
    originLabel: "爸爸每天发来的健康照片",
    originStory: "我的爸爸有慢性病。他测量血压、血糖后，经常直接拍照发到家庭群里。这个方式简单真实，却让长期趋势、家人协同和就医前整理都变得困难。",
    personalConnection: "我不是先看见银发经济这个赛道，而是先看见爸爸每天怎样记录健康。",
    firstQuestion: "能不能保留拍一张照片、发一句话的习惯，同时让 AI 帮忙识别、整理和提醒？",
    whyICare: "这不是抽象用户画像，而是家里每天都在发生的小事。我希望智能增加理解，而不是增加爸爸的操作负担。",
    surfaceProblem: "健康照片和指标分散，难以连续整理。",
    deeperProblem: "设备中的数字没有变成老人容易理解、家人能够协同、就医时可以使用的信息。",
    industry: ["家庭健康", "慢病管理", "居家照护"],
    filters: ["AI", "移动端"],
    stage: "产品概念",
    role: ["观察与产品定义", "AI 边界设计", "全栈架构"],
    cover: "",
    accent: "care",
    challenge: ["照片和数据散落在设备与聊天记录中", "老人不易理解复杂趋势，家人只能零散查看", "系统必须避免越过医疗安全边界"],
    users: ["有慢病记录需求的中老年人", "子女与家庭照护者", "社区健康服务人员"],
    goals: ["保留拍照、语音等低门槛习惯", "把趋势和就医准备转成可理解信息", "在明确授权下支持家庭协同"],
    solution: ["老人端：拍照、语音、提醒与日报", "家属端：授权摘要与异常提醒", "社区端：风险分层与人工随访"],
    features: ["照片识别", "血压/血糖记录", "趋势摘要", "语音交互", "家属共享", "就医信息整理", "用药提醒", "长者模式"],
    aiCapabilities: ["健康材料识别", "结构化摘要", "趋势解释", "陪伴式问答", "规则与模型结合的风险提示"],
    techStack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "OCR", "RAG", "设备接口"],
    architecture: commonArchitecture("家庭慢病记录"),
    workflow: [
      { title: "沿用习惯", description: "拍照片或说一句今天的记录", output: "原始健康材料" },
      { title: "识别确认", description: "提取指标，低置信度时请求最少确认", output: "结构化记录" },
      { title: "解释趋势", description: "规则先判断边界，模型只做通俗整理", output: "健康日报" },
      { title: "授权协同", description: "由本人决定家属或社区可见范围", output: "提醒与就医信息包" },
    ],
    highlights: ["来自真实家庭记录习惯", "先减少操作再增加智能", "医疗与隐私边界明确"],
    tradeoffs: ["高风险判断规则先行，模型不做诊断", "识别失败必须易于人工纠正", "家属共享遵循本人授权和最小权限"],
    completed: ["真实场景与三端信息架构", "健康记录与趋势摘要概念流程", "医疗边界说明"],
    inProgress: ["照片识别确认交互", "长者模式", "设备接入方案"],
    hypotheses: ["保留拍照习惯比重新学习完整表单更容易持续", "简短日报能够帮助家人形成连续理解"],
    evidence: [
      { title: "家庭记录场景", description: "爸爸通过家庭群发送健康照片的持续观察。", type: "observed" },
      { title: "产品流程", description: "三端信息架构和安全边界已形成。", type: "implemented" },
      { title: "长期使用", description: "尚未完成真实用户持续使用验证。", type: "hypothesis" },
    ],
    wrongTurns: [{ initialBelief: "字段更完整的健康表单会让记录更规范。", problem: "输入越完整，老人每天坚持的成本越高。", rootCause: "把数据完整性放在原有生活习惯之前。", change: "先保留拍照和说话，再让系统后台整理并请求最少确认。", learning: "智能应该适应人的习惯，而不是要求人适应系统。" }],
    changedBeliefs: ["健康产品的第一步不是多收数据，而是尊重记录者的日常。"],
    openQuestions: ["照片识别失败时怎样纠错才不增加负担？", "提醒频率怎样避免制造焦虑？", "家庭共享的授权怎样让老人真正理解和控制？"],
    progress: ["概念验证阶段", "真实设备接入和医学规则库待验证", "没有真实用户规模或商业数据"],
    nextSteps: ["和真实中老年用户验证拍照确认链路", "建立专业顾问审阅机制", "完成最小设备接入"],
    disclaimer: "概念验证阶段。本系统不替代医生、不诊断疾病、不调整药物剂量；高风险情况应及时联系医生或急救机构。页面数据均为演示数据。",
  },
  {
    slug: "chip-devops",
    title: "芯片研发 DevOps",
    englishTitle: "AI-Native Semiconductor R&D Platform",
    tagline: "让需求、代码、设备、测试、缺陷和报告保留连续上下文。",
    summary: "来自三年多端到端嵌入式研发经历的工程平台设想，探索 AI 如何进入完整研发链，而不只停在代码生成。",
    originType: "工作经历",
    originLabel: "三年多端到端嵌入式研发",
    originStory: "我经历过需求分析、软件开发、嵌入式调试、硬件联调、测试验证、缺陷定位、版本交付和报告整理。大量时间并不只花在写代码，而在工具切换、设备操作和上下文同步。",
    personalConnection: "因为我经历过完整研发流程，所以看到的问题不只是代码写得慢，而是整个链路缺少连续上下文。",
    firstQuestion: "AI 能不能连接需求、代码、真实设备、测试、缺陷和审批，而不是只帮助生成一段代码？",
    whyICare: "这些摩擦来自我实际参与过的研发过程。它们影响定位速度、交付可信度，也让大量经验只存在于个别人脑中。",
    surfaceProblem: "研发工具多、反馈慢、日志和报告整理重复。",
    deeperProblem: "数字任务与物理设备、需求与验证、结果与责任之间缺少可追溯的连续上下文。",
    industry: ["嵌入式研发", "芯片验证", "工程 DevOps"],
    filters: ["AI", "工程", "企业系统"],
    stage: "工程验证",
    role: ["问题定义", "产品设计", "平台架构", "Agent 编排"],
    cover: "",
    accent: "silicon",
    challenge: ["代码、EDA、算力、仪器和实验数据割裂", "硬件反馈周期长且依赖资深经验", "需求、设计、测试、缺陷与版本难以完整追溯"],
    users: ["RTL、验证、DFT 与 FPGA 工程师", "嵌入式、实验室与测试工程师", "项目与质量人员"],
    goals: ["连接软件任务与真实硬件测试", "让结果可追踪、可复现、可审计", "用 AI 辅助日志、波形和缺陷分析"],
    solution: ["需求到测试追溯矩阵", "仿真、FPGA 与实验室任务编排", "工具与设备适配器", "AI 工程助手和审计记录"],
    features: ["需求规格", "Git / CI", "仿真回归", "覆盖率", "板级测试", "设备调度", "缺陷追踪", "版本资产", "内网部署"],
    aiCapabilities: ["规格解析", "测试用例辅助", "失败聚类", "日志根因辅助", "历史问题检索", "Agent 工具编排"],
    techStack: ["React", "TypeScript", "FastAPI", "Workflow Engine", "Git/CI", "Artifact Repository", "On-premise"],
    architecture: [
      { id: "portal", label: "研发门户", layer: "接入", detail: "需求、任务、测试、缺陷和追溯入口" },
      { id: "flow", label: "可恢复工作流", layer: "编排", detail: "长周期任务、依赖、重试、审批和状态" },
      { id: "tools", label: "Git / EDA / Compute", layer: "数字工具", detail: "代码、仿真、综合、算力和许可证" },
      { id: "lab", label: "设备网关", layer: "物理世界", detail: "仪器、FPGA 板卡和样片测试" },
      { id: "assets", label: "研发资产与审计", layer: "证据", detail: "日志、波形、固件、报告和可复现环境" },
    ],
    workflow: [
      { title: "需求与提交", description: "规格、代码和版本建立关联", output: "可追踪变更" },
      { title: "仿真与分析", description: "任务编排后聚类失败并保留证据", output: "候选根因" },
      { title: "缺陷闭环", description: "关联模块、提交、测试和责任人", output: "结构化缺陷" },
      { title: "板级验证", description: "调用设备网关并回传环境与测量值", output: "硬件测试资产" },
      { title: "追溯更新", description: "更新需求—设计—测试—缺陷关系", output: "审计链路" },
    ],
    highlights: ["来自真实端到端研发经历", "连接数字任务与物理设备", "上下文和证据优先"],
    tradeoffs: ["AI 只给候选分析，不覆盖工程签核", "长任务使用可恢复状态机", "敏感代码与波形内网处理"],
    completed: ["端到端流程建模", "动态研发流水线 Demo", "适配器和追溯架构"],
    inProgress: ["开源 RTL 回归样例", "设备网关协议抽象", "失败恢复"],
    hypotheses: ["连续上下文能减少重复整理与定位成本", "设备状态应成为测试结果的一等资产"],
    evidence: [
      { title: "三年多研发经历", description: "需求到交付、软件到硬件联调的持续工作观察。", type: "observed" },
      { title: "交互流水线", description: "已实现可操作的模拟流程，用于验证信息结构。", type: "tested" },
      { title: "真实芯片团队效果", description: "尚未以真实生产流程验证。", type: "hypothesis" },
    ],
    wrongTurns: [{ initialBelief: "把软件 CI 做完整，就能覆盖大部分研发反馈。", problem: "很多问题只在板卡、仪器和特定环境中出现。", rootCause: "物理设备状态没有进入数字任务上下文。", change: "把设备网关、环境快照和测量结果纳入追溯链。", learning: "硬件研发的 DevOps 必须同时管理代码和现实世界。" }],
    changedBeliefs: ["AI 工程助手的价值不止生成代码，而是保持跨工具和设备的上下文。"],
    openQuestions: ["不同 EDA 与设备协议怎样形成稳定适配层？", "AI 候选根因怎样呈现才不会诱导工程师？", "长周期任务如何在失败后可靠恢复？"],
    progress: ["平台架构和动态流水线处于工程验证", "设备与 EDA 接入使用模拟验证", "没有量产或商业成果数据"],
    nextSteps: ["接入开源 RTL 回归样例", "完成模拟设备网关", "验证追溯矩阵查询"],
    disclaimer: "工程验证阶段。流水线、日志、覆盖率和测试结果为模拟数据，仅用于展示产品逻辑。",
  },
  {
    slug: "water-digital-twin",
    title: "蜀水智库 AI",
    englishTitle: "Smart Water Engineering Intelligence Platform",
    tagline: "把资料、计算、空间模型和监测变化放进同一条工程判断链。",
    summary: "基于对水利勘测设计院工作流的持续接触与观察，探索可溯源知识、GIS、数字孪生和工程工具怎样真正进入日常任务。",
    originType: "身边观察",
    originLabel: "持续接触工程工作流",
    originStory: "来自我对水利勘测设计院日常工程工作流、资料检索、专业计算、GIS、三维模型、实时监测和项目协同问题的持续接触与观察。",
    personalConnection: "我不是水利专家。我更在意怎样进入专业场景、听懂角色与流程，并对专业边界保持尊重。",
    firstQuestion: "AI、GIS 和三维模型能不能从资料展示走进工程分析、复核与行动？",
    whyICare: "这个项目训练我在陌生专业场景里先理解现有工作，再决定技术应该放在哪里。",
    surfaceProblem: "规范、档案、地图、模型和监测数据散落在不同系统。",
    deeperProblem: "信息能被看见，却没有形成带出处、计算条件、责任边界和行动记录的决策闭环。",
    industry: ["水利工程", "GIS", "数字孪生"],
    filters: ["AI", "工程", "企业系统", "数字孪生"],
    stage: "持续研发",
    role: ["场景理解", "产品架构", "全栈开发", "AI / GIS"],
    cover: "",
    accent: "water",
    challenge: ["行业资料与历史项目分散", "GIS、模型、监测、计算和项目管理割裂", "许多数字孪生只展示，不进入判断"],
    users: ["水利设计工程师", "项目负责人", "专业专家", "管理与防汛值守人员"],
    goals: ["建立带出处和页码的可信知识入口", "连接 GIS、模型、监测和专业计算", "让 AI 参与分析但保留人工复核"],
    solution: ["工程知识库与规范溯源", "GIS 和三维模型联动", "监测变化与风险场景", "多角色门户和审计"],
    features: ["知识入库", "规范问答", "合规初审", "专业计算", "GIS 地图", "三维孪生", "风险预警", "AI 摘要", "权限审计"],
    aiCapabilities: ["可溯源 RAG", "工程文件解析", "工具调用", "合规辅助", "工程摘要"],
    techStack: ["FastAPI", "React", "TypeScript", "PostgreSQL", "PostGIS", "FAISS", "Three.js", "Docker", "MQTT"],
    architecture: [
      { id: "portal", label: "多角色工程门户", layer: "体验", detail: "设计、管理、专家与值守角色各取所需" },
      { id: "space", label: "GIS / Model / Twin", layer: "空间", detail: "工程对象、地形、模型和监测点统一定位" },
      { id: "agent", label: "RAG + 工程工具", layer: "智能", detail: "检索依据、调用计算并生成可溯源结果" },
      { id: "adapter", label: "工程适配器", layer: "集成", detail: "GeoJSON、Excel、IFC、实时设备和专业软件" },
      { id: "infra", label: "PostGIS / 内网", layer: "基础", detail: "空间数据、权限、审计与私有部署" },
    ],
    workflow: [
      { title: "工程资料入库", description: "解析规范、报告和空间数据", output: "可检索工程资产" },
      { title: "专业分析", description: "检索依据并调用受约束工具", output: "带条件的候选结果" },
      { title: "孪生联动", description: "监测变化映射到空间对象与风险点", output: "场景态势" },
      { title: "人工复核", description: "核查出处、计算条件和影响范围", output: "确认或退回" },
      { title: "行动留痕", description: "记录摘要、责任人与处置过程", output: "工程证据链" },
    ],
    highlights: ["持续接触专业工作流", "知识、空间、监测与计算联动", "从展示转向决策闭环"],
    tradeoffs: ["AI 输出必须展示出处和计算条件", "实时链路与档案分层", "内网可用性优先"],
    completed: ["知识问答、GIS 门户和数字孪生方向", "公开用户手册", "场景切换交互 Demo"],
    inProgress: ["一个真实工程数据闭环", "角色权限矩阵", "专业工具适配"],
    hypotheses: ["把空间对象与证据链放在一起能帮助工程复核", "监测变化应触发明确的人工行动而不只改变颜色"],
    evidence: [
      { title: "工作流观察", description: "持续接触资料、计算、GIS、模型与协同问题。", type: "observed" },
      { title: "系统与手册", description: "已有公开仓库、产品界面和用户手册。", type: "implemented" },
      { title: "实时联动", description: "当前使用模拟数据验证方向。", type: "tested" },
      { title: "工程决策效果", description: "是否真正改善专业复核仍需真实工程链路验证。", type: "hypothesis" },
    ],
    wrongTurns: [{ initialBelief: "清晰可旋转的三维模型已经接近数字孪生。", problem: "工程人员仍需要回到多个系统完成判断。", rootCause: "模型没有连接监测、计算、证据与行动。", change: "围绕一个异常场景补齐分析、复核和留痕。", learning: "空间可视化是入口，决策闭环才是孪生价值。" }],
    changedBeliefs: ["进入专业场景时，尊重边界和保留证据比让 AI 显得聪明更重要。"],
    openQuestions: ["怎样定义数字孪生最小但真实的闭环？", "专业计算失败或条件不完整时怎样安全退回？", "模拟链路何时足够，何时必须等待真实数据？"],
    progress: ["持续研发", "系统集成采用适配器分阶段验证", "实时联动当前使用模拟数据"],
    nextSteps: ["选择一个工程对象完成真实数据闭环", "细化角色权限", "验证一个专业工具适配器"],
    disclaimer: "持续研发阶段。演示中的水位、风险点和工程摘要均为模拟数据，不代表真实工程结论。",
    links: { demo: "/demos/shushui-ai/user-manual.html", github: "https://github.com/yyubabe-svg/Yubabe_shui", document: "/demos/shushui-ai/user-manual.html" },
  },
  {
    slug: "opengov-ai-os",
    title: "OpenGov AI OS",
    englishTitle: "Configurable Enterprise AI Operating System",
    tagline: "把多次构建中反复出现的配置、工具、流程和治理问题放进一套可组合底座。",
    summary: "不是凭空想象一个宏大平台，而是从多个系统里逐渐归纳出知识、Agent、权限、审计和工作流的共性。",
    originType: "共性思考",
    originLabel: "多次构建之后的归纳",
    originStory: "做过多个系统后，我逐渐发现不同组织都需要知识库、Agent、权限和审计，但行业、角色、数据与流程又各不相同，每次从头搭建成本很高。",
    personalConnection: "它记录的是我如何从具体项目中寻找可复用部分，也提醒我不要把共性过早抽象成一个宏大平台。",
    firstQuestion: "能不能用受约束的行业配置、插件、Agent 和工作流，生成真正适合不同组织的 AI 系统？",
    whyICare: "反复构建让我看到，真正值得复用的不是聊天框外观，而是配置、工具、数据和治理能力。",
    surfaceProblem: "不同组织反复建设相似的 AI 门户。",
    deeperProblem: "标准化与个性化、能力组合与治理边界之间缺少可验证的产品模型。",
    industry: ["组织 AI", "配置平台", "私有部署"],
    filters: ["AI", "工程", "企业系统"],
    stage: "企业试点方向",
    role: ["共性归纳", "产品架构", "全栈开发"],
    cover: "",
    accent: "platform",
    challenge: ["每个组织的权限、流程和数据不同", "聊天框难以承载真实业务", "模型、工具、合规和运营彼此割裂"],
    users: ["政府与国企组织", "工程设计院", "咨询和大型组织内部部门"],
    goals: ["通过配置生成受约束的组织门户", "统一管理 RAG、Agent、工具和工作流", "支持私有模型、数据权限和审计"],
    solution: ["部署主体和行业模板", "JSON Schema 驱动门户", "插件与工作流组合", "模型网关和治理基础设施"],
    features: ["行业配置", "配置驱动 UI", "多租户", "RBAC", "审计", "文档解析", "RAG", "Agent", "插件", "模型切换", "私有部署"],
    aiCapabilities: ["RAG", "多 Agent", "Function Calling", "文档解析", "模型路由", "数据分析"],
    techStack: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Vector DB", "MCP", "Docker"],
    architecture: [
      { id: "portal", label: "组织门户", layer: "体验", detail: "由配置生成的导航、角色和应用" },
      { id: "config", label: "Industry Config", layer: "配置", detail: "Schema 约束 UI、角色、Agent 和数据源" },
      { id: "market", label: "Agent / Plugin", layer: "能力", detail: "可治理的工具、工作流和模板" },
      { id: "gateway", label: "Model & Tool Gateway", layer: "网关", detail: "模型路由、协议集成、成本和安全策略" },
      { id: "govern", label: "RBAC / Audit / Ops", layer: "治理", detail: "租户隔离、数据权限、审计与监控" },
    ],
    workflow: [
      { title: "选择主体", description: "确定个人、企业或部门边界", output: "租户基线" },
      { title: "加载行业", description: "选择并审阅行业模板", output: "受约束配置" },
      { title: "组合能力", description: "选择知识、Agent、流程和插件", output: "能力清单" },
      { title: "生成门户", description: "预览角色、导航、工具和数据源", output: "可测试门户" },
      { title: "治理与迭代", description: "记录权限、使用、成本和版本", output: "运营证据" },
    ],
    highlights: ["来自多个项目的共性归纳", "配置自由受 Schema 和治理约束", "明确处于方向验证"],
    tradeoffs: ["配置自由度必须受版本治理", "插件隔离优先于数量", "模型可替换，业务资产保持稳定"],
    completed: ["行业配置模型", "交互式门户配置器", "私有化架构方向"],
    inProgress: ["配置 Schema v0.1", "插件权限沙箱", "最小行业模板"],
    hypotheses: ["一套受约束配置可以覆盖多个组织的共性需要", "组织愿意为治理和可运营性而非聊天外观采用平台"],
    evidence: [
      { title: "重复需求", description: "在多个系统中观察到知识、权限、Agent 和审计的共性。", type: "observed" },
      { title: "可交互配置器", description: "已实现门户生成逻辑的演示。", type: "tested" },
      { title: "组织采用", description: "尚无真实部署或商业订单证据。", type: "hypothesis" },
    ],
    wrongTurns: [{ initialBelief: "把常用模块做成可配置项，就能支持不同组织。", problem: "配置越自由，版本、权限和体验越难维护。", rootCause: "只看到复用，没有先定义不可突破的产品约束。", change: "用 Schema、模板版本和权限策略约束组合空间。", learning: "平台价值来自可治理的复用，而不是无限配置。" }],
    changedBeliefs: ["平台不是先做大，而是从一条共性链路被重复验证后再抽象。"],
    openQuestions: ["应该标准化多少，又保留多少组织差异？", "插件市场怎样同时保证扩展性和安全？", "第一个最值得验证的行业模板是什么？"],
    progress: ["配置模型和门户生成持续设计", "真实组织部署和商业订单尚未验证", "所有演示组织和数据均为模拟"],
    nextSteps: ["冻结最小 Schema", "选择一个模板完成端到端验证", "实现插件权限边界"],
    disclaimer: "方向验证阶段。配置器中的组织、角色、工具和数据源均为模拟，不代表真实客户或商业部署。",
  },
];

export const projectOriginFilters = ["全部", "爱好", "家庭", "工作经历", "身边观察", "共性思考"] as const;
export const projectTechFilters = ["全部技术", "AI", "视觉", "工程", "移动端", "企业系统", "数字孪生"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function filterProjects(origin: string, technology = "全部技术") {
  return projects.filter((project) => {
    const matchesOrigin = origin === "全部" || project.originType === origin;
    const matchesTechnology = technology === "全部技术" || project.filters.includes(technology);
    return matchesOrigin && matchesTechnology;
  });
}
