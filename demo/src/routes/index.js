import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './map/' // 路由映射

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  // linkActiveClass: 'router-link-active',
  // base: '/',
  // scrollBehavior: fn
  routes
})

export default router
