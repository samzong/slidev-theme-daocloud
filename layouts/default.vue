<template>
  <div class="default-layout">
    <div class="default-content">
      <slot />
    </div>
    <Logo v-if="$frontmatter.showLogo === true" />
    <PoweredBy v-if="$frontmatter.showPoweredBy === true" />
    <ProgressBar />
  </div>
</template>

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
  padding: 60px;
  z-index: 10;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.default-content h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--daocloud-primary);
}

.default-content h2 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--daocloud-text-light);
}

.default-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.default-content ul {
  font-size: 1.1rem;
  line-height: 1.8;
  padding-left: 2rem;
}

.default-content li {
  margin-bottom: 0.8rem;
  position: relative;
}

.default-content li::marker {
  color: var(--daocloud-primary);
}
</style>