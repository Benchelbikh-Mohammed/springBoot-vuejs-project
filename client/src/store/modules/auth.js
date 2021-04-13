import AuthService from '@/services/AuthService.js';
import apiClient from '@/services';

export default {
    state: { user: null },
    mutations: {
        SET_USER_DATA(state, data) {
            state.user = data;
            localStorage.setItem('user', JSON.stringify(data));
            apiClient.defaults.headers.authorization = `Bearer ${data.token}`;
        },
        CLEAR_USER_DATA() {
            localStorage.removeItem('user');
            location.reload();
        },
    },
    actions: {
        register({ commit }, credentials) {
            return AuthService.register(credentials).then(
                ({ data: { user } }) => {
                    commit('SET_USER_DATA', user);
                },
            );
        },

        login({ commit }, credentials) {
            return AuthService.login(credentials).then(({ data: { user } }) => {
                commit('SET_USER_DATA', user);
            });
        },

        logout({ commit }) {
            commit('CLEAR_USER_DATA');
        },
    },
    getters: {
        loggedIn(state) {
            return !!state.user;
        },
    },
};
