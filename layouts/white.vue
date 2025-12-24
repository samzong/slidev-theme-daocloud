<template>
  <div class="white-layout" :style="layoutStyle">
    <PageHeader />

    <div class="white-content">
      <slot />
    </div>
    <LayoutOverlay
      logoClass="logo-dark"
      poweredByClass="powered-by-dark"
      hideAnimationController
    />
  </div>
</template>

<script setup lang="ts">
import { useBackground } from "../composables/useBackground";
import PageHeader from "../components/PageHeader.vue";

const { layoutStyle } = useBackground("var(--daocloud-bg-light)");
</script>

<style scoped>
.white-layout {
  background: var(--daocloud-bg-light);
  color: var(--daocloud-text-dark);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.white-content {
  padding: 120px 60px 60px 60px;
  z-index: 10;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.white-content h1 {
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--daocloud-primary-dark);
  line-height: 1.3;
}

.white-content h2 {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--daocloud-text-dark);
  line-height: 1.4;
}

.white-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--daocloud-text-dark);
  letter-spacing: 0.02em;
}

.white-content ul {
  font-size: 1.2rem;
  line-height: 1.9;
  padding-left: 0;
  margin-bottom: 2rem;
  list-style: none;
}

.white-content li {
  margin-bottom: 1.2rem;
  position: relative;
  padding-left: 2rem;
  line-height: 1.9;
  color: var(--daocloud-text-dark);
  letter-spacing: 0.02em;
}

.white-content li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--daocloud-primary-dark);
  font-weight: 600;
  font-size: 1.2rem;
}

.white-content li strong {
  color: var(--daocloud-primary-dark);
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .white-content {
    padding: 100px 40px 40px 40px;
  }
}

@media (max-width: 768px) {
  .white-content {
    padding: 90px 30px 30px 30px;
  }
}
</style>
