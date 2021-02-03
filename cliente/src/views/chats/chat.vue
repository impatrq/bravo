<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar color="primary">
        <router-link to="/home2" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Chat</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-row class="ion-justify-content-center fullheight">
        <ion-col size-xl="4" size-sm="10" class="ion-align-self-center">
          <ion-searchbar placeholder="Buscar"></ion-searchbar>
      <ion-list>
        <ion-list-header>
          Conversaciones recientes
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

      <ion-list class="margin-buttom-50">
        <ion-list-header>
          En línea
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
.margin-buttom-50{
  margin-bottom: 50px;
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
import { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent, IonCol, IonRow },
    setup() {

    return { arrowBackOutline } 
  }

});
</script>