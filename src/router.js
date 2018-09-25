import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/layout/main1.vue'
import blogContain from '@/layout/components/blogContain'
import articles from '@/layout/components/articles'
import message from '@/layout/components/message'
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
        { path: '/home', name: 'home', component: blogContain },
        { path: '/articles/:id', name: 'articles', component: articles},
          {path: '/message', name: 'message', component: message}
      ]
    }
  ]
})
