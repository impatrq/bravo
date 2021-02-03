<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/noticia1" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Volver a Noticias</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-list class="ion-padding-top">
            <ion-text>
                <h7 class="fecha margen">29 de diciembre de 2020</h7>
            </ion-text>
            <ion-text color="primary" class="ion-padding-buttom">
              <h1 class="titulos margen">Fin del ciclo lectivo 2020</h1>
            </ion-text>
            <ion-text class="ion-text-start">
                <h5 class="informe margen">Sres. Padres:</h5>
            </ion-text>
            <ion-text class="ion-padding-top">
                <h5 class="informe margen ion-padding-buttom">Se les informa que se podrán hacer consultas a preceptores y profesores hasta el día 30/12/2020. A partir del día 17/02/2021, los alumnos podrán ponerse en contacto con los docentes a fin de enviarles trabajados adeudados (alumnos con trayectoria educativa TEP/TED)</h5>
                <h5 class="informe margen margin-buttom-50">Así también, se adjunta el cronograma de las mesas de exámenes previos que se realizarán de forma virtual en la semana del lunes 22/02/2021 al viernes 26/02/2021.</h5>
            </ion-text>
            <ion-button class="margen margin-buttom-50" color="danger" expand="block">Previas Febrero 2021.pdf</ion-button>
        </ion-list>

    </ion-content>
  </ion-page>
</template>

<style>
.margin-buttom-50{
  margin-bottom: 50px;
}
.margen{
  margin-inline-start: 15px;
  margin-inline-end: 15px;
}
.fecha{
    color:grey;
}
.titulos{
    font-size: 31px;
    font-weight: 600;
    }
.informe{
  font-size: 15px;
  color: white;
}
.saludos{
  font-size: 23px;
  color: white;
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

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
    setup() {

    return { arrowBackOutline } 
  }

});
</script>