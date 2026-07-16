import type { Metadata } from "next";
import { WorkIndex } from "../../components/work/WorkIndex";

export const metadata: Metadata = { title: "WORK / SIGNALS", description: "该旧路径继续保留；项目索引已迁移到 /work。", alternates: { canonical: "/work/" }, robots: { index: false, follow: true } };
export default function LegacyProjectsPage() { return <WorkIndex />; }
