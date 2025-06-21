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
      logoPosition: 'top-right',
      poweredByVariant: 'default',
    }
  },
  colorSchema: 'both',
  highlighter: 'shiki',
  layouts: {
    cover: './layouts/cover.vue',
    default: './layouts/default.vue',
    chapter: './layouts/chapter.vue',
    toc: './layouts/toc.vue',
    intro: './layouts/intro.vue',
    'two-cols': './layouts/two-cols.vue',
    'image-right': './layouts/image-right.vue',
    center: './layouts/center.vue',
    timeline: './layouts/timeline.vue',
    table: './layouts/table.vue',
    boxes: './layouts/boxes.vue',
  },
  components: {
    Logo: './components/Logo.vue',
    PoweredBy: './components/PoweredBy.vue',
  },
}
