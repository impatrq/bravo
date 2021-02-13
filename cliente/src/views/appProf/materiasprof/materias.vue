<template>
    <ion-page>
        <ion-header translucent class="margin-buttom-40">
            <ion-toolbar color="primary">
                 <ion-title class="ion-padding-start">Materias</ion-title>
                <router-link to="/prof/pfprof" slot="end"><ion-icon :icon="personCircleOutline" slot="end" class="perfil"></ion-icon></router-link>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                  <router-link to="/prof/materia">
                  <ion-card color="primary">
                    <ion-item color="primary" lines="none">
                      <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                      <ion-card-title>Materia 1</ion-card-title>
                    </ion-item>
                      <ion-item color="primary">
                        <ion-card-subtitle>Alumnos: 0</ion-card-subtitle>
                      </ion-item>
                  </ion-card>
                  </router-link>
                  <ion-card color="primary">
                    <ion-item color="primary" lines="none">
                      <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                      <ion-card-title>Materia 2</ion-card-title>
                    </ion-item>
                      <ion-item color="primary">
                        <ion-card-subtitle>Alumnos: 0</ion-card-subtitle>
                      </ion-item>
                  </ion-card>
                  <ion-card color="primary">
                    <ion-item color="primary" lines="none">
                      <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                      <ion-card-title>Materia 3</ion-card-title>
                    </ion-item>
                      <ion-item color="primary">
                        <ion-card-subtitle>Alumnos: 0</ion-card-subtitle>
                      </ion-item>
                  </ion-card>
                  <ion-card color="primary">
                    <ion-item color="primary" lines="none">
                      <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                      <ion-card-title>Materia 4</ion-card-title>
                    </ion-item>
                      <ion-item color="primary">
                        <ion-card-subtitle>Alumnos: 0</ion-card-subtitle>
                      </ion-item>
                  </ion-card>
                  <ion-card color="primary">
                    <ion-item color="primary" lines="none">
                      <ion-icon :icon="ellipsisVertical" slot="end"></ion-icon>
                      <ion-card-title>Materia 5</ion-card-title>
                    </ion-item>
                      <ion-item color="primary">
                        <ion-card-subtitle>Alumnos: 0</ion-card-subtitle>
                      </ion-item>
                  </ion-card>
                    </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-60{
  margin-bottom: 60px;
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
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
.icon1{ 
    color: white; 
    font-size: 25px;
    margin-left: unset;
    margin-inline-start: 0px;
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
import{ chevronForwardOutline, arrowBackOutline, personCircleOutline, ellipsisVertical }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, chevronForwardOutline, arrowBackOutline, personCircleOutline, ellipsisVertical } 
  }
});
</script>