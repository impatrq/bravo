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
          <ion-label>Paso 3: Cree su contraseña</ion-label>
        </div>
        <br>        
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Nueva contraseña</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item class="ion-no-padding">
          <ion-label position="floating">Repita su contraseña</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <br>
        <ion-button expand="block" href="#" fill="outline" >Confirmar</ion-button>
        <br>
        <ion-router-link href="tabs/login" class="text-size-12">¿Ya tiene una cuenta? Inicie sesión aquí.</ion-router-link>            
        
      </ion-list>

      </ion-card>
      </ion-col>
      </ion-row>       
    </ion-content>
  </ion-page>
</template>
