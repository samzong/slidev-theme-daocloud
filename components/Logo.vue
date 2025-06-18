<template>
  <div class="logo-container">
    <img 
      :src="logo" 
      alt="Logo" 
      class="logo"
    />
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'

const { logo } = useThemeConfig()
</script>