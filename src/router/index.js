import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Dashboard from '@/components/Dashboard' 
// import Temp from '@/components/Temp' 
// import Orderlist from '@/components/Orderlist'
import Info from '@/components/Info'
import Dishes from '@/components/Dishes'
import QRCode from '@/components/QRCode'
import Explain from '@/components/Explain'
import Orderlist from '@/components/Orderlist'
import addfood from '@/components/Addfood'
import Detail from '@/components/Detail'


Vue.use(Router)

const routes = [{
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
    component:Dashboard,
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