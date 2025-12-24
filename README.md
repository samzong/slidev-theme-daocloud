# Slidev Theme DaoCloud

一个为 DaoCloud 定制的专业 Slidev 演示主题，内置品牌色、统一的排版体系与多个常用布局。

## 安装

```bash
npm install https://github.com/samzong/slidev-theme-daocloud/releases/download/v0.0.1/slidev-theme-daocloud-0.0.1.tgz
```

> 说明：将 URL 中的版本号替换为实际发布版本。

## 快速开始

在 `slides.md` 的 frontmatter 中启用主题：

```yaml
---
theme: slidev-theme-daocloud
layout: cover
title: '演示标题'
subtitle: '副标题'
author: '作者名'
date: '2025-01-01'
---
```

## 配置（全局与单页）

主题支持全局配置与单页覆盖，配置项集中在 `globalConfig` 与 frontmatter 中。

### 全局配置（推荐）

```yaml
---
theme: slidev-theme-daocloud

themeConfig:
  globalConfig:
    # Logo
    showLogo: true
    logo: /logo.png
    logoPosition: top-right
    logoSize: md
    logoVariant: default

    # Powered By
    showPoweredBy: true
    poweredByVariant: default
    poweredByPosition: bottom-right
    poweredBySize: sm

    # 进度条
    showProgressBar: true

    # 动画
    disableAnimations: true

    # 全局背景
    background: var(--daocloud-bg-dark)
---
```

也可以在 `slidev.config.ts` 中配置（注意必须使用 `globalConfig` 包裹）：

```ts
// slidev.config.ts
import { defineConfig } from 'slidev';

export default defineConfig({
  themeConfig: {
    globalConfig: {
      showLogo: true,
      showPoweredBy: true,
      disableAnimations: true,
      background: 'var(--daocloud-bg-dark)',
    },
  },
});
```

### 单页覆盖（frontmatter）

在任意页面的 frontmatter 中写入同名字段即可覆盖：

```yaml
---
layout: default
showLogo: false
showPoweredBy: false
background: linear-gradient(135deg, #0f0f0f, #1a1a2e)
---
```

### 配置覆盖优先级

- **通用项**：`frontmatter` > `themeConfig.globalConfig` > 主题默认值
- **Logo / PoweredBy 位置**：`frontmatter.logoPosition / poweredByPosition` > 布局默认位置 > 全局配置
- **背景**：`frontmatter.background` > 布局默认背景 > 全局配置 `background` > 主题默认值

### 布局默认 Logo 位置

- `cover` / `chapter`：默认 `top-left`
- `toc` / `intro` / `center` / `image` / `image-left` / `image-right`：默认 `top-right`
- `quote`：默认 `bottom-right`
- `default` / `white` / `two-cols` / `table` / `timeline` / `boxes`：不指定布局默认位置，走全局配置

### 配置项说明

**Logo**

- `showLogo`：是否显示 Logo
- `logo`：Logo 图片路径（支持本地路径或 URL，默认 `/logo.png`）
- `logoPosition`：`top-left | top-right | bottom-left | bottom-right`
- `logoSize`：`sm | md | lg | xl`
- `logoVariant`：`default | white | dark | minimal`

**Powered By**

- `showPoweredBy`：是否显示 Powered By
- `poweredByVariant`：`default | white | dark | minimal`（对应 `/powerby-default.png`、`/powerby-white.png`、`/powerby-dark.png`）
- `poweredByPosition`：`top-left | top-right | bottom-left | bottom-right`
- `poweredBySize`：`sm | md | lg`

> 说明：Logo 与 PoweredBy 图片路径会自动处理 Slidev `base`，适配子路径部署。

**进度条**

- `showProgressBar`：是否显示底部进度条
- `progressBarStyle`：已预留，当前布局未使用（后续可扩展）

**动画**

- `disableAnimations`：是否禁用动画（默认 `true`，同时支持 `prefers-reduced-motion`）

**背景**

- `background`：支持颜色、渐变、图片

```yaml
---
# 纯色
background: '#1a1a2e'
# 渐变
background: 'linear-gradient(135deg, #0f0f0f, #1a1a2e)'
# 图片（本地或 URL）
background: '/bg.jpg'
---
```

