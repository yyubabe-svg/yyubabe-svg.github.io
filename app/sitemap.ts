import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000";const routes=["","/projects","/capabilities","/about","/contact",...projects.map(p=>`/projects/${p.slug}`)];return routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:0.8}))}
