<template>
  <div class="timeline-layout" :style="layoutStyle">
    <PageHeader />

    <!-- 时间线容器 -->
    <div class="timeline-container" ref="containerRef">
      <!-- 时间线 -->
      <div class="timeline-line"></div>

      <!-- 原始内容（隐藏） -->
      <div class="original-content" ref="originalContent">
        <slot />
      </div>

      <!-- 解析后的时间节点 -->
      <div class="timeline-nodes">
        <div
          v-for="(node, index) in nodes"
          :key="index"
          class="timeline-node"
          :class="{
            'node-top': index % 2 === 0,
            'node-bottom': index % 2 === 1,
          }"
          :style="{ left: `${getNodePosition(index)}%` }"
        >
          <!-- 文本框 -->
          <div class="node-card">
            <h2 class="node-title">{{ node.title }}</h2>
            <div class="node-content" v-html="node.content"></div>
          </div>
          <!-- 连接线 -->
          <div class="node-connector"></div>
          <!-- 时间点 -->
          <div class="node-dot"></div>
        </div>
      </div>
    </div>

    <LayoutOverlay />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useBackground } from "../composables/useBackground";
import PageHeader from "../components/PageHeader.vue";

const { layoutStyle } = useBackground();

interface TimelineNode {
  title: string;
  content: string;
}

const nodes = ref<TimelineNode[]>([]);
const originalContent = ref<HTMLElement>();
const containerRef = ref<HTMLElement>();

// 计算节点在时间线上的位置
const getNodePosition = (index: number) => {
  const count = nodes.value.length;
  if (count === 1) return 50;
  // 平均分布，留出边距
  const margin = 10;
  const available = 100 - 2 * margin;
  const step = available / (count - 1);
  return margin + index * step;
};

onMounted(async () => {
  await nextTick();

  // 获取原始内容
  if (!originalContent.value) return;

  // 查找所有 h2 标签
  const h2Elements = originalContent.value.querySelectorAll("h2");

  const parsedNodes: TimelineNode[] = [];

  h2Elements.forEach((h2) => {
    const title = h2.textContent || "";
    let content = "";

    // 获取 h2 后面的所有内容，直到下一个 h2
    let nextSibling = h2.nextElementSibling;

    while (nextSibling && nextSibling.tagName !== "H2") {
      content += nextSibling.outerHTML;
      nextSibling = nextSibling.nextElementSibling;
    }

    parsedNodes.push({ title, content });
  });

  nodes.value = parsedNodes;
});
</script>

<style scoped>
.timeline-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* 时间线容器 */
.timeline-container {
  padding: 120px 40px 60px 40px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

/* 原始内容隐藏 */
.original-content {
  display: none !important;
}

/* 时间线 */
.timeline-line {
  position: absolute;
  left: 40px;
  right: 40px;
  top: 50%;
  height: 3px;
  background: var(--daocloud-primary);
  transform: translateY(-50%);
  z-index: 1;
}

/* 时间线箭头 */
.timeline-line::after {
  content: "";
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid var(--daocloud-primary);
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

/* 时间节点容器 */
.timeline-nodes {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
}

/* 单个时间节点 */
.timeline-node {
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 上方节点 */
.node-top {
  top: 50%;
  flex-direction: column-reverse;
}

/* 下方节点 */
.node-bottom {
  bottom: 50%;
  flex-direction: column;
}

/* 时间点 */
.node-dot {
  width: 14px;
  height: 14px;
  background: var(--daocloud-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(0, 255, 127, 0.2);
  position: relative;
  z-index: 3;
}

/* 连接线 */
.node-connector {
  width: 2px;
  height: 30px;
  background: rgba(0, 255, 127, 0.4);
}

/* 文本框 */
.node-card {
  border: 2px solid var(--daocloud-primary);
  border-radius: 8px;
  padding: 16px;
  background: rgba(26, 26, 46, 0.8);
  box-shadow:
    0 0 20px rgba(0, 255, 127, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.3);
  max-width: 220px;
  min-width: 150px;
  transition: all 0.3s ease;
}

.node-card:hover {
  transform: scale(1.05);
  box-shadow:
    0 0 30px rgba(0, 255, 127, 0.2),
    0 8px 20px rgba(0, 0, 0, 0.4);
}

/* 节点标题 */
.node-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--daocloud-primary);
  margin: 0 0 0.8rem 0;
  text-align: center;
  line-height: 1.3;
}

/* 节点内容 */
.node-content {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--daocloud-text-light);
}

.node-content :deep(p) {
  margin: 0 0 0.5rem 0;
}

.node-content :deep(p:last-child) {
  margin-bottom: 0;
}

.node-content :deep(ul) {
  margin: 0;
  padding-left: 1.2rem;
}

.node-content :deep(li) {
  margin-bottom: 0.3rem;
}

/* 根据节点数量调整卡片宽度 */
@media (min-width: 1200px) {
  .timeline-nodes:has(.timeline-node:nth-child(6)) .node-card {
    max-width: 180px;
    min-width: 120px;
  }

  .timeline-nodes:has(.timeline-node:nth-child(8)) .node-card {
    max-width: 160px;
    min-width: 100px;
    padding: 12px;
  }

  .timeline-nodes:has(.timeline-node:nth-child(8)) .node-title {
    font-size: 1rem;
  }

  .timeline-nodes:has(.timeline-node:nth-child(8)) .node-content {
    font-size: 0.85rem;
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .timeline-container {
    padding: 100px 30px 40px 30px;
  }

  .timeline-line {
    left: 30px;
    right: 30px;
  }

  .node-card {
    max-width: 180px;
    min-width: 120px;
  }
}

@media (max-width: 768px) {
  /* 移动端改为垂直布局 */
  .timeline-container {
    padding: 90px 20px 30px 60px;
    align-items: flex-start;
  }

  .timeline-line {
    left: 30px;
    right: auto;
    top: 90px;
    bottom: 30px;
    width: 3px;
    height: auto;
    transform: none;
  }

  .timeline-line::after {
    display: none;
  }

  .timeline-nodes {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: calc(100% - 50px);
  }

  .timeline-node {
    position: relative !important;
    transform: none !important;
    left: 0 !important;
    top: auto !important;
    bottom: auto !important;
    flex-direction: row !important;
    align-items: center;
  }

  .node-dot {
    position: absolute;
    left: -57px;
  }

  .node-connector {
    position: absolute;
    left: -50px;
    width: 30px;
    height: 2px;
  }

  .node-card {
    max-width: 100%;
    width: 100%;
  }
}
</style>
