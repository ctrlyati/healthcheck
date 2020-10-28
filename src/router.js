import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'

import LoginPage from './components/LoginPage.vue'
import HelloWorld from './components/HelloWorld.vue'

import { auth } from './fb/firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:[
    { 
      path: '/login', 
      component: LoginPage,
      meta : {
        requiresAuth: false
      }
    },
    { 
      path: '/', 
      component: HelloWorld, 
      meta : {
        requiresAuth: true
      }
   },
  ]
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router