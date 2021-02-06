<template>
<ion-page>

    <ion-header translucent>
        <ion-toolbar color="primary">
            <router-link to="/search" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
            <ion-title color="light">Ciclo Superior Aviónica</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content fullscreen>
      <ion-list>
        <ion-item>Profesor Avio 1</ion-item>
        <ion-item>Profesor Avio 2</ion-item>
        <ion-item>Profesor Avio 3</ion-item>
        <ion-item>Profesor Avio 4</ion-item>
        <ion-item>Profesor Avio 5</ion-item>
        <ion-item>Profesor Avio 6</ion-item>
      </ion-list>
    </ion-content>

    
</ion-page>
</template>

<style>

.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent},
  setup() {
    return { arrowBackOutline } 
  }
});
</script>