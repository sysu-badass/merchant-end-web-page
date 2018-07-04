<template>
  <div class='card'>
    <div class='dish_content'>
      <el-card :body-style="{ padding: '0px' }">
          <img :src='info.images[0].url' class="image" height="180px" width="150px">
          <div style="padding-left: 5px">
            <div class="bottom clearfix">
              <time class="data">名称: {{info.name}}</time>
            </div>
            <!-- <span>{{info.price}}</span> -->
            <div class="bottom clearfix">
              <time class="data">价格: {{info.price}}</time>
            </div>
          </div>
          <div style="padding-left: 5px; padding-bottom:5px">
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
        this.$router.push('/dishes/'+this.info.name)
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
    padding-bottom: 30px;
}
.dish_content{
    margin: 5px;
    padding:10px;
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