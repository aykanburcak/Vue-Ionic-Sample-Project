import {createApp} from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import store from './store';
import { createI18n } from 'vue-i18n';
import Api from './api/Api';
import en from './locales/en';
import es from './locales/es';

import {IonicVue} from '@ionic/vue';
import { showToast } from '@/support/utils'

Api.init();

const i18n = createI18n({
    messages: {
        en: en,
        es: es,
    },
    locale: store.state.language || 'en',
    fallbackLocale: store.state.language || 'en',
})

axios.interceptors.response.use((response) => response, (error) => {
    const { response } = error;
    showToast(response.data.message);
    if (response.status === 401) {
        localStorage.removeItem('user-token');
        store.commit('auth/mutateToken', '');
        axios.defaults.headers.Authorization = '';
    }
    return Promise.reject(error);
});

const app = createApp(App)
    .use(IonicVue)
    .use(router);

router.isReady().then(() => {
    app.use(store)
    app.use(i18n)
    app.mount('#app');
});
