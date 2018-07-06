import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    RestaurantInfo:[],
    foods:[],
    types:["全部"]
  },

  mutations:{
    GET_MENU(state, menu){
      console.log("mutation GET_MENU")
      for(var i = 0;i<menu.length;i++){
        state.foods.push(menu[i])
      }
      // console.log(state.foods)
    },

    ADD_FOOD(state,newfood){
      state.foods.push(newfood)
      if(state.types.indexOf(newfood.type) == -1){
        state.types.push(newfood.type);
      }
      // console.log(state.foods)
    },

    INIT_TYPES(state,menu){
      console.log("mutation INIT_TYPES")
      for(var i =0 ; i < menu.length ; i++){
        var current_type = menu[i].type;
        if(state.types.indexOf(current_type) == -1){
          state.types.push(menu[i].type)
        }
      }      
      console.log(state.types)
    }
  },
  actions:{
    getMenu({commit},menu){
      commit("GET_MENU",menu)
    },
    addFood({commit},newfood){
      commit("ADD_FOOD",newfood)
    },
    initTypes({commit},menu){
      commit("INIT_TYPES",menu)
    }
  }
});


export default store;