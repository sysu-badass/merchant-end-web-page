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
  if(Math.random()<0.5){
    return {status:200}
  }else{
    return {status:233}
  }
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

Mock.mock('/api/restaurants/info', 'get',  restaurant_info);
Mock.mock('/api/restaurants/editinfo', 'post',  edit_restaurant_info );
Mock.mock('/api/qiniutoken', 'get',  upload_token );
Mock.mock('/restaurants/info/pics', 'post',  newPic);