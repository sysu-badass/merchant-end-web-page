<template>
	<div class="fullpage">
		<el-row style="height: 100%;">
	  		<el-col :span="4" class="leftside" style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="/dashboard">
						<i class="el-icon-menu"></i>
					    <span slot="title">商家中心</span>
						</el-menu-item>
                    <el-menu-item index="/orderlist">
                        <i class="el-icon-menu"></i>
                        <span slot="title">订单管理</span>
					</el-menu-item>
                    <el-menu-item index="/dishes">
                        <i class="el-icon-menu"></i>
                        <span slot="title">菜品管理</span>
					</el-menu-item>
					<el-menu-item index="/qrcode">
                        <i class="el-icon-menu"></i>
                        <span slot="title">生成桌码</span>
					</el-menu-item>
					<el-menu-item index="/explain">
                        <i class="el-icon-warning"></i>
                        <span slot="title">说明</span>
					</el-menu-item>
					<el-menu-item index="" @click="logout">
                        <i class="el-icon-setting"></i>
                        <span slot="title">退出</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;" class="rightside" >
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>					
			</el-col>
		</el-row>
  	</div>
</template>

<script>
	// import topbar from '@/components/Topbar'
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
        },
        methods:{
            logout(){
				window.localStorage.removeItem("access_token")
				window.localStorage.removeItem("imageToken")
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
.fullpage{
    height: 100%;
    width:100%;
}
.topbar{
	width: 100%;
	height: 8%;
	background-color: gray;
}
.content{
	width:100%;
	background-color: yellow;
}
.leftside{
	visibility: visible;
}
.rightside{
	 /* background-color: green;
	border:solid red 10px; */
}
</style>

