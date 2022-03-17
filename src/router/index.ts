/*
 * @Description: 
 * @Autor: Seven
 * @Date: 2022-03-17 10:48:15
 * @LastEditors: Seven
 * @LastEditTime: 2022-03-17 10:57:18
 */
import { createRouter, createWebHistory } from "vue-router"
import Home from "@/view/home/index.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            name: '主页'
        },
        component: Home
    },
    {
        path: '/view1',
        name: 'view1',
        meta: {
            name: '视图1'
        },
        component: () => import('@/view/view1/index.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
