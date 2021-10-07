<template>
  <div > 
      <div class="row">
          <div class="col-12" v-for="(acc,accIndex) in myAccounts" :key="'acc'+accIndex">
              {{acc.name}}({{acc.authority}}) <q-btn round />
          </div>
      </div>
    <div v-for="(item,index) in nets" :key="index"> 
        <q-btn :label="item.name" @click="addNetwork(item)" />
    </div>
    <q-dialog v-model="showNewAccount">
      <q-card>
        <div class="row">
          <div class="col-12">
            <q-input v-model="account.privateKey" />
            <q-btn @click="checkNetwork"/>
          </div>
          <div class="row" v-if="findAccounts.length">
              <div class="col-12" v-for="(name,nameIndex) in findAccounts" :key="'name'+nameIndex">
                  <q-radio v-model="selectName" :val="name" :label="name" />
              </div>
              {{selectName}}
          </div>
          <div class="col-12"></div>
        </div>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import CommonService from 'src/services/commonService'
import WalletService from 'src/localService/walletService'
import NetworkModel from 'src/models/networkModel';
import StorageAccountModel from 'src/models/storage/accountModel'; 
@Component({ 
  components:{
  }
})
export default class Test extends Vue{ 
   myAccounts:StorageAccountModel[]=[];
  nets:NetworkModel[]=[]; 
  selectedNet:NetworkModel;
  showNewAccount:boolean=false;
  account:StorageAccountModel=new StorageAccountModel();
  findAccounts:string[]=[];
  selectName:string="";
  mounted() {
    this.init()
  }
  async init()
  {
    this.nets = await CommonService.getNetworks();
    console.log('///////////',this.nets)
  }
  async reload()
  {
      this.myAccounts=await WalletService.getAccounts();
  }
  addNetwork(model:NetworkModel)
  {
    this.showNewAccount=true; 
    this.selectedNet=model;
    this.account=new StorageAccountModel();
    this.account.chainId=model.chainId;
    this.account.blockchain=model.type;  
  }
  async checkNetwork()
  {
    var dt =await WalletService.existData(this.selectedNet.type,this.account.privateKey,this.selectedNet.history)
    if(dt.account_names)
    {
        this.findAccounts=dt.account_names;
    }
    console.log(dt)
  }
}
</script>
