<template>
<ion-page>
<ion-header>
  <ion-toolbar><img src="@/components/img/headerLogo.png" class="ion-padding"></ion-toolbar>
</ion-header>
<ion-content :fullscreen="true">

  <ion-row class="ion-justify-content-center fullheight">
    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
<ion-card>
<ion-card-header>
<h2 class="ion-text-capitalize ion-text-start">Nombre de Materia</h2>
<h3 class="ion-text-capitalize ion-text-start">Curso</h3>
</ion-card-header> 
</ion-card>

<ion-slides pager="true" :options="slideOpts">
  
<ion-slide class="margin-bottom-65px">
<ion-list class="list-card">
<ion-card>

<ion-card-header>
  <ion-row>
  <ion-col>
    <ion-card-title class="ion-text-start"><h3>Actividades</h3></ion-card-title>
  </ion-col>
  <ion-col size="2" class="ion-align-self-center">
    <router-link to="#" class="no-deco"><ion-icon :icon="addCircleOutline" class="icon"></ion-icon></router-link>
  </ion-col>
  </ion-row>                
</ion-card-header>      
<ion-list class="list">
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Actividad 1</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Actividad 2</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card>           
</ion-list>

</ion-card>
<ion-card>
<ion-card-header>
  <ion-row>
  <ion-col>
    <ion-card-title class="ion-text-start"><h3>Evaluaciones</h3></ion-card-title>
  </ion-col>
  <ion-col size="2" class="ion-align-self-center">
  <router-link to="#" class="no-deco">
    <ion-icon :icon="addCircleOutline" class="icon"></ion-icon>
  </router-link>
  </ion-col>
  </ion-row>                
</ion-card-header>      
<ion-list class="list">

<ion-card class="background-grey">
<router-link to="#" class="no-deco">
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Evaluación 1</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Evaluación 2</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card>

</ion-list>
</ion-card>
</ion-list>
</ion-slide>

<ion-slide class="margin-bottom-65px">
<ion-list class="list-card">
<ion-card>
<ion-card-header>
<ion-row>
<ion-col>
 <ion-card-title class="ion-text-start"><h3>Comunicados</h3></ion-card-title>
</ion-col>
<ion-col size="2" class="ion-align-self-center">
<router-link to="#" class="no-deco">
  <ion-icon :icon="addCircleOutline" class="icon"></ion-icon>
</router-link>
</ion-col>
</ion-row>                
</ion-card-header>
      
<ion-list class="list">
<ion-card class="background-grey">
<router-link to="#" class="no-deco">
<ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Comunicado 1</ion-card-title>
</ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">
<ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Comunicado 2</ion-card-title>
</ion-card-header>
</router-link>  
</ion-card>
</ion-list>

</ion-card>
<ion-card>

        <ion-card-header>
          <ion-card-title class="ion-text-start"><h3>Alumnos</h3></ion-card-title>
        </ion-card-header>
              
        <ion-list class="list">

          <ion-card class="background-grey ion-padding">                                       
            <ion-row>
            <ion-col> 
              <h4 class="ion-text-capitalize ion-text-start">Alumno 1</h4>
            </ion-col>
            <ion-col size="2" class="ion-align-self-center">             
              <router-link to="#" class="no-deco">
                <ion-icon :icon="chatbubbles" class="icon"></ion-icon>
              </router-link>
            </ion-col>
            <ion-col size="2" class="ion-align-self-center">             
              <ion-checkbox color="light"></ion-checkbox>
            </ion-col>
            </ion-row> 
          </ion-card> 
          
        </ion-list>

</ion-card>
</ion-list>
</ion-slide>

</ion-slides>
    </ion-content>
  </ion-page>
</template>

<style>
.fullheight{ height: 100%; }
.background-grey{ background-color: rgb(50, 50, 50); }
.icon{ color: white; font-size: 32px; }
.list{ height: 350px; overflow: scroll; }
.list-card{ width: 100%; background-color: transparent; }
.no-deco{ text-decoration: none; color: white;}
.margin-bottom-65px{ margin-bottom: 65px; }
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainerVue from '../../components/ExploreContainer.vue';
import{add}from 'ionicons/icons';
export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, add } 
    
    //FALTA LÓGICA DEL INFINITE SCROLL
  }
});
</script>