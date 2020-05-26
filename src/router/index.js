import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Index from '../components/index'
import login from '../views/login'
import first from '../views/first/first'
import cs from '../views/cs/cs'
import pageCs from '../views/map/pageCs'



const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/first',
      name:'index',
      component: Index,
      meta:{requireAuth: true},
      children:[
        {
          path: '/first',
          name:'first',
          component: first,
          meta:{requireAuth: true},
        },
        {
          path: '/cs',
          name:'cs',
          component: cs,
          meta:{requireAuth: true},
        },
        {
          path: '/test',
          name:'pageCs',
          component: pageCs,
          meta:{requireAuth: true},
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
});
router.beforeEach((to, from, next) => { //全局钩子函数
  to.matched.some((route) => {
    // to.matched.forEach((route) => {
    if (route.meta.requireAuth) { //通过此操作可以判断哪些页面需要登录
      if (localStorage.getItem('accessToken')&&sessionStorage.getItem('accessToken')) {
        next()
      } else {
        next({ name: 'login', query: { redirect: to.fullPath } })
      }
    } else {
      next();
    }
  });

});

export default router;
