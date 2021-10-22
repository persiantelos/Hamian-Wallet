<template>
  <div class="row col-12 full-height  bg-grey-9 account-list-body"> 
    <p style="display:none">{{counter}}</p>
    <div class="full-height  full-width account-list-boxs-parent">
      <!-- account list -->
      <div v-show="value == 'accountList'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
          
          <div class="row" v-for="(account , index) in data.accountList" :key="index">
            <img v-if="account.name" class="q-mr-md q-mt-xs user-icon"  src="../../../assets/picture/acc-user.svg" >
            <h3 v-if="account.name" class="text-white q-pa-none q-ma-none internal-titles cursor-pointer q-mt-xs">{{account.name}}</h3>
          <div class="row col-12 text-white">
            <p>Public Key: <span class="q-ml-md">{{account.publicKey}}</span> </p>
            <p class="q-ml-md">TELOS:<span class="q-ml-md">{{account}}</span></p>
            <p class="q-ml-md">DARIC:<span class="q-ml-md">{{account}}</span></p>
          </div>
          </div>
          
        </div>
      </div>
      <!-- Resources -->
      <div v-show="(value == 'resources') || value == 'buySellRAM' || value == 'stakeCpuNet'"
       class="col-12 account-list-internal-box  q-ma-md" >
        <div class="q-pa-xs q-ma-xs q-mt-sm" >
          <!-- Information -->
          <div class="col-12 account-list-internal-box bg-grey-9 q-ma-md">
            <div class="text-h6 text-white q-ml-sm q-mb-md">Resources</div> 
            <!-- Resources -->
            <div class="row col-12">
              <div class="col resource-box text-center bg-grey-10 q-ma-xs q-pa-md">
                <div class="text-white">
                  <!-- RAM -->
                  <p class="text-subtitle2">RAM</p>
                  <q-circular-progress
                    show-value
                    font-size="12px"
                    :value="resource.ram.used"
                    size="70px"
                    :thickness="0.22"
                    color="info"
                    track-color="grey-14"
                  >
                    {{ resource.ram.used }}%
                  </q-circular-progress>
                  <p class="q-ma-xs q-mt-sm text-subtitle1 text-info">Total: {{resource.ram.total}} KB</p>

                </div>
              </div>
              <div class="col resource-box text-center bg-grey-10 q-ma-xs q-pa-md">
                <div class="text-white">
                  <!-- CPU -->
                  <p class="text-subtitle2">CPU</p>
                  <q-circular-progress
                    show-value
                    font-size="12px"
                    :value="resource.cpu.used"
                    size="70px"
                    :thickness="0.22"
                    color="primary"
                    track-color="grey-14"
                  >
                    {{ resource.cpu.used }} %
                  </q-circular-progress>
                  <p class="q-ma-xs q-mt-sm text-subtitle1 text-primary">Total: {{resource.cpu.total}} ms</p>

                </div>
              </div>
              <div class="col resource-box text-center bg-grey-10 q-ma-xs q-pa-md">
                <div class="text-white">
                  <!-- NET -->
                  <p class="text-subtitle2">NET</p>
                  <q-circular-progress
                    show-value
                    font-size="12px"
                    :value="resource.net.used"
                    size="70px"
                    :thickness="0.22"
                    color="green-8"
                    track-color="grey-14"
                  >
                    {{ resource.net.used }} %
                  </q-circular-progress>
                  <p class="q-ma-xs q-mt-sm text-subtitle1 text-green-8">Total: {{resource.net.total}} KB</p>

                </div>
              </div>
            </div>
            <!-- Resource information -->
            <div v-show="value == 'resources'" class="col-12 account-list-internal-box  bg-grey-10 q-ma-xs">
              <div class="text-h6 text-white row">
                <p class="text-subtitle1 q-ma-xs q-pt-sm">Available:</p>
                <q-space></q-space>
                <p class="text-subtitle1 q-ma-xs q-mr-md">{{resourcesInfo.available}}</p>
              </div>
              <q-separator class="bg-grey-14" />
              <div class="text-h6 text-white row">
                <p class="text-subtitle1 q-ma-xs q-pt-sm">Refunding:</p>
                <q-space></q-space>
                <p class="text-subtitle1 q-ma-xs q-mr-md">{{resourcesInfo.refunding}}</p>
              </div>
              <q-separator class="bg-grey-14" />
              <div class="text-h6 text-white row">
                <p class="text-subtitle1 q-ma-xs q-pt-sm">CPU Staked:</p>
                <q-space></q-space>
                <p class="text-subtitle1 q-ma-xs q-mr-md">{{resourcesInfo.CPUStaked}}</p>
              </div>
              <q-separator class="bg-grey-14" />
              <div class="text-h6 text-white row">
                <p class="text-subtitle1 q-ma-xs q-pt-sm">NET Staked:</p>
                <q-space></q-space>
                <p class="text-subtitle1 q-ma-xs q-mr-md">{{resourcesInfo.NetStaked}}</p>
              </div>
              <q-separator class="bg-grey-14" />
              <div class="text-h6 text-white row">
                <p class="text-subtitle1 q-ma-xs q-pt-sm">Staked by Others:</p>
                <q-space></q-space>
                <p class="text-subtitle1 q-ma-xs q-mr-md">{{resourcesInfo.stakedbyOthers}}</p>
              </div>
              <q-separator class="bg-grey-14" />
              <div class="text-h6 text-white row">
                <p class="text-subtitle1 q-ma-xs q-pt-sm">TotalREX:</p>
                <q-space></q-space>
                <p class="text-subtitle1 q-ma-xs q-mr-md">{{resourcesInfo.totalREX}}</p>
              </div>
              <q-separator class="bg-grey-14" />
            </div>
            <!-- Buy / Sell RAM -->
            <div v-show="value == 'buySellRAM'" class="col-12 account-list-internal-box  bg-grey-10 q-ma-xs">
              <BuyandSellRAM :buySellRAM="buySellRAM" />
            </div>

          </div>
            <!-- Stake CPU/NET -->
            <div v-show="value == 'stakeCpuNet'" class="col-12 account-list-internal-box  bg-grey-10 q-ma-xs">
              <StakeCPUorNET :stakeCPUorNET="stakeCPUorNET" :unStakeCPUorNET="unStakeCPUorNET" />
            </div>
          </div>
        </div>
      <!-- Tokens -->
      <div v-show="value == 'tokens'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
          tokens
      </div>
      <!-- Transfer Token -->
      <div v-show="value == 'transferToken'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
          
          <q-tabs v-model="tokenTab" class="text-blue-11">
            <q-tab name="token"  label="Transfer Token" />
            <q-tab name="nft" label="Transfer NFTs" />
          </q-tabs>
          <div class="col-12 text-white q-ml-md q-mt-md">
            <div class="text-h6 q-mb-md">Send To: <q-icon name="info" color="blue-14" /> 
              <q-input 
                type="text"
                dark
                class="q-ma-xs q-mt-sm input-border q-mr-md"  
                bg-color="grey-10" 
                color="white" 
                outlined 
                standout="bg-gray-10 text-white color-white"
                v-model="transferToken.sendTo" 
                label="Username to recived tokens" />

            </div>
          </div>
          <q-tab-panels
            v-model="tokenTab"
            animated
            swipeable
            vertical
            transition-prev="jump-right"
            transition-next="jump-left" 
            class="bg-grey-10 text-white"
          >
          <!-- transfer token -->
          <q-tab-panel name="token" >
            <div class="col-12 text-white q-mt-xs">
            <div class="text-h6 q-mb-md">Amount:
              <q-input 
                type="number"
                dark
                class="q-ma-xs q-mt-sm input-border"  
                bg-color="grey-10" 
                color="white" 
                outlined 
                standout="bg-gray-10 text-white color-white"
                v-model="transferToken.amount" 
                 >
                 <template v-slot:append  >
                  <q-btn-dropdown color="primary" :label="transferToken.customToken.title">
                    <q-list class="bg-grey-10 text-white" >
                      <q-item clickable v-close-popup @click="onItemClick(token)" v-for="(token,index) in tokenList" :key="index" >
                        <q-item-section align="center" >
                          <q-item-label>{{token.title}}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                 </template>
              </q-input>
              <div class="row col-12">
                <p class="text-blue-11 q-ml-xs  cursor-pointer" @click="sendEntireBalance()">Send entire balance</p>
                <q-space></q-space>
                <p class="text-blue-11 q-ml-xs q-mr-xs  cursor-pointer" @click="showCustomToken = true">Use custom token</p>
              </div>
              <div v-if="showCustomToken">
                <div class="col-12 row">
                  <div class="col-6">
                    <div class="text-h6 q-mb-md">Symbol:
                      <q-input 
                        type="text"
                        dark
                        class="q-ma-xs q-mt-sm input-border"  
                        bg-color="grey-10" 
                        color="white" 
                        outlined 
                        standout="bg-gray-10 text-white color-white"
                        v-model="transferToken.symbol" 
                        />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="text-h6 q-mb-md">Contract:
                      <q-input 
                        type="text"
                        dark
                        class="q-ma-xs q-mt-sm input-border"  
                        bg-color="grey-10" 
                        color="white" 
                        outlined 
                        standout="bg-gray-10 text-white color-white"
                        v-model="transferToken.contract" 
                        />
                    </div>
                  </div>
                  <div class="col-12 row" align="left">
                    <p class="text-blue-11 q-ml-xs q-mr-xs cursor-pointer" @click="showCustomToken = !showCustomToken">
                      Don't use custom token / contract  
                    </p>
                  </div>
                  
                </div>
              </div>
                
            </div>
            <div class="text-h6 q-mb-md">Memo (optional):
              <q-input 
                type="text"
                dark
                class="q-ma-xs q-mt-sm input-border"  
                bg-color="grey-10" 
                color="white" 
                outlined 
                standout="bg-gray-10 text-white color-white"
                v-model="transferToken.memo" 
                label="Memo"
                 />
            </div>
          </div>
          <div align="center">
            <q-btn size="20px" color="primary" class="q-pa-xs" :label="'Teransfer ' + transferToken.amount + ' Telos'" />
          </div>
          </q-tab-panel>
          <!-- transfer nft -->
          <q-tab-panel name="nft" class="col-12">
            <div class="text-h6 q-mb-md">NFT</div>
            <q-btn-dropdown dropdown-icon="ion" color="primary" class="col-12 full-width " align="left" :label="selectedNFTs">
              <q-list class="bg-grey-10" dark>
                <q-item clickable v-close-popup @click="selectNft(nft)" v-for="(nft,index) in nftList" :key="index">
                  <q-item-section>
                    <q-item-label>{{nft.title}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-tab-panel>
        </q-tab-panels>

        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue ,Watch} from 'vue-property-decorator';  
