import Vue from 'vue'
import Router from 'vue-router'
import Tabs from '@/components/tabs'
import Test from '@/components/test'
import Home from '@/components/home'
import Detail from '@/components/detail'
import Geometry from '@/components/geometry'
import Animate from '@/components/animate'
// import User from '@/components/user'
// import Swiper from '@/components/swiper'


// 懒加载的一种方式
const User = resolve => require(['@/components/user'], resolve)
const Swiper = resolve => require(['@/components/swiper'], resolve)

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
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
    // 这个任意（其他）地址居然还和位置有关系
    {path: '*', redirect: '/tabs/home'}
  ]
})
