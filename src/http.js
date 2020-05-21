import axios from "axios";
import {Message} from "element-ui";
import router from './router';

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 加载动画
    // startLoading();
    const accessToken = localStorage.getItem('accessToken');

    // console.log(localStorage, 'localStorage');
    // console.log(accessToken, 'config');
    // console.log( '==============');
    // if (accessToken){
    //   config.headers.Authorization = 'Bearer '+accessToken;
    //   // config.headers.Authorization = 'Bearer 258bd251-a98a-4eb8-ae10-31145e0ede76';
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    // endLoading();
    return response;
  },
  error => {
    // endLoading();
    // 获取错误状态码
    if(error.response){
      const status_code = error.response.status;
      console.log(status_code);
      switch (status_code) {
          case 401:
              Message({
                      message: "登录过期，请重新登录",
                      type: 'error'
                  }
              );
              // 清除token
              localStorage.removeItem('accessToken');
              localStorage.removeItem("username");
              localStorage.removeItem("user");
              // 跳转到login页面
              router.push({path:'/login',query: {redirect: error.response.fullPath}});
              break;
        case 402:
          Message({
              message: "此用户没有权限做此操作",
              type: 'error'
            }
          );
          break;
          case 403:
              Message({
                      message: "身份验证失败，请关闭重新登录!",
                      type: 'error'
                  }
              );
              // 清除token
              localStorage.removeItem('accessToken');
              localStorage.removeItem("username");
              localStorage.removeItem("user");
              // 跳转到login页面
              router.push({path:'/login',query: {redirect: error.response.fullPath}});
              break;
          // case 500:
          //     Message({
          //             message: "服务器异常,请稍后重试！",
          //             type: 'error'
          //         }
          //     );
          //     break;
        case 501:
          Message({
              message: "请求的功能无法完成",
              type: 'error'
            }
          );
          break;
      }
/*      if(status_code === 401 || status_code === 500){
        // 提示token失效
        Message.error('token失效，请重新登录!');
        // 清除token
        localStorage.removeItem('accessToken');
        localStorage.removeItem("username");
        // 跳转到login页面
        // router.push({path:'/login',query: {redirect: error.response.fullPath}});
        router.push({path:'/login'});
        return true;
      }else{
        return Promise.reject(error);
      }*/
    }else {
      return Promise.reject(error);
    }
  }
);
export default axios;
