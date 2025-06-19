<template>
  <div class="boxes-layout">
    <!-- 页面标题区域 - 与 default.vue 保持一致 -->
    <div class="page-header" v-if="$frontmatter.title">
      <div class="title-decorator"></div>
      <h1 class="page-title">{{ $frontmatter.title }}</h1>
    </div>

    <div class="boxes-container" ref="containerRef">
      <!-- 初始内容用于解析 -->
      <div class="original-content" ref="originalContent">
        <slot />
      </div>
      <!-- 解析后的框 -->
      <div 
        v-for="(box, index) in boxes" 
        :key="index" 
        class="box-item"
        :style="{ width: boxWidth }"
      >
        <h2 class="box-title">{{ box.title }}</h2>
        <div class="box-content" v-html="box.content"></div>
      </div>
    </div>
    
    <ProgressBar v-if="showProgressBar" />
    <AnimationController />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useThemeConfig } from '../composables/useThemeConfig'

const { showProgressBar } = useThemeConfig()

interface Box {
  title: string
  content: string
}

const boxes = ref<Box[]>([])
const originalContent = ref<HTMLElement>()

// 计算每个框的宽度
const boxWidth = computed(() => {
  const count = boxes.value.length
  if (count === 0) return '100%'
  if (count === 1) return '100%'
  if (count === 2) return 'calc(50% - 15px)'
  if (count === 3) return 'calc(33.333% - 13.333px)'
  if (count === 4) return 'calc(25% - 15px)'
  // 超过4个时，每行显示4个
  return 'calc(25% - 15px)'
})

onMounted(async () => {
  await nextTick()
  
  // 获取原始内容
  if (!originalContent.value) return
  
  // 查找所有 h2 标签
  const h2Elements = originalContent.value.querySelectorAll('h2')
  
  const parsedBoxes: Box[] = []
  
  h2Elements.forEach((h2) => {
    const title = h2.textContent || ''
    let content = ''
    
    // 获取 h2 后面的所有内容，直到下一个 h2
    let nextSibling = h2.nextElementSibling
    
    while (nextSibling && nextSibling.tagName !== 'H2') {
      content += nextSibling.outerHTML
      nextSibling = nextSibling.nextElementSibling
    }
    
    parsedBoxes.push({ title, content })
  })
  
  boxes.value = parsedBoxes
})
</script>

<style scoped>
.boxes-layout {
  background: var(--daocloud-bg-dark);
  color: var(--daocloud-text-light);
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* 页面标题 - 与 default.vue 保持一致 */
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

/* 框容器 */
.boxes-container {
  padding: 120px 30px 60px 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: stretch;
  height: 100%;
  overflow-y: auto;
}

/* 单个框样式 */
.box-item {
  border: 2px solid var(--daocloud-primary);
  border-radius: 8px;
  padding: 20px;
  background: rgba(26, 26, 46, 0.5);
  box-shadow: 
    0 0 20px rgba(0, 255, 127, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 100px;
}

.box-item:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 0 30px rgba(0, 255, 127, 0.2),
    0 8px 20px rgba(0, 0, 0, 0.4);
  border-color: rgba(0, 255, 127, 0.9);
}

/* 框标题 - 二级标题 */
.box-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--daocloud-primary);
  text-align: center;
  margin: 0 0 1rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(0, 255, 127, 0.3);
  line-height: 1.3;
}

/* 框内容 */
.box-content {
  flex: 1;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--daocloud-text-light);
  letter-spacing: 0.02em;
}

.box-content :deep(p) {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

.box-content :deep(p:last-child) {
  margin-bottom: 0;
}

.box-content :deep(ul) {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0.8rem;
}

.box-content :deep(li) {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.box-content :deep(li::before) {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--daocloud-primary);
  font-weight: bold;
}

.box-content :deep(strong) {
  color: var(--daocloud-primary);
  font-weight: 600;
}

.box-content :deep(code) {
  background: rgba(0, 255, 127, 0.15);
  color: var(--daocloud-primary);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: 'Fira Code', monospace;
  border: 1px solid rgba(0, 255, 127, 0.3);
}

/* 原始内容隐藏 */
.original-content {
  display: none !important;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .box-item {
    width: calc(50% - 10px) !important;
  }
}

@media (max-width: 1024px) {
  .page-header {
    top: 40px;
    left: 40px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .boxes-container {
    padding: 100px 20px 40px 20px;
    gap: 15px;
  }
  
  .box-item {
    width: calc(50% - 7.5px) !important;
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
  
  .boxes-container {
    padding: 90px 20px 30px 20px;
    gap: 15px;
  }
  
  .box-item {
    width: 100% !important;
    padding: 20px;
  }
  
  .box-title {
    font-size: 1.4rem;
  }
}
</style> 