> 说明：图片背景会自动以 `center/cover no-repeat` 方式展示。

## 布局一览与使用方式

主题中的布局来自 `layouts/` 目录，按文件名作为 layout 名称。

### 1) `cover` 封面页

```yaml
---
layout: cover
title: '演示标题'
subtitle: '副标题'
author: '作者'
date: '2025-01-01'
---
```

### 2) `intro` 介绍页

```yaml
---
layout: intro
avatar: https://example.com/avatar.jpg
# 或 icon: '<svg>...</svg>'
title: 姓名
subtitle: 职位 / 简介

# 标签
tags: ['标签1', '标签2']

# 技术栈
techStack:
  - name: Kubernetes
    icon: https://example.com/k8s.svg
  - name: Docker
    icon: https://example.com/docker.svg
  - name: Go

# GitHub 贡献图
github: username

# 认证徽章
certifications:
  - name: CKA
    badge: https://example.com/cka.png
  - name: AWS SA
---
你的自我介绍内容...
```

### 3) `chapter` 章节页

```yaml
---
layout: chapter
part: 1
title: 章节标题
---
```

### 4) `toc` 目录页

```yaml
---
layout: toc
---
1. 背景介绍
2. 方案设计
3. 实施细节
4. 总结
```

### 5) `default` 默认深色内容页

```yaml
---
layout: default
title: 页面标题
---
## 小节标题
- 列表项 1
- 列表项 2
```

### 6) `white` 浅色内容页

```yaml
---
layout: white
title: 页面标题
---
内容与 `default` 一致，但采用浅色背景与深色文本。
```

### 7) `two-cols` 双栏布局

```yaml
---
layout: two-cols
title: 页面标题
leftTitle: 左栏标题
rightTitle: 右栏标题
---
::left::
  - 左侧内容

::right::
  - 右侧内容
```

### 8) `image-left` / `image-right` 图文布局

```yaml
---
layout: image-right
title: 页面标题
image: ./path/to/image.jpg
imageAlt: 图片描述
imageCaption: 图片说明
---
## 主要内容
- 要点 1
- 要点 2
```

### 9) `image` 全屏图片布局

```yaml
---
layout: image
image: /path/to/hero.png
alt: 可选图片描述
title: 可选标题
subtitle: 可选副标题
caption: 可选说明文字
objectFit: cover # cover | contain | fill | scale-down
---
可选的正文内容...
```

### 10) `table` 表格布局

```yaml
---
layout: table
title: 数据对比
---

| 特性 | 方案 A | 方案 B |
| --- | --- | --- |
| 多集群 | ✓ | ✓ |
| AI 优化 | ✓ | ✓ |
```

### 11) `center` 居中强调页

```yaml
---
layout: center
icon: '🚀'
title: 核心结论
subtitle: 一句话说明
highlight: 关键高亮信息
note: 备注 / 引用
---
可选正文内容
```

### 12) `quote` 引用页

```yaml
---
layout: quote
author: 作者
title: 作者头衔
source: 出处
avatar: https://example.com/avatar.jpg
tags: ['引用', '观点']
note: 备注说明
---
这里是引用内容...
```

### 13) `timeline` 时间线布局

使用 **多个 H2 标题** 作为时间节点标题，H2 下面的内容会自动作为节点内容。

```markdown
---
layout: timeline
title: 发展历程
---

## 2019

项目启动

## 2021

完成核心能力建设

## 2024

规模化落地
```

### 14) `boxes` 卡片网格布局

使用 **多个 H2 标题** 作为卡片标题，H2 下面的内容会作为卡片正文。

```markdown
---
layout: boxes
title: 功能矩阵
---

## 核心能力

- 统一调度
- 自动弹性

## 运维能力

- 可观测
- 自动修复
```

## 配置建议

- **Logo / Powered By**：建议通过全局配置统一管理，单页仅做特殊覆盖
- **背景**：支持每页自定义背景，建议在封面、引用页等关键页使用渐变或图片
- **动画**：默认关闭，可在需要时按页开启

---

如需新增布局或扩展配置，欢迎提交 PR 或 Issue。
