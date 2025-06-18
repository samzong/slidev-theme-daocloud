/**
 * 主题全局配置接口
 */
export interface ThemeGlobalConfig {
  showLogo?: boolean
  showPoweredBy?: boolean
  logo?: string
  showProgressBar?: boolean
  logoPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  poweredByVariant?: 'default' | 'white'
  progressBarStyle?: 'default' | 'thin' | 'hidden'
  disableAnimations?: boolean
}

/**
 * 默认全局配置
 */
const DEFAULT_CONFIG: Required<ThemeGlobalConfig> = {
  showLogo: true,
  showPoweredBy: true,
  logo: '/logo.png',
  showProgressBar: true,
  logoPosition: 'top-right',
  poweredByVariant: 'default',
  progressBarStyle: 'default',
  disableAnimations: true
}

/**
 * 获取合并后的主题配置
 * 优先级: frontmatter > themeConfig.globalConfig > DEFAULT_CONFIG
 */
export function useThemeConfig() {
  // 在 Slidev 环境中，这些变量是全局可用的
  const themeGlobalConfig = (globalThis as any).$themeConfig?.globalConfig || {}
  const frontmatter = (globalThis as any).$frontmatter || {}
  
  // 获取当前页面的 frontmatter 配置
  const frontmatterConfig: Partial<ThemeGlobalConfig> = {
    showLogo: frontmatter.showLogo,
    showPoweredBy: frontmatter.showPoweredBy,
    logo: frontmatter.logo,
    showProgressBar: frontmatter.showProgressBar,
    logoPosition: frontmatter.logoPosition,
    poweredByVariant: frontmatter.poweredByVariant,
    progressBarStyle: frontmatter.progressBarStyle,
    disableAnimations: frontmatter.disableAnimations,
  }

  // 过滤掉 undefined 值
  const filteredFrontmatterConfig = Object.fromEntries(
    Object.entries(frontmatterConfig).filter(([_, value]) => value !== undefined)
  )

  // 合并配置：frontmatter > themeConfig > default
  const config = {
    ...DEFAULT_CONFIG,
    ...themeGlobalConfig,
    ...filteredFrontmatterConfig
  } as Required<ThemeGlobalConfig>

  return {
    config,
    // 便捷访问单个配置项
    showLogo: config.showLogo,
    showPoweredBy: config.showPoweredBy,
    logo: config.logo,
    showProgressBar: config.showProgressBar,
    logoPosition: config.logoPosition,
    poweredByVariant: config.poweredByVariant,
    progressBarStyle: config.progressBarStyle,
    disableAnimations: config.disableAnimations,
  }
}