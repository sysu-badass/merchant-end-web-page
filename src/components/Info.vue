<template>
    <div class="container">
        <topbar></topbar>
        <header class="info-title">门店信息</header>
        <div class="info-main">
             <el-form ref="form" :model="form" label-width="80px">            
                <el-form-item label="店内环境">
                    <el-upload
                      action="https://upload-z2.qiniup.com"
                      list-type="picture-card"
                      :on-success="handleSuccess"
                      :on-error="handleError"
                      :before-upload="beforeUpload"
                      :data="postData">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                </el-form-item>
            </el-form>    
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="店名">
                    <el-input :disabled="notEditing" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="简介">
                    <el-input :disabled="notEditing" v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input :disabled="notEditing" v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input :disabled="notEditing" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="营业时间">
                    <el-input :disabled="notEditing" v-model="form.opentime"></el-input>
                </el-form-item>
                <el-form-item label="店铺公告">
                    <el-input :disabled="notEditing" type='textarea' v-model="form.notification"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-button icon="el-icon-edit" @click="editInfo">{{ buttonmsg}}</el-button> 
                </el-form-item>
            </el-form>        
        </div>
    </div>
</template>


<script>
    import topbar from '@/components/Topbar'
    import axios from '../router/http'

    export default {
        data() {
            return {
                form: {
                    name: window.localStorage.getItem('name'),
                    description: window.localStorage.getItem('description'),
                    address: window.localStorage.getItem('address'),
                    phone: window.localStorage.getItem('phone'),
                    notification: window.localStorage.getItem('notification'),
                    opentime:window.localStorage.getItem('opentime')
                },
                notEditing:true,
                buttonmsg:'修改',
                postData:{
                    token: window.localStorage.getItem('imageToken')
                },
                imageUrl:''
            }
        },
        methods: {
            editInfo(){
                var self = this;
                this.$data.notEditing = !this.$data.notEditing;
                if(this.$data.buttonmsg=="修改"){
                    this.$data.buttonmsg='保存';
                }else if(this.$data.buttonmsg=="保存"){
                    var bodyFormData = new FormData();
                    bodyFormData.set('name',self.$data.form['name']);
                    bodyFormData.set('description', this.$data.form['description']);
                    bodyFormData.set('address',this.$data.form['address']);
                    bodyFormData.set('phone', this.$data.form['phone']);    
                    bodyFormData.set('opentime',this.$data.form['opentime']);
                    bodyFormData.set('notification', this.$data.form['notification']);        
                    axios({
                        method: 'post',
                        url: '/api/restaurants/editinfo',
                        data: bodyFormData,
                        config: { headers: {'Content-Type': 'multipart/form-data' }}                   
                    })
                    .then(response=>{
                        if(response.data['status']=='200'){
                            alert("修改成功")
                        }else{
                            alert("修改失败，请稍后再试！")
                        } 
                         self.$data.buttonmsg="修改";
                    })
                    .catch()
                }
            },
            handleSuccess(res,file){
                this.imageUrl ='http://pb1ftb8nx.bkt.clouddn.com/'+ res.key
                console.log(this.imageUrl)
                axios.post('/restaurants/info/pics').then(
                    alert("already upload the pic to server")
                ).catch(
                    alert("failed, try again")
                )
            },
            handleError(res){
                console.log(res)
            },
            beforeUpload(){
                this.$data.postData.token = window.localStorage.getItem('imageToken')
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