import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getDate, formatDate } from '../util';

Vue.use(Vuex);

const key = formatDate(getDate());

const store = new Vuex.Store({
  state: {
    punches: {}
  },
  actions: {

  },
  mutations: {
    punchIn(state, time, notes) {
      state.punches[key] = {
        punchIn: time,
        notes
      };
    },
    breakOut(state, time, notes) {
      if (state.punches[key]){
        state.punches[key] = {...state.punches[key], breakOut: time, notes};
      } else {
        alert('You must punch in first!');
      }
    },
    breakIn(state, time, notes) {
      if (state.punches[key]){
        state.punches[key] = {...state.punches[key], breakIn: time, notes};
      } else {
        alert('You must punch in first!');
      }
    },
    punchOut(state, time, notes) {
      if (state.punches[key]){
        state.punches[key] = {...state.punches[key], punchOut: time, notes};
      } else {
        alert('You must punch in first!');
      }
    }
  },
  getters: {
    all: (state, prop) => {
      return state.punches;
    }
  }
});

export default store;
