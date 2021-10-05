import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'),name:'home' },
      // { path: 'modelpage/:name/:scope', component: () => import('pages/admin/modelPage.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/Authentication.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login.vue'),name:'login' },
      { path: 'local', component: () => import('pages/auth/LocalLogin.vue') },
      { path: 'loginwithfile', component: () => import('pages/auth/LoginWithFile.vue'),name:'loginwithfile' },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/Error404.vue'),
  // },
];

export default routes;
