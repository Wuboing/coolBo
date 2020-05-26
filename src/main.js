// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App'
import axios from './http';
import router from './router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.config.productionTip = false
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};


import store from './store/store'

import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '61b631a0852a573df4738ec123f95b13',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
