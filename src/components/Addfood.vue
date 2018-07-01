<template>
    <div>
        <topbar></topbar>
        <div class="info-main">
            <el-form :model="form" :rules="rules" ref="form" label-width="80px">
                <el-form-item prop="name" label="菜品名称" required>
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item prop="stuff" label="原料">
                    <el-input type='textarea' v-model="form.stuff"></el-input>
                </el-form-item>
                <el-form-item prop="description" label="描述">
                    <el-input type='textarea' v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item prop="attention" label="注意事项">
                    <el-input type='textarea' v-model="form.attention"></el-input>
                </el-form-item>
                <el-form-item prop="price" label="价格" required>
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="选择分类">
                    <el-select v-model="form.types" filterable placeholder="食品分类">
                      <el-option
                        v-for="item in form.types"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-button type="text" @click="newCategory">新建分类</el-button>
                </el-form-item>

                <el-form-item label="参考图片">
                    <!-- <div class="profile-pic" :key="index" v-if="item.url !==''"  v-for="(item, index) in form.images">
                        <img :src="item.url"  class="image">
                        <div class="edit"><el-button @click='removeImage(item,index)'>删除</el-button></div>
                    </div> -->
                    <el-upload
                        class="uploadimage"
                        list-type="picture-card"            
                        action="https://upload-z2.qiniup.com"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :on-success="handleSuccess"
                       :before-upload="beforeUpload"
                       :data="postData">
                       <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" circle @click="addFood">添加菜品</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>        
</template>

<script>
import topbar from '@/components/Topbar'
import axios from '../router/http'

export default {
    components:{
        topbar
    },
    data() {
        return {
            form: {
                notEditing:true,
                name: '',
                stuff: '',
                description: '',
                attention: '',
                price:'',
                types:[],
                images:[]
            },
            // added_images:[],
            rules: {
                name: [
                    { required: true, message: '请输入菜品名称', trigger: 'blur' }
                ],
                price: [
                    { required: true, message: '请输入价格', trigger: 'blur' }
                ],
                description:[
                    {required:true, message:'请描述该菜品',trigger:'blur'}
                ]
            },
            postData:{
                token: window.localStorage.getItem('imageToken')
            },
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    methods: {
        handlePictureCardPreview(){

        },
        handleRemove(file, fileList){
              for(var i =0;i<this.form.images.length;i++){
                  if(this.form.images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
                      this.form.images.splice(i,1)
                      break;
                  }
              }
        },
        handleExceed(files, fileList){
            this.$message.warning('当前限制选择 1 个文件');
        },
        handleSuccess(res,file){
            console.log( 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key)
            this.form.images.push({url: 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key})
        },
        beforeUpload(){

        },
      newCategory() {
        this.$prompt('请输入分类名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '新建分类: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      addFood(){
        var self = this;    
        var bodyFormData = new FormData();
        bodyFormData.set('name',this.$data.form['name']);
        bodyFormData.set('stuff', this.$data.form['stuff']); 
        bodyFormData.set('description',this.$data.form['description']);
        bodyFormData.set('attention', this.$data.form['attention']);   
        bodyFormData.set('price',this.$data.form['price']);
        bodyFormData.set('type', this.$data.form['type']);
        bodyFormData.set('images', this.$data.form['images']);  
        axios({
            method: 'post',
            url: '/api/restaurants/addfood',
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}                   
        }).then(response=>{
            console.log(response)
            this.$store.state.foods.push({  dishName:self.$data.form['name'],
                                            price:self.$data.form['price'],
                                            monthlySales: 0 ,
                                            dishImage: self.form.images[0].url  })
                                            console.log(self.form.images[0].url)
            self.$router.push('/dishes')
        }).catch()       
      }
    }
}
</script>
<style scoped>
    .container{
    height: 100%;
    }
    .info-title{
        margin-top: 20px;
        text-align: center;
    }
    .info-main{
        width: 60%;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
    }

    /*about pics*/
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