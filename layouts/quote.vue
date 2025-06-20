<template>
  <div class="quote-layout">
    <!-- 背景装饰 -->
    <div class="quote-decoration">
      <div class="quote-marks">
        <div class="quote-mark quote-left">"</div>
        <div class="quote-mark quote-right">"</div>
      </div>
      <div class="flowing-line"></div>
    </div>
    
    <!-- 主要内容区 -->
    <div class="quote-content">
      <!-- 引用内容 -->
      <blockquote class="quote-text">
        <slot />
      </blockquote>
      
      <!-- 作者信息 -->
      <div class="quote-attribution" v-if="$frontmatter.author || $frontmatter.source">
        <!-- 作者头像 -->
        <div class="author-avatar" v-if="$frontmatter.avatar">
          <img :src="$frontmatter.avatar" :alt="$frontmatter.author" class="avatar-img">
        </div>
        
        <!-- 作者信息 -->
        <div class="author-info">
          <div v-if="$frontmatter.author" class="author-name">{{ $frontmatter.author }}</div>
          <div v-if="$frontmatter.title" class="author-title">{{ $frontmatter.title }}</div>
          <div v-if="$frontmatter.source" class="quote-source">{{ $frontmatter.source }}</div>
        </div>
      </div>
      
      <!-- 标签或分类 -->
      <div class="quote-tags" v-if="$frontmatter.tags">
        <span v-for="tag in $frontmatter.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      
      <!-- 附加说明 -->
      <div class="quote-note" v-if="$frontmatter.note">
        <div class="note-content">{{ $frontmatter.note }}</div>
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
.quote-layout {
  background: linear-gradient(135deg, var(--daocloud-bg-dark) 0%, var(--daocloud-secondary) 100%);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 60px;
}

.quote-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.quote-marks {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.quote-mark {
  position: absolute;
  font-size: 20rem;
  font-weight: 900;
  color: rgba(0, 255, 127, 0.1);
  font-family: Georgia, serif;
  line-height: 1;
  user-select: none;
}

.quote-left {
  top: 10%;
  left: 5%;
  animation: float 8s ease-in-out infinite;
}

.quote-right {
  bottom: 10%;
  right: 5%;
  transform: rotate(180deg);
  animation: float 8s ease-in-out infinite reverse;
}

.flowing-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--daocloud-primary) 20%,
    var(--daocloud-primary) 80%,
    transparent 100%
  );
  transform: translateY(-50%);
  animation: flowingGlow 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.1;
  }
  50% {
    transform: translateY(-20px);
    opacity: 0.15;
  }
}

@keyframes flowingGlow {
  0%, 100% {
    opacity: 0.3;
    transform: translateY(-50%) scaleX(1);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-50%) scaleX(1.1);
  }
}

.quote-content {
  max-width: 900px;
  text-align: center;
  z-index: 10;
  animation: fadeInUp 1s ease-out;
}

.quote-text {
  font-size: 2.2rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 0 0 3rem 0;
  padding: 0;
  border: none;
  background: none;
  font-style: italic;
  color: var(--daocloud-text-light);
  position: relative;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.quote-text::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -1rem;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--daocloud-primary), var(--daocloud-primary-dark));
  border-radius: 2px;
}

.quote-attribution {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.author-avatar {
  flex-shrink: 0;
}

.avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--daocloud-primary);
  box-shadow: 0 8px 24px rgba(0, 255, 127, 0.3);
}

.author-info {
  text-align: left;
}

.author-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--daocloud-primary);
  margin-bottom: 0.3rem;
}

.author-title {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.3rem;
}

.quote-source {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
}

.quote-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-out 0.6s both;
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

.quote-note {
  animation: fadeInUp 1s ease-out 0.8s both;
}

.note-content {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 255, 127, 0.05);
  border: 1px solid rgba(0, 255, 127, 0.2);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  line-height: 1.6;
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

/* 特殊情况：没有作者信息时的样式调整 */
.quote-content:not(:has(.quote-attribution)) .quote-text {
  margin-bottom: 2rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .quote-layout {
    padding: 2rem;
  }
  
  .quote-text {
    font-size: 1.8rem;
  }
  
  .quote-mark {
    font-size: 12rem;
  }
  
  .quote-left {
    top: 5%;
    left: 2%;
  }
  
  .quote-right {
    bottom: 5%;
    right: 2%;
  }
  
  .quote-attribution {
    flex-direction: column;
    text-align: center;
  }
  
  .author-info {
    text-align: center;
  }
  
  .avatar-img {
    width: 60px;
    height: 60px;
  }
}

/* 无头像时的居中对齐 */
.quote-attribution:not(:has(.author-avatar)) {
  justify-content: center;
}

.quote-attribution:not(:has(.author-avatar)) .author-info {
  text-align: center;
}
</style> 