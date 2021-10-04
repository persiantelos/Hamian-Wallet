<template>
  <div id="q-app">dd
    <router-view />
  </div>
</template>
<script lang="ts"> 
import { Component, Prop, Vue } from 'vue-property-decorator';  

const {remote, ipcRenderer} = window.require('electron');
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
      // console.log('------------->',global['test'])
      //Config.soket=new SocketService(); 
   }
}
</script>
