import apiClient from './index';

export default {
    login(credentials) {
        return apiClient.post('/login', credentials);
    },

    register(credentials) {
        return apiClient.post('/register', credentials);
    },
};
