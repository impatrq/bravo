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
          <ion-list-header class="text-size-20 ion-text-justify">Seleccione su cargo</ion-list-header>
        </div>
        <br>
        <ion-button  @click="seleccionPrec()" expand="block" routerLink="profReg" fill="solid">Preceptor o Directivo</ion-button> 
        <br>    
        <ion-button  @click="seleccionProf()"  expand="block" routerLink="profReg" fill="solid">Profesor</ion-button>
        <br>
        <ion-button  @click="seleccionPanol()"  expand="block" routerLink="profReg" fill="solid">Personal de pañol</ion-button>  
        <br>
        <ion-button  @click="seleccionAlum()" expand="block" routerLink="AlumReg" fill="solid">Alumno</ion-button>
        
        <!--
        <router-link to="1">
        <ion-button href="/tabs/precReg" expand="block" fill="outline">Preceptor o Directivo</ion-button> 
        </router-link> 
        <br>    
        <router-link to="2">
        <ion-button href="/tabs/profReg" expand="block" fill="outline" >Profesor</ion-button>
        </router-link>
        <br>
        <router-link to="3">  
        <ion-button href="/tabs/panolReg" expand="block" fill="outline" >Personal de pañol</ion-button>
        </router-link>      
        <br>
        <router-link to="4">
        <ion-button href="/tabs/AlumReg" expand="block" fill="outline" >Alumno</ion-button>
        </router-link>-->
        <br>        
        <router-link to="login" class="text-size-12">¿Ya tiene una cuenta? Inicie sesión aquí.</router-link>
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
import { App, ref } from 'vue';

export default  {
  name: 'registroCargo',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader, IonCol, IonRow },
methods: {
    seleccionProf: ()=>{
      console.log("se seleccionó profesor")
    },
    seleccionAlum: ()=>{
      console.log("se seleccionó alumno")
    },
    seleccionPrec: ()=>{
      console.log("se seleccionó preceptor")
    },
    seleccionPanol: ()=>{
      console.log("se seleccionó pañol")
    },
  }

  

}
</script>