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
                <h7 class="fecha margen">23 de diciembre de 2020</h7>
            </ion-text>
            <ion-text color="primary">
              <h1 class="titulos margen margin-buttom-50">SALUDO A LAS FAMILIAS</h1>
            </ion-text>
            <ion-text class="ion-text-start">
                <h5 class="informe margen">Estimadas Familias de la E.E.S.T. Nº 7 de Quilmes:</h5>
            </ion-text>
            <ion-text class="ion-padding-top">
                <h5 class="informe margen margin-buttom-50">Estamos llegando a la finalización del presente año, un año sumamente particular y excepcional que nos llevó a todas y todos a tener que migrar a un nuevo formato de trabajo, el virtual. 
                    Todos tuvimos nuevas vivencias y a partir de allí nuevas experiencias, las que nos enriquecieron y establecieron formas de comunicación distintas y otras formas de acuerdos de convivencia siempre en pos de garantizar el derecho a la educación de las y los jóvenes de la escuela.
                    En esta instancia quiero agradecer a las familias el compromiso y dedicación demostrados al estar presentes trabajando junto a los chicos y acompañando a la escuela en cada etapa de este tránsito, sosteniendo más que nunca el vínculo.
                    Un apartado especial para los alumnos, protagonistas principales por su dedicación y compromiso para cumplir con las consignas propuestas por los docentes muchas veces alterando las rutinas familiares.
                    Gracias a todos y el deseo de mi parte de la mejor de las Fiestas de Navidad y Año Nuevo, y unas tranquilas vacaciones. Que el próximo año nos encuentre juntos para afrontar los nuevos desafíos.</h5>
            </ion-text>
            <ion-text class="margin-buttom-50">
                <h5 class="saludosc">Jorge Juares</h5>
                <h5 class="saludosc">Director</h5>
                <h5 class="saludosc">E.E.S.T. Nº 7 de Quilmes</h5>
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
.saludosc{
  font-size: 18px;
  color: white;
  text-align: center;
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