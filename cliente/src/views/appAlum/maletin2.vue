<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-item color="primary" class="logo">
                 <img src="@/components/img/headerLogo2.png" class="ion-padding">
                </ion-item>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
								<ion-card class="width-95per">
									<ion-card-header class="background-white2">
										<ion-card-title class="ion-text-capitalize ion-text-start"> Curso: </ion-card-title>
										<br>
										<ion-card-subtitle class="ion-text-capitalize ion-text-start"> Materia: </ion-card-subtitle>
									</ion-card-header>
								</ion-card><br>          
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
                            <ion-card color="primary" class="ion-margin margin-buttom-50">
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
                            </ion-card><br>
                        </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-50{
  margin-bottom: 50px;
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
   margin: auto;
   width: 40%;
  }
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainerVue from '../../components/ExploreContainer.vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts } 
  }
});
</script>