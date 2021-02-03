<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                 <ion-title class="ion-padding-start">Mirko S.</ion-title>
                <router-link to="/pfalum" slot="end"><ion-icon :icon="personCircleOutline" slot="end" class="perfil"></ion-icon></router-link>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
								<ion-card class="width-95per margin-buttom-50">
									<ion-card-header class="background-white2">
										<ion-card-title class="ion-text-capitalize ion-text-start"> Curso: </ion-card-title>
										<ion-card-subtitle class="ion-text-capitalize ion-text-start"> Materia: </ion-card-subtitle>
									</ion-card-header>
								</ion-card>
                            <ion-slides pager="true" :options="slideOpts" class="margin-buttom-50">    
                            <ion-slide class="margin-buttom-50">
                            <ion-card color="primary" class="fullwidth ion-margin">
                            <ion-card-header color="primary">
                                <ion-text color="light" class="ion-text-capitalize ion-text-start"><h4>Actividades/Materias:</h4></ion-text>
                            </ion-card-header>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 1</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Materia:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 2</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Materia:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 3</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Materia:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            </ion-card>                          
                            </ion-slide>
                            <ion-slide class="margin-buttom-50">                
                            <ion-card color="primary" class="fullwidth ion-margin">
                            <ion-card-header color="primary">
                                <ion-text color="light" class="ion-text-capitalize ion-text-start"><h4>Comunicados:</h4></ion-text>
                            </ion-card-header>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Comunicado 1</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">De:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Comunicado 2</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">De:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Comunicado 3</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">De:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            </ion-card>              
                            </ion-slide>
							</ion-slides>
                            <ion-card color="primary" class="ion-margin margin-buttom-60">
                            <ion-card-header color="primary">
                                <ion-text color="light"><h4>Evaluaciones:</h4></ion-text>
                            </ion-card-header>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Evaluación 1</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Día:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Evaluación 2</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Día:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Evaluación 3</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Día:</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            </ion-card>
                        </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-50{
  margin-bottom: 50px;
}
.margin-buttom-60{
  margin-bottom: 60px;
}
.fullheight{
  height: 100%; 
}
.left-move{
    padding-left: 200px;
}
.fullwidth{
  width: 100%; 
}
.img{
  width: 100%;
  height: 23vh;
}
.logo {
   display: block;
   margin: 0;
   width: 40%;
  }
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-end: 16px; 
}
.perfil{ 
   color: white; 
   font-size: 35px;
   margin-inline-end: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import{ personCircleOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, personCircleOutline } 
  }
});
</script>