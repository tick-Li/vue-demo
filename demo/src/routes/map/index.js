// 不同功能模块的路由应代码分离
import page1 from './page1'
import page2 from './page2'
import page3 from './page3'

export default [
  {
    path: '/home',
    alias: '/',
    title: 'home',
    component (resolve) {
      require(['@/views/home'], resolve)
    }
  },

  page1,

  page2,

  page3,

  { // 404 置后
    path: '*',
    component: {
      beforeCreate () {
        window.swal({
          type: 'warning',
          title: '404 NOT FOUND',
          timer: 1000,
          showConfirmButton: false
        })
        this.$router.replace('/')
      },
      template: '<div></div>'
    }
  }
]
