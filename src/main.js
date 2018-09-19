import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { plugin1 } from '@/plugin'
import { Button, Icon, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(plugin1)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Input)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
