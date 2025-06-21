<template>
  <div class="page-header" v-if="$frontmatter.title">
    <div class="title-decorator"></div>
    <h1 class="page-title">{{ $frontmatter.title }}</h1>
  </div>
</template>

<script setup lang="ts">
// PageHeader 组件：用于显示页面标题
// 使用 Slidev 的 $frontmatter API 获取页面标题
</script>

<style scoped>
.page-header {
  position: absolute;
  top: var(--page-header-top);
  left: var(--page-header-left);
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  z-index: 20;
}

.title-decorator {
  width: var(--page-header-decorator-size);
  height: var(--page-header-decorator-size);
  background: var(--daocloud-primary);
  border-radius: var(--border-radius-sm);
  flex-shrink: 0;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--daocloud-text-light);
  margin: 0;
  line-height: 1.2;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-header {
    top: 90px;
    left: 40px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    top: 70px;
    left: 30px;
  }
  
  .title-decorator {
    width: 14px;
    height: 14px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .page-header {
    top: 60px;
    left: 24px;
  }
  
  .title-decorator {
    width: 12px;
    height: 12px;
  }
  
  .page-title {
    font-size: 1.6rem;
  }
}
</style> 