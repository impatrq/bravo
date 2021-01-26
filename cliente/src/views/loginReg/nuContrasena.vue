<template>
<ion-page>
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
        <ion-list-header class="text-size-20 ion-no-padding">Elija una nueva contraseña</ion-list-header>
      </div>
      <br>
      <ion-item class="ion-no-padding">
        <ion-label position="floating">Nueva contraseña</ion-label>
         <ion-input placeholder="Contraseña123" type="password" id="contra" v-model="contra" ionBlur="validarcontra()"></ion-input>
      </ion-item>
       <div class="text-size-12">
        <span v-if="!contra">(Requiere un mínimo de una mayúscula y un número)</span>
        <span v-if="altocontra" color="red"> Formato incorrecto </span>
        </div>
        <br>
      <ion-item class="ion-no-padding">
        <ion-label position="floating">Repita su contraseña</ion-label>
         <ion-input placeholder="Contraseña123"></ion-input>
      </ion-item>
      <br>
      <ion-button expand="block" routerLink="login" fill="solid" >Confirmar</ion-button>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow } from '@ionic/vue';
import { App, ref } from 'vue';

export default  {
  name: 'nCont',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
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