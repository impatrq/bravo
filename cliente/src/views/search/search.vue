<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-searchbar color="primary"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
  
  <ion-content :fullscreen="true">
    <ion-row class="ion-justify-content-center fullheight">
        <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
          <ion-card color="primary" class="ion-padding-top margin-buttom-35">
              <ion-item lines="none" color="primary">
                <ion-title class="titulo">Ciclo Básico</ion-title>
              </ion-item>
              <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <router-link to="/sProfBas">
                      <ion-item lines="none" color="secondary">
                        <ion-card-header>
                          <ion-card-title class="titulo">Profesor</ion-card-title>
                          <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                        </ion-card-header>
                        <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                      </ion-item>
                    </router-link>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Alumno</ion-card-title>
                    </ion-card-header>
                    <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Preceptor</ion-card-title>
                      </ion-card-header>
                      <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
              </ion-slides>
          </ion-card>
            <ion-card color="primary" class="ion-padding-top margin-buttom-35">
              <ion-item lines="none" color="primary">
                <ion-title class="titulo">Ciclo Superior Aeronáutica</ion-title>
              </ion-item>
              <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <router-link to="/sProfAer">
                      <ion-item lines="none" color="secondary">
                        <ion-card-header>
                          <ion-card-title class="titulo">Profesor</ion-card-title>
                        </ion-card-header>
                          <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                      </ion-item>
                    </router-link>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Alumno</ion-card-title>
                    </ion-card-header>
                    <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Preceptor</ion-card-title>
                      </ion-card-header>
                      <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Pañol</ion-card-title>
                      </ion-card-header>
                      <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
              </ion-slides>
            </ion-card>
            <ion-card color="primary" class="ion-padding-top margin-buttom-60">
              <ion-item lines="none" color="primary">
                <ion-title class="titulo">Ciclo Superior Aviónica</ion-title>
              </ion-item>
              <ion-slides pager="true" :options="slideOpts">
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <router-link to="/sProfAv">
                      <ion-item lines="none" color="secondary">
                        <ion-card-header>
                          <ion-card-title class="titulo">Profesor</ion-card-title>
                          <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                        </ion-card-header>
                      </ion-item>
                    </router-link>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Alumno</ion-card-title>
                    </ion-card-header>
                    <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Preceptor</ion-card-title>
                      </ion-card-header>
                      <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
                <ion-slide>
                  <ion-card class="fullwidth margin-buttom-35">
                    <ion-item lines="none" color="secondary">
                      <ion-card-header>
                        <ion-card-title class="titulo">Pañol</ion-card-title>
                      </ion-card-header>
                      <ion-icon :icon="caretForwardOutline" slot="end"></ion-icon>
                    </ion-item>
                  </ion-card>
                </ion-slide>
              </ion-slides>
            </ion-card>
        </ion-col>
    </ion-row>

  </ion-content>
  </ion-page>
</template>

<style>
.titulo{
    margin-inline-start: -10px;
}
.swiper-pagination-bullet{
background: white;
}
.margin-buttom-60{
  margin-bottom: 60px;
}
.margin-buttom-45{
  margin-bottom: 45px;
}
.margin-buttom-35{
  margin-bottom: 35px;
}
.fullwidth{
  width: 100%; 
}
.fullheight{
  height: 100%; 
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ caretBackOutline, caretForwardOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts, caretBackOutline, caretForwardOutline } 
  }

});
</script>


