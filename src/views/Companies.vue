<template>
  <ion-page>
    <Header/>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-list-header>
          {{ $t('pages.companies.title') }}
        </ion-list-header>
        <ion-item v-for="company in companyList" v-bind:key="company.id">
          <ion-label>
            <h2>{{ company.name }}</h2>
            <h3 v-if="company.owner">{{ company.owner.name }}</h3>
            <p>{{ $t('pages.companies.dailyFee') }}: {{ company.daily_fee }}</p>
          </ion-label>
          <ion-button color="secondary" slot="end" @click="openDetailsModal(company)">
            {{ $t('pages.companies.seeDetails') }}
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
    <Footer/>
  </ion-page>
</template>

<script>
import { mapState } from 'vuex';
import {IonPage, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonButton, modalController} from '@ionic/vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: "Companies",
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonButton,
    Header,
    Footer,
  },
  computed: {
    ...mapState('companies', ['companyList']),
  },
  ionViewWillEnter() {
    this.$store.dispatch('companies/getCompanies');
  },
  methods: {
    async openDetailsModal(company) {
      console.log(company);
      const modal = await modalController
          .create({
            component: Modal,
            componentProps: {
              company: company,
            },
          })
      return modal.present();
    }
  }
}
</script>

<style scoped>

</style>
