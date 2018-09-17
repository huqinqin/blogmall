import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {plugin1} from '@/plugin'

Vue.use(plugin1)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
