/*
 * @Author: your name
 * @Date: 2021-12-07 10:23:17
 * @LastEditTime: 2021-12-07 12:22:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \superpower\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index.vue'  

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/index"
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
