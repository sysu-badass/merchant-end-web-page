<template>
  <div class="register-wrap">
    <div class="ms-title">Eorder.</div>
    <div class="ms-register">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
        <div v-if="errorInfo">
            <span>{{errInfo}}</span>
        </div>
        <el-form-item prop="phone">
            <el-input placeholder="手机" v-model="ruleForm.phone" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item prop="checkPassword">
            <el-input type="password" v-model="ruleForm.checkPassword" placeholder="确认密码"></el-input>
        </el-form-item>
        <div class="register-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
        </div>
        <p class="register" @click="gologin()">已有账号?</p>  
      </el-form>
    </div>
  </div>    
</template>

<script>
import {register} from "../../api/login"

export default {
  name: 'register',
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if(!/^(\w){6,20}$/.test(value)){
        callback(new Error('只能输入6-20个字母、数字、下划线'))
      }else{
        if (this.ruleForm.checkPassword !== '') {
        this.$refs.ruleForm.validateField('checkPassword');
      }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(value === ''){
        callback(new Error('请输入手机号'));
      }else if(!/^1[3|4|5|7|8][0-9]{9}$/.test(value)){
        callback(new Error('手机号格式不正确'))
      }else{
        callback();
      }
    };
    return {
      errorInfo:false,
      ruleForm: {
        password: '',
        checkPassword: '',
        phone:''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phone:[
          { validator: validatePhone, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    gologin(){
      this.$router.push('/login');
    },
    submitForm(formName) {
      var self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(this.$data.ruleForm)
          .then(response=> {
            if(response.status ==200){
              this.$message({
	                type: 'success',
	                message: '注册成功，请登录'
              });
              // window.localStorage.setItem('restaurant_id', this.$data.ruleForm['phone'])
              self.$router.push('/login');             
            }
          })
          .catch(error => {
            console.log(error);
          });              
        }
      });
    }
  }
}
</script>

<style scoped>
  .el-button--primary{
    background-color: #FF8247;
    border:#FF8247;
  }
  .register-wrap{
    position: relative;
    width:100%;
    height:100%;
  }
  .ms-title{
    position: absolute;
    top:51%;
    width:100%;
    margin-top: -230px;
    text-align: center;
    font-size:50px;
    font:bold;
    color: #fff;
  }
  .ms-register{
    position: absolute;
    left:50%;
    top:50%;
    width:300px;
    height:270px;
    margin:-150px 0 0 -190px;
    padding:40px;
    border-radius: 5px;
    background: #fff;
  }
  .ms-register span {
    color: red;
  }
  .register-btn{
    text-align: center;
  }
  .register-btn button{
    width:100%;
    height:36px;
  }
  .code {
    width: 112px;
    height: 35px;
    border: 1px solid #ccc;
    float: right;
    border-radius: 2px;
  }
  .validate-code {
    width: 136px;
    float: left;
  }
  .register {
    font-size:14px;
    line-height:30px;
    color:#999;
    cursor: pointer;
    float:right;
  }
</style>
