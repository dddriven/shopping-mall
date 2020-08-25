import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import toast from 'common/toast/index'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

Vue.use(toast)
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

FastClick.attach(document.body)

import router from '../src/router/index'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
