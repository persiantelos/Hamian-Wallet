<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import electron from 'electron';
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import Config from './common/config';
import SocketService from './localService/socketService';
const BrowserWindow = electron.remote.BrowserWindow;
@Component({ 
  components:{
  }
})
export default class APP extends Vue{ 
   mounted() {
    //  let mainWindow = new BrowserWindow( {
    //       width: 400,
    //       height: 300,
    //       webPreferences: {
    //           nodeIntegration: true
    //       },
    //   });
      console.log('------------->')
      Config.soket=new SocketService(); 
   }
}
</script>
