<template>
  <div class="fillcontain">
    <div class="table_container">
			<el-tabs v-model="activeName" @tab-click="switchTab">
    		<el-tab-pane label="新订单" name="new">新的订单</el-tab-pane>
    		<el-tab-pane label="准备中" name="processing">准备中订单</el-tab-pane>
    		<el-tab-pane label="已完成" name="finished">已完成订单</el-tab-pane>
    		<el-tab-pane label="已拒绝" name="rejected">已拒绝订单</el-tab-pane>
  	  </el-tabs>
 
      <el-table @row-dblclick="clickOrder" :data="current_page_data" :row-key="row => row.index" style="width: 100%">
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
			    prop="order_id">
			  </el-table-column>

			  <el-table-column
			    label="总价格"
			    prop="total_price">
			  </el-table-column>

			  <el-table-column
			    label="桌号"
			    prop="desk_number">
			  </el-table-column>

			  <el-table-column
			    label="操作"
			    prop="status">
      		<template slot-scope="scope">
      			<el-button  v-if="activeName=='new'"
      			  size="mini"
      			  @click="handleAccept(scope.$index, scope.row)">接受</el-button>
      			<el-button v-if="activeName=='new'"
      			  size="mini"
      			  type="danger"
      			  @click="handleReject(scope.$index, scope.row)">拒绝</el-button>

						<el-button  v-if="activeName=='processing'"
      		    size="mini"
      		    @click="handleFinish(scope.$index, scope.row)">完成</el-button>
      		  <!-- <el-button v-if="activeName=='processing'"
      		    size="mini"
      		    type="danger"
      		    @click="handleCancel(scope.$index, scope.row)">取消</el-button> -->
      		  <el-button v-if="activeName=='finished'"
      		    size="mini"
      		    type="danger"
      		    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      		  <el-button v-if="activeName=='rejected'"
      		    size="mini"
      		    type="danger"
      		    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      		</template>
			  </el-table-column>
			</el-table>

        <div class="Pagination" style="text-align: left;margin-top: 10px;">
    			<el-pagination 
						@current-change="handleCurrentChange"
    			  :page-size="page_size"
    			  layout="total, prev, pager, next"
    			  :total="count">
    		  </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {getOrders, handleOrder, getOrderDetail} from "../../api/orders"

