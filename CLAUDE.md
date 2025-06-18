# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Slidev Theme DaoCloud** - a custom Slidev presentation theme designed for DaoCloud company branding. Slidev is a modern presentation framework based on Markdown and Vue.js.

## Architecture

### Theme Structure
- **Entry Point**: `index.ts` - defines theme configuration, colors, and registers all layouts/components
- **Layouts**: 11 specialized layout components in `layouts/` directory for different presentation needs
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
- `section.vue` - Section dividers
- `center.vue` - Centered content
- `toc.vue` - Table of contents (in development)

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