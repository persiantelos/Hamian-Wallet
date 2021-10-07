<template>
  <q-page class="row items-center justify-evenly">
    <p style="color:red">index2</p>
    <q-btn v-for="(item,index) in nets" :key="index" :label="item.name" @click="addNetwork(item)" />
    <q-dialog v-model="showNewAccount">
      <q-card>
        <div class="row">
          <div class="col-12">
            <q-input v-model="account.privateKey" />
          </div>
          <div class="col-12"></div>
        </div>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts"> 
import BaseServices from 'src/services/baseServices';
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import CommonService from 'src/services/commonService'
import WalletService from 'src/localService/walletService'
import NetworkModel from 'src/models/networkModel';
import StorageAccountModel from 'src/models/storage/accountModel';
@Component({ 
  components:{
  }
})
export default class IndexComponent extends Vue{ 
  nets:NetworkModel[]=[]; 
  selectedNet:NetworkModel;
  showNewAccount:boolean=false;
  account:StorageAccountModel=new StorageAccountModel();
  mounted() {
    
  }
  async init()
  {
    this.nets = await CommonService.getNetworks();
  }
  addNetwork(model:NetworkModel)
  {
    this.showNewAccount=true; 
    this.selectedNet=model;
    this.account=new StorageAccountModel();
    this.account.chainId=model.chainId;
    this.account.blockchain=model.type;  
  }
  checkNetwork()
  {
    WalletService.existData(this.account.chainId,this.account.privateKey,this.selectedNet.protocol+'://'+this.selectedNet.host)
  }
}
</script>
