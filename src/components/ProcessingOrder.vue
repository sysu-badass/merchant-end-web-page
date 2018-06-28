<template>
  <div class="fillcontain">
    <topbar></topbar>
    	<div class="table_container">
				<!-- <el-tabs v-model="activeName" @tab-click="handleClick">
    			<el-tab-pane label="新订单" name="new">新的订单</el-tab-pane>
    			<el-tab-pane label="准备中" name="processing">准备中订单</el-tab-pane>
    			<el-tab-pane label="已完成" name="finished">已完成订单</el-tab-pane>
    			<el-tab-pane label="已拒绝" name="rejected">已拒绝订单</el-tab-pane>
  			</el-tabs> -->
        <el-table :data="tableData"
        :row-key="row => row.index" style="width: 100%">
			    <el-table-column type="expand">
			      	<template slot-scope="props">
			        <el-form label-position="left" inline class="demo-table-expand">
			          <el-form-item label="用户名" >
			            <span>{{ props.row.user_name }}</span>
			          </el-form-item>
			          <el-form-item label="桌号">
			            <span>{{ props.row.tableID }}</span>
			          </el-form-item>
			          <el-form-item label="点餐时间">
			            <span>{{ props.row.time }}</span>
			          </el-form-item>
			          <el-form-item label="点餐内容">
			            <span>{{ props.row.content }}</span>
			          </el-form-item>
			        </el-form>
			      </template>
			  	</el-table-column>

			    <el-table-column
			      label="订单 ID"
			      prop="id">
			    </el-table-column>

			    <el-table-column
			      label="总价格"
			      prop="total_amount">
			    </el-table-column>
			    <el-table-column
			      label="操作"
			      prop="status">
      				<template slot-scope="scope">
      				  <el-button
      				    size="mini"
      				    @click="handleFinish(slot-scope.$index, slot-scope.row)">完成</el-button>
      				</template>
			    </el-table-column>
				</el-table>

        <div class="Pagination" style="text-align: left;margin-top: 10px;">
          <el-pagination
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
          </el-pagination>
        </div>
      </div>
  </div>
</template>

<script>
    import topbar from '@/components/Topbar'
    export default{
			components:{
				topbar
			},
			methods:{
				handleFinish(){
					alert("finished");
				}
			},
			data(){
				return{
					activeName:'new',
					count:1,
					tableData:[{
							id:'1',
							total_amount: 10,
							status:'processing'						
						}
					]	
				}
			}
		}
</script>


<style>
    .table_container{
        padding: 20px;
    }
    .demo-table-expand {
	    font-size: 0;
	}
	.demo-table-expand label {
	    width: 90px;
	    color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
	    margin-right: 0;
	    margin-bottom: 0;
	    width: 50%;
	}
</style>
