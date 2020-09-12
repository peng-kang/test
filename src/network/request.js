import axios from 'axios'

export function request(config) {
//return new Promise((resolve, reject) => {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 3000
  })

//axios 請求攔截器
  instance.interceptors.request.use(config => {
    //console.log(config);
    return config;
  },err => {
    //console.log(err);
  })

//axios 響應攔截器
  instance.interceptors.response.use(res => {
    //console.log(res);
    return res.data;
  },err => {
    console.log(err);
  })


  return instance(config)
}
//     .then(res => {
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
// })

