import type { Metadata } from "next";
import { CapabilityMap } from "../../components/visualizations/CapabilityMap";
export const metadata:Metadata={title:"能力实验室",description:"按产品、前端、后端、AI 和工程组织的项目能力地图。"};
export default function Capabilities(){return <div className="page-shell inner-page"><header className="page-hero"><p className="eyebrow">CAPABILITY LAB / NOT PERCENTAGES</p><h1>能力不是百分比，<br/><em>而是解决问题的证据。</em></h1><p>这里不使用“熟练度 98%”。每项能力标记为使用过、项目实践、深入探索或正在学习，并关联到对应产品语境。</p></header><CapabilityMap/></div>}
