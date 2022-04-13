import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior () {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: () => import('@/views/ContextMenuTest.vue'),
          name: 'ContextMenu'
        },

        {
          path: 'grid',
          component: () => import('@/views/GridSystemTest.vue'),
          name: 'GridSystem'
        }
      ]
    }
  ]
});

export default router;
