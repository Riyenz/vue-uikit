export default [
  {
    path: '',
    name: 'demo-intro',
    displayName: 'Introduction',
    component: () => import('./views/pages/Introduction/index.vue'),
  },
  {
    path: 'alert',
    name: 'demo-alert',
    displayName: 'Alert',
    component: () => import('./views/pages/DemoAlerts/index.vue'),
  },
  {
    path: 'badges',
    name: 'demo-badges',
    displayName: 'Badges',
    component: () => import('./views/pages/DemoBadges/index.vue'),
  },
  {
    path: 'button',
    name: 'demo-button',
    displayName: 'Button',
    component: () => import('./views/pages/DemoButtons/index.vue'),
  },
  {
    path: 'grid',
    name: 'demo-grid',
    displayName: 'Grid',
    component: () => import('./views/pages/DemoGrids/index.vue'),
  },
  {
    path: 'item-list',
    name: 'demo-item-list',
    displayName: 'Item List',
    component: () => import('./views/pages/DemoItemlists/index.vue'),
  },
  {
    path: 'modal',
    name: 'demo-modal',
    displayName: 'Modal',
    component: () => import('./views/pages/DemoModals/index.vue'),
  },
];
