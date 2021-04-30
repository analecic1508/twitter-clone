/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile.vue'
Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: LogIn
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    }
  ]
})
export default router
