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
        <ion-list class="ion-padding-buttom">
            <ion-text class="gris">
                <h7>29 de diciembre de 2020</h7>
            </ion-text>
            <ion-text color="primary">
                <h1>Información para padres y alumnos de 7° Año</h1>
            </ion-text>
            <br>
            <ion-text class="ion-text-start">
                <h5>Sres. Padres de 7mo año:</h5>
            </ion-text>
            <br>
            <ion-text color="light">
                <h5>Se les informa que según las últimas disposiciones, los alumnos de séptimo año retomarán sus actividades el día 17 de febrero de 2021. A partir del 24 de febrero del mismo año los alumnos comenzarán a cerrar su ciclo lectivo en función del grado de avance de su trayectoria educativa.
                    Se prevé la realización del acto de egreso en una fecha a definir a partir del 24 de febrero de 2021.
                    Cabe aclarar que todas las acciones a llevar adelante, se harán en función de la situación sanitaria del momento. 
                    De todos modos los mantendremos informados a través de nuestra página web</h5>
            </ion-text>
            <br>
            <ion-text class="ion-text-start">
                <h4>Equipo Directivo</h4>
            </ion-text>
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