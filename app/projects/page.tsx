import type { Metadata } from "next";
import { ProjectExplorer } from "../../components/projects/ProjectExplorer";

export const metadata: Metadata = { title: "项目", description: "来自爱好、家庭、工作经历和身边观察的产品尝试与验证记录。" };

export default function ProjectsPage() {
  return <div className="page-shell inner-page">
    <header className="page-hero narrative-hero"><p className="eyebrow">THINGS I’M TRYING TO BUILD / 05</p><h1>这些是我对身边问题的<br /><em>一些回应。</em></h1><p>有些来自我的爱好，有些来自家人，有些来自工作经历，也有些来自反复构建后逐渐发现的共性问题。</p></header>
    <ProjectExplorer />
  </div>;
}
