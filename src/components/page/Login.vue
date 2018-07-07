<template>
    <div class="login-wrap">
        <div class="ms-title" >Eorder.</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="phonenumber">
                    <el-input v-model="ruleForm.phonenumber" placeholder="账号" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="handleLogin('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="handleLogin('ruleForm')">登录</el-button>
                </div>
                <p class="register" @click="goRegister()">注册</p>  
                
            </el-form>
        </div>
    </div>    
</template>

<script>
  import axios from '../../router/http';
  import { login } from '../../api/login';

  export default {
      name: 'login',
      localStorage:{
        access_token:'',
        fresh_token:''
      },
      data() {
        return {
          ruleForm: {
            phonenumber: '',
            password: ''                
          },
          rules: {
            phonenumber: [
              { required: true, message: '请输入手机号 ', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        handleLogin(formName) {
          var self = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              login(this.$data.ruleForm)
              .then(res=>{
                console.log(res.data)
                if(res.status == 200){
                  self.$message({
	                  type: 'success',
	                  message: '登录成功'
                  });
                  // self.$store.state.restaurant_id=Number(this.$data.ruleForm['phonenumber']);
                  window.localStorage.setItem('restaurant_id',this.$data.ruleForm['phonenumber'])
                  console.log("loged in as " + window.localStorage.getItem('restaurant_id'))
                  self.$router.push('/dashboard')
                }
              }).catch(error=>{
                  self.$message({
	                  type: 'error',
	                  message: '登录失败'
                  });
                console.log(error)
              })
            }
          });
        },
        goRegister() {
          this.$router.push('/register');
        }
      }
  }
</script>

<style scoped>
  .el-form{
    font:white;
  }
  .el-button--primary{
    background-color: #FF8247;
    border:#FF8247;
  }
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
  }
  .ms-title{
    position: absolute;
    top:52%;
    width:100%;
    margin-top: -230px;
    text-align: center;
    font-size:50px;
    font:bold;
    color: #fff;
  }
  .ms-login{
    position: absolute;
    left:50%;
    top:50%;
    width:300px;
    height:180px;
    margin:-150px 0 0 -190px;
    padding:40px;
    border-radius: 5px;
    background:white;
  }
  .ms-login span {
    color: red;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
  .register {
    font-size:14px;
    line-height:30px;
    color:#999;
    cursor: pointer;
    float:right;
  }
</style>
