<template>
  <div class="row col-12 full-height  bg-grey-9 menue-body">
    <div class="full-height  full-width menue-boxs-parent ">
      <!-- ACCOUNT LIST -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <div class="row">
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer">Account List</h3>
            <q-space></q-space>
            <q-btn label="New" icon="add" color="grey-9" rounded class="text-grey-11 q-ma-xs" />
          </div>
          <div class="col-12" v-for="(account , index) in accountList" :key="index">
            <p class="text-white text-caption cursor-pointer">{{account.name}}</p>
          </div>
        </div>
      </div>
      <!-- RESOURCES -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer">Resources</h3>
          <div class="col-12" v-for="(recource , index) in resources" :key="index">
            <p class="text-white text-caption cursor-pointer">{{resource.name}}</p>
          </div>
        </div>
      </div>
      <!-- TOKEN lIST -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer">Tokens</h3>
          <div class="col-12" v-for="(token , index) in tokenList" :key="index">
            <p class="text-white text-caption cursor-pointer">{{token.name}}</p>
          </div>
        </div>
      </div>
      <!-- TRANSFER TOKEN -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer">Move Token</h3>
          <!-- <div class="col-12" v-for="(token , index) in tokenList" :key="index"> -->
            <!-- <p class="text-white text-caption cursor-pointer">{{token.name}}</p> -->
          </div>
      </div>
      </div>
    </div> 
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import WalletService from 'src/localService/walletService'

const remote = require('electron').remote;
@Component({ 
  components:{
  }
})
export default class NetworkMenu extends Vue{   
  accountList:any=[];
  resources:any=[];
  tokenList:any=[];

  mounted(){
    // console.log(this.$router)
    this.getAccounts();
    this.getResources();
    this.getTokenList();
  }

  async getResources(){
    // TODO:needs service
  }
  async getTokenList(){
    // TODO:needs service
  }
  async getAccounts(){
    this.accountList = await WalletService.getAccounts();
  }
}
</script>
<style lang="scss" scoped>
.menue-body{
  border-radius: 10px;
    min-height:100vh;
  .menue-boxs-parent{
    min-height:100vh;
  }
  .menue-internal-box{
    border-radius: 10px;
    .internal-titles{
      font-size: 16px;
    }
  }
  
}
</style>
