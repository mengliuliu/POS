import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL =
  'https://www.fastmock.site/mock/0bf6a5bae7eab8507e44b56191ddff36/vuepos/'

Vue.prototype.$http = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
