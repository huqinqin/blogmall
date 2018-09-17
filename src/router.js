import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/layout/main1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    }
  ]
})
