<template>
    <div class="main_container">
        <header class="info-title">门店信息</header>
        <div class="info-form">
             <el-form ref="form" :model="form" label-width="80px">            
                <el-form-item label="店内环境">
                    <div class="profile-pic" :key="index" v-if="item.url !==''"  v-for="(item, index) in images">
                        <img :src="item.url" class="restaurant_imgs">
                        <div v-if="!notEditing" class="edit"><el-button @click='removeImage(item,index)'>删除</el-button></div>
                    </div>
                    <el-upload
                        v-if="!notEditing"  
                        list-type="picture-card"            
                        action="https://upload-z2.qiniup.com"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :on-success="handleSuccess"
                       :before-upload="beforeUpload"
                       :data="postData">
                       <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
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
    import axios from '../../router/http'

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
                imageUrl:'',
                dialogImageUrl: '',
                dialogVisible: false,
                images:[],
                added_images:[]
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
                    for( var i =0;i< this.added_images.length ; i++){
                        self.images.push(this.added_images.pop())
                    }  
                    bodyFormData.set('images',this.$data.images)      
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
            // handleRemove(file, fileList) {
            //   console.log(file, fileList);
            // },
           handleRemove(file, fileList) {
              for(var i =0;i<this.added_images.length;i++){
                  if(this.added_images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
                      this.added_images.splice(i,1)
                  }
              }
            },
            handlePictureCardPreview(file) {
              this.dialogImageUrl = file.url;
              this.dialogVisible = true;
            },
            handleSuccess(res,file){
                var self = this; 
                // console.log('http://pb1ftb8nx.bkt.clouddn.com/'+ res.key)
                //add new image url to data.image,then send to bacak end
                this.added_images.push({url: 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key})
                // axios.post('/api/restaurants/addpics',)
                // .then(response=>{
                //     // alert("already upload the pic to server")
                // }
                // ).catch(
                //     // alert("failed, try again")
                // )
            },
            handleError(res){
                console.log(res)
            },
            beforeUpload(){
                this.$data.postData.token = window.localStorage.getItem('imageToken')
            },
            removeImage(item,index){
                this.images.splice(index,1)
            }
        },
        created: function(){
            var self = this;
            axios.get('/api/restaurants/getpics')
            .then(response=>{
                // console.log(response.data)
                this.$data.images =  response.data['images']
            }).catch()            
        }
    }
</script>

<style scoped>
    .main_container{
        height: 100%;
    }
    .info-title{
        margin-top: 20px;
        text-align: center;
    }
    .info-form{
        width: 60%;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
    }
    .restaurant_imgs {
        width: 145px;
        height: 145px;
        display: block;
        float: left;
        padding-right: 5px;
        border-radius: 10px;
    }

    /* handle with remove button when editting*/
    .profile-pic {
	position: relative;
	display: inline-block;
    }
    .profile-pic:hover .edit {
    	display: block;
    }
    .edit {
    	padding-top: 7px;	
    	padding-right: 7px;
    	position: absolute;
    	right: 0;
    	top: 0;
    	display: none;
    }
    .edit a {
    	color: #000;
    }
</style>