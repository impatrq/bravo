<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/prof/materia" slot="start"><ion-icon :icon="closeOutline" class="icon"></ion-icon></router-link>
        <ion-icon :icon="attachOutline" class="marginicon" slot="end" @click="presentActionSheet"></ion-icon>
        <ion-icon :icon="sendOutline" class="marginicon" slot="end"></ion-icon>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                <ion-list>
                    <ion-card>
                        <ion-item>
                            <ion-label position="floating" color="medium">Título</ion-label>
                            <ion-input></ion-input>
                        </ion-item>
                    </ion-card>
                        <ion-card>
                        <ion-item>
                            <ion-label position="floating" color="medium">Descripción</ion-label>
                            <ion-input></ion-input>
                        </ion-item>
                    </ion-card>
                    <ion-card>
                                <ion-list>
                                  <ion-list-header>Temas:</ion-list-header>
                                    <ion-item>
                                      <ion-icon :icon="bookOutline" slot="start" class="icon1"></ion-icon>
                                        <ion-label>
                                            Material 1
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-icon :icon="bookOutline" slot="start" class="icon1"></ion-icon>
                                        <ion-label>
                                            Material 1.1
                                        </ion-label>
                                    </ion-item>
                                    <ion-item>
                                        <ion-icon :icon="addOutline" slot="start" class="icon1"></ion-icon>
                                        <ion-label>
                                            Añadir Material
                                        </ion-label>
                                    </ion-item>
                                </ion-list>
                            </ion-card>
                    <ion-item class="margin-top-20">
                        <ion-label color="medium">Fecha de inicio:</ion-label>
                        <ion-input type="datetime-local"></ion-input>
                    </ion-item>
                    <ion-item class="margin-buttom-30">
                        <ion-label color="medium">Fecha de entrega:</ion-label>
                        <ion-input type="datetime-local"></ion-input>
                    </ion-item>
                </ion-list>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-top-20{
  margin-top: 20px;
}
.margin-buttom-30{
  margin-bottom: 30px;
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
.icon1{ 
   color: white; 
   font-size: 15px;
}
.marginicon{ 
   color: white; 
   font-size: 25px;
   margin-inline-end: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ closeOutline, sendOutline, attachOutline, linkOutline, documentAttachOutline, addOutline, bookOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
    methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          header: 'Adjuntar',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Vínculo',
              icon: linkOutline,
            },
            {
              text: 'Archivo',
              icon: documentAttachOutline,
            },
          ],
        });
      return actionSheet.present();
    },
  },
    setup() {

    return { closeOutline, sendOutline, attachOutline, linkOutline, documentAttachOutline, addOutline, bookOutline } 
  }

});
</script>
