import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/layout/main1.vue'
import blogContain from '@/layout/components/blogContain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'mainContent',
      component: mainContent,
      children: [
        { path: '/home', name: 'home', component: blogContain }
      ]
    }
  ]
})
