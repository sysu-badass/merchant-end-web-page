<template>
  <div class="orderdetail">
    <el-table :data="content">
      <el-table-column
        prop="image"
        label="图片"
        width="180">
          <template scope="scope">
              <img :src="scope.row.image" width="100" height="100"/>
          </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="数目">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getOrderDetail} from "../../api/orders"

export default {
  data(){
    return {
      content:[]
    }
  },
  created: function (){
    this.fetchData();
  },
  watch: {
  '$route': function(to, from) {
      if(/^\/orderlist\/[0-9]*$/.test(to.path)){
        this.fetchData()
      }
    }
  },
  methods:{
    fetchData(){
      var self = this;
      getOrderDetail(window.localStorage.getItem('restaurant_id'),  this.$route.params.order_id)
      .then(response =>{
        console.log(response.data.order_items)
        this.$data.content = response.data.order_items
      })
      .catch(error => {
        self.$message({
          type: 'error',
          message: '获取数据失败'
        })
      })
    }
  }
}
</script>

<style scoped>
.orderdetail{
  width:80%;
  margin: 70px auto 0;
}
</style>