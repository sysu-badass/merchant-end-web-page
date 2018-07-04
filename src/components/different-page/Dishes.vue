<template>
    <div class="container">
        <el-select v-model="chosentype" style="padding:10px"  filterable placeholder="选择食品种类">
            <el-option
            v-for="item in this.$store.state.types"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
        <div :key="index" v-for="(item, index) in this.$store.state.foods">
            <foodcard :info="item" v-if="chosentype=='全部'||item.type==chosentype"></foodcard>
        </div>
        <div class="buttonholder">
            <el-button class="addfood" type="primary" circle @click="goAddFood">添加菜品</el-button>
        </div>
    </div>
</template>

<script>
    import foodcard from '@/components/common/FoodCard'
    import axios from '../../router/http'

    export default{
        components:{
            foodcard
        },
        created: function(){
            var self = this;
            this.chosentype = '全部'
            this.$store.state.types.push('全部')
            axios.get('/api/restaurants/menu')
            .then(response=>{
                this.$store.state.foods =response.data
                for(var i =0 ; i < response.data.length ; i++){
                    var current_type = response.data[i].type
                    var alreadyexist = false
                    for(var j = 0; j<this.$store.state.types.length ; j++){
                        if(current_type == this.$store.state.types[j]){
                            alreadyexist = true;
                            break;
                        }
                    }
                    if(!alreadyexist) this.$store.state.types.push(response.data[i].type)
                }
                console.log(this.$store.state.types)
            })
            .catch()
        },
        data(){
            return {
                chosentype:''
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