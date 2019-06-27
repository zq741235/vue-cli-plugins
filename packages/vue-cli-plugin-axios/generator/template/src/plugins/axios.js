import Vue from 'vue'
import { getPromise, postPromise, allPromise } from '@/api/base'

Vue.prototype.$_get = getPromise
Vue.prototype.$_post = postPromise
Vue.prototype.$_all = allPromise
