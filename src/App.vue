<template>
  <IonApp>
    <IonSplitPane content-id="main-content" :disabled="!isAuthenticated">
      <SideMenu></SideMenu>
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script>
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent } from 'vue';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { useI18n } from 'vue-i18n';
import SideMenu from '@/components/SideMenu.vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonSplitPane,
    SideMenu,
  },
  setup() {
    const {t, locale} = useI18n();
    const store = useStore();
    const isAuthenticated = !!store.state.auth.token;
    const language = store.state.language;
    return {
      archiveOutline,
      archiveSharp,
      bookmarkOutline,
      bookmarkSharp,
      heartOutline,
      heartSharp,
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      t,
      locale,
      isAuthenticated,
      language,
    }
  },
});
</script>

<style lang="scss">
@import 'theme/project.scss';
</style>
