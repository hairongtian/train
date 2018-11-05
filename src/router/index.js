import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'
import MyTrain from '@/pages/train/myTrain.vue'
import NewTrain from '@/pages/train/newTrain.vue'

Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      title: '培训'
    },
    {
      path: '/myTrain',
      name: 'myTrain',
      component: MyTrain
    },
    {
      path: '/newTrain',
      name: 'newTrain',
      component: NewTrain
    },
    // 重定向
    {
      path: '/',
      redirect: '/home'
      // hidden: true
    }
  ],
  // linkActiveClass简写
  linkActiveClass: 'active'
})
