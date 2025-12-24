export default {
  name: "daocloud",
  // 品牌色配置 - 仅作为 CSS 变量注入使用
  // 全局配置由 composables/useThemeConfig.ts 的 DEFAULT_CONFIG 管理
  themeConfig: {
    primary: "#00ff7f",
    primaryDark: "#00cc66",
    secondary: "#1a1a2e",
  },
  colorSchema: "both",
  highlighter: "shiki",
  layouts: {
    cover: "./layouts/cover.vue",
    default: "./layouts/default.vue",
    chapter: "./layouts/chapter.vue",
    toc: "./layouts/toc.vue",
    white: "./layouts/white.vue",
    intro: "./layouts/intro.vue",
    "two-cols": "./layouts/two-cols.vue",
    "image-left": "./layouts/image-left.vue",
    "image-right": "./layouts/image-right.vue",
    center: "./layouts/center.vue",
    quote: "./layouts/quote.vue",
    timeline: "./layouts/timeline.vue",
    table: "./layouts/table.vue",
  },
  components: {
    Logo: "./components/Logo.vue",
    PoweredBy: "./components/PoweredBy.vue",
    ProgressBar: "./components/ProgressBar.vue",
    AnimationController: "./components/AnimationController.vue",
    LayoutOverlay: "./components/LayoutOverlay.vue",
  },
};
