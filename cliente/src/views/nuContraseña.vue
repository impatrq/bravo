<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      
<div id="app" class="hero is-fullheight">

    <div class="hero-body">

      <div class="container">

        <div class="columns"> 

          <div class="column is-full is-4-desktop is-offset-4-desktop">
            
            <h1 class="title">Nueva contraseña</h1>
            <form>

            <!-- Entrada de la contraseña -->

              <div class="field">

                <div class="control">
                  
                  <ion-input type="password" placeholder="Nueva Contraseña" class="input is-success"></ion-input>
                  <p class="help is-success"></p>

                </div>

              </div>

              <!-- Repetir contraseña -->

              <div class="field">

                <div class="control">
                  
                  <ion-input type="password" placeholder="Repetir contraseña" class="input is-danger"> </ion-input>
                  <p class="help is-danger">La contraseña no coincide</p>

                </div>

              </div>
              
            <!--Aceptar-->

              <div class="field">

                <div class="control">

                  <ion-button expand="block" class="button is-outlined is-link is-fullwidth">ACEPTAR</ion-button>

                </div>

              </div>

            <!--Recuperación de cuenta-->

              <div class="field">

                <div class="control">

                  <a href="Inicio.html">¿Ya te registraste? Inicie sesión aquí.</a>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </div>
    
  </div>


<script src="https://cdn.jsdelivr.net/npm/vue"></script>


      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab2',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>