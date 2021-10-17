<template>
  <div class="row col-12"> 
    <div class="col-4 q-pa-md q-pt-md menu">
      <NetWorkMenu :chainId="$route.params.chainId" @selectedItem="selectedItemChanged" />
    </div>
    <div class="col-8 q-pa-md q-pt-md body">
      <AccountList v-model="accuntList" />
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
  accuntList:any=[];
  selectedItemChanged(data:any){
    if(data == 'accountList'){
      this.accuntList = data;
    }
    else if(data == 'resources'){
      this.accuntList = data;
    }
    else if(data == 'tokens'){
      this.accuntList = data;
    }
    else if(data == 'transferToken'){
      this.accuntList = data;
    }
  }
  // @Prop({default:() =>{return []}}) blockChain:any;
  // created(){
    // console.log(this.$route.params.chainId);
  // }
}
</script>
<style lang="scss" scoped>
.menue{
}
.body{}
</style>
