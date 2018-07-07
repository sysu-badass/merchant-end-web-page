<template>
    <div>
		<el-menu style="min-height: 100%;" theme="dark" router>
			<el-menu-item index="/dashboard">
				<i class="el-icon-menu"></i>
			    <span slot="title">商家中心</span>
				</el-menu-item>
            <el-menu-item index="/orderlist">
                <i class="el-icon-menu"></i>
                <span slot="title">订单管理</span>
			</el-menu-item>
            <el-menu-item index="/menu">
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
    </div>
</template>

<script>
export default{
  methods:{
    logout(){
		  // window.localStorage.removeItem("access_token")
      // window.localStorage.removeItem("imageToken")
      this.$store.dispatch("clearWhenExit")
      window.localStorage.removeItem('restaurant_id')
      this.$router.push('/login')
    }
  }
}
</script>