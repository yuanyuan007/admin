import Axios from 'axios';
import store from '../store';
import Vue from 'vue';
import router from '../router';
import { Message } from 'element-ui';
// 请求拦截器
Axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  console.log(error);
});

// 响应拦截器
Axios.interceptors.response.use((config) => {
  if(config.status === 200 && config.data.result.errcode === "0000") {

    return config.data.result.data;
  } else {
    return checkoutStatus(config);
  }

}, (error => {

  Message.error('服务不稳定，请稍后再试');
  return Promise.reject(error);
}))

function checkoutStatus(config) {

  switch(config.data.result.errcode) {
    case '800002':
      if(store.state.login.flag) {
        Message.error('请重新登录');
        store.commit('login/setFlag', false)
      }
      setTimeout(() => {
        store.commit('login/setFlag', true);
      }, 2000)
      router.push('/');
      break;
    default:
      if(store.state.login.flag) {
        Message.error(config.data.message);
        store.commit('login/setFlag', false)
      }
      setTimeout(() => {
        store.commit('login/setFlag', true);
      }, 1000)
      break;
  }

  return false;
}

let header = {
  // token: store.state.login.token,
  // memberId: store.state.login.memberId,
  // roleId: store.state.login.roleId,
  // cookie: store.state.login.cookie

};
function setParameter(url, data) {
  let formData = new FormData();
  if(url.form) {
    Object.keys(data).forEach(item => {
      formData.append(item, data[item]);
    })
  }
  var methods = url.method === 'get' ? 'params' : 'data';
  return {
    url: url.url,
    method: url.method ? url.method : 'post',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json;charset=UTF-8',
      // ...header
    },
    [methods]: data ? data : {},
    timeout: 50000,
    withCredentials: true
  }
}

function http(url, data) {


  if(url.loding) {
    Vue.prototype.$ingAnimate.open();
  }

  return new Promise((resolve, reject) => {
    let res_ = setParameter(url, data);
    Axios(res_).then(res => {
      if(res !== false) {
        resolve(res);
        if(url.loding) {
          Vue.prototype.$ingAnimate.close();
        }
      } else {
        reject(res);
        if(url.loding) {
          Vue.prototype.$ingAnimate.close();
        }
      }
    }).catch(ret => {
      reject(ret);
    })
  })
}

export default http;
