<template>
<ion-page>

<ion-header translucent>
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center" color="light">Chat</ion-title>
      </ion-toolbar>
    </ion-header>

<ion-content :fullscreen="true">

  <ion-row class="ion-justify-content-center fullheight">
    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">

        <ion-card color="primary">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Básico</h4></ion-text>
            </ion-card-header>
          </ion-card>
          <ion-card color="primary">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Superior Aeronáutica</h4></ion-text>
            </ion-card-header>
          </ion-card>
           <ion-card color="primary">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Superior Aviónica</h4></ion-text>
            </ion-card-header>
          </ion-card>


        
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow},
  

});
</script>