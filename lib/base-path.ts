const externalProtocol = /^(?:[a-z][a-z\d+.-]*:|#|\/\/)/i;

export function normalizeBasePath(value = ""): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed === "/") return "";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}`;
}

export function getRepositoryBasePath(
  repository = process.env.GITHUB_REPOSITORY ?? "",
  explicit = process.env.NEXT_PUBLIC_BASE_PATH,
): string {
  if (explicit !== undefined) return normalizeBasePath(explicit);
  const repositoryName = repository.split("/").filter(Boolean).at(-1) ?? "";
  if (!repositoryName || repositoryName.endsWith(".github.io")) return "";
  return normalizeBasePath(repositoryName);
}

export const basePath = getRepositoryBasePath();

export function withBasePath(path: string, prefix = basePath): string {
  if (!path) return prefix ? `${normalizeBasePath(prefix)}/` : "/";
  if (externalProtocol.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizeBasePath(prefix)}${normalizedPath}`;
}

export function getSiteUrl(
  value = process.env.NEXT_PUBLIC_SITE_URL ?? "https://yyubabe-svg.github.io",
): string {
  return value.replace(/\/+$/, "");
}
