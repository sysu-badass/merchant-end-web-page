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
import {getInfo, updateInfo, getQiniuToken } from '../../api/info'

export default {
  created: function(){
    var self = this;
    getInfo().then(res=>{
      this.$store.state.RestaurantInfo = res.data;
    });
    getQiniuToken().then(response=>{
      console.log(response.data)
      this.$data.postData = response.data;
    })      
  },     
  data() {
    return {
      form: {
        name: this.$store.state.RestaurantInfo.name,
        description: this.$store.state.RestaurantInfo.description,
        address: this.$store.state.RestaurantInfo.address,
        phone: this.$store.state.RestaurantInfo.phone,
        notification: this.$store.state.RestaurantInfo.notification,
        opentime:this.$store.state.RestaurantInfo.opentime,
      },
      notEditing:true,
      buttonmsg:'修改',
      postData:{
          // token: "LeF0a6pcVG7oI4UWXujlr_AyAnlLgu-jSopW4pYB:dd_eSzP4T6b9oIkLr8snPf8FFnU=:eyJzY29wZSI6ImVvcmRlcmltZ3MiLCJkZWFkbGluZSI6MTUzNjEwMjkwNX0="
      },
      imageUrl:'',
      dialogImageUrl: '',
      dialogVisible: false,
      images:this.$store.state.RestaurantInfo.images,
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
        for( var i =0;i< this.added_images.length ; i++){
          self.images.push(this.added_images.pop())
        }  
      updateInfo(this.$data.form)
      .then(response=>{
        if(response.data['status']=='200'){
          this.$message({
	          type: 'success',
	          message: '修改成功'
          });
        }else{
          this.$message({
	          type: 'error',
	          message: '修改失败，请稍后再试'
          });
        } 
        self.$data.buttonmsg="修改";
      })
      .catch()
      }
    },
    handleRemove(file, fileList) {
      for(var i =0;i<this.added_images.length;i++){
        if(this.added_images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
          this.added_images.splice(i,1)
          break;
        }
      }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(res,file){
      var self = this; 
      this.added_images.push({url: 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key})
    },
    handleError(res){
      console.log(res)
    },
    removeImage(item,index){
      this.images.splice(index,1)
    }
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