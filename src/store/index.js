import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    days: ["monday", "tuesday", "wednesday", "thursday"],
    hours: ["18:30", "19:30", "20:30"],
    players: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
