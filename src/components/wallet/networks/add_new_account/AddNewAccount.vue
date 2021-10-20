<template>
    <div class="col-12 add-account-body " >
        <q-dialog persistent  v-model="value" class="center  col-12 " >
            <div class="main-box">
                <q-card class="col-12 q-pa-md main-card " >
                    <div class="col-12 " >
                        <div class="center ">
                            <div class="card q-mt-lg q-mb-lg q-pb-lg">
                                <!-- title -->
                                <div class="row center">
                                    <img src="../../../../assets/picture/user-add-light-icon.svg" />
                                    <p class="card-title q-ma-md">
                                        Add account
                                    </p>
                                </div>
                                <p class="card-sub-title" v-if="!findAccounts.length">Enter your private key to add your account!</p>
                                <q-form class="q-pl-md q-pr-md q-pt-sm" @submit="checkNetwork()" v-if="!findAccounts.length">
                                <!-- private key -->
                                <q-input 
                                    type="text"
                                    dark
                                    class="q-ma-xs q-pa-xs q-mt-sm input-border"  
                                    style="border: 0px solid white" 
                                    bg-color="grey-10" 
                                    color="white" 
                                    outlined 
                                    standout="bg-gray-10 text-white color-white q-pl-md"
                                    v-model="account.privateKey" 
                                    @click:enter="checkNetwork()"
                                    label="Private Key" />
                                </q-form>
                                <div>
                                    <div class="row center" v-if="findAccounts.length" align="center">
                                        <p class="card-sub-title">Select wich account you whant to add!</p>

                                        <div class="col-12" v-for="(acc,nameIndex) in findAccounts" :key="'name'+nameIndex">
                                            <q-radio dark v-model="selectName" :val="acc" :label="acc.name+'('+acc.authority+')'" />
                                        </div> 
                                    </div>
                                </div>
                                <div >
                                    <!-- addAccount -->
                                    <div class="center col-12 q-pa-md q-pl-md q-mt-md q-pr-md">
                                        <q-btn class="Add-btn full-width" rounded  label="Search" v-if="!findAccounts.length" @click="checkNetwork()" />
                                        <q-btn class="Add-btn full-width" rounded  label="Add Account" v-if="findAccounts.length" @click="save()" />
                                    </div>
                                    <!-- cancel -->
                                    <div class="center col-12  q-pl-md q-pr-md">
                                        <q-btn class="cancel-btn full-width bg-grey-9" rounded   label="cancel" @click="close()" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </q-card>
            </div>
        </q-dialog>
    </div>
</template>
<script lang="ts">
import {Vue , Component , Prop ,Watch} from 'vue-property-decorator';
import StorageAccountModel from 'src/models/storage/accountModel';
import NetworkModel from 'src/models/networkModel';
import WalletService from 'src/localService/walletService'
import AccountService from 'src/services/accountService';



@Component({})
export default class AddNewAccount extends Vue{
    @Prop({default:()=>{false}}) value:boolean;
    privateKey:string='';
    selectedNet:NetworkModel;
    account:StorageAccountModel=new StorageAccountModel();
    findAccounts:StorageAccountModel[]=[];
    selectName:StorageAccountModel=new StorageAccountModel();
    

    @Watch('$store.state.currentTet')
    updateSelectednet(){
        this.addNetwork(this.$store.state.currentTet);
    }

    mounted(){
        console.log('AddNewAccountModel:',this.$store.getters.getBlockChains.currentTet)
        this.addNetwork(this.$store.state.currentTet);
    }
    close(){
        this.$emit('close')
    }
    addNetwork(model:NetworkModel)
    {
        console.log('fire')
        this.selectedNet=this.$store.getters.getBlockChains.currentTet;
        this.account=new StorageAccountModel();
        this.account.chainId=model.chainId;
        this.account.blockchain=model.type;  
    }
    async checkNetwork()
    {
        var newAccount =await WalletService.existData(this.selectedNet.type,this.account.privateKey,this.selectedNet.history)
        console.log('>>>>>>>>>>>>>>>',newAccount)
        if(newAccount.account_names)
        {
            for(var a of newAccount.account_names)
            {
                var acc=await AccountService.getAccount(a,this.selectedNet.history);
                var x=new StorageAccountModel();
                x.name=a;
                x.authority=acc.permissions.filter(p=>p.key==newAccount.publicKey)[0].authority
                this.findAccounts.push(x)// =;
            }
        }
        console.log(newAccount)
    }
    async save()
  {
      this.account.name=this.selectName.name;
      this.account.authority=this.selectName.authority; 
      console.log('dddddddd',this.account)
      var dt =await WalletService.addAccount(this.account);
      this.close()
  }
}
</script>
<style lang="scss" scoped>
.add-account-body{
  position: relative ;
}
.main-box{
    border:1px solid #D9D9D9;
    border-radius: 20px;
    width: 360px;
    background-color:#171717 ;


}
.main-card{
    color:$white;
    background-color:#171717 ;

}
.icon{
    width: 30px;
    height: 30px;
}
.title{
    font-size: 20px;
    font-weight:500 ;
    color: $white;
}
.card{
    width: 360px;
    text-align: center;
}
.card-title{
    color:$white;
    font-size: 20px;
    font-weight:200 ;
}
.card-sub-title{
    color:#8F92A1;
    font-size: 12px;
}
.input-border{
    border: 1px wolid $white;
}
.router-link{
    font-weight: 300 !important;
}
.Add-btn{
    background-color: #0052cc;
    color:$white;
    font-weight: 300;
    padding: 5px;
}
.add-account-btn{
    background-color: #0052cc;
    color:$white;
    font-weight: 300;
    padding: 2px;

}
.cancel-btn{
    color:$white;
    font-weight: 300;
    padding: 5px;

}
</style>