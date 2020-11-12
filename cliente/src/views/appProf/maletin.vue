<template>
  <ion-page>
    <ion-header>
      <!--<ion-toolbar><img src="@/components/img/headerLogo.png" class="ion-padding"></ion-toolbar>-->
    </ion-header>
<ion-content :fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar><ion-title size="large">maletin</ion-title></ion-toolbar>
  </ion-header>
  <ion-row class="ion-justify-content-center fullheight">
    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
      <ion-slide>
        <ion-list class="width-95per">
          <ion-card-header class="background-white">
          <!--<ion-item class="img"><img src="@/components/img/not1.png"></ion-item>-->
            <ion-card-title class="ion-text-capitalize ion-text-start"> Materia: </ion-card-title>
              <br>
            <ion-card-subtitle color="light" class="ion-text-capitalize ion-text-start">Curso:</ion-card-subtitle>
          </ion-card-header>
        </ion-list>
      </ion-slide>            
  <ion-slide>
    <ion-list class="width-95per">
      <ion-card-content class="backgroun-white">
        <ion-card-title class="ion-text-capitalize ion-text-start"> Actividades: </ion-card-title>
          <br>
            <ion-slide class="margin-buttom-60">
              <ion-list class="width-95per">
                <ion-card>
                  <ion-card-header class="background-white">                      
                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 1</ion-card-title>
                  </ion-card-header>
                </ion-card>
                <ion-card>
                  <ion-card-header class="background-white">                      
                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 2</ion-card-title>
                  </ion-card-header>
                </ion-card>
                <ion-card>
                  <ion-card-header class="background-white">                      
                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 3</ion-card-title>
                  </ion-card-header>
                </ion-card>
                <ion-card>
                  <ion-card-header class="background-white">                      
                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 4</ion-card-title>
                  </ion-card-header>
                </ion-card> 
              </ion-list>
           </ion-slide>
      </ion-card-content>    
    </ion-list>                
  </ion-slide>     
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<style>
.margin-buttom-60{
  margin-bottom: 60px;
}
.fullheight{
  height: 100%; 
}
.width-95per{
  width: 95%; 
}
.background-grey{
  background-color: rgb(50, 50, 50);
}
.background-white{
background-color: #808289 ;
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainerVue from '../../components/ExploreContainer.vue';
export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts } 
    

    //FALTA LÓGICA DEL INFINITE SCROLL
  }
});
</script>