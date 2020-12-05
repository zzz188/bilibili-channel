import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [
    {
        path: '/info1',
        name: 'info1',
        component: () => import('../components/group_components/Information.vue')
    },
    {
        path: '/info2',
        name: 'info2',
        component: () => import('../components/group_components/Informarion2.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router