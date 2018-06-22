<template>
    <div class="login-wrap">
        <div class="ms-title">Eorder.</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="账号" ></el-input>
                </el-form-item>
                <!-- <div class="name-error" v-if="name-error">
                    <span>{{name-errinfo}}</span>
                </div> -->

                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <!-- <div class="pass-error" v-if="pass-error">
                    <span>{{passerrinfo}}</span>
                </div> -->
                
                <div class="login-btn">
                    <el-button type="primary" @click="login('ruleForm')">登录</el-button>
                </div>
                <p class="register" @click="register()">注册</p>  
            </el-form>
        </div>
    </div>    
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    import topbar from '@/components/Topbar'

    export default {
        name: 'login',
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',                 
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            login(formName) {
                var bodyFormData = new FormData();
                bodyFormData.set('username',this.$data.ruleForm['username']);
                bodyFormData.set('password', this.$data.ruleForm['password']);            
                axios({
                    method: 'post',
                    url: '/api/login',
                    data: bodyFormData,
                    config: { headers: {'Content-Type': 'multipart/form-data' }}                   
                })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            },
            register() {
                this.$router.push('/register');
            }
        }
    }
</script>

<style scoped>
    .el-form{
        font:white;
    }
    .topbar{
        position: relativ;
        top:0;
        width: 100%;
        height: 100;
        background: black;
        z-index: 1000;   
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
