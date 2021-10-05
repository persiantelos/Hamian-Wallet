<template>
  <div class="col-12">
      <p>Local Login</p>
      {{data}} 
      <q-btn @click="accept" label="Accept" />
  </div>
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
@Component({
    components:{

    }
})
export default class LocalLogin extends Vue{
  data:LoginRequest=new LoginRequest({});
  selectedAccount:StorageAccountModel;
  account:StorageAccountModel[]=[];
  reciveLoginRequest(data:any)
  {
      this.data=new LoginRequest(data);

  }
  recivedAddNetwork(data:any)
  {
      var req=new AddNetworkRequest(data);
      //chek if chain exist and exist account
      SocketService.sendData(req,{id:req.id,result:true})
  }
  recivedIdentity(data:any)
  { 
    var pr=new PermissionsRequest(data);
    SocketService.sendData(pr,{id:pr.id,result:null})
  }
  mounted() {
    SocketService.addEvent(RequestTypes.identityFromPermissions,this.recivedIdentity); 
    SocketService.addEvent(RequestTypes.requestAddNetwork,this.recivedAddNetwork); 
    SocketService.addEvent(RequestTypes.getOrRequestIdentity,this.recivedAddNetwork); 
  }
  accept()
  {
    var lres=new LoginResponse(this.data,this.selectedAccount)
    SocketService.sendData(this.data,lres);
  }
}
</script>

<style lang="scss" scoped>

</style>