<template>
    <el-container>
    <el-header>
        <div class="topbar">
            <div class="logo">
                <img src="../../static/img/logo.jpg">
            </div>
            <div class="buttons">
                <el-button @click="login()">登录</el-button> 
                <el-button @click="register()">注册</el-button>
                <el-button>联系我们</el-button>              
            </div>
        </div>
    </el-header>
    <el-main>
        <div class="middle"></div>
        <div class="bottom"></div>
    </el-main>
    <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
export default{
    methods:{
        login() {
            this.$router.push('/login');
        },
        register() {
            this.$router.push('/register');
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
    .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .buttons{
        position: right;
        float:right;
        margin-right: 30px;  
    }
    .middle{
        position:relative;
        top:60%;
        width: 100%;
        height: 65%;
        background: #e7564f;
        border:black solid 2px;
    }
    .bottom{
        position:relative;
        bottom:0;
        width: 100%;
        height: 25%;
        background: orange;
        border:black,2px;
    }
</style>