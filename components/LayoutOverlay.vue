<template>
  <div class="layout-overlay">
    <Logo v-if="showLogo" :class="logoClass" :position="defaultLogoPosition" />
    <PoweredBy
      v-if="showPoweredBy"
      :class="poweredByClass"
      :position="defaultPoweredByPosition"
    />
    <ProgressBar v-if="showProgressBar" />
    <AnimationController v-if="!hideAnimationController" />
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from "../composables/useThemeConfig";

type Position = "top-left" | "top-right" | "bottom-left" | "bottom-right";

defineProps<{
  logoClass?: string;
  poweredByClass?: string;
  hideAnimationController?: boolean;
  /** 布局级 Logo 默认位置（frontmatter 可覆盖） */
  defaultLogoPosition?: Position;
  /** 布局级 PoweredBy 默认位置（frontmatter 可覆盖） */
  defaultPoweredByPosition?: Position;
}>();

const { showLogo, showPoweredBy, showProgressBar } = useThemeConfig();
</script>

<style scoped>
.layout-overlay {
  /* 纯逻辑组件，无额外样式 */
  display: contents;
}
</style>
