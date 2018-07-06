import axios from '../router/http'

export function getInfo() {
  return axios({
    url:"/api/restaurants/info",
    method: "get",
  })
};

export function updateInfo(form){  
  return axios({
    method: 'post',
    url: '/api/restaurants/editinfo',
    data: form,
    config: { headers: {'Content-Type': 'multipart/form-data' }}                   
  })
}

export function getQiniuToken(){
  return axios.get('/api/qiniutoken')
};