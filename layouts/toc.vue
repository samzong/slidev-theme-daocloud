<template>
  <div class="slidev-layout toc-layout">
    <!-- 左侧标题区域 -->
    <div class="toc-left">
      <div class="toc-header">
        <h1 class="toc-title-en">Content</h1>
        <h2 class="toc-title-cn">目录</h2>
      </div>
    </div>

    <!-- 右侧目录列表区域 -->
    <div class="toc-right">
      <div class="toc-list">
        <slot />
      </div>
    </div>
    
    <Logo v-if="showLogo" />
    <PoweredBy v-if="showPoweredBy" />
    <ProgressBar v-if="showProgressBar" />
    <AnimationController />
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'

const { 
  showLogo, 
  showPoweredBy, 
  showProgressBar
} = useThemeConfig()
</script>


<style scoped>
.toc-layout {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--daocloud-bg);
  color: var(--daocloud-text);
  overflow: hidden;
  padding: 4rem;
}

.toc-left {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 3rem;
}

.toc-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;
}

.toc-header {
  margin-bottom: 0;
}

.toc-title-en {
  font-size: 4rem;
  font-weight: 300;
  color: var(--daocloud-primary);
  margin: 0;
  line-height: 1;
  letter-spacing: 0.1em;
  position: relative;
}

.toc-title-en::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 100px;
  height: 3px;
  background: var(--daocloud-primary);
}

.toc-title-cn {
  font-size: 3rem;
  font-weight: 400;
  color: var(--daocloud-text);
  margin: 1rem 0 0 0;
  line-height: 1;
}

.toc-list {
  font-size: 1.2rem;
  line-height: 1.8;
  width: 100%;
}

/* 重要：这些选择器需要针对实际的HTML结构 */
.toc-list :deep(ul),
.toc-list :deep(ol) {
  list-style: none;
  padding: 0;
  margin: 0;
  counter-reset: toc-counter;
}

.toc-list :deep(li) {
  counter-increment: toc-counter;
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 3rem;
  transition: all 0.3s ease;
  display: block;
}

.toc-list :deep(li::before) {
  content: counter(toc-counter) ".";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--daocloud-primary);
  font-weight: 600;
  font-size: 1.6rem;
  width: 2.5rem;
  text-align: left;
  line-height: 1.8;
  display: flex;
  align-items: baseline;
  height: 1.8rem;
}

.toc-list :deep(li:hover) {
  color: var(--daocloud-primary);
  transform: translateX(10px);
}

/* 确保强调文本也正确显示 */
.toc-list :deep(strong) {
  color: var(--daocloud-primary);
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .toc-layout {
    padding: 3rem 2rem;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .toc-left {
    flex: none;
    width: 100%;
    padding-right: 0;
    margin-bottom: 3rem;
  }
  
  .toc-right {
    flex: none;
    width: 100%;
    padding-left: 0;
  }
  
  .toc-title-en {
    font-size: 3rem;
  }
  
  .toc-title-cn {
    font-size: 2.5rem;
  }
  
  .toc-list {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .toc-layout {
    padding: 2rem;
  }
  
  .toc-title-en {
    font-size: 2.5rem;
  }
  
  .toc-title-cn {
    font-size: 2rem;
  }
  
  .toc-list {
    font-size: 1rem;
  }
  
  .toc-list :deep(li) {
    padding-left: 2.5rem;
  }
  
  .toc-list :deep(li::before) {
    font-size: 1.3rem;
    width: 2rem;
    height: 1.6rem;
  }
}
</style> 