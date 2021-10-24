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
        <!-- Sign Box -->
        <div class="center ">
          <div class="card q-pa-xs q-pt-lg q-pb-lg">
            <q-tabs
            v-model="transactionTab"
            dense dark
            class="text-white "
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
            >
            <q-tab name="Overview" label="Overview" />
            <q-tab name="Details" label="Details" />
            </q-tabs>

            <q-separator />

            <q-tab-panels dark v-model="transactionTab" animated>
                <!-- Overview tab -->
            <q-tab-panel name="Overview" class="center tab-panel">
                <div>
                    <div class="text-h6 q-mt-xl">
                            Actions
                    </div>
                    <p v-if="data" class="card-title q-mt-sm">{{data.title}}</p>
                    <p class="card-sub-title">via  <a v-if="data" class="external-link" href="">{{data.origin}}</a> </p>
                </div>
            </q-tab-panel>
            <!-- Details tab -->
            <q-tab-panel name="Details" align="left" class="tab-panel ">
                <p class="text-grey-5 text-body">
                    By approving you will wign the following contract
                </p>
                <div class="text-h6 col-12  q-mt-md">
                    eosio <br />
                    <strong>
                    {{data.title}}
                    </strong>
                </div>
                <div class="col-12 q-mt-md">
                    <!-- payer -->
                    <p class="text-white q-pa-none q-ma-none text-h6">payer</p>
                    <p class="text-white q-pa-none q-ma-none text-subtitle2">{{data.payer}}</p>
                    <q-separator color="grey-14 q-pa-none q-mt-sm" />
                    <!-- quant -->
                    <p class="text-white q-pa-none q-ma-none text-h6">quant</p>
                    <p class="text-white q-pa-none q-ma-none text-subtitle2">{{data.quant}}</p>
                    <q-separator color="grey-14 q-pa-none q-mt-sm" />
                    <!-- receiver -->
                    <p class="text-white q-pa-none q-ma-none text-h6">receiver</p>
                    <p class="text-white q-pa-none q-ma-none text-subtitle2">{{data.receiver}}</p>
                    <q-separator color="grey-14 q-pa-none q-mt-sm" />
                </div>
            </q-tab-panel>

            </q-tab-panels>
            <!-- whitelisting -->
            <div class="col-12 row q-pa-xs q-pl-lg q-pr-lg bg-grey-9 card-whitelist ">
                <div class="col-9">
                    <p class="text-white q-pt-sm text-body1">Do you want to <b class="text-subtitle2">whitelist</b> this?</p>
                    <p class="text-grey-5 text-body">
                        Whitelisting auto-signs identical contracts without having to re-approve.
                    </p>
                </div>
                <div class="col-3" align="right">
                    <q-toggle v-model="whiteLsit" dark />
                </div>
            </div>
            <!-- Actions -->
            <div class="center col-12 q-pa-xs q-pl-md  q-pr-md">
            <q-btn class="sign-btn full-width q-mt-sm"   label="Sign" @click="Sign()" />
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
export default class TransactionSign extends Vue{
    transactionTab:string="Overview"
    data:any={
        title:'BuyRAM',
        origin:'telos.blocks.io',
        payer:'mrg2195',
        quant:'100.00000',
        receiver:'mrg2195',
    };
    whiteLsit:boolean=false;
    Deny(){
    // TODO: close the pop up
    };
    Sign(){
    // TODO:add some service and action here 
    };
  
}
</script>

<style lang="scss" scoped>
.login-body{
  position: relative ;
  .login-box{
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
      width: 380px;
      border-radius: 20px;
      border: 1px solid #D9D9D9;
      text-align: center;
      .tab-panel {
            min-height: 340px;
            background-color:#171717 ;
      }
      .card-whitelist{
          text-align:left;
          direction:ltr;
      }
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
      .sign-btn{
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