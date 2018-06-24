<template>
  <div class='card' @click='click'>
    <div class='dish_content'>
        <img :src='info.dishImage' width='100' height='100'>
        <div class='message'>
          <p>{{info.dishName}}</p>
          <el-rate
            disabled
            ref='el-rate'
            v-model='_level'
            show-score
            text-color='#ff9900'>
          </el-rate>
          <p>月销售量：{{info.monthlySales}}</p>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      info: {
        type: Object,
        default: {}
      }
    },
    computed: {
      _level () {
        return this.$props.info.level
      }
    },
    methods: {
      click () {
        this.$emit('click', this.info)
      }
    }
  }
</script>
<style scoped>
.card{
    float: left;
    width: 25%;
    padding-bottom: 20px;
    /* border:solid 2px black; */
}
.dish_content{
    margin-left: 25%;
}
</style>