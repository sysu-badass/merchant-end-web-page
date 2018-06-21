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
      redirect:'/index'
    },
    {
      path: '/index',
      component: IndexPage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/Register',
      component: Register
    }

  ]
})
