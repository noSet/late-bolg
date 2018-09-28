import Vue from "vue";
import * as Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import state, { IState } from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const vuexLocal: VuexPersistence<IState, Vuex.Payload> = new VuexPersistence({
  storage: window.localStorage
});

const store: Vuex.Store<IState> = new Vuex.Store<IState>({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  plugins: [vuexLocal.plugin]
});

export default store;
