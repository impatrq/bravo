<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title class="ion-text-center" color="light">Chat</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row class="ion-justify-content-center fullheight">
        <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
          <ion-searchbar placeholder="Buscar"></ion-searchbar>
          <ion-list>
            <ion-item>
              <ion-avatar slot="start">
                <img src="@/components/img/person-circle-sharp.svg" color="light">
              </ion-avatar>
              <ion-label>Profesor</ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <img src="@/components/img/person-circle-sharp.svg" color="light">
              </ion-avatar>
              <ion-label>Alumno</ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <img src="@/components/img/person-circle-sharp.svg" color="light">
              </ion-avatar>
              <ion-label>Preceptor</ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <img src="@/components/img/person-circle-sharp.svg" color="light">
              </ion-avatar>
              <ion-label>Alumno</ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <img src="@/components/img/person-circle-sharp.svg" color="light">
              </ion-avatar>
              <ion-label>Alumno</ion-label>
            </ion-item>
            <ion-item>
              <ion-avatar slot="start">
                <img src="@/components/img/person-circle-sharp.svg" color="light">
              </ion-avatar>
              <ion-label>Profesor</ion-label>
            </ion-item>
          </ion-list>
        </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<style>

.fullwidth{
  width: 100%; 
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonButtons, IonBackButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonButtons, IonBackButton},
  

});
</script>