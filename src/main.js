// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


const FastClick = require('fastclick')
FastClick.attach(document.body)

import '@/common/stylus/index.styl';

import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// vue-cli 脚手架写法
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })
