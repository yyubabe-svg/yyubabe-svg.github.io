# 马钰 · AI 产品实验室

一个面向正式发布的个人作品集，不是传统简历页。网站以五个行业产品案例展示从需求洞察、产品设计、AI 能力、全栈开发到私有化工程落地的完整能力。

## 功能

- 首页品牌叙事、能力网络、精选项目、产品方法、跨行业矩阵和共同技术底座
- 项目总览、行业/技术筛选与关键词搜索
- 五个结构完整、视觉差异化的案例研究详情页
- 水利数字孪生、芯片流水线、动作理解、慢病三端协同和行业配置器交互演示
- 能力实验室、关于、联系、自定义 404
- 深浅主题、移动端菜单、当前导航高亮、滚动目录、上一页/下一页、复制邮箱
- SEO 元数据、Open Graph、Twitter Card、sitemap、robots 和项目结构化数据
- 键盘操作、Reduced Motion、图片懒加载和图片缺失降级

## 技术栈

- Next.js 16 App Router / React / TypeScript（严格模式）
- Tailwind CSS 4（基础导入）+ 项目级设计 Token 与原生 CSS
- Lucide React
- Node Test Runner
- GitHub Pages 静态导出 / Cloudflare Workers / Vercel / Docker 可部署结构

## 目录结构

```text
app/                       页面、动态项目路由、SEO 路由
components/
  layout/                  导航、页脚、主题
  home/                    首页叙事组件
  projects/                筛选、详情目录、交互 Demo
  visualizations/          架构、流程、能力矩阵
  ui/                      按钮、标题、媒体降级
data/                      个人资料、项目、能力、时间线
public/projects/           五个项目的真实截图预留目录
public/resume/             简历 PDF
scripts/                   静态导出与 Pages 检查脚本
.github/workflows/         GitHub Pages 自动部署
tests/                     数据与站点契约测试
```

## 安装与本地启动

要求 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

开发地址以终端输出为准，通常为 `http://localhost:3000`。

## 质量检查与生产构建

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run check:export
npm run start
```

## Docker 部署

```bash
docker build -t yu-ma-product-lab .
docker run --rm -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://yyubabe-svg.github.io yu-ma-product-lab
```

普通 Linux 服务器也可直接安装 Node.js 22，运行 `npm ci && npm run build && npm run start`。`start` 使用轻量静态服务器提供 `out` 目录。

## Vercel 部署

1. 将仓库推送到 GitHub/GitLab/Bitbucket。
2. 在 Vercel 导入项目，框架选择 Next.js。
3. 构建命令使用 `npm run build`，安装命令使用 `npm ci`。
4. 添加 `NEXT_PUBLIC_SITE_URL=https://你的正式域名`。
5. 部署完成后检查 sitemap、分享卡片和项目详情 URL。

Cloudflare Workers/Sites 仍可使用仓库内 vinext 与 `.openai/hosting.json` 配置执行 `npm run build:cloudflare`。

## GitHub Pages 部署

目标仓库是个人主页仓库：

```text
yyubabe-svg/yyubabe-svg.github.io
```

因此正式地址位于根路径：

```text
https://yyubabe-svg.github.io/
```

`.github/workflows/deploy-pages.yml` 会在每次推送 `main` 后自动执行：安装依赖、lint、类型检查、测试、Next.js 静态导出、产物检查、上传和部署。也可在 Actions 页面手动运行。

### 首次启用

1. 将代码推送到 `main`：

   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push github main
   ```

2. 打开仓库 `Settings → Pages`。
3. 在 `Build and deployment → Source` 选择 `GitHub Actions`。
4. 打开 `Actions → Deploy Portfolio to GitHub Pages` 查看进度。
5. 部署完成后访问 `https://yyubabe-svg.github.io/`。

之后每次推送 `main` 都会自动更新网站。

### 普通项目仓库模式

工作流会从 `GITHUB_REPOSITORY` 自动判断仓库类型。如果仓库名不是 `.github.io`，会自动设置：

```text
NEXT_PUBLIC_BASE_PATH=/<repository-name>
NEXT_PUBLIC_SITE_URL=https://<username>.github.io/<repository-name>
```

