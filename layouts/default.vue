<template>
  <div class="default-layout">
    <!-- 页面标题区域 -->
    <div class="page-header" v-if="$frontmatter.title">
      <div class="title-decorator"></div>
      <h1 class="page-title">{{ $frontmatter.title }}</h1>
    </div>

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

.page-header {
  position: absolute;
  top: 32px;
  left: 32px;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 20;
}

.title-decorator {
  width: 24px;
  height: 24px;
  background: var(--daocloud-primary);
  border-radius: 2px;
  flex-shrink: 0;
}

.page-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--daocloud-text-light);
  margin: 0;
  line-height: 1.2;
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
  .page-header {
    top: 40px;
    left: 40px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .default-content {
    padding: 100px 40px 40px 40px;
  }
}

@media (max-width: 768px) {
  .page-header {
    top: 30px;
    left: 30px;
  }
  
  .title-decorator {
    width: 20px;
    height: 20px;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .default-content {
    padding: 90px 30px 30px 30px;
  }
}
</style>