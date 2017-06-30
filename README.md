# vue-demo
本项目是基于 webpack vue-router 搭建的单页框架

主要实现强开浏览器、热加载等

运行demo：
 安装完node后将demo git clone 到本地 执行命令
 npm start -------> 运行项目
 npm run build ------> 项目打包到dist文件夹
 
源代码目录：src
打包（发布到线上）目录 ： dist

浏览器支持情况: ie >= 9

待优化项：
 地址栏会有 ‘#’ 号不美观
 打开 demo/src/routes/index.js 文件修改
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import routes from './map/' // 路由映射

  Vue.use(VueRouter)

  const router = new VueRouter({
    // mode: 'history', --------->将注释去掉地址栏 ‘#’ 号消失 但是将打包的文件放到服务器下运行 点击路由后 刷新时会出现404需要服务器端配置
    // linkActiveClass: 'router-link-active',
    // base: '/',
    // scrollBehavior: fn
    routes
  })

  export default router
