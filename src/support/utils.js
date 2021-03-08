import { toastController } from '@ionic/vue';
import store from '@/store';

export const showToast = async (message) => {
    const toast = await toastController
        .create({
            message: message,
            duration: 2000
        })
    return toast.present();
}

export const setLocale = (language) => {
    console.log(language);
    return store.commit('mutateLanguage', language);
}
