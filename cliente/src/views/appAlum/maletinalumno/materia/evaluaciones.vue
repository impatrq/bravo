<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/mat1" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Volver a "Materia1"</ion-title>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                          <router-link to="/evaluacion1">
                          <ion-card color="primary">
                            <ion-item lines="none" color="primary">
                              <ion-icon :icon="documentOutline" slot="start" class="icon2"></ion-icon>
                              <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Evaluación 1</ion-title>
                              </ion-label>
                            </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Puntuación:</ion-text>
                                <ion-text slot="start" class="estado" color="success">100/100</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Estado:</ion-text>
                                <ion-text slot="start" class="estado" color="success">Aprobado</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                              </ion-item>
                          </ion-card>
                          </router-link>
                          <ion-card color="primary">
                            <ion-item lines="none" color="primary">
                              <ion-icon :icon="documentOutline" slot="start" class="icon2"></ion-icon>
                              <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Evaluación 2</ion-title>
                              </ion-label>
                            </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Puntuación:</ion-text>
                                <ion-text slot="start" class="estado" color="warning">70/100</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Estado:</ion-text>
                                <ion-text slot="start" class="estado" color="warning">Aprobado</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                              </ion-item>
                          </ion-card>
                          <ion-card color="primary" class="margin-buttom-60">
                            <ion-item lines="none" color="primary">
                              <ion-icon :icon="documentOutline" slot="start" class="icon2"></ion-icon>
                              <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Evaluación 3</ion-title>
                              </ion-label>
                            </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Puntuación:</ion-text>
                                <ion-text slot="start" class="estado" color="danger">30/100</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Estado:</ion-text>
                                <ion-text slot="start" class="estado" color="danger">Desaprobado</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                              </ion-item>
                          </ion-card>
                      </ion-col>
                    </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.boton{
  margin-top: 10px;
  margin-bottom: 10px;
}
.margin-buttom-60{
  margin-bottom: 60px;
}
.fullheight{
  height: 100%; 
}
.fullwidth{
  width: 100%; 
}
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
.titulo{
    margin-inline-start: -10px;
}
.subtitulo{
    margin-inline-start: 15px;
    font-size: 18px;
}
.estado{
    margin-inline-start: -20px;
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
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, documentOutline, chevronForwardOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
    setup() {

    return { arrowBackOutline, documentOutline, chevronForwardOutline } 
  }

});
</script>
