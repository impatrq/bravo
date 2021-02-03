<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/home2" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Volver a Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-list class="ion-padding-top">
            <ion-text>
                <h7 class="fecha margen">29 de diciembre de 2020</h7>
            </ion-text>
            <ion-text color="primary">
              <h1 class="titulos margen margin-buttom-50">Información para padres y alumnos de 7° Año</h1>
            </ion-text>
            <ion-text>
                <h5 class="informe margen">Sres. Padres de 7mo año:</h5>
            </ion-text>
            <ion-text class="ion-padding-top">
                <h5 class="informe margen">Se les informa que según las últimas disposiciones, los alumnos de séptimo año retomarán sus actividades el día 17 de febrero de 2021. A partir del 24 de febrero del mismo año los alumnos comenzarán a cerrar su ciclo lectivo en función del grado de avance de su trayectoria educativa.
                    Se prevé la realización del acto de egreso en una fecha a definir a partir del 24 de febrero de 2021.
                    Cabe aclarar que todas las acciones a llevar adelante, se harán en función de la situación sanitaria del momento. 
                    De todos modos los mantendremos informados a través de nuestra página web</h5>
            </ion-text>
            <ion-text class="ion-text-start margin-buttom-50">
                <h5 class="saludos margen">Equipo Directivo</h5>
            </ion-text>
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