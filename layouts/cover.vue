<template>
  <div class="slidev-layout cover">
    <div class="fluid-ring"></div>
    <div class="cover-content">
      <h1 v-if="$frontmatter.title" class="cover-title">
        {{ $frontmatter.title }}
      </h1>
      <p v-if="$frontmatter.subtitle" class="cover-subtitle">
        {{ $frontmatter.subtitle }}
      </p>
      <div class="cover-meta">
        <div v-if="$frontmatter.author" class="cover-author">
          {{ $frontmatter.author }}
        </div>
        <div v-if="$frontmatter.date" class="cover-date">
          {{ $frontmatter.date }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'

const { showLogo, showPoweredBy,  disableAnimations } = useThemeConfig()
</script>

<style scoped>
.cover {
  background: linear-gradient(135deg, var(--daocloud-bg-dark) 0%, var(--daocloud-secondary) 100%);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.cover-content {
  position: absolute;
  left: var(--layout-content-padding);
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  max-width: var(--layout-content-max-width);
}

.cover-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, var(--daocloud-primary), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cover-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.4;
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.3s both;
}

.cover-meta {
  animation: fadeInUp var(--daocloud-animation-duration) var(--daocloud-animation-timing) 0.6s both;
}

.cover-author {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.cover-date {
  font-size: 1rem;
  opacity: 0.6;
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
</style>