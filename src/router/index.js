import Router from "vue-router";
import Vue from 'vue'

Vue.use(Router)

// 公共路由
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/LoginVue'),
        hidden: true
    },
    {
        path: '/',
        component: () => import('@/views/Index'),
        hidden: true

    }
]
export default new Router({
    mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})
