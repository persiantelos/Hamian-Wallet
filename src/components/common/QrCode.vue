<template>
    <div class="col-12 center" align="center">
        <div id="qrcode-container" class="bg-grey-11" style="padding:0px">
            <canvas style="width:160px;height:160px;padding:0px;margin:0px" id="canvas"></canvas>
        </div>
    </div>
</template>
<script lang="ts">
    
import { Component, Prop, Vue } from 'vue-property-decorator';
import QRCode from 'qrcode'
@Component({
    components:{}
})
export default class Qrcode extends Vue{
    @Prop({default:()=>{return '';}}) value:string;
    mounted(){
        if (this.value != '') {
            QRCode.toCanvas(document.getElementById('canvas'), this.value, function (error:any) {
                if (error) console.error(error)
            console.log('success!');
            })
        }
    }
}
</script>