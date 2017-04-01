// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


const FastClick = require('fastclick')
FastClick.attach(document.body)

import '@/common/stylus/index.styl';
import '~/vux/src/styles/reset.less';
import '~/animate.css/animate.css';

import  {AlertPlugin} from 'vux'
Vue.use(AlertPlugin)

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false

import './plugin/toast.css';
import Toast from './plugin/toast';
Vue.use(Toast);
import plugin from './plugin/who'
Vue.use(plugin);


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
