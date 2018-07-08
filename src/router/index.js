import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/page/Login";
import Register from "@/components/page/Register";
import Info from "@/components/main-content/Info";
import Menu from "@/components/main-content/Menu";
import QRCode from "@/components/main-content/QRCode";
import Explain from "@/components/main-content/Explain";
import Orderlist from "@/components/main-content/Orderlist";
import addfood from "@/components/main-content/Addfood";
import Detail from "@/components/main-content/Detail";
import layout from "@/components/common/Layout";
import Orderdetail from '@/components/main-content/OrderDetail'

Vue.use(Router);

const routes = [{
  path:"/test",
  name:"test",
  component:layout
},{
  path: "/",
  name: "/",
  redirect:"/dashboard"
},{
  path: "/login",
  name: "/login",
  component: Login
},{
  path:"/Register",
  name: "register",
  component: Register
},{
  path:"/dashboard",
  name:"",
  meta:{
    requiresAuth: true
  },
  component:layout,
  children:[ {
    path:"",
    component: Info,
    meta:{
      requiresAuth: true
    }
  },{
    path:"/orderlist",
    component: Orderlist,
    meta:{
      requiresAuth: true
    }
  },{
    path:"/orderlist/:order_id",
    component: Orderdetail,
    meta:{
      requiresAuth: true
    }   
  },{
    path:"/menu",
    component: Menu,
    meta:{
      requiresAuth: true
    }
  } ,{
    path:"/qrcode",
    component: QRCode,
    meta:{
      requiresAuth: true
    }     
  },{
    path:"/explain",
    component: Explain,
    meta:{
      requiresAuth: true
    }
  },{
    path:"/addfood",
    component: addfood,
    meta:{
      requiresAuth: true
    }
  },{
    path:"/menu/:food_id",
    component:Detail , 
    meta:{
      requiresAuth: true
    }
  }        
  ]
}
];

const router = new Router({
  mode:"history",
  routes: routes
});

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem("restaurant_id");
  if (to.meta.requiresAuth) {
    if(!token || token === undefined){
      next({
        path: "/login",
      });
    }else{
      next();
    }
  } else {
    next();
  }
});

export default  router;