<template>
  <div class="table-layout" :style="layoutStyle">
    <PageHeader />

    <div class="table-content">
      <!-- 自动渲染的表格内容 -->
      <div class="table-wrapper">
        <slot />
      </div>
    </div>

    <LayoutOverlay />
  </div>
</template>

<script setup lang="ts">
import { useBackground } from "../composables/useBackground";
import PageHeader from "../components/PageHeader.vue";

const { layoutStyle } = useBackground();
</script>

<style scoped>
.table-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.table-content {
  padding: 120px 60px 60px 60px;
  z-index: 10;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.table-wrapper {
  width: 100%;
  max-width: 100%;
  max-height: 75vh;
  overflow: auto;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 127, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* 表格样式 */
.table-wrapper :deep(table) {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  line-height: 1;
  margin: 0;
  background: transparent;
}

.table-wrapper :deep(thead) {
  background: linear-gradient(
    135deg,
    var(--daocloud-primary) 0%,
    var(--daocloud-primary-dark) 100%
  );
  position: sticky;
  top: 0;
  z-index: 5;
}

.table-wrapper :deep(thead th) {
  padding: 14px 20px;
  text-align: left;
  font-weight: 700;
  font-size: 1rem;
  color: var(--daocloud-bg-dark);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: none;
  white-space: nowrap;
  position: relative;
}

.table-wrapper :deep(thead th:not(:last-child))::after {
  content: "";
  position: absolute;
  right: 0;
  top: 25%;
  height: 50%;
  width: 1px;
  background: rgba(15, 15, 15, 0.2);
}

.table-wrapper :deep(tbody tr) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.table-wrapper :deep(tbody tr:hover) {
  background: rgba(0, 255, 127, 0.08);
  transform: translateX(4px);
  box-shadow: 4px 0 0 0 var(--daocloud-primary);
}

.table-wrapper :deep(tbody tr:last-child) {
  border-bottom: none;
}

.table-wrapper :deep(tbody td) {
  padding: 16px 20px;
  color: var(--daocloud-text-light);
  font-size: 0.8rem;
  line-height: 1;
  vertical-align: top;
  border: none;
  word-wrap: break-word;
  min-height: 50px;
}

/* 动态行高支持 */
.table-wrapper :deep(tbody td) {
  height: auto;
  min-height: 50px;
}

.table-wrapper :deep(tbody td p) {
  margin: 0 0 0.6rem 0;
  line-height: 1;
}

.table-wrapper :deep(tbody td p:last-child) {
  margin-bottom: 0;
}

.table-wrapper :deep(tbody td ul),
.table-wrapper :deep(tbody td ol) {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.table-wrapper :deep(tbody td li) {
  margin-bottom: 0.4rem;
  line-height: 1.5;
}

/* 表格内代码块样式 */
.table-wrapper :deep(tbody td code) {
  background: rgba(0, 255, 127, 0.15);
  color: var(--daocloud-primary);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.95em;
  font-family: "Fira Code", "Monaco", monospace;
  border: 1px solid rgba(0, 255, 127, 0.3);
}

.table-wrapper :deep(tbody td pre) {
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 1rem;
  margin: 0.5rem 0;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* 表格内链接样式 */
.table-wrapper :deep(tbody td a) {
  color: var(--daocloud-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.table-wrapper :deep(tbody td a:hover) {
  border-bottom-color: var(--daocloud-primary);
  text-shadow: 0 0 8px rgba(0, 255, 127, 0.4);
}

/* 表格内强调文本 */
.table-wrapper :deep(tbody td strong) {
  color: var(--daocloud-primary);
  font-weight: 700;
}

.table-wrapper :deep(tbody td em) {
  color: var(--daocloud-primary-dark);
  font-style: italic;
}

/* 奇偶行样式 */
.table-wrapper :deep(tbody tr:nth-child(even)) {
  background: rgba(255, 255, 255, 0.02);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .table-content {
    padding: 100px 40px 40px 40px;
  }

  .table-wrapper :deep(thead th),
  .table-wrapper :deep(tbody td) {
    padding: 16px 20px;
    font-size: 1rem;
  }

  .table-wrapper :deep(thead th) {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .table-content {
    padding: 90px 30px 30px 30px;
  }

  .table-wrapper {
    border-radius: 8px;
  }

  .table-wrapper :deep(thead th),
  .table-wrapper :deep(tbody td) {
    padding: 12px 16px;
    font-size: 0.95rem;
  }

  .table-wrapper :deep(thead th) {
    font-size: 1rem;
  }

  /* 移动端表格滚动提示 */
  .table-wrapper::after {
    content: "← 滑动查看更多 →";
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    white-space: nowrap;
  }
}

/* 超小屏幕优化 */
@media (max-width: 480px) {
  .table-wrapper :deep(thead th),
  .table-wrapper :deep(tbody td) {
    padding: 10px 12px;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .table-wrapper :deep(thead th) {
    font-size: 0.95rem;
  }
}

/* 打印样式 */
@media print {
  .table-layout {
    background: white;
    color: black;
  }

  .table-wrapper {
    background: white;
    border: 1px solid #ddd;
    box-shadow: none;
  }

  .table-wrapper :deep(thead) {
    background: #f5f5f5;
  }

  .table-wrapper :deep(thead th) {
    color: black;
  }

  .table-wrapper :deep(tbody tr:hover) {
    background: transparent;
    transform: none;
    box-shadow: none;
  }

  .table-wrapper :deep(tbody td) {
    color: black;
  }
}

/* 无障碍支持 */
@media (prefers-reduced-motion: reduce) {
  .table-wrapper :deep(tbody tr) {
    transition: none;
  }

  .table-wrapper :deep(tbody tr:hover) {
    transform: none;
  }
}

/* 高对比度模式 */
@media (prefers-contrast: high) {
  .table-wrapper {
    border: 2px solid var(--daocloud-primary);
  }

  .table-wrapper :deep(tbody tr) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .table-wrapper :deep(tbody td code) {
    background: rgba(0, 255, 127, 0.25);
    border: 2px solid var(--daocloud-primary);
  }
}
</style>
