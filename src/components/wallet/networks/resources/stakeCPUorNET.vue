<template>
    <div class="col-12 row">
        <q-tabs v-model="stakeAndUnstakeTab" class="text-primary q-ml-sm" >
            <q-tab name="Stake"  label="Stake" />
            <q-tab name="Unstake" label="Unstake" />
            <q-tab name="Refound" label="Refound" />
        </q-tabs>
        <q-tab-panels
            v-model="stakeAndUnstakeTab"
            animated
            swipeable
            vertical
            transition-prev="jump-right"
            transition-next="jump-left" 
            class="bg-grey-10  text-white col-12"
        >
        <q-tab-panel name="Stake" >
            <div class="text-h6 q-mb-md">
                <p class="text-subtitle1 q-ml-xs">Receiver of Stake:</p>
                <q-input 
                    type="text"
                    dark
                    class="q-ma-xs q-mt-sm input-border"  
                    bg-color="grey-10" 
                    color="white" 
                    outlined 
                    standout="bg-gray-10 text-white color-white"
                    v-model="stakeCPUorNET.stakReciver" 
                />
            </div>
            <div class="text-h6 q-mb-md">
                <p class="text-subtitle1 q-ml-xs">Amount of CPU to Stake (in TLOS)</p>
                <q-input 
                    type="text"
                    dark
                    class="q-ma-xs q-mt-sm input-border"  
                    bg-color="grey-10" 
                    color="white" 
                    outlined 
                    standout="bg-gray-10 text-white color-white"
                    v-model="stakeCPUorNET.CPUAmountToStake" 
                />
                <div class="row">
                    <q-btn @click="calculateAmountCPUtoStakeTelos(25)" label="25%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                    <q-btn @click="calculateAmountCPUtoStakeTelos(50)" label="50%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                    <q-btn @click="calculateAmountCPUtoStakeTelos(75)" label="75%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                    <q-btn @click="calculateAmountCPUtoStakeTelos(100)" label="100%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                </div>
            </div>
            <div class="text-h6 q-mb-md">
                <p class="text-subtitle1 q-ml-xs">Amount of NET to Stake (in TLOS)</p>
                <q-input 
                    type="text"
                    dark
                    class="q-ma-xs q-mt-sm input-border"  
                    bg-color="grey-10" 
                    color="white" 
                    outlined 
                    standout="bg-gray-10 text-white color-white"
                    v-model="stakeCPUorNET.NETAmountToStake" 
                />
                <div class="row">
                    <q-btn @click="calculateAmountNettoStakeTelos(25)" label="25%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                    <q-btn @click="calculateAmountNettoStakeTelos(50)" label="50%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                    <q-btn @click="calculateAmountNettoStakeTelos(75)" label="75%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                    <q-btn @click="calculateAmountNettoStakeTelos(100)" label="100%" color="grey-9" outline class="text-grey-11 q-ma-xs" />
                </div>
            </div>
            <div align="center">
                <q-btn 
                size="20px"
                color="primary" 
                class="q-pa-xs"
                @click="Stake()"
                :label="'Stake ' + stakeCPUorNET.CPUAmountToStake + ' TELOS of CPU and ' + stakeCPUorNET.NETAmountToStake + ' TELOS of NET to ' + stakeCPUorNET.stakReciver" />
            </div>
        </q-tab-panel>
        <q-tab-panel name="Unstake" >
            <div class="col-12">
                Unstake
            </div>
        </q-tab-panel>
        <q-tab-panel name="Refound" >
            <div class="col-12">
                Refound
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
export default class StakeCPUorNET extends Vue{
    @Prop({default:()=>{return []}}) stakeCPUorNET:any;
    stakeAndUnstakeTab:string="Stake"

    calculateAmountCPUtoStakeTelos(data:any){
        // TODO:needs service
    }
    calculateAmountNettoStakeTelos(data:any){
        // TODO:needs service
    }
}
</script>