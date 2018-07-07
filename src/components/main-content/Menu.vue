<template>
  <div class="container">
    <el-select v-model="chosentype" style="padding:10px"  filterable placeholder="选择食品种类">
      <el-option
      v-for="item in this.$store.state.types"
      :key="item"
      :label="item"
      :value="item">
      </el-option>
    </el-select>
    <div :key="index" v-for="(item, index) in this.$store.state.foods">
      <foodcard :info="item" v-if="chosentype=='全部'||item.food_type==chosentype"></foodcard>
    </div>
    <div class="buttonholder">
      <el-button class="addfood" type="primary" circle @click="goAddFood">添加菜品</el-button>
    </div>
  </div>
</template>

<script>
import foodcard from '@/components/common/FoodCard'
import axios from '../../router/http'
import {getMenu} from '../../api/menu'

export default{
  created: function(){
    var self = this;
    getMenu( window.localStorage.getItem('restaurant_id'))
    .then(response=>{
      // console.log(response.data.foods)
      self.$store.dispatch("getMenu",response.data.foods);
      self.$store.dispatch("initTypes",response.data.foods);
    })
    .catch(error=>{
      console.log("获取菜品失败")
    })
  },
  components:{
    foodcard
  },
  data(){
    return {
      chosentype:'全部'
    }
  },
  methods: {
    goAddFood(){
      this.$router.push('/addfood')
    }
  }
}
</script>

<style>
.container{
    /* background-color:yellow; */
    height: 100%;
    /* overflow-y: scroll; */
}
.dishes{
    /* background-color:violet; */
    height: 100%;
    width:100%;
    height: 100%;
}
.buttonholder{
    position: relative;
    height: 220px;
    width:200px;
    /* border: 5px solid gray; */
    float: left;
    margin: 20px;
}
.addfood{
    float: left;
    align-self: center;
    border-radius: 250px;
    margin-top:100px;
    width:80px;
    height: 80px;
}
</style>