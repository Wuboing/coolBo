import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        menuNav: []
    },
    mutations:{
        editMenuList(state,data){
            state.menuNav = data
        }
    },
    actions:{
        getMenuList(context) {
            const list  = [
                {
                    name:'首页',
                    url: '/first',
                    icon:'home'
                },
                {
                    name:'测试页面',
                    url: '/cs',
                    icon:'dashboard'
                },
                {
                    name:'地图',
                    url: '/test',
                    icon:'touch_app'
                },
                {
                    name:'模拟',
                    url: '/test',
                    icon:'touch_app',
                    children:[
                        {
                            name:'模拟导航',
                            url:'/cs'
                        },
                        {
                            name:'模拟导航2',
                            url:'/first'
                        },
                    ]
                },
            ]
            context.commit('editMenuList', list);
            // return axios.post('/api/roles/menu?id='+JSON.parse(localStorage.getItem('user')).id).then(res=>{
            //     if (res.status === 200) {
            //         context.commit('editMenuList', res.data.data.menuAll);
            //         return Promise.resolve(res.data.data.menuAll);
            //     }
            // })
        },
    }


})

export default store;
