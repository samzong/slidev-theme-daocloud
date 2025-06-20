<template>
  <div class="powered-by">
    <img 
      :src="poweredByImage" 
      alt="Powered By DaoCloud" 
      class="powered-by-img"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'white'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const poweredByImage = computed(() => 
  props.variant === 'white' ? '/powerby-white.png' : '/powerby-default.png'
)
</script>