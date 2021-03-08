<template>
  <ion-page>
    <Header/>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-list-header>
          {{ $t('pages.inventories.title') }}
        </ion-list-header>
        <ion-item v-for="inventory in inventoryList" v-bind:key="inventory.id">
          <ion-label>
            <h2>{{ inventory.name }}</h2>
            <h3>{{ inventory.code }}</h3>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
    <Footer/>
  </ion-page>
</template>

<script>
import { mapState } from 'vuex';
import {IonPage, IonContent, IonItem, IonLabel, IonList, IonListHeader} from '@ionic/vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "Inventories",
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    Header,
    Footer,
  },
  computed: {
    ...mapState('inventories', ['inventoryList']),
  },
  ionViewWillEnter() {
    this.$store.dispatch('inventories/getInventories');
  },
}
</script>

<style scoped>

</style>
