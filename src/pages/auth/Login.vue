<template>
  <div class="col-12 login-body">
    <div class="center col-12">
      <!-- background -->
      <q-img src="../../assets/picture/login-bg.png"/>
      <div class="col-12 login-box ">
          <!-- title -->
        <div class=" center">
          <img class="icon" src="../../assets/picture/Shape.svg" />
          <h1 class="title">CaDas</h1>
        </div>
        <!-- login Box -->
        <div class="center">
          <div class="card q-pa-xs">
            <p class="card-title">Getting Started</p>
            <p class="card-sub-title">Create an account to continue!</p>
            <q-form class="q-pl-md q-pr-md q-pt-sm">
                <!-- email -->
                <q-input 
                dark
                class="q-ma-xs q-mt-sm input-border"  
                style="border: 1px solid white" 
                bg-color="grey-10" 
                color="white" 
                filled="#D9D9D9" 
                outlined 
                standout="bg-gray-10 text-white color-white"
                v-model="person.email" 
                label="Your Email" />
                <!-- name -->
                <q-input 
                dark
                class="q-ma-xs q-mt-sm input-border"  
                style="border: 1px solid white" 
                bg-color="grey-10" 
                filled="#D9D9D9" 
                outlined 
                standout="bg-gray-10 text-white"
                v-model="person.name" 
                label="Your Name" />
                <!-- password -->
                <q-input 
                dark
                class="q-ma-xs q-mt-sm input-border"  
                style="border: 1px solid white" 
                bg-color="grey-10" 
                filled="#D9D9D9" 
                outlined 
                standout="bg-gray-10 text-white"
                type="password"
                v-model="person.pasword" 
                label="Create Password" />
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
            <div class="center col-12 q-pa-sm q-pl-md q-pr-md">
              <q-btn class="register-btn full-width"   label="Register" />
            </div>
            <div class="col-12 center">
              <p class="text-gray q-pa-none q-ma-none">OR</p>
            </div>
            <div class="center col-12 q-pa-sm q-pl-md q-pr-md">
              <q-btn class="register-google-btn bg-color-gray-10 full-width" dir="rtl" text-color="white"  label="Continue with Google" flat >
                <template v-slot:default >
                  <q-img width="20px" class="q-ma-xs" src="../../assets/picture/logo-google.svg" />
                </template>
              </q-btn>
            </div>
            <!-- sign in  -->
            <div class="col-12 center">
              <p class="text-gray q-pa-none ">Allready have an account? <router-link class="router-link" to="">Sign in</router-link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue , Component} from "vue-property-decorator"
@Component({
    components:{

    }
})
export default class Login extends Vue{
  person:any={
    email:'',
    name:'',
    password:'',
  };
  rulesCondition:boolean=false;
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
      .text-gray{
        color:#8F92A1;
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