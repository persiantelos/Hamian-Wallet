<template>
  <div class="row col-12"> 
    <div class="col-4 q-pa-md q-pt-md menu">
      <NetWorkMenu />
    </div>
    <div class="col-8 q-pa-md q-pt-md body">
      <AccountList />
    </div>
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';  
import NetWorkMenu from 'src/components/wallet/networks/NetworkMenu.vue'
import AccountList from 'src/components/wallet/networks/AccountsList.vue'
const remote = require('electron').remote;
@Component({ 
  components:{
    NetWorkMenu,
    AccountList
  }
})
export default class Networks extends Vue{
  @Prop({default:() =>{return []}}) blockChain:any;
}
</script>
<style lang="scss" scoped>
.menue{
}
.body{}
</style>
