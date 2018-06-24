<template>
    <div class="container">
        <topbar></topbar>
        <header class="info-title">门店信息</header>
        <div class="info-main">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="店名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="营业时间">
                    <el-time-picker
                      v-model="value2"
                      :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                      }"
                      placeholder="任意时间点">
                    </el-time-picker>
                    至
                    <el-time-picker
                      arrow-control
                      v-model="value3"
                      :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                      }"
                      placeholder="任意时间点">
                    </el-time-picker> 
                </el-form-item>
                <el-form-item label="店铺公告">
                    <el-input type='textarea' v-model="form.notification"></el-input>
                </el-form-item>
                <el-form-item label="店内环境">
                    <el-upload
                      action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存修改</el-button>
                </el-form-item> -->
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
                desc: '',
                dialogImageUrl: '',
                dialogVisible: false
                }
            }
        },
        methods: {
            handleRemove(file, fileList) {
              console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
              this.dialogImageUrl = file.url;
              this.dialogVisible = true;
            },
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
    .container{
        /* background-color:yellow; */
        height: 100%;
    }
    .info-title{
        margin-top: 20px;
        text-align: center;
    }
    .info-main{
        width: 60%;
        /* background-color: #F9FAFC; */
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
    }
</style>