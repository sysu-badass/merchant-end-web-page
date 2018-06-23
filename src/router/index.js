import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard' 
import Temp from '@/components/Temp' 

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '/',
    redirect:'/dashboard'
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
  },
  {
    path:'/dashboard',
    name:'',
    meta:{
      requiresAuth: true
    },
    component:Dashboard,
    children:[{
        path:'',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/neworder',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/preparingorder',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/finishedorder',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/rejectedorder',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/dishes',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      },
      {
        path:'/qrcode',
        component: Temp,
        meta:{
          requiresAuth: true
        }     
      },
      {
        path:'/explain',
        component: Temp,
        meta:{
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new Router({
  mode:'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('access_token')
  if (to.meta.requiresAuth && (!token || token === undefined)) {
    next({
      path: '/login'
      // query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default  router