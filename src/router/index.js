import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import Home from '../views/home/Index.vue'
import AuthHandle from '../views/auth/Handle.vue'

Vue.use(VueRouter)

let siteUrl = window.location.origin;
// let siteUrl = 'http://master.eternity-frontend.stag.stfalcon.com';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Memorial web service'},
  },
  {
    path: '/auth/handle',
    name: 'auth.handle',
    component: AuthHandle
  },
  {
    path: '/memorials/create/welcome',
    name: 'memorials.create.welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/memorial-create/Welcome.vue'),
    meta: { title: 'Welcome', requiresAuth: true },
  },
  {
    path: '/memorials/create/step1',
    name: 'memorials.create.step1',
    component: () => import('../views/memorial-create/Step1.vue'),
    meta: { title: 'Create memorial - step1', requiresAuth: true },
  },
  {
    path: '/memorials/create/step2',
    name: 'memorials.create.step2',
    component: () => import('../views/memorial-create/Step2.vue'),
    meta: { title: 'Create memorial - step2', requiresAuth: true },
  },
  {
    path: '/memorials/create/step3',
    name: 'memorials.create.step3',
    meta: { title: 'Create memorial - step3', requiresAuth: true },
    component: () => import('../views/memorial-create/Step3.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard.show',
    meta: {
      title: 'Dashboard',
      // requiresAuth: true
    },
    component: () => import('../views/dashboard/Index.vue')
  },
  {
    path: '/memorials/show', // :slug
    name: 'memorials.show',
    meta: {
      title: 'Memorials show',
      // requiresAuth: true
    },
    component: () => import('../views/memorials/show/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let url = decodeURIComponent(siteUrl+'/auth/handle');
let redirectUrl = 'https://eternity.co.il/sso?type=login&lang='+localStorage.getItem('vueml-lang')+'&redirectURL='+url;

// Check Route Access
router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['auth/isLoggedIn']) {
      next()
      return;
    }
    location.href = redirectUrl;
  } else {
    next()
  }
})

export default router
