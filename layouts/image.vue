<template>
  <div class="image-layout">
    <!-- 页面标题（可选） -->
    <div class="image-header" v-if="$frontmatter.title">
      <h1 class="image-title">{{ $frontmatter.title }}</h1>
      <p v-if="$frontmatter.subtitle" class="image-subtitle">{{ $frontmatter.subtitle }}</p>
    </div>

    <!-- 图片容器 -->
    <div class="image-container">
      <img 
        v-if="$frontmatter.image" 
        :src="$frontmatter.image" 
        :alt="$frontmatter.alt || $frontmatter.title || 'Image'"
        class="main-image"
        :style="{
          objectFit: $frontmatter.objectFit || 'cover'
        }"
      />
      <div v-else class="image-placeholder">
        <div class="placeholder-icon">🖼️</div>
        <p class="placeholder-text">请在 frontmatter 中设置 image 属性</p>
        <code class="placeholder-example">
          ---<br>
          layout: image<br>
          image: /path/to/image.png<br>
          title: 可选标题<br>
          caption: 可选说明文字<br>
          objectFit: cover # 可选: cover | contain | fill | scale-down<br>
          ---
        </code>
      </div>
    </div>

    <!-- 图片说明（可选） -->
    <div v-if="$frontmatter.caption" class="image-caption">
      {{ $frontmatter.caption }}
    </div>

    <!-- 额外内容区域（可选） -->
    <div v-if="$slots.default" class="content-area">
      <slot />
    </div>

    <ProgressBar />
  </div>
</template>

<style scoped>
.image-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* 标题区域 */
.image-header {
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  padding: 1.5rem 3rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  animation: fadeIn 0.6s ease-out;
}

.image-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--daocloud-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.image-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* 图片容器 */
.image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: scaleIn 0.8s ease-out;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 改为 cover 以铺满整个容器 */
}

/* 占位符 */
.image-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 255, 127, 0.05);
  border: 2px dashed rgba(0, 255, 127, 0.3);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  z-index: 10;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.placeholder-text {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.placeholder-example {
  display: inline-block;
  text-align: left;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 1.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: rgba(0, 255, 127, 0.8);
  line-height: 1.5;
}

/* 图片说明 */
.image-caption {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  max-width: 80%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem 2rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  animation: fadeIn 1s ease-out;
}

/* 额外内容区域 */
.content-area {
  position: absolute;
  bottom: 8rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 800px;
  text-align: center;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  padding: 1.5rem 2rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  animation: fadeIn 1s ease-out;
}

.content-area p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .image-layout {
    padding: 1rem;
  }

  .image-title {
    font-size: 2rem;
  }

  .image-subtitle {
    font-size: 1rem;
  }

  .main-image {
    max-height: 60vh;
  }

  .image-caption {
    font-size: 0.9rem;
    max-width: 90%;
  }
}

@media (max-width: 480px) {
  .image-title {
    font-size: 1.5rem;
  }

  .image-subtitle {
    font-size: 0.9rem;
  }

  .main-image {
    max-height: 50vh;
  }
}
</style> 