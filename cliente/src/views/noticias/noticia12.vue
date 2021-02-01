<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/noticia1" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Volver a Noticias</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row class="ion-justify-content-center fullheight">
        <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
        <ion-list>
            <ion-text class="gris">
                <h7>29 de diciembre de 2020</h7>
            </ion-text>
            <ion-text color="primary">
                <h1>Fin del ciclo lectivo 2020</h1>
            </ion-text>
            <br>
            <ion-text class="ion-text-start">
                <h5>Sres. Padres:</h5>
            </ion-text>
            <br>
            <ion-text color="light">
                <h5>Se les informa que se podrán hacer consultas a preceptores y profesores hasta el día 30/12/2020. A partir del día 17/02/2021, los alumnos podrán ponerse en contacto con los docentes a fin de enviarles trabajados adeudados (alumnos con trayectoria educativa TEP/TED)
                    Así también, se adjunta el cronograma de las mesas de exámenes previos que se realizarán de forma virtual en la semana del lunes 22/02/2021 al viernes 26/02/2021.</h5>
            </ion-text>
            <br>
            <ion-button color="danger" expand="block">Previas Febrero 2021.pdf</ion-button>
            <br>
            <br>
        </ion-list>
        </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<style>
.fullheight{
  height: 100%; 
}
.gris{
    color:grey;
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
    setup() {

    return { arrowBackOutline } 
  }

});
</script>