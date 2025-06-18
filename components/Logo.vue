<template>
  <div class="logo-container" v-if="showLogo">
    <img 
      :src="logoSrc" 
      alt="Logo" 
      class="logo"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// 使用 $frontmatter 访问页面配置
const showLogo = computed(() => $frontmatter.showLogo !== false)
const logoSrc = computed(() => $frontmatter.logo || '/logo.png')
</script>