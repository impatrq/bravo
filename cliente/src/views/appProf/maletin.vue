<style>
.margin-buttom-60{
  margin-bottom: 60px;
}
.fullheight{
  height: 100%; 
}
.width-95per{
  width: 95%; 
}
.background-grey{
  background-color: rgb(50, 50, 50);
}
.background-white{
background-color: #808289 ;
}

</style>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide} from '@ionic/vue';
import { defineComponent } from 'vue';
import ExploreContainerVue from '../../components/ExploreContainer.vue';
export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonSlide },
  setup() {
    
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts } 
    

    //FALTA LÓGICA DEL INFINITE SCROLL
  }
});
</script>