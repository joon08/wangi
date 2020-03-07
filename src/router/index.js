import Vue from 'vue'
import VueRouter from 'vue-router' // 引进路由插件

import routes from './routes'

Vue.use(VueRouter) // 使用路由插件

// 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  mode: 'history',
  routes
})
