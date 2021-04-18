import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [{
  path: '/',
  name: 'index',
  redirect: '/index',
  component: () =>
    import( /* webpackChunkName: "about" */ '../views/Index.vue'),
  children: [{
    path: 'index',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Index.vue')
  },
  {
    path: 'us',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Us.vue')
  },
  {
    path: 'about',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/About.vue')
  },
  {
    path: 'ui',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Ui.vue')
  },
  {
    path: 'php',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Php.vue')
  },
  {
    path: 'java',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Javadel.vue')
  },
  {
    path: 'web',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/webdel.vue')
  },
  {
    path: 'school',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/School.vue')
  },
  {
    path: 'industry',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Industry.vue')
  },
  {
    path: 'design',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Design.vue')
  },
  {
    path: 'index',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/Index.vue')
  },
  {
    path: 'list',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/pages/List.vue')
  },
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router