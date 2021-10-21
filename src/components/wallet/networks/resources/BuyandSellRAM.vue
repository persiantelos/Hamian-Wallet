<template>
    <div>
        <q-tabs v-model="ramTab" class="text-blue-11 q-ml-sm" >
            <q-tab name="buyRam"  label="Buy RAM" />
            <q-tab name="sellRam" label="Sell RAM" />
        </q-tabs>
        <q-tab-panels
        v-model="ramTab"
        animated
        swipeable
        vertical
        transition-prev="jump-right"
        transition-next="jump-left" 
        class="bg-grey-10  text-white"
        >
        <!-- Buy RAM -->
        <q-tab-panel name="buyRam" >
        <div class="text-h6 q-mb-md">RAM Receiver:
            <q-input 
            type="text"
            dark
            class="q-ma-xs q-mt-sm input-border"  
            bg-color="grey-10" 
            color="white" 
            outlined 
            standout="bg-gray-10 text-white color-white"
            v-model="buySellRAM.RAMRevicer" 
            />
        </div>
        <div class="text-h6 q-mb-md">Buy in TLOS or Bytes?
            <div class="row">
            <q-radio dark v-model="buySellRAM.buyWith" color="info" val="TELOS" label="TELOS" />
            <q-radio dark v-model="buySellRAM.buyWith" color="info" val="Bytes" label="Bytes" />
            </div>
        </div>
        <div class="text-h6 q-mb-md">Amount of RAM to Buy in TLOS
            <q-input 
            type="number"
            dark
            class="q-ma-xs q-mt-sm input-border"  
            bg-color="grey-10" 
            color="white" 
            outlined 
            standout="bg-gray-10 text-white color-white"
            v-model="buySellRAM.RAMBuyAmount" 
            placeholder="Amount of RAM to Buy in TLOS"
            /> 
            <p class="q-ml-md text-subtitle1">  
            ≈ {{buySellRAM.RAMConvertedToBytes}} Bytes
            </p>
        </div>
        <div align="center">
            <q-btn v-show="!buySellRAM.RAMBuyAmount" size="20px" color="primary" class="q-pa-xs" label="Buy RAM" />
            <q-btn 
            align="center"
            v-show="buySellRAM.RAMBuyAmount" 
            size="20px" 
            color="primary" 
            class="q-pa-xs" 
            @click="buyRam()"
            :label="'Buy ' + buySellRAM.RAMBuyAmount + ' ' + buySellRAM.buyWith + ' of RAM for ' + buySellRAM.RAMRevicer" />
        </div>
        
        </q-tab-panel>
        <!-- Sell RAM -->
        <q-tab-panel name="sellRam" >
        <div class="col-12 row text-white">
            <p class="text-h6">Bought:</p>
            <q-space></q-space>
            <!-- FIXME:needs service -->
            <p class="text-h6"> 25521 Bytes  ≈  0.9764 TLOS</p>
        </div>
        <div class="col-12 row text-white">
            <p class="text-h6">In Use:</p>
            <q-space></q-space>
            <!-- FIXME:needs service -->
            <p class="text-h6">  3124 Bytes  ≈  0.1195 TLOS</p>
        </div>
        <div class="col-12 row text-white">
            <p class="text-h6">Available:</p>
            <q-space></q-space>
            <!-- FIXME:needs service -->
            <p class="text-h6">  22397 Bytes  ≈  0.8569 TLOS</p>
        </div>
        <div>
            <div class="text-h6 q-mb-md">Amount of RAM to Sell (Bytes)
            <q-input 
                type="number"
                dark
                class="q-ma-xs q-mt-sm input-border"  
                bg-color="grey-10" 
                color="white" 
                outlined 
                standout="bg-gray-10 text-white color-white"
                v-model="buySellRAM.RAMSellAmount" 
                placeholder="Amount of RAM to Buy in TLOS"
            /> 
            <div class="row">
                <q-btn @click="calculateSellRAMAmount(25)" label="25%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                <q-btn @click="calculateSellRAMAmount(50)" label="50%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                <q-btn @click="calculateSellRAMAmount(75)" label="75%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                <q-btn @click="calculateSellRAMAmount(100)" label="100%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
            </div>
            <div class="col-12">
                <p class="text-white">Selling {{buySellRAM.RAMSellAmount}} Bytes for {{buySellRAM.TELOSCustAmount}} TLOS</p>
            </div>
            <div align="center" >
            <q-btn 
                size="20px"
                color="primary" 
                class="q-pa-xs"
                @click="sellRAM()"
                label="Sell RAM" />
            </div>
            </div>
        </div>

        </q-tab-panel>
    </q-tab-panels>
    </div>
</template>
<script lang="ts">
import {Vue , Component , Prop} from 'vue-property-decorator';
@Component({
    components:{

    }
})
export default class BuyandSellRAM extends Vue{
    @Prop({default:()=>{return []}}) buySellRAM:any
    ramTab:string='buyRam'
    
    calculateSellRAMAmount(amount:number){
        // TODO:calculate amount of RAM to Sell
    }
    buyRam(){
        // FIXME:needs service
    }
    sellRAM(){
        // FIXME:needs service

    }
}
</script>