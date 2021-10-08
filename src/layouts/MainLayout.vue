<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-header elevated class="bg-grey-10 shadow-10 ">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
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
                <p class="text-subtitle2 q-ma-xs q-mt-sm">TOOLS</p>
              </div>
            </div>
        </q-toolbar-title>

        <div class="q-pt-md">
          <p class="text-subtitle2">
            <router-link class="main-layout-link cursor-pointer" :to="{name:'Setting'}">
            <q-icon name="settings" size="20px" />
            Setting
            </router-link>
          </p>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer class="main-layout-side-panel"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      dark 
    >
      <q-list>
        <q-item-label 
          header class=" q-pt-none q-mt-sm"
        >
          <div class="main-layout-side-panel-logo  row  q-pa-none q-ma-none">
            <img class="main-layout-side-panel-logo-icon q-mt-sm q-ml-md" src="../assets/picture/hamian.svg">
            <p class="q-mt-md q-ml-sm text-weight-bold text-white">HAMIAN</p>
            <q-space></q-space>
            <q-icon name="close" size="22px" class="q-mt-sm cursor-pointer" color="white" @click="leftDrawerOpen = !leftDrawerOpen"/>
          </div>
          <div class="q-pt-sm q-mt-sm">
            <router-link :to="{name:'CreateAccount'}">CreateAccount</router-link><br/>
            <router-link :to="{name:'Login'}">Login</router-link><br/>
            <router-link :to="{name:'home'}">Home</router-link><br/>
          </div>
        </q-item-label>
        <q-separator />
        <!-- <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="drafts" />
          </q-item-section>

          <q-item-section>
            Drafts
          </q-item-section>
        </q-item> -->
 
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- {{data}} -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">  
import SocketService from 'src/localService/socketService';
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginRequest from 'src/models/local/loginRequest'  
@Component({ 
  name:'MainLayout',
  components:{
     
  }
})
export default class MainLayout extends Vue{
  leftDrawerOpen:boolean=false; 
  eventid:string="";
  blockChainList:any=[];
  toggleLeftDrawer()
  {
    this.leftDrawerOpen=!this.leftDrawerOpen 
  }
  monthed(){
    this.blockChainList = localStorage.getItem('blockChainList')
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
