<template>
  <div class="comparison-layout">
    <!-- 页面标题区域 - 与 default.vue 保持一致 -->
    <div class="page-header" v-if="$frontmatter.title">
      <div class="title-decorator"></div>
      <h1 class="page-title">{{ $frontmatter.title }}</h1>
    </div>
    
    <div class="comparison-container">
      <div class="comparison-content">
        <slot />
      </div>
    </div>
    
    <ProgressBar />
  </div>
</template>

<style scoped>
.comparison-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

/* 主容器 - 调整为顶部对齐 */
.comparison-container {
  flex: 1;
  display: flex;
  align-items: flex-start; /* 改为顶部对齐 */
  justify-content: center;
  padding: 120px 80px 80px 80px; /* 增加顶部间距，确保不被标题遮挡 */
  overflow: hidden;
  min-height: 0;
}

.comparison-content {
  width: 100%;
  max-width: 1400px; /* 限制最大宽度 */
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 元素间距 */
  overflow: auto;
  position: relative;
}

/* 标题样式 - 紧凑布局 */
.comparison-content h1 {
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  color: var(--daocloud-primary);
  line-height: 1.2;
}

.comparison-content h2 {
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
  border-bottom: 2px solid rgba(0, 255, 127, 0.2);
  padding-bottom: 0.4rem;
  color: var(--daocloud-text-light);
  line-height: 1.3;
}

.comparison-content p {
  font-size: 1.15rem;
  line-height: 1.6;
  margin: 0;
  color: var(--daocloud-text-light);
  opacity: 0.9;
}

/* 表格样式 - 增强视觉效果 */
.comparison-layout .comparison-content table {
  width: 100%;
  margin: 0;
  table-layout: auto;
  border-collapse: separate;
  border-spacing: 0;
  background: rgba(26, 26, 46, 0.6);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

/* 表头样式 - 更突出 */
.comparison-layout .comparison-content thead {
  background: linear-gradient(135deg, rgba(0, 255, 127, 0.25) 0%, rgba(0, 255, 127, 0.15) 100%);
}

.comparison-layout .comparison-content th {
  padding: 1.2rem 1.5rem;
  text-align: left;
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--daocloud-primary);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: rgba(0, 255, 127, 0.08);
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.comparison-layout .comparison-content th:first-child {
  min-width: 180px; /* 使用最小宽度替代固定宽度 */
}

.comparison-layout .comparison-content th:last-child {
  border-right: none;
}

/* 表格主体 */
.comparison-layout .comparison-content tbody {
  background: transparent;
}

.comparison-layout .comparison-content td {
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--daocloud-text-light);
  background: transparent;
  vertical-align: top;
  transition: background-color 0.2s ease;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.comparison-layout .comparison-content td:last-child {
  border-right: none;
}

.comparison-layout .comparison-content tbody tr:last-child td {
  border-bottom: none;
}

/* 悬停效果 - 优化性能 */
.comparison-layout .comparison-content tbody tr {
  transition: background-color 0.2s ease;
}

.comparison-layout .comparison-content tbody tr:hover {
  background: rgba(0, 255, 127, 0.12);
}

.comparison-layout .comparison-content tbody tr:hover td {
  color: #ffffff;
}

/* 斑马纹效果 */
.comparison-layout .comparison-content tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

/* 第一列加强样式 */
.comparison-layout .comparison-content td:first-child {
  font-weight: 700;
  color: rgba(0, 255, 127, 1);
  background: rgba(0, 255, 127, 0.08);
  border-left: 4px solid var(--daocloud-primary);
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  min-width: 180px;
}

/* 表格内的代码样式 */
.comparison-layout .comparison-content td code,
.comparison-layout .comparison-content th code {
  background: rgba(0, 255, 127, 0.2);
  color: #00ff7f;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(0, 255, 127, 0.4);
  white-space: nowrap;
  font-weight: 500;
}

/* 表格内的强调文本 */
.comparison-layout .comparison-content td strong,
.comparison-layout .comparison-content th strong {
  color: var(--daocloud-primary);
  font-weight: 700;
}

/* 表格内的换行处理 - 使用 <br/> 标签 */
.comparison-layout .comparison-content td br {
  display: block;
  content: "";
  margin: 0.3rem 0;
}

/* 针对内容较多的单元格优化 */
.comparison-layout .comparison-content td {
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

/* 装饰性元素 - 增加视觉趣味 */
.comparison-layout::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 40%;
  height: 40%;
  background: radial-gradient(circle, rgba(0, 255, 127, 0.1) 0%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 1;
}

/* 大屏幕优化 - 充分利用空间 */
@media (min-width: 1440px) {
  .comparison-container {
    padding: 140px 100px 100px 100px;
  }
  
  .comparison-layout .comparison-content th {
    padding: 1.3rem 1.8rem;
    font-size: 1.2rem;
  }
  
  .comparison-layout .comparison-content td {
    padding: 1.3rem 1.8rem;
    font-size: 1.15rem;
  }
}

/* 中等屏幕 */
@media (max-width: 1024px) {
  .page-header {
    top: 30px;
    left: 30px;
  }
  
  .page-title {
    font-size: 1.6rem;
  }
  
  .comparison-container {
    padding: 100px 50px 50px 50px;
  }
  
  .comparison-layout .comparison-content th,
  .comparison-layout .comparison-content td {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
}

/* 小屏幕优化 */
@media (max-width: 768px) {
  .page-header {
    top: 20px;
    left: 20px;
  }
  
  .title-decorator {
    width: 20px;
    height: 20px;
  }
  
  .page-title {
    font-size: 1.4rem;
  }
  
  .comparison-container {
    padding: 80px 20px 20px 20px;
  }
  
  /* 移动端表格优化 - 卡片式布局 */
  .comparison-layout .comparison-content table {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 1rem;
  }
  
  .comparison-layout .comparison-content thead {
    display: none; /* 隐藏表头，使用卡片式布局 */
  }
  
  .comparison-layout .comparison-content tbody {
    display: block;
  }
  
  .comparison-layout .comparison-content tr {
    display: block;
    margin-bottom: 1rem;
    background: rgba(26, 26, 46, 0.8);
    border-radius: 8px;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .comparison-layout .comparison-content td {
    display: block;
    padding: 0.5rem 0;
    border: none;
    text-align: left;
  }
  
  .comparison-layout .comparison-content td:before {
    content: attr(data-label) ": ";
    font-weight: bold;
    color: var(--daocloud-primary);
    display: inline-block;
    min-width: 100px;
  }
  
  .comparison-layout .comparison-content td:first-child {
    border-left: none;
    background: transparent;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .comparison-layout .comparison-content td:first-child:before {
    content: "";
    display: none;
  }
}

/* 针对超宽表格的滚动条样式 */
.comparison-content::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.comparison-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
}

.comparison-content::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 127, 0.4);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 255, 127, 0.6);
}

/* 确保内容不会太拥挤 */
.comparison-layout .comparison-content > *:not(table) {
  max-width: 1200px;
}
</style>