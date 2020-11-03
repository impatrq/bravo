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
          <ion-input type="text" id="email" v-model="email" @blur="validaremail"></ion-input>
        </ion-item>
      </ion-list>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
//import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'login',
  components: { /*ExploreContainer,*/ IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  methods: {
  }
}
/*

  ({

el: '#app',
data: {
    
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

  },

methods: {

validaremail: function(){
  
  var arroba = this.email.includes("@");
  var punto = this.email.includes(".");

  console.log(arroba, punto);

  this.altoemail = (!arroba || !punto) ? true: false;
},

validarcontra: function(){

console.log(this.contra)

var num =  /[0-9]/g;
const validacion = this.contra.match (num);
//console.log ("validacion", validacion);
//console.log (num);

var mayus = /[A-Z]/g;
const validacion2 = this.contra.match (mayus);
//console.log ("validacion2", validacion2);

var min = /[a-z]/g;
const validacion3 = this.contra.match (min);

if(validacion === null || validacion2 === null || validacion3 === null){

  this.altocontra = true;
}

else{

this.altocontra = false;

}
  },
    },

  created() { 
     // console.log("reviso usuario:", localStorage.getItem("usuario"));

    if(localStorage.getItem("usuario")) {
      const usuario = JSON.parse (localStorage.getItem("usuario"));
       this.nombre = usuario.nombre;
       this.apellido = usuario.apellido;
       this.dni = usuario.dni;
       this.matricula = usuario.matricula;
       this.email2 = usuario.email2;
    }
  },

  watch: {

    nombre(nuevoNombre)  {
      //console.log(nuevoNombre);

      const usuario = {
        nombre: nuevoNombre,
        apellido: this.apellido,
        dni: this.dni,
        matricula: this.matricula,
        email2: this.email2,
        
      }

      localStorage.setItem("usuario", JSON.stringify (usuario));
    
    },

    apellido(nuevoApellido)  {
      //console.log(nuevoApellido);

      const usuario = {
        nombre: this.nombre,
        apellido: nuevoApellido,
        dni: this.dni,
        matricula: this.matricula,
        email2: this.email2,
      }
      localStorage.setItem("usuario", JSON.stringify (usuario));

    },

    dni(nuevoDni)  {
      //console.log(nuevoDni);

      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        dni: nuevoDni,
        matricula: this.matricula,
        email2: this.email2,
        
      }
      localStorage.setItem("usuario", JSON.stringify (usuario));

    },


      email2(nuevoEmail)  {
      //console.log(nuevoEmail);

      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        dni: this.dni,
        matricula: this.matricula,
        email2: nuevoEmail,
        
      }
      localStorage.setItem("usuario", JSON.stringify (usuario));

    },



      matricula(nuevaMatricula)  {
      //console.log(nuevaMatricula);

      const usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        dni: this.dni,
        matricula: nuevaMatricula,
        email2: this.email2,
        
      }
      localStorage.setItem("usuario", JSON.stringify (usuario));

    },

  }

    });
*/

</script>