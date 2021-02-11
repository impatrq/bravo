<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/material" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true" color="fondo">
                <ion-list>
                        <ion-item class="margenitem">
                        <ion-text>
                            <h1 class="titulos margen margin-buttom-10">Material: Trabajo Práctico 1</h1>
                        </ion-text>
                        </ion-item>
                        <ion-item lines="none" class="margin-top-20">
                            <ion-text class="comentarioprof">
                                Descripción (Opcional)
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
                </ion-list>
            </ion-content>
    </ion-page>
</template>

<style>
.comentarioprof{
  max-block-size: 70px;
  margin-bottom: 70px;
}
.margin-buttom-260{
  margin-bottom: 260px;
}
.margin-buttom-10{
  margin-bottom: 10px;
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
.ion-content{
  --ion-background-color: #383a3e;
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
