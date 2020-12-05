import Vue from 'vue'
import VueRouter from 'vue-router'
//注入插件
Vue.use(VueRouter);
//定义路由
const routes = [
    {
        path: '/info1/:name/:count',
        name: 'info1',
        component: () => import('../components/group_components/Information.vue')
    }
]
//创建router实例
const router = new VueRouter({
    mode: 'history',
    routes
})
//导出router实例
export default router