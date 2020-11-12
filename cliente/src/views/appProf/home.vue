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

      <ion-slide>
        <ion-card class="ion-padding-top margin-buttom-60">
          <ion-item class="img"><img src="@/components/img/not1.png"></ion-item>
          <ion-card-content> Titulo de Noticia 1 </ion-card-content>
        </ion-card>
      </ion-slide>            
      <ion-slide>
        <ion-card class="ion-padding-top margin-buttom-60">
          <ion-item class="img"><img src="@/components/img/not2.png"></ion-item>
          <ion-card-content> Titulo de Noticia 2 </ion-card-content>
        </ion-card>
      </ion-slide>
      <ion-slide>
        <ion-card class="ion-padding-top margin-buttom-60">
          <ion-item class="img"><img src="@/components/img/not3.png" ></ion-item>
          <ion-card-content> Titulo de Noticia 3 </ion-card-content>
        </ion-card>
      </ion-slide>

    </ion-slides>

<!--Comentario incompleto--> 
  
<!--ion-content>
  <ion-list>
    <ion-list-header>
      <ion-label>Comentarios</ion-label>
    </ion-list-header>
  </ion-list>
  <ion-infinite-scroll threshold="100px" id="infinite-scroll">
    <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="Loading more data..."></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</ion-content-->
          
    <ion-slides pager="true" :options="slideOpts" class="margin-buttom-60">    
      <ion-slide class="margin-buttom-60">
        <ion-list class="width-95per">

          <ion-list-header>
            <ion-text class="ion-text-center width-95per"><h4>Hoy</h4></ion-text>
          </ion-list-header>

          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
                    
        </ion-list>                
      </ion-slide>
      <ion-slide class="margin-buttom-60">                
        <ion-list class="width-95per">

          <ion-list-header>
            <ion-text class="ion-text-center width-95per"><h4>Mañana</h4></ion-text>
          </ion-list-header>

          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 1</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 2</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 3</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
          <ion-card>
            <ion-card-header class="background-grey">                      
              <ion-card-title class="ion-text-capitalize ion-text-start">Materia 4</ion-card-title>
              <ion-card-subtitle class="ion-text-end">Curso</ion-card-subtitle>
            </ion-card-header>
          </ion-card>
                    
        </ion-list>                
      </ion-slide>
    </ion-slides>

  </ion-col>
  </ion-row>

</ion-content>
</ion-page>
</template>

<style>
.margin-buttom-60{
  margin-bottom: 60px;
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
.img{
  width: 100%;
  height: 23vh;
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