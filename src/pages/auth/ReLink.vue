<template>
  <div class="col-12 login-body">
    <div class="center col-12">
      <!-- background -->
      <q-img src="../../assets/picture/login-bg.png"/>
      <div class="col-12 login-box ">
          <!-- title -->
        <div class=" center q-mb-lg">
          <img class="icon" src="../../assets/picture/hamian.svg" />
          <h1 class="title">Hamian</h1>
        </div>
        <!-- re-link Box -->
        <div class="center ">
          <div class="card q-pa-xs q-pt-lg q-pb-lg">
            <p class="card-title q-mt-xl">Re-Link App</p>
            <p class="card-sub-title">via  <a v-if="data" class="external-link" href="">{{data.origin}}</a> </p>
            <p class="text-grey-5 q-pa-md text-body2">It looks like the linking with <span class="text-body1 text-grey-4">{{data.origin}}</span> was somehow broken. <span class="text-body-1 text-grey-4">Make sure you are actually using this application before re-linking!</span> </p>
            <!-- Actions -->
            <div class="center col-12 q-pa-xs q-pl-md  q-pr-md">
                <q-btn class="allow-btn full-width q-mt-sm"   label="Sign" @click="Allow()" />
            </div>
            <div class="center col-12 q-pa-xs  q-pl-md  q-pr-md">
                <q-btn class="deny-btn full-width bg-grey-10 q-mt-sm"   label="Deny" @click="Deny()" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue , Component} from "vue-property-decorator";
@Component({
    components:{

    }
})
export default class ReLink extends Vue{
    data:any={
        origin:'telos.bloks.io',
    }
    Allow(){
        // TODO:add some method here
    }
    Deny(){
        // TODO:add some method here
    }
  
}
</script>

<style lang="scss" scoped>
.login-body{
  position: relative ;
  .login-box{
    position: absolute;
    top:10%;
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
        font-size: 14px;
      }
      .input-border{
        border: 1px wolid $white;
      }
      .router-link{
        font-weight: 300 !important;
      }
      .deny-btn{
        // background-color: #0052cc;
        color:$white;
        font-weight: 300;
        border-radius: 25px;
        padding: 5px;
      }
      .allow-btn{
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