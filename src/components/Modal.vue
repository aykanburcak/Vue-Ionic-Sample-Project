<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ company.name }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content className="ion-padding">
    <ion-item>
      <ion-label>
        <h3>{{ $t('pages.companies.transactionFee') }}</h3>
        <p>{{ company.transaction_fee }} $</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>
        <h3>{{ $t('pages.companies.cancellationFee') }}</h3>
        <p>{{ company.cancel_transaction_fee }} $</p>
      </ion-label>
    </ion-item>
    <ion-item>
      <ion-label>
        <h3>{{ $t('pages.companies.dailyFee') }}</h3>
        <p>{{ company.daily_fee }} $</p>
      </ion-label>
    </ion-item>
  </ion-content>
</template>

<script>
import {IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    company: {type: Object},
  },
  components: {IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem}
});
</script>
