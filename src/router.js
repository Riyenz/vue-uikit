import Vue from 'vue';
import Router from 'vue-router';
import demoRoutes from '@/demoRoutes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/pages/Docs/index.vue'),
      children: demoRoutes,
    },
  ],
});
