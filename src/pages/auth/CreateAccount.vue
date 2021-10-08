<template>
  <div class="col-12 login-body">
    <div class="center col-12">
      <!-- background -->
      <q-img src="../../assets/picture/login-bg.png"/>
      <div class="col-12 login-box ">
          <!-- title -->
        <div class=" center">
          <img class="icon" src="../../assets/picture/hamian.svg" />
          <h1 class="title">Hamian</h1>
        </div>
        <!-- login Box -->
        <div class="center">
          <div class="card q-pa-xs q-pt-lg q-pb-lg">
            <p class="card-title">Getting Started</p>
            <p class="card-sub-title">Create an account to continue!</p>
            <q-form class="q-pl-md q-pr-md q-pt-sm">
                <!-- password -->
                <q-input 
                type="password"
                dark
                class="q-ma-xs q-mt-sm input-border"  
                style="border: 1px solid white" 
                bg-color="grey-10" 
                color="white" 
                outlined 
                standout="bg-gray-10 text-white color-white"
                v-model="person.password" 
                label="Password" />
                <!-- confirm password -->
                <q-input 
                type="password"
                dark
                class="q-ma-xs q-mt-sm input-border"  
                style="border: 1px solid white" 
                bg-color="grey-10" 
                outlined 
                standout="bg-gray-10 text-white"
                v-model="person.confirmPassword" 
                label="Confirm your Password" />
            </q-form>
            <!-- password validate -->
            <div class="password-strong center">
              <div class="q-pa-md row">
                <span class="q-mr-sm q-ml-sm fill"></span>
                <span class="q-mr-sm q-ml-sm fill"></span>
                <span class="q-mr-sm q-ml-sm fill"></span>
                <span class="q-mr-sm q-ml-sm fill"></span>
                <span class="q-mr-sm q-ml-sm fill"></span>
                <span class="q-mr-sm q-ml-sm fill"></span>
              </div>
            </div>
            <!-- conditions -->
            <div class="team-conditions-box q-pl-md" align="left">
              <q-checkbox color="white" dark v-model="rulesCondition" label="By creating an account, you agree to our"/><br/>
              <router-link class="q-pl-lg q-ml-md router-link" to="condotionpage">
                Team and Conditions
                </router-link>
            </div>
            <!-- register -->
            <div class="center col-12 q-pa-md q-pl-md q-pr-md">
              <q-btn class="register-btn full-width"   label="Login" @click="createAccount" />
            </div>
            <!-- sign in  -->
            <!-- <div class="col-12 center">
              <p class="text-gray q-pa-none ">Allready have an account? <router-link class="router-link" :to="{name:'Login'}">Sign in</router-link> </p>
            </div> -->
            <div class="col-12 center">
               <router-link class="router-link text-gray q-pa-none" :to="{name:'loginwithfile'}">Try another way to Create account</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import StorageService from "src/localService/storageService";
import {Vue , Component} from "vue-property-decorator"
@Component({
    components:{

    }
})
export default class Login extends Vue{
  person ={
    password:'',
    confirmPassword:'',
  };
  rulesCondition:boolean=false;
  async createAccount()
  {
    var success=await StorageService.initData(this.person.password,'');
    console.log('success:',success)
  }
}
</script>

<style lang="scss" scoped>
.login-body{
  position: relative ;
  .login-box{
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    .icon{
      width: 30px;
      height: 30px;
    }
    .title{
      font-size: 20px;
      font-weight:500 ;
      color: $white;
    }
    .card{
      background-color:#171717 ;
      width: 360px;
      border-radius: 20px;
      border: 1px solid #D9D9D9;
      text-align: center;
      .card-title{
        color:$white;
        font-size: 20px;
        font-weight:200 ;
      }
      .card-sub-title{
        color:#8F92A1;
        font-size: 12px;
      }
      .input-border{
        border: 1px wolid $white;
      }
      .password-strong{
        .fill{
          background-color: $gray-10;
          min-height: 4px;
          border-radius: 1px;
          min-width: 36px;
        }
      }
      .team-conditions-box{
        color: $white;
        font-weight: 120;
      }
      .router-link{
        font-weight: 300 !important;
      }
      .register-btn{
        background-color: #0052cc;
        color:$white;
        font-weight: 300;
        border-radius: 25px;
        padding: 5px;
      }
      .register-google-btn{
        background-color: #242424;
        font-weight: 300;
        border-radius: 25px;
        padding: 5px;
      }
    }
    
  }
}

</style>