# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Slidev Theme DaoCloud** - a custom Slidev presentation theme designed for DaoCloud company branding. Slidev is a modern presentation framework based on Markdown and Vue.js.

## Architecture

### Theme Structure
- **Entry Point**: `index.ts` - defines theme configuration, colors, and registers all layouts/components
- **Layouts**: 14 specialized layout components in `layouts/` directory for different presentation needs
- **Components**: 2 reusable components (`Logo.vue`, `PoweredBy.vue`)
- **Composables**: `useThemeConfig.ts` - centralized theme configuration management
- **Styles**: Modular CSS architecture with separate files for layouts, code highlighting, and components

### Key Layouts
- `cover.vue` - Title slide with fluid halo effects
- `default.vue` - Dark content pages
- `white.vue` - Light content pages  
- `intro.vue` - Introduction/profile pages
- `table.vue` - Table layouts for data comparison
- `two-cols.vue` - Two-column layouts
- `image-left.vue` / `image-right.vue` / `image.vue` - Image-text combinations
- `quote.vue` - Quote/testimonial pages
- `chapter.vue` - Chapter/section dividers
- `center.vue` - Centered content
- `toc.vue` - Table of contents
- `timeline.vue` - Interactive timeline with nodes (NEW)
- `boxes.vue` - Responsive grid layout with cards (NEW)

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
- `showLogo: boolean` - Display logo component (default: true)
- `showPoweredBy: boolean` - Display "Powered by" component (default: true)
- `logo: string` - Logo image path (default: '/logo.png')
- `logoPosition: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'` - Logo placement (default: 'top-right')
- `poweredByVariant: 'default' | 'white'` - PoweredBy component style (default: 'default')
- **Progress Bar**: Now uses the official `slidev-component-progress` plugin for better performance and compatibility
- **Animations**: Now leverages Slidev's built-in animation system instead of custom implementation

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
const { showLogo, showPoweredBy } = useThemeConfig()
</script>

<template>
  <div class="my-layout">
    <slot />
    <!-- Components automatically respect global config -->
    <Logo v-if="showLogo" />
    <PoweredBy v-if="showPoweredBy" />
    <!-- Progress bar is now handled by the official slidev-component-progress plugin -->
    <!-- Animations are handled by Slidev's built-in animation system -->
  </div>
</template>
```

#### New Layout Features

**Timeline Layout** (`timeline.vue`):
- Automatically parses H2 headers as timeline nodes
- Creates interactive timeline with alternating top/bottom positioning
- Responsive design switches to vertical layout on mobile
- Usage:
```yaml
---
layout: timeline
title: "Project Timeline"
---

## Phase 1
Initial planning and research phase

## Phase 2
Development and implementation

## Phase 3
Testing and deployment
```

**Boxes Layout** (`boxes.vue`):
- Automatically converts H2 sections into responsive card grid
- Supports 1-4 boxes per row with automatic width calculation
- Hover effects and consistent styling
- Usage:
```yaml
---
layout: boxes
title: "Feature Overview"
---

## Feature A
Description of feature A with details

## Feature B
Description of feature B with details

## Feature C
Description of feature C with details
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
- **Logo**: Path can be customized via theme configuration, supports different positions
- **PoweredBy**: Has white and default variants for different backgrounds
- **Progress Bar**: Now handled by the official `slidev-component-progress` plugin
- **Animations**: Now handled by Slidev's built-in animation system

## File Organization

- `index.ts` - Theme registration and configuration
- `layouts/` - All layout Vue components (14 total)
- `components/` - Reusable UI components (2 total)
- `composables/` - Vue composables for shared logic
- `styles/` - Modular CSS files and style entry point
- `public/` - Public assets for presentations
- `logo.png` - Default theme logo
- `powerby-*.png` - Brand attribution images

## Development Notes

- Built for Slidev >= 0.48.0
- Uses Vue 3 Composition API with TypeScript support
- Follows Slidev theme development conventions
- Responsive design with mobile optimization
- Modern animations and visual effects (fluid halos, gradients)
- Inter font family for typography
- Centralized configuration management via `useThemeConfig` composable
- Animation control system for presentation contexts
- Automatic content parsing for timeline and boxes layouts

## Development Guidelines

### Adding New Layouts
1. Create new `.vue` file in `layouts/` directory
2. Import and use `useThemeConfig` for consistent configuration
3. Include `AnimationController` component for animation management
4. Follow existing naming conventions and styling patterns
5. Register new layout in `index.ts`

### Configuration Management
- Use `useThemeConfig()` composable for all theme configuration needs
- Support three-level configuration precedence (frontmatter > theme > default)
- Document new configuration options in TypeScript interfaces
- Provide sensible defaults for all configuration options

### Styling Conventions
- Use CSS custom properties for theming (`--daocloud-*`)
- Maintain responsive design patterns
- Follow consistent spacing and typography scales
- Use animation control system for context-appropriate effects

## Testing and Validation

### Theme Testing
- Test all layouts with different content types
- Verify responsive behavior across device sizes
- Validate configuration precedence behavior
- Test animation states (enabled/disabled)

### Development Workflow
1. Use `slides.md` as development playground
2. Test new layouts with various content structures
3. Verify global configuration changes
4. Check cross-browser compatibility
5. Validate accessibility features

### Common Issues
- **Missing components**: Ensure all components are properly imported and registered
- **Configuration not applying**: Check configuration precedence and TypeScript types
- **Responsive issues**: Test on different screen sizes and orientations
- **Animation conflicts**: Use `disableAnimations` for testing static layouts