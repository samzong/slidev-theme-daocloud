<template>
  <div class="center-layout">
    <!-- 主要内容区 -->
    <div class="center-content">
      <!-- 图标或表情 -->
      <div class="center-icon" v-if="$frontmatter.icon">
        <div class="icon-wrapper" v-html="$frontmatter.icon"></div>
      </div>
      
      <!-- 标题区域 -->
      <div class="center-header">
        <h1 v-if="$frontmatter.title" class="center-title">{{ $frontmatter.title }}</h1>
        <h2 v-if="$frontmatter.subtitle" class="center-subtitle">{{ $frontmatter.subtitle }}</h2>
      </div>
      
      <!-- 内容区域 -->
      <div class="center-body">
        <slot />
      </div>
      
      <!-- 强调信息 -->
      <div class="center-highlight" v-if="$frontmatter.highlight">
        <div class="highlight-content">{{ $frontmatter.highlight }}</div>
      </div>
      
      <!-- 底部信息 -->
      <div class="center-footer" v-if="$frontmatter.note">
        <div class="note-content">{{ $frontmatter.note }}</div>
      </div>
    </div>
    
    <Logo v-if="showLogo" :position="logoPosition" />
    <PoweredBy v-if="showPoweredBy" :variant="poweredByVariant" />
    <ProgressBar v-if="showProgressBar" :style="progressBarStyle" />
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'

const { 
  showLogo, 
  showPoweredBy, 
  showProgressBar, 
  logoPosition,
  poweredByVariant,
  progressBarStyle 
} = useThemeConfig()
</script>

<style scoped>
.center-layout {
  background: transparent;
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-content {
  text-align: center;
  max-width: 800px;
  padding: 3rem;
  z-index: 10;
}

.center-icon {
  margin-bottom: 2rem;
}

.icon-wrapper {
  display: inline-block;
  font-size: 4rem;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 255, 127, 0.1);
  border-radius: 50%;
  border: 3px solid rgba(0, 255, 127, 0.3);
  color: var(--daocloud-primary);
}

.center-header {
  margin-bottom: 2.5rem;
}

.center-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--daocloud-primary), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.center-subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.3;
}

.center-body {
  font-size: 1.4rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.center-body h1,
.center-body h2,
.center-body h3 {
  color: var(--daocloud-primary);
  margin-bottom: 1rem;
}

.center-body p {
  margin-bottom: 1.5rem;
}

.center-body ul {
  display: inline-block;
  text-align: left;
  padding-left: 1.5rem;
}

.center-highlight {
  margin-bottom: 2rem;
}

.highlight-content {
  background: rgba(0, 255, 127, 0.1);
  border: 1px solid rgba(0, 255, 127, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--daocloud-primary);
}

.center-footer {
  margin-top: 2rem;
}

.note-content {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .center-title {
    font-size: 3rem;
  }
  
  .center-subtitle {
    font-size: 1.5rem;
  }
  
  .icon-wrapper {
    width: 100px;
    height: 100px;
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .center-content {
    padding: 2rem;
  }
  
  .center-title {
    font-size: 2.5rem;
  }
  
  .center-subtitle {
    font-size: 1.3rem;
  }
  
  .center-body {
    font-size: 1.2rem;
  }
  
  .icon-wrapper {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .center-content {
    padding: 1.5rem;
  }
  
  .center-title {
    font-size: 2rem;
  }
  
  .center-subtitle {
    font-size: 1.1rem;
  }
  
  .center-body {
    font-size: 1rem;
  }
}
</style>