<template>
  <div class='card'>
    <div class='dish_content'>
      <el-card :body-style="{ padding: '0px' }">
          <img :src='info.dishImage' class="image">
          <div style="padding-left: 5px">
            <!-- <span>{{info.price}}</span> -->
            <div class="bottom clearfix">
              <time class="data">价格: {{info.price}}</time>
              <!-- <el-button type="text" class="button">详细</el-button> -->
            </div>
          </div>
          <div style="padding-left: 5px; padding-bottom:5px">
            <!-- <span>{{info.price}}</span> -->
            <div class="bottom clearfix">
              <time class="data">月销量: {{info.monthlySales}}</time>
              <el-button style="padding-right:5px" type="text" class="button" @click="detail">详细</el-button>
            </div>
          </div>
      </el-card>
   
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    methods: {
      detail(){
        alert("detail page")
      }
    }
  }
</script>

<style scoped>
.card{
    float: left;
    width: 250px;
    height: 250px;
    min-width: 150px;
    padding-bottom: 20px;
}
.dish_content{
    margin: 5px;
    padding:10px;
    /* background-color:aqua; */
}
  .data {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>