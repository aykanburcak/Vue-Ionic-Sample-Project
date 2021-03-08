import {createRouter, createWebHistory} from '@ionic/vue-router';
import axios from 'axios';
import store from '../store';
import Companies from '@/views/Companies';

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['auth/isAuthenticated']) {
        next();
        return;
    }
    next('/');
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/isAuthenticated']) {
        axios.defaults.headers.Authorization = `Bearer ${store.getters['auth/token']}`;
        next();
        return;
    }
    next('/login');
};

const routes = [
    {
        path: '/',
        name: 'Companies',
        component: Companies,
        beforeEnter: ifAuthenticated,
        meta: {
            reload: true,
        },
    },
    {
        path: '/inventories',
        name: 'Inventories',
        component: () => import ('../views/Inventories.vue'),
        beforeEnter: ifAuthenticated,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import ('../views/Login.vue'),
        beforeEnter: ifNotAuthenticated,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