import WalletService from 'src/localService/walletService';
import AccountService from 'src/services/accountService';
import BuyandSellRAM from 'src/components/wallet/networks/resources/BuyandSellRAM.vue'
import StakeCPUorNET from 'src/components/wallet/networks/resources/stakeCPUorNET.vue'


const remote = require('electron').remote;
@Component({ 
  components:{
    BuyandSellRAM,
    StakeCPUorNET
  }
})
export default class AccountsList extends Vue{ 
  @Prop({default:() =>{return []}}) value:any;
  counter:number=0;
  showCustomToken:boolean=false;
  tokenTab:string='token'
  buyWith:string='TELOS'
  selectedNFTs:any=[];
  stakeCPUorNET:any={
    stakReciver:'mohamamd',
    CPUAmountToStake:0,
    NETAmountToStake:0,
  };
  unStakeCPUorNET:any={
    accountHoldStake:[
        'mohammad','vahid','reza'
    ],
    selectedAccountForUnStake:'',
    amountCPUUnstake:0,
    amountNETUnstake:0,

  }
  buySellRAM:any={
    RAMBuyAmount:0,
    RAMConvertedToBytes:0,
    RAMSellAmount:0,
    TELOSCustAmount:0,
    showCustomToken:false,
  }
  tokenList:any=[]
  RAMRevicer:string=''
  nftList:any=[
    {title:'test1'},
    {title:'test2'},
  ]
  transferToken:any={
    customToken:'',
    amount:0,
    sendTo:'',
    memo:'',
    symbol:'',
    contract:'',
  }
  data:any={
    accountList:[],
    resources:[],
    tokens:[],
    transferToken:[],
  };
  resource:any={
    ram:{used:30.25,total:'24.92'},
    cpu:{used:55.50,total:' 5.07'},
    net:{used:20,total:'34.5'},
  }
  resourcesInfo:any={
    available:'2 TLOS',
    refunding:'0 TLOS',
    CPUStaked:'0.0000 TLOS',
    NetStaked:'0.0000 TLOS',
    totalREX:'0.002 TLOS',
    stakedbyOthers:'0.0000 TLOS',
  }
  mounted(){
    this.selectedNFTs = 'SelectNFT';
    
  }
  @Watch('value')
  valueChanged(newValue:any){
    console.log('new Value',newValue);
    
    if(newValue == 'accountList'){
      this.getAccounts();
    }
    else if(newValue == 'resources'){
      this.getResources();
    }
    else if(newValue == 'buySellRAM'){
      this.getResources();
      this.counter++
    }
    else if(newValue == 'stakeCpuNet'){
      this.getResources();
      this.counter++
    }
    else if(newValue == 'tokens'){
      // this.tokens =
      // this.getTokens();
    }
    else if(newValue == 'transferToken'){
      this.counter++
      // this.transferToken =
      // this.getTransferToken();
    }
  }
  selectNft(nft:any){
    this.selectedNFTs = nft.title;
  }
  async getResources(){
    this.data.resources = await AccountService.getAccount(this.$route.params.chainId)
    this.counter++;
  }
  async getAccounts(){
    this.data.accountList = await WalletService.getAccounts();
    this.counter++;
  }
  sendEntireBalance(){}
  
  onItemClick(token:any){
    this.transferToken.customToken = token;
    console.log(this.transferToken.customToken);
    
  }
  
  

}
</script>
<style lang="scss" scoped>
.account-list-body{
  border-radius: 10px;
  .account-list-boxs-parent{
    min-height: 85vh;
    .account-list-internal-box{
      border-radius: 10px;
      .internal-titles{
        font-size: 22px;
      }
      .user-icon{
        width: 30px;
      }
    }
  }

}
.resource-box{
  width:150px;
  height:200px;
  border-radius:20px
}
</style>
