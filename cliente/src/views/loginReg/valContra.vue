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
      <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
      <ion-card class="ion-padding">

      <ion-list>
        <div class="ion-no-padding">
          <ion-list-header class="text-size-20 ion-no-padding">Registro</ion-list-header>
          <ion-label>Paso 3: Cree su contraseña</ion-label>
        </div>
        <br>        
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Nueva contraseña</ion-label>
          <ion-input type="password" id="contra" v-model="contra" ionBlur="validarcontra()"></ion-input>
        </ion-item>
        <div class="text-size-12">
          <span v-if="!contra">(La contraseña requiere un mínimo de una mayúscula y un número)</span>
          <span v-if="altocontra" color="red"> Formato incorrecto </span>
        </div>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Repita su contraseña</ion-label>
          <ion-input type="password" id="contra" v-model="contra" ionBlur="validarcontra()"></ion-input>
        </ion-item>
          <span v-if="!contra">Repita contraseña</span>
          <span v-if="altocontra" color="red"> Formato incorrecto </span>
        <br>
        <ion-button expand="block" routerLink="#" fill="outline" >Confirmar</ion-button>
        <br>
        <router-link to="/login" class="text-size-12">¿Ya tiene una cuenta? Inicie sesión aquí.</router-link>            
        
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
.padding-top-20{
  padding-top: 20px;
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { App, ref } from 'vue';

export default  {
  name: 'valCont',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
  setup() {
    const contra = ref("")
    const altocontra = ref(false)
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
}
</script>