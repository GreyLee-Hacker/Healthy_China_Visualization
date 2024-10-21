import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BasicData from '../views/BasicData.vue'
import EvaluationIndicators from '../views/EvaluationIndicators.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/basic-data',
        name: 'BasicData',
        component: BasicData
    },
    {
        path: '/evaluation-indicators',
        name: 'EvaluationIndicators',
        component: EvaluationIndicators
    },
    // ... 其他路由
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
