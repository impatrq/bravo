<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/home2" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Noticias</ion-title>
      </ion-toolbar>
    </ion-header>

      <ion-content :fullscreen="true">
         <ion-row class="ion-justify-content-center fullheight">
            <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
                  <router-link to="/noticia11">
                  <ion-card color="primary">
                    <ion-card-header>
                      <ion-card-subtitle>29 de diciembre de 2020</ion-card-subtitle>
                      <ion-card-title>Información para padres y alumnos de 7° Año</ion-card-title>
                   </ion-card-header>
                      <ion-card-content>
                        Sres. Padres de 7mo año: Se les informa que según las últimas disposiciones, los alumnos de séptimo año retomarán sus actividades el día...
                      </ion-card-content>
                    <ion-item color="primary">
                         <ion-icon :icon="chevronForwardOutline" slot="end" class="iconinfo"></ion-icon>
                    </ion-item>
                  </ion-card>
                  </router-link>
                  <router-link to="/noticia12">
                    <ion-card color="primary">
                    <ion-card-header>
                      <ion-card-subtitle>29 de diciembre de 2020</ion-card-subtitle>
                      <ion-card-title>Fin del ciclo lectivo 2020</ion-card-title>
                   </ion-card-header>
                      <ion-card-content>
                        Sres. Padres: Se les informa que se podrán hacer consultas a preceptores y profesores hasta el día 30/12/2020. A partir del día 17/02/202...
                      </ion-card-content>
                      <ion-item color="primary">
                         <ion-icon :icon="chevronForwardOutline" slot="end" class="iconinfo"></ion-icon>
                      </ion-item>
                      </ion-card>
                      </router-link>
                      <router-link to="/noticia13">
                    <ion-card color="primary">
                    <ion-card-header>
                      <ion-card-subtitle>23 de diciembre de 2020</ion-card-subtitle>
                      <ion-card-title>SALUDO A LAS FAMILIAS</ion-card-title>
                   </ion-card-header>
                      <ion-card-content>
                      Estimadas Familias de la E.E.S.T. Nº 7 de Quilmes: Estamos llegando a la finalización del presente año, un año sumamente particular y excepcional ...
                      </ion-card-content>
                      <ion-item color="primary">
                         <ion-icon :icon="chevronForwardOutline" slot="end" class="iconinfo"></ion-icon>
                      </ion-item>
                      </ion-card>
                      </router-link>
                    <ion-card color="primary">
                    <ion-card-header>
                      <ion-card-subtitle>23 de diciembre de 2020</ion-card-subtitle>
                      <ion-card-title>IMPORTANTE INSCRIPCIÓN CICLO LECTIVO 2021</ion-card-title>
                   </ion-card-header>
                      <ion-card-content>
                        Sr. Padres, les informamos que al realizar la inscripción de alumnos regulares al ciclo lectivo 2021, quizás no les llegue el mail con la...
                      </ion-card-content>
                    <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="iconinfo"></ion-icon></ion-item>
                  </ion-card>
                    <ion-card color="primary">
                    <ion-card-header>
                      <ion-card-subtitle>4 de diciembre de 2020</ion-card-subtitle>
                      <ion-card-title>Mails de los padres</ion-card-title>
                   </ion-card-header>
                      <ion-card-content>
                        Sres padres, Les solicitamos tengan a bien, a aquellos que todavía no lo hicieron, enviarle al preceptor del curso su correo electrónic....
                      </ion-card-content>
                    <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="iconinfo"></ion-icon></ion-item>
                  </ion-card>
               <ion-card color="primary" class="ion-padding-top margin-buttom-60">
                  <ion-item color="primary" class="img"><img src="@/components/img/imgnot1.png"></ion-item>
                    <ion-card-header>
                      <ion-card-subtitle>3 de diciembre de 2020</ion-card-subtitle>
                      <ion-card-title>Felicitaciones de la Dirección de Educación Técnica</ion-card-title>
                   </ion-card-header>
                      <ion-card-content>
                        Comunidad Educativa de la E.E.S.T N°7: Por medio de la presente, les hacemos llegar las felicitaciones recibidas por parte de Mariano Fer...
                      </ion-card-content>
                      <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="iconinfo"></ion-icon></ion-item>
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
.fullheight{
  height: 100%; 
}
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
.iconinfo{ 
   color: white; 
   font-size: 15px;
   margin-inline-end: 16px; 
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, chevronForwardOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
      setup() {

    return { arrowBackOutline, chevronForwardOutline } 
  }


});
</script>