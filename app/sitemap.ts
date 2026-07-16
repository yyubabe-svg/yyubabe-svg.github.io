import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { getSiteUrl } from "../lib/base-path";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const base=getSiteUrl();const routes=["","/projects","/capabilities","/about","/contact",...projects.map(p=>`/projects/${p.slug}`)];return routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.8}))}
