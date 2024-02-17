import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import AddUser from '@/components/AddUser'
import EditUser from '@/components/EditUser'

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
      path: '/Admin/edit_user/:id?',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
