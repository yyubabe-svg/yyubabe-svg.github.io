import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectRecord } from "../../../components/work/ProjectRecord";
import { getProject } from "../../../data/projects";
import { getSignal, signals } from "../../../data/signals";

export function generateStaticParams() { return signals.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const signal = getSignal(slug);
  if (!signal) return {};
  return { title: `${signal.title} / SIGNAL ${signal.index}`, description: signal.signal.replace("\n", " "), alternates: { canonical: `/work/${slug}/` }, openGraph: { title: `${signal.title} · SIGNALS`, description: signal.signal.replace("\n", " "), type: "article" } };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const signal = getSignal(slug);
  const project = getProject(slug);
  if (!signal || !project) notFound();
  const index = signals.findIndex((item) => item.slug === slug);
  const previous = signals[(index - 1 + signals.length) % signals.length];
  const next = signals[(index + 1) % signals.length];
  const schema = { "@context": "https://schema.org", "@type": "CreativeWork", name: signal.title, alternateName: project.englishTitle, description: signal.signal, keywords: project.techStack };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><ProjectRecord project={project} signal={signal} previous={previous} next={next} /></>;
}
