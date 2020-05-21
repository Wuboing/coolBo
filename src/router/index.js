import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import login from '../views/login'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{requireAuth: true},
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
});
// router.beforeEach((to, from, next) => { //全局钩子函数
//   to.matched.some((route) => {
//     // to.matched.forEach((route) => {
//     if (route.meta.requireAuth) { //通过此操作可以判断哪些页面需要登录
//       if (localStorage.getItem('accessToken')&&sessionStorage.getItem('accessToken')) {
//         next()
//       } else {
//         next({ name: 'login', query: { redirect: to.fullPath } })
//       }
//     } else {
//       next();
//     }
//   });
//
// });

export default router;
