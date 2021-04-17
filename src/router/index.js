import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import School from '@/views/School.vue'
import Us from '@/views/Us.vue'
import Ui from '@/views/Ui.vue'
import Php from '@/views/Php.vue'

Vue.use(VueRouter)

const routes = [
  {
    // school
    path: '/',
    name: 'School',
    component: School
  },
  {
    // 
    path: '/php',
    name: 'Php',
    component: Php
  },
  {
    // 
    path: '/ui',
    name: 'Ui',
    component: Ui
  },
  {
    // 
    path: '/us',
    name: 'Us',
    component: Us
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
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
