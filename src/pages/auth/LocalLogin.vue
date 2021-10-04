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
@Component({
    components:{

    }
})
export default class Login extends Vue{
  data:LoginRequest=new LoginRequest();

  recivedPair(data:LoginRequest)
  {
    console.log('identityFromPermissions',data)
    this.data=data;
  }
  mounted() {
    SocketService.addEvent("identityFromPermissions",this.recivedPair); 
  }
  accept()
  {
      
  }
}
</script>

<style lang="scss" scoped>

</style>