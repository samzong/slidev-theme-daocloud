<template>
  <div class="section-layout">
    <div class="fluid-ring small"></div>
    <div class="section-content">
      <slot />
    </div>
    <Logo v-if="$frontmatter.showLogo !== false" />
    <PoweredBy v-if="$frontmatter.showPoweredBy !== false" />
    <ProgressBar />
  </div>
</template>

<style scoped>
.section-layout {
  background: linear-gradient(135deg, var(--daocloud-bg-dark) 0%, var(--daocloud-secondary) 100%);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.section-content {
  text-align: center;
  z-index: 10;
  animation: fadeIn 1s ease-out;
}

.section-content h1 {
  font-size: 3rem;
  font-weight: 600;
  background: linear-gradient(45deg, var(--daocloud-primary), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>