<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/home">
          <ion-icon :icon="home" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Buscar</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="briefcase" href="/maletin">
          <ion-icon :icon="briefcase" />
          <ion-label>Tareas</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, ellipse, square, triangle, search, briefcase } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home,
      search,
      briefcase,
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>