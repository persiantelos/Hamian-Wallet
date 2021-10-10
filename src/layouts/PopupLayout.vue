<template>
  <q-layout view="lHh Lpr lFf">  
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">  
import { Component, Prop, Vue } from 'vue-property-decorator';  
@Component({ 
  name:'Authentication',
  components:{
     
  }
})
export default class PopupLayout extends Vue{
}
</script>
