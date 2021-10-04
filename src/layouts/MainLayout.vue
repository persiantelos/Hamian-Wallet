<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>
 
      </q-list>
    </q-drawer>

    <q-page-container>
      {{data}}
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">  
import SocketService from 'src/localService/socketService';
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginRequest from 'src/models/local/loginRequest'  
@Component({ 
  name:'MainLayout',
  components:{
     
  }
})
export default class MainLayout extends Vue{
  leftDrawerOpen:boolean=false; 
  eventid:string="";
  toggleLeftDrawer()
  {
    this.leftDrawerOpen=!this.leftDrawerOpen 
  }
}
</script>
