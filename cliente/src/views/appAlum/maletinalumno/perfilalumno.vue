<template>
  <ion-page>
    <ion-header translucent class="margin-buttom-40">
      <ion-toolbar color="primary">
        <router-link to="/maletin2" slot="start"><ion-icon :icon="arrowBackOutline" class="icon"></ion-icon></router-link>
        <ion-title color="light">Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
            <ion-content :fullscreen="true">
                <ion-row class="ion-justify-content-center fullheight">
                    <ion-col size-xl="4" size-sm="10">
                      <ion-card class="position img-box">
                          <img src="@/components/img/fotoperfil.jpg">
                      </ion-card>
                       <ion-card class="margin-top-40 margin-buttom-60">
                         <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">Nombre:</h4>
                              <h2>Mirko Nicolas</h2>
                            </ion-label>
                         </ion-item >
                         <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">Apellido:</h4>
                              <h2>Sánchez</h2>
                            </ion-label>
                         </ion-item>
                         <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">Número de matrícula:</h4>
                              <h2>0000</h2>
                            </ion-label>
                         </ion-item>
                         <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">Curso:</h4>
                              <h2>7mo</h2>
                            </ion-label>
                         </ion-item>
                          <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">División:</h4>
                              <h2>1ra</h2>
                            </ion-label>
                          </ion-item>
                          <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">Especialidad:</h4>
                              <h2>Aviónica</h2>
                            </ion-label>
                          </ion-item>
                         <ion-item color="primary">
                           <ion-label>
                              <h4 class="gris">Correo Electrónico:</h4>
                              <h2>mirkosanchez@hotmail.com</h2>
                            </ion-label>
                         </ion-item>
                        </ion-card>
                      </ion-col>
                    </ion-row>
            </ion-content>
    </ion-page>
</template>

<style>
.margin-buttom-60{
  margin-bottom: 60px;
}
.margin-buttom-40{
  margin-bottom: 40px;
}
.margin-top-40{
  margin-top: 30px;
}
.gris{
    color:grey;
}
.fullheight{
  height: 100%; 
}
.fullwidth{
  width: 100%; 
}
.position{
    display: flex;
    justify-content: center;
    margin: auto;
}
.img-box{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
}
.icon{ 
   color: white; 
   font-size: 25px;
   margin-inline-start: 16px; 
}
</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import{ arrowBackOutline, personCircleOutline }from 'ionicons/icons';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonContent },
    setup() {

    return { arrowBackOutline, personCircleOutline } 
  }

});
</script>
