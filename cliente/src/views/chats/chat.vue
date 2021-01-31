<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title color="light">Chat</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row class="ion-justify-content-center fullheight">
        <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
          <ion-searchbar placeholder="Buscar"></ion-searchbar>
      <ion-list>
        <ion-list-header>
          Conversaciones Recientes
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 1</h2>
            <h3>Curso:</h3>
            <p>Qué tareas tienes...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/student2.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 2</h2>
            <h3>Curso:</h3>
            <p>Hay que hablar sobre el proyecto...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 3</h2>
            <h3>Curso:</h3>
            <p>Hola...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor 1</h2>
            <h3>Materia:</h3>
            <p>Pendiente entrega de tarea...</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-list>
        <ion-list-header>
          En Línea
        </ion-list-header>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/student2.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 4</h2>
            <h3>Curso:</h3>
            <p>Hay una evaluación pronto...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/student.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 5</h2>
            <h3>Curso:</h3>
            <p>No puedo, estoy ocupado...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/student2.png">
          </ion-avatar>
          <ion-label>
            <h2>Alumno 6</h2>
            <h3>Curso:</h3>
            <p>Hola, necesito una tarea de literatura...</p>
          </ion-label>
        </ion-item>

        <ion-item>
          <ion-avatar slot="start">
            <img src="@/components/img/teacher.png">
          </ion-avatar>
          <ion-label>
            <h2>Profesor 2</h2>
            <h3>Materia:</h3>
            <p>Tarea entregada y aprobada...</p>
          </ion-label>
        </ion-item>
      </ion-list>
        </ion-col>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<style>

.fullwidth{
  width: 100%; 
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonButtons, IonBackButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow, IonButtons, IonBackButton},
  

});
</script>