<template>
    <div>
        <el-container class="el-container">
          <el-aside width="200px" class="el-aside">
              <dashboard></dashboard>
          </el-aside>

          <el-container>
            <el-header>
                <topbar></topbar>
            </el-header>

            <el-main class=".el-main">
                <info></info>
            </el-main>
          </el-container>
        </el-container>
    </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    import dashboard from '@/components/Dashboard'
    import info from '@/components/Info'

    export default {
        components:{
            topbar,dashboard,info
        }
    }
</script>

<style>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>