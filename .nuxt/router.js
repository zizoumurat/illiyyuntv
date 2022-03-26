import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5cd688d3 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _18286d1c = () => interopDefault(import('../pages/photos/index.vue' /* webpackChunkName: "pages/photos/index" */))
const _2e0548ee = () => interopDefault(import('../pages/videos/index.vue' /* webpackChunkName: "pages/videos/index" */))
const _3e7c1d1b = () => interopDefault(import('../pages/videos/all/index.vue' /* webpackChunkName: "pages/videos/all/index" */))
const _238477f9 = () => interopDefault(import('../pages/photos/detail/_imagId/index.vue' /* webpackChunkName: "pages/photos/detail/_imagId/index" */))
const _67bb8a53 = () => interopDefault(import('../pages/videos/watch/_videoId/index.vue' /* webpackChunkName: "pages/videos/watch/_videoId/index" */))
const _5b1fe78b = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _15dd680c = () => interopDefault(import('../pages/photos/_pageId/index.vue' /* webpackChunkName: "pages/photos/_pageId/index" */))
const _49f70814 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _5cd688d3,
    name: "blog"
  }, {
    path: "/photos",
    component: _18286d1c,
    name: "photos"
  }, {
    path: "/videos",
    component: _2e0548ee,
    name: "videos"
  }, {
    path: "/videos/all",
    component: _3e7c1d1b,
    name: "videos-all"
  }, {
    path: "/photos/detail/:imagId",
    component: _238477f9,
    name: "photos-detail-imagId"
  }, {
    path: "/videos/watch/:videoId",
    component: _67bb8a53,
    name: "videos-watch-videoId"
  }, {
    path: "/blog/:slug",
    component: _5b1fe78b,
    name: "blog-slug"
  }, {
    path: "/photos/:pageId",
    component: _15dd680c,
    name: "photos-pageId"
  }, {
    path: "/",
    component: _49f70814,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
