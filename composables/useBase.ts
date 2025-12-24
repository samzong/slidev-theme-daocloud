import { computed } from 'vue';

/**
 * 获取 Slidev base 路径
 * 用于处理 GitHub Pages 等子路径部署
 */
export function useBase() {
  const base = computed(() => {
    // 从 Slidev 配置获取 base
    const slidevBase = (globalThis as any)?.$slidev?.configs?.base;
    if (slidevBase) return slidevBase;

    // 默认返回根路径
    return '/';
  });

  /**
   * 将路径转换为带 base 的完整路径
   */
  const withBase = (path: string): string => {
    if (!path) return path;
    // 如果已经是完整 URL，直接返回
    if (
      path.startsWith('http://') ||
      path.startsWith('https://') ||
      path.startsWith('data:')
    ) {
      return path;
    }
    // 移除开头的 /
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // 确保 base 以 / 结尾
    const cleanBase = base.value.endsWith('/') ? base.value : base.value + '/';
    return cleanBase + cleanPath;
  };

  return {
    base,
    withBase,
  };
}
