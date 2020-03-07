import Vue from 'vue'
import App from './App.vue'

import '../utils/rem' // 移动端适配
import '../utils/reset.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
