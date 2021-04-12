import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
    },
    timeout: 10000,
});

export default apiClient;
