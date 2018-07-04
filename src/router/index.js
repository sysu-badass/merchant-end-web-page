import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Info from '@/components/different-page/Info'
import Dishes from '@/components/different-page/Dishes'
import QRCode from '@/components/different-page/QRCode'
import Explain from '@/components/different-page/Explain'
import Orderlist from '@/components/different-page/Orderlist'
import addfood from '@/components/different-page/Addfood'
import Detail from '@/components/different-page/Detail'
import layout from '@/components/common/Layout'

Vue.use(Router)

const routes = [{
    path:'/test',
    name:'test',
    component:layout
  },{
    path: '/',
    name: '/',
    redirect:'/dashboard'
  },{
    path: '/login',
    name: '/login',
    component: Login
  },{
    path:'/Register',
    name: 'register',
    component: Register
  },{
    path:'/dashboard',
    name:'',
    meta:{
      requiresAuth: true
    },
    component:layout,
    children:[ {
        path:'',
        component: Info,
        meta:{
          requiresAuth: true
        }
      },{
        path:'/orderlist',
        component: Orderlist,
        meta:{
          requiresAuth: true
        }
      },{
        path:'/dishes',
        component: Dishes,
        meta:{
          requiresAuth: true
        }
      } ,{
        path:'/qrcode',
        component: QRCode,
        meta:{
          requiresAuth: true
        }     
      },{
        path:'/explain',
        component: Explain,
        meta:{
          requiresAuth: true
        }
      },{
        path:'/addfood',
        component: addfood,
        meta:{
          requiresAuth: true
        }
      },{
          path:'/dishes/:dishname',
          component:Detail , 
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
  if (to.meta.requiresAuth) {
    if(!token || token === undefined){
      next({
        path: '/login',
        // query: { redirect: to.fullPath }
      })
    }else{
      next();
    }
  } else {
    next();
  }
})

export default  router