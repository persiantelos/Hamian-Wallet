<template>
  <div class="row col-12 full-height  bg-grey-9 menue-body">
    <div class="full-height  full-width menue-boxs-parent ">
      <!-- ACCOUNT LIST -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <div class="row">
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer"  @click="selectedItem('accountList')" >Account List</h3>
            <q-space></q-space>
            <q-btn @click="addNewAccount()" label="New" icon="add" color="grey-9" rounded class="text-grey-11 q-ma-xs" />
          </div>
        </div>
      </div>
      <!-- RESOURCES -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer" @click="selectedItem('resources')">Resources</h3>
          <div class="col-12" v-for="(recource , index) in resources" :key="index">
            <p class="text-white text-caption cursor-pointer">{{resource.name}}</p>
          </div>
        </div>
      </div>
      <!-- TOKEN lIST -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer" @click="selectedItem('tokens')">Tokens</h3>
          <div class="col-12" v-for="(token , index) in tokenList" :key="index">
            <p class="text-white text-caption cursor-pointer">{{token.name}}</p>
          </div>
        </div>
      </div>
      <!-- TRANSFER TOKEN -->
      <div class="col-12 menue-internal-box bg-grey-10 q-ma-md">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer" @click="selectedItem('transferToken')">Transfer Token</h3>
          <!-- <div class="col-12" v-for="(token , index) in tokenList" :key="index"> -->
            <!-- <p class="text-white text-caption cursor-pointer">{{token.name}}</p> -->
          </div>
      </div>
    </div>
    <div class="col-12 row" v-show="showAddNewAccountPopUp">
      <AddNewAccount @close="showAddNewAccountPopUp = ! showAddNewAccountPopUp"  v-model="showAddNewAccountPopUp" />
    </div>
  </div> 
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import CommonService from 'src/services/commonService'
import AddNewAccount from 'src/components/wallet/networks/add_new_account/AddNewAccount.vue'

const remote = require('electron').remote;
@Component({ 
  components:{
    AddNewAccount
  },
})
export default class NetworkMenu extends Vue{   
  @Prop({default:() =>{return []}}) chainId:any;

  resources:any=[];
  tokenList:any=[];
  nets:any=[];
  accountInformation:any=[];
  showAddNewAccountPopUp:boolean=false;

  mounted(){
    this.getNets();
  }
  async getNets(){
    this.nets = await CommonService.getNetworks();
  }
  selectedItem(data:string){
    this.$emit('selectedItem',data)
  }
  addNewAccount(){
    this.showAddNewAccountPopUp = true;
  }
}
</script>
<style lang="scss" scoped>
.menue-body{
  border-radius: 10px;
    min-height:85vh;
  .menue-boxs-parent{
    min-height:85vh;
  }
  .menue-internal-box{
    border-radius: 10px;
    .internal-titles{
      font-size: 16px;
    }
  }
  
}
</style>
