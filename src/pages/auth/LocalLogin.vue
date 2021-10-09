<template>
    <div class="col-12 login-body">
      <div style="display:none">{{counter}}</div>
      <div class="center col-12">
        <!-- background -->
        <q-img src="../../assets/picture/login-bg.png"/>
        <div class="col-12 login-box ">
            <!-- title -->
          <div class=" center q-mb-lg">
            <img class="icon" src="../../assets/picture/hamian.svg" />
            <h1 class="title">Hamian</h1>
          </div>
          <!-- login Box -->
          <div class="center col-12">
            <div class="card q-pa-xs q-pt-lg q-pb-lg col-12">
              <p class="card-title">Login</p>
              <p class="card-sub-title">via  <a v-if="data" class="external-link" href="">{{data.origin}}</a> </p>
 
              <q-form class="q-pl-md q-pr-md q-pb-md q-pt-md q-pt-sm col-12">
                  <q-btn-dropdown outline color="grey-13" :label="selectedAccount.name">
                    <q-list v-if="account">
                      <q-item v-for="(userAccount , index) in account" :key="index" clickable v-close-popup >
                        <q-item-section @click="selectedAccount=userAccount;counter++">
                          <q-item-label>{{userAccount.name}}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
              </q-form>
              <div class="col-12 description q-pa-sm q-mt-xl  q-mb-xl center">
                <p class="text-gray">By logging into this application you will be allowing in to interact with your Hamian.</p>
              </div>
              <!-- login -->
              <div class="center row col-12 q-pa-xs q-pl-xs q-mt-xs q-pr-xs">
                <div class="col-6 q-pa-xs ">
                  <q-btn class="register-btn  full-width" color="primary"  outline  @click="Deny" label="Deny"/>
                </div>
                <div class="col-6 q-pa-xs ">
                  <q-btn class="register-btn  full-width"   @click="accept" label="Accept"/>
                </div>
              </div>
              <div class="center row col-12 q-mt-md">
                <p  class="q-mt-md router-link cursor-pointer" @click="addToBlackList()" >
                  Add 
                    <span v-if="data">{{data.origin}}</span>
                  to black list
                </p>
              </div>
              <!-- confirm -->
              <div class="col-12" v-if="showConfirm == true">
                <Confirm  
                v-model="showConfirm"
                acceptColor="red"
                rejectColor="white"
                @accept="acceptAddToBlackList()" 
                @reject="rejectAddToBlackList()" 
                title="Warning" 
                :description="`Are you sure you whant to add` + data.origin + `to blacklist`" />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
      <!-- <p>Local Login</p>
      {{data}} 
      <q-btn @click="accept" label="Accept" /> -->
</template>

<script lang="ts">
import SocketService from "src/localService/socketService";
import LoginRequest from "src/models/local/loginRequest";
import {Vue , Component} from "vue-property-decorator"
import RequestTypes from 'src/models/local/RequestTypes'
import PermissionsRequest from 'src/models/local/permissionsRequest'
import AddNetworkRequest from "src/models/local/addNetworkRequest";
import LoginResponse from "src/models/local/loginResponse";
import StorageAccountModel from "src/models/storage/accountModel";
import Confirm from 'src/components/common/Confirm.vue'
import WalletService from "src/localService/walletService";
const remote = require('electron').remote;
@Component({
    components:{
      Confirm
    }
})
export default class LocalLogin extends Vue{
  data:LoginRequest=new LoginRequest();
  selectedAccount:StorageAccountModel=new StorageAccountModel();
  account:StorageAccountModel[]=[];
  showConfirm:boolean=false;
  counter:number=0;
  async reciveLoginRequest(data:any)
  {
    console.log('----------------->>>>>>>>',data)
      this.data=new LoginRequest(data);
      console.log('>>>>>>>>',this.data.chainId,await WalletService.getAccounts())
      this.account=(await WalletService.getAccounts()).filter(p=>p.chainId==this.data.chainId);
      this.counter++;

  }
  // recivedAddNetwork(data:any)
  // {
  //     var req=new AddNetworkRequest(data);
  //     //chek if chain exist and exist account
  //     SocketService.sendData(req,{id:req.id,result:true})
  // }
  // recivedIdentity(data:any)
  // { 
  //   var pr=new PermissionsRequest(data);
  //   SocketService.sendData(pr,{id:pr.id,result:null})
  // }
  mounted() {
    // SocketService.addEvent(RequestTypes.identityFromPermissions,this.recivedIdentity); 
    // SocketService.addEvent(RequestTypes.requestAddNetwork,this.recivedAddNetwork); 
    SocketService.addEvent(RequestTypes.getOrRequestIdentity,this.reciveLoginRequest); 
  }
  accept()
  {
    var lres=new LoginResponse(this.data,this.selectedAccount)
    SocketService.sendData(this.data,lres);
    var window = remote.getCurrentWindow();
       window.close();
    
  }
  Deny(){
    console.log('deny')
  }
  addToBlackList(){
    console.log(this.showConfirm);
    
    this.showConfirm = true;
  }
  acceptAddToBlackList(){
    console.log('accept');
  }
  rejectAddToBlackList(){
    console.log('reject');
    this.showConfirm = false;
  }
}
</script>
<style lang="scss" scoped>
.login-body{
  position: relative ;
  .login-box{
    min-height: 500px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
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
      background-color:#171717 ;
      width: 360px;
      border-radius: 20px;
      border: 1px solid #D9D9D9;
      text-align: center;
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
      // .description{
          
      // }
      .register-btn{
        background-color: #0052cc;
        color:$white;
        font-weight: 300;
        border-radius: 25px;
        padding: 5px;
      }
    }
  }
}
</style>