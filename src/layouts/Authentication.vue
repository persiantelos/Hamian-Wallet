<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar-title>
          Authentication login
          <br />
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
    </q-header>

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
export default class Authentication extends Vue{
}
</script>
