export type BuildNote = {
  slug: string;
  date: string;
  title: string;
  relatedProject?: string;
  observation: string;
  initialBelief: string;
  whatHappened: string;
  changedBelief: string;
  nextAction: string;
};

export const notes: BuildNote[] = [
  { slug: "dance-camera-planning", date: "持续记录", title: "为什么调平滑参数解决不了镜头问题", relatedProject: "DanceHolic", observation: "镜头抖动常和人物身份切换、半身构图同时出现。", initialBelief: "把轨迹滤得更平滑，画面就会稳定。", whatHappened: "参数越强，镜头越滞后；参数越弱，身份误判会直接放大成跳变。", changedBelief: "追踪、人物隔离、构图决策和镜头运动必须分层，并显式计算可靠度。", nextAction: "先固定人物身份，再用构图安全区约束镜头规划。" },
  { slug: "twin-beyond-3d", date: "持续记录", title: "为什么数字孪生不能只停留在三维展示", relatedProject: "蜀水智库 AI", observation: "模型可以旋转浏览，但工程人员仍要去其他系统判断风险。", initialBelief: "把工程模型和地图做得足够清楚，就形成了数字孪生。", whatHappened: "没有监测、计算条件、责任人与行动记录，三维只是更直观的资料入口。", changedBelief: "孪生价值来自状态变化如何触发分析、复核和行动。", nextAction: "用一个模拟水位异常走完监测—计算—证据—人工确认链路。" },
  { slug: "enterprise-ai-not-chat", date: "持续记录", title: "为什么企业 AI 系统不能只是加一个聊天框", relatedProject: "OpenGov AI OS", observation: "不同角色问同一个问题，需要的数据、工具和权限并不相同。", initialBelief: "知识库加对话入口已经能覆盖多数组织需求。", whatHappened: "真实任务还涉及审批、数据权限、工具调用、结果留痕和责任归属。", changedBelief: "对话只是入口，工作流和治理才决定系统能否进入组织。", nextAction: "冻结一个最小行业配置，验证角色、工具和审计是否能同时生成。" },
  { slug: "hardware-in-the-loop", date: "三年多研发观察", title: "为什么芯片研发 AI 必须连接真实设备", relatedProject: "芯片研发 DevOps", observation: "代码检查通过后，很多问题只在板卡、仪器和特定环境中出现。", initialBelief: "把软件 CI 做得更完整，就能覆盖大部分研发反馈。", whatHappened: "硬件状态、固件、接线、仪器配置和测试环境都影响结论。", changedBelief: "研发链路必须把数字任务与物理测试资产一起追踪。", nextAction: "用开源 RTL 与模拟设备网关验证可复现测试记录。" },
  { slug: "keep-existing-habit", date: "持续记录", title: "为什么健康记录应该保留老人原有习惯", relatedProject: "康伴 AI", observation: "爸爸拍照发到家庭群的方式虽然不结构化，却足够简单。", initialBelief: "设计一个字段完整的健康记录表单会更规范。", whatHappened: "结构更完整也意味着更多输入、更高理解成本和更容易放弃。", changedBelief: "先保留拍照和说话，再让系统在后台整理，可能更符合真实生活。", nextAction: "验证照片识别失败时，怎样用最少确认完成纠错。" },
  { slug: "less-can-be-closer", date: "持续记录", title: "为什么功能更多不一定更接近产品", observation: "功能列表增长很快，但核心链路的真实反馈仍然不足。", initialBelief: "把想到的关键模块补齐，产品就会更完整。", whatHappened: "范围扩大让每个模块都停在演示层，也让问题优先级变模糊。", changedBelief: "产品完整度首先来自一条可靠闭环，而不是功能数量。", nextAction: "每个项目只选一条最需要真实验证的链路。" },
];
