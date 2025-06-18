<template>
  <div class="two-cols-layout">
    <!-- 标题区域 -->
    <div class="cols-header" v-if="$frontmatter.title || $frontmatter.subtitle">
      <h1 v-if="$frontmatter.title" class="cols-title">{{ $frontmatter.title }}</h1>
      <h2 v-if="$frontmatter.subtitle" class="cols-subtitle">{{ $frontmatter.subtitle }}</h2>
    </div>
    
    <!-- 双栏内容区域 -->
    <div class="cols-container">
      <!-- 左栏 -->
      <div class="col-left">
        <div class="col-header" v-if="$frontmatter.leftTitle">
          <h3 class="col-title">{{ $frontmatter.leftTitle }}</h3>
        </div>
        <div class="col-content">
          <slot name="left">
            <!-- 如果没有使用具名插槽，则显示默认内容的前半部分 -->
            <slot />
          </slot>
        </div>
      </div>
      
      <!-- 分隔线 -->
      <div class="cols-divider"></div>
      
      <!-- 右栏 -->
      <div class="col-right">
        <div class="col-header" v-if="$frontmatter.rightTitle">
          <h3 class="col-title">{{ $frontmatter.rightTitle }}</h3>
        </div>
        <div class="col-content">
          <slot name="right">
            <!-- 右栏默认内容 -->
          </slot>
        </div>
      </div>
    </div>
    
    <Logo v-if="$frontmatter.showLogo !== false" />
    <PoweredBy v-if="$frontmatter.showPoweredBy !== false" />
    <ProgressBar />
  </div>
</template>

<style scoped>
.two-cols-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
}

.cols-header {
  text-align: center;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.cols-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--daocloud-primary);
}

.cols-subtitle {
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
}

.cols-container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  flex: 1;
  align-items: start;
}

.col-left, .col-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: slideInUp 0.8s ease-out;
}

.col-left {
  animation-delay: 0.2s;
}

.col-right {
  animation-delay: 0.4s;
}

.col-header {
  margin-bottom: 1.5rem;
  position: relative;
}

.col-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--daocloud-primary);
  position: relative;
  padding-bottom: 0.5rem;
}

.col-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--daocloud-primary);
  border-radius: 1px;
}

.col-content {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
}

.col-content h1,
.col-content h2,
.col-content h3 {
  color: var(--daocloud-primary);
  margin-bottom: 1rem;
}

.col-content ul {
  padding-left: 1.5rem;
}

.col-content li {
  margin-bottom: 0.8rem;
  position: relative;
}

.col-content li::marker {
  color: var(--daocloud-primary);
}

.cols-divider {
  width: 2px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    var(--daocloud-primary) 20%,
    var(--daocloud-primary) 80%,
    transparent 100%
  );
  border-radius: 1px;
  position: relative;
  animation: growHeight 1s ease-out 0.6s both;
}

.cols-divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: var(--daocloud-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(0, 255, 127, 0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growHeight {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100%;
    opacity: 1;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .cols-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .cols-divider {
    display: none;
  }
}
</style> 