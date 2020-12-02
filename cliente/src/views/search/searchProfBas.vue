<template>
<ion-page>

    <ion-header translucent>
       <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button href="/tabs/search">
            Atrás
          </ion-button>
        </ion-buttons>

        <ion-title>Ciclo Básico</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content fullscreen>
      <ion-list>
        <ion-item>Profesor Bas 1</ion-item>
        <ion-item>Profesor Bas 2</ion-item>
        <ion-item>Profesor Bas 3</ion-item>
        <ion-item>Profesor Bas 4</ion-item>
        <ion-item>Profesor Bas 5</ion-item>
        <ion-item>Profesor Bas 6</ion-item>
      </ion-list>
    </ion-content>

    
</ion-page>
</template>

<style>



</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent},
  
});
</script>