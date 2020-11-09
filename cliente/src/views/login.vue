<template>
  <ion-page>
    <!--ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header-->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-row class="ion-justify-content-center fullheight">
      <ion-col size-xl="6" size-sm="10" class="ion-align-self-center">
      <ion-card class="ion-padding">

      <ion-list>
        <div class="ion-text-uppercase ion-no-padding">
          <ion-list-header class="text-size-20 ion-text-justify">Iniciar sesión</ion-list-header>
        </div>
        <br>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Correo Electronico</ion-label>
          <ion-input type="text" id="email" v-model="email" ionBlur="validaremail()"></ion-input>
        </ion-item>
        <div class="text-size-12">
          <span v-if="altoemail" color="red"> Formato incorrecto </span>
          <span v-if="!email">Ej.: minombre@gmail.com</span>
        </div>
        <br>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Contraseña</ion-label>
          <ion-input type="password" id="contra" v-model="contra" @ionBlur="validarcontra(contra)"></ion-input>
        </ion-item>
        <div class="text-size-12">
          <span v-if="!contra">(La contraseña requiere un mínimo de una mayúscula y un número)</span>
          <span v-if="altocontra" color="red"> Formato incorrecto </span>
        </div>
        <br>
        <ion-button expand="block" fill="outline">INICIAR SESIÓN</ion-button>
        <br>
        <ion-router-link href="/tabs/oCont" class="text-size-12">¿Olvidó su contraseña?</ion-router-link>
        <br>
        <ion-router-link href="tabs/cargosReg" class="text-size-12">¿No tiene cuenta? Registrese aquí.</ion-router-link>
        
      </ion-list>

      </ion-card>
      </ion-col>
      </ion-row> 

      <!--div id="app" class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns"> 
            <div class="column is-full is-4-desktop is-offset-4-desktop">
              <h1 class="title">Iniciar Sesión</h1>
              <form>
                <div id="app">
                  <div class="field">   
                    <div class="control is-hero-fullscreen">
                      <ion-input type="text" id="email" v-model="email" @blur="validaremail" placeholder="Correo Electronico" class="input is-danger"></ion-input>
                      <span v-if="altoemail" color="red"> Formato incorrecto </span>
                      <span v-if="!email">Ej.: minombre@gmail.com</span>
                      <p class="help is-danger">Ingrese Un Correo Electronico</p>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <ion-input type="password" placeholder="Contraseña" id="contra" v-model="contra" @blur="validarcontra" class="input is-success"></ion-input>
                      <span v-if="!contra">(La contraseña requiere un mínimo de una mayúscula y un número)</span>
                      <span v-if="altocontra" color="red"> Formato incorrecto </span>
                      <p class="help is-success"></p>
                    </div>
                  </div>
                  <p class="help is-danger"></p>
                </div>
                <div class="field">
                  <div class="control">
                    <ion-button expand="block" >INICIAR SESIÓN</ion-button>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <a href="olContraseña.html">¿Olvidó su contraseña?</a><br>
                    <a href="registroCargo.html">¿No tiene cuenta? Registrese aquí.</a>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div-->
      <!--ExploreContainer name="tab login" /-->
    </ion-content>
  </ion-page>
</template>

<style>
.text-size-12{
  font-size:12px;
}
.text-size-20{
  font-size:20px;
}
.fullheight{
  height: 100%; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow} from '@ionic/vue';
import { App, ref } from 'vue';

export default  {
  name: 'login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonListHeader, IonButton, IonCol, IonRow},
  setup() { //FALTA VINCULARLO CON EL TEMPLATE
    const email = ref("")
    const altoemail = ref(false)
    const contra = ref("")
    const altocontra = ref(false)
    const validaremail = ()=> {
      const arroba = email.value.includes("@");
      const punto = email.value.includes(".");
      console.log(arroba, punto);
      altoemail.value = (!arroba || !punto) ? true: false;
      return {
        email,
        altoemail,
        validaremail,
      }
    }
    const validarcontra = ()=>{
      const num =  /[0-9]/g;
      const validacion = contra.value.match (num);
      //console.log ("validacion", validacion);
      //console.log (num);
      const mayus = /[A-Z]/g;
      const validacion2 = contra.value.match (mayus);
      //console.log ("validacion2", validacion2);
      const min = /[a-z]/g;
      const validacion3 = contra.value.match (min);
      if(validacion === null || validacion2 === null || validacion3 === null){
          altocontra.value = true;
      }
      else{
          altocontra.value = false;
      }
      return {
        contra,
        altocontra,
        validarcontra,
      }
    }
  },
  data(){
    return{
      contra: "",
      altoemail: "",
      altocontra: "",
      usuario: {},
      nombre: "",
      apellido: "",
      dni: "",
      matricula: "",
      email2: "",
    }
  },
  methods: {
    validaremail: function(this: any, email: string){
      const arroba = this.email.includes("@");
      const punto = this.email.includes(".");
      console.log(arroba, punto);
      this.altoemail = (!arroba || !punto) ? true: false;
    }
  }
}
</script>