<template>
  <ion-footer>
    <ion-toolbar>
      <ion-title class="ion-text-center">
        <div class="language-changer">
          <div class="input-group"
               v-for="(lang, i) in languages"
               :key="`Lang${i}`">
            <input
                type="radio"
                :id="lang.code"
                :value="lang.code"
                v-model="$i18n.locale"
                @change="setLanguage(lang.code)">
            <label :for="lang.code">{{ lang.label }}</label>
          </div>
        </div>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
import { IonTitle, IonToolbar, IonFooter } from '@ionic/vue';
import { useStore } from 'vuex'

export default {
  name: 'Footer',
  components: {
    IonTitle,
    IonToolbar,
    IonFooter
  },
  setup() {
    const store = useStore();
    return {
      setLanguage: (language) => store.commit('mutateLanguage', language),
    }
  },
  data() {
    return {
      languages: [
        {
          label: 'English',
          code: 'en'
        },
        {
          label: 'Espanol',
          code: 'es'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
