import Vue from 'vue'
import Router from 'vue-router'
import Tabs from '@/components/tabs'
import Test from '@/components/test'
import Home from '@/components/home'
import Detail from '@/components/detail'
import Geometry from '@/components/geometry'
import Animate from '@/components/animate'
import Rotate from '@/components/rotate'
// import User from '@/components/user'
// import Swiper from '@/components/swiper'


// 懒加载的一种方式
const User = resolve => require(['@/components/user'], resolve)
const Swiper = resolve => require(['@/components/swiper'], resolve)
const tk = resolve => require(['@/components/tk'], resolve)

Vue.use(Router)

export const router = new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/tabs', component: Tabs,
      children: [
        {path: 'home', component: Home, meta: {title: 'home'}},
        {path: 'test1', component: Test, meta: {title: 'test1'}},
        {path: 'test2', component: Test, meta: {title: 'test2'}},
        {path: 'rotate', component: Rotate, meta: {title: 'rotate'}},
        {path: 'user', component: User, meta: {title: 'user'}}
      ]
    },
    {path: '/detail', component: Detail, meta: {title: 'detail'}},
    {path: '/swiper', component: Swiper, meta: {title: 'swiper'}},
    {path: '/geometry', component: Geometry, meta: {title: 'geometry'}},
    {path: '/animate', component: Animate, meta: {title: 'animate'}},
    {path: '/tk', component: tk, meta: {title: 'tk'}},
    // 这个任意（其他）地址居然还和位置有关系
    {path: '*', redirect: '/tabs/home'}
  ]
});

// 跳转之前把title先改了
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

