import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


export default new Vuex.Store({
  // modules: {}
  state: {
    count: 0
  },
  mutations: {
    addCount(state) {
      state.count++;
    },
    subtract(state) {
      state.count--;
    }
  },
  getters: {
    myCount: state => {
      return state.count;
    }
  }
});
