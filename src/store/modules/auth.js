import router from '@/router';

const initialState = {
    token: localStorage.getItem('user-token') || '',
};

const actions = {};

const getters = {
    isAuthenticated: (state) => !!state.token,
    token: (state) => state.token,
};

const mutations = {
    mutateToken(state, response) {
        state.token = response;
        localStorage.setItem('user-token', response);
    },
    mutateLogout(state) {
        state.token = '';
        localStorage.removeItem('user-token');
        router.go({
            name: 'Login',
        });
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
