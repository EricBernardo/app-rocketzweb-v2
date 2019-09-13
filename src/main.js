import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/pt-br' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import VueMoment from 'vue-moment'
import VueTheMask from 'vue-the-mask'
import money from 'v-money'

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })

Vue.component('pagination', require('laravel-vue-pagination'))

Vue.use(VueTheMask)

Vue.use(VueMoment)

Vue.use(money, {
  decimal: ",",
  thousands: ".",
  prefix: "R$ ",
  precision: 2,
  masked: false
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
