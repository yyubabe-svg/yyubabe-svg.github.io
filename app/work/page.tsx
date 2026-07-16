import type { Metadata } from "next";
import { WorkIndex } from "../../components/work/WorkIndex";

export const metadata: Metadata = { title: "WORK / SIGNALS", description: "五个问题，以及为它们构建的五个暂时答案。", alternates: { canonical: "/work/" } };

export default function WorkPage() { return <WorkIndex />; }
