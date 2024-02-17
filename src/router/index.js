import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import AddUser from '@/components/AddUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/regis',
      name: 'Register',
      component: Register
    },
    {
      path: '/add-user',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
