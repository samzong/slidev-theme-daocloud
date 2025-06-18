<template>
  <div class="intro-layout">
    <!-- 背景装饰 -->
    <div class="intro-decoration">
      <div class="floating-circle circle-1"></div>
      <div class="floating-circle circle-2"></div>
    </div>
    
    <!-- 主要内容区 -->
    <div class="intro-content">
      <!-- 头像/图标区域 -->
      <div class="intro-avatar" v-if="$frontmatter.avatar || $frontmatter.icon">
        <img v-if="$frontmatter.avatar" :src="$frontmatter.avatar" alt="Avatar" class="avatar-img">
        <div v-else-if="$frontmatter.icon" class="avatar-icon" v-html="$frontmatter.icon"></div>
      </div>
      
      <!-- 标题区域 -->
      <div class="intro-header">
        <h1 v-if="$frontmatter.title" class="intro-title">{{ $frontmatter.title }}</h1>
        <h2 v-if="$frontmatter.subtitle" class="intro-subtitle">{{ $frontmatter.subtitle }}</h2>
      </div>
      
      <!-- 内容区域 -->
      <div class="intro-body">
        <slot />
      </div>
      
      <!-- 标签区域 -->
      <div class="intro-tags" v-if="$frontmatter.tags">
        <span v-for="tag in $frontmatter.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    
    <Logo v-if="$frontmatter.showLogo === true" />
    <PoweredBy v-if="$frontmatter.showPoweredBy === true" />
    <ProgressBar />
  </div>
</template>

<style scoped>
.intro-layout {
  background: linear-gradient(135deg, var(--daocloud-bg-dark) 0%, var(--daocloud-secondary) 100%);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, var(--daocloud-primary) 0%, transparent 70%);
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  left: 15%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.intro-content {
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  z-index: 10;
  animation: fadeInUp 1s ease-out;
}

.intro-avatar {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid var(--daocloud-primary);
  box-shadow: 0 8px 32px rgba(0, 255, 127, 0.3);
  object-fit: cover;
  display: block;
  margin: 0 auto;
}

.avatar-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 127, 0.1);
  border-radius: 50%;
  border: 2px solid var(--daocloud-primary);
  font-size: 3rem;
  color: var(--daocloud-primary);
}

.intro-header {
  margin-bottom: 2rem;
}

.intro-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--daocloud-primary), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.intro-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  animation: fadeInUp 1s ease-out 0.4s both;
}

.intro-body {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.intro-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  animation: fadeInUp 1s ease-out 0.8s both;
}

.tag {
  background: rgba(0, 255, 127, 0.1);
  color: var(--daocloud-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 127, 0.3);
  transition: all 0.3s ease;
}

.tag:hover {
  background: rgba(0, 255, 127, 0.2);
  transform: translateY(-2px);
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

/* 响应式设计 */
@media (max-width: 768px) {
  .intro-content {
    padding: 1.5rem;
  }
  
  .avatar-img {
    width: 100px;
    height: 100px;
  }
  
  .avatar-icon {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
  
  .intro-title {
    font-size: 2.5rem;
  }
  
  .intro-subtitle {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .intro-content {
    padding: 1rem;
  }
  
  .avatar-img {
    width: 80px;
    height: 80px;
  }
  
  .avatar-icon {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  .intro-title {
    font-size: 2rem;
  }
  
  .intro-subtitle {
    font-size: 1.1rem;
  }
}
</style> 