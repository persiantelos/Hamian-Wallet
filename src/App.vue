<template>
  <div id="q-app" class="bg-grey-10"> 
    <router-view />
  </div>
</template>
<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';  
import BaseLocalService from 'src/localService/baseLocalService'
import StorageService from 'src/localService/storageService' 
import CommonService from 'src/services/commonService';

Vue.mixin({
    preFetch:(option:any)=>{
      async function getNetworks(){
        var network = await CommonService.getNetworks()
        if(network){
          // console.log('====> n etworks',network)
          return option.store.dispatch('getBlockChains',network);
        }
      }
  getNetworks();
  }
})
@Component({ 
  components:{
  }
})
export default class APP extends Vue{ 
   mounted() { 
    //  console.log('>>>>>>>>>>>>>', )
    // this.init();  
   } 
}
</script>