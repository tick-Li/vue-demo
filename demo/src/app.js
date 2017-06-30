/* 启动文件 */
import Vue from 'vue'
import router from '@/routes/'
import App from '@/components/App'
import Promise from 'promise-polyfill'

if (!window.Promise) {
  window.Promise = Promise
}

/* eslint-disable*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

if (__DEV__) {
  console.info('[当前环境] 开发环境')
  Vue.config.devtools = true
  Vue.config.productionTip = false
}

if (__PROD__) {
  console.info('[当前环境] 生产环境')
  Vue.config.devtools = false
}
