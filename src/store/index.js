import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    punches: {}
  },
  actions: {},
  mutations: {
  	punchIn(state, payload) {
  		
  	}
  },
  getters: {},
  modules: {}
});

console.log(store);
export default store;
