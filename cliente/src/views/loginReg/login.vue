<template>
<ion-page>
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
          <ion-input type="password" id="contra" v-model="contra" ionBlur="validarcontra()"></ion-input>
        </ion-item>
        <div class="text-size-12">
          <span v-if="!contra">(La contraseña requiere un mínimo de una mayúscula y un número)</span>
          <span v-if="altocontra" color="red"> Formato incorrecto </span>
        </div>
        <br>
        <ion-button expand="block" fill="outline">INICIAR SESIÓN</ion-button>
        <br>
        <router-link to="/oCont" class="text-size-12">¿Olvidó su contraseña?</router-link>
        <br>
        <router-link to="/cargosReg" class="text-size-12">¿No tiene cuenta? Registrese aquí.</router-link>
      </ion-list>
    </ion-card>

  </ion-col>
  </ion-row> 
      
</ion-content>
</ion-page>
</template>

<style>
.text-size-12{
  font-size:12px;
  text-decoration: none;
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
  setup() {
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
      
      const mayus = /[A-Z]/g;
      const validacion2 = contra.value.match (mayus);
      
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

}
</script>