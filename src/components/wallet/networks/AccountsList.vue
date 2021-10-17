<template>
  <div class="row col-12 full-height  bg-grey-9 account-list-body"> 
    <p style="display:none">{{counter}}</p>
    <div class="full-height  full-width account-list-boxs-parent">
      <!-- account list -->
      <div v-show="value == 'accountList'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
          <div class="row" v-for="(account , index) in data.accountList" :key="index">
            <q-icon name="person" color="white" size="22px" class="q-ma-md" />
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer q-mt-xs">{{account.name}}</h3>
          </div>
          <!-- CONTENT -->
          <div class="col-12 q-ma-md" >
            <!-- <p class="text-white text-caption cursor-pointer">{{account.name}}</p> -->
          </div>
        </div>
      </div>
      <!--  -->
      <div v-show="value == 'resources'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
          <div class="row" v-for="(account , index) in data.resources" :key="index">
            <q-icon name="person" color="white" size="22px" class="q-ma-md" />
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer q-mt-xs">{{account.name}}</h3>
          </div>
          <!-- CONTENT -->
          <div class="col-12 q-ma-md" >
            <!-- <p class="text-white text-caption cursor-pointer">{{account.name}}</p> -->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue ,Watch} from 'vue-property-decorator';  
import WalletService from 'src/localService/walletService';
import AccountService from 'src/services/accountService';


const remote = require('electron').remote;
@Component({ 
  components:{
  }
})
export default class AccountsList extends Vue{ 
  @Prop({default:() =>{return []}}) value:any;
  counter:number=0;
  data:any={
    accountList:[],
    resources:[],
    tokens:[],
    transferToken:[],
  };
  @Watch('value')
  valueChanged(newValue:any){
    if(newValue == 'accountList'){
      this.getAccounts();
    }
    else if(newValue == 'resources'){
      this.getResources();
    }
    else if(newValue == 'tokens'){
      // this.tokens =
      // this.getTokens();
    }
    else if(newValue == 'transferToken'){
      // this.transferToken =
      // this.getTransferToken();
    }
  }
  async getResources(){
    this.data.resources = await AccountService.getAccount(this.$route.params.chainId)
    this.counter++;
  }
  async getAccounts(){
    this.data.accountList = await WalletService.getAccounts();
    this.counter++;
  }

}
</script>
<style lang="scss" scoped>
.account-list-body{
  border-radius: 10px;
  .account-list-boxs-parent{
    min-height: 100vh;
    .account-list-internal-box{
      border-radius: 10px;
      .internal-titles{
        font-size: 22px;
      }
    }
  }

}
</style>
