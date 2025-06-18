<template>
  <div class="image-left-layout">
    <!-- 页面标题区域 - 与 default.vue 保持一致 -->
    <div class="page-header" v-if="$frontmatter.title">
      <div class="title-decorator"></div>
      <h1 class="page-title">{{ $frontmatter.title }}</h1>
    </div>
    
    <!-- 内容容器 -->
    <div class="image-left-container">
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
      
      <!-- 文字内容区域 -->
      <div class="content-section">
        <!-- 内容区域 -->
        <div class="content-body">
          <slot />
        </div>
      </div>
    </div>
    
    <ProgressBar />
  </div>
</template>

<style scoped>
.image-left-layout {
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

.image-left-container {
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 3rem;
  height: 100%;
  align-items: center;
  padding: 120px 60px 60px 60px;
}

.image-section {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  animation: slideInLeft 0.8s ease-out;
  padding-left: 2rem;
}

.image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  max-width: 100%;
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

.content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  animation: slideInRight 0.8s ease-out;
  padding-left: 2rem;
}

.content-body {
  font-size: 1.2rem;
  line-height: 1.8;
}

.content-body h1 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--daocloud-primary);
  line-height: 1.3;
}

.content-body h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--daocloud-text-light);
  line-height: 1.4;
}

.content-body p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--daocloud-text-light);
  letter-spacing: 0.02em;
}

.content-body ul {
  font-size: 1.2rem;
  line-height: 1.9;
  padding-left: 0;
  margin-bottom: 2rem;
  list-style: none;
}

.content-body li {
  margin-bottom: 1.2rem;
  position: relative;
  padding-left: 2rem;
  line-height: 1.9;
  color: var(--daocloud-text-light);
  letter-spacing: 0.02em;
}

.content-body li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--daocloud-primary);
  font-weight: 600;
  font-size: 1.2rem;
}

.content-body li strong {
  color: var(--daocloud-primary);
  font-weight: 600;
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
@media (max-width: 1024px) {
  .page-header {
    top: 40px;
    left: 40px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .image-left-container {
    padding: 100px 40px 40px 40px;
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
  
  .image-left-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 90px 30px 30px 30px;
  }
  
  .content-body {
    font-size: 1.1rem;
  }
  
  .image-section {
    padding-left: 0;
  }
  
  .content-section {
    padding-left: 0;
  }
}
</style> 