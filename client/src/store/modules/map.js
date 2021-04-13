export default {
    state: { lastLng: null, lastLat: null },
    mutations: {
        SET_LATLNG(state, { lat, lng }) {
            state.lastLat = lat;
            state.lastLng = lng;
        },
    },
    actions: {
        setLatLng({ commit }, payload) {
            commit('SET_LATLNG', payload);
        },
    },
};
