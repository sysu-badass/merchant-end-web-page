import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    RestaurantInfo:[],
    foods:[],
    types:["全部"],
    orders:[]
  },

  mutations:{
    GET_INFO(state, info){
      // console.log("mutation GET_INFO");
      state.RestaurantInfo = info;
      console.log(state.RestaurantInfo);
    },
    GET_MENU(state, menu){
      // console.log("mutation GET_MENU");
      // console.log(menu);
      for(var i = 0;i<menu.length;i++){
        state.foods.push(menu[i])
      }
    },

    ADD_FOOD(state,newfood){
      state.foods.push(newfood)
      if(state.types.indexOf(newfood.food_type) == -1){
        state.types.push(newfood.food_type);
      }
    },

    INIT_TYPES(state,menu){
      // console.log("mutation INIT_TYPES")
      for(var i =0 ; i < menu.length ; i++){
        var current_type = menu[i].food_type;
        if(state.types.indexOf(current_type) == -1){
          state.types.push(menu[i].food_type)
        }
      }   
      console.log(state.types)
    },

    GET_ORDERS(state,orders){
      for(var i = 0 ;i< orders.length;i++){
        state.orders.push(orders[i]);
      }
    },
    CLEAR(state){
      // while(state.RestaurantInfo.length != 0 ) state.RestaurantInfo.splice(0,1);
      // while(state.foods.length != 0 ) state.foods.splice(0,1);
      // while(state.orders.length != 0 ) state.orders.splice(0,1);
      // while(state.types.length != 0 ) state.types.splice(0,1);
      state.RestaurantInfo=[];
      state.foods =[];
      state.orders=[];
      state.types=['全部'];
    }


  },
  actions:{
    getInfo({commit},info){
      commit("GET_INFO",info);
    },
    getMenu({commit},menu){
      commit("GET_MENU",menu);
    },
    addFood({commit},newfood){
      commit("ADD_FOOD",newfood);
    },
    initTypes({commit},menu){
      commit("INIT_TYPES",menu);
    },
    getOrders({commit},orders){
      commit("GET_ORDERS",orders);
    },
    clearWhenExit({commit}){
      commit("CLEAR");
    }
  }
});


export default store;