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
      state.RestaurantInfo = info;
      console.log(state.RestaurantInfo);
    },
    GET_MENU(state, menu){
      state.foods = [];
      for(var i = 0;i<menu.length;i++){
        state.foods.push(menu[i])
      }
    },

    ADD_FOOD(state,newfood){
      for(var i =0;i< state.foods.length;i++){
        if(state.foods[i].name == newfood.name){
          state.foods.splice(i,1);
          break;
        }
      }
      state.foods.push(newfood);
      if(state.types.indexOf(newfood.food_type) == -1){
        state.types.push(newfood.food_type);
      }
    },

    EDIT_FOOD(state, payload){
      for(var i =0;i < state.foods.length;i++){
        if(payload.food_id == state.foods[i].food_id){
           state.foods[i].name = payload.data.name;
           state.foods[i].description = payload.data.description
           state.foods[i].price = payload.data.price
           state.foods[i].image = payload.data.image
           state.foods[i].food_type = payload.data.food_type
           if(state.types.indexOf(payload.data.food_type) == -1){
            state.types.push(payload.data.food_type)
           }
           state.foods[i].available  = payload.data.available
           break;
        }
      } 
    },

    INIT_TYPES(state,menu){
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
      state.RestaurantInfo=[];
      state.foods =[];
      state.orders=[];
      state.types=['全部'];
    },
    REMOVE_FOOD(state,payload){
      for(var i = 0; i < state.foods.length;i++){
        if(state.foods[i].food_id == payload.food_id){
          state.foods.splice(i,1);
          break;
        }
      }
    },
    HANDLE_ORDER(state,payload){
      for(var i =0;i< state.orders.length;i++){
        if(state.orders[i].order_id == payload.order_id){
          state.orders[i].status =  payload.status
        }
      }
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
    editFood({commit},payload){
      commit("EDIT_FOOD",payload);
    },
    initTypes({commit},menu){
      commit("INIT_TYPES",menu);
    },
    getOrders({commit},orders){
      commit("GET_ORDERS",orders);
    },
    clearWhenExit({commit}){
      commit("CLEAR");
    },
    removeFood({commit},payload){
      commit("REMOVE_FOOD",payload);
    },

    //order part 
    handleOrder({commit},payload){
      commit("HANDLE_ORDER",payload)
    }
  }
});


export default store;