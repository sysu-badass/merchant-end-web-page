import axios from '../router/http'

export function login(formdata) {
  return axios({
    url: '/api/login',
    method: 'post',
    formdata
  })
};


export function logout(){
  
}