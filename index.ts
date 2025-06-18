export default {
  name: 'daocloud',
  themeConfig: {
    primary: '#00ff7f',
    primaryDark: '#00cc66',
    secondary: '#1a1a2e'
  },
  colorSchema: 'both',
  highlighter: 'shiki',
  layouts: {
    cover: './layouts/cover.vue',
    default: './layouts/default.vue',
    section: './layouts/section.vue',
    white: './layouts/white.vue',
    comparison: './layouts/comparison.vue',
    intro: './layouts/intro.vue',
    'two-cols': './layouts/two-cols.vue',
    'image-left': './layouts/image-left.vue',
    'image-right': './layouts/image-right.vue',
    center: './layouts/center.vue',
    quote: './layouts/quote.vue',
  },
  components: {
    Logo: './components/Logo.vue',
    PoweredBy: './components/PoweredBy.vue',
    ProgressBar: './components/ProgressBar.vue',
  },
}
