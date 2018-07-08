<template>
  <div>
    <div class="info-main">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item prop="name" label="菜品名称" required>
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item prop="description" label="描述">
          <el-input type='textarea' v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item prop="price" label="价格" required>
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item prop='type' label="选择分类">
          <el-select v-model="form.food_type" filterable placeholder="食品分类">
            <el-option
            v-for="item in this.$store.state.types.filter(type=>type!='全部')"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
          </el-select>
          <el-button type="text" @click="newCategory">新建分类</el-button>
        </el-form-item>
        <el-form-item label="参考图片">
          <el-upload
          class="uploadimage"
          list-type="picture-card"            
          action="https://upload-z2.qiniup.com"
          multiple
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
          <el-button type="primary" circle @click="submitForm('form')">添加菜品</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>        
</template>

<script>
import {getQiniuToken} from '../../api/info'
import {addFood} from '../../api/menu'

export default {
  created: function(){
    getQiniuToken().then(response=>{
      this.$data.postData = response.data;
    })      
  },
  data() {
    return {
      form: {
        food_id:'',
        name: '',
        stuff: '',
        description: '',
        monthlySales:0,
        attention: '',
        price:"",
        images:[],
        image:'',
        food_type:'',
        available:"True",
        restaurant_id: window.localStorage.getItem('restaurant_id')
      },
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
      postData:{ },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handlePictureCardPreview(){
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList){
      for(var i =0;i<this.form.images.length;i++){
        if(this.form.images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
          this.form.images.splice(i,1)
          break;
        }
      }
      this.form.image=""
    },
    handleSuccess(res,file){
      if(this.$data.form.image!= ""){
        this.$message({
	        type: 'error',
	        message: '目前只允许上传一张图片，将保留最后一张上传的图片'
        });
      }
      this.form.image = 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key;
    },
    newCategory() {
      var self = this;
      this.$prompt('请输入分类名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).
      then(({ value }) => {
        if(this.$store.state.types.indexOf(value) == -1){
          self.form.food_type = value;
          this.$message({
            type: 'success',
            message: '新建分类: ' + value
          });
        }else{
          this.$message({
            type: 'info',
            message: '重复的分类！: ' + value
          });
        }
      }).
      catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    submitForm(form){
      var self = this;
      this.$refs[form].validate((valid) => {
        if (valid) {
          addFood(window.localStorage.getItem('restaurant_id'),this.$data.form)
          .then(response=>{
            var a = response.data.URL.split('/')
            this.$data.form['food_id'] = a[a.length-1]
            self.$store.dispatch("addFood",  this.$data.form);
            self.$destroy();
            self.$router.push('/menu')
          }).catch(error=>{
            console.log(error)
          })  
        } 
      });     
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