const { description } = require('../../package')

module.exports = {
  title: '多元统计分析',
  description: description || '项目描述',
  base: '/', // 若 GitHub Pages 用仓库子路径，如 /repo-name/

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }]
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      // 可以添加更多顶部导航
    ],
    sidebar: [
      {
        text: 'Introduction',
        link: '/README'
      },
      {
        text: '实验一',
        link: '/exper/ex1/'
      },
      {
        text: '实验二',
        link: '/exper/ex2/'
      },
      {
        text: '实验三',
        link: '/exper/ex3/'
      },
      {
        text: '实验四',
        link: '/exper/ex4/'
      },
      {
        text: '实验五',
        link: '/exper/ex5/'
      },
      {
        text: '实验六',
        link: '/exper/ex6/'
      },
      {
        text: '实验七',
        link: '/exper/ex7/'
      }
    ],
    sidebarDepth: 2,  // 侧边栏显示标题深度
    lastUpdated: '上次更新', // 显示最后更新时间
  },

  plugins: [
    ['@vuepress/plugin-mathjax']
  ]
}
