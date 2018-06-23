<template>
	<div class="fullpage">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="dashboard"><i class="el-icon-menu"></i>商户中心</el-menu-item>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-document"></i>订单管理</template>
						<el-menu-item index="neworder">新订单</el-menu-item>
						<el-menu-item index="preparingorder">准备中</el-menu-item>
						<el-menu-item index="finishedorder">已完成</el-menu-item>
						<el-menu-item index="rejectedorder">已拒绝</el-menu-item>
					</el-submenu>
                    <el-menu-item index="dishes">
                        <i class="el-icon-menu"></i>
                        <span slot="title">菜品管理</span>
					</el-menu-item>
					<el-menu-item index="qrcode">
                        <i class="el-icon-menu"></i>
                        <span slot="title">生成桌码</span>
					</el-menu-item>
					<el-menu-item index="exit" @click="logout">
                        <i class="el-icon-setting"></i>
                        <span slot="title">退出</span>
					</el-menu-item>
					<el-menu-item index="explain">
                        <i class="el-icon-warning"></i>
                        <span slot="title">说明</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
        },
        methods:{
            logout(){
                window.localStorage.removeItem("access_token")
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
</style>

