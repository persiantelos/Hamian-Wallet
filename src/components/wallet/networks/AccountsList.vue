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
      <div v-show="value == 'resources'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
          
          <!-- <div class="row" v-for="(account , index) in data.resources" :key="index">
            <q-icon name="person" color="white" size="22px" class="q-ma-md" />
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer q-mt-xs">{{account.name}}</h3>
          </div> -->
          <!-- CONTENT -->
          <!-- <div class="col-12 q-ma-md" > -->
            <!-- <p class="text-white text-caption cursor-pointer">{{account.name}}</p> -->
          <!-- </div> -->
        </div>
      </div>
      <!-- Tokens -->
      <div v-show="value == 'tokens'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
        
          <div class="row" v-for="(account , index) in data.tokens" :key="index">
            <q-icon name="person" color="white" size="22px" class="q-ma-md" />
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer q-mt-xs">{{account.name}}</h3>
          </div>
        
        </div>
      </div>
      <!-- Transfer Token -->
      <div v-show="value == 'transferToken'" class="col-12 account-list-internal-box bg-grey-10 q-ma-md" >
        <div class="q-pa-xs q-ml-md q-mt-sm" >
          
          <q-tabs v-model="tab" class="text-blue-11">
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
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-right"
            transition-next="jump-left" 
            class="bg-grey-10 text-white"
          >
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


const remote = require('electron').remote;
@Component({ 
  components:{
  }
})
export default class AccountsList extends Vue{ 
  @Prop({default:() =>{return []}}) value:any;
  counter:number=0;
  tab:string='token'
  selectedNFTs:any=[];
  showCustomToken:boolean=false;
  tokenList:any=[]
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
  mounted(){
    this.selectedNFTs = 'SelectNFT';
    
  }
  @Watch('value')
  valueChanged(newValue:any){
    if(newValue == 'accountList'){
      this.getAccounts();
    }
    else if(newValue == 'resources'){
      this.getResources();
    }
    else if(newValue == 'tokens'){
      // this.tokens =
      // this.getTokens();
    }
    else if(newValue == 'transferToken'){
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
</style>
