<template>
    <div class="login-wrap">
        <div class="topbar">
            <topbar></topbar>
        </div>
        <div class="ms-title">Eorder.</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="name">
                    <el-input v-model="ruleForm.name" placeholder="账号" ></el-input>
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
    export default {
        name: 'login',
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    validate: ''                    
                },
                rules: {
                    name: [
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
                alert("you clicked login")
                axios.get('http://127.0.0.1:5000/login?name=arron111')
                    .then(function (response) {
                      alert("1"+response);
                    })
                    .catch(function (error) {
                      alert("2"+error);
                    });
                alert("now done")
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
