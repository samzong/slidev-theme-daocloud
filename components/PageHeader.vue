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
  top: 32px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 20;
}

.title-decorator {
  width: 20px;
  height: 20px;
  background: var(--daocloud-primary);
  border-radius: 2px;
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
    top: 40px;
    left: 40px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    top: 30px;
    left: 30px;
  }
  
  .title-decorator {
    width: 20px;
    height: 20px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
}
</style> 