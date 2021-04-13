import EventService from '@/services/EventService.js';

export default {
    state: { events: [], totalPages: 0, event: {}, perPage: 3 },
    mutations: {
        ADD_EVENT(state, event) {
            state.events.push(event);
        },

        SET_EVENTS(state, events) {
            state.events = events;
        },

        SET_TOTAL(state, total) {
            state.totalPages = total;
        },

        SET_EVENT(state, event) {
            state.event = event;
        },
    },
    actions: {
        createEvent({ commit, dispatch }, event) {
            return EventService.postEvent(event)
                .then(() => {
                    commit('ADD_EVENT', event);
                    const notification = {
                        type: 'success',
                        message: `event has been created succefully`,
                    };

                    dispatch('notification/add', notification, { root: true });
                })
                .catch(err => {
                    const notification = {
                        type: 'error',
                        message: `there was an error while submitting event`,
                    };

                    dispatch('notification/add', notification, { root: true });
                    throw err;
                });
        },

        fetchEvents({ commit, dispatch }) {
            return EventService.getEvents()
                .then(({ data }) => {
                    // commit('SET_TOTAL', res.headers['x-total-count']);
                    commit('SET_EVENTS', data.reunion);
                })
                .catch(err => {
                    const notification = {
                        type: 'error',
                        message: `there was a problem while fetching events: ${err.message}`,
                    };

                    dispatch('notification/add', notification, { root: true });
                });
        },

        fetchEvent({ commit, getters }, id) {
            const event = getters.getEventByID(id);
            if (event) {
                commit('SET_EVENT', event);
                return event;
            } else {
                return EventService.getEvent(id).then(({ data }) => {
                    commit('SET_EVENT', data.reunion);
                    return data.reunion;
                });
            }
        },
    },
    getters: {
        getEventByID: ({ events }) => id =>
            events.find(event => event.id === id),
    },
};
