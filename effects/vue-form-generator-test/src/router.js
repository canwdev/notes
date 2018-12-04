import Vue from 'vue'
import Router from 'vue-router'
import Demo1 from './views/demo1/Demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Demo1
    },
    {
      path: '/demo2',
      // 懒加载
      component: () => import('./views/demo2/Demo2')
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
