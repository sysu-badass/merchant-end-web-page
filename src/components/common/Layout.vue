<template>
	<div class="container">
		<el-row  style="height: 100%;">
	  		<el-col :span="4" class="siderbar">
				<siderbar></siderbar>
			</el-col>
			<el-col :span="20"  class="main-container" >
                <topbar></topbar>
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>					
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    import siderbar from '@/components/common/Siderbar'
    import topbar from '@/components/common/Topbar'
    export default {
        components:{
            siderbar,topbar
        }
    }
</script>

<style scoped>
.container{
    height: 100%;
    width:100%;
}
.siderbar{
	min-height: 100%; 
  background-color: #324057;
}
.main-container{
    height: 100%;
    overflow-y: scroll;
}
</style>

