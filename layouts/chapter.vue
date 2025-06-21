<template>
  <div class="chapter-layout">
    <!-- 主要内容区 -->
    <div class="chapter-content">
      <!-- Part 标记 -->
      <div class="part-indicator" v-if="$frontmatter.part">
        <span class="part-text">Part</span>
        <span class="part-number">{{ String($frontmatter.part).padStart(2, '0') }}</span>
      </div>
      
      <!-- 章节标题 -->
      <div class="chapter-header">
        <h1 v-if="$frontmatter.title" class="chapter-title">{{ $frontmatter.title }}</h1>
      </div>
      
      <!-- 内容区域 -->
      <div class="chapter-body">
        <slot />
      </div>
    </div>
    
    <Logo v-if="showLogo" />
    <PoweredBy v-if="showPoweredBy" />
    <!-- 进度条功能由 slidev-component-progress 插件提供 -->
    <!-- 动画控制由 Slidev 内置功能提供 -->
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'

const { 
  showLogo, 
  showPoweredBy, 
  
} = useThemeConfig()
</script>

<style scoped>
.chapter-layout {
  background: transparent;
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* 主要内容区 */
.chapter-content {
  text-align: left;
  max-width: var(--layout-chapter-max-width);
  width: var(--layout-chapter-max-width);
  margin-left: var(--layout-chapter-margin-left);
  padding: var(--spacing-12);
  z-index: 10;
}

/* Part 指示器 */
.part-indicator {
  margin-bottom: 2rem;
}

.part-text {
  font-size: 3rem;
  font-weight: 700;
  color: var(--daocloud-text-light);
  margin-right: 1rem;
  letter-spacing: 0.1em;
}

.part-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--daocloud-primary);
  letter-spacing: 0.1em;
}

/* 章节标题 */
.chapter-header {
  margin-bottom: 3rem;
}

.chapter-title {
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--daocloud-text-light);
  line-height: 1.2;
  letter-spacing: 0.02em;
}

/* 特殊样式：突出显示某些文字 */
.chapter-title strong {
  color: var(--daocloud-primary);
  font-weight: 600;
}

.chapter-body {
  font-size: 1.4rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .chapter-content {
    max-width: 60%;
    width: 60%;
    margin-left: 40%;
  }
  
  .part-text,
  .part-number {
    font-size: 2.5rem;
  }
  
  .chapter-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .chapter-content {
    max-width: 70%;
    width: 70%;
    margin-left: 30%;
    padding: 2rem;
  }
  
  .part-text,
  .part-number {
    font-size: 2rem;
  }
  
  .chapter-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .chapter-content {
    max-width: 90%;
    width: 90%;
    margin-left: 10%;
    padding: 1.5rem;
  }
  
  .part-text,
  .part-number {
    font-size: 1.8rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .part-text {
    margin-right: 0;
  }
  
  .chapter-title {
    font-size: 1.8rem;
  }
}
</style> 