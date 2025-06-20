<template>
  <div class="progress-bar" :class="progressBarClass">
    <div 
      class="progress-fill" 
      :style="{ width: progressPercentage + '%' }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  style?: 'default' | 'thin' | 'hidden'
}

const props = withDefaults(defineProps<Props>(), {
  style: 'default'
})

const progressBarClass = computed(() => ({
  'progress-bar-thin': props.style === 'thin',
  'progress-bar-hidden': props.style === 'hidden'
}))

const progressPercentage = computed(() => {
  return Math.round(($slidev.nav.currentPage / $slidev.nav.total) * 100)
})
</script>

<style scoped>
.progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
}

.progress-bar-thin {
  height: 2px;
}

.progress-bar-hidden {
  display: none;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--daocloud-primary) 0%, var(--daocloud-primary-dark) 100%);
  transition: width 0.3s ease;
  position: relative;
}

.progress-fill::after {
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
</style> 