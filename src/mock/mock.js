const Mock = require("mockjs");

const restaurant_info = function () {
  return {
    name:"栗子餐厅",
    description:"一个栗子",
    address:"xxxx 路xxx号",
    phone:"13320221910",
    notification:"欢迎光临",
    opentime:"全天",
    images:  [{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%831.jpg"
    },{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%832.jpg"
    },{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%833.jpg"
    },{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%834.jpg"
    }]
  };
};

const edit_restaurant_info = function(){

  return {status:200};
 
};

const upload_token = function(){
  return {
    token:"LeF0a6pcVG7oI4UWXujlr_AyAnlLgu-jSopW4pYB:dd_eSzP4T6b9oIkLr8snPf8FFnU=:eyJzY29wZSI6ImVvcmRlcmltZ3MiLCJkZWFkbGluZSI6MTUzNjEwMjkwNX0="
  };
};

const newPic = function (){
  // add the path of new pic to database 
  return {
    status: 200
  };
};

// const get_restaurant_pics = function(){
//   return{
//     images:  [{
//       url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%831.jpg"
//     },{
//       url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%832.jpg"
//     },{
//       url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%833.jpg"
//     },{
//       url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%8E%AF%E5%A2%834.jpg"
//     }]
//   };
// };

const get_orders = function(){
  return { orders: [
    {
      'order_id': 1,
      'date': '2018.6.18',
      'desk_number': 2,
      'total_price': 123.4,
      'status': 'new',
      'restaurant_id': 9527
    },
    {
      'order_id': 2,
      'date': '2018.6.18',
      'desk_number': 2,
      'total_price': 123.4,
      'status': 'new',
      'restaurant_id': 9527
    },
    {
      'order_id': 3,
      'date': '2018.6.18',
      'desk_number': 2,
      'total_price': 123.4,
      'status': 'new',
      'restaurant_id': 9527
    },
    {
      'order_id': 4,
      'date': '2018.6.18',
      'desk_number': 2,
      'total_price': 123.4,
      'status': 'new',
      'restaurant_id': 9527
    },
    {
      'order_id': 5,
      'date': '2018.6.18',
      'desk_number': 2,
      'total_price': 123.4,
      'status': 'new',
      'restaurant_id': 9527
    }
  ]
}

//   return[{
//     id:"1",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"2",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"3",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"4",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   },{
//     id:"5",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"6",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"7",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"8",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   },{
//     id:"9",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"10",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"11",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"12",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   },{
//     id:"13",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"14",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"15",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"16",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   },{
//     id:"17",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"18",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"19",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"20",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   },{
//     id:"21",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"22",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"23",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"24",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   },{
//     id:"25",
//     status:"new",
//     total_amount: 1,
//     user_name:"aa"	,
//     tableID:1,
//     time:"2018-06-01",
//     content:[{
//       meal:"meal1 X 1"
//     },{
//       meal:"meal2 X 2"
//     }]
//   },{
//     id:"26",
//     status:"processing",
//     total_amount: 2,
//     user_name:"bb"	,
//     tableID:2,
//     time:"2018-06-02",
//     content:[{
//       meal:"meal1 X 3"
//     },{
//       meal:"meal2 X 4"
//     }]
//   },{
//     id:"27",
//     status:"finished",
//     total_amount: 3,
//     user_name:"cc"	,
//     tableID:3,
//     time:"2018-06-03",
//     content:[{
//       meal:"meal1 X 5"
//     },{
//       meal:"meal2 X 6"
//     }]
//   },{
//     id:"28",
//     status:"rejected",
//     total_amount: 4,
//     user_name:"dd"	,
//     tableID:4,
//     time:"2018-06-04",
//     content:[{
//       meal:"meal1 X 7"
//     },{
//       meal:"meal2 X 8"
//     }]
//   }];
};

const menu = function(){
  return [{
    name:"凉拌尖椒皮蛋",
    price:25,
    monthlySales:10,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E5%87%89%E6%8B%8C%E5%B0%96%E6%A4%92%E7%9A%AE%E8%9B%8B.jpg"
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type1"
  },{
    name:"梅菜扣肉",
    price:25,
    monthlySales:7,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E6%A2%85%E8%8F%9C%E6%89%A3%E8%82%89.jpg"
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type2"
  },{
    name:"锅包里脊",
    price:45,
    monthlySales:3,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E9%94%85%E5%8C%85%E9%87%8C%E8%84%8A.jpeg"
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type3"
  },{
    name:"酸菜鱼",
    price:50,
    monthlySales:50,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E9%85%B8%E8%8F%9C%E9%B1%BC.jpg"
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type4"
  },{
    name:"麻婆豆腐",
    price:50,
    monthlySales:30,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E9%BA%BB%E5%A9%86%E8%B1%86%E8%85%90.jpg"   
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type5"
  },{
    name:"糖醋鱼",
    price:50,
    monthlySales:30,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%B3%96%E9%86%8B%E9%B1%BC.jpg"   
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type6"
  },{
    name:"回锅肉",
    price:50,
    monthlySales:30,
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E5%9B%9E%E9%94%85%E8%82%89.jpg"
    }],
    stuff:"",
    description:"",
    attention:"",
    type:"type6"
  }];
};

const addfood = function(){
  return{
    status: 200
  };
};

const fooddetail = function(){
  return {
    name:"凉拌尖椒皮蛋",
    stuff:"尖椒",
    description:"凉拌尖椒皮蛋",
    attention:"",
    price:25,
    types:"",
    images:[{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E5%87%89%E6%8B%8C%E5%B0%96%E6%A4%92%E7%9A%AE%E8%9B%8B.jpg"
    },{
      url:"http://pb1ftb8nx.bkt.clouddn.com/%E7%B3%96%E9%86%8B%E9%B1%BC.jpg" 
    }]
  };
};

const editfood = function(){
  return {
    status:200
  };
};

const login = function(){
  return {
    status :200
  };
};

Mock.mock("/api/restaurants/info", "get",  restaurant_info);
Mock.mock("/api/restaurants/editinfo", "post",  edit_restaurant_info );
Mock.mock("/api/qiniutoken", "get",  upload_token );
Mock.mock("/api/restaurants/addpics", "post",  newPic);
// Mock.mock("/api/restaurants/getpics","get",get_restaurant_pics);
Mock.mock("/api/restaurants/orders","get",get_orders);
Mock.mock("/api/restaurants/menu","get",menu);
Mock.mock("/api/restaurants/addfood","post",addfood);
Mock.mock("/api/restaurants/fooddetail","get",fooddetail);
Mock.mock("/api/restaurants/editfood","post",editfood);
Mock.mock("/api/login","post",login);