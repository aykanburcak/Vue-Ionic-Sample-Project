<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <ion-list id="inbox-list">
        <img src="@/assets/images/logo.png" class="logo"/>
        <ion-menu-toggle auto-hide="false" v-for="(menuItem, i) in appPages" :key="i">
          <ion-item
              @click="selectedIndex = i"
              router-direction="root"
              :router-link="menuItem.url"
              lines="none"
              detail="false"
              class="hydrated" :class="{ selected: isSelected(menuItem.url) }">
            <ion-icon
                slot="start"
                :ios="menuItem.iosIcon"
                :md="menuItem.mdIcon">
            </ion-icon>
            <ion-label>
              {{ menuItem.title }}
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle} from "@ionic/vue";
import {
  businessOutline,
  albumsOutline,
} from 'ionicons/icons';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: "SideMenu",
  components: {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
  },
  setup() {
    const selectedIndex = ref(0);
    const route = useRoute();
    const appPages = [
      {
        title: 'Companies',
        url: '/',
        iosIcon: businessOutline,
        mdIcon: businessOutline
      },
      {
        title: 'Inventories',
        url: '/inventories',
        iosIcon: albumsOutline,
        mdIcon: albumsOutline
      },
    ];
    return {
      selectedIndex,
      appPages,
      isSelected: (url) => url === route.path ? 'selected' : '',
    }
  }
}
</script>

<style scoped>

</style>
