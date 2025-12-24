import { defineMermaidSetup } from '@slidev/types';

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    // 全局字体设置 - 解决文字溢出问题
    fontSize: 12,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',

    // 流程图配置
    flowchart: {
      nodeSpacing: 30,
      rankSpacing: 40,
      curve: 'basis',
      padding: 10,
      useMaxWidth: true, // 关键：使图表自适应容器宽度
    },

    // 时序图配置
    sequence: {
      actorFontSize: 12,
      noteFontSize: 11,
      messageFontSize: 12,
      useMaxWidth: true,
      wrap: true,
      width: 150,
    },

    // 状态图配置
    state: {
      nodeSpacing: 30,
      rankSpacing: 30,
      useMaxWidth: true,
    },

    // 主题变量
    themeVariables: {
      // 字体大小
      fontSize: '12px',

      // DaoCloud 品牌色系
      primaryColor: '#00ff7f',
      primaryTextColor: '#0f0f0f',
      primaryBorderColor: '#00cc66',

      // 深色背景配色
      lineColor: '#cccccc',
      secondaryColor: '#2d2d4a',
      tertiaryColor: '#1a1a2e',

      // 文本色
      textColor: '#ffffff',

      // 节点样式
      nodeBorder: '#00cc66',
      nodeTextColor: '#ffffff',

      // 状态色
      successColor: '#28a745',
      errorColor: '#dc3545',
      warningColor: '#ffc107',
    },
  };
});
