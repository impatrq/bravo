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

      <ion-row class="ion-justify-content-center fullheight">
      <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
      <ion-card class="ion-padding">

      <ion-list>
        <div class="ion-no-padding">
          <ion-list-header class="text-size-20 ion-no-padding">Registro</ion-list-header>
          <ion-label>Paso 2: Confirme su identidad</ion-label>
        </div>
        <br>
        <ion-label>Su direccion de correo es "al***ma**@gmail.com?</ion-label>
        <br>
        <ion-row class="ion-justify-content-center padding-top-20">
        <ion-button size="small" color="success" href="#" fill="outline" >Si</ion-button>
        <ion-button size="small" color="danger" href="#" fill="outline" >No</ion-button>            
        </ion-row>   
        <br>
        <ion-router-link href="tabs/login" class="text-size-12">¿Ya tiene una cuenta? Inicie sesión aquí.</ion-router-link>            
        
      </ion-list>

      </ion-card>
      </ion-col>
      </ion-row>       
    </ion-content>
  </ion-page>
</template>

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
  name: 'valEmail',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
  methods: {
  }
}
</script>