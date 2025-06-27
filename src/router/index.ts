import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Vuex from '@/views/Vuex.vue'
import Test from '@/views/Test.vue'
import OneText from '@/views/OneText.vue'
import Plotly from '@/views/Plotly.vue'
import PlotlyLine from '@/views/PlotlyLine.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue')
  },
  {
    path: '/oneText',
    name: 'OneText',
    component: OneText
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/plotly',
    name: 'Plotly',
    component: Plotly
  },
  {
    path: '/plotlyLine',
    name: 'PlotlyLine',
    component: PlotlyLine
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
