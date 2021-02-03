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
          <ion-slides options="slideOpts" pager="true">
            <ion-slide>
              <ion-card class="fullwidth margin-buttom-35" href="/sProfBas">
               <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
                <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
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
          <ion-slides options="slideOpts" pager="true">
            <ion-slide>
              <ion-card class="fullwidth margin-buttom-35" href="/sProfAer">
               <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
                <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
                <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Pañol</ion-card-title>
               </ion-card-header>
            </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
               <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
          </ion-card>
           <ion-card color="primary" class="margin-buttom-35">
            <ion-card-header color="primary">
              <ion-text><h4>Ciclo Superior Aviónica</h4></ion-text>
            </ion-card-header>
          <ion-slides options="slideOpts" pager="true">
            <ion-slide>
              <ion-card class="fullwidth" href="/sProfAv">
               <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth margin-buttom-35">
                <ion-card-header>                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
                <ion-card-header>                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Pañol</ion-card-title>
               </ion-card-header>
            </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card class="fullwidth">
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
.margin-buttom-35{
  margin-bottom: 35px;
}
.margin-buttom-35{
  margin-bottom: 35px;
}
.fullwidth{
  width: 100%; 
}
.swiper-pagination-bullet-active {
background: white;
opacity: 1;
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  

});
</script>