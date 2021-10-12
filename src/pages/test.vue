<template>
  <div > 
    <div class="row">
        <div class="col-12" v-for="(acc,accIndex) in myAccounts" :key="'acc'+accIndex">
            {{acc.name}}({{acc.authority}}) <q-btn round size="sm" icon="edit" />
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
              <div class="col-12" v-for="(acc,nameIndex) in findAccounts" :key="'name'+nameIndex">
                  <q-radio v-model="selectName" :val="acc" :label="acc.name+'('+acc.authority+')'" />
              </div> 
              <q-btn v-if="selectName" label="Save" @click="save" />
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
import AccountService from 'src/services/accountService';
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
  findAccounts:StorageAccountModel[]=[];
  selectName:StorageAccountModel=new StorageAccountModel();
  mounted() {
    this.init()
  }
  async init()
  {
    this.nets = await CommonService.getNetworks();
    this.reload()
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
    console.log('>>>>>>>>>>>>>>>',dt)
    if(dt.account_names)
    {
        for(var a of dt.account_names)
        {
            var acc=await AccountService.getAccount(a,this.selectedNet.history);
            var x=new StorageAccountModel();
            x.name=a;
            x.authority=acc.permissions.filter(p=>p.key==dt.publicKey)[0].authority
            this.findAccounts.push(x)// =;
        }
    }
    console.log(dt)
  }
  async save()
  {
      this.account.name=this.selectName.name;
      this.account.authority=this.selectName.authority; 
      console.log('dddddddd',this.account)
      var dt =await WalletService.addAccount(this.account);
      console.log('dddddddd',dt)
      this.reload()
  }
}
</script>
