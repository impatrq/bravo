<template>
<ion-page>

<ion-header translucent>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    </ion-header>

<ion-content :fullscreen="true">

  <ion-row>
    <ion-col>

        <ion-list>

          <ion-list-header>
            <ion-text><h4>Profesores</h4></ion-text>
          </ion-list-header>

          <ion-button color="background-grey" href="/tabs/searchProfBas" expand="block">Ciclo Básico</ion-button>

          <ion-button color="background-grey" href="/tabs/searchProfAvio" expand="block">Ciclo Superior Aviónica</ion-button>

          <ion-button color="background-grey" href="/tabs/searchProfAero" expand="block">Ciclo Superior Aeronáutica</ion-button>
                    
        </ion-list> 


        
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>

        <ion-list>

          <ion-list-header>
            <ion-text><h4>Preceptoría</h4></ion-text>
          </ion-list-header>

          <ion-button color="background-grey" expand="block">Ciclo Básico</ion-button>

          <ion-button color="background-grey" expand="block">Ciclo Superior Aviónica</ion-button>

          <ion-button color="background-grey" expand="block">Ciclo Superior Aeronáutica</ion-button>
                    
        </ion-list> 


        
    </ion-col>
  </ion-row>

  <ion-row>
    <ion-col>

        <ion-list>

          <ion-list-header>
            <ion-text><h4>Cursos</h4></ion-text>
          </ion-list-header>

         <ion-button color="background-grey" expand="block">Ciclo Básico</ion-button>
         
         <ion-button color="background-grey" expand="block">Ciclo Superior Aviónica</ion-button>

         <ion-button color="background-grey" expand="block">Ciclo Superior Aeronáutica</ion-button>

        </ion-list> 


        
    </ion-col>
    </ion-row>

    <ion-row>
      <ion-col>

          <ion-list>

            <ion-list-header>
              <ion-text><h4>Pañol</h4></ion-text>
            </ion-list-header>

          <ion-button color="background-grey" expand="block">Ciclo Superior</ion-button>

          </ion-list> 


          
    </ion-col>
    </ion-row>

</ion-content>
</ion-page>
</template>

<style>

.background-grey{
  background-color: rgb(50, 50, 50);
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
  

});
</script>