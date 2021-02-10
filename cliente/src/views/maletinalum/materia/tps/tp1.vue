<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/tps" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                <ion-list>
                        <ion-text>
                            <h7 class="letra-15 gris margen">Fecha de entrega: 20 de marzo de 2020 15:00</h7>
                        </ion-text>
                        <ion-item lines="none" class="margenitem">
                        <ion-text>
                            <h1 class="titulos margen margin-buttom-10">TRABAJO PRÁCTICO 1</h1>
                        </ion-text>
                        </ion-item>
                        <ion-item lines="inset">
                            <ion-text slot="end" color="success">Aprobado</ion-text>
                            <ion-progress-bar color="success" value="1.0"></ion-progress-bar>
                        </ion-item>
                        <ion-item lines="none" class="margin-top-20">
                            <ion-text class="comentarioprof">
                                Adjunto un cuestionario que será el Trabajo Práctico 1, el cual deberan entregar con rótulo y en formato word.
                            </ion-text>
                        </ion-item>
                        <ion-item lines="none" class="margenitem">
                        <ion-text> 
                            <h4 class="adjunto gris">Archivos adjuntos</h4>
                        </ion-text>
                        </ion-item>
                        <ion-button fill="clear" color="light">
                          <ion-thumbnail slot="start">
                            <img src="@/components/img/pdf-icon.jpg">
                          </ion-thumbnail>
                            <ion-label>Trabajo Práctico.pdf</ion-label>
                        </ion-button>
                        <ion-item>
                        <ion-text class="margenitem margin-top-20"> 
                            <h3 class="margin-buttom-10 adjunto">Entregar:</h3>
                        </ion-text>
                        </ion-item>
                        <ion-button fill="solid" color="dark">Seleccionar archivo</ion-button>
                        <label>archivo.ejem</label>
                        <ion-button class="margin-top-10 margin-buttom-30" expand="full" fill="solid" color="primary">Subir</ion-button>
                </ion-list>
            </ion-content>
    </ion-page>
</template>

<style>
.comentarioprof{
  max-block-size: 70px;
  margin-bottom: 70px;
}
.margin-buttom-60{
  margin-bottom: 60px;
}
.margin-buttom-10{
  margin-bottom: 10px;
}
.margin-buttom-30{
  margin-bottom: 30px;
}
.margin-top-10{
  margin-top: 10px;
}
.margin-top-20{
  margin-top: 20px;
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
.margen{
  margin-inline-start: 15px;
  margin-inline-end: 15px;
}
.margenitem{
  margin-inline-start: -15px;
}
.fecha{
    font-size: 15px;
}
.adjunto{
    margin-inline-start: 15px;
    font-size: 18px;
}
.gris{
    color:grey;
}
.titulos{
    font-size: 25px;
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
