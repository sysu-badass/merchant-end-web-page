<template>
    <div>
        <topbar></topbar>
        <div class="info-main">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="菜品名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="原料">
                    <el-input type='textarea' v-model="form.notification"></el-input>
                </el-form-item>
                <el-form-item label="做法">
                    <el-input type='textarea' v-model="form.notification"></el-input>
                </el-form-item>
                <el-form-item label="注意事项">
                    <el-input type='textarea' v-model="form.notification"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="选择分类">
                    <el-select v-model="value8" filterable placeholder="食品分类">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    <el-button type="text" @click="open3">新建分类</el-button>
                </el-form-item>
                <el-form-item label="菜品图片">
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
                <el-form-item>
                    <el-button type="primary" circle @click="addFood">添加菜品</el-button>
                </el-form-item>
            </el-form>

        </div>
    </div>        
</template>

<script>
import topbar from '@/components/Topbar'
export default {
    components:{
        topbar
    },
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
      open3() {
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


</style>