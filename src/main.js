import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './libs/api.install'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
