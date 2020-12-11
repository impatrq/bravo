<template>
<ion-page>

<ion-header>
  <ion-toolbar><img src="@/components/img/headerLogo2.png" class="ion-padding"></ion-toolbar>
</ion-header>

<ion-content :fullscreen="true">
<ion-row class="ion-justify-content-center fullheight">
<ion-col size-xl="4" size-sm="10" class="ion-align-self-center">

<ion-card>
<ion-card-header>
  <ion-row>
  <ion-col>
    <ion-card-title class="ion-text-start"><h3>Materias</h3></ion-card-title>
  </ion-col>
  <ion-col size="2" class="ion-align-self-center">
    <router-link to="#" class="no-deco"><ion-icon :icon="addCircleOutline" class="icon"></ion-icon></router-link>
  </ion-col>
  </ion-row>                
</ion-card-header>
<ion-list>

<ion-card class="background-grey">
<router-link to="maletin" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Materia</ion-card-title>
  <ion-card-subtitle class="ion-text-capitalize ion-text-end">Curso</ion-card-subtitle>
  </ion-card-header>
</router-link>  
</ion-card>
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Materia</ion-card-title>
  <ion-card-subtitle class="ion-text-capitalize ion-text-end">Curso</ion-card-subtitle>
  </ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Materia</ion-card-title>
  <ion-card-subtitle class="ion-text-capitalize ion-text-end">Curso</ion-card-subtitle>
  </ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Materia</ion-card-title>
  <ion-card-subtitle class="ion-text-capitalize ion-text-end">Curso</ion-card-subtitle>
  </ion-card-header>
</router-link>  
</ion-card>  

</ion-list>
</ion-card>

</ion-col>
</ion-row>
</ion-content>
</ion-page>
</template>

<style>
.fullheight{ height: 100%; }
.background-grey{ background-color: rgb(50, 50, 50); }
.icon{ color: white; font-size: 32px; }
.no-deco{ text-decoration: none; color: white;}
</style>

<script lang="ts">
import { IonPage, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainerVue from '../../components/ExploreContainer.vue';
import{ addCircleOutline, chatbubbles }from 'ionicons/icons';
export default defineComponent({

  components: { IonPage, IonContent, IonCol, IonRow },
  setup() {
    return { addCircleOutline, chatbubbles } 
  }
});
</script>