<template>
  <div class="powered-by" :class="containerClass" v-if="!finalHidden">
    <!-- 插槽内容优先 -->
    <slot v-if="$slots.default" />
    <!-- 文本内容 -->
    <div v-else-if="type === 'text'" class="powered-by-text" :class="textClass">
      {{ finalText }}
    </div>
    <!-- 图片内容（默认） -->
    <img v-else :src="finalImage" :alt="finalAlt" class="powered-by-img" :class="imageClass" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeConfig } from '../composables/useThemeConfig'

interface Props {
  /** 内容类型：image(图片) | text(文本) | slot(插槽) */
  type?: 'image' | 'text' | 'slot'
  /** 样式变体 */
  variant?: 'default' | 'white' | 'dark' | 'minimal'
  /** 自定义图片路径 */
  src?: string
  /** 自定义文本内容 */
  text?: string
  /** 图片描述 */
  alt?: string
  /** 组件位置 */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** 组件尺寸 */
  size?: 'sm' | 'md' | 'lg'
  /** 是否隐藏 */
  hidden?: boolean
  /** 品牌名称（用于文本模式） */
  brand?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'image',
  variant: undefined, // 使用配置系统默认值
  alt: 'Powered By',
  position: 'bottom-right',
  size: 'md',
  hidden: false,
  brand: 'DaoCloud'
})

const { poweredByVariant, showPoweredBy } = useThemeConfig()

// 最终使用的配置
const finalVariant = computed(() => props.variant || poweredByVariant.value)
const finalHidden = computed(() => props.hidden || !showPoweredBy.value)
const finalText = computed(() => {
  if (props.text) return props.text
  return `Powered by ${props.brand}`
})
const finalAlt = computed(() => {
  if (props.alt !== 'Powered By') return props.alt
  return `Powered By ${props.brand}`
})
const finalImage = computed(() => {
  if (props.src) return props.src
  // 默认图片路径逻辑
  const variant = finalVariant.value
  if (variant === 'white') return '/powerby-white.png'
  if (variant === 'dark') return '/powerby-dark.png'
  return '/powerby-default.png'
})

// 样式类
const containerClass = computed(() => [
  `powered-by-position-${props.position}`,
  `powered-by-size-${props.size}`,
  `powered-by-variant-${finalVariant.value}`
])

const imageClass = computed(() => [
  'powered-by-image',
  `powered-by-image-${finalVariant.value}`
])

const textClass = computed(() => [
  `powered-by-text-${finalVariant.value}`,
  `powered-by-text-${props.size}`
])
</script>