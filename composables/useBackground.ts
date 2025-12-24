import { computed } from "vue";
import { useThemeConfig } from "./useThemeConfig";

/**
 * 读取背景配置
 *
 * 优先级: frontmatter.background > layoutDefault > 全局配置
 *
 * @param layoutDefault - 布局级默认背景（可选）
 * @returns layoutStyle - 可绑定到根元素的 style 对象
 *
 * @example
 * ```vue
 * // 在布局中使用
 * const { layoutStyle } = useBackground('var(--daocloud-bg-light)')
 * ```
 *
 * ```yaml
 * # 在 frontmatter 中覆盖
 * ---
 * background: '#1a1a2e'
 * # 或
 * background: 'linear-gradient(135deg, #1a1a2e, #00ff7f)'
 * # 或
 * background: '/bg.jpg'
 * ---
 * ```
 */
export function useBackground(layoutDefault?: string) {
  // 获取全局配置（已包含 frontmatter 优先级处理）
  const { background: globalBackground } = useThemeConfig();

  // 检查 frontmatter 是否显式设置了 background
  const frontmatterBackground = computed(
    () => (globalThis as any).$frontmatter?.background,
  );

  // 三级优先级: frontmatter > layoutDefault > globalConfig
  const finalBackground = computed(() => {
    if (frontmatterBackground.value) return frontmatterBackground.value;
    if (layoutDefault) return layoutDefault;
    return globalBackground.value;
  });

  const layoutStyle = computed(() => {
    const bg = finalBackground.value;
    if (!bg) return {};

    // 检测是否为图片 URL
    if (bg.startsWith("url(") || bg.startsWith("http") || bg.startsWith("/")) {
      const url = bg.startsWith("url(") ? bg : `url(${bg})`;
      return {
        background: `${url} center/cover no-repeat`,
      };
    }

    // 颜色或渐变值直接使用
    return { background: bg };
  });

  return { background: finalBackground, layoutStyle };
}
