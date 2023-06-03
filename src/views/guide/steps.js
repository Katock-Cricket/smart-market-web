const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: '折叠菜单',
      description: '展开 && 关闭 侧边栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: '面包屑',
      description: '以地址栏的形式显示当前所在位置',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: 'Page Search',
      description: 'Page search, quick navigation',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Screenfull',
      description: 'Set the page into fullscreen',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: 'Switch the system size',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: 'The history of the page you visited',
      position: 'bottom'
    }
  },
  {
    element: '.app-container',
    popover: {
      title: '内容区',
      description: '显示主要的内容和页面信息',
      position: 'top'
    },
    padding: 0
  }
]

export default steps
