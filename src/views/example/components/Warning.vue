<template>
  <aside>
    keep-alive无法缓存创建和编辑页面，因为keep-alive-include当前不支持
    基于路由进行缓存，因此当前是基于组件名称进行缓存的。如果您想实现类似的缓存
    实际上，您可以使用浏览器缓存方案，如localStorage。或者不使用keep-alive include来缓存所有
    页面。您可以
    <a
      href="https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html"
      target="_blank"
    >访问官方文档</a>
    查看详细信息
  </aside>
</template>

