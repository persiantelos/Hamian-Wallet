import { route } from 'quasar/wrappers';
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

  var getQuery=()=>
  {
    var obj:any={}
    var str=window.location.search.substr(1).split('&');
    for(var a of str)
    {
      var split=a.split("=")
      obj[split[0]]=split[1]
    }
    return obj;
  }
  var setQueryItems=function(query:any,prename:string)
  {
    console.log('set session')
    for(var qu in query)
    {
      if(qu.indexOf(prename+'_')==0)
      {
        var name=qu.replace(prename+'_','');
        var strdata= window.sessionStorage.getItem('query_'+prename);
        var queryData:any={};
        if(strdata)
        {
          try{
            queryData=JSON.parse(strdata);
          }catch(exp){}
        }
        queryData[name]=query[qu];
        window.sessionStorage.setItem('query_'+prename,JSON.stringify(queryData));
      }
    }

  }
 
  return Router;
})
