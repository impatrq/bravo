<template>
<ion-page>
<ion-header>
  <ion-toolbar><img src="@/components/img/headerLogo.png" class="ion-padding"></ion-toolbar>
</ion-header>
<ion-content :fullscreen="true">

  <ion-row class="ion-justify-content-center fullheight">
    <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
<ion-card>
<ion-card-header>
<h2 class="ion-text-capitalize ion-text-start">Nombre de Materia</h2>
<h3 class="ion-text-capitalize ion-text-start">Curso</h3>
</ion-card-header> 
</ion-card>

<ion-slides pager="true" :options="slideOpts">
  
<ion-slide class="margin-bottom-65px">
<ion-list class="list-card">
<ion-card>

<ion-card-header>
  <ion-row>
  <ion-col>
    <ion-card-title class="ion-text-start"><h3>Actividades</h3></ion-card-title>
  </ion-col>
  <ion-col size="2" class="ion-align-self-center">
    <router-link to="#" class="no-deco"><ion-icon :icon="addCircleOutline" class="icon"></ion-icon></router-link>
  </ion-col>
  </ion-row>                
</ion-card-header>      
<ion-list class="list">
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Actividad 1</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">                     
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Actividad 2</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card>           
</ion-list>

</ion-card>
<ion-card>
<ion-card-header>
  <ion-row>
  <ion-col>
    <ion-card-title class="ion-text-start"><h3>Evaluaciones</h3></ion-card-title>
  </ion-col>
  <ion-col size="2" class="ion-align-self-center">
  <router-link to="#" class="no-deco">
    <ion-icon :icon="addCircleOutline" class="icon"></ion-icon>
  </router-link>
  </ion-col>
  </ion-row>                
</ion-card-header>      
<ion-list class="list">

<ion-card class="background-grey">
<router-link to="#" class="no-deco">
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Evaluación 1</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">
  <ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Evaluación 2</ion-card-title>
  </ion-card-header>
</router-link>  
</ion-card>

</ion-list>
</ion-card>
</ion-list>
        </ion-list>             
</ion-list>
</ion-slide>
        <ion-card-header class="background-white2">
          <ion-card-title class="ion-text-capitalize ion-text-start"> Actividades: </ion-card-title>
          <ion-tab-button>
            <ion-icon :icon="add" class="left-move"></ion-icon>
            <ion-label class="left-move">Agregar tareas</ion-label>
          </ion-tab-button>
          <br><br>
            <ion-slide class="margin-buttom-60">
              <ion-list class="width-95per">
                <ion-card>
<ion-card-header>
<ion-row>
<ion-col>
 <ion-card-title class="ion-text-start"><h3>Comunicados</h3></ion-card-title>
</ion-col>
<ion-col size="2" class="ion-align-self-center">
<router-link to="#" class="no-deco">
  <ion-icon :icon="addCircleOutline" class="icon"></ion-icon>
</router-link>
</ion-col>
</ion-row>                
</ion-card-header>
      
<ion-list class="list">
<ion-card class="background-grey">
<router-link to="#" class="no-deco">
<ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Comunicado 1</ion-card-title>
</ion-card-header>
</router-link>  
</ion-card> 
                </ion-card>
</ion-card> 
<ion-card class="background-grey">
<router-link to="#" class="no-deco">
<ion-card-header>                      
  <ion-card-title class="ion-text-capitalize ion-text-start">Comunicado 2</ion-card-title>
</ion-card-header>
</router-link>  
</ion-card>
</ion-list>

</ion-card>
                  <ion-card-header class="background-white3">                      
                    <ion-card-title color="light" class="ion-text-capitalize ion-text-start">Actividad 4</ion-card-title>
                  </ion-card-header>
                </ion-card> 
              </ion-list>
            </ion-slide>
        </ion-card-header>
      </ion-card>
    </ion-list>            
  <!-- TIENE QUE IR EL INFINITE SCROLL-->     
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
.left-move{
  padding-left: 250px;
}
.background-grey{
  background-color: rgb(50, 50, 50);
}
.background-white{
background-color: #808289 ;
}
.background-white2{
  background-color: #92949c ;
}
.background-white3{
  background-color: #383a3e ;
}
.background-white2{
  background-color: #d7d8da ;
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainerVue from '../../components/ExploreContainer.vue';
import{add}from 'ionicons/icons';
export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, add } 
    
    //FALTA LÓGICA DEL INFINITE SCROLL
  }
});
</script>