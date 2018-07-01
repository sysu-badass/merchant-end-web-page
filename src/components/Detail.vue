<template>
    <div class="container">
        <topbar></topbar>
        <!-- <div>{{ $route.params.dishname }}</div> -->
        <div class="info-main">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="菜品名称">
                    <el-input :disabled="notEditing" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="原料">
                    <el-input :disabled="notEditing" type='textarea' v-model="form.stuff"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input :disabled="notEditing" type='textarea' v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="注意事项">
                    <el-input :disabled="notEditing" type='textarea' v-model="form.attention"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input :disabled="notEditing" v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="选择分类">
                    <el-select :disabled="notEditing" v-model="form.types" filterable placeholder="食品分类">
                      <el-option
                        v-for="item in form.types"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-button type="text" @click="newCategory">新建分类</el-button>
                </el-form-item>

                <el-form-item label="菜品图片">
                    <div class="profile-pic" :key="index" v-if="item.url !==''"  v-for="(item, index) in form.images">
                        <img :src="item.url"  class="image">
                        <div v-if="!notEditing" class="edit"><el-button @click='removeImage(item,index)'>删除</el-button></div>
                    </div>
                    <el-upload
                      v-if="!notEditing"
                      action="https://upload-z2.qiniup.com"
                      list-type="picture-card"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-success="handleSuccess"
                      :data="postData">
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" circle @click="edit">{{buttonmsg}}</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>

</template>

<script>
    import topbar from '@/components/Topbar'
    import axios from '../router/http'
    
    export default{
        components:{
            topbar
        },
        created: function(){
            var self =this 
            axios.get("/api/restaurants/fooddetail")
            .then(response=>{
                self.form = response.data
            }).catch()
        },
        data() {
            return {
                form: {
                    name: '',
                    stuff: '',
                    description: '',
                    attention: '',
                    price:'',
                    type:'',
                    images:[]
                },
                added_images:[],
                dialogImageUrl: '',
                dialogVisible: false,
                notEditing:true,
                buttonmsg:"编辑",
                postData:{
                    token: window.localStorage.getItem('imageToken')
                }
            }
        },
        methods:{
            newCategory(){

            },
            edit(){
                var self = this;
                this.$data.notEditing = !this.$data.notEditing;
                if(this.$data.buttonmsg=="编辑"){
                    this.$data.buttonmsg='保存';
                }else if(this.$data.buttonmsg=="保存") {
                    var bodyFormData = new FormData();
                    bodyFormData.set('name',self.$data.form['name']);
                    bodyFormData.set('stuff', this.$data.form['stuff']);
                    bodyFormData.set('description',this.$data.form['description']);
                    bodyFormData.set('attention', this.$data.form['attention']);    
                    bodyFormData.set('price',this.$data.form['price']);
                    bodyFormData.set('type', this.$data.form['type']);   
                    while( this.added_images.length!=0){
                        // console.log(this.added_images.pop())
                        self.form.images.push(this.added_images.pop())
                    }   
                    axios({
                        method: 'post',
                        url: '/api/restaurants/editfood',
                        data: bodyFormData,
                        config: { headers: {'Content-Type': 'multipart/form-data' }}                   
                    })
                    .then(response=>{
                        if(response.data['status']=='200'){
                            alert("修改成功")
                        }else{
                            alert("修改失败，请稍后再试！")
                        } 
                         self.$data.buttonmsg="编辑";
                    })
                    .catch()
                }           
            },
            handleSuccess(res,file){
                this.added_images.push({url:'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key})
            },
            handleRemove(file, fileList) {
              for(var i =0;i<this.added_images.length;i++){
                  if(this.added_images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
                      this.added_images.splice(i,1)
                      break;
                  }
              }
            },
            handlePictureCardPreview(){

            },
            removeImage(item,index){
                this.form.images.splice(index,1)
            }
        }
    }
</script>

<style scoped>
.container{
    /* background-color:yellow; */
    height: 100%;
    overflow-y: scroll;
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

    .image {
        width: 145px;
        height: 145px;
        display: block;
        float: left;
        padding-right: 5px;
        border-radius: 10px;
    }
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