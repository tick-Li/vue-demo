export default {
  path: '/page1',
  component: require('@/views/page1/'),
  children: [{
    path: 'hello',
    title: 'page1',
    component (resolve) {
      require(['@/views/page1/hello'], resolve)
    }
  }]
}
