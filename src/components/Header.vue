<template>
  <ion-header translucent>
    <ion-toolbar color="primary">
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button fill="clear" @click="logout">
          Logout
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import { IonHeader, IonToolbar, IonButtons, IonButton, IonMenuButton } from '@ionic/vue';
import { useStore } from 'vuex'

export default {
  name: 'Header',
  components: {
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonMenuButton
  },
  setup() {
    const store = useStore();
    return {
      logout: () => store.commit('auth/mutateLogout'),
    }
  },
}
</script>

<style scoped>

</style>
