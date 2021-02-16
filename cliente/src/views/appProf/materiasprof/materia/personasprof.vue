<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/mat1" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row class="ion-justify-content-center fullheight">
        <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
        <ion-item>
            <ion-text class="cargo">Profesor:</ion-text>
        </ion-item>

        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor</h2>
          </ion-label>
        </ion-item>

        <ion-item lines="full">
            <ion-text class="cargo">Alumnos:</ion-text>
        </ion-item>

        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 1</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>
        
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 2</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>
        
        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 3</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 4</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 5</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 6</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 7</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>

        <ion-item lines="none">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 8</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>

        <ion-item lines="none" class="margin-buttom-50">
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 9</h2>
          </ion-label>
          <ion-icon :icon="ellipsisVertical" slot="end" @click="presentActionSheet" class="icon"></ion-icon>
        </ion-item>
        
        </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<style>
.cargo{
    font-size: 20px;
}
.margin-buttom-50{
  margin-bottom: 50px;
}
.fullwidth{
  width: 100%; 
}
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, actionSheetController } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, chatbubbleEllipsesOutline, exitOutline, ellipsisVertical }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'Enviar mensaje',
              icon: chatbubbleEllipsesOutline,
            },
            {
              text: 'Quitar',
              icon: exitOutline,
            },
          ],
        });
      return actionSheet.present();
    },
  },
    setup() {

    return { arrowBackOutline, chatbubbleEllipsesOutline, exitOutline, ellipsisVertical } 
  }

});
</script>