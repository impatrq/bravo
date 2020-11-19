<template>
<ion-page>

    <ion-header translucent>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list>
        <ion-item>Profesor 1</ion-item>
        <ion-item>Profesor 2</ion-item>
        <ion-item>Profesor 3</ion-item>
        <ion-item>Profesor 4</ion-item>
        <ion-item>Profesor 5</ion-item>
        <ion-item>Profesor 6</ion-item>
      </ion-list>
    </ion-content>

    
</ion-page>
</template>

<style>



</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonSearchbar} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonSearchbar},
  
});
</script>