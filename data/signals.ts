export type ProjectSignal = {
  slug: string;
  index: string;
  title: string;
  englishTitle: string;
  signal: string;
  scan: string;
  origin: string;
  tension: string[];
  coreQuestion: string;
  systemSummary: string;
  state: string;
  implemented: string[];
  tested: string[];
  simulated: string[];
  assumptions: string[];
  openQuestions: string[];
  signalColor: string;
  accent: "motion" | "care" | "silicon" | "water" | "civic";
};

export const signals: ProjectSignal[] = [
  {
    slug: "danceholic",
    index: "01",
    title: "DanceHolic",
    englishTitle: "MOVEMENT",
    signal: "为什么我们能看见动作不同，\n却无法准确描述差异？",
    scan: "3–4 YEARS OF DANCE · ANGLE / RHYTHM / BALANCE / CONTROL",
    origin: "三四年的舞蹈练习",
    tension: ["动作可以被量化，但舞蹈表达不能被统一标准化", "自动建议可以降低门槛，错误建议也可能固化错误动作"],
    coreQuestion: "怎样把身体的差异转成具体但不过度武断的练习提示？",
    systemSummary: "姿态识别、时序对齐、动作解释、智能剪辑",
    state: "MVP / IN REVISION",
    implemented: ["iOS 产品形态与主要动作分析流程", "网页交互 Demo", "公开 motion-tracker 仓库"],
    tested: ["以个人练舞片段检查信息结构", "对比不同平滑参数对镜头跟随的影响"],
    simulated: ["网页中的动作偏差、评分和自然语言建议"],
    assumptions: ["分部位、带时机的反馈比单一总分更有帮助", "舞蹈老师能够校准更自然的建议语言"],
    openQuestions: ["跨视角动作怎样公平比较？", "建议怎样具体，又不打断舞者自己的身体感受？"],
    signalColor: "#D45CFF",
    accent: "motion",
  },
  {
    slug: "silver-economy-ai",
    index: "02",
    title: "康伴 AI",
    englishTitle: "HEALTH",
    signal: "一张每天发送的健康照片，\n为什么没有成为一段连续的健康记录？",
    scan: "A PHOTO IN THE FAMILY CHAT · BLOOD PRESSURE / GLUCOSE / TIME",
    origin: "家庭群里的慢病记录照片",
    tension: ["记录必须足够简单，信息又必须连续完整", "提醒可以降低遗漏，也可能制造新的焦虑"],
    coreQuestion: "能否保留拍照的习惯，再让照片慢慢形成可以确认的健康上下文？",
    systemSummary: "图片识别、健康记录、家庭协同、风险边界",
    state: "CONCEPT VALIDATION",
    implemented: ["三端信息架构", "健康记录与趋势摘要概念流程", "医疗安全边界"],
    tested: ["以家庭群中的实际记录方式梳理输入路径"],
    simulated: ["健康指标、趋势与异常提示"],
    assumptions: ["保留拍照习惯比重新填写完整表单更容易持续", "短日报有助于家人建立连续理解"],
    openQuestions: ["识别失败时怎样纠错才不增加负担？", "家庭共享怎样让记录者真正理解和控制？"],
    signalColor: "#FF745B",
    accent: "care",
  },
  {
    slug: "chip-devops",
    index: "03",
    title: "芯片研发 DevOps",
    englishTitle: "ENGINEERING",
    signal: "AI 已经能够生成代码，\n为什么研发流程仍然彼此断裂？",
    scan: "3+ YEARS END-TO-END · CODE / DEVICE / TEST / DEFECT / EVIDENCE",
    origin: "三年多端到端嵌入式研发经历",
    tension: ["工具持续增加，流程上下文却不断丢失", "自动分析可以缩短定位，也可能让候选根因被误当成结论"],
    coreQuestion: "怎样让需求、代码、设备、测试和缺陷共同保留一条可追溯事实链？",
    systemSummary: "需求、代码、设备、测试、缺陷和证据链",
    state: "ENGINEERING VALIDATION",
    implemented: ["端到端流程建模", "动态研发流水线 Demo", "适配器与追溯架构"],
    tested: ["通过模拟 RTL 提交走通失败分析、缺陷与板级测试链路"],
    simulated: ["仿真日志、覆盖率、设备状态和板级测试结果"],
    assumptions: ["连续上下文能够减少重复整理与定位成本", "设备状态应成为测试结果的一等资产"],
    openQuestions: ["不同 EDA 与设备协议怎样形成稳定适配层？", "候选根因怎样呈现才不会诱导工程师？"],
    signalColor: "#B7F34A",
    accent: "silicon",
  },
  {
    slug: "water-digital-twin",
    index: "04",
    title: "蜀水智库 AI",
    englishTitle: "SYSTEMS",
    signal: "当三维模型无法改变判断，\n它还是数字孪生吗？",
    scan: "WATER ENGINEERING · MODEL / SENSOR / CALCULATION / ACTION",
    origin: "水利工程软件、资料和数据的割裂",
    tension: ["模型越来越完整，真实判断链路仍然分散", "自动摘要可以加快阅读，但专业结论必须保留出处与复核"],
    coreQuestion: "怎样让模型、监测、计算、证据和行动形成一个可复核闭环？",
    systemSummary: "知识、GIS、三维、监测、计算和决策",
    state: "IN DEVELOPMENT",
    implemented: ["知识问答、GIS 门户与数字孪生方向", "公开仓库和用户手册", "场景切换 Demo"],
    tested: ["用正常、预警和应急模拟状态检查信息联动"],
    simulated: ["水位、流量、风险点和 AI 工程摘要"],
    assumptions: ["空间对象与证据链并置能帮助工程复核", "监测变化应触发行动，而不只是改变颜色"],
    openQuestions: ["专业计算结果怎样安全地进入 AI 编排？", "哪些状态变化值得打断工程师？"],
    signalColor: "#39C7DD",
    accent: "water",
  },
  {
    slug: "opengov-ai-os",
    index: "05",
    title: "OpenGov AI OS",
    englishTitle: "ORGANIZATION",
    signal: "当企业 AI 只剩下聊天框，\n真正的组织流程去了哪里？",
    scan: "ORGANIZATION × AI · DATA / ROLE / TOOL / WORKFLOW / RESPONSIBILITY",
    origin: "多个组织系统中反复出现的共性问题",
    tension: ["标准化可以提高效率，也可能抹平组织差异", "灵活配置可以快速适配，也可能增加治理复杂度"],
    coreQuestion: "怎样用配置、权限和工具组合组织能力，而不是为每个行业复制一套系统？",
    systemSummary: "配置、Agent、工具、权限、数据和工作流",
    state: "SYSTEM EXPLORATION",
    implemented: ["配置驱动架构", "行业门户配置器", "Agent、插件、权限与部署模型"],
    tested: ["用多种行业模板检查配置结构与门户生成逻辑"],
    simulated: ["组织角色、Agent 列表、插件、数据源与部署选项"],
    assumptions: ["稳定内核与行业配置的组合能够降低重复开发", "治理能力应先于插件数量增长"],
    openQuestions: ["哪些差异应该配置，哪些必须定制？", "插件和 Agent 的责任边界怎样审计？"],
    signalColor: "#C9CED8",
    accent: "civic",
  },
];

export function getSignal(slug: string) {
  return signals.find((signal) => signal.slug === slug);
}
