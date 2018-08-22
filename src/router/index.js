import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'
import about from '../views/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/about',
      name:'About',
      component: about
    }
  ]
})
