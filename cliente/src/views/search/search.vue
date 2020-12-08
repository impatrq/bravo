<template>
<ion-page>

<ion-header translucent>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

<ion-content :fullscreen="true">

  <ion-row>
    <ion-col>

          <ion-list>
            <ion-list-header>
              <ion-text><h4>Ciclo Básico</h4></ion-text>
            </ion-list-header>
          <ion-slides options="slideOpts">
            <ion-slide>
              <ion-card href="/sProfBas">
               <ion-card-header class="background-grey">                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
                <ion-card-header class="background-grey">                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
               <ion-card-header class="background-grey">                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
          </ion-list>


        
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>

          <ion-list>
            <ion-list-header>
              <ion-text><h4>Ciclo Superior Aeronáutica</h4></ion-text>
            </ion-list-header>
          <ion-slides options="slideOpts">
            <ion-slide>
              <ion-card href="/sProfAer">
               <ion-card-header class="background-grey">                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
                <ion-card-header class="background-grey">                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
                <ion-card-header class="background-grey">                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Pañol</ion-card-title>
               </ion-card-header>
            </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
               <ion-card-header class="background-grey">                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
          </ion-list>


        
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>

          <ion-list>
            <ion-list-header>
              <ion-text><h4>Ciclo Superior Aviónica</h4></ion-text>
            </ion-list-header>
          <ion-slides options="slideOpts">
            <ion-slide>
              <ion-card href="/sProfAv">
               <ion-card-header class="background-grey">                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Profesor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
                <ion-card-header class="background-grey">                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Alumno</ion-card-title>
                </ion-card-header>
             </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
                <ion-card-header class="background-grey">                      
                  <ion-card-title class="ion-text-capitalize ion-text-center">Pañol</ion-card-title>
               </ion-card-header>
            </ion-card>
            </ion-slide>
            <ion-slide>
              <ion-card>
               <ion-card-header class="background-grey">                      
                 <ion-card-title class="ion-text-capitalize ion-text-center">Preceptor</ion-card-title>
                </ion-card-header>
              </ion-card>
            </ion-slide>
          </ion-slides>
          </ion-list>


        
    </ion-col>
    </ion-row>

</ion-content>
</ion-page>
</template>

<style>

ion-card{
  width: 100%;
}

.background-grey{
  background-color: rgb(50, 50, 50);
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  

});
</script>