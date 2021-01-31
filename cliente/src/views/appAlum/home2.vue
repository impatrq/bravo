<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-item color="primary" class="logo">
                 <img src="@/components/img/headerLogo2.png" class="ion-padding">
                </ion-item>
                <router-link to="/chat1" slot="end"><ion-icon :icon="chatbubbleEllipses" slot="end" class="icon"></ion-icon></router-link>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
                        <ion-card color="primary" class="ion-padding-top margin-buttom-45">
                        <ion-slides pager="true" :options="slideOpts">  
                            <ion-slide>
                                <ion-card color="secondary" class="ion-padding-top margin-buttom-45">
                                    <ion-item color="secondary" class="img"><img src="@/components/img/not1.png"></ion-item>
                                    <ion-card-content> Titulo de Noticia 1 </ion-card-content>
                                </ion-card>
                            </ion-slide>            
                            <ion-slide>
                                <ion-card color="secondary" class="ion-padding-top margin-buttom-45">
                                    <ion-item color="secondary" class="img"><img src="@/components/img/not2.png"></ion-item>
                                    <ion-card-content> Titulo de Noticia 2 </ion-card-content>
                                </ion-card>
                            </ion-slide>
                            <ion-slide>
                                <ion-card color="secondary" class="ion-padding-top margin-buttom-45">
                                    <ion-item color="secondary" class="img"><img src="@/components/img/not3.png" ></ion-item>
                                    <ion-card-content> Titulo de Noticia 3 </ion-card-content>
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
                            <br>
                            <br> 
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

.swiper-pagination-bullet-active {
background: white;
opacity: 1;
}
.margin-buttom-50{
  margin-bottom: 50px;
}
.margin-buttom-45{
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
import{ caretForwardOutline, chatbubbleEllipses }from 'ionicons/icons';
import ExploreContainerVue from '../../components/ExploreContainer.vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, caretForwardOutline, chatbubbleEllipses } 
  }
});
</script>