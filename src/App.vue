<template>
  <div id="q-app"> 
    <router-view />
  </div>
</template>
<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';  
import BaseLocalService from 'src/localService/baseLocalService'
import StorageService from 'src/localService/storageService' 
 Vue.mixin({
      preFetch:  ({ store })=>{
        console.log('=====>prefetch',store)
        return
      },
    });
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
