import type { NextConfig } from "next";
import { getRepositoryBasePath } from "./lib/base-path";

const basePath = getRepositoryBasePath();
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
