import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from '../components/Pages/LoginPage.vue';
import MainPage from '../components/Pages/MainPage.vue';

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/main', component: MainPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router