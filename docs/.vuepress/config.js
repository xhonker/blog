module.exports = {
  title: 'Quicker',
  description: 'Just playing around',
  serviceWorker: true,
  themeConfig: {
    docsDir:'docs',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/test/'
      }
    ],
    sidebar: {
      '/test/':getSideBar('zh')
    },
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  },

}

function getSideBar(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'test'
    ]
  }]
}
