# Slidev Theme DaoCloud

一个为 DaoCloud 公司定制的专业 Slidev 演示主题，提供现代化的设计和丰富的布局选项。

## 特性

- 🎨 **12 种专业布局** - 满足各种演示需求
- 🌓 **深色/浅色主题** - 自动适应系统偏好
- 📱 **响应式设计** - 完美适配各种设备
- ✨ **流体动画效果** - 现代化的视觉体验
- 🔧 **高度可定制** - 灵活的配置选项

## 安装

```bash
npm install slidev-theme-daocloud
```

或在你的 Slidev 项目中直接引用本地主题：

```yaml
---
theme: ./path-to-theme
---
```

## 使用

### 基础配置

在演示文稿的 frontmatter 中配置主题：

```yaml
---
theme: daocloud
showLogo: true          # 显示 Logo
showPoweredBy: true     # 显示品牌归属
---
```

### 可用布局

#### 1. cover - 封面页
```yaml
---
layout: cover
title: "演示标题"
subtitle: "副标题"
author: "作者名"
date: "2025-01-01"
---
```

#### 2. intro - 介绍页
```yaml
---
layout: intro
avatar: https://example.com/avatar.jpg
title: 姓名
subtitle: 职位
tags: ["标签1", "标签2"]
---
```

#### 3. chapter - 章节页
```yaml
---
layout: chapter
part: 1
title: 章节标题
---
```

#### 4. toc - 目录页
```yaml
---
layout: toc
---
```

#### 5. two-cols - 双栏布局
```yaml
---
layout: two-cols
---

::left::
左侧内容

::right::
右侧内容
```

#### 6. image-left / image-right - 图文布局
```yaml
---
layout: image-left
image: ./image.jpg
---
文本内容
```

#### 7. comparison - 对比布局
```yaml
---
layout: comparison
---
```

#### 8. center - 居中布局
```yaml
---
layout: center
---
```

#### 9. quote - 引用布局
```yaml
---
layout: quote
author: "作者"
---
引用内容
```

#### 10. default - 默认深色布局
```yaml
---
layout: default
---
```

#### 11. white - 浅色布局
```yaml
---
layout: white
---
```

## 颜色系统

主题使用以下颜色方案：

- **主色**: `#00ff7f` (亮绿色)
- **主色深色**: `#00cc66`
- **辅助色**: `#1a1a2e` (深蓝色)

## 开发

### 项目结构

```
slidev-theme-daocloud/
├── components/         # 可复用组件
│   ├── Logo.vue
│   ├── PoweredBy.vue
│   └── ProgressBar.vue
├── layouts/           # 布局组件
│   ├── cover.vue
│   ├── intro.vue
│   ├── chapter.vue
│   ├── toc.vue
│   └── ...
├── styles/            # 样式文件
│   ├── index.ts
│   ├── layout.css
│   ├── components.css
│   └── code.css
├── index.ts           # 主题入口
└── package.json
```

### 添加新布局

1. 在 `layouts/` 目录创建新的 Vue 组件
2. 在 `index.ts` 中注册布局
3. 添加相应的样式

### 本地开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 技术栈

- Slidev >= 0.48.0
- Vue 3 Composition API
- TypeScript
- CSS Variables

## 许可

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！ 