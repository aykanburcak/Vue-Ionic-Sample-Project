import Inventories from '@/api/Inventories';

const initialState = {
    inventoryList: [],
};

const actions = {
    getInventories({commit}) {
        Inventories.get().then((response) => {
            commit('mutateInventories', response.data.data);
        });
    },
};

const getters = {};

const mutations = {
    mutateInventories(state, response) {
        state.inventoryList = response;
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations,
};
