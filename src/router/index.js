import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/main-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main Page',
      component: Main
    }
  ]
})
