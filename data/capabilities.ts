export type CapabilityLevel = "使用过" | "项目实践" | "深入探索" | "正在学习";
export type CapabilityGroup = { category: string; english: string; description: string; items: { name: string; level: CapabilityLevel; projects: string[] }[] };

export const capabilityGroups: CapabilityGroup[] = [
  { category: "产品能力", english: "Product", description: "从真实问题、角色与工作流出发，定义可验证的产品闭环。", items: [
    { name: "用户研究", level: "项目实践", projects: ["康伴 AI", "DanceHolic"] }, { name: "需求分析", level: "深入探索", projects: ["全部项目"] },
    { name: "产品架构", level: "深入探索", projects: ["蜀水智库 AI", "OpenGov AI OS"] }, { name: "原型设计", level: "深入探索", projects: ["全部项目"] },
    { name: "MVP 规划", level: "项目实践", projects: ["DanceHolic"] }, { name: "商业化思考", level: "正在学习", projects: ["OpenGov AI OS"] },
  ]},
  { category: "前端", english: "Frontend", description: "把复杂系统压缩成清晰、可操作、可扩展的界面。", items: [
    { name: "React", level: "深入探索", projects: ["蜀水智库 AI", "OpenGov AI OS"] }, { name: "Next.js", level: "项目实践", projects: ["OpenGov AI OS"] },
    { name: "TypeScript", level: "深入探索", projects: ["全部项目"] }, { name: "Tailwind CSS", level: "项目实践", projects: ["平台项目"] },
    { name: "SwiftUI", level: "项目实践", projects: ["DanceHolic"] }, { name: "Three.js / GIS", level: "项目实践", projects: ["蜀水智库 AI"] },
  ]},
  { category: "后端", english: "Backend", description: "服务、数据、异步任务与行业工具组成可维护的产品系统。", items: [
    { name: "Python / FastAPI", level: "深入探索", projects: ["蜀水智库 AI", "OpenGov AI OS"] }, { name: "REST API", level: "深入探索", projects: ["全部平台项目"] },
    { name: "PostgreSQL / PostGIS", level: "项目实践", projects: ["蜀水智库 AI"] }, { name: "Redis / Celery", level: "使用过", projects: ["平台项目"] },
    { name: "Docker", level: "项目实践", projects: ["企业平台"] },
  ]},
  { category: "AI", english: "Intelligence", description: "模型不是孤立能力，而是被规则、数据、工具和人工确认约束的系统组件。", items: [
    { name: "LLM / RAG", level: "深入探索", projects: ["康伴 AI", "蜀水智库 AI", "OpenGov AI OS"] }, { name: "Agent / Tool Calling", level: "深入探索", projects: ["芯片 DevOps", "OpenGov AI OS"] },
    { name: "文档解析 / 向量检索", level: "项目实践", projects: ["蜀水智库 AI"] }, { name: "多模态", level: "项目实践", projects: ["康伴 AI", "DanceHolic"] },
    { name: "计算机视觉 / 姿态估计", level: "项目实践", projects: ["DanceHolic"] }, { name: "模型私有化", level: "正在学习", projects: ["企业平台"] },
  ]},
  { category: "工程", english: "Engineering", description: "让产品在真实组织中可部署、可观察、可追责、可持续演进。", items: [
    { name: "Git / CI/CD", level: "项目实践", projects: ["芯片 DevOps"] }, { name: "自动化测试", level: "项目实践", projects: ["全部项目"] },
    { name: "权限 / 审计", level: "深入探索", projects: ["蜀水智库 AI", "OpenGov AI OS"] }, { name: "可观测性", level: "使用过", projects: ["平台项目"] },
    { name: "Linux / 内网部署", level: "项目实践", projects: ["企业平台"] },
  ]},
];

export const coreCapabilities = [
  { title: "AI 产品设计", description: "从用户任务和风险边界定义 AI 的位置，而不是先放一个聊天框。", tech: ["User Flow", "RAG", "Agent"], href: "/capabilities#product" },
  { title: "垂直行业方案", description: "快速理解专业角色、资产、规则和工作流，形成可验证方案。", tech: ["Health", "Water", "Semiconductor"], href: "/projects" },
  { title: "全栈工程开发", description: "从交互界面、API、数据模型到部署链路独立推进。", tech: ["React", "FastAPI", "PostgreSQL"], href: "/capabilities#frontend" },
  { title: "多模态与视觉", description: "连接文本、文件、视频、人体姿态和真实设备数据。", tech: ["Vision", "Core ML", "Multimodal"], href: "/projects/danceholic" },
  { title: "企业系统架构", description: "围绕多角色、权限、审计、集成和可运营性设计平台。", tech: ["RBAC", "Workflow", "Observability"], href: "/projects/opengov-ai-os" },
  { title: "私有化工程落地", description: "在数据安全、模型替换和内网条件下保留完整产品能力。", tech: ["Docker", "On-premise", "Audit"], href: "/capabilities#engineering" },
] as const;
