<template>
  <footer class="slidev-global-bottom">
    <PoweredBy v-if="showPoweredBy" />
  </footer>
</template>

<script setup lang="ts">
import PoweredBy from './components/PoweredBy.vue'
import { useThemeConfig } from './composables/useThemeConfig'

const { showPoweredBy } = useThemeConfig()
</script> 