<template>
  <div class="intro-layout">
    <!-- 背景装饰 -->
    <div class="intro-decoration">
      <div class="floating-circle circle-1"></div>
      <div class="floating-circle circle-2"></div>
    </div>
    
    <!-- 主容器 - 两栏布局 -->
    <div class="intro-container">
      <!-- 左侧：原有内容区 -->
      <div class="intro-left">
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
      </div>
      
      <!-- 右侧：技术栈和GitHub贡献图 -->
      <div class="intro-right">
        <!-- 技术栈可视化 -->
        <div class="tech-stack-section" v-if="$frontmatter.techStack">
          <h3 class="section-title">Tech Stack</h3>
          <div class="tech-stack-grid">
            <div 
              v-for="tech in $frontmatter.techStack" 
              :key="tech.name"
              class="tech-item"
              :title="tech.name"
            >
              <div class="tech-icon">
                <img v-if="tech.icon" :src="tech.icon" :alt="tech.name" />
                <span v-else class="tech-text">{{ tech.name.substring(0, 2).toUpperCase() }}</span>
              </div>
              <span class="tech-name">{{ tech.name }}</span>
            </div>
          </div>
        </div>
        
        <!-- GitHub贡献图或认证徽章 -->
        <div class="contributions-section">
          <!-- GitHub 贡献图 -->
          <div v-if="$frontmatter.github" class="github-contributions">
            <h3 class="section-title">GitHub Contributions</h3>
            <div class="contribution-graph">
              <img 
                :src="`https://ghchart.rshah.org/00ff7f/${$frontmatter.github}`" 
                :alt="`${$frontmatter.github}'s GitHub contributions`"
                class="contribution-chart"
              />
            </div>
          </div>
          
          <!-- 认证徽章 -->
          <div v-if="$frontmatter.certifications" class="certifications">
            <h3 class="section-title">Certifications</h3>
            <div class="badges-grid">
              <div 
                v-for="cert in $frontmatter.certifications" 
                :key="cert.name"
                class="badge-item"
              >
                <img v-if="cert.badge" :src="cert.badge" :alt="cert.name" />
                <span v-else class="badge-text">{{ cert.name }}</span>
              </div>
            </div>
          </div>
        </div>
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
  animation-duration: var(--daocloud-animation-duration, 8s);
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

/* 两栏布局容器 */
.intro-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
  max-width: 1400px;
  padding: 2rem;
  z-index: 10;
  align-items: center;
}

/* 左侧内容区 */
.intro-left {
  display: flex;
  justify-content: flex-end;
}

.intro-content {
  text-align: left;
  max-width: 600px;
  padding: 1rem;
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing);
}

.intro-avatar {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.avatar-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--daocloud-primary);
  box-shadow: 0 6px 24px rgba(0, 255, 127, 0.25);
  object-fit: cover;
  display: block;
}

.avatar-icon {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 127, 0.1);
  border-radius: 50%;
  border: 2px solid var(--daocloud-primary);
  font-size: 2.5rem;
  color: var(--daocloud-primary);
}

.intro-header {
  margin-bottom: 1.5rem;
}

.intro-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, var(--daocloud-primary), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.2s both;
}

.intro-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.4s both;
}

.intro-body {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.6s both;
}

.intro-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.8s both;
}

.tag {
  background: rgba(0, 255, 127, 0.1);
  color: var(--daocloud-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(0, 255, 127, 0.3);
  transition: all var(--daocloud-transition-duration) var(--daocloud-transition-timing);
}

.tag:hover {
  background: rgba(0, 255, 127, 0.2);
  transform: translateY(-2px);
}

/* 右侧内容区 */
.intro-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
}

/* 技术栈网格 */
.tech-stack-section {
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.4s both;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--daocloud-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  gap: 0.8rem;
  max-width: 400px;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--daocloud-transition-duration) var(--daocloud-transition-timing);
  cursor: pointer;
}

.tech-item:hover {
  background: rgba(0, 255, 127, 0.1);
  border-color: var(--daocloud-primary);
  transform: translateY(-3px);
}

.tech-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0.9);
}

.tech-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--daocloud-primary);
}

.tech-name {
  font-size: 0.7rem;
  text-align: center;
  opacity: 0.8;
}

/* GitHub贡献图和认证徽章 */
.contributions-section {
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.6s both;
}

.github-contributions {
  margin-bottom: 1.5rem;
}

.contribution-graph {
  background: rgba(255, 255, 255, 0.05);
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.contribution-chart {
  width: 100%;
  height: auto;
  filter: brightness(0.9);
}

.certifications {
  margin-top: 1rem;
}

.badges-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.badge-item {
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--daocloud-transition-duration) var(--daocloud-transition-timing);
}

.badge-item:hover {
  background: rgba(0, 255, 127, 0.1);
  border-color: var(--daocloud-primary);
}

.badge-item img {
  height: 32px;
  width: auto;
}

.badge-text {
  font-size: 0.85rem;
  color: var(--daocloud-primary);
  font-weight: 500;
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
@media (max-width: 1024px) {
  .intro-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }
  
  .intro-left {
    justify-content: center;
  }
  
  .intro-content {
    text-align: center;
  }
  
  .intro-avatar {
    justify-content: center;
  }
  
  .intro-tags {
    justify-content: center;
  }
  
  .intro-right {
    align-items: center;
  }
  
  .tech-stack-grid {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .intro-content {
    padding: 1rem;
  }
  
  .avatar-img, .avatar-icon {
    width: 80px;
    height: 80px;
  }
  
  .avatar-icon {
    font-size: 2rem;
  }
  
  .intro-title {
    font-size: 2rem;
  }
  
  .intro-subtitle {
    font-size: 1.1rem;
  }
  
  .intro-body {
    font-size: 1rem;
  }
  
  .tech-stack-grid {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }
  
  .tech-item {
    padding: 0.6rem;
  }
  
  .tech-icon {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 480px) {
  .intro-content {
    padding: 0.8rem;
  }
  
  .avatar-img, .avatar-icon {
    width: 70px;
    height: 70px;
  }
  
  .avatar-icon {
    font-size: 1.8rem;
  }
  
  .intro-title {
    font-size: 1.8rem;
  }
  
  .intro-subtitle {
    font-size: 1rem;
  }
  
  .tech-item {
    padding: 0.5rem;
  }
  
  .tech-icon {
    width: 28px;
    height: 28px;
  }
}
</style> 