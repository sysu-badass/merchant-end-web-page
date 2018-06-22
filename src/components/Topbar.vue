<template>
    <div class="topbar">
        <div class="heading">
            <img src="../../static/img/logo.jpg">
        </div>
        <div class="right-breadcrumb">
            <el-button @click="login()">登录</el-button> 
            <el-button @click="register()">注册</el-button>
            <el-button>联系我们</el-button>              
        </div>
    </div>
</template>

<script>
  export default {
    name:'topbar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.topbar{
        position: relative;
        top:0;
        box-sizing: border-box;
        width: 100%;
        height: 10%;
        font-size: 40px;
        line-height: 70px;
        color: #fff;   
}
.heading{
        float: left;
        width:250px;
        text-align: center;
}
.right-breadcrumb{
    position: right;
    float:right;
    margin-right: 30px;
}
</style>
