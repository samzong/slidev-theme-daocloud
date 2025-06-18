<template>
  <!-- 此组件无需渲染任何内容，只负责控制动画状态 -->
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useThemeConfig } from '../composables/useThemeConfig'

const { disableAnimations } = useThemeConfig()

// 设置 HTML 属性来控制动画
function updateAnimationState(disable: boolean) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-disable-animations', String(disable))
  }
}

// 监听配置变化
watch(() => disableAnimations, (newValue) => {
  updateAnimationState(newValue)
}, { immediate: true })

// 组件挂载时设置初始状态
onMounted(() => {
  updateAnimationState(disableAnimations)
})
</script>