export default{
  created: function(){
    var self = this;
    getOrders(window.localStorage.getItem('restaurant_id'))
      .then(response =>{
        if(response.status == 200){
          self.$store.dispatch("getOrders",response.data.orders);
			    this.tableData = response.data.orders
			    for(var i = 0;i < this.tableData.length;i++){
			    	if(this.tableData[i].status == 'new'){
			    		this.showData.push(this.tableData[i])
			    	}
			    }
		  	  for(var i =0; i<this.showData.length && i<this.page_size; i++){
		  	  	this.current_page_data.push(this.showData[i])
          }
		  	  this.count = this.showData.length
        }
      })
      .catch()
	},
	methods:{
    clickOrder(row, event, column){
      // console.log(row,event,column)
      this.$router.push('/orderlist/'+ row.order_id);
    },
		showWhenAccept(a,b){
			// console.log(a,b)
			for(var i = 0;i<this.tableData.length;i++){
				if(this.tableData[i].id==b.id){
					this.tableData[i].status = 'processing'
					break;
				}
			}
			for(var i = 0; i< this.showData.length;i++){
				if(this.showData[i].id == b.id){
					this.showData.splice(i,1)
					break;
				}
			}
			this.current_page_data =[];
			for(var i =(this.current_page-1)*this.page_size;i<this.page_size && i<this.showData.length ;i++){
				this.current_page_data.push(this.showData[i])
			}
			this.count = this.showData.length
		},
		showWhenReject(a,b){
			for(var i = 0;i<this.tableData.length;i++){
				if(this.tableData[i].id==b.id){
					this.tableData[i].status = 'rejected'
					break;
				}
			}
			for(var i = 0; i< this.showData.length;i++){
				if(this.showData[i].id == b.id){
					this.showData.splice(i,1)
					break;
				}
			}
			this.current_page_data =[];
			for(var i =0;i<this.page_size && i<this.showData.length ;i++){
				this.current_page_data.push(this.showData[i])
			}
			this.count = this.showData.length
		},
	  shwoWhenFinish(a,b){
			for(var i = 0;i<this.tableData.length;i++){
				if(this.tableData[i].id==b.id){
					this.tableData[i].status = 'finished';
					break;
				}
			}
			for(var i = 0; i< this.showData.length;i++){
				if(this.showData[i].id == b.id){
					this.showData.splice(i,1);
					break;
				}
			}
			this.current_page_data =[];
			for(var i =0;i<this.page_size && i<this.showData.length ;i++){
				this.current_page_data.push(this.showData[i])
			}
			this.count = this.showData.length
		},
		showWhenCancel(a,b){
			for(var i = 0;i<this.tableData.length;i++){
				if(this.tableData[i].id==b.id){
					this.tableData[i].status = 'rejected'
					break;
				}
			}
			for(var i = 0; i< this.showData.length;i++){
				if(this.showData[i].id == b.id){
					this.showData.splice(i,1)
					break;
				}
			}
			this.current_page_data =[];
			for(var i =0;i<this.page_size && i<this.showData.length ;i++){
				this.current_page_data.push(this.showData[i])
			}
			this.count = this.showData.length
		},
		shwoWhenDelete(a,b){
			for(var i = 0;i<this.tableData.length;i++){
				if(this.tableData[i].id==b.id){
					this.tableData.splice(i,1)
				}
			}
			for(var i = 0; i< this.showData.length;i++){
				if(this.showData[i].id == b.id){
					this.showData.splice(i,1)
				}
			}
			this.current_page_data =[];
			for(var i =0;i<this.page_size && i<this.showData.length ;i++){
				this.current_page_data.push(this.showData[i])
			}
			this.count = this.showData.length
    },

    handleAccept(a,b){
      var self = this;
      var payload = {
        order_id: b.order_id,
        status: 'processing'
      }
      handleOrder(window.localStorage.getItem('restaurant_id'), payload)
      .then(response => {
        if(response.status == 200){
          self.$store.dispatch('handleOrder', payload)
          this.showWhenAccept(a,b);
        }
      })
      .catch(error => {
        self.$message({
          type:'error',
          message:'出现异常'
        })
      })
    },

    handleReject(a,b){
      var self = this;
      var payload = {
        order_id: b.order_id,
        status: 'rejected'
      }
      handleOrder(window.localStorage.getItem('restaurant_id'),payload )
      .then(response => {
        if(response.status == 200){
          self.$store.dispatch('handleOrder', payload)
          this.showWhenReject(a,b);
        }
      })
      .catch(error => {
        self.$message({
          type:'error',
          message:'出现异常'
        })
      })
    },

    handleFinish(a,b){
      var self = this;
      var payload = {
        order_id: b.order_id,
        status: 'finished'
      }
      handleOrder(window.localStorage.getItem('restaurant_id'),payload )
      .then(response => {
        if(response.status == 200){
          self.$store.dispatch('handleOrder', payload)
          this.showWhenAccept(a,b);
        }
      })
      .catch(error => {
        self.$message({
          type:'error',
          message:'出现异常'
        })
      })
    },
		switchTab(a,b){
			// console.log(this.activeName)
			this.current_page =1;
			while(this.showData.length != 0 ){
				this.showData.pop()
			}
			while(this.current_page_data.length != 0 ){
				this.current_page_data.pop()
			}
			for(var i =0; i < this.tableData.length ;i++){
				if(this.tableData[i].status == this.activeName){
					this.showData.push(this.tableData[i])
				}
			}
			for(var i = 0;i<this.showData.length && i<this.page_size;i++){
				this.current_page_data.push(this.showData[i])
			}
			this.count = this.showData.length
		},
		handleCurrentChange(val){
			this.current_page=val;
			console.log(this.current_page)
			this.current_page_data =[];
			for(var i =(this.current_page-1)*this.page_size;i<this.current_page*this.page_size && i<this.showData.length ;i++){
				this.current_page_data.push(this.showData[i])
			}
    }
	},
	data(){
		return{
			page_size:15,
			current_page:1,
			activeName:'new',
			count:0,
			current_page_data:[],
			showData:[]	,
			tableData:[]
		}
	}
}
</script>


<style>
.fillcontain{
	height: 100%;
}
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
