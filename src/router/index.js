import { createRouter, createWebHistory } from 'vue-router';
import P5List from '../views/P5List.vue';
import P5Detail from '../views/P5Detail.vue';

const routes = [
  {
    path: '/',
    name: 'P5List',
    component: P5List,
  },
  {
    path: '/persona/:name',
    component: P5Detail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
