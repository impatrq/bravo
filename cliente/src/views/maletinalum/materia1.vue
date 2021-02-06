<template>
    <ion-page>
        <ion-header translucent class="margin-buttom-40">
            <ion-toolbar color="primary">
                <router-link to="/listmat" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
                <ion-title color="light">Volver a Lista</ion-title>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                  <router-link to="/comunicados">
                  <ion-card color="primary">
                    <ion-item lines="none" color="primary">
                        <ion-icon :icon="megaphoneOutline" slot="start" class="icon2"></ion-icon>
                        <ion-title slot="start" class="titulo" color="light">Comunicados</ion-title>
                   </ion-item>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                  <router-link to="/tps">
                  <ion-card color="primary">
                    <ion-item lines="none" color="primary">
                        <ion-icon :icon="fileTrayFullOutline" slot="start" class="icon2"></ion-icon>
                        <ion-title slot="start" class="titulo" color="light">Trabajos Prácticos</ion-title>
                   </ion-item>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                  <router-link to="/evaluaciones">
                  <ion-card color="primary">
                    <ion-item lines="none" color="primary">
                        <ion-icon :icon="readerOutline" slot="start" class="icon2"></ion-icon>
                        <ion-title slot="start" class="titulo" color="light">Evaluaciones</ion-title>
                   </ion-item>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                  <router-link to="/material">
                  <ion-card color="primary">
                    <ion-item lines="none" color="primary">
                        <ion-icon :icon="libraryOutline" slot="start" class="icon2"></ion-icon>
                        <ion-title slot="start" class="titulo" color="light">Material</ion-title>
                   </ion-item>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                  <router-link to="/comunicados">
                  <ion-card color="primary" class="margin-buttom-50">
                    <ion-item lines="none" color="primary">
                        <ion-icon :icon="peopleOutline" slot="start" class="icon2"></ion-icon>
                        <ion-title slot="start" class="titulo" color="light">Personas</ion-title>
                   </ion-item>
                      <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                    </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-50{
  margin-bottom: 60px;
}
.lados{
  margin-top: 20px;
  margin-bottom: 20px;
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
   margin-inline-start: 16px; 
}
.icon1{ 
    color: white; 
    font-size: 25px;
    margin-left: unset;
    margin-inline-start: 0px;
}
.icon2{ 
    color: white;
    margin-right: 0px; 
}
.titulo{
    margin-inline-start: -10px;
}
.perfil{ 
   color: white; 
   font-size: 35px;
   margin-inline-end: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ fileTrayFullOutline, chevronForwardOutline, arrowBackOutline, megaphoneOutline, libraryOutline, readerOutline, peopleOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, fileTrayFullOutline, chevronForwardOutline, arrowBackOutline, megaphoneOutline, libraryOutline, readerOutline, peopleOutline } 
  }
});
</script>