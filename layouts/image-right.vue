<template>
  <div class="image-right-layout">
    <!-- 内容容器 -->
    <div class="image-right-container">
      <!-- 文字内容区域 -->
      <div class="content-section">
        <!-- 标题区域 -->
        <div class="content-header">
          <h1 v-if="$frontmatter.title" class="content-title">{{ $frontmatter.title }}</h1>
          <h2 v-if="$frontmatter.subtitle" class="content-subtitle">{{ $frontmatter.subtitle }}</h2>
        </div>
        
        <!-- 内容区域 -->
        <div class="content-body">
          <slot />
        </div>
        
        <!-- 标签或按钮区域 -->
        <div class="content-footer" v-if="$frontmatter.tags || $frontmatter.action">
          <div class="tags" v-if="$frontmatter.tags">
            <span v-for="tag in $frontmatter.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div v-if="$frontmatter.action" class="action-button">
            {{ $frontmatter.action }}
          </div>
        </div>
      </div>
      
      <!-- 图片区域 -->
      <div class="image-section">
        <div class="image-wrapper">
          <img 
            v-if="$frontmatter.image" 
            :src="$frontmatter.image" 
            :alt="$frontmatter.imageAlt || 'Image'"
            class="main-image"
          >
          <div v-else class="image-placeholder">
            <div class="placeholder-icon">🖼️</div>
            <span class="placeholder-text">图片区域</span>
          </div>
        </div>
        <!-- 图片说明 -->
        <div v-if="$frontmatter.imageCaption" class="image-caption">
          {{ $frontmatter.imageCaption }}
        </div>
      </div>
    </div>
    
    <Logo v-if="$frontmatter.showLogo !== false" />
    <PoweredBy v-if="$frontmatter.showPoweredBy !== false" />
    <ProgressBar />
  </div>
</template>

<style scoped>
.image-right-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 40px 60px;
}

.image-right-container {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 4rem;
  height: 100%;
  align-items: center;
}

.content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  animation: slideInLeft 0.8s ease-out;
}

.content-header {
  margin-bottom: 2rem;
}

.content-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--daocloud-primary), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.content-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

.content-body {
  flex: 1;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.content-body h1,
.content-body h2,
.content-body h3 {
  color: var(--daocloud-primary);
  margin-bottom: 1rem;
}

.content-body ul {
  padding-left: 1.5rem;
}

.content-body li {
  margin-bottom: 0.8rem;
}

.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(0, 255, 127, 0.1);
  color: var(--daocloud-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 127, 0.3);
}

.action-button {
  background: linear-gradient(135deg, var(--daocloud-primary) 0%, var(--daocloud-primary-dark) 100%);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 255, 127, 0.3);
}

.action-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 127, 0.4);
}

.image-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  animation: slideInRight 0.8s ease-out;
}

.image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.image-wrapper:hover {
  transform: translateY(-5px);
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.image-wrapper:hover .main-image {
  transform: scale(1.02);
}

.image-placeholder {
  background: rgba(0, 255, 127, 0.1);
  border: 2px dashed rgba(0, 255, 127, 0.3);
  border-radius: 12px;
  padding: 4rem 2rem;
  text-align: center;
  color: var(--daocloud-primary);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.placeholder-text {
  font-size: 1.2rem;
  font-weight: 500;
}

.image-caption {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .image-right-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .content-title {
    font-size: 2.2rem;
  }
  
  .content-body {
    font-size: 1.1rem;
  }
  
  /* 在移动设备上，图片显示在内容下方 */
  .image-right-container {
    grid-template-rows: auto auto;
  }
  
  .image-section {
    order: 2;
  }
  
  .content-section {
    order: 1;
  }
}
</style> 