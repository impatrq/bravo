<template>
  <ion-page>
    <ion-header translucent class="margin-buttom-40">
      <ion-toolbar color="primary">
        <router-link to="/mat1" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Volver a "Materia"</ion-title>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                      
                      </ion-col>
                    </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-60{
  margin-bottom: 60px;
}
.fullheight{
  height: 100%; 
}
.fullwidth{
  width: 100%; 
}
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
    setup() {

    return { arrowBackOutline } 
  }

});
</script>
