<template>
  <q-page class="row items-center justify-evenly">
    <p style="color:red">index3</p> 
    

    <Test/>
  </q-page>
</template>

<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import Test from './test.vue';
@Component({ 
  components:{
    Test:Test
  }
})
export default class IndexComponent extends Vue{ 
}
</script>
