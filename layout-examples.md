# 布局使用示例

本文档展示如何使用 DaoCloud 主题的各种专业布局。

## 📝 intro - 介绍页布局

适用于人物介绍、概念解释等场景。

```yaml
---
layout: intro
title: '张三'
subtitle: 'Kubernetes 架构师'
avatar: '/path/to/avatar.jpg'  # 可选：头像图片
icon: '🚀'                     # 可选：代替头像的图标
tags: ['Kubernetes', 'Docker', 'DevOps']  # 可选：技能标签
---

## 个人简介

- 5年 Kubernetes 实战经验
- 云原生架构专家
- 开源贡献者

专注于容器化技术和微服务架构设计。
```

## 📊 two-cols - 双栏布局

适用于对比展示、并列说明。

```yaml
---
layout: two-cols
title: 'Kueue vs Volcano 特性对比'
leftTitle: 'Kueue 特性'
rightTitle: 'Volcano 特性'
---

::left::

## Kueue 优势

- 与 K8s 原生深度集成
- 轻量级实现
- 资源借用机制
- 多租户支持

::right::

## Volcano 优势

- 高性能计算优化
- 复杂作业依赖
- Gang Scheduling
- AI/ML 生态集成
```

## 🖼️ image-left - 图文混排（图片在左）

适用于配图说明，图片位于左侧。

```yaml
---
layout: image-left
title: 'Kubernetes 架构'
subtitle: '容器编排的核心组件'
image: '/path/to/k8s-architecture.png'
imageCaption: 'Kubernetes 集群架构图'
tags: ['架构', '组件', '容器']
action: '了解更多'  # 可选：行动按钮
---

## 核心组件

Kubernetes 由以下核心组件构成：

- **API Server**: 集群的统一入口
- **etcd**: 分布式键值存储
- **Scheduler**: 调度器
- **Controller Manager**: 控制器管理器

每个组件都有特定的职责和作用。
```

## 🖼️ image-right - 图文混排（图片在右）

适用于配图说明，图片位于右侧。

```yaml
---
layout: image-right
title: 'DevOps 流程'
subtitle: '持续集成与持续部署'
image: '/path/to/devops-flow.png'
imageCaption: 'DevOps 工作流程图'
tags: ['CI/CD', 'DevOps', '自动化']
---

## 流程说明

现代 DevOps 流程包括：

1. **代码提交** - 开发者提交代码到版本控制系统
2. **自动构建** - CI 系统自动构建和测试
3. **部署** - 自动部署到测试和生产环境
4. **监控** - 持续监控应用性能

这种流程确保了快速、可靠的软件交付。
```

## 🎯 center - 居中展示布局

适用于重要声明、核心观点。

```yaml
---
layout: center
title: '重要公告'
subtitle: '系统维护通知'
icon: '⚠️'
highlight: '服务将于今晚 2:00-4:00 维护'
note: '维护期间服务不可用，请提前做好准备'
---

## 维护内容

- 数据库升级
- 安全补丁更新
- 性能优化

预计维护时间：2 小时
```

## 💬 quote - 引用页布局

适用于引用重要观点、名人名言。

```yaml
---
layout: quote
author: 'Linus Torvalds'
title: 'Linux 创始人'
avatar: '/path/to/linus.jpg'  # 可选：作者头像
source: 'TED Talk 2016'
tags: ['开源', '技术哲学']
note: '这句话深刻阐述了开源软件的核心理念'
---

Talk is cheap. Show me the code.

# 代码胜于雄辩
```

## 🎨 样式自定义

所有布局都支持以下通用配置：

```yaml
---
layout: any-layout
showLogo: true          # 显示 Logo
showPoweredBy: true     # 显示 PoweredBy
showProgress: true      # 显示进度条
---
```

## 📱 响应式设计

所有布局都已优化为响应式设计，在不同设备上都能正常显示：

- **桌面端**: 完整布局展示
- **平板端**: 适应性调整
- **移动端**: 垂直堆叠布局

## 🎪 组合使用

可以在同一演示中混合使用不同布局：

```markdown
---
layout: cover
---

# 我的演示

---
layout: intro
---

# 关于我

---
layout: two-cols
---

# 对比分析

---
layout: center
---

# 核心观点

---
layout: quote
---

重要引用内容
```

这样可以创建丰富多样、视觉层次分明的专业演示！ 