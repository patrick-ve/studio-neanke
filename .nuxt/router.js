import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14891d57 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1933f7ea = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _e5a4fedc = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _2831f6a6 = () => interopDefault(import('../pages/projects/studio-neanke.vue' /* webpackChunkName: "pages/projects/studio-neanke" */))
const _d7c49e6a = () => interopDefault(import('../pages/projects/_id.vue' /* webpackChunkName: "pages/projects/_id" */))
const _3440f81c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _14891d57,
    name: "about"
  }, {
    path: "/contact",
    component: _1933f7ea,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _e5a4fedc,
    name: "portfolio"
  }, {
    path: "/projects/studio-neanke",
    component: _2831f6a6,
    name: "projects-studio-neanke"
  }, {
    path: "/projects/:id?",
    component: _d7c49e6a,
    name: "projects-id"
  }, {
    path: "/",
    component: _3440f81c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
