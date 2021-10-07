<template>
    <div>
        <q-dialog align="left"  class="col-12" v-model="value" @input="hide" persistent>
            <q-card class="q-ma-md">
                <q-card-section align="right" class="row">
                    <div class="text-subtitle2 q-pl-sm row">
                        <q-icon :name="icon" :color="acceptColor" />
                        <p>{{title}}</p>
                    </div>
                    <q-space></q-space>
                    <div>
                        <q-btn @click="accept" icon="close" flat round dense v-close-popup />
                    </div>
                </q-card-section>
                <q-card-section  class="q-pa-md">
                    <p class="text-body2 q-pl-sm">{{description}}</p>
                </q-card-section>
                 <q-card-section  class="row col-12 row">
                     <div class="col-12">
                        <q-btn label="reject" @click="reject" :color="rejectColor" outline flat />
                        <q-btn label="accept" @click="accept" :color="acceptColor" />
                     </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
</template>
<script lang="ts">
import {Vue , Component , Prop} from 'vue-property-decorator';
@Component({
    components:{

    }
})
export default class Confirm extends Vue{
    @Prop({default:false })  value!:boolean;
    @Prop({default:'' })  title!:string;
    @Prop({default:'error_outline' })  icon!:string;
    @Prop({default:'ACCEPT' })  acceptTitle!:string;
    @Prop({default:'REJECT' })  rejectTitle!:string;
    @Prop({default:'' })  description!:string;
    @Prop({default:'primary' })  acceptColor!:string;
    @Prop({default:'red' })  rejectColor!:string;

    mounted(){
        console.log('test')
    }
    accept(){
        this.$emit('accept');
    }

    reject(){
        this.$emit('reject');
    }
    hide(data:any)
    {
        this.$emit('input',data)
    }
}
</script>