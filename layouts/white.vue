<template>
  <div class="white-layout">
    <div class="white-content">
      <slot />
    </div>
    <Logo v-if="$frontmatter.showLogo === true" class="logo-dark" />
    <PoweredBy v-if="$frontmatter.showPoweredBy === true" class="powered-by-dark" />
    <ProgressBar />
  </div>
</template>

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
  padding: 60px;
  z-index: 10;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.white-content h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--daocloud-primary-dark);
}

.white-content h2 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: var(--daocloud-text-dark);
}

.white-content p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.white-content ul {
  font-size: 1.1rem;
  line-height: 1.8;
  padding-left: 2rem;
}

.white-content li {
  margin-bottom: 0.8rem;
}

.white-content li::marker {
  color: var(--daocloud-primary-dark);
}
</style>