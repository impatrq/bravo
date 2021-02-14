<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/prof/tps" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="opts"></ion-icon>
      </ion-toolbar>

    </ion-header>
            <ion-content :fullscreen="true">
                <ion-grid class="tabs">
        <ion-row>
            <ion-segment>
          <ion-segment-button @click="tabSwitch(1)">
            <ion-label>Contenido</ion-label>
          </ion-segment-button>
          <ion-segment-button @click="tabSwitch(2)">
            <ion-label>Trabajo de alumnos</ion-label>
          </ion-segment-button>
            </ion-segment>
        </ion-row>
      </ion-grid>
      <ion-grid v-if="toggleTab === 1">
        <ion-row>
            <ion-col>
                <div>
                    <ion-list>
                        <ion-text>
                            <h7 class="gris margen">Fecha de entrega: 20 de marzo de 2020</h7>
                        </ion-text>
                        <ion-item lines="none" class="margenitem">
                        <ion-text>
                            <h1 class="titulos margen margin-buttom-10">TRABAJO PRÁCTICO 1</h1>
                        </ion-text>
                        </ion-item>
                        <ion-item lines="none" class="margin-top-20">
                            <ion-text class="comentarioprof">
                                Adjunto un cuestionario que será el Trabajo Práctico 1, el cual deberan entregar con rótulo y en formato word.
                            </ion-text>
                        </ion-item>
                        <ion-item lines="none" class="margenitem">
                        <ion-text> 
                            <h4 class="adjunto gris">Archivos adjuntos</h4>
                        </ion-text>
                        </ion-item>
                        <ion-button fill="clear" color="light">
                          <ion-thumbnail slot="start">
                            <img src="@/components/img/pdf-icon.jpg">
                          </ion-thumbnail>
                            <ion-label>Trabajo Práctico.pdf</ion-label>
                        </ion-button>
                </ion-list>
                </div>
            </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid v-if="toggleTab === 2">
        <ion-row>
            <ion-col>
                <div>
                        <ion-item>
                                <ion-text slot="start">Entregados:</ion-text>
                                <ion-text slot="start">0</ion-text>
                        </ion-item>
                        <ion-item>
                                <ion-text slot="start">Calificados:</ion-text>
                                <ion-text slot="start">0</ion-text>
                        </ion-item>
                        <ion-list>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 1</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 2</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 3</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 4</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 5</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 6</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                            <ion-item>
                                    <ion-checkbox slot="start" color="light"></ion-checkbox>
                                    <ion-text slot="start">Alumno 7</ion-text>
                                    <ion-text slot="end" color="medium">0/10</ion-text>
                            </ion-item>
                        </ion-list>
                </div>
          </ion-col>
        </ion-row>
      </ion-grid>
            </ion-content>
    </ion-page>
</template>

<style>

.gris{
    color:grey;
}
.margen{
  margin-inline-start: 15px;
  margin-inline-end: 15px;
}
.margenitem{
  margin-inline-start: -15px;
}
.titulos{
    font-size: 25px;
}
.margin-buttom-10{
  margin-bottom: 10px;
}
.margin-top-20{
  margin-top: 20px;
}
.comentarioprof{
  max-block-size: 70px;
  margin-bottom: 70px;
}
.adjunto{
    margin-inline-start: 15px;
    font-size: 18px;
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
.opts{
  color: white; 
   font-size: 25px;
   margin-inline-end: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, readerOutline, chevronForwardOutline, ellipsisVertical, trash, close, pencilSharp }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
  data() {
    return {
      toggleTab: 1
    }
  },
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
    tabSwitch(int: any) {
      this.toggleTab = int;
    }
  },
    setup() {

    return { arrowBackOutline, readerOutline, chevronForwardOutline, ellipsisVertical, trash, close, pencilSharp } 
  }

});
</script>
