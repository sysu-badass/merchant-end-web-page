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

Mock.mock('/api/restaurants/info', 'get',  restaurant_info);
Mock.mock('/api/restaurants/editinfo', 'post',  edit_restaurant_info );
Mock.mock('/api/qiniutoken', 'get',  upload_token );
Mock.mock('/api/restaurants/addpics', 'post',  newPic);
Mock.mock('/api/restaurants/getpics','get',get_restaurant_pics)