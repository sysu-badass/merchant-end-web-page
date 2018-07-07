<template>
    <div class="container">
        <div class="info-main">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="菜品名称">
                    <el-input :disabled="notEditing" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input :disabled="notEditing" type='textarea' v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input :disabled="notEditing" v-model="form.price"></el-input>
                </el-form-item>
                <el-form-item label="选择分类">
                    <el-select :disabled="notEditing" v-model="form.food_type" filterable placeholder="食品分类">
                      <el-option
                        v-for="item in this.$store.state.types.filter(type=>type!='全部')"
                        :key="item"
                        :label="item"
                        :value="item">
                      </el-option>
                    </el-select>
                    <el-button :disabled="notEditing" type="text" @click="newCategory">新建分类</el-button>
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
                    <el-button type="primary" circle @click="edit('form')">{{buttonmsg}}</el-button>
                    <el-button v-if="!notEditing" type="primary" circle @click="removeFood(form)">删除菜品</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>

</template>

<script>
import axios from '../../router/http'
import { getFoodDetail, editFood, deleteFood, getMenu} from '../../api/menu'
import { getQiniuToken} from '../../api/info'
import router from '../../router';

export default{
  created: function(){
      var self =this;
      this.fetchData();
  },
  watch: {
    '$route': function(to, from) {
      if(/^\/menu\/[0-9]*$/.test(to.path)){
        this.form.images=[];
        this.$data.notEditing = true;
        this.$data.buttonmsg = "编辑";
        this.fetchData()
      }
    }
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        price:'',
        food_type:'',
        images:[],
        image:"",
        monthlySales:0,
        available: "True"
      },
      rules: {
        name: [
          { required: true, message: '请输入菜品名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        description:[
          {required:true, message:'请描述该菜品', trigger:'blur'}
        ]
      },
      added_images:[],
      dialogImageUrl: '',
      dialogVisible: false,
      notEditing: true,
      buttonmsg:"编辑",

      postData:{
        token: "LeF0a6pcVG7oI4UWXujlr_AyAnlLgu-jSopW4pYB:dd_eSzP4T6b9oIkLr8snPf8FFnU=:eyJzY29wZSI6ImVvcmRlcmltZ3MiLCJkZWFkbGluZSI6MTUzNjEwMjkwNX0="
      }
    }
  },
  methods:{
    fetchData(){
      var self = this;
      getFoodDetail(window.localStorage.getItem('restaurant_id'), this.$route.params.food_id)
      .then(response=>{
        console.log(response.data.foods[0]);
        this.form.name = response.data.foods[0].name;
        this.form.description = response.data.foods[0].description;
        this.form.price = response.data.foods[0].price;
        this.form.food_type = response.data.foods[0].food_type;
        this.form.images.push({url:response.data.foods[0].image});
      }).catch(error=>{
        self.$message({
	        type: 'error',
	        message: '获取数据失败'
        });
      })
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
    edit(formName){
      this.$data.notEditing = !this.$data.notEditing;
      var current_food_id = this.$route.params.food_id
      if(this.$data.buttonmsg=="编辑"){
        this.$data.buttonmsg='保存';
      }else if(this.$data.buttonmsg=="保存") {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var self = this;
            editFood(window.localStorage.getItem('restaurant_id'), this.$route.params.food_id,  this.$data.form)
            .then(response=>{
              if(response.status==200)
                self.$message({
	                type: 'success',
	                message: '修改成功'
                });
                var payload = {restaurant_id: window.localStorage.getItem('restaurant_id'),
                                                    food_id: current_food_id ,
                                                    data:  self.$data.form}

                self.$store.dispatch("editFood",payload  );
            })
            .catch(err=>{
              self.$message({
	              type: 'error',
	              message: '修改失败，请过后再尝试'
              });            
            })  
          }
          this.$data.buttonmsg="编辑";   
        })
        this.$router.push('/menu');
      }
    },
    removeFood(){
      var self = this;
      deleteFood(window.localStorage.getItem('restaurant_id'), this.$route.params.food_id)
      .then(response=>{
        if(response.status == 200)
          self.$message({
	          type: 'success',
	          message: '删除成功'
          });
          self.$store.dispatch("removeFood", {restaurant_id:window.localStorage.getItem('restaurant_id'), 
                                              food_id: self.$route.params.food_id} )
          self.$router.push('/menu');
      })
      .catch(error=>{
        self.$message({
	        type: 'error',
	        message: '删除失败，请过后再尝试'
        });            
      })
    },
    handlePictureCardPreview(){
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList){
      for(var i =0;i<this.form.images.length;i++){
        // console.log(this.form.images[i].url)
        if(this.form.images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
          this.form.images.splice(i,1)
          break;
        }
      }
      this.form.image=""
    },
    handleSuccess(res,file){
      // console.log( 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key)
      if(this.$data.form.images.length >= 1){
        this.$message({
	        type: 'error',
	        message: '目前只允许上传一张图片'
        });
        this.form.images=[{url: 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key}]
        this.$data.form.image = 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key;
      }else{
        this.$message({
	        type: 'success',
	        message: '图片更新成功'
        });
        this.form.images.push({url: 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key})
        this.$data.form.image = 'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key;
      }

    },
    // handleSuccess(res,file){
    //   this.added_images.push({url:'http://pb1ftb8nx.bkt.clouddn.com/'+ res.key})
    // },
    // handleRemove(file, fileList) {
    //   for(var i =0;i<this.added_images.length;i++){
    //     if(this.added_images[i].url=="http://pb1ftb8nx.bkt.clouddn.com/"+file.response.key){
    //       this.added_images.splice(i,1)
    //       break;
    //     }
    //   }
    // },
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