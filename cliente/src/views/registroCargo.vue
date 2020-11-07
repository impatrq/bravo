<template>
  <ion-page>
    <!--ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header-->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <div class="ion-no-padding">
          <ion-list-header class="text-size-20 ion-text-justify">Seleccione su cargo</ion-list-header>
        </div>
        <br>
        <ion-button href="#" expand="block" fill="outline">Preceptor o Directivo</ion-button>  
        <br>    
        <ion-button href="#" expand="block" fill="outline" >Profesor</ion-button>
        <br>  
        <ion-button href="#" expand="block" fill="outline" >Personal de pañol</ion-button>      
        <br>
        <ion-button href="#" expand="block" fill="outline" >Alumno</ion-button>
        <br>        
        <ion-router-link href="tabs/login" class="text-size-12">¿Ya tiene una cuenta? Inicie sesión aquí.</ion-router-link>
      </ion-list>

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

export default  {
  name: 'registroCargo',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
  methods: {
  }
}
</script>