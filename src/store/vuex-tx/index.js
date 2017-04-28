import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default{
  // modules: {}
  state: {
    count: 0
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    }
  },
  getters: {
    count: state => {
      return state.count;
    }
  }
};
