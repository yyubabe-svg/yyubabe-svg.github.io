import type { Metadata } from "next";
import { ProjectExplorer } from "../../components/projects/ProjectExplorer";
export const metadata: Metadata={title:"项目",description:"五个跨越健康、水利、芯片、计算机视觉与政企平台的 AI 产品案例研究。"};
export default function ProjectsPage(){return <div className="page-shell inner-page"><header className="page-hero"><p className="eyebrow">PROJECT INDEX / 05</p><h1>进入复杂行业，<br/><em>构建真实系统。</em></h1><p>五个项目不是孤立 Demo，而是同一种能力在不同约束下的展开：理解工作流、设计 AI、连接工程系统，并诚实地验证下一步。</p></header><ProjectExplorer/></div>}
