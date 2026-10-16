import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportDemoView from '../views/ReportDemoView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/report-demo', name: 'report-demo', component: ReportDemoView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
