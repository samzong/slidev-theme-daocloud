import { computed } from "vue";

/**
 * 主题全局配置接口
 */
export interface ThemeGlobalConfig {
  // Logo 配置
  showLogo?: boolean;
  logo?: string;
  logoPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  logoSize?: "sm" | "md" | "lg" | "xl";
  logoVariant?: "default" | "white" | "dark" | "minimal";

  // PoweredBy 配置
  showPoweredBy?: boolean;
  poweredByVariant?: "default" | "white" | "dark" | "minimal";
  poweredByPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  poweredBySize?: "sm" | "md" | "lg";

  // 进度条配置
  showProgressBar?: boolean;
  progressBarStyle?: "default" | "thin" | "hidden";

  // 动画配置
  disableAnimations?: boolean;

  // 背景配置
  background?: string;
}

/**
 * 默认全局配置
 */
const DEFAULT_CONFIG: Required<ThemeGlobalConfig> = {
  // Logo 默认配置
  showLogo: true,
  logo: "/logo.png",
  logoPosition: "top-right",
  logoSize: "md",
  logoVariant: "default",

  // PoweredBy 默认配置
  showPoweredBy: true,
  poweredByVariant: "default",
  poweredByPosition: "bottom-right",
  poweredBySize: "sm",

  // 进度条默认配置
  showProgressBar: true,
  progressBarStyle: "thin",

  // 动画默认配置
  disableAnimations: true,

  // 背景默认配置 (深色主题)
  background: "var(--daocloud-bg-dark)",
};
/**
 * 获取合并后的主题配置
 * 优先级: frontmatter > themeConfig.globalConfig > DEFAULT_CONFIG
 */
export function useThemeConfig() {
  // 获取配置的计算属性
  const config = computed(() => {
    // 在 Slidev 环境中，这些变量是全局可用的
    const themeGlobalConfig =
      (globalThis as any).$themeConfig?.globalConfig || {};
    const frontmatter = (globalThis as any).$frontmatter || {};

    // 获取当前页面的 frontmatter 配置
    const frontmatterConfig: Partial<ThemeGlobalConfig> = {
      // Logo 配置
      showLogo: frontmatter.showLogo,
      logo: frontmatter.logo,
      logoPosition: frontmatter.logoPosition,
      logoSize: frontmatter.logoSize,
      logoVariant: frontmatter.logoVariant,

      // PoweredBy 配置
      showPoweredBy: frontmatter.showPoweredBy,
      poweredByVariant: frontmatter.poweredByVariant,
      poweredByPosition: frontmatter.poweredByPosition,
      poweredBySize: frontmatter.poweredBySize,

      // 进度条配置
      showProgressBar: frontmatter.showProgressBar,
      progressBarStyle: frontmatter.progressBarStyle,

      // 动画配置
      disableAnimations: frontmatter.disableAnimations,

      // 背景配置
      background: frontmatter.background,
    };

    // 过滤掉 undefined 值
    const filteredFrontmatterConfig = Object.fromEntries(
      Object.entries(frontmatterConfig).filter(
        ([_, value]) => value !== undefined,
      ),
    );

    // 合并配置：frontmatter > themeConfig > default
    return {
      ...DEFAULT_CONFIG,
      ...themeGlobalConfig,
      ...filteredFrontmatterConfig,
    } as Required<ThemeGlobalConfig>;
  });

  return {
    config,
    // 便捷访问单个配置项 - 现在都是响应式的
    // Logo 配置
    showLogo: computed(() => config.value.showLogo),
    logo: computed(() => config.value.logo),
    logoPosition: computed(() => config.value.logoPosition),
    logoSize: computed(() => config.value.logoSize),
    logoVariant: computed(() => config.value.logoVariant),

    // PoweredBy 配置
    showPoweredBy: computed(() => config.value.showPoweredBy),
    poweredByVariant: computed(() => config.value.poweredByVariant),
    poweredByPosition: computed(() => config.value.poweredByPosition),
    poweredBySize: computed(() => config.value.poweredBySize),

    // 进度条配置
    showProgressBar: computed(() => config.value.showProgressBar),
    progressBarStyle: computed(() => config.value.progressBarStyle),

    // 动画配置
    disableAnimations: computed(() => config.value.disableAnimations),

    // 背景配置
    background: computed(() => config.value.background),
  };
}
