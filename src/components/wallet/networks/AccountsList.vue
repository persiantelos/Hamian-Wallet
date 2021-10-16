<template>
  <div class="row col-12 full-height  bg-grey-9 account-list-body"> 
    <div class="full-height  full-width account-list-boxs-parent">
      <!-- BOX -->
      <div class="col-12 account-list-internal-box bg-grey-10 q-ma-md" v-for="(item , index) in data" :key="index">
        <div class="q-pa-xs q-ml-md q-mt-sm">
          <!-- TITLE -->
          <div class="row">
            <q-icon name="person" color="white" size="22px" class="q-ma-md" />
            <h3 class="text-white q-pa-none q-ma-none internal-titles cursor-pointer q-mt-xs">{{item.title}}</h3>
          </div>
          <!-- CONTENT -->
          <div class="col-12 q-ma-md" >
            <p class="text-white text-caption cursor-pointer">{{item.name}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';  
const remote = require('electron').remote;
@Component({ 
  components:{
  }
})
export default class AccountsList extends Vue{   
  data:any=[{name:'test',title:'title'},{name:'test',title:'title'},{name:'test',title:'title'},{name:'test',title:'title'}];
}
</script>
<style lang="scss" scoped>
.account-list-body{
  border-radius: 10px;
  .account-list-boxs-parent{
    min-height: 100vh;
    .account-list-internal-box{
      border-radius: 10px;
      .internal-titles{
        font-size: 22px;
      }
    }
  }

}
</style>
