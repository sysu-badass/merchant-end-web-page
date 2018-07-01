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
        created:function(){

        },
        data(){
            return {
                userInfo:{}
            }
        },
        methods:{
            test(){
                alert(this.$store.state.count)
                axios.get('http://127.0.0.1:5000').then(response=>{
                    console.log(response)
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