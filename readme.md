# Loonghfut's MOC (Map of Content)

一个基于 Jekyll 的个人知识库网站，支持浅色/深色模式切换。

## 功能特点

- 📚 动态文章列表：主页自动显示 `content/posts/` 目录下的所有文章
- 🌓 主题切换：支持浅色/深色模式自动切换
- 🎨 响应式设计：适配各种屏幕尺寸
- 🚀 自动部署：通过 GitHub Actions 自动构建和部署

## 目录结构

```
.
├── content/posts/          # 文章源文件（在这里添加新文章）
├── _articles/              # 自动生成的文章集合（构建时自动同步）
├── _layouts/               # 页面布局模板
├── _includes/              # 可重用的页面组件
├── assets/                 # CSS、JS 和其他静态资源
├── index.html              # 首页（显示所有文章）
└── _config.yml             # Jekyll 配置文件
```

## 如何添加新文章

1. 在 `content/posts/` 目录下创建新文件夹（如 `content/posts/我的新文章/`）
2. 在该文件夹中创建 `index.md` 文件
3. 添加 frontmatter（元数据）和内容：

```markdown
---
title: 我的新文章标题
date: 2025-11-05T12:00:00Z
lastmod: 2025-11-05T12:00:00Z
description: 文章简介（可选）
---

文章内容...
```

4. 提交并推送到 main 分支，GitHub Actions 会自动构建和部署

## 工作原理

本站使用 Jekyll Collections 功能动态显示文章：

1. 文章存储在 `content/posts/` 目录中
2. GitHub Actions 构建时，自动将文章同步到 `_articles/` 集合
3. Jekyll 读取 `_articles/` 集合并生成静态网站
4. 首页显示所有文章的列表，按日期倒序排列

## 本地开发

```bash
# 安装 Jekyll
gem install jekyll bundler

# 克隆仓库
git clone https://github.com/loonghfut/loonghfut.github.io.git
cd loonghfut.github.io

# 同步文章（本地开发时需要手动执行）
mkdir -p _articles
rsync -av --delete content/posts/ _articles/

# 启动本地服务器
jekyll serve

# 访问 http://localhost:4000
```

## 技术栈

- Jekyll 静态网站生成器
- GitHub Pages 托管
- GitHub Actions 自动部署
- 纯 HTML/CSS/JavaScript（无框架依赖）
