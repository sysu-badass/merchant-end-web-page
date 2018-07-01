<template>
    <div>
        <topbar></topbar>
        <div class="e_content">
            易点单(Eorder)餐饮管理系统-商家端
            <el-button @click="test" >test</el-button>
        </div>
    </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    import axios from 'axios'
    export default{
        components:{
            topbar
        },
        data(){
            return {
                userInfo:{}
            }
        },
        methods:{
            test(){
                alert(this.$store.state.count)
                axios.get('/api/news').then(({data})=>{
                    console.log(data);
                    alert(data["userid"]);
                    if(data.error === 0){
                      this.userInfo = data.data;
                    }else{
                      this.userInfo = {};
                    }
                })
            }
        }
    }
</script>

<style scoped>
.e_content{
    text-align: center;
    position: relative;
    width: 400px;
    height: 400px;
    margin: 0 auto;
    /* background-color: aqua; */
}
</style>