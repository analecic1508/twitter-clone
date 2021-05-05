/* eslint-disable prettier/prettier */
import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Profile from '../views/Profile.vue'
import HomePage from '../views/HomePage.vue'
import Comments from '../views/Comments.vue'
import SignUp from '../views/SignUp.vue'
import Users from '../views/Users.vue'
import store from '../store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'logIn',
      component: LogIn
    },
    {
      path: '/SignUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/Comments',
      name: 'comments',
      component: Comments
    },
    {
      path: '/HomePage',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/Users',
      name: 'users',
      component: Users
    }
  ]
})

router.beforeEach((to, from, next) => {
  next(to.name == "logIn" || store.state.authenticated == true);
})
export default router
