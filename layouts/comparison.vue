<template>
  <div class="comparison-layout">
    <!-- 页面标题区域 - 与 default.vue 保持一致 -->
    <div class="page-header" v-if="$frontmatter.title">
      <div class="title-decorator"></div>
      <h1 class="page-title">{{ $frontmatter.title }}</h1>
    </div>
    
    <div class="comparison-content">
      <slot />
    </div>
    
    <ProgressBar />
  </div>
</template>

<style scoped>
.comparison-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* 页面标题 - 与 default.vue 保持一致 */
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
  width: 24px;
  height: 24px;
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

.comparison-content {
  padding: 120px 60px 60px 60px;
  z-index: 10;
  position: relative;
  height: 100%;
  overflow-y: auto;
}

/* 对比内容样式增强 */
.comparison-content h1 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--daocloud-primary);
  line-height: 1.3;
}

.comparison-content h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 255, 127, 0.2);
  padding-bottom: 0.5rem;
  color: var(--daocloud-text-light);
  line-height: 1.4;
}

.comparison-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--daocloud-text-light);
  letter-spacing: 0.02em;
}

/* 表格样式优化 - 适配黑色背景 */
.comparison-layout .comparison-content table {
  width: 100%;
  border-collapse: separate !important;
  border-spacing: 0;
  margin: 2rem 0;
  background: rgba(26, 26, 46, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.4) !important;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 8px 24px rgba(0, 0, 0, 0.4);
}

.comparison-layout .comparison-content thead {
  background: linear-gradient(135deg, rgba(0, 255, 127, 0.2) 0%, rgba(0, 255, 127, 0.1) 100%);
}

.comparison-layout .comparison-content th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--daocloud-primary);
  border-bottom: 2px solid rgba(255, 255, 255, 0.4) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: rgba(0, 255, 127, 0.05);
}

.comparison-layout .comparison-content th:last-child {
  border-right: none !important;
}

.comparison-layout .comparison-content tbody {
  background: transparent;
}

.comparison-layout .comparison-content td {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.3) !important;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--daocloud-text-light);
  background: transparent;
}

.comparison-layout .comparison-content td:last-child {
  border-right: none !important;
}

.comparison-layout .comparison-content tbody tr:last-child td {
  border-bottom: none !important;
}

.comparison-layout .comparison-content tbody tr:hover {
  background: rgba(0, 255, 127, 0.1) !important;
  transition: background 0.3s ease;
}

/* 斑马纹效果 - 增强可读性 */
.comparison-layout .comparison-content tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.03);
}

/* 第一列加强样式 */
.comparison-layout .comparison-content td:first-child {
  font-weight: 600;
  color: rgba(0, 255, 127, 0.9);
  background: rgba(0, 255, 127, 0.05);
  border-left: 3px solid rgba(255, 255, 255, 0.5);
}

/* 表格内的代码样式 */
.comparison-layout .comparison-content td code {
  background: rgba(0, 255, 127, 0.15);
  color: var(--daocloud-primary);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(0, 255, 127, 0.3);
}

/* 表格内的强调文本 */
.comparison-layout .comparison-content td strong {
  color: var(--daocloud-primary);
  font-weight: 600;
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
  
  .comparison-content {
    padding: 100px 40px 40px 40px;
  }
  
  /* 响应式表格 */
  .comparison-layout .comparison-content table {
    font-size: 1rem;
  }
  
  .comparison-layout .comparison-content th,
  .comparison-layout .comparison-content td {
    padding: 0.8rem 1rem;
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
  
  .comparison-content {
    padding: 90px 30px 30px 30px;
  }
  
  /* 移动端表格优化 */
  .comparison-layout .comparison-content table {
    font-size: 0.9rem;
  }
  
  .comparison-layout .comparison-content th,
  .comparison-layout .comparison-content td {
    padding: 0.6rem 0.8rem;
  }
}
</style> 