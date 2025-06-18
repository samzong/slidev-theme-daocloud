export default {
  name: 'daocloud',
  themeConfig: {
    primary: '#00ff7f',
    primaryDark: '#00cc66',
    secondary: '#1a1a2e',
    // 全局配置
    globalConfig: {
      showLogo: true,
      showPoweredBy: true,
      logo: '/logo.png',
      showProgressBar: true,
      logoPosition: 'top-right',
      poweredByVariant: 'default',
      progressBarStyle: 'default',
      disableAnimations: false
    }
  },
  colorSchema: 'both',
  highlighter: 'shiki',
  layouts: {
    cover: './layouts/cover.vue',
    default: './layouts/default.vue',
    chapter: './layouts/chapter.vue',
    toc: './layouts/toc.vue',
    white: './layouts/white.vue',
    comparison: './layouts/comparison.vue',
    intro: './layouts/intro.vue',
    'two-cols': './layouts/two-cols.vue',
    'image-left': './layouts/image-left.vue',
    'image-right': './layouts/image-right.vue',
    center: './layouts/center.vue',
    quote: './layouts/quote.vue',
    timeline: './layouts/timeline.vue',
  },
  components: {
    Logo: './components/Logo.vue',
    PoweredBy: './components/PoweredBy.vue',
    ProgressBar: './components/ProgressBar.vue',
    AnimationController: './components/AnimationController.vue',
  },
}
