<template>
  <div class="row"> 
    <div  class="col-12" v-for="(itm,index) in transactions" :key="index">
      <q-card>
        {{itm.name}}
        <br/>
        {{itm.data  }}
      </q-card>
      <q-card>
        <q-btn label="Accept" @click="accept" />
        <q-btn label="Reject" @click="reject" />
      </q-card>
    </div>
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import CommonService from 'src/services/commonService'
import WalletService from 'src/localService/walletService'
import NetworkModel from 'src/models/networkModel';
import StorageAccountModel from 'src/models/storage/accountModel'; 
import TransactionRequest from 'src/models/local/transactionRequest'; 
import AccountService from 'src/services/accountService';
import SocketService from 'src/localService/socketService';
import RequestTypes from 'src/models/local/RequestTypes';
const remote = require('electron').remote;
@Component({ 
  components:{
  }
})
export default class Signature extends Vue{  
  data:any={};
  transactions:TransactionRequest[]=[];
  async accept()
  { 
    await WalletService.acceptTransaction(this.data.id);
    var window = remote.getCurrentWindow();
    window.close();
  }
  async reject()
  {
    await WalletService.rejectTransaction(this.data.id);
    var window = remote.getCurrentWindow();
    window.close(); 
  }
  requestSignature(data:any)
  {
    this.data=data 
    this.transactions=data.payload.transaction;
    
  }
  mounted() {  
    SocketService.addEvent(RequestTypes.requestSignature,this.requestSignature); 
  }
}
</script>