不需要手动修改源代码。`next.config.ts`、公共资源与导出检查均支持该子路径。

### 本地模拟静态站点

```bash
npm run build
npm run check:export
npm run preview:static
```

普通仓库子路径验证：

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio \
NEXT_PUBLIC_SITE_URL=https://yyubabe-svg.github.io/portfolio \
npm run build
npm run check:export
```

### 自定义域名

先在 GitHub `Settings → Pages → Custom domain` 填写域名，再将该域名写入 `public/CNAME`。当前没有写死 CNAME，避免错误绑定。DNS 生效后启用 `Enforce HTTPS`。

### 常见故障

- 图片或 `_next` 资源 404：检查 Actions 中推导出的 `NEXT_PUBLIC_BASE_PATH`，个人主页仓库必须为空。
- 详情页刷新 404：确认 `trailingSlash: true`，并检查 `out/projects/<slug>/index.html` 是否存在。
- 动态路由无法导出：项目必须存在唯一非空 slug，详情页必须保留 `generateStaticParams()`。
- `npm ci` 失败：确认 `package-lock.json` 与 `package.json` 同步并使用 Node.js 22。
- Google Font 构建失败：本站已改用系统字体栈，不依赖构建时字体下载。
- API Route 无法使用：GitHub Pages 没有 Node.js 服务端；本站联系表单使用 mailto，不依赖 API。
- Actions 没有部署权限：确认 Pages Source 为 GitHub Actions，并保留工作流中的 `pages: write` 和 `id-token: write`。
- 自定义域名 HTTPS 未生效：先检查 DNS/CNAME，再等待 GitHub 签发证书。

## 修改内容

- 个人姓名、标题、邮箱、GitHub、LinkedIn、微信和简历地址：`data/profile.ts`
- 五个项目全部案例研究内容：`data/projects.ts`
- 能力分类和实践状态：`data/capabilities.ts`
- 关于页时间线：`data/timeline.ts`

新增项目时，向 `projects` 数组添加完整 `Project` 对象。动态路由会自动生成详情页、SEO 和上一页/下一页链接；测试会检查必填字段与 slug 唯一性。

## 替换项目图片

按项目目录放置 `cover.webp`：

```text
public/projects/silver-economy/cover.webp
public/projects/water-digital-twin/cover.webp
public/projects/chip-devops/cover.webp
public/projects/danceholic/cover.webp
public/projects/opengov-ai-os/cover.webp
```

建议 WebP/AVIF、宽度 1600px 左右、单图控制在 300KB 内。图片缺失时页面会显示带“真实截图待补充”的工程占位视觉，不会出现破图。

## 修改主题

全局颜色、间距、圆角和页面宽度位于 `app/globals.css` 顶部的 CSS 变量。`[data-theme="light"]` 覆盖浅色 Token；主题选择保存在浏览器 `localStorage`。

## 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
NEXT_PUBLIC_SITE_URL=https://yyubabe-svg.github.io
NEXT_PUBLIC_BASE_PATH=
```

`NEXT_PUBLIC_SITE_URL` 用于分享元数据、sitemap 和 robots；`NEXT_PUBLIC_BASE_PATH` 用于普通项目仓库的子路径，个人主页仓库保持为空。项目不需要密钥，联系表单不上传数据。

## 已知限制

- 邮箱、GitHub 和微信已配置；LinkedIn 仍待补充。
- 除 DanceHolic 图标外，项目真实截图尚未提供，当前使用明确标识的代码化演示视觉。
- 蜀水智库 AI 已接入公开用户手册与 GitHub 仓库；DanceHolic 已接入公开的 `motion-tracker` 仓库。
- 中文为完整首发版本，EN 按钮仅提示英文版筹备中。
- 交互 Demo 全部使用模拟数据，不代表真实客户、订单或工程/医疗结论。
- 联系表单使用本机 `mailto` 生成草稿；未配置服务端表单存储。

## 后续规划

- 补充真实项目截图、Demo 和仓库链接
- 完整中英文路由
- 接入经过同意的隐私友好访问分析
- 增加 Playwright 浏览器回归与 Lighthouse CI
- 用真实用户和行业数据持续校正案例研究
