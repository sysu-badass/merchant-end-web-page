import axios from '../router/http'

export function login(formdata) {
  const data = {
    restaurant_admin_id: "9527",
    restaurant_admin_password: formdata['password'],
    restaurant_id: Number(formdata['phonenumber']),
    config: { headers: {'Content-Type': 'application/json' }} 
  }
  return axios({
    url: '/api/restaurants/login',
    method: 'post',
    data
  })
};

export function register(formdata){
  const data = {
    restaurant_id: Number(formdata['phone']),
    restaurant_admin_id: "9527",
    restaurant_admin_password: Number(formdata["password"]),
    restaurant_name: " ",
    restaurant_information: " "
  }
  return axios({
    method: 'post',
    url: '/api/restaurants/join',
    data: data,
    config: { headers: {'Content-Type': 'application/json' }}                   
  })
}


export function logout(){
  
}