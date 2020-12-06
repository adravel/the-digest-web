import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.prototype.$http = axios
const token = localStorage.getItem('user-token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization']  = token
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
