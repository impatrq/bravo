<template>
<ion-page>

    <ion-header translucent>
        <ion-toolbar color="primary">
            <router-link to="/search" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
            <ion-title color="light">Ciclo Básico</ion-title>
        </ion-toolbar>
    </ion-header>
    
    <ion-content fullscreen>
      <ion-list>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor 1</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher2.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesora 1</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor 2</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher2.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesora 2</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor 3</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher2.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesora 3</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor 4</h2>
          </ion-label>
        </ion-item>
        <ion-item lines="full">
          <ion-avatar slot="start">
            <img src="@/components/img/teacher2.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesora 4</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>

    
</ion-page>
</template>

<style>

.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline }from 'ionicons/icons';


export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent},
  setup() {
    return { arrowBackOutline } 
  }
});
</script>
