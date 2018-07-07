<template>
  <div >
    <div class='qr_main'>
      <el-input v-model="input" placeholder="请输入桌号"></el-input>
      <el-button @click="generateCode">生成二维码</el-button>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      input: ''
    }
  },
  methods:{
    generateCode(){
      alert("generating")
    }
  }
}
</script>

<style scoped>
.qr_main{
  width: 60%;
  height: 100%;
  min-height: 400px;
  margin: 20px auto 0;
  border-radius: 10px;
}
</style>