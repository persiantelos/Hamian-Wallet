<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-header elevated class="bg-grey-10 shadow-10 ">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          v-if="leftDrawerOpen"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row">
            <div class="col main-layout-blockchain-box q-mt-xs row">
              <div class="main-layout-blockchain-name ">
                <p class="text-subtitle2 q-pa-xs ">TELOS</p>
              </div>
              <div class="main-layout-blockchain-info  ">
                <p class="text-subtitle2 q-pa-xs "> Account Name </p>
              </div>
            </div>
            <div class="col">
              <div class="main-layout-tools">
                <!-- <p class="text-subtitle2 q-ma-xs q-mt-sm">TOOLS</p> -->
                <q-expansion-item
                  class="q-pa-none q-ma-none"
                  label="Tools"
                  style="position:relative"
                  expand-icon="ion"
                  :duration="10"
                >
                <q-card dark class="q-mt-md" style="position: fixed;background:none">
                  <q-expansion-item 
                  label="QR Code"
                  icon="qr_code"
                  class="q-pa-none" expand-icon="ion"
                  @click="showQrCode()" >
                  </q-expansion-item>
                  <q-expansion-item 
                  label="Generate Keys"
                  icon="key"
                  class="q-pa-none" expand-icon="ion"
                  @click="generateKey()" >
                  </q-expansion-item>
                </q-card>
              </q-expansion-item>
              </div>
            </div>
        </q-toolbar-title>
        <div class="q-pt-md">
          <p class="text-subtitle2">
            <router-link class="main-layout-link cursor-pointer row" :to="{name:'Setting'}">
            <img src="../assets/picture/Setting.svg">
            <p class="q-mt-md q-ml-sm">
              Setting
            </p>
            </router-link>
          </p>
        </div>
      </q-toolbar>
    </q-header>
     
    <!-- TODO:wallet list and add account and is here -->
    <div>wallet list and add account and is here</div>
    <!-- MAIN PANEL -->
    <q-drawer class="main-layout-side-panel"
      :value="true"
      :mini="leftDrawerOpen"
      show-if-above
      @click.capture="drawerClick"
      bordered 
      dark 
    >
      <q-list class="bg-grey-10">
        <q-item-label header class=" q-pt-none q-mt-sm">
          <div class="main-layout-side-panel-logo  row  q-pa-none q-ma-none q-pt-sm">
            <router-link :to="{name:'home'}" class="cursor-pointer">
              <img class="main-layout-side-panel-logo-icon q-mt-sm q-ml-md" src="../assets/picture/hamian.svg">
            </router-link>
            <p class="q-mt-md q-ml-sm text-weight-bold text-white">HAMIAN</p>
            <q-space></q-space>
            <q-icon name="close" size="22px" class="q-mt-sm cursor-pointer" color="white" @click="leftDrawerOpen = !leftDrawerOpen"/>
          </div>
        </q-item-label>
        <q-separator class="q-pt-xs" />

       <q-list dark padding   > 
            <img v-if="leftDrawerOpen" style="width:30px" class="main-layout-side-panel-logo-icon q-mt-sm q-ml-md" src="../assets/picture/hamian.svg">
        <q-expansion-item
          icon="grid_view"
          label="Blockchains"
        >
        <q-card dark>
          <q-card-section class="q-pa-none " v-for="(blocks , index) in $store.getters.getBlockChains.blockChains" :key="index">
          <q-expansion-item 
          :label="blocks.name"
          :caption="blocks.type"
          class="q-pa-none blockchain-item" expand-icon="ion"
          switch-toggle-side icon="double_arrow" @click="showNetworkList(blocks)" >
          </q-expansion-item>
          </q-card-section >
        </q-card>
      </q-expansion-item>
      </q-list>
 
      </q-list>

    </q-drawer>
    <q-page-container>
      <!-- {{data}} -->
      <router-view />
    </q-page-container>
    <div v-show="QrCode">
      <q-dialog v-model="QrCode">
        <q-card>
          <QRCode v-model="accountName" />
        </q-card>
      </q-dialog>
    </div>
  </q-layout>
</template>

<script lang="ts">  
import SocketService from 'src/localService/socketService';
import { Component, Prop, Vue  } from 'vue-property-decorator';
import LoginRequest from 'src/models/local/loginRequest'
import QRCode from 'src/components/common/QrCode.vue'  
@Component({ 
  name:'MainLayout',
  components:{
    QRCode,
  }
})
export default class MainLayout extends Vue{
  leftDrawerOpen:boolean=false; 
  QrCode:boolean=false; 
  eventid:string="";
  accountName:string="mrg2195";
  self:any=this;
 
  toggleLeftDrawer()
  {
    this.leftDrawerOpen=!this.leftDrawerOpen 
  }
  showNetworkList(selectedNet:any)
  {
    this.$store.state.currentTet = selectedNet;
    this.$router.push({name : 'walletNetwork' , params:{'chainId':selectedNet.chainId}})
  }
  drawerClick()
  {
    if(this.leftDrawerOpen)
      this.leftDrawerOpen=false
  } 
  showQrCode(){
    this.QrCode = true;
  }
}
</script>
<style lang="scss" scoped>
.main-layout-blockchain-box{
  height: 30px;
  position: relative;
  .main-layout-blockchain-name{
    border:1px solid lightgray;
    border-radius: 2px 0 0 2px;
    height: 100%;
    cursor: pointer;
  }
  .main-layout-blockchain-info{
    border:1px solid lightgray;
    border-radius: 0 2px 2px 0;
    height: 100%;
    cursor: pointer;
  }
}
.main-layout-link{
  color:$white;
  text-decoration: none;
}
.main-layout-side-panel{
  .main-layout-side-panel-logo{
    height:54px;
    .main-layout-side-panel-logo-icon{
      width:30px;
      height:30px;
      
    }
  }
}

</style>
