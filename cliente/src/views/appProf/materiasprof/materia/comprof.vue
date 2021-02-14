<template>
  <ion-page>
    <ion-header translucent class="margin-buttom-40">
      <ion-toolbar color="primary">
                <router-link to="/prof/materia" slot="start"><ion-icon :icon="arrowBackOutline" class="iconmat"></ion-icon></router-link>
                <ion-title color="light">Volver a "Materia"</ion-title>
            </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                  <ion-row class="ion-justify-content-center fullheight">
                      <ion-col size-xl="4" size-sm="10">
                          <ion-card color="primary">
                                    <ion-item lines="none" color="primary">
                                        <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet"></ion-icon>
                                        <ion-avatar slot="start">
                                            <img src="@/components/img/teacher.png">
                                        </ion-avatar>
                                      <ion-label>
                                        <h2>Profesor</h2>
                                        <h4 class="gris">10 de mayo de 2021</h4>
                                      </ion-label>
                                    </ion-item>
                                    <ion-card-content class="margin-buttom-70">
                                      Hola a todos, adjunto trabajos prácticos y material, revisar sus pestañas correspondientes.
                                    </ion-card-content>
                                    <ion-item lines="full" color="primary" class="comentarios">
                                      <ion-label>
                                        <h4 class="gris">0 comentarios de la clase</h4>
                                      </ion-label>
                                    </ion-item>
                         </ion-card>
                         <ion-card color="primary">
                                    <ion-item lines="none" color="primary">
                                      <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet"></ion-icon>
                                      <ion-avatar slot="start">
                                        <img src="@/components/img/teacher.png">
                                      </ion-avatar>
                                      <ion-label>
                                        <h2>Profesor</h2>
                                        <h4 class="gris">Fecha</h4>
                                      </ion-label>
                                    </ion-item>
                                    <ion-card-content class="margin-buttom-70">
                                      Anuncio
                                    </ion-card-content>
                                    <ion-item lines="full" color="primary" class="comentarios">
                                      <ion-label>
                                        <h4 class="gris">0 comentarios de la clase</h4>
                                      </ion-label>
                                    </ion-item>
                         </ion-card>
                         <ion-card color="primary" class="margin-buttom-60">
                                    <ion-item lines="none" color="primary">
                                      <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet"></ion-icon>
                                      <ion-avatar slot="start">
                                        <img src="@/components/img/teacher.png">
                                      </ion-avatar>
                                      <ion-label>
                                        <h2>Profesor</h2>
                                        <h4 class="gris">Fecha</h4>
                                      </ion-label>
                                    </ion-item>
                                    <ion-card-content class="margin-buttom-70">
                                      Anuncio
                                    </ion-card-content>
                                    <ion-item lines="full" color="primary" class="comentarios">
                                      <ion-label>
                                        <h4 class="gris">0 comentarios de la clase</h4>
                                      </ion-label>
                                    </ion-item>
                         </ion-card>
                      </ion-col>
                  </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-70{
  max-block-size: 70px;
  margin-bottom: 70px;
}
.margin-buttom-60{
  margin-bottom: 60px;
}
.fullheight{
  height: 100%; 
}
.iconmat{ 
  color: white; 
  font-size: 25px;
  margin-inline-start: 16px; 
}
.gris{
  color: gray;
}
.comentarios{
  border-top-style: solid;
  border-color: gray;
  border-width: unset;
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, ellipsisVertical, trash, close, pencilSharp }from 'ionicons/icons';

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
        
    return { arrowBackOutline, ellipsisVertical, trash, close, pencilSharp } 
  }

});
</script>
