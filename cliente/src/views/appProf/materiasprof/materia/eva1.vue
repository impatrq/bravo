<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/prof/eval" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
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
            <ion-label>Entregas de alumnos</ion-label>
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
                            <h7 class="gris margen">Fecha: 1 de abril de 2020 9:00</h7>
                        </ion-text>
                        <ion-item lines="none" class="margenitem">
                        <ion-text>
                            <h1 class="titulos margen margin-buttom-10">EVALUACIÓN 1</h1>
                        </ion-text>
                        </ion-item>
                            <ion-card>
                                <ion-list>
                                  <ion-list-header>Temas:</ion-list-header>
                                    <ion-item>
                                        <ion-label>
                                            Material 1
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label>
                                            Material 1.1
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label>
                                            Material 1.2
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-label>
                                            Material 1.3
                                        </ion-label>
                                    </ion-item>
                                </ion-list>
                            </ion-card>
                        <ion-item lines="none" class="margenitem">
                        <ion-text> 
                            <h4 class="adjunto gris">Archivo adjunto (Disponible el dia de la fecha)</h4>
                        </ion-text>
                        </ion-item>
                        <ion-button fill="clear" color="light">
                          <ion-thumbnail slot="start">
                            <img src="@/components/img/pdf-icon.jpg">
                          </ion-thumbnail>
                            <ion-label>Evaluación.pdf</ion-label>
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
import { IonPage, IonHeader, IonToolbar, IonContent, actionSheetController, IonCheckbox } from '@ionic/vue';
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
