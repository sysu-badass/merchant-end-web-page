<template>
    <div >
        <topbar></topbar>
        <header class="info-title">门店信息</header>
        <div class="info-main">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="店名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="地址">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
                <el-form-item label="手机号">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
                <el-form-item label="营业时间">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="店铺公告">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存修改</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script>
    import topbar from '@/components/Topbar'
    export default {
        data() {
            return {
                form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        },
        components:{
            topbar
        }
    }
</script>
<style scoped>
    .info-title{
        margin-top: 20px;
        text-align: center;
    }
    .info-main{
        width: 60%;
        background-color: #F9FAFC;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
 
    }


</style>