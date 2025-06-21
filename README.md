# Slidev Theme DaoCloud

A professional Slidev theme for DaoCloud, designed with a modern aesthetic and a rich set of layouts.

## Features

- ✨ **Centralized Layout System** - Header, footer, and logos are now globally managed for consistency.
- 🎨 **8 Professional Layouts** - A curated set of layouts for various presentation needs.
- 🌓 **Dark/Light Mode** - Automatically adapts to your system's preferences.
- 📱 **Responsive Design** - Looks great on any device.
- 🔧 **Highly Customizable** - Flexible options via frontmatter.

## Installation

```bash
npm install slidev-theme-daocloud
```

Or, use it as a local theme in your Slidev project:

```yaml
# .frontmatter/config.ts
import { defineSlidevConfig } from 'slidev'

export default defineSlidevConfig({
  theme: 'daocloud',
})
```

## Usage

### Global Components & Configuration

This theme uses a global layout system. `Logo`, `PageHeader`, `PoweredBy`, and a `ProgressBar` are automatically applied to your slides. You can control their visibility via frontmatter configuration.

**Example:**
To hide the header on a specific slide (e.g., a cover page), use the following:

```yaml
---
layout: cover
# This will hide the global PageHeader on this slide
showHeader: false
---
```

Available global options:
- `showHeader: boolean` (default: `true`) - Toggles the `PageHeader`.
- `showLogo: boolean` (default: `true`) - Toggles the `Logo`.
- `showPoweredBy: boolean` (default: `true`) - Toggles the `PoweredBy` footer.

### Available Layouts

#### 1. `cover`
The title slide.
```yaml
---
layout: cover
title: "Your Title"
subtitle: "Your Subtitle"
author: "Author Name"
date: "2025-01-01"
# Hide the header on the cover page for a cleaner look
showHeader: false
---
```

#### 2. `intro`
An introduction slide for a speaker.
```yaml
---
layout: intro
avatar: https://example.com/avatar.jpg
title: Name
subtitle: Position
tags: ["Tag 1", "Tag 2"]
techStack:
  - name: Kubernetes
  - name: Docker
github: username
certifications:
  - name: CKA
---

Your introduction content...
```

#### 3. `chapter`
A slide to introduce a new section.
```yaml
---
layout: chapter
part: 1
title: Chapter Title
---
```

#### 4. `toc` - Table of Contents
Automatically generates a table of contents.
```yaml
---
layout: toc
---
```

#### 5. `two-cols`
A two-column layout.
```yaml
---
layout: two-cols
---

::left::
Content for the left column.

::right::
Content for the right column.
```

#### 6. `image-right`
Content on the left, image on the right.
```yaml
---
layout: image-right
image: ./path/to/your/image.jpg
imageAlt: "Alt text for image"
imageCaption: "A caption for the image"
---

## Main Content Title

Your text content goes here.
```

#### 7. `table`
A layout for displaying tables.
```yaml
---
layout: table
title: "Data Comparison"
---

| Feature         | Kueue | Volcano |
| --------------- | ----- | ------- |
| Multi-cluster   | ✓     | ✓       |
| AI Workloads    | ✓     | ✓       |
```

#### 8. `center`
A layout for centered content.
```yaml
---
layout: center
title: "Centered Title"
---

Your content goes here.
```
## Development

### Project Structure

The project follows a standard Slidev theme structure. Key directories include:
- `components/`: Reusable Vue components (`Logo`, `PageHeader`, etc.).
- `layouts/`: The slide layouts (`cover`, `default`, etc.).
- `styles/`: Global styles and CSS variables.
- `global-top.vue`: Manages global components at the top of slides (Header, Logo, Progress).
- `global-bottom.vue`: Manages global components at the bottom (Footer).

### Adding a New Layout

1.  Create a new `.vue` file in the `layouts/` directory.
2.  Define your layout structure. You no longer need to manually add headers or footers.
3.  The new layout is automatically available to use.

## Tech Stack

- Slidev >= 0.48.0
- Vue 3 & TypeScript
- CSS Variables

## License
MIT 