import { computed, reactive, toRefs, watchEffect } from 'vue'
import { objectKeys } from '@antfu/utils'

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
  poweredByType?: 'image' | 'svg' | 'text';
  poweredBySvg?: string;
  poweredByText?: string;
  poweredByImage?: string;
}

/**
 * 默认全局配置
 */
const DEFAULT_CONFIG: Readonly<Required<ThemeGlobalConfig>> = {
  // Logo 默认配置
  showLogo: true,
  logo: "/logo.png",
  logoPosition: "top-left",
  logoSize: "md",
  logoVariant: "default",

  // PoweredBy 默认配置
  showPoweredBy: true,
  poweredByVariant: "default",
  poweredByPosition: "bottom-right",
  poweredBySize: "sm",
  poweredByType: 'image',
  poweredBySvg: '',
  poweredByText: 'Powered by DaoCloud',
  poweredByImage: '/powerby-default.png',
};

// 创建一个响应式的、类型安全的状态存储
const themeConfigState = reactive<Required<ThemeGlobalConfig>>({ ...DEFAULT_CONFIG });

/**
 * 主题配置组合函数
 * @returns 响应式的主题配置对象
 */
export function useThemeConfig() {
  // 使用 watchEffect 来响应式地更新配置
  watchEffect(() => {
    const themeGlobalConfig = (globalThis as any).$themeConfig?.globalConfig || {};
    const frontmatter = (globalThis as any).$frontmatter || {};

    for (const key of objectKeys(DEFAULT_CONFIG)) {
      const value = frontmatter[key] ?? themeGlobalConfig[key] ?? DEFAULT_CONFIG[key];
      // 类型断言是安全的，因为我们遍历的是 DEFAULT_CONFIG 的键
      (themeConfigState as any)[key] = value;
    }
  });

  // toRefs 将响应式对象的每个属性都转换为 ref，方便在模板中使用
  return toRefs(themeConfigState);
}
