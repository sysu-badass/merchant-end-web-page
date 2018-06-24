<template>
    <div>
        <topbar></topbar>
        <div class="e_content">
            易点单(Eorder)餐饮管理系统-商家端
        </div>
    </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    export default{
        components:{
            topbar
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