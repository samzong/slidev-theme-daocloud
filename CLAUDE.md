# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Slidev Theme DaoCloud** - a custom Slidev presentation theme designed for DaoCloud company branding. Slidev is a modern presentation framework based on Markdown and Vue.js.

## Architecture

### Theme Structure
- **Entry Point**: `index.ts` - defines theme configuration, colors, and registers all layouts/components
- **Layouts**: 12 specialized layout components in `layouts/` directory for different presentation needs
- **Components**: 3 reusable components (`Logo.vue`, `PoweredBy.vue`, `ProgressBar.vue`)
- **Styles**: Modular CSS architecture with separate files for layouts, code highlighting, and components

### Key Layouts
- `cover.vue` - Title slide with fluid halo effects
- `default.vue` - Dark content pages
- `white.vue` - Light content pages  
- `intro.vue` - Introduction/profile pages
- `comparison.vue` - Side-by-side comparisons
- `two-cols.vue` - Two-column layouts
- `image-left.vue` / `image-right.vue` - Image-text combinations
- `quote.vue` - Quote/testimonial pages
- `chapter.vue` - Chapter/section dividers
- `center.vue` - Centered content
- `toc.vue` - Table of contents

### Color System
- Primary: `#00ff7f` (bright green)
- Primary Dark: `#00cc66`
- Secondary: `#1a1a2e` (dark blue)
- Support for both light and dark themes

## Development

### Theme Usage
Configure in presentation's frontmatter:
```yaml
---
theme: ./path-to-theme
showLogo: true
showPoweredBy: true
---
```

### Global Configuration System
The theme supports a global configuration system with three levels of precedence:
1. **Frontmatter** (highest priority) - per-slide configuration
2. **Theme Config** (medium priority) - theme-wide defaults  
3. **Built-in defaults** (lowest priority) - fallback values

#### Available Global Options
- `showLogo: boolean` - Display logo component
- `showPoweredBy: boolean` - Display "Powered by" component
- `logo: string` - Logo image path
- `showProgressBar: boolean` - Display progress indicator
- `logoPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` - Logo placement
- `poweredByVariant: 'default' | 'white'` - PoweredBy component style
- `progressBarStyle: 'default' | 'thin' | 'hidden'` - Progress bar appearance

#### Configuration Examples

**Theme-wide configuration** (index.ts):
```typescript
export default {
  name: 'daocloud',
  themeConfig: {
    // ... other config
    globalConfig: {
      showLogo: false,           // Hide logo by default
      showPoweredBy: true,       // Show PoweredBy by default
      logo: '/custom-logo.png',  // Custom logo path
      logoPosition: 'top-left'   // Move logo to top-left
    }
  }
}
```

**Per-slide override** (frontmatter):
```yaml
---
layout: cover
showLogo: true        # Override theme config to show logo
poweredByVariant: white
---
```

**New layout development**:
```vue
<script setup lang="ts">
import { useThemeConfig } from '../composables/useThemeConfig'

// Get all config values with proper precedence
const { showLogo, showPoweredBy, showProgressBar } = useThemeConfig()
</script>

<template>
  <div class="my-layout">
    <slot />
    <!-- Components automatically respect global config -->
    <Logo v-if="showLogo" />
    <PoweredBy v-if="showPoweredBy" />
    <ProgressBar v-if="showProgressBar" />
  </div>
</template>
```

### Layout Usage
Specify layout in slide frontmatter:
```yaml
---
layout: cover
title: "Presentation Title"
subtitle: "Subtitle"
author: "Author Name"
---
```

### Component Customization
- Logo path can be customized via theme configuration
- PoweredBy component has white and default variants
- Progress bar display controlled via frontmatter options

## File Organization

- `index.ts` - Theme registration and configuration
- `layouts/` - All layout Vue components
- `components/` - Reusable UI components
- `styles/` - Modular CSS files and style entry point
- `logo.png` - Default theme logo
- `powerby-*.png` - Brand attribution images

## Development Notes

- Built for Slidev >= 0.48.0
- Uses Vue 3 Composition API
- Follows Slidev theme development conventions
- Responsive design with mobile optimization
- Modern animations and visual effects (fluid halos, gradients)
- Inter font family for typography