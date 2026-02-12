# Lesong Jia's Personal Website

Personal academic website built with Astro, featuring research projects, publications, news, and collaborators.

## Project Structure

```
src/
├── assets/
│   └── images/          # 网站图片资源
│       ├── Cover_V3.png # 首页封面图
│       ├── Cover.png    # 备用封面图
│       └── Self_Photo.jpg # 个人照片
│
├── components/          # 组件
│   ├── Collaborators/   # 合作者区块组件
│   ├── Footer/          # 页脚组件
│   ├── Hero/            # 首页 Hero 区块
│   ├── Nav/             # 导航栏组件
│   ├── News/            # 新闻区块组件
│   ├── Publications/    # 研究方向区块组件
│   ├── SelfIntro/       # 自我介绍区块
│   ├── Seo/             # SEO 组件
│   └── SiteLogo/        # Logo 组件
│
├── config/              # 配置文件
│   ├── navData.json.ts  # 导航菜单配置
│   └── siteData.json.ts # 网站基本信息配置
│
├── data/                # 内容数据（Markdown 文件）
│   ├── collaborators/   # 合作者数据
│   │   └── collab-*/    # 每个合作者一个文件夹
│   │       ├── index.md # 合作者信息（name, title, period等）
│   │       └── photo.jpg # 合作者照片
│   │
│   ├── news/            # 新闻数据
│   │   └── news-*/      # 每条新闻一个文件夹
│   │       ├── index.md # 新闻内容（title, description, date等）
│   │       └── cover.jpg # 新闻封面图
│   │
│   └── publications/    # 发表数据
│       └── pub-*/       # 每篇发表一个文件夹
│           ├── index.md # 发表信息（title, authors, venue, doi等）
│           └── thumb.jpg # 发表缩略图
│
├── layouts/            # 布局文件
│   ├── BaseHead.astro   # HTML head 部分
│   └── BaseLayout.astro # 基础布局
│
├── pages/              # 页面路由
│   ├── index.astro     # 首页
│   ├── 404.astro       # 404 页面
│   ├── collaborators/  # 合作者页面
│   │   ├── index.astro # 全部合作者列表
│   │   └── [...slug].astro # 合作者详情页
│   ├── news/           # 新闻页面
│   │   ├── index.astro # 全部新闻列表
│   │   └── [...slug].astro # 新闻详情页
│   └── publications/   # 研究方向页面
│       └── index.astro # 研究方向总览（三个研究方向）
│
├── styles/             # 样式文件
│   ├── global.css       # 全局样式
│   ├── tailwind-theme.css # Tailwind 主题配置
│   ├── buttons.css      # 按钮样式
│   ├── fonts.css        # 字体配置
│   └── markdown-content.css # Markdown 内容样式
│
└── content.config.ts   # 内容集合配置（定义数据结构）
```

## 如何添加内容

### 添加新闻

1. 在 `src/data/news/` 下创建新文件夹，如 `news-7/`
2. 创建 `index.md` 文件，包含：
   ```yaml
   ---
   title: "新闻标题"
   description: "新闻摘要"
   heroImage: ./cover.jpg  # 可选
   author: "作者名"  # 可选
   date: "2025-04-01"
   order: 7
   link: "https://..."  # 可选，外部链接
   ---
   
   新闻正文内容...
   ```
3. 添加封面图 `cover.jpg`（可选）
4. 首页会自动显示最新的 3 条新闻

### 添加发表

1. 在 `src/data/publications/` 下创建新文件夹，如 `pub-6/`
2. 创建 `index.md` 文件：
   ```yaml
   ---
   title: "论文标题"
   venue: "会议/期刊名称"  # 可选
   authors: "作者1, 作者2, Lesong Jia"
   year: 2025
   doi: "10.xxx/xxx"  # 可选
   thumbnail: ./thumb.jpg  # 可选
   direction: "多模态交互"  # 或 "态势感知" 或 "虚拟与增强现实"
   order: 6
   ---
   ```
3. 添加缩略图 `thumb.jpg`（可选）
4. 发表会自动出现在对应研究方向的页面

### 添加合作者

1. 在 `src/data/collaborators/` 下创建新文件夹，如 `collab-11/`
2. 创建 `index.md` 文件：
   ```yaml
   ---
   name: "姓名"
   title: "职位"
   image: ./photo.jpg  # 可选
   period: "2022-2025"  # 或 "2019-2022" 或 "2026"
   order: 11
   showOnHomepage: true  # 是否在首页显示
   homepageOrder: 1  # 首页显示顺序
   ---
   
   合作者介绍...
   ```
3. 添加照片 `photo.jpg`（可选）

## 开发命令

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器（localhost:4321）
npm run build    # 构建生产版本
npm run preview  # 预览构建结果
```

## 部署

项目可以部署到：
- Vercel
- Netlify
- Cloudflare Pages
- 其他支持 Astro 的平台

部署前记得更新 `astro.config.mjs` 和 `public/robots.txt` 中的网站域名。
