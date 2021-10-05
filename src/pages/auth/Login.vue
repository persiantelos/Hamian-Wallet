<template>
  <div class="col-12 login-body">
    <div class="center col-12">
      <!-- background -->
      <q-img src="../../assets/picture/login-bg.png"/>
      <div class="col-12 login-box ">
          <!-- title -->
        <div class=" center q-mb-lg">
          <img class="icon" src="../../assets/picture/Shape.svg" />
          <h1 class="title">Hamian</h1>
        </div>
        <!-- login Box -->
        <div class="center ">
          <div class="card q-pa-xs q-pt-lg q-pb-lg">
            <p class="card-title">Login</p>
            <p class="card-sub-title">Enter your password to login to your account!</p>
            <q-form class="q-pl-md q-pr-md q-pt-sm">
                <!-- password -->
                <q-input 
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
            </q-form>
            <!-- login -->
            <div class="center col-12 q-pa-md q-pl-md q-mt-md q-pr-md">
              <q-btn class="register-btn full-width"   label="login" />
            </div>
            <!-- sign in  -->
            <div class="center " align="center">
              <p class="text-gray q-mt-sm ">Don't have an account?  
                  <router-link class="router-link " :to="{name:'CreateAccount'}">Create an account.</router-link> 
              </p>
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
    password:'',
    confirmPassword:'',
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
    }
  }
}

</style>