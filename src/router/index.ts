import { route } from 'quasar/wrappers';
import BaseLocalService from 'src/localService/baseLocalService';
import StorageService from 'src/localService/storageService';
import VueRouter from 'vue-router';
import routes from './routes';  
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route(function ({ Vue }) {
  Vue.use(VueRouter);

  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });
 
  Router.beforeEach(async(to, from, next) => { 
    console.log('/////////////',to)
    if(!to.meta?.isPublic)
    {
      
      const urlParams = new URLSearchParams(window.location.search); 
      BaseLocalService.globalId=urlParams.get('globalid')??'';
      var dt =await  StorageService.existData()
      if(!dt)
      {
        next({path:'/createaccount'})
        return
      }
    } 
    next()
  })
 
  return Router;
})
