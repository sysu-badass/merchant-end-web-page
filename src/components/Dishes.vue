<template>
    <div>
        <topbar></topbar>
        <foodcard :info="myinfo" ></foodcard>
        <foodcard :info="myinfo" ></foodcard>
        <foodcard :info="myinfo" ></foodcard>
        <foodcard :info="myinfo" ></foodcard>
        <foodcard :info="myinfo" ></foodcard>
        <foodcard :info="myinfo" ></foodcard>
        <foodcard :info="myinfo" ></foodcard>
    </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    import foodcard from '@/components/FoodCard'
    export default{
        components:{
            topbar,foodcard
        },
        data:{
            info:{
                monthlySales:1,
                dishName:"宫保鸡丁",
                dishImage:'../../static/img/default_photo.svg'
            }
        }
    }
</script>