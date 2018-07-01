<template>
    <div class="container">
        <topbar></topbar>
        <!-- <el-select  style="padding:10px"  filterable placeholder="选择食品种类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select> -->
        <div :key="index" v-for="(item, index) in this.$store.state.foods">
            <foodcard :info="item"></foodcard>
        </div>
        <div class="buttonholder">
            <el-button class="addfood" type="primary" circle @click="goAddFood">添加菜品</el-button>
        </div>
    </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    import foodcard from '@/components/FoodCard'
    import axios from '../router/http'

    export default{
        components:{
            topbar,foodcard
        },
        created: function(){
            var self = this;
            axios.get('/api/restaurants/menu')
            .then(response=>{
                console.log(response.data);
                // self.foods = response.data
                this.$store.state.foods =response.data
                console.log(this.foods.length)
            })
            .catch()
        },
        data(){
            return {
               myinfo:{
                   monthlySales:1,
                   dishName:"炸鸡",
                   dishImage:'../../static/img/chicken.jpg',
                   price:25
               },
                foods:[],
                options: [{
                  value: '选项1',
                  label: '选项1'
                }, {
                  value: '选项2',
                  label: '选项2'
                }, {
                  value: '选项3',
                  label: '选项3'
                }, {
                  value: '选项4',
                  label: '选项4'
                }, {
                  value: '选项5',
                  label: '选项5'
                }],
            }
        },
        methods: {
            goAddFood(){
                this.$router.push('/addfood')
            }
        }
    }
</script>

<style>
.container{
    /* background-color:yellow; */
    height: 100%;
    overflow-y: scroll;
}
.dishes{
    /* background-color:violet; */
    height: 100%;
    width:100%;
    height: 100%;
}
.buttonholder{
    position: relative;
    height: 220px;
    width:200px;
    /* border: 5px solid gray; */
    float: left;
    margin: 20px;
}
.addfood{
    float: left;
    align-self: center;
    border-radius: 250px;
    margin-top:100px;
    width:80px;
    height: 80px;
}
</style>