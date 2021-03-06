module.exports = {
  base:'/tears-ui/',
  title: 'Tears UI',
  description: '一个好用的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
          '/components/layout',
          '/components/popover',
          '/components/toast',
          '/components/collapse'
        ]
      },
    ]
  }
}
