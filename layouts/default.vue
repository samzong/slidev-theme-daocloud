<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'
import PageHeader from '../components/PageHeader.vue'

const { 
  showLogo, 
  showPoweredBy
} = useThemeConfig()
</script>

<style scoped>
.default-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.default-content {
  padding: 120px 60px 60px 60px;
  z-index: 10;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.default-content h1 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--daocloud-primary);
  line-height: 1.3;
}

.default-content h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--daocloud-text-light);
  line-height: 1.4;
}

.default-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--daocloud-text-light);
  letter-spacing: 0.02em;
}

.default-content ul {
  font-size: 1.2rem;
  line-height: 1.9;
  padding-left: 0;
  margin-bottom: 2rem;
  list-style: none;
}

.default-content li {
  margin-bottom: 1.2rem;
  position: relative;
  padding-left: 2rem;
  line-height: 1.9;
  color: var(--daocloud-text-light);
  letter-spacing: 0.02em;
}

.default-content li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--daocloud-primary);
  font-weight: 600;
  font-size: 1.2rem;
}

.default-content li strong {
  color: var(--daocloud-primary);
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .default-content {
    padding: 100px 40px 40px 40px;
  }
}

@media (max-width: 768px) {
  .default-content {
    padding: 90px 30px 30px 30px;
  }
}
</style>