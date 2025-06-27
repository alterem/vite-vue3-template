import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Vuex from '@/views/Vuex.vue';
import Test from '@/views/Test.vue';
import OneText from '@/views/OneText.vue';
import Plotly from '@/views/Plotly.vue';
const routes = [
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
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
