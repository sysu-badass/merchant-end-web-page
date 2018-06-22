import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import IndexPage from '@/components/IndexPage'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: "/index",
      component: IndexPage
    },
    {
      path: '/login',
      name: '/login',
      component: Login
    },
    {
      path:'/Register',
      name: 'register',
      component: Register
    }
  ]
})
