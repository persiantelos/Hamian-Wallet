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
          <!-- <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer" @click="selectedItem('resources')">Resources</h3> -->
          <q-expansion-item
                  class="q-pa-none text-white q-ma-none bg-grey-10 internal-titles"
                  label="Resources"
                  style="margin-left:-15px"
                  @click="selectedItem('resources')"
                >
                <q-card dark class="q-pa-none q-ma-none">
                  <q-card-section  class="cursor-pointer q-pa-none">
                    <div @click="selectedItem('buySellRAM')" class="cursor-pointer q-pa-none row">
                      <q-img  width="20px" height="22px" class="q-mt-sm q-pt-xs q-ml-md" src="../../../assets/picture/RAM-icon.svg" />
                      <p class="text-white q-mt-sm q-ml-md">Buy/Sell RAM</p>
                    </div>
                    <div @click="selectedItem('stakeCpuNet')" class="cursor-pointer q-pa-none row">
                      <q-img  width="20px" height="22px" class="q-mt-sm q-pt-xs q-ml-md" src="../../../assets/picture/chip-icon.svg" />
                      <p class="text-white q-mt-sm q-ml-md">Stake CPU/NET</p>
                    </div>
                  </q-card-section >
                </q-card>
              </q-expansion-item>
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
