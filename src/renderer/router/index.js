import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
        path:'/',
        name:'ceshi',
        component:require('../page/ceshi').default
    },
    {
        path:'/ceshi2',
        name:'ceshi2',
        component:require('../page/ceshi2').default
    },
    {
        path:'/jishu',
        name:'jishju',
        component:require('../page/jishu').default
    },
    {
        path:'/xjbl',
        name:'xjbl',
        component:require('../page/xjbl.vue').default
    },
    {
        path:'/cnode',
        name:'cnode',
        component:require('../page/cnode.vue').default
    }
  ]
})
