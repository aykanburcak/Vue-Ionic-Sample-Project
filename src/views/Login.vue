<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center">{{ $t('pages.login.title') }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding login-page">
      <v-form :initialValues="formData" @submit="onSubmit">
        <ion-item>
          <ion-label position="stacked">
            {{ $t('pages.login.form.email') }}
          </ion-label>
          <v-field name="email" v-slot="{ field }" :rules="email">
            <ion-input v-bind="field" name="email"></ion-input>
          </v-field>
        </ion-item>
        <v-error-message name="email" class="error-message"/>
        <ion-item>
          <ion-label position="stacked">
            {{ $t('pages.login.form.password') }}
          </ion-label>
          <v-field name="password" v-slot="{ field }" :rules="required">
            <ion-input v-bind="field" name="password"></ion-input>
          </v-field>
        </ion-item>
        <v-error-message name="password" class="error-message"/>
        <ion-button expand="full" type="submit" color="secondary">
          {{ $t('pages.login.form.login') }}
        </ion-button>
      </v-form>
    </ion-content>
    <Footer/>
  </ion-page>
</template>

<script>
import { IonPage, IonItem, IonLabel, IonButton, IonInput, IonContent, IonTitle, IonToolbar, IonHeader} from '@ionic/vue';
import * as V from 'vee-validate/dist/vee-validate';
import { defineRule } from 'vee-validate/dist/vee-validate';
import { email, required } from '@vee-validate/rules';
import Login from '@/api/Login';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'
import { showToast } from '@/support/utils'
import Footer from '@/components/Footer.vue';

export default {
  name: "Login",
  components: {
    IonPage,
    IonItem,
    IonLabel,
    IonButton,
    IonInput,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    VField: V.Field,
    VForm: V.Form,
    VErrorMessage: V.ErrorMessage,
    Footer,
  },
  setup() {
    defineRule('email', email);
    defineRule('required', required);
    const router = useRouter();
    const store = useStore();

    const formData = {};
    const onSubmit = (formData) => {
      Login.post(
          {
            email: formData.email,
            password: formData.password,
          },
      ).then((response) => {
        store.commit('auth/mutateToken', response.data.data.token);
        router.go({
          name: 'Companies',
        })
        showToast('Success');
      });
    }

    return {
      router,
      formData,
      onSubmit,
      email,
      required,
    }
  },
  data() {
    return {
      message: '',
      form: {
        username: "",
        password: ""
      },
    };
  },
}
</script>

<style scoped>

</style>
