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
    
    <Logo v-if="$frontmatter.showLogo === true" />
    <PoweredBy v-if="$frontmatter.showPoweredBy === true" />
    <ProgressBar />
  </div>
</template>

<style scoped>
.chapter-layout {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 主要内容区 */
.chapter-content {
  text-align: left;
  max-width: 900px;
  width: 100%;
  padding: 3rem;
  z-index: 10;
  animation: fadeInUp 1s ease-out 0.5s both;
}

/* Part 指示器 */
.part-indicator {
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.part-text {
  font-size: 3rem;
  font-weight: 300;
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
  font-size: 3.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--daocloud-text-light);
  line-height: 1.2;
  animation: fadeInUp 1s ease-out 1s both;
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
  animation: fadeInUp 1s ease-out 1.4s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 1024px) {
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