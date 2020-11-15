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
        <ion-list-header class="text-size-20 ion-no-padding">¿Olvidó su contraseña?</ion-list-header>
      </div>
      <br>
      <ion-item class="ion-no-padding">
        <ion-label position="floating">Email</ion-label>
        <ion-input type="text" id="email" v-model="email" ionBlur="validaremail()"></ion-input>
      </ion-item>
      <div class="text-size-12">
        <span v-if="altoemail" color="red"> Formato incorrecto </span>
        <span v-if="!email">Ej.: minombre@gmail.com</span>
      </div>
      <br>
      <ion-button expand="block" routerLink="ncont" fill="outline" >Enviar Email</ion-button>
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
import ExploreContainer from '@/components/ExploreContainer.vue';
import { App, ref } from 'vue';

export default  {
  name: 'oCont',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
  setup() { //FALTA VINCULARLO CON EL TEMPLATE
    const email = ref("")
    const altoemail = ref(false)
    const validaremail = ()=> {
      const arroba = email.value.includes("@");
      const punto = email.value.includes(".");
      //console.log(arroba, punto);
      altoemail.value = (!arroba || !punto) ? true: false;
      return {
        email,
        altoemail,
        validaremail,
      }
    }

  }
}
</script>