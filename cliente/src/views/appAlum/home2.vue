<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-item lines="none" color="primary" class="logo">
                 <img src="@/components/img/headerLogo2.png" class="ion-padding">
                </ion-item>
                <router-link to="/chat1" slot="end"><ion-icon :icon="chatbubbleEllipses" slot="end" class="icon"></ion-icon></router-link>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
                        <ion-card color="primary" class="ion-padding-top margin-buttom-35">
                        <ion-slides class="c" pager="true" :options="slideOpts">  
                            <ion-slide>
                                <ion-card class="margin-buttom-35">
                                <ion-item lines="none" color="secondary">
                                    <ion-icon :icon="newspaper" slot="start"></ion-icon>
                                    <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                                </ion-item>
                                <router-link to="/nothome1">
                                <ion-item lines="none" color="secondary">
                                    <ion-card-header>
                                        <ion-card-subtitle>29 de diciembre de 2020</ion-card-subtitle>
                                        <ion-card-title>Información para padres y alumnos de 7° Año</ion-card-title>
                                    </ion-card-header>
                                    <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
                                </ion-item>
                                </router-link>
                            </ion-card>
                            </ion-slide>            
                            <ion-slide>
                                <ion-card class="margin-buttom-35">
                                <ion-item lines="none" color="secondary">
                                    <ion-icon :icon="newspaper" slot="start"></ion-icon>
                                    <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                                </ion-item>
                                <router-link to="/nothome2">
                                <ion-item lines="none" color="secondary">
                                    <ion-card-header>
                                        <ion-card-subtitle>29 de diciembre de 2020</ion-card-subtitle>
                                        <ion-card-title>Fin del ciclo lectivo 2020</ion-card-title>
                                    </ion-card-header>
                                    <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
                                </ion-item>
                                </router-link>
                            </ion-card>
                            </ion-slide>
                            <ion-slide>
                                <ion-card class="margin-buttom-35">
                                <ion-item lines="none" color="secondary">
                                    <ion-icon :icon="newspaper" slot="start"></ion-icon>
                                    <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                                </ion-item>
                                <router-link to="/nothome3">
                                <ion-item lines="none" color="secondary">
                                    <ion-card-header>
                                        <ion-card-subtitle>23 de diciembre de 2020</ion-card-subtitle>
                                        <ion-card-title>SALUDO A LAS FAMILIAS</ion-card-title>
                                    </ion-card-header>
                                    <ion-icon :icon="chevronForwardOutline" slot="end"></ion-icon>
                                </ion-item>
                                </router-link>
                            </ion-card>
                            </ion-slide>
                            </ion-slides>
                            <router-link to="/noticia1">
                            <ion-item color="primary">
                                 <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                                     <ion-label>
                                      Ver todas las noticias.
                                     </ion-label>
                            </ion-item>
                            </router-link>
                            </ion-card>
                            <ion-card color="primary" class="ion-margin margin-buttom-50">
                            <ion-card-header color="primary">
                                <ion-text color="light"><h4>Tareas pendientes:</h4></ion-text>
                            </ion-card-header>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Profesor</ion-card-title>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Alumno</ion-card-title>
                                <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Pañol</ion-card-title>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Preceptor</ion-card-title>
                                </ion-card-header>
                            </ion-card>
                            <ion-card>
                                <ion-card-header>                      
                                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Alumno</ion-card-title>
                                    <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                            </ion-card>
                            <ion-slides pager="true" :options="slideOpts" class="margin-buttom-50">    
                            <ion-slide class="margin-buttom-50">
                                <ion-card color="primary" class="fullwidth ion-margin">
                                <ion-card-header color="primary">
                                    <ion-text color="light" class="ion-text-left"><h4>Día: Lunes</h4></ion-text>
                                    <ion-card-subtitle color="light" class="ion-text-left">Curso:</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>      
                                </ion-card>                
                            </ion-slide>
                            <ion-slide class="margin-buttom-50">                
                                <ion-card color="primary" class="fullwidth ion-margin">
                                <ion-card-header color="primary">
                                    <ion-text color="light" class="ion-text-left"><h4>Día: Martes</h4></ion-text>
                                    <ion-card-subtitle color="light" class="ion-text-left">Curso:</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-card>                
                            </ion-slide>
                            <!--otro día-->
                            <ion-slide class="margin-buttom-50">                
                                <ion-card color="primary" class="fullwidth ion-margin">
                                <ion-card-header color="primary">
                                    <ion-text color="light" class="ion-text-left"><h4>Día: Miercoles</h4></ion-text>
                                    <ion-card-subtitle color="light" class="ion-text-left">Curso:</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-card>                
                            </ion-slide>
                            <!--otro-->
                            <ion-slide class="margin-buttom-50">                
                                <ion-card color="primary" class="fullwidth ion-margin">
                                <ion-card-header color="primary">
                                    <ion-text color="light" class="ion-text-left"><h4>Día: Jueves</h4></ion-text>
                                    <ion-card-subtitle color="light" class="ion-text-left">Curso:</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-card>                
                            </ion-slide>
                            <!--otro-->
                            <ion-slide class="margin-buttom-50">                
                                <ion-card color="primary" class="fullwidth ion-margin">
                                <ion-card-header color="primary">
                                    <ion-text color="light" class="ion-text-left"><h4>Día: Viernes</h4></ion-text>
                                    <ion-card-subtitle color="light" class="ion-text-left">Curso:</ion-card-subtitle>
                                </ion-card-header>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
                                    </ion-card-header>
                                </ion-card>
                                <ion-card>
                                    <ion-card-header>                      
                                        <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
                                    </ion-card-header>
                                </ion-card>           
                                </ion-card>                
                            </ion-slide>
                            </ion-slides>
                        </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.c{
    display: grid;
}
.swiper-pagination-bullet{
background: white;
}
.margin-buttom-50{
  margin-bottom: 50px;
}
.margin-buttom-35{
  margin-bottom: 35px;
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
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import{ caretForwardOutline, chatbubbleEllipses, newspaper, ellipsisVertical, chevronForwardOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, caretForwardOutline, chatbubbleEllipses, newspaper, ellipsisVertical, chevronForwardOutline } 
  }
});
</script>
