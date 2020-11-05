<template>
  <ion-page>
    <!--ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header-->
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-list-header>
        Iniciar sessión
        </ion-list-header>
        <ion-item>
          <ion-label position="floating">Correo Electronico</ion-label>
          <ion-input type="text" id="email" v-model="email" @blur="validaremail(email)"></ion-input>
        </ion-item>
          <span v-if="altoemail" color="red"> Formato incorrecto </span>
          <span v-if="!email">Ej.: minombre@gmail.com</span>
        <br>
          <ion-item>
            <ion-label position="floating">Contraseña</ion-label>
            <ion-input type="password" id="contra" v-model="contra" @blur="validarcontra(contra)"></ion-input>
          </ion-item>
            <span v-if="!contra">(La contraseña requiere un mínimo de una mayúscula y un número)</span>
            <span v-if="altocontra" color="red"> Formato incorrecto </span>
      </ion-list>
      
      <ion-button expand="block" >INICIAR SESIÓN</ion-button>
        <br>
          <ion-router-link to="olContraseña.vue">¿Olvidó su contraseña?</ion-router-link>
        <br>
          <ion-router-link to="registroCargo.html">¿No tiene cuenta? Registrese aquí.</ion-router-link>
      <!--div id="app" class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <div class="columns"> 
            <div class="column is-full is-4-desktop is-offset-4-desktop">
              <h1 class="title">Iniciar Sesión</h1>
              <form>
                <div id="app">
                  <div class="field">   
                    <div class="control is-hero-fullscreen">
                      <ion-input type="text" id="email" v-model="email" @blur="validaremail" placeholder="Correo Electronico" class="input is-danger"></ion-input>
                      <span v-if="altoemail" color="red"> Formato incorrecto </span>
                      <span v-if="!email">Ej.: minombre@gmail.com</span>
                      <p class="help is-danger">Ingrese Un Correo Electronico</p>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <ion-input type="password" placeholder="Contraseña" id="contra" v-model="contra" @blur="validarcontra" class="input is-success"></ion-input>
                      <span v-if="!contra">(La contraseña requiere un mínimo de una mayúscula y un número)</span>
                      <span v-if="altocontra" color="red"> Formato incorrecto </span>
                      <p class="help is-success"></p>
                    </div>
                  </div>
                  <p class="help is-danger"></p>
                </div>
                <div class="field">
                  <div class="control">
                    <ion-button expand="block" >INICIAR SESIÓN</ion-button>
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <a href="olContraseña.html">¿Olvidó su contraseña?</a><br>
                    <a href="registroCargo.html">¿No tiene cuenta? Registrese aquí.</a>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div-->
      <!--ExploreContainer name="tab login" /-->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonListHeader } from '@ionic/vue';
import { App } from 'vue';

export default  {
  name: 'login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonListHeader, IonButton },
  data(){
    return{
      email: "",
      contra: "",
      altoemail: "",
      altocontra: "",
      usuario: {},
      nombre: "",
      apellido: "",
      dni: "",
      matricula: "",
      email2: "",
    }
  },
  methods: {
    validaremail: function(this: any, email: string){
      const arroba = this.email.includes("@");
      const punto = this.email.includes(".");
      console.log(arroba, punto);
      this.altoemail = (!arroba || !punto) ? true: false;
    }
  }
}
</script>