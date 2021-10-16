import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue'),name:'home'},
      { path: '/networks/:chainId', component: () => import('src/pages/wallet/Networks.vue'),name:'walletNetwork'},
      // { path: 'modelpage/:name/:scope', component: () => import('pages/admin/modelPage.vue') },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/Authentication.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login.vue'),name:'Login',meta:{isPublic:true} },
      { path: 'local', component: () => import('pages/auth/LocalLogin.vue'),name:'LocalLogin' },
    ],
  },
  {
    path: '/popup',
    component: () => import('layouts/PopupLayout.vue'),
    children: [
      { path: 'signature', component: () => import('pages/wallet/Signature.vue'),name:'Signature'}, 
    ],
  },
  {
    path: '/createaccount',
    component: () => import('layouts/Authentication.vue'),
    children: [
      { path: '', component: () => import('pages/auth/CreateAccount.vue'),name:'CreateAccount',meta:{isPublic:true} },
      { path: 'loginwithfile', component: () => import('pages/auth/LoginWithFile.vue'),name:'loginwithfile',meta:{isPublic:true} },
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
