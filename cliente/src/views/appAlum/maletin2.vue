<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                 <ion-title class="ion-padding-start">Maletín</ion-title>
                <router-link to="/pfalum" slot="end"><ion-icon :icon="personCircleOutline" slot="end" class="perfil"></ion-icon></router-link>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                  <router-link to="/listmat">
                  <ion-card class="ion-padding-top" color="primary">
                    <ion-card-header>
                      <ion-card-title>Lista de Materias</ion-card-title>
                   </ion-card-header>
                      <ion-item color="primary">
                                <ion-icon :icon="albumsOutline" slot="end" class="icon2"></ion-icon>
                                <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                        </ion-item>
                  </ion-card>
                  </router-link>
                    </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-50{
  margin-bottom: 50px;
}
.lados{
  margin-top: 20px;
  margin-bottom: 20px;
}
.fullheight{
  height: 100%; 
}
.left-move{
    padding-left: 200px;
}
.fullwidth{
  width: 100%; 
}
.img{
  width: 100%;
  height: 23vh;
}
.logo {
   display: block;
   margin: 0;
   width: 40%;
  }
.icon1{ 
   color: white; 
   font-size: 25px;
    margin-left: unset;
    margin-inline-start: 0px;
}
.icon2{ 
   color: white; 
   font-size: 25px;
}
.perfil{ 
   color: white; 
   font-size: 35px;
   margin-inline-end: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ personCircleOutline, albumsOutline, chevronForwardOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, personCircleOutline, albumsOutline, chevronForwardOutline } 
  }
});
</script>