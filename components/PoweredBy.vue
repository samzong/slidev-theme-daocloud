<template>
  <div v-if="state.shouldShow.value" :class="componentClasses">
    <!-- 插槽内容优先 -->
    <slot v-if="finalType === 'slot'" />
    
    <!-- SVG 内容 -->
    <div 
      v-else-if="finalType === 'svg' && finalSvgContent" 
      class="powered-by-svg" 
      v-html="finalSvgContent" 
    />

    <!-- 文本内容 -->
    <div v-else-if="finalType === 'text'" class="powered-by-text">
      {{ finalContent }}
    </div>

    <!-- 图片内容（默认） -->
    <img 
      v-else-if="finalType === 'image'" 
      :src="finalContent" 
      :alt="props.alt" 
      class="powered-by-img"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useComponentState, generateComponentClasses, MediaComponentValidator } from '../composables/useBaseComponent'
import { useThemeConfig } from '../composables/useThemeConfig'

// 定义组件的 Props
const props = defineProps({
  type: { type: String, default: undefined },
  variant: { type: String, default: undefined },
  src: { type: String, default: undefined },
  svgContent: { type: String, default: undefined },
  text: { type: String, default: undefined },
  alt: { type: String, default: 'Powered By' },
  position: { type: String, default: undefined },
  size: { type: String, default: undefined },
  hidden: { type: Boolean, default: false },
})

// 获取全局主题配置
const themeConfig = useThemeConfig()

// 使用 useComponentState hook 来管理组件状态
const state = useComponentState('PoweredBy', props)

// 决定最终使用的内容类型
const finalType = computed(() => props.type || themeConfig.poweredByType.value)

// 决定最终使用的内容
const finalContent = computed(() => {
  if (finalType.value === 'image') return props.src || themeConfig.poweredByImage.value
  if (finalType.value === 'text') return props.text || themeConfig.poweredByText.value
  return ''
})

// 决定最终的 SVG 内容
const finalSvgContent = computed(() => props.svgContent || themeConfig.poweredBySvg.value)

// 生成样式类
const componentClasses = computed(() => generateComponentClasses(
  'PoweredBy',
  state.finalVariant.value,
  state.finalPosition.value,
  state.finalSize.value,
))

// 在组件挂载时执行验证
onMounted(() => {
  MediaComponentValidator.validate(finalType.value, {
    src: finalContent.value,
    svgContent: finalSvgContent.value,
    textContent: finalContent.value,
  }, 'PoweredBy')
})
</script>