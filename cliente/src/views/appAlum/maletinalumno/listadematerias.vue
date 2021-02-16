<template>
    <ion-page>
        <ion-header translucent class="margin-buttom-40">
            <ion-toolbar color="primary">
                <router-link to="/maletin2" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
                <ion-title color="light">Volver a Maletin</ion-title>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                  <router-link to="/mat1">
                  <ion-card color="primary" class="bordes">
                    <ion-card-header>
                      <ion-card-title>Materia 1</ion-card-title>
                      <ion-card-subtitle>Profesor:</ion-card-subtitle>
                   </ion-card-header>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                  <ion-card color="secondary" class="bordes">
                    <ion-card-header>
                      <ion-card-title>Materia 2</ion-card-title>
                      <ion-card-subtitle>Profesor:</ion-card-subtitle>
                   </ion-card-header>
                      <ion-item color="secondary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  <ion-card color="tertiary" class="bordes">
                    <ion-card-header>
                      <ion-card-title>Materia 3</ion-card-title>
                      <ion-card-subtitle>Profesor:</ion-card-subtitle>
                   </ion-card-header>
                      <ion-item color="tertiary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  <ion-card color="primary" class="bordes">
                    <ion-card-header>
                      <ion-card-title>Materia 4</ion-card-title>
                      <ion-card-subtitle>Profesor:</ion-card-subtitle>
                   </ion-card-header>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  <ion-card class="margin-buttom-60 bordes" color="secondary">
                    <ion-card-header>
                      <ion-card-title>Materia 5</ion-card-title>
                      <ion-card-subtitle>Profesor:</ion-card-subtitle>
                   </ion-card-header>
                      <ion-item color="secondary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                    </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-60{
  margin-bottom: 60px;
}
.lados{
  margin-top: 20px;
  margin-bottom: 20px;
}
.fullheight{
  height: 100%; 
}
.left-move{
    padding-left: 200px;
}
.fullwidth{
  width: 100%; 
}
.img{
  width: 100%;
  height: 23vh;
}
.logo {
   display: block;
   margin: 0;
   width: 40%;
  }
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
.icon1{ 
    color: white; 
    font-size: 25px;
    margin-left: unset;
    margin-inline-start: 0px;
}
.bordes{
  border-radius: 20px;
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ chevronForwardOutline, arrowBackOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, chevronForwardOutline, arrowBackOutline } 
  }
});
</script>