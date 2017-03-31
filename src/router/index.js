import Vue from 'vue'
import Router from 'vue-router'
import Tabs from '@/components/tabs'
import Test from '@/components/test'
import Home from '@/components/home'
import User from '@/components/user'
import Detail from '@/components/detail'
import Swiper from '@/components/swiper'
import Geometry from '@/components/geometry'
import Animate from '@/components/animate'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: '/tabs/home'},
    {
      path: '/tabs', component: Tabs,
      children: [
        {path: 'home', component: Home},
        {path: 'test1', component: Test},
        {path: 'test2', component: Test},
        {path: 'test3', component: Test},
        {path: 'user', component: User}
      ]
    },
    {path: '/detail', component: Detail},
    {path: '/swiper', component: Swiper},
    {path: '/geometry', component: Geometry},
    {path: '/animate', component: Animate},
  ]
})
