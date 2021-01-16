<template>
<ion-page>

<ion-header translucent>
      <ion-toolbar>
        <ion-searchbar color="primary"></ion-searchbar>
      </ion-toolbar>
    </ion-header>

<ion-content :fullscreen="true">

  <ion-row class="ion-justify-content-center fullheight">
    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">

        <ion-card color="primary">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Básico</h4></ion-text>
            </ion-card-header>
          <ion-slides options="slideOpts">
            <ion-slide>
              <ion-card class="fullwidth ion-margin" href="/sProfBas">
               <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
                <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
               <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
          </ion-card>
          <ion-card color="primary">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Superior Aeronáutica</h4></ion-text>
            </ion-card-header>
          <ion-slides options="slideOpts">
            <ion-slide>
              <ion-card class="fullwidth ion-margin" href="/sProfAer">
               <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
                <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
                <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Pañol</ion-card-title>
               </ion-card-header>
            </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
               <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
          </ion-card>
           <ion-card color="primary">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Superior Aviónica</h4></ion-text>
            </ion-card-header>
          <ion-slides options="slideOpts">
            <ion-slide>
              <ion-card class="fullwidth ion-margin" href="/sProfAv">
               <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
                <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
                <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Pañol</ion-card-title>
               </ion-card-header>
            </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth ion-margin">
               <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  

});
</script>