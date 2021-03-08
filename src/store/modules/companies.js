import Companies from '@/api/Companies';

const initialState = {
  companyList: [],
  companyUsers: [],
};

const actions = {
  getCompanies({ commit }) {
    Companies.get().then((response) => {
      commit('mutateCompanies', response.data.data);
    });
  },
};

const getters = {
};

const mutations = {
  mutateCompanies(state, response) {
    state.companyList = response;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
