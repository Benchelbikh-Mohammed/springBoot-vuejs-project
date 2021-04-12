import apiClient from './index';

export default {
    getEvents() {
        return apiClient.get(`/reunions`);
    },
    getEvent(id) {
        return apiClient.get(`/reunions/${id}`);
    },

    postEvent(event) {
        return apiClient.post('/reunions', event);
    },
};
