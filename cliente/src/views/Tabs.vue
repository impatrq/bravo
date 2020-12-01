<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/prof/home">
          <ion-icon :icon="home" />
        </ion-tab-button>
          
        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
        </ion-tab-button>
        
        <ion-tab-button tab="briefcase" href="/prof/maletin">
          <ion-icon :icon="briefcase" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs,  IonIcon, IonPage } from '@ionic/vue';
import { home, search, briefcase } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      home,
      search,
      briefcase,
    }
  }
}
</script>