export default {
  path: '/page3',
  component: require('@/views/page3/'),
  children: [{
    path: 'hellop',
    title: 'page3',
    component (resolve) {
     // document.title = resolve.to.title
    }
  }]
}
