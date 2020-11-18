<template>
    <ion-page>
        <ion-header>
            <ion-toolbar><img src="@/components/img/headerLogo.png" class="ion-padding"></ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
                        <ion-slides pager="true" :options="slideOpts" class="margin-buttom-50">  
                            <ion-slide>
                                <ion-card class="ion-padding-top margin-buttom-50">
                                    <ion-item class="img"><img src="@/components/img/not1.png"></ion-item>
                                    <ion-card-content> Titulo de Noticia 1 </ion-card-content>
                                </ion-card>
                            </ion-slide>            
                            <ion-slide>
                                <ion-card class="ion-padding-top margin-buttom-50">
                                    <ion-item class="img"><img src="@/components/img/not2.png"></ion-item>
                                    <ion-card-content> Titulo de Noticia 2 </ion-card-content>
                                </ion-card>
                            </ion-slide>
                            <ion-slide>
                                <ion-card class="ion-padding-top margin-buttom-50">
                                    <ion-item class="img"><img src="@/components/img/not3.png" ></ion-item>
                                    <ion-card-content> Titulo de Noticia 3 </ion-card-content>
                                </ion-card>
                            </ion-slide>
                            </ion-slides>           
                            <ion-list class="ion-margin margin-buttom-50">
                            <ion-list-header>
                                <ion-text><h4>Chat reciente</h4></ion-text>
                            </ion-list-header>
                            <ion-card>
                                <ion-card-header class="background-grey">                      
                                    <ion-card-title class="ion-text-capitalize ion-text-start">Profesor</ion-card-title>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header class="background-grey">                      
                                    <ion-card-title class="ion-text-capitalize ion-text-start">Alumno</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header class="background-grey">                      
                                    <ion-card-title class="ion-text-capitalize ion-text-start">Pañol</ion-card-title>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header class="background-grey">                      
                                    <ion-card-title class="ion-text-capitalize ion-text-start">Preceptor</ion-card-title>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header class="background-grey">                      
                                    <ion-card-title class="ion-text-capitalize ion-text-start">Alumno</ion-card-title>
                                    <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            </ion-list>
                            <ion-slides pager="true" :options="slideOpts" class="margin-buttom-50">    
                            <ion-slide class="margin-buttom-50">
                                <ion-list class="fullwidth ion-margin">
                                <ion-list-header>
                                    <ion-text class="ion-margin-left"><h4>Día: Lunes</h4></ion-text>
                                    <ion-card-subtitle class="ion-text-end">Curso:</ion-card-subtitle>
                                </ion-list-header>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>      
                                </ion-list>                
                            </ion-slide>
                            <ion-slide class="margin-buttom-50">                
                                <ion-list class="fullwidth ion-margin">
                                <ion-list-header>
                                    <ion-text class="ion-margin-left"><h4>Día: Martes</h4></ion-text>
                                    <ion-card-subtitle class="ion-text-end">Curso:</ion-card-subtitle>
                                </ion-list-header>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-list>                
                            </ion-slide>
                            <!--otro día-->
                            <ion-slide class="margin-buttom-50">                
                                <ion-list class="fullwidth ion-margin">
                                <ion-list-header>
                                    <ion-text class="ion-margin-left"><h4>Día: Miercoles</h4></ion-text>
                                    <ion-card-subtitle class="ion-text-end">Curso:</ion-card-subtitle>
                                </ion-list-header>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-list>                
                            </ion-slide>
                            <!--otro-->
                            <ion-slide class="margin-buttom-50">                
                                <ion-list class="fullwidth ion-margin">
                                <ion-list-header>
                                    <ion-text class="ion-margin-left"><h4>Día: Jueves</h4></ion-text>
                                    <ion-card-subtitle class="ion-text-end">Curso:</ion-card-subtitle>
                                </ion-list-header>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-list>                
                            </ion-slide>
                            <!--otro-->
                            <ion-slide class="margin-buttom-50">                
                                <ion-list class="fullwidth ion-margin">
                                <ion-list-header>
                                    <ion-text class="ion-margin-left"><h4>Día: Viernes</h4></ion-text>
                                    <ion-card-subtitle class="ion-text-end">Curso:</ion-card-subtitle>
                                </ion-list-header>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header class="background-grey">                      
                                        <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-list>                
                            </ion-slide>
                            </ion-slides>
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
.fullwidth{
  width: 100%; 
}
.background-grey{
  background-color: rgb(50, 50, 50);
}
.img{
  width: 100%;
  height: 23vh;
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