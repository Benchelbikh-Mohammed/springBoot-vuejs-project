import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import event from './modules/event';
import map from './modules/map';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: { auth, event, map },
});
