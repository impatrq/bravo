<template>
    <ion-page>
        <ion-header translucent>
            <ion-toolbar color="primary">
                <router-link to="/prof/materias" slot="start"><ion-icon :icon="arrowBackOutline" class="iconmat"></ion-icon></router-link>
                <ion-title color="light">Volver a Materias</ion-title>
            </ion-toolbar>
        </ion-header>
            <ion-content :fullscreen="true">
              <ion-fab slot="fixed" vertical="bottom" horizontal="end">
                    <ion-fab-button>
                        <ion-icon :icon="addOutline" class="fab"></ion-icon>
                    </ion-fab-button>
                    <ion-fab-list side="top">
                      <ion-fab-button color="light">
                        <router-link to="/prof/nmat">
                        <ion-icon :icon="bookOutline"></ion-icon>
                        </router-link>
                      </ion-fab-button>
                      <ion-fab-button color="light">
                        <router-link to="/prof/neval">
                        <ion-icon :icon="documentOutline"></ion-icon>
                        </router-link>
                      </ion-fab-button>
                      <ion-fab-button color="light">
                          <router-link to="/prof/ntp">
                          <ion-icon :icon="readerOutline"></ion-icon>
                          </router-link>
                      </ion-fab-button>
                      <ion-fab-button color="light">
                          <router-link to="/prof/ncom">
                          <ion-icon :icon="megaphoneOutline"></ion-icon>
                          </router-link>
                      </ion-fab-button>
                    </ion-fab-list>
                </ion-fab>
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                      <router-link to="/prof/com">
                        <ion-card color="primary">
                          <ion-item lines="none" color="primary">
                              <ion-icon :icon="megaphoneOutline" slot="start" class="icon2mat"></ion-icon>
                              <ion-label>
                                <ion-title slot="start" class="titulo" color="light">Comunicados</ion-title>
                              </ion-label>
                         </ion-item>
                            <ion-item color="primary">
                                  <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1mat"></ion-icon>
                              </ion-item>
                        </ion-card>
                      </router-link>
                      <router-link to="/prof/tps">
                        <ion-card color="primary">
                          <ion-item lines="none" color="primary">
                              <ion-icon :icon="fileTrayFullOutline" slot="start" class="icon2mat"></ion-icon>
                              <ion-label>
                                <ion-title slot="start" class="titulo" color="light">Trabajos Prácticos</ion-title>
                              </ion-label>
                         </ion-item>
                            <ion-item color="primary">
                                  <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1mat"></ion-icon>
                              </ion-item>
                        </ion-card>
                      </router-link>
                      <router-link to="/prof/eval">
                        <ion-card color="primary">
                          <ion-item lines="none" color="primary">
                              <ion-icon :icon="documentsOutline" slot="start" class="icon2mat"></ion-icon>
                              <ion-label>
                                <ion-title slot="start" class="titulo" color="light">Evaluaciones</ion-title>
                              </ion-label>
                          </ion-item>
                          <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1"></ion-icon>
                          </ion-item>
                        </ion-card>
                      </router-link>
                      <router-link to="/prof/material">
                        <ion-card color="primary">
                          <ion-item lines="none" color="primary">
                              <ion-icon :icon="libraryOutline" slot="start" class="icon2mat"></ion-icon>
                              <ion-label>
                                <ion-title slot="start" class="titulo" color="light">Material</ion-title>
                              </ion-label>
                          </ion-item>
                          <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1mat"></ion-icon>
                          </ion-item>
                        </ion-card>
                      </router-link>
                      <router-link to="/prof/personas">
                        <ion-card color="primary" class="margin-buttom-50">
                          <ion-item lines="none" color="primary">
                            <ion-icon :icon="peopleOutline" slot="start" class="icon2mat"></ion-icon>
                            <ion-label>
                              <ion-title slot="start" class="titulo" color="light">Personas</ion-title>
                            </ion-label>
                          </ion-item>
                          <ion-item color="primary">
                            <ion-icon :icon="chevronForwardOutline" slot="end" class="icon1mat"></ion-icon>
                          </ion-item>
                        </ion-card>
                      </router-link>
                    </ion-col>
                </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-50{
  margin-bottom: 60px;
}
.lados{
  margin-top: 20px;
  margin-bottom: 20px;
}
.fullheight{
  height: 100%; 
}
.left-move{
    padding-left: 200px;
}
.fullwidth{
  width: 100%; 
}
.img{
  width: 100%;
  height: 23vh;
}
.logo {
   display: block;
   margin: 0;
   width: 40%;
  }
.iconmat{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
.icon1mat{ 
    color: white; 
    font-size: 25px;
    margin-left: unset;
    margin-inline-start: 0px;
}
.icon2mat{ 
    color: white;
    margin-right: 0px; 
}
.titulo{
    margin-inline-start: -10px;
}
.perfil{ 
   color: white; 
   font-size: 35px;
   margin-inline-end: 16px; 
}
.fab{
    color: white; 
    font-size: 25px;
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ addOutline, fileTrayFullOutline, chevronForwardOutline, arrowBackOutline, megaphoneOutline, libraryOutline, documentsOutline, peopleOutline, bookOutline, documentOutline, readerOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { addOutline, slideOpts, fileTrayFullOutline, chevronForwardOutline, arrowBackOutline, megaphoneOutline, libraryOutline, documentsOutline, peopleOutline, bookOutline, documentOutline, readerOutline } 
  }
});
</script>