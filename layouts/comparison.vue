<template>
  <div class="comparison-layout">
    <div class="comparison-content">
      <slot />
    </div>
    <div class="comparison-decoration">
      <div class="vs-badge">VS</div>
    </div>
    <Logo v-if="$frontmatter.showLogo !== false" />
    <PoweredBy v-if="$frontmatter.showPoweredBy !== false" />
  </div>
</template>

<style scoped>
.comparison-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.comparison-content {
  padding: 40px 60px;
  z-index: 10;
  position: relative;
  height: 100%;
}

.comparison-decoration {
  position: absolute;
  top: 20px;
  right: 60px;
  z-index: 5;
}

.vs-badge {
  background: linear-gradient(135deg, var(--daocloud-primary) 0%, var(--daocloud-primary-dark) 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 12px rgba(0, 255, 127, 0.3);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 4px 12px rgba(0, 255, 127, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 255, 127, 0.5);
  }
}

/* 对比内容样式增强 */
.comparison-content h1 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: var(--daocloud-primary);
}

.comparison-content h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 255, 127, 0.2);
  padding-bottom: 0.5rem;
}
</style> 