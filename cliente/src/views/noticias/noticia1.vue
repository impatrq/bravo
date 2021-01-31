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
              <ion-card color="primary">
                   <ion-card-content>
                     <ion-text class="fecha">
                        <h5>29 de dic de 2020</h5>
                    </ion-text>
                      <ion-text color="light">
                        <h2>Información para padres y alumnos de 7° Año</h2>
                    </ion-text>
                      <ion-text color="light">
                        <h3>Sres. Padres de 7mo año: Se les informa que según las últimas disposiciones, los alumnos de séptimo año retomarán sus actividades el día...</h3>
                     </ion-text>
                   </ion-card-content>
                   <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="icon"></ion-icon></ion-item>
              </ion-card>
              <ion-card color="primary">
                   <ion-card-content>
                     <ion-text class="fecha">
                        <h5>29 de dic de 2020</h5>
                    </ion-text>
                      <ion-text color="light">
                        <h2>Fin del ciclo lectivo 2020</h2>
                    </ion-text>
                      <ion-text color="light">
                        <h3>Sres. Padres: Se les informa que se podrán hacer consultas a preceptores y profesores hasta el día 30/12/2020. A partir del día 17/02/202...</h3>
                     </ion-text>
                   </ion-card-content>
                   <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="icon"></ion-icon></ion-item>
              </ion-card>
                   <ion-card color="primary">
                   <ion-card-content>
                     <ion-text class="fecha">
                        <h5>23 de dic de 2020</h5>
                    </ion-text>
                      <ion-text color="light">
                        <h2>SALUDO A LAS FAMILIAS</h2>
                    </ion-text>
                      <ion-text color="light">
                        <h3>Quilmes, 23 de Diciembre 2020 Estimadas Familias de la E.E.S.T. Nº 7 de Quilmes: Estamos llegando a la finalización del presente año, un...</h3>
                     </ion-text>
                   </ion-card-content>
                   <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="icon"></ion-icon></ion-item>
              </ion-card>
                  <ion-card color="primary">
                   <ion-card-content>
                     <ion-text class="fecha">
                        <h5>23 de dic de 2020</h5>
                    </ion-text>
                      <ion-text color="light">
                        <h2>IMPORTANTE INSCRIPCIÓN CICLO LECTIVO 2021</h2>
                    </ion-text>
                      <ion-text color="light">
                        <h3>Sr. Padres, les informamos que al realizar la inscripción de alumnos regulares al ciclo lectivo 2021, quizás no les llegue el mail con la...</h3>
                     </ion-text>
                   </ion-card-content>
                   <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="icon"></ion-icon></ion-item>
              </ion-card>
                  <ion-card color="primary">
                   <ion-card-content>
                     <ion-text class="fecha">
                        <h5>4 de dic de 2020</h5>
                    </ion-text>
                      <ion-text color="light">
                        <h2>Mails de los padres</h2>
                    </ion-text>
                      <ion-text color="light">
                        <h3>Sres padres, Les solicitamos tengan a bien, a aquellos que todavía no lo hicieron, enviarle al preceptor del curso su correo electrónic....</h3>
                     </ion-text>
                   </ion-card-content>
                   <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="icon"></ion-icon></ion-item>
              </ion-card>
              <ion-card color="primary" class="ion-padding-top margin-buttom-top">
                  <ion-item color="primary" class="img"><img src="@/components/img/imgnot1.png"></ion-item>
                   <ion-card-content>
                     <ion-text class="fecha">
                        <h5>3 de dic de 2020</h5>
                    </ion-text>
                      <ion-text color="light">
                        <h2>Felicitaciones de la Dirección de Educación Técnica</h2>
                    </ion-text>
                      <ion-text color="light">
                        <h3>Comunidad Educativa de la E.E.S.T N°7: Por medio de la presente, les hacemos llegar las felicitaciones recibidas por parte de Mariano Fer...</h3>
                     </ion-text>
                   </ion-card-content>
                   <ion-item color="primary"><ion-icon :icon="chevronForwardOutline" slot="end" class="icon"></ion-icon></ion-item>
              </ion-card>
              <br>
              <br>
              <br>
            </ion-col>
            </ion-row>
        </ion-content>
   </ion-page>
</template>

<style>
.fecha{
  color: grey; 
}
.negrita{
  font-weight: 700; 
}
.fullheight{
  height: 100%; 
}
.logo {
   display: block;
   margin: 0;
   width: 40%;
  }
.fullwidth{
  width: 100%; 
}
.icon{ 
   color: white; 
   font-size: 15px;
   margin-inline-start: 16px; 
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