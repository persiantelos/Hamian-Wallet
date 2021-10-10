<template>
  <div>  
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import CommonService from 'src/services/commonService'
import WalletService from 'src/localService/walletService'
import NetworkModel from 'src/models/networkModel';
import StorageAccountModel from 'src/models/storage/accountModel'; 
import AccountService from 'src/services/accountService';
import SocketService from 'src/localService/socketService';
import RequestTypes from 'src/models/local/RequestTypes';
@Component({ 
  components:{
  }
})
export default class Signature extends Vue{  
  requestSignature(data:any)
  {

  }
  mounted() {  
    SocketService.addEvent(RequestTypes.requestSignature,this.requestSignature); 
  }
}
</script>
