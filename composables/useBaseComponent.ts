/**
 * 基础组件类型定义和通用逻辑
 * 用于确保组件接口的一致性和类型安全
 */

import { computed, type ComputedRef } from 'vue'
import { useThemeConfig } from './useThemeConfig'

// 基础组件属性接口
export interface BaseComponentProps {
  /** 样式变体 */
  variant?: 'default' | 'white' | 'dark' | 'minimal'
  /** 组件位置 */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  /** 组件尺寸 */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** 是否隐藏 */
  hidden?: boolean
}

// 媒体组件类型
export type MediaComponentType = 'image' | 'svg' | 'text' | 'slot'

// 媒体组件属性接口
export interface MediaComponentProps extends BaseComponentProps {
  /** 内容类型 */
  type?: MediaComponentType
  /** 图片或资源路径 */
  src?: string
  /** 替代文本 */
  alt?: string
  /** SVG 内容字符串 */
  svgContent?: string
  /** 文本内容 */
  textContent?: string
}

// 条件类型：根据组件类型确保必需属性
export type ConditionalMediaProps<T extends MediaComponentType> = 
  T extends 'image' ? { src: string; alt?: string } :
  T extends 'svg' ? { svgContent: string } :
  T extends 'text' ? { textContent: string } :
  T extends 'slot' ? {} : {}

// 类型化的媒体组件属性
export interface TypedMediaComponentProps<T extends MediaComponentType> 
  extends BaseComponentProps, ConditionalMediaProps<T> {
  type: T
}

// 组件状态管理 hook
export function useComponentState<T extends BaseComponentProps>(
  componentName: string,
  props: T,
  additionalConfig: Record<string, any> = {}
) {
  const themeConfig = useThemeConfig()
  
  // 生成配置键名
  const getConfigKey = (suffix: string) => {
    const key = componentName.toLowerCase() + suffix.charAt(0).toUpperCase() + suffix.slice(1)
    return key as keyof typeof themeConfig
  }
  
  const showKey = `show${componentName}` as keyof typeof themeConfig
  const variantKey = getConfigKey('variant')
  const positionKey = getConfigKey('position')
  const sizeKey = getConfigKey('size')
  
  return {
    // 显示状态
    shouldShow: computed(() => 
      !props.hidden && 
      (themeConfig[showKey] as ComputedRef<boolean>)?.value !== false
    ),
    
    // 最终配置值
    finalVariant: computed(() => 
      props.variant || 
      (themeConfig[variantKey] as ComputedRef<string>)?.value || 
      'default'
    ),
    
    finalPosition: computed(() => 
      props.position || 
      (themeConfig[positionKey] as ComputedRef<string>)?.value ||
      additionalConfig.defaultPosition || 
      'top-left'
    ),
    
    finalSize: computed(() => 
      props.size || 
      (themeConfig[sizeKey] as ComputedRef<string>)?.value ||
      additionalConfig.defaultSize ||
      'md'
    )
  }
}

// 媒体组件验证器
export class MediaComponentValidator {
  static validate(type: MediaComponentType, props: Record<string, any>, componentName: string) {
    const warnings: string[] = []
    
    switch (type) {
      case 'svg':
        if (!props.svgContent) {
          warnings.push(`[${componentName}] SVG type requires svgContent prop`)
        }
        break
        
      case 'text':
        if (!props.textContent && !props.text) {
          warnings.push(`[${componentName}] Text type requires textContent or text prop`)
        }
        break
        
      case 'image':
        if (!props.src && !props.defaultSrc) {
          warnings.push(`[${componentName}] Image type requires src prop or default image`)
        }
        break
        
      case 'slot':
        // Slot 类型不需要额外验证
        break
        
      default:
        warnings.push(`[${componentName}] Unknown type: ${type}`)
    }
    
    // 输出警告
    warnings.forEach(warning => console.warn(warning))
    
    return warnings.length === 0
  }
}

// 样式类生成器
export function generateComponentClasses(
  componentName: string,
  variant: string,
  position: string,
  size: string,
  additionalClasses: string[] = []
) {
  const prefix = componentName.toLowerCase().replace(/([A-Z])/g, '-$1')
  
  return [
    `${prefix}-position-${position}`,
    `${prefix}-size-${size}`,
    `${prefix}-variant-${variant}`,
    ...additionalClasses
  ]
}

// 通用的默认值合并器
export function mergeDefaults<T extends Record<string, any>>(
  props: T,
  defaults: Partial<T>,
  config: Record<string, any> = {}
): T {
  const result = { ...defaults }
  
  // Props 优先级最高
  Object.keys(defaults).forEach(key => {
    if (props[key] !== undefined) {
      result[key] = props[key]
    } else if (config[key] !== undefined) {
      result[key] = config[key]
    }
  })
  
  return result as T
}

// 常用的组件默认配置
export const COMMON_COMPONENT_DEFAULTS = {
  variant: 'default' as const,
  position: 'top-left' as const,
  size: 'md' as const,
  hidden: false,
  type: 'image' as MediaComponentType
}

// 导出类型声明，供其他组件使用
export type {
  BaseComponentProps,
  MediaComponentProps,
  MediaComponentType,
  TypedMediaComponentProps
} 