const Mock = require('mockjs');

const restaurant_info = function () {
  return {
    name:"栗子餐厅",
    description:"一个栗子",
    address:"xxxx 路xxx号",
    phone:"13320221910",
    notification:"欢迎光临",
    opentime:"全天"
  }
}

const edit_restaurant_info = function(){
 
    return {status:200}
 
}

const upload_token = function(){
  return {
    token:'LeF0a6pcVG7oI4UWXujlr_AyAnlLgu-jSopW4pYB:dd_eSzP4T6b9oIkLr8snPf8FFnU=:eyJzY29wZSI6ImVvcmRlcmltZ3MiLCJkZWFkbGluZSI6MTUzNjEwMjkwNX0='
  }
}

const newPic = function (){
  // add the path of new pic to database 
  return {
    status: 200
  }
}

const get_restaurant_pics = function(){
  return{
    images:  [{
      url:'http://pb1ftb8nx.bkt.clouddn.com/Fgq1LF09ZUtSDNWDS4Y-gGGIJ-a5'
    },{
      url:'http://pb1ftb8nx.bkt.clouddn.com/Fh6SftkItn2oewVGVntIax3xJ0m-'
    },{
      url:'http://pb1ftb8nx.bkt.clouddn.com/FmKogWIpetlSGmP0L7FpVRxw8Rjz'
    },{
      url:'http://pb1ftb8nx.bkt.clouddn.com/Fq_XLiLQ3UrO6tMdAEnNm56bHUTe'
    }]
  }
}

const get_orders = function(){
  return[{
    id:'1',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'2',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'3',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'4',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  },{
    id:'5',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'6',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'7',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'8',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  },{
    id:'9',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'10',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'11',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'12',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  },{
    id:'13',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'14',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'15',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'16',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  },{
    id:'17',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'18',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'19',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'20',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  },{
    id:'21',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'22',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'23',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'24',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  },{
    id:'25',
    status:'new',
    total_amount: 1,
    user_name:'aa'	,
    tableID:1,
    time:'2018-06-01',
    content:[{
      meal:'meal1 X 1'
    },{
      meal:'meal2 X 2'
    }]
  },{
    id:'26',
    status:'processing',
    total_amount: 2,
    user_name:'bb'	,
    tableID:2,
    time:'2018-06-02',
    content:[{
      meal:'meal1 X 3'
    },{
      meal:'meal2 X 4'
    }]
  },{
    id:'27',
    status:'finished',
    total_amount: 3,
    user_name:'cc'	,
    tableID:3,
    time:'2018-06-03',
    content:[{
      meal:'meal1 X 5'
    },{
      meal:'meal2 X 6'
    }]
  },{
    id:'28',
    status:'rejected',
    total_amount: 4,
    user_name:'dd'	,
    tableID:4,
    time:'2018-06-04',
    content:[{
      meal:'meal1 X 7'
    },{
      meal:'meal2 X 8'
    }]
  }]
}



Mock.mock('/api/restaurants/info', 'get',  restaurant_info);
Mock.mock('/api/restaurants/editinfo', 'post',  edit_restaurant_info );
Mock.mock('/api/qiniutoken', 'get',  upload_token );
Mock.mock('/api/restaurants/addpics', 'post',  newPic);
Mock.mock('/api/restaurants/getpics','get',get_restaurant_pics)
Mock.mock('/api/restaurants/orders','get',get_orders);