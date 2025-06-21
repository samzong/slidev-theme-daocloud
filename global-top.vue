<template>
  <header class="slidev-global-top">
    <Logo v-if="showLogo" />
    <PageHeader v-if="showHeader" />
  </header>
  <!-- 使用官方推荐的 slidev-component-progress 插件 -->
  <Progress 
    level="2"
    :bar-color="progressBarColor"
    height="3px"
    :opacity="0.6"
    position="bottom"
    :transition-duration="200"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Progress from 'slidev-component-progress/components/Progress.vue'
import PageHeader from './components/PageHeader.vue'
import Logo from './components/Logo.vue'
import { useThemeConfig } from './composables/useThemeConfig'

// 使用主题配置
const { themeConfig, showHeader, showLogo } = useThemeConfig()

// 计算进度条颜色，使用主题的primary色
const progressBarColor = computed(() => {
  // 从CSS变量获取主题色，如果没有则使用默认值
  return 'var(--daocloud-primary, #00ff7f)'
})
</script>

<style>
/* 
  自定义进度条样式，与DaoCloud主题保持一致
  这些样式会影响 slidev-component-progress 插件的Progress组件
*/
.progress-bar {
  background: linear-gradient(90deg, var(--daocloud-primary, #00ff7f) 0%, var(--daocloud-primary-dark, #00cc66) 100%);
  box-shadow: 0 0 10px rgba(0, 255, 127, 0.3);
}

/* 进度条发光效果 */
.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4));
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

/* 确保进度条在所有布局中都能正确显示 */
.slidev-layout .progress-bar {
  z-index: 1000;
}
</style> 