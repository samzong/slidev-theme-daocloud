<template>
  <div class="powered-by" v-if="showPoweredBy">
    <img 
      :src="poweredByImage" 
      alt="Powered By DaoCloud" 
      class="powered-by-img"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const showPoweredBy = computed(() => $frontmatter.showPoweredBy !== false)
const isWhiteLayout = computed(() => $frontmatter.layout === 'white')
const poweredByImage = computed(() => 
  isWhiteLayout.value ? '/powerby-white.png' : '/powerby-default.png'
)
</script>