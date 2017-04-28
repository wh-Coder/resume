/**
 * Created by Administrator on 2017-04-28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import answer from './answer';
import vuexTx from './vuex-tx';

export default new Vuex.Store({
  modules: {
    answer,
    vuexTx
  }
});


