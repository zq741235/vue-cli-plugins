import Vue from 'vue'
import Router from 'vue-router'

import routerConfig from './router-table'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routerConfig
})

router.beforeEach((to, from, next) => {
    const title = to.meta&&to.meta.title
    if (title) {
     document.title = title;
    }
    next()
})
export default router
