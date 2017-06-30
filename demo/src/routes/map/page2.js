export default {
  path: '/page2',
  component: require('@/views/page2/'),
  children: [{
    path: 'world',
    title: 'page2',
    component (resolve) {
      require(['@/views/page2/world'], resolve)
    }
  }]
}
