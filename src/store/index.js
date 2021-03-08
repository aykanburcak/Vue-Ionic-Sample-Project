import { createStore } from 'vuex';
import authModule from './modules/auth';
import companiesModule from './modules/companies';
import inventoriesModule from './modules/inventories';

const store = createStore({
    state:{
        language: localStorage.getItem('language') || 'en',
    },
    modules: {
        auth: authModule,
        companies: companiesModule,
        inventories: inventoriesModule,
    },
    mutations: {
        mutateLanguage(state, language) {
            state.language = language;
            localStorage.setItem('language', language);
        },
    }
});

export default store;
