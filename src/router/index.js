import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Industry from '../views/Industry/Industry.vue'
import About from '../views/About us/About us.vue'
import Javadel from '../views/Javadel/Javadel.vue'
import webdel from '../views/webdel/webdel.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/About us',
    name: 'About us',
    component: About
  },
  {
    path: '/Javadel',
    name: 'Javadel',
    component: Javadel
  },
  {
    path: '/webdel',
    name: 'webdel',
    component: webdel
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Industry',
    component: Industry
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
