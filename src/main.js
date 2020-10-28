import Vue from 'vue/dist/vue.js'
import router from './router'

import GSignInButton from 'vue-google-signin-button'

import App from './App.vue'
Vue.config.productionTip = false


Vue.use(GSignInButton)

new Vue({
  el: '#app',
  // render: h => h(App),
  router,
  template: '<App/>',
  components: { App }
})
