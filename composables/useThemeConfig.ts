import { computed, reactive, toRefs, watchEffect } from 'vue'
import { objectKeys } from '@antfu/utils'

/**
 * Theme Global Configurations
 */
export interface ThemeGlobalConfig {
  // Website base URL
  website?: string

  // Author
  author?: {
    name: string
    avatar?: string
    url?: string
  }

  // Footer
  poweredBy?: boolean
  poweredByText?: string
  poweredByImage?: string
  
  // Header
  showHeader?: boolean
}

// 默认配置
export const DEFAULT_CONFIG: Required<ThemeGlobalConfig> = {
  website: 'https://www.daocloud.io/',
  author: {
    name: 'DaoCloud',
  },
  poweredBy: true,
  poweredByText: 'Powered by DaoCloud',
  poweredByImage: '/powerby-default.png',
  
  // Header 默认配置
  showHeader: true,
};

// 创建一个响应式的、类型安全的状态存储
const themeConfigState = reactive<Required<ThemeGlobalConfig>>({ ...DEFAULT_CONFIG });

/**
 * Composable for theme configurations.
 * 
 * @example
 * const {
 *   website,
 *   author,
 *   poweredBy,
 * } = useThemeConfig();
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
