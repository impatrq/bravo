<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/prof/materia" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Volver a "Materia1"</ion-title>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                          <ion-card color="primary">
                            <ion-item lines="none" color="primary">
                              <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet"></ion-icon>
                              <ion-icon :icon="documentOutline" slot="start" class="icon2"></ion-icon>
                              <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Evaluación 1</ion-title>
                              </ion-label>
                            </ion-item>
                              <router-link to="/prof/eva1">
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Publicado:</ion-text>
                                <ion-text slot="start" class="estado" color="medium">DD/MM/AAAA</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                              </ion-item>
                          </router-link>
                          </ion-card>
                          <ion-card color="primary">
                            <ion-item lines="none" color="primary">
                              <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet"></ion-icon>
                              <ion-icon :icon="documentOutline" slot="start" class="icon2"></ion-icon>
                              <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Evaluación 2</ion-title>
                              </ion-label>
                            </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Publicado:</ion-text>
                                <ion-text slot="start" class="estado" color="medium">DD/MM/AAAA</ion-text>
                              </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                              </ion-item>
                          </ion-card>
                          <ion-card color="primary" class="margin-buttom-60">
                            <ion-item lines="none" color="primary">
                              <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet"></ion-icon>
                              <ion-icon :icon="documentOutline" slot="start" class="icon2"></ion-icon>
                              <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Evaluación 3</ion-title>
                              </ion-label>
                            </ion-item>
                              <ion-item lines="none" color="primary">
                                <ion-text slot="start">Publicado:</ion-text>
                                <ion-text slot="start" class="estado" color="medium">DD/MM/AAAA</ion-text>
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
import { IonPage, IonHeader, IonToolbar, IonContent, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, documentOutline, chevronForwardOutline, ellipsisVertical, pencilSharp, trash, close }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
    methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Editar',
              icon: pencilSharp,
            },
            {
              text: 'Borrar',
              icon: trash,
            },
            {
              text: 'Cancelar',
              icon: close,
            },
          ],
        });
      return actionSheet.present();
    },
  },
    setup() {
      
    return { arrowBackOutline, documentOutline, chevronForwardOutline, ellipsisVertical, pencilSharp, trash, close } 
  }

});
</script>
