# SIGNALS · Yu Ma

马钰的实验性数字研究档案。网站不以简历、技能矩阵或行业标签作为入口，而是记录五个日常 Signal、它们背后的矛盾、形成的系统、当前证据以及仍未解决的问题。

## 公开页面

- `/`：四幕沉浸式首页（ENTRY / SIGNALS / EXPERIMENTS / POSITION）
- `/work`：五个项目的极简索引
- `/work/[slug]`：IDEA / SYSTEM / EVIDENCE 三态项目记录
- `/contact`：通过 `mailto` 发送一个问题
- `/projects`、`/projects/[slug]`：旧链接兼容页面

About、Capabilities、Notes、Now 与简历入口已经从公开信息架构中移除。简历 PDF 仍保留在仓库，但网站不主动展示。

## 核心交互

- Signal Scroll：桌面端使用 sticky 与 IntersectionObserver 切换当前问题；移动端改为自然纵向阅读。
- Hover Scan：桌面端悬停问题显示具体事实；移动端通过按钮显影。
- Experiment Index：任何时候只展开一个项目的 ORIGIN / TENSION / SYSTEM / STATE。
- State Switch：项目详情只在 IDEA / SYSTEM / EVIDENCE 三个视图间切换。
- 主题切换：默认深色，选择保存在浏览器 `localStorage`。
- 动态词组：页面失焦或开启 Reduced Motion 时暂停。

## 技术栈

- Next.js 16 App Router / React 19 / TypeScript 严格模式
- 原生 CSS、IntersectionObserver、React 状态
- Lucide React
- Node Test Runner
- GitHub Pages 静态导出
- Cloudflare Workers/Sites、Vercel 与 Docker 兼容结构

没有 API Routes、Server Actions、SSR、数据库或服务端鉴权。

## 目录

```text
app/
  page.tsx                 四幕首页
  work/                    新项目索引与详情路由
  projects/                旧链接兼容路由
  contact/                 极简联系页
components/
  home/                    Signal Scroll、动态词组、实验索引
  work/                    Work 索引、项目记录、三态视图
  projects/                交互 Demo 与 mailto 表单
  visualizations/          工作流与系统结构
data/
  signals.ts               首页与精简项目叙事
  projects.ts              完整项目事实和系统数据
styles/narrative.css       SIGNALS 视觉与响应式系统
tests/                     数据与公开站点契约
scripts/check-static-export.mjs
```

## 安装与启动

要求 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

## 完整验证

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run check:export
```

静态预览：

```bash
npm run preview:static
```

## 内容修改

- 修改五个 Signal：`data/signals.ts`
- 修改完整项目事实、流程、架构、技术决策和链接：`data/projects.ts`
- 修改姓名、邮箱与 GitHub：`data/profile.ts`
- 修改颜色、排版、动效与断点：`styles/narrative.css`

新增项目时需要同时在 `data/projects.ts` 和 `data/signals.ts` 添加相同且唯一的 slug。测试会检查两组数据一一对应、精简字段完整以及五类证据状态存在。

## GitHub Pages

目标仓库：`yyubabe-svg/yyubabe-svg.github.io`

正式地址：`https://yyubabe-svg.github.io/`

推送 `main` 后，`.github/workflows/deploy-pages.yml` 会自动执行安装、lint、类型检查、测试、静态构建、导出检查与 Pages 部署。仓库设置中的 Pages Source 应为 GitHub Actions。

项目保留以下静态部署配置：

- `output: "export"`
- `trailingSlash: true`
- 自动 `basePath` / `assetPrefix`
- `images.unoptimized`
- 两套详情路径的 `generateStaticParams`

普通项目仓库子路径验证：

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio \
NEXT_PUBLIC_SITE_URL=https://yyubabe-svg.github.io/portfolio \
npm run build
npm run check:export
```

## Docker

```bash
docker build -t yu-ma-signals .
docker run --rm -p 3000:3000 yu-ma-signals
```

## Vercel 与 Cloudflare

Vercel 可直接导入仓库，构建命令使用 `npm run build`。Cloudflare Workers/Sites 可使用仓库现有的 vinext 与 `.openai/hosting.json`：

```bash
npm run build:cloudflare
```

## 环境变量

```bash
NEXT_PUBLIC_SITE_URL=https://yyubabe-svg.github.io
NEXT_PUBLIC_BASE_PATH=
```

个人主页仓库的 `NEXT_PUBLIC_BASE_PATH` 保持为空。项目不需要密钥，联系表单不会上传或保存内容。

## 已知边界

- 交互 Demo 中明确标注的数据均为模拟数据。
- 康伴 AI 不提供诊断或药物剂量建议。
- 芯片、水利和组织系统未虚构客户、规模、订单或提效比例。
- 联系表单依赖访客设备的邮件客户端。
- 当前为中文主版本，完整英文内容尚未拆分为独立路由。
