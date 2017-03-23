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
  mutations: {
    punchIn(state, time) {
      if (!state.punches[key]) {
        state.punches[key] = { punchIn: time };
      }
    },
    breakOut(state, time) {
      if (state.punches[key]){  
        if (!state.punches[key].breakOut) {
          state.punches[key] = { ...state.punches[key], breakOut: time };
        } else {
          alert('You\'ve already punched out for lunch');
        } 
      } else {
        alert('You must punch in first!');
      }
    },
    breakIn(state, time) {
      if (state.punches[key]){
        if (!state.punches[key].breakIn) {
          state.punches[key] = { ...state.punches[key], breakIn: time };
        } else {
          alert('You\'ve already punched back in from lunch');
        } 
      } else {
        alert('You must punch in first!');
      }
    },
    punchOut(state, time) {
      if (state.punches[key]){
        state.punches[key] = { ...state.punches[key], punchOut: time };
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
