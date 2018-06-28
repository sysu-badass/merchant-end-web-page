<template>
    <div class="container">
        <topbar></topbar>
        <el-select  style="padding:10px" :value="myinfo" filterable placeholder="选择食品种类">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="dishes">
            <!-- <el-scrollbar> -->
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo"></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo"></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo"></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <foodcard :info="myinfo" ></foodcard>
            <!-- </el-scrollbar> -->
        </div>
          <el-button type="primary" circle @click="goAddFood">添加菜品</el-button>
    </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    import foodcard from '@/components/FoodCard'
    export default{
        components:{
            topbar,foodcard
        },
        data(){
            return {
                myinfo:{
                    monthlySales:1,
                    dishName:"炸鸡",
                    dishImage:'../../static/img/chicken.jpg',
                    price:25
                },
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
</style>