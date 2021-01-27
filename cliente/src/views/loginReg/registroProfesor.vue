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
          <ion-label>Paso 1: Ingrese su D.N.I.</ion-label>
        </div>
        <br>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">D.N.I.</ion-label>
          <ion-input placeholder="00.000.000"></ion-input>
        </ion-item> 
        <br>
        <ion-row class="ion-justify-content-center">
        <ion-button size="small" routerLink="/cargosReg" fill="solid" >Atrás</ion-button>
        <ion-button size="small" routerLink="/valEmail" fill="solid" >Continuar</ion-button>           
        </ion-row>
        <br>        
        <router-link to="/login" class="text-size-12">¿Ya tiene una cuenta? Inicie sesión aquí.</router-link>
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
  text-decoration: none;
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

export default  {
  name: 'profReg',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
  methods: {
  }
}
</script>