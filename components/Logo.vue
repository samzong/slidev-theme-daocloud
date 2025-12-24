<template>
  <div class="logo-container" :class="containerClass" v-if="shouldShow">
    <!-- 插槽内容优先 -->
    <slot v-if="$slots.default" />
    <!-- SVG 内容 -->
    <div v-else-if="type === 'svg'" class="logo-svg" v-html="svgContent" />
    <!-- 文本内容 -->
    <div v-else-if="type === 'text'" class="logo-text" :class="textClass">
      {{ textContent }}
    </div>
    <!-- 图片内容（默认） -->
    <img v-else :src="finalSrc" :alt="alt" class="logo" :class="imageClass" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useThemeConfig } from "../composables/useThemeConfig";

interface Props {
  /** Logo类型：image(图片) | svg(SVG) | text(文本) | slot(插槽) */
  type?: "image" | "svg" | "text" | "slot";
  /** 图片或SVG路径 */
  src?: string;
  /** SVG内容字符串 */
  svgContent?: string;
  /** 文本内容 */
  textContent?: string;
  /** 图片描述 */
  alt?: string;
  /** Logo位置 */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Logo尺寸 */
  size?: "sm" | "md" | "lg" | "xl";
  /** 样式变体 */
  variant?: "default" | "white" | "dark" | "minimal";
  /** 是否隐藏 */
  hidden?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "image",
  alt: "Logo",
  position: undefined, // 布局级默认值
  size: undefined,
  variant: undefined,
  hidden: false,
});

const { logo, logoPosition, logoSize, logoVariant, showLogo } =
  useThemeConfig();

// 检查 frontmatter 是否显式设置了 logoPosition
const frontmatterPosition = computed(
  () => (globalThis as any).$frontmatter?.logoPosition,
);

// 优先级: frontmatter显式设置 > props(布局默认) > 全局配置
const finalSrc = computed(() => props.src || logo.value);
const finalPosition = computed(
  () => frontmatterPosition.value || props.position || logoPosition.value,
);
const finalSize = computed(() => props.size || logoSize.value);
const finalVariant = computed(() => props.variant || logoVariant.value);
const shouldShow = computed(() => !props.hidden && showLogo.value);

// 容器样式类
const containerClass = computed(() => [
  `logo-position-${finalPosition.value}`,
  `logo-size-${finalSize.value}`,
  `logo-variant-${finalVariant.value}`,
]);

// 图片样式类
const imageClass = computed(() => [
  "logo-image",
  `logo-image-${finalVariant.value}`,
]);

// 文本样式类
const textClass = computed(() => [
  `logo-text-${finalVariant.value}`,
  `logo-text-${finalSize.value}`,
]);
</script>
