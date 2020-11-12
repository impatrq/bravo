<template>
<ion-page>

<ion-header>
  <ion-toolbar><img src="@/components/img/headerLogo.png" class="ion-padding"></ion-toolbar>
</ion-header>

<ion-content :fullscreen="true">
  <ion-header collapse="condense">
    <ion-toolbar><ion-title size="large">Home</ion-title></ion-toolbar>
  </ion-header>

  <ion-row class="ion-justify-content-center fullheight">
  <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">

    <ion-slides pager="true" :options="slideOpts">  
          <ion-slides pager="true" :options="slideOpts">
    <ion-slides pager="true" :options="slideOpts">  

            <!--novedad 1-->
            <ion-slide>
                <ion-card class="card">
                    <ion-item  class="novedad"><img src="@/components/img/not1.png"></ion-item>
                    <ion-card-content> Titulo de Noticia 1 </ion-card-content>
                </ion-card>
            </ion-slide>
            <!--novedad 2-->
            <ion-slide>
                <ion-card class="card">
                    <ion-item class="novedad"><img src="@/components/img/not2.png"></ion-item>
                    <ion-card-content> Titulo de Noticia 2 </ion-card-content>
                </ion-card>
            </ion-slide>
            <!--novedad 3-->
            <ion-slide>
                <ion-card class="card">
                    <ion-item  class="novedad"><img src="@/components/img/not3.png" ></ion-item>
                    <ion-card-content> Titulo de Noticia 3 </ion-card-content>
                </ion-card>
            </ion-slide>

          </ion-slides>

          <!--Comentario-->
          <ion-card>
              
              <!--ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">
    <ion-infinite-scroll-content
      loadingSpinner="bubbles"
      loadingText="Loading more data...">
                <ion-item>
                <ion-label>Pokémon Yellow</ion-label>
                </ion-item>
                <ion-item>
                <ion-label>Mega Man X</ion-label>
                </ion-item>
                <ion-item>
                <ion-label>The Legend of Zelda</ion-label>
                </ion-item>
                <ion-item>
                <ion-label>Pac-Man</ion-label>
                </ion-item>                
                <ion-item>
                <ion-label>Pac-Man</ion-label>
                </ion-item>                
                <ion-item>
                <ion-label>Pac-Man</ion-label>
                </ion-item><ion-item>
                <ion-label>Pac-Man</ion-label>
                </ion-item>                
                <ion-item>
                <ion-label>Pac-Man</ion-label>
                </ion-item>                
                <ion-item>
                <ion-label>Pac-Man</ion-label>
                </ion-item>
      </ion-infinite-scroll-content>
            </ion-infinite-scroll-->
      
                <!--ion-item>
                    <ion-text class="ion-padding-vertical">
                      <h5 class="ion-text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non congue odio, sed vehicula turpis. Morbi in vulputate urna. </h5>
                      <br>
                      <ion-label class="ion-text-end ion-text-wrap ion-text-capitalize ion-padding-buttom">Nombre de alumno</ion-label>
                    </ion-text>

                </ion-item--> 
  
                    

          </ion-card>

          <!--Dias cercanos-->
          <ion-card>
              
          </ion-card>

      </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<style>
.text-size-12{
  font-size: 12px;
}
.text-size-20{
  font-size: 20px;
}
.fullheight{
  height: 100%; 
}
.novedad{
  width: 100%;
  height: 30vh;
}
.scroll{
    overflow: scroll;
}
.card{
  padding-top: 20px;
  margin-bottom: 30px;
}
</style>

<script lang="ts">
/*import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'home',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow },
  methods: {
  }
}*/
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});

</script>