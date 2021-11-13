import { createStore } from 'vuex';

export default createStore({
  state: {
    selectedPersona: null,
  },
  mutations: {
    SET_SELECTED_PERSONA(state, persona) {
      state.selectedPersona = persona;
    },
  },
  actions: {
    selectPersona({ commit }, persona) {
      commit('SET_SELECTED_PERSONA', persona);
    },
  },
  modules: {
  },
});
