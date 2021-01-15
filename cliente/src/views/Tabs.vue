<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Home" href="/prof/home">
          <ion-icon color="secondary" :icon="homeSharp" />
        </ion-tab-button>
          
        <ion-tab-button tab="search" href="/search">
          <ion-icon color="secondary" :icon="searchSharp" />
        </ion-tab-button>
        
        <ion-tab-button tab="briefcase" href="/prof/maletin">
          <ion-icon color="secondary" :icon="briefcaseSharp" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs,  IonIcon, IonPage } from '@ionic/vue';
import { homeSharp, searchSharp, briefcaseSharp } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      homeSharp,
      searchSharp,
      briefcaseSharp,
    }
  }
}
</script>