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
                <h7>23 de diciembre de 2020</h7>
            </ion-text>
            <ion-text color="primary">
                <h1>SALUDO A LAS FAMILIAS</h1>
            </ion-text>
            <br>
            <ion-text class="ion-text-start">
                <h5>Estimadas Familias de la E.E.S.T. Nº 7 de Quilmes:</h5>
            </ion-text>
            <br>
            <ion-text color="light">
                <h5>Estamos llegando a la finalización del presente año, un año sumamente particular y excepcional que nos llevó a todas y todos a tener que migrar a un nuevo formato de trabajo, el virtual. 
                    Todos tuvimos nuevas vivencias y a partir de allí nuevas experiencias, las que nos enriquecieron y establecieron formas de comunicación distintas y otras formas de acuerdos de convivencia siempre en pos de garantizar el derecho a la educación de las y los jóvenes de la escuela.
                    En esta instancia quiero agradecer a las familias el compromiso y dedicación demostrados al estar presentes trabajando junto a los chicos y acompañando a la escuela en cada etapa de este tránsito, sosteniendo más que nunca el vínculo.
                    Un apartado especial para los alumnos, protagonistas principales por su dedicación y compromiso para cumplir con las consignas propuestas por los docentes muchas veces alterando las rutinas familiares.
                    Gracias a todos y el deseo de mi parte de la mejor de las Fiestas de Navidad y Año Nuevo, y unas tranquilas vacaciones. Que el próximo año nos encuentre juntos para afrontar los nuevos desafíos.</h5>
            </ion-text>
            <br>
            <ion-text class="ion-text-center">
                <h4>Jorge Juares</h4>
                <h4>Director</h4>
                <h4>E.E.S.T. Nº 7 de Quilmes</h4>
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