import process from "node:process";
import { getRepositoryBasePath } from "../lib/base-path.ts";

const repository = process.env.GITHUB_REPOSITORY || process.argv[2] || "yyubabe-svg/yyubabe-svg.github.io";
const [owner = "yyubabe-svg", name = "yyubabe-svg.github.io"] = repository.split("/");
const basePath = getRepositoryBasePath(repository, undefined);
const url = `https://${owner}.github.io${basePath}/`;

console.log(`Repository : ${owner}/${name}`);
console.log(`Mode       : ${basePath ? "project repository" : "user site repository"}`);
console.log(`Base path  : ${basePath || "/"}`);
console.log(`Pages URL  : ${url}`);
console.log("Workflow   : .github/workflows/deploy-pages.yml");
console.log("Next step  : Settings → Pages → Source → GitHub Actions